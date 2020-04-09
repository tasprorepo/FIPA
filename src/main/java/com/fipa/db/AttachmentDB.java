package com.fipa.db;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.fipa.dbinterface.DBInterface;
import com.fipa.util.ApplicationContextUtils;
import com.fipa.util.FipaConstant;

public class AttachmentDB {

	final Logger logger = LoggerFactory.getLogger(AttachmentDB.class);
	public Session getCurrHBSession(){ 
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();
		DBInterface dao = (DBInterface) appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);
		return dao.getCurrHiberSession();
	}

	

	public double getMaxAttachId(Object attachCls) {

		double attachId = 0;
		ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
		DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
		
		Object objMaxId = dao.fetchMaxId(attachCls, "docid");
		
		if(objMaxId.toString().equalsIgnoreCase("0")){
			attachId = 0 ;	
		}else{
			attachId = (Double)objMaxId;	
		}
		
		attachId = attachId + 1; 
		return attachId;
	}
	
	

public void saveCustAttDetails(Vector<?> vectAttchDetails, String strClientId) {
	// TODO Auto-generated method stub 
	
 
	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	List<String> attachIns = new ArrayList<String>(0);
	List<String> attachUpd = new ArrayList<String>(1);
	List<String> attachDel = new ArrayList<String>(1);
//	List attachDel = new ArrayList();

	int attachSize = vectAttchDetails.size();

	if (attachSize > 0) {
		attachIns = (List) vectAttchDetails.get(0);
		attachUpd = (List) vectAttchDetails.get(1);
		attachDel = (List) vectAttchDetails.get(2);
	}
 
	
	if (attachIns.size() > 0) {

		for (String insqry : attachIns) {			 
			String replacedStr=insqry.replace("<FNAID>", strClientId); 
			dao.executeNativeSQLQuery(replacedStr);
		}

		
		
	}// End if(insSize)
	
	if (attachUpd.size() > 0) {

		for (String updqry : attachUpd) {			 
			String replacedUpStr=updqry.replace("<FNAID>", strClientId); 
			dao.executeNativeSQLQuery(replacedUpStr);
		}

	}// End if(insSize)
 
	if (attachDel.size() > 0) {		
		for (String delqry : attachDel) {			 
			dao.executeNativeSQLQuery(delqry);
		}
		
		 
		  
	}

}



public ResultSet  downloadAttachment(String strAttachId) throws HibernateException{
	ResultSet attachDocList = null;

	ApplicationContext appCtx = ApplicationContextUtils.getApplicationContext();			
	DBInterface dao = (DBInterface)appCtx.getBean(FipaConstant.FP_DBIMP_BEAN);			
	
	String strWhrcondQry="select attch.DOCUMENT, attch.FILENAME,  attch.FILESIZE,  attch.FILETYPE FROM "+ FipaConstant.FIPA_ATTACH_DB_TBL+" attch ";
	
//	if(strAttachId.startsWith("FSSEMP")){
//		strWhrcondQry +=  "  where (attch.REFERENCE_ID)='"+strAttachId+"' and (attch.MODULE_REF)='EMPLOYEE'";
//	}else{
		strWhrcondQry +=  "  where (attch.DOCID)='"+strAttachId+"'";		
//	}
		logger.info(strWhrcondQry); 

	attachDocList = dao.downloadBFILE(strWhrcondQry );		  

	return  attachDocList;
}

	
}
