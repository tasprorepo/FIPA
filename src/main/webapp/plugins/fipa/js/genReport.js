
/**
 * Report Generation
 */
var fipaForm;
 
//var reportmachineip = "http://118.201.157.48:7093";
//var reportmachineip = "http://192.168.1.12:8201";
var reportmachineip = "http://127.0.0.1:9201";

function GenSelReport(){
	var $analysisChk = $("#analysisTypesdiv").find("input[type='checkbox']:checked");  
	var chkReportId=[]; 
	var desirory = $("#analysisTypesdiv").find("input[type='checkbox']:checked").map(function() { 
		chkReportId.push($(this).attr("value"));		
		
	   return this.value;
	}).get(); 
	
	fnaGenReport(chkReportId);
	$analysisChk.attr("checked",false);
}


function fnaGenReport(chkReportId) {

	
//	alert(chkReportId);
//P_REPORTS
	
	var clientId = $("input[name=fnaId]").val();
    var repmaincolor=$("#colorReportMainHead").val();
    var repsubcolor=$("#colorReportSubHead").val();
    
    
	 if(isEmpty(clientId)){ 
			applyToastrAlert("No Profile is selected"); 
			return false;
		}
	 
	 var machine = "";

	/*if(RepName == "CFA"){

		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/CASH_FLOW_ANALYSIS.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;
	}
	//
	if(RepName == "CPF"){
		
		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/CPF_PROJECTIONS_PORT.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;
	}
	
	if(RepName == "NWA"){
		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/NET_ WORTH_ANALYSIS_REPORT.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;
	}
	if(RepName == "RET_PLN"){
		
		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/RETIREMENT_PLANNING_REPORT.rptdesign&__format=pdf"
			+ "&P_FNAID="+clientId;

	}
	
	if(RepName == "CPF_PA"){
		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/CPF_PROJECTIONS.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;
	}
	
	if(RepName == "SNA_SELF"){

		
		
		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/SURVIVAL_NEEDS_ANALYSIS_REPORT.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;


	}
	
	if(RepName == "SNA_SPS"){
		
		
		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/SURVIVAL_NEEDS_ANALYSIS_REPORT_SPOUSE.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;
	}
	
	if(RepName == "CBANK"){

		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/CASH_AT_BANK_REPORT.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;
		}
	
	
	if(RepName == "INV_DETS"){

		machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/INPUT_INVESTMENT_LIST.rptdesign&__format=pdf"
	+ "&P_FNAID="+clientId;

	}
	if(RepName == "CHLD_EDU"){

		 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/CHILD_EDUCATION_PLANNING.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;
		}
	
	if(RepName == "SIH"){
		 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/LIST_OF_LIFE_INSURANCE_REPORT.rptdesign&__format=pdf"
		+ "&P_FNAID="+clientId;		
	}*/
	 
//	 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_TEST.rptdesign&__format=pdf"
//		+ "&P_FNAID="+clientId+"&P_REPORTS="+chkReportId;
	 
//	 BY DEFAULT
	 repmaincolor = "GRAY";
	 repsubcolor = "SILVER";
	 
	 if(chkReportId.length>1){
		 machine =  reportmachineip+"/birt-viewer/fipajsp/FIPA_GEN_REPORTS.jsp?__format=pdf"
		 		+ "&P_FNAID="+clientId+"&P_REPORTS="+chkReportId;
	
//	 	alert(machine)
	
	 	
	 }else{
		 
		 if(chkReportId == "BANK"){
//			 alert("BANK");
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CAB.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "CEP"){
	//		 alert("CEP");
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CEP.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 		 
		 if(chkReportId == "CFA"){
		//	 alert("CFA");
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CFA.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "CPF"){
			 //alert("CPF");
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_CPF.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		/*alert(machine);*/
		 }
		 
		 
		 if(chkReportId == "INV"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_INV.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;;
		 }
		 
		 
		 if(chkReportId == "LIFE"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_LIFEINS.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;;
		 }
		 
		 
		 if(chkReportId == "NWA"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_NWA.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "RET"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_RP.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 if(chkReportId == "SNASELF"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_SNA_SELF.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 if(chkReportId == "SNASPOUSE"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_SNA_SPOUSE.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 if(chkReportId == "SRS"){
			 machine =  reportmachineip+"/birt-viewer/frameset?__report=report/FIPA/FIPA_REPORT_SRS.rptdesign&__format=pdf"+ "&P_FNAID="+clientId+ "&P_MAIN_COLOR="+repmaincolor+ "&P_SUB_COLOR="+repsubcolor;
		 }
		 
		 
		 
	 }

	 creatSubmtDynaReportPDF(machine);
}