package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaAdvDeclare generated by hbm2java
 */
public class FnaAdvDeclare implements java.io.Serializable {

	private String advDecId;//
	private FnaSelfspouseDets fnaSelfspouseDets;//
	private String appAnalysisFor;//
	private String appPurpose;//
	private String appClientChoice;//
	private String appReplacePrdt;//
	private String amlLanguageUse;//
	private String amlIntprtExist;//
	private String amlIntprtName;//
	private String amlIntprtRelat;//
	private String amlIntprtNric;//
	private String amlIntprtMobile;//
	private String amlIntprtHome;//
	private String amlIntprtBenfflg;//
	private String amlIntprtTppflg;//
	private String amlIntprtPepflg;//
	private String amlIntprtRemarks;//
	private String amlBenfName;//
	private String amlBenfRelat;//
	private String amlBenfNric;//
	private String amlBenfIncno;//
	private String amlBenfJob;//
	private String amlBenfJobconty;//
	private String amlBenfAddr1;//
	private String amlBenfAddr2;//
	private String amlBenfPostal;//
	private String amlBenfConty;//
	private String amlTppName;//
	private String amlTppRelat;//
	private String amlTppNric;//
	private String amlTppIncno;//
	private String amlTppJob;//
	private String amlTppJobconty;//
	private String amlTppAddr1;//
	private String amlTppAddr2;//
	private String amlTppPostal;//
	private String amlTppConty;//
	private String amlTppPaymode;
	private String amlTppBank;//
	private String amlTppChqno;//
	private String amlTppMobile;//
	private String amlPepName;//
	private String amlPepRelat;//
	private String amlPepNric;//
	private String amlPepIncno;//
	private String amlPepJob;//
	private String amlPepJobconty;//
	private String amlPepAddr1;//
	private String amlPepAddr2;//
	private String amlPepPostal;//
	private String amlPepConty;//
	private String arNewRecomm;//
	private String srQ1Flg;//
	private String srQ2Flg;//
	private String srQ3Flg;//
	private String srQ4Flg;//
	private String srQ1Dets;//
	private String srRemarks;//
	private String cdAgreeFlg;//
	private String cdCcRemarks;//
	private String cdMrktPostal;//
	private String cdMrktEmail;//
	private String mgrAgreeFlag;//
	private String mgrFollowupRemarks;//
	private String mgrName;
	private String advDecCrtdBy;
	private Date advDecCrtdDate;
	private String advDecModBy;
	private Date advDecModDate;

	public FnaAdvDeclare() {
	}

	public FnaAdvDeclare(String advDecId) {
		this.advDecId = advDecId;
	}

	public FnaAdvDeclare(String advDecId, FnaSelfspouseDets fnaSelfspouseDets,
			String appAnalysisFor, String appPurpose, String appClientChoice,
			String appReplacePrdt, String amlLanguageUse,
			String amlIntprtExist, String amlIntprtName, String amlIntprtRelat,
			String amlIntprtNric, String amlIntprtMobile, String amlIntprtHome,
			String amlIntprtBenfflg, String amlIntprtTppflg,
			String amlIntprtPepflg, String amlIntprtRemarks,
			String amlBenfName, String amlBenfRelat, String amlBenfNric,
			String amlBenfIncno, String amlBenfJob, String amlBenfJobconty,
			String amlBenfAddr1, String amlBenfAddr2, String amlBenfPostal,
			String amlBenfConty, String amlTppName, String amlTppRelat,
			String amlTppNric, String amlTppIncno, String amlTppJob,
			String amlTppJobconty, String amlTppAddr1, String amlTppAddr2,
			String amlTppPostal, String amlTppConty, String amlTppPaymode,
			String amlTppBank, String amlTppChqno, String amlTppMobile,
			String amlPepName, String amlPepRelat, String amlPepNric,
			String amlPepIncno, String amlPepJob, String amlPepJobconty,
			String amlPepAddr1, String amlPepAddr2, String amlPepPostal,
			String amlPepConty, String arNewRecomm, String srQ1Flg,
			String srQ2Flg, String srQ3Flg, String srQ4Flg, String srQ1Dets,
			String srRemarks, String cdAgreeFlg, String cdCcRemarks,
			String cdMrktPostal, String cdMrktEmail, String mgrAgreeFlag,
			String mgrFollowupRemarks, String mgrName, String advDecCrtdBy,
			Date advDecCrtdDate, String advDecModBy, Date advDecModDate) {
		this.advDecId = advDecId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.appAnalysisFor = appAnalysisFor;
		this.appPurpose = appPurpose;
		this.appClientChoice = appClientChoice;
		this.appReplacePrdt = appReplacePrdt;
		this.amlLanguageUse = amlLanguageUse;
		this.amlIntprtExist = amlIntprtExist;
		this.amlIntprtName = amlIntprtName;
		this.amlIntprtRelat = amlIntprtRelat;
		this.amlIntprtNric = amlIntprtNric;
		this.amlIntprtMobile = amlIntprtMobile;
		this.amlIntprtHome = amlIntprtHome;
		this.amlIntprtBenfflg = amlIntprtBenfflg;
		this.amlIntprtTppflg = amlIntprtTppflg;
		this.amlIntprtPepflg = amlIntprtPepflg;
		this.amlIntprtRemarks = amlIntprtRemarks;
		this.amlBenfName = amlBenfName;
		this.amlBenfRelat = amlBenfRelat;
		this.amlBenfNric = amlBenfNric;
		this.amlBenfIncno = amlBenfIncno;
		this.amlBenfJob = amlBenfJob;
		this.amlBenfJobconty = amlBenfJobconty;
		this.amlBenfAddr1 = amlBenfAddr1;
		this.amlBenfAddr2 = amlBenfAddr2;
		this.amlBenfPostal = amlBenfPostal;
		this.amlBenfConty = amlBenfConty;
		this.amlTppName = amlTppName;
		this.amlTppRelat = amlTppRelat;
		this.amlTppNric = amlTppNric;
		this.amlTppIncno = amlTppIncno;
		this.amlTppJob = amlTppJob;
		this.amlTppJobconty = amlTppJobconty;
		this.amlTppAddr1 = amlTppAddr1;
		this.amlTppAddr2 = amlTppAddr2;
		this.amlTppPostal = amlTppPostal;
		this.amlTppConty = amlTppConty;
		this.amlTppPaymode = amlTppPaymode;
		this.amlTppBank = amlTppBank;
		this.amlTppChqno = amlTppChqno;
		this.amlTppMobile = amlTppMobile;
		this.amlPepName = amlPepName;
		this.amlPepRelat = amlPepRelat;
		this.amlPepNric = amlPepNric;
		this.amlPepIncno = amlPepIncno;
		this.amlPepJob = amlPepJob;
		this.amlPepJobconty = amlPepJobconty;
		this.amlPepAddr1 = amlPepAddr1;
		this.amlPepAddr2 = amlPepAddr2;
		this.amlPepPostal = amlPepPostal;
		this.amlPepConty = amlPepConty;
		this.arNewRecomm = arNewRecomm;
		this.srQ1Flg = srQ1Flg;
		this.srQ2Flg = srQ2Flg;
		this.srQ3Flg = srQ3Flg;
		this.srQ4Flg = srQ4Flg;
		this.srQ1Dets = srQ1Dets;
		this.srRemarks = srRemarks;
		this.cdAgreeFlg = cdAgreeFlg;
		this.cdCcRemarks = cdCcRemarks;
		this.cdMrktPostal = cdMrktPostal;
		this.cdMrktEmail = cdMrktEmail;
		this.mgrAgreeFlag = mgrAgreeFlag;
		this.mgrFollowupRemarks = mgrFollowupRemarks;
		this.mgrName = mgrName;
		this.advDecCrtdBy = advDecCrtdBy;
		this.advDecCrtdDate = advDecCrtdDate;
		this.advDecModBy = advDecModBy;
		this.advDecModDate = advDecModDate;
	}

	public String getAdvDecId() {
		return this.advDecId;
	}

	public void setAdvDecId(String advDecId) {
		this.advDecId = advDecId;
	}

	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return this.fnaSelfspouseDets;
	}

	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}

	public String getAppAnalysisFor() {
		return this.appAnalysisFor;
	}

	public void setAppAnalysisFor(String appAnalysisFor) {
		this.appAnalysisFor = appAnalysisFor;
	}

	public String getAppPurpose() {
		return this.appPurpose;
	}

	public void setAppPurpose(String appPurpose) {
		this.appPurpose = appPurpose;
	}

	public String getAppClientChoice() {
		return this.appClientChoice;
	}

	public void setAppClientChoice(String appClientChoice) {
		this.appClientChoice = appClientChoice;
	}

	public String getAppReplacePrdt() {
		return this.appReplacePrdt;
	}

	public void setAppReplacePrdt(String appReplacePrdt) {
		this.appReplacePrdt = appReplacePrdt;
	}

	public String getAmlLanguageUse() {
		return this.amlLanguageUse;
	}

	public void setAmlLanguageUse(String amlLanguageUse) {
		this.amlLanguageUse = amlLanguageUse;
	}

	public String getAmlIntprtExist() {
		return this.amlIntprtExist;
	}

	public void setAmlIntprtExist(String amlIntprtExist) {
		this.amlIntprtExist = amlIntprtExist;
	}

	public String getAmlIntprtName() {
		return this.amlIntprtName;
	}

	public void setAmlIntprtName(String amlIntprtName) {
		this.amlIntprtName = amlIntprtName;
	}

	public String getAmlIntprtRelat() {
		return this.amlIntprtRelat;
	}

	public void setAmlIntprtRelat(String amlIntprtRelat) {
		this.amlIntprtRelat = amlIntprtRelat;
	}

	public String getAmlIntprtNric() {
		return this.amlIntprtNric;
	}

	public void setAmlIntprtNric(String amlIntprtNric) {
		this.amlIntprtNric = amlIntprtNric;
	}

	public String getAmlIntprtMobile() {
		return this.amlIntprtMobile;
	}

	public void setAmlIntprtMobile(String amlIntprtMobile) {
		this.amlIntprtMobile = amlIntprtMobile;
	}

	public String getAmlIntprtHome() {
		return this.amlIntprtHome;
	}

	public void setAmlIntprtHome(String amlIntprtHome) {
		this.amlIntprtHome = amlIntprtHome;
	}

	public String getAmlIntprtBenfflg() {
		return this.amlIntprtBenfflg;
	}

	public void setAmlIntprtBenfflg(String amlIntprtBenfflg) {
		this.amlIntprtBenfflg = amlIntprtBenfflg;
	}

	public String getAmlIntprtTppflg() {
		return this.amlIntprtTppflg;
	}

	public void setAmlIntprtTppflg(String amlIntprtTppflg) {
		this.amlIntprtTppflg = amlIntprtTppflg;
	}

	public String getAmlIntprtPepflg() {
		return this.amlIntprtPepflg;
	}

	public void setAmlIntprtPepflg(String amlIntprtPepflg) {
		this.amlIntprtPepflg = amlIntprtPepflg;
	}

	public String getAmlIntprtRemarks() {
		return this.amlIntprtRemarks;
	}

	public void setAmlIntprtRemarks(String amlIntprtRemarks) {
		this.amlIntprtRemarks = amlIntprtRemarks;
	}

	public String getAmlBenfName() {
		return this.amlBenfName;
	}

	public void setAmlBenfName(String amlBenfName) {
		this.amlBenfName = amlBenfName;
	}

	public String getAmlBenfRelat() {
		return this.amlBenfRelat;
	}

	public void setAmlBenfRelat(String amlBenfRelat) {
		this.amlBenfRelat = amlBenfRelat;
	}

	public String getAmlBenfNric() {
		return this.amlBenfNric;
	}

	public void setAmlBenfNric(String amlBenfNric) {
		this.amlBenfNric = amlBenfNric;
	}

	public String getAmlBenfIncno() {
		return this.amlBenfIncno;
	}

	public void setAmlBenfIncno(String amlBenfIncno) {
		this.amlBenfIncno = amlBenfIncno;
	}

	public String getAmlBenfJob() {
		return this.amlBenfJob;
	}

	public void setAmlBenfJob(String amlBenfJob) {
		this.amlBenfJob = amlBenfJob;
	}

	public String getAmlBenfJobconty() {
		return this.amlBenfJobconty;
	}

	public void setAmlBenfJobconty(String amlBenfJobconty) {
		this.amlBenfJobconty = amlBenfJobconty;
	}

	public String getAmlBenfAddr1() {
		return this.amlBenfAddr1;
	}

	public void setAmlBenfAddr1(String amlBenfAddr1) {
		this.amlBenfAddr1 = amlBenfAddr1;
	}

	public String getAmlBenfAddr2() {
		return this.amlBenfAddr2;
	}

	public void setAmlBenfAddr2(String amlBenfAddr2) {
		this.amlBenfAddr2 = amlBenfAddr2;
	}

	public String getAmlBenfPostal() {
		return this.amlBenfPostal;
	}

	public void setAmlBenfPostal(String amlBenfPostal) {
		this.amlBenfPostal = amlBenfPostal;
	}

	public String getAmlBenfConty() {
		return this.amlBenfConty;
	}

	public void setAmlBenfConty(String amlBenfConty) {
		this.amlBenfConty = amlBenfConty;
	}

	public String getAmlTppName() {
		return this.amlTppName;
	}

	public void setAmlTppName(String amlTppName) {
		this.amlTppName = amlTppName;
	}

	public String getAmlTppRelat() {
		return this.amlTppRelat;
	}

	public void setAmlTppRelat(String amlTppRelat) {
		this.amlTppRelat = amlTppRelat;
	}

	public String getAmlTppNric() {
		return this.amlTppNric;
	}

	public void setAmlTppNric(String amlTppNric) {
		this.amlTppNric = amlTppNric;
	}

	public String getAmlTppIncno() {
		return this.amlTppIncno;
	}

	public void setAmlTppIncno(String amlTppIncno) {
		this.amlTppIncno = amlTppIncno;
	}

	public String getAmlTppJob() {
		return this.amlTppJob;
	}

	public void setAmlTppJob(String amlTppJob) {
		this.amlTppJob = amlTppJob;
	}

	public String getAmlTppJobconty() {
		return this.amlTppJobconty;
	}

	public void setAmlTppJobconty(String amlTppJobconty) {
		this.amlTppJobconty = amlTppJobconty;
	}

	public String getAmlTppAddr1() {
		return this.amlTppAddr1;
	}

	public void setAmlTppAddr1(String amlTppAddr1) {
		this.amlTppAddr1 = amlTppAddr1;
	}

	public String getAmlTppAddr2() {
		return this.amlTppAddr2;
	}

	public void setAmlTppAddr2(String amlTppAddr2) {
		this.amlTppAddr2 = amlTppAddr2;
	}

	public String getAmlTppPostal() {
		return this.amlTppPostal;
	}

	public void setAmlTppPostal(String amlTppPostal) {
		this.amlTppPostal = amlTppPostal;
	}

	public String getAmlTppConty() {
		return this.amlTppConty;
	}

	public void setAmlTppConty(String amlTppConty) {
		this.amlTppConty = amlTppConty;
	}

	public String getAmlTppPaymode() {
		return this.amlTppPaymode;
	}

	public void setAmlTppPaymode(String amlTppPaymode) {
		this.amlTppPaymode = amlTppPaymode;
	}

	public String getAmlTppBank() {
		return this.amlTppBank;
	}

	public void setAmlTppBank(String amlTppBank) {
		this.amlTppBank = amlTppBank;
	}

	public String getAmlTppChqno() {
		return this.amlTppChqno;
	}

	public void setAmlTppChqno(String amlTppChqno) {
		this.amlTppChqno = amlTppChqno;
	}

	public String getAmlTppMobile() {
		return this.amlTppMobile;
	}

	public void setAmlTppMobile(String amlTppMobile) {
		this.amlTppMobile = amlTppMobile;
	}

	public String getAmlPepName() {
		return this.amlPepName;
	}

	public void setAmlPepName(String amlPepName) {
		this.amlPepName = amlPepName;
	}

	public String getAmlPepRelat() {
		return this.amlPepRelat;
	}

	public void setAmlPepRelat(String amlPepRelat) {
		this.amlPepRelat = amlPepRelat;
	}

	public String getAmlPepNric() {
		return this.amlPepNric;
	}

	public void setAmlPepNric(String amlPepNric) {
		this.amlPepNric = amlPepNric;
	}

	public String getAmlPepIncno() {
		return this.amlPepIncno;
	}

	public void setAmlPepIncno(String amlPepIncno) {
		this.amlPepIncno = amlPepIncno;
	}

	public String getAmlPepJob() {
		return this.amlPepJob;
	}

	public void setAmlPepJob(String amlPepJob) {
		this.amlPepJob = amlPepJob;
	}

	public String getAmlPepJobconty() {
		return this.amlPepJobconty;
	}

	public void setAmlPepJobconty(String amlPepJobconty) {
		this.amlPepJobconty = amlPepJobconty;
	}

	public String getAmlPepAddr1() {
		return this.amlPepAddr1;
	}

	public void setAmlPepAddr1(String amlPepAddr1) {
		this.amlPepAddr1 = amlPepAddr1;
	}

	public String getAmlPepAddr2() {
		return this.amlPepAddr2;
	}

	public void setAmlPepAddr2(String amlPepAddr2) {
		this.amlPepAddr2 = amlPepAddr2;
	}

	public String getAmlPepPostal() {
		return this.amlPepPostal;
	}

	public void setAmlPepPostal(String amlPepPostal) {
		this.amlPepPostal = amlPepPostal;
	}

	public String getAmlPepConty() {
		return this.amlPepConty;
	}

	public void setAmlPepConty(String amlPepConty) {
		this.amlPepConty = amlPepConty;
	}

	public String getArNewRecomm() {
		return this.arNewRecomm;
	}

	public void setArNewRecomm(String arNewRecomm) {
		this.arNewRecomm = arNewRecomm;
	}

	public String getSrQ1Flg() {
		return this.srQ1Flg;
	}

	public void setSrQ1Flg(String srQ1Flg) {
		this.srQ1Flg = srQ1Flg;
	}

	public String getSrQ2Flg() {
		return this.srQ2Flg;
	}

	public void setSrQ2Flg(String srQ2Flg) {
		this.srQ2Flg = srQ2Flg;
	}

	public String getSrQ3Flg() {
		return this.srQ3Flg;
	}

	public void setSrQ3Flg(String srQ3Flg) {
		this.srQ3Flg = srQ3Flg;
	}

	public String getSrQ4Flg() {
		return this.srQ4Flg;
	}

	public void setSrQ4Flg(String srQ4Flg) {
		this.srQ4Flg = srQ4Flg;
	}

	public String getSrQ1Dets() {
		return this.srQ1Dets;
	}

	public void setSrQ1Dets(String srQ1Dets) {
		this.srQ1Dets = srQ1Dets;
	}

	public String getSrRemarks() {
		return this.srRemarks;
	}

	public void setSrRemarks(String srRemarks) {
		this.srRemarks = srRemarks;
	}

	public String getCdAgreeFlg() {
		return this.cdAgreeFlg;
	}

	public void setCdAgreeFlg(String cdAgreeFlg) {
		this.cdAgreeFlg = cdAgreeFlg;
	}

	public String getCdCcRemarks() {
		return this.cdCcRemarks;
	}

	public void setCdCcRemarks(String cdCcRemarks) {
		this.cdCcRemarks = cdCcRemarks;
	}

	public String getCdMrktPostal() {
		return this.cdMrktPostal;
	}

	public void setCdMrktPostal(String cdMrktPostal) {
		this.cdMrktPostal = cdMrktPostal;
	}

	public String getCdMrktEmail() {
		return this.cdMrktEmail;
	}

	public void setCdMrktEmail(String cdMrktEmail) {
		this.cdMrktEmail = cdMrktEmail;
	}

	public String getMgrAgreeFlag() {
		return this.mgrAgreeFlag;
	}

	public void setMgrAgreeFlag(String mgrAgreeFlag) {
		this.mgrAgreeFlag = mgrAgreeFlag;
	}

	public String getMgrFollowupRemarks() {
		return this.mgrFollowupRemarks;
	}

	public void setMgrFollowupRemarks(String mgrFollowupRemarks) {
		this.mgrFollowupRemarks = mgrFollowupRemarks;
	}

	public String getMgrName() {
		return this.mgrName;
	}

	public void setMgrName(String mgrName) {
		this.mgrName = mgrName;
	}

	public String getAdvDecCrtdBy() {
		return this.advDecCrtdBy;
	}

	public void setAdvDecCrtdBy(String advDecCrtdBy) {
		this.advDecCrtdBy = advDecCrtdBy;
	}

	public Date getAdvDecCrtdDate() {
		return this.advDecCrtdDate;
	}

	public void setAdvDecCrtdDate(Date advDecCrtdDate) {
		this.advDecCrtdDate = advDecCrtdDate;
	}

	public String getAdvDecModBy() {
		return this.advDecModBy;
	}

	public void setAdvDecModBy(String advDecModBy) {
		this.advDecModBy = advDecModBy;
	}

	public Date getAdvDecModDate() {
		return this.advDecModDate;
	}

	public void setAdvDecModDate(Date advDecModDate) {
		this.advDecModDate = advDecModDate;
	}

}