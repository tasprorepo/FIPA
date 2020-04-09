var getBrowserApp = navigator.appName;


$(".srchtextflds").on("change",function(){
	clearClntSrchRows();
});

 
function showPopOver(elmId,txtMsg){ 
	
	if(txtMsg == PLAN_DETS){
		$("#"+elmId).popover({ 
			html:'true',
			trigger: "hover" ,
			content:txtMsg,
			container: 'body',
			title:function () {
			    return 'Info';
			  }, 
			animation: 'true',
//			placement:'top',
//			viewport:$("#"+elmId)
		}); 
	}else{
		$("#"+elmId).popover({ 
			html:'true',
			trigger: "hover" ,
			content:txtMsg,
			container: 'body',
			title:function () {
			    return 'Info';
			  }, 
			animation: 'true',
			placement:'top',
//			viewport:$("#"+elmId)
		}); 
	}
	
	
}

function logout(){
//	if(window.confirm("Are you sure want to logout?")){
	setAllLayoutColor();
	
		document.forms["fipaForm"].action="Logout.do";
		document.forms["fipaForm"].submit();
//		window.close();
//	}
//	else
//		return false;
	
}

function setHomePage(){
	document.forms[0].action="FipaHome.do";
	document.forms[0].submit();
}


function showAlert(content,fldtofocus) {
	
//	alert(fldtofocus)
	var screename=$("#hTxtScreenName").val();
	$("#alertimg").html("");
	
	$("#alertmsg").html(content);
//	$("#alertimg").prepend('<img width="20px" src="images/info.png"/>');

	
	
	$('#alertmsgdiv').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true,
		});
	
	$('#alertmsgdiv').on('shown.bs.modal', function() { 
		
		  $(this).find(".modal-title").text("FIPA - Message");
		  $(this).find(".modal-footer").find("button:eq(0)").unbind();
		  $(this).find(".modal-footer").find("button:eq(0)").click(function (){  
			  $('#alertmsgdiv').modal('hide'); 
//			  $("#sidebar-menu").find("ul li").removeClass("sideMenuHighlight");
	        	if(!isEmpty(content)){ 
	        		if((content == CLIENT_REQ)){
//	        			openDivForClient('particulars','clientsection','dataform_li',"Client's Particulars");  
//		    			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").click(); 
//		    			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").addClass("sideMenuHighlight");
	        			$("#particulars_li").trigger("click");
	        			$("#clientdets_li").trigger("click");		    			   
		    			if(fldtofocus)fldtofocus.focus();
	        		}
	        				
	        	if((content == SELF_NAME) || (content == SELF_NRIC) || (content == SELF_ADVSTF)||
	    				(content == SELF_DOB) || (content == SELF_NATION) || (content == SELF_HMEADDR) 
	    				|| (content == SELF_HMEADDR2) || (content == SELF_RPOSTAL )   
	    				|| (content == SELF_RCNTRY) || (content == SELF_MAILADDR )  
	    				|| (content == SELF_MAILADDR2) || (content == SELF_MPOSTAL ) 
	    				|| (content == SELF_MCNTRY)  ) {
	     	 
//	    			openDivForClient('particulars','clientsection','dataform_li',"Client's Particulars");  
//	    			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").click(); 
//	    			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").addClass("sideMenuHighlight");
	        		
	        		$("#particulars_li").trigger("click");
	        		$("#clientdets_li").trigger("click");
	    			   
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    			
	    		} else if((content == SPOUSE_NAME) || (content == SPOUSE_NRIC) || (content == SPOUSE_DOB)
	    				|| (content == SPOUSE_NATION) || (content == SPOUSE_HMEADDR)
	    				|| (content == SPOUSE_HMEADDR2) || (content == SPOUSE_RPOSTAL)
	    				|| (content == SPOUSE_RCNTRY) || (content == SPOUSE_MAILADDR)
	    				|| (content == SPOUSE_MAILADDR2) || (content == SPOUSE_MPOSTAL)
	    				|| (content == SPOUSE_MCNTRY) ) {
	    			
//	    			openDivForClient('spousediv','spousesection','dataform_li',"Spouse's Particulars"); 
//	    			$("#sidebar-menu #dataform_li").find("ul li:eq(1)").addClass("sideMenuHighlight");
//	    			$("#sidebar-menu #dataform_li").find("ul li:eq(1)").find("a").click();
	    			
	    			$("#particulars_li").trigger("click");
	    			$("#spousedets_li").trigger("click");
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		} else if((content == TOAALYSFOR) || (content == TOAPURPO)
	    				|| (content == TOPLIFE) || (content == TOPHL) || (content == TOPAYSTYPES) || (content == TOAALYSFORSELF)) { 
//	    			openDivForClient('typesofappln','typesofappsec','typesofAppln_li',"Types of Application");
	    			
	    			$("#typesofappln_li").trigger("click");
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    			
	    		} else if((content == HEALTHINS_RMKS)){  
//	    			openDivForClient('lifeInsurce','lifeinscsecion','analysis_li','Life Insurance');
//	    			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").addClass("sideMenuHighlight");
//	    			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").find("a").click();
	    			
	    			$("#lifeinsurance_li").trigger("click");
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    			
	    		}else if((content == INT_NAME)||(content == INT_NRIC)||(content == INT_CONTACT)||
	    				(content == INT_HOMEADDR)||(content == INT_REL)){
//	    			openDivForClient('clientsdeclr','clientsdeclrdiv','clientsdeclr_li','AML Declaration');
//	    			$("#sidebar-menu #clientsdeclr_li").find("a").click();
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		} else if((content == CHECK_PRODUCT)){
//	    			openDivForClient('adrecom','adrecomprodiv','advrecm_li','New Purchase & TopUp');
//	    			$("#sidebar-menu #advrecm_li").find("a").click();
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((content == SEL_BENOWNER) || (content == SEL_TPP) || (content == SEL_PEP)){ 
//	    			openDivForClient('clientsdeclr','clientsdeclrdiv','clientsdeclr_li','AML Declaration');
//	    			$("#sidebar-menu #clientsdeclr_li").find("a").click();
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		} else if((content == SWTCH_QUEST1) || (content == SWTCH_QUEST1REMK) || (content == SWTCH_QUEST2) ||
	    				(content == SWTCH_QUEST3) || (content == SWTCH_QUEST4)){ 
//	    		    openDivForClient('switchrep','adrecomswtcdiv','advrecm_li','Switching & Replacement');
//	    		    $("#sidebar-menu #advrecm_li").find("ul li:eq(1)").addClass("sideMenuHighlight");
//	    		    $("#sidebar-menu #advrecm_li").find("ul li:eq(1)").find("a").click();
	    			
	    		    if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((content == REASONS_RECOM)){
	    			 
//	    			openDivForClient('reasons','brofrecomdiv','reasons_li','Basis & Rationale of Recommendations');
//	    			$("#sidebar-menu #reasons_li").find("a").click();
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    			
	    		}else if((content == DECLARATION)){ 
//	    			openDivForClient('decbycli','decbyclidiv','decbycli_li','Declaration');
//	    			$("#sidebar-menu #decbycli_li").find("a").click();
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((content == SUP_REASON) || (content == SUP_DECLARATION)){ 
//	    			openDivForClient('suprvsr','suprvsrdiv','supervisor_li',"Supervisor's Review");
//	    			$("#sidebar-menu #supervisor_li").find("a").click();
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((screename == "cpfInterestRate")){
	    			
//	    			 $("#sidebar-menu ul li[id='masteraccintrates']").parent().removeClass("sideMenuHighlight nv");
//	    			 $("#sidebar-menu ul li[id='masteraccintrates']").addClass("sideMenuHighlight nv");
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((screename == "cpfAllocation")){
//	    			 $("#sidebar-menu ul li[id='masteraccallorates']").parent().removeClass("sideMenuHighlight nv");
//	    			 $("#sidebar-menu ul li[id='masteraccallorates']").addClass("sideMenuHighlight nv");
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((screename == "cpfContribution")){
//	    				$("#sidebar-menu ul li[id='mastercontri']").parent().removeClass("sideMenuHighlight nv");
//	    			   $("#sidebar-menu ul li[id='mastercontri']").addClass("sideMenuHighlight nv");
	    			   
	    			   
	    			   if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((screename == "cpfAccType")){
//	    			 $("#sidebar-menu ul li[id='masteracctypes']").parent().removeClass("sideMenuHighlight nv");
//	    			   $("#sidebar-menu ul li[id='masteracctypes']").addClass("sideMenuHighlight nv");
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((screename == "cpfSum")){
//	    			 $("#sidebar-menu ul li[id='masterretiremrntsum']").parent().removeClass("sideMenuHighlight nv");
//	    			   $("#sidebar-menu ul li[id='masterretiremrntsum']").addClass("sideMenuHighlight nv");
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((screename == "cpfLifePayout")){
//	    			 $("#sidebar-menu ul li[id='masterlifepayout']").parent().removeClass("sideMenuHighlight nv");
//	    			   $("#sidebar-menu ul li[id='masterlifepayout']").addClass("sideMenuHighlight nv");
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((screename == "quotes")){
//	    			 $("#sidebar-menu ul li[id='masterquotes']").parent().addClass("sideMenuHighlight nv"); 
	    			 if(fldtofocus)fldtofocus.focus();
	    			return;
	    		}else if((content == CLIENT_REQ)){ 
	    			$('.modal').modal('hide');
	    		}
	        	
	    		else{ 
	    			
	    			if(fldtofocus)fldtofocus.focus();
	    		}
	        	} 
	        	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
	        	if(fldtofocus)fldtofocus.focus(); 
		});
	});   
   
}


var Cpf_Bal={
		
	Cpf_BalSelf:['txtFldCpfSlfOrdAcCurr', 'txtFldCpfSlfSplAcCurr', 'txtFldCpfSlfMedSveCurr'],
		              
	Cpf_BalSps:['txtFldCpfSpsOrdAcCurr', 'txtFldCpfSpsSplAcAnnl', 'txtFldCpfSpsMedSveCurr'],
		       	                 
	 SUMOF_CPFBAL_SLF:'SUMOF_CPFBAL_SLF',
	 SUMOF_CPFBAL_SPS:'SUMOF_CPFBAL_SPS'
}


 

function calSelfCpfMastMthContr(){
	
	/*
	var selfAge=$("#dfSelfAge").val();//self age
	var slfow = $("#incsrcSelfEmpMonthly").val();
	var slfOW_data=Number(isEmpty(slfow) ?"0" : slfow);//self OW from Exp fd flow
	var slfaw = $("#incsrcSelfEmpAddlwage").val();
	var slfAW_data=Number(isEmpty(slfaw) ?"0" : slfaw)/12;//self AW/12 for monthly from Exp fd flow
	var slfTW_data=Number(slfOW_data+slfAW_data);//self OW+(AW/12) from Exp fd flow
//	calMastCpfContrAnalysis("Self",selfAge,slfOW_data,slfAW_data,slfTW_data);
	var selfdob = $("#dfSelfDob").val()
	
	var arr = getCPFContribution(selfdob,slfOW_data);
	var ee = arr[0];
	var er = arr[1];
	
	
	
	$("input[name=ccEmpleContrb]:eq(0)").val(remPriceAfDec(ee * slfOW_data));
	$("input[name=ccEmplrContrb]:eq(0)").val(remPriceAfDec(er * slfOW_data)); 
	
	callSumOfCpfMth();
	*/
	
	calcCPFContribution();
}
function calSpsCpfMastMthContr(){
	/*
	var spsAge=$("#dfSpsAge").val();//self age
	var spsow = $("#incsrcSpsEmpMonthly").val();
	var spsOW_data=Number(isEmpty(spsow) ? "0" : spsow);//spouse OW from Exp fd flow
	var spsaw = $("#incsrcSpsEmpAddlwage").val();
	var spsAW_data=Number(isEmpty(spsaw) ? "0" : spsaw)/12;//spouse AW/12 for monthly from Exp fd flow
	var spsTW_data=Number(spsOW_data+spsAW_data);//spouse OW+(AW/12) from Exp fd flow
//	calMastCpfContrAnalysis("Spouse",spsAge,spsOW_data,spsAW_data,spsTW_data);
	
	var spsdob = $("#dfSpsDob").val();

	var arr = getCPFContribution(spsdob,spsOW_data);
	var ee = arr[0];
	var er = arr[1];
	
	
	$("input[name=ccEmpleContrb]:eq(1)").val(remPriceAfDec(ee * spsOW_data));
	$("input[name=ccEmplrContrb]:eq(1)").val(remPriceAfDec(er * spsOW_data)); 
	callSumOfCpfMth();
	*/
	
	calcCPFContribution();

	
}
function calMastCpfContrAnalysis(Owner,refage,OW_data,AW_data,TW_data){

	var Age=Number(refage);
	var employee=Number(0);
	var employer=Number(0);
	
	if(!isEmpty(Age)){
		 
		
		if(Age<=55){ 
			 
			if(TW_data<=50){
				
				employee=remPriceAfDec(Number(0)); //Nil 
				employer=remPriceAfDec(Number(0));//Nil
				
			}else if(TW_data > 50 && TW_data <= 500){
				
				employee=remPriceAfDec((17/100)*Number(TW_data));//17% (TW) 
				employer=remPriceAfDec(Number(0));//Nil
				
			}else if(TW_data>500 && TW_data<750){ 
				
				employee=remPriceAfDec(((17/100)*Number(TW_data)) + ((0.6)*(Number(TW_data) - 500)));//17%(TW) +0.6(TW-$500)
				employer=remPriceAfDec(0.6*(Number(TW_data)-500));//0.6(TW-$500)
				
			}else if(TW_data>=750){
				var check1= (Number((37/100)*Number(OW_data)) < 2200) ? Number((37/100)*Number(OW_data)) : 2200;
				employee=remPriceAfDec((check1) + ((37/100)*Number(AW_data))) ;//[37%(OW)]+37%(AW)*Max of $2,200
				var check2= (Number((20/100)*Number(OW_data)) < 1200) ? Number((20/100)*Number(OW_data)) : 1200;
				employer=remPriceAfDec((check2) + ((37/100)*Number(AW_data)));//[20%(OW)]+20%(AW)*Max of $1,200
			}
			
		}else if(Age>=56 && Age<=60){
			 
	if(TW_data<=50){
				
				employee=remPriceAfDec(Number(0)); //Nil 
				employer=remPriceAfDec(Number(0));//Nil
				
			}else if(TW_data > 50 && TW_data <= 500){
				
				employee=remPriceAfDec((13/100)*Number(TW_data));//13% (TW) 
				employer=remPriceAfDec(Number(0));//Nil
				
			}else if(TW_data>500 && TW_data<750){ 
				
				employee=remPriceAfDec(((13/100)*Number(TW_data)) + ((0.39)*(Number(TW_data) - 500)));//13%(TW) +0.39(TW-$500)
				employer=remPriceAfDec(0.39*(Number(TW_data)-500));//0.39(TW-$500)
				
			}else if(TW_data>=750){
				var check1= (Number((26/100)*Number(OW_data)) < 1560) ? Number((26/100)*Number(OW_data)) : 1560;
				employee=remPriceAfDec((check1) + ((26/100)*Number(AW_data)));//[26%(OW)]+26%(AW)*Max of $1560
				var check2= (Number((13/100)*Number(OW_data)) < 780) ? Number((13/100)*Number(OW_data)) : 780;
				employer=remPriceAfDec((check2) + ((13)*Number(AW_data)));//[13%(OW)]+13%(AW)*Max of $780
			}
		
		}else if(Age>=61 && Age<=65){
			 
	if(TW_data<=50){
				
				employee=remPriceAfDec(Number(0)); //Nil 
				employer=remPriceAfDec(Number(0));//Nil
				
			}else if(TW_data > 50 && TW_data <= 500){
				
				employee=remPriceAfDec((9/100)*Number(TW_data));//9% (TW) 
				employer=remPriceAfDec(Number(0));//Nil
				
			}else if(TW_data>500 && TW_data<750){ 
				
				employee=remPriceAfDec(((9/100)*Number(TW_data)) + ((0.225)*(Number(TW_data) - 500)));//9%(TW) +0.225(TW-$500)
				employer=remPriceAfDec(0.225*(Number(TW_data)-500));//0.225(TW-$500)
				
			}else if(TW_data>=750){
				var check1= (Number((16.5/100)*Number(OW_data)) < 990) ? Number((16.5/100)*Number(OW_data)) : 990;
				employee=remPriceAfDec((check1) + ((16.5/100)*Number(AW_data)));//[16.5%(OW)]+16.5%(AW)*Max of $990
				var check2= (Number((7.5/100)*Number(OW_data)) < 450) ? Number((7.5/100)*Number(OW_data)) : 450;
				employer=remPriceAfDec(((check2)) + ((7.5/100)*Number(AW_data)));//[7.5%(OW)] +7.5%(AW)*Max of $450
			}
		
		}else if(Age>65){
			
			if(TW_data<=50){
				
				employee=remPriceAfDec(Number(0)); //Nil 
				employer=remPriceAfDec(Number(0));//Nil
				
			}else if(TW_data > 50 && TW_data <= 500){
				
				employee=remPriceAfDec((7.5/100)*Number(TW_data));//7.5% (TW)
				employer=remPriceAfDec(Number(0));//Nil
				
			}else if(TW_data>500 && TW_data<750){ 
				
				employee=remPriceAfDec(((7.5/100)*Number(TW_data)) + ((0.15)*(Number(TW_data) - 500)));//7.5%(TW) +0.15(TW-$500)
				employer=remPriceAfDec(0.15*(Number(TW_data)-500));//0.15(TW-$500)
				
			}else if(TW_data>=750){
				var check1= (Number((12.5/100)*Number(OW_data)) < 750) ? Number((12.5/100)*Number(OW_data)) : 750;
				employee=remPriceAfDec((check1) + ((12.5/100)*Number(AW_data)));//[12.5%(OW)]+12.5%(AW)*Max of $750
				var check2= (Number((5/100)*Number(OW_data)) < 300) ? Number((5/100)*Number(OW_data)) : 300;
				employer=remPriceAfDec((check2) + ((5/100)*Number(AW_data)));//[5%(OW)]+5%(AW)*Max of $300
			}
		
		}
		
	 
		
		
		if(Owner == "Self"){
//			console.log("employee->"+employee +","+remPriceAfDec(employee))
			$("input[name=ccEmpleContrbSelf]").val(remPriceAfDec(employee));
			$("input[name=ccEmplrContrbSelf]").val(remPriceAfDec(employer)); 

			if(employee == 0){
				$("input[name=ccEmpleContrbSelf]").val(""); 
			}
			if(employer == 0){
				$("input[name=ccEmplrContrbSelf]").val("");
			}
		}
		
		if(Owner == "Spouse"){
			$("input[name=ccEmpleContrbSps]").val(remPriceAfDec(employee));
			$("input[name=ccEmplrContrbSps]").val(remPriceAfDec(employer)); 
			if(employee == 0){
				$("input[name=ccEmpleContrbSps]").val(""); 
			}
			if(employer == 0){
				$("input[name=ccEmplrContrbSps]").val("");
			}
		}
		
		
		callSumOfCpfMth();
	}
}


function callSumOfCpfMth(){  
var cpf_monthly;
var sumSlfCpfmth=0;
var sumSpsCpfmth=0;     

for(var i=0;i<1;i++){
	  
	if(!isEmpty(document.getElementById("ccEmpleContrbSelf").value  ||  document.getElementById("ccEmplrContrbSelf").value )){
		sumSlfCpfmth+= Number(document.getElementById("ccEmpleContrbSelf").value)  + Number(document.getElementById("ccEmplrContrbSelf").value);
	 } 
	
	if(!isEmpty( document.getElementById("ccEmpleContrbSps").value  || document.getElementById("ccEmplrContrbSps").value)){
		sumSpsCpfmth+= Number(document.getElementById("ccEmpleContrbSps").value)+ Number(document.getElementById("ccEmplrContrbSps").value);
	} 

}


	if(!(sumSlfCpfmth == 0 && sumSlfCpfmth == 0 )){
		$("#txtFldTotalCCSelf").val(isNaN(Number(sumSlfCpfmth))?"0":Number(sumSlfCpfmth));
		$("#txtFldTotalCCSps").val(isNaN(Number(sumSpsCpfmth))?"0":Number(sumSpsCpfmth));	
	}
	
	if(sumSlfCpfmth == 0){$("#txtFldTotalCCSelf").val("");}
	if(sumSlfCpfmth == 0 ){$("#txtFldTotalCCSps").val("");} 

}
var cpf_monthly={
		
		Cpf_MthSelf:['ccEmpleContrbSelf','ccEmplrContrbSelf'],
		Cpf_MthSpouse:['ccEmpleContrbSps','ccEmplrContrbSps'],
		SUMOF_CPFMTHLY_SLF:'SUMOF_CPFMTHLY_SLF',
		SUMOF_CPFMTHLY_SPS:'SUMOF_CPFMTHLY_SPS'
}


var Ann_Exp = {
		Ann_Exp_Self:['expdSelfRent', 'expdSelfUtil', 'expdSelfGrocery', 'expdSelfEatingout', 
		              'expdSelfClothing', 'expdSelfTransport', 'expdSelfMedical', 'expdSelfPersonal',
		              'expdSelfDepntcontr', 'expdSelfTaxes', 'expdSelfEntertain', 'expdSelfFestiv',
		              'expdSelfVacations', 'expdSelfCharity', 'expdSelfProploan', 'expdSelfVehiloan',
		              'expdSelfLoanrepay','expdSelfGi','expdSelfInsurance', 'expdSelfOthers' ],
		              
	    Ann_Exp_Sps:['expdSpsRent', 'expdSpsUtil', 'expdSpsGrocery', 'expdSpsEatingout',
	                'expdSpsClothing', 'expdSpsTransport', 'expdSpsMedical', 'expdSpsPersonal',
	                 'expdSpsDepntcontr', 'expdSpsTaxes', 'expdSpsEntertain', 'expdSpsFestiv',
	                 'expdSpsVacations', 'expdSpsCharity', 'expdSpsProploan', 'expdSpsVehiloan',
	                 'expdSpsLoanrepay','expdSpsGi','expdSpsInsurance', 'expdSpsOthers'],
		
	    Ann_Exp_Fam:['expdFamilyRent', 'expdFamilyUtil', 'expdFamilyGrocery',  'expdFamilyEatingout',
	                 'expdFamilyClothing',  'expdFamilyTransport',   'expdFamilyMedical', 'expdFamilyPersonal',
	                 'expdFamilyHousehold', 'expdFamilyDomestic',  'expdFamilyEnhance', 'expdFamilyTaxes',
	                 'expdFamilyEntertain', 'expdFamilyFestiv',  'expdFamilyVacations',  'expdFamilyCharity',
	                 'expdFamilyLoanrepay','expdFamilyGi','expdFamilyProploan',  'expdFamilyInsurance',  'expdFamilyOthers'],
		    		 
	   SUMOF_ANNEXP_SELF:'SUMOF_ANNEXP_SELF',
	   SUMOF_ANNEXP_SPS :'SUMOF_ANNEXP_SPS',
	   SUMOF_ANNEXP_FAM :'SUMOF_ANNEXP_FAM',
	  
};


var Ctg_Pln = {
		Contg_Self:['txtFldContSlfLvngNeed', 'txtFldContSpsLvngNeed', 'txtFldContFmlyLvngNeed'],
	SUMOF_CONTGPLN_SELF:'SUMOF_CONTGPLN_SELF',
}


var SrcOF_Inc={  
		
		SrcOfInc_Slf:['incsrcSelfEmpMonthly','incsrcSelfEmpAddlwage', 'incsrcSelfNempMonthly',
		              'incsrcSelfNempRentamt','incsrcSelfNempDivdamt',  'incsrcSelfNempOthamt',
		            ],
		             
	    SrcOfInc_Sps:['incsrcSpsEmpMonthly', 'incsrcSpsEmpAddlwage', 'incsrcSpsNempMonthly',
		              'incsrcSpsNempRentamt','incsrcSpsNempDivdamt', 'incsrcSpsNempOthamt'],
		              
		SrcOfInc_Joint:['incsrcJointEmpMonthly','incsrcJointNempMonthly','incsrcJointNempRentamt',
		                'incsrcJointNempDivdamt','incsrcJointNempOthamt'],          
		            
		                

        SrcOfIncIncrmt_Slf:['incsrcSelfEmpIncr','incsrcSelfNempIncr'
                            ,'incsrcSelfNempRentincr','incsrcSelfNempDivdincr',
                            'incsrcSelfNempOthincr'],
        SrcOfIncIncrmt_Sps:['incsrcSpsEmpIncr','incsrcSpsNempIncr',
			                'incsrcSpsNempRentincr','incsrcSpsNempDivdincr',
			                'incsrcSpsNempOthincr'],
        SrcOfIncIncrmt_Joint:['incsrcJointEmpIncr','incsrcJointNempIncr'
					        ,'incsrcJointNempRentincr','incsrcJointNempDivdincr'
					        ,'incsrcJointNempOthincr'],
		        		        				
							
        SrcOfIncPriod_Slf:['incsrcSelfEmpPeriod','incsrcSelfNempPeriod'
					        ,'incsrcSelfNempRentperd','incsrcSelfNempDivdperd',
					        'incsrcSelfNempOthperd'], 
        SrcOfIncPriod_Sps:['incsrcSpsEmpPeriod','incsrcSpsNempPeriod',
					        'incsrcSpsNempRentperd','incsrcSpsNempDivdperd',
					        'incsrcSpsNempOthperd'], 
        SrcOfIncPriod_Joint:['incsrcJointEmpPeriod','incsrcJointNempPeriod',
					        'incsrcJointNempRentperd','incsrcJointNempDivdperd',
					        'incsrcSpsNempOthperd'],
					        		
					         
		               
	    SRCOFINCM_SLF:'SUMOF_SRCOFINC', 
		SRCOFINCM_SPS:'SRCOFINCM_SPS', 
		SRCOFINCM_JOINT:'SRCOFINCM_JOINT',
		
		SRCOFINCRMNT_SLF:'SRCOFINCRMNT_SLF', 
		SRCOFINCRMNT_SPS:'SRCOFINCRMNT_SPS', 
		SRCOFINCRMNT_JOINT:'SRCOFINCRMNT_JOINT',
		
		SRCOFPER_SLF:'SRCOFPER_SLF', 
		SRCOFPER_SPS:'SRCOFPER_SPS', 
		SRCOFPER_JOINT:'SRCOFPER_JOINT',
		
		
}


var CPF={
		CPF_SLF_AC:['txtFldCpfSlfOrdAcCurr','txtFldCpfSlfSplAcCurr',
		           'txtFldCpfSlfMedSveCurr'  ],
		CPF_SLF_AA:['txtFldCpfSlfOrdAcAnnl','txtFldCpfSlfSplAcAnnl',
		            'txtFldCpfSlfMedSveAnnl'],
		 CPF_SPS_AC:['txtFldCpfSpsOrdAcCurr','txtFldCpfSpsSplAcCurr',
		             'txtFldCpfSpsMedSveCurr'],      
		 CPF_SPS_AA:['txtFldCpfSpsOrdAcAnnl','txtFldCpfSpsSplAcAnnl',
		    		 'txtFldCpfSpsMedSveAnnl'],
		    		 
		SUMOF_CPF_SELFCR:'SUMOF_CPF_SELFCR',
		SUMOF_CPF_SELFAC:'SUMOF_CPF_SELFAC',
		SUMOF_CPF_SPSCR:'SUMOF_CPF_SPSCR',
		SUMOF_CPF_SPSAC:'SUMOF_CPF_SPSAC',
}





 

var FNA_LIA={
		FNA_LIA_SLF:['liabSelfOverdraft','liabSelfShortmort','liabSelfTaxes',
		           'liabSelfOthers','liabSelfShortloan','liabSelfCcLoan','liabSelfContigent' ],
		FNA_LIA_SPS:['liabSpsOverdraft','liabSpsShortmort','liabSpsTaxes',
		            'liabSpsOthers','liabSpsCcLoan','liabSpsShortloan','liabSpsContigent'],
		FNA_LIA_FAM:['liabFamOverdraft','liabFamShortmort','liabFamTaxes',
		     		 'liabFamOthers','liabFamCCLoan','liabFamShortloan','liabFamContigent'],
		    		 
		            SUMOF_FINLIAB_SELF:'SUMOF_FINLIAB_SELF',
		            SUMOF_FINLIAB_SPS:'SUMOF_FINLIAB_SPS',
		            SUMOF_FINLIAB_FAM:'SUMOF_FINLIAB_FAM',
}


var CASH_ASS={
		CAST_ASS_SELF:['casstSelfSavingfd','casstSelfCashequ','casstSelfSrs' ],
		CAST_ASS_SPS:['casstSpsSavingfd','casstSpsCashequ','casstSpsSrs'],
		CAST_ASS_JOIN:['casstFamSavingfd','casstFamCashequ','casstFamSrs'],
		  		 
		    		 
		SUMOF_CASHASST_SELF:'SUMOF_CASHASST_SELF',
		SUMOF_CASHASST_SPS:'SUMOF_CASHASST_SPS',
		SUMOF_CASHASST_JOIN:'SUMOF_CASHASST_JOIN',
}



var OTH_ASS={
		OTH_ASS_SELF:['othasstSelfPers','othasstSelfClub','othasstSelfBusi','othasstSelfOth'],
		OTH_ASS_SPS:['othasstSpousePers','othasstSpouseClub','othasstSpouseBusi','othasstSpouseOth'],
		OTH_ASS_JOIN:['othasstJointPers','othasstJointClub','othasstJointBusi','othasstJointOth'],
		OTH_ASS_LOAN:['othasstLoansPers','othasstLoansClub','othasstLoansBusi','othasstLoansOth'],	 
		    		 
		SUMOF_OTHASST_SELF:'SUMOF_OTHASST_SELF',
		SUMOF_OTHASST_SPS:'SUMOF_OTHASST_SPS',
		SUMOF_OTHASST_JOIN:'SUMOF_OTHASST_JOIN',
		SUMOF_OTHASST_LOAN:'SUMOF_OTHASST_LOAN',
}


 
 
 


function getCalendar(id){
	  $("#"+id ).datepicker({ changeMonth: true, changeYear: true, dateFormat: 'dd/mm/yy'});
}


 


function isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern);
    
    if (dtArray == null) 
        return false;
    

    dtDay= dtArray[1];
    dtMonth = dtArray[3];    
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}

function chkFromToDateValidation(elmFrom,elmTo,msg){
	 
	var fromdate = $("#"+elmFrom);
	var todate = $("#"+elmTo);
	 
	
			
	if(!isEmpty(fromdate.val()) && !isEmpty(todate.val())){
		if(!validateDateComparision(fromdate,todate,"<=",msg));  		
		return;	
	}
}

function dhtmlChkDateValidation(elmFrom,elmTo,msg){
	var fromdate = elmFrom;
	var todate = elmTo;
	 
	
			
	if(!isEmpty(fromdate.val()) && !isEmpty(todate.val())){
		if(!validateDateComparision(fromdate,todate,"<=",msg));  		
		return;	
	}
}
function CheckDob(dob)
{
var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
 if(dob.value.match(dateformat))
{
	 
var opera1 = dob.value.split('/');
var opera2 = dob.value.split('-');
lopera1 = opera1.length;
lopera2 = opera2.length;
if (lopera1>1)
{
var pdate = dob.value.split('/');
}
else if (lopera2>1)
{
var pdate = dob.value.split('-');
}
var mm  = parseInt(pdate[0]);
var dd = parseInt(pdate[1]);
var yy = parseInt(pdate[2]);
var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
if (mm==1 || mm>2)
{
if (dd>ListofDays[mm-1])
{
	applyErrorToastrAlert("Invalid date format",dob);
	
return false;
}
}
if (mm==2)
{
var lyear = false;
if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
{
lyear = true;
}
if ((lyear==false) && (dd>=29))
{
	applyErrorToastrAlert("Invalid date format",dob);
return false;
}
if ((lyear==true) && (dd>29))
{ 
applyErrorToastrAlert("Invalid date format",dob);
return false;
}
}
}
else
{
if(!(isEmpty(dob.value))){ 
applyErrorToastrAlert("Invalid date format",dob);
dob.value="";
}
return false;
}
}









function checkPercntVal(elemid){ 
	 
	if(!isEmpty(elemid.value)){
		if(elemid.value > 100){ 
//		showAlert("% value should be less than or equal to 100",elemid);
			applyErrorToastrAlert("% value should be less than or equal to 100",elemid);
		elemid.value="";
		return false;
	   }
	}
	return true;
}
 

function EmailCheck(email){
	var mailformat =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;  
	if(email.value.match(mailformat))  
	{  
	return true;  
	}  
	else  
	{  
	if(!(isEmpty(email.value))){   /*changed*/
//	showAlert("Invalid email address!",email); 
	applyErrorToastrAlert("Invalid email address",email);
	email.value="";
	email.focus();  
	return false;  
	}  	
 }
	
}


function isEmpty(strVal) 
{ 
   if ((strVal == null) || (strVal == undefined) || (strVal == "undefined") || (strVal.length==0)) 
   {
      return true;
   }
   else 
   { 
      return false; 
   }
}//end IsEmpty

function isDecimal(event, obj) {
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;

    if (chCode >= 48 && chCode <= 57)

    { 
        return true;

    } else if (chCode == 46)

    {  if (obj.value.indexOf('.') >= 0)
    {  return false;
    }

        return true;

    } else

    {
 
        return false;

    }

}
function isNumberOneDecimal(evt,obj) {
	var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    		
		    if(iKeyCode == 46 && $(this).val().indexOf('.') != -1) {
		    	evt.preventDefault();
		    	 return false;
		     } // prevent if already dot	
		    
    		
    return true;
}
 
function isNumber(evt,obj) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    		
//    if(iKeyCode == 46 && $(this).val().indexOf('.') != -1) {
//    	evt.preventDefault();
//    	 return false;
//     } // prevent if already dot	
    

    
    	
    if (iKeyCode != 46 && iKeyCode > 31 && (  iKeyCode < 48 || iKeyCode > 57)){
    	
    		
    
    	$(obj).qtip({
    		content: {text : '<br> Numbers Only  ',title : ' FIPA - Notification ',button: true},
            //show: 'keypress',
            hide: 'keypress',        
            style: {
                classes: 'qtip-green qtip-rounded qtip-shadow'
            }, position: {
                my: 'top left',   
                at: 'bottom left', 
                viewport: $(window),
                target: $(obj)  
            }  
        });
    	
    	$(obj).qtip('show');
    	
    	setInterval(function(){$(obj).qtip('hide');$(".qtip").remove();}, 2500);
    	 
    	
        return false;
        
    }  
    return true;
} 



function isNumberKeydec(evt,obj) {
  //  debugger;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    
    if (charCode == 46) {
        return false;    
        
    }
    
    
    
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57) ){
    	$(obj).qtip({
    		content: {text : '<br> Numbers Only  ',title : ' FIPA -Notification ',button: true},
            //show: 'keypress',
    		 
            hide: { when: 'keypress', fixed: true },
            style: {
                classes: 'qtip-green qtip-rounded qtip-shadow'
            }, position: {
                my: 'top left',   
                at: 'bottom left', 
                viewport: $(window),
                target: $(obj)  
            }  
        });
    	
    	$(obj).qtip('show'); 
    	setInterval(function(){$(obj).qtip('destroy');}, 2500);
    	return false;
    }
    return true;
}

function setSelectedRow(chkbox){
	
	var rind = chkbox.parentNode.parentNode.rowIndex;
	$("#hTblSelectedRow").val(rind);
	
}


function chkClntRiskPref(radObj){
	
	/*if(radObj.checked){
		
		$('.spnClntRiskPref').each(function(){
			var $radObj = $(this);
			$radObj.css({'background-color':'transparent'});
		});
	}*///end of if deprecated function from 12_07_2018 
	
	$('.spnClntRiskPref').each(function(){
		if($(this).hasClass("radioChkd") && this==radObj){
			radObj.checked=false;
			$(radObj).removeClass("radioChkd")
			return false;
		}
		
		if(this.checked){
			$('.spnClntRiskPref').removeClass("radioChkd");
			$(this).addClass("radioChkd");
			return false;
		}
	});
	
}//end of chkClntRiskPref


function calcSum(elemObj, type) {
	
//	alert("elemObj"+elemObj);

	var elemId = '', sum = 0, zeroVal = '0.0000';
	if (!elemObj)
		elemId = 'null';
	else
		elemId = elemObj.id;
	
//	alert("elemId"+elemId);
	
	if (type == Cpf_Bal.SUMOF_CPFBAL_SLF) {
		for ( var tot in Cpf_Bal.Cpf_BalSelf) {
			var id = Cpf_Bal.Cpf_BalSelf[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('totcpfSelfbalcAmt').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('totcpfSelfbalcAmt').value = '';
	}// end of if

	if (type == Cpf_Bal.SUMOF_CPFBAL_SPS) {
		for ( var tot in Cpf_Bal.Cpf_BalSps) {
			var id = Cpf_Bal.Cpf_BalSps[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('totcpfSpsbalcAmt').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('totcpfSpsbalcAmt').value = '';
	}// end of if

	// Annual Expenditure
	if (type == Ann_Exp.SUMOF_ANNEXP_SELF) {
		for ( var tot in Ann_Exp.Ann_Exp_Self) {
			var id = Ann_Exp.Ann_Exp_Self[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('expdSelfTotalannl').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('expdSelfTotalannl').value = '';
	}// end of if

 
	if (type == Ann_Exp.SUMOF_ANNEXP_SPS) {
		for ( var tot in Ann_Exp.Ann_Exp_Sps) {
			var id = Ann_Exp.Ann_Exp_Sps[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('expdSpsTotalannl').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('expdSpsTotalannl').value = '';
	}// end of if
	
	 
	if (type == Ann_Exp.SUMOF_ANNEXP_FAM) {
		for ( var tot in Ann_Exp.Ann_Exp_Fam) {
			var id = Ann_Exp.Ann_Exp_Fam[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('expdFamilyTotalannl').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('expdFamilyTotalannl').value = '';
  }
	
 //end of Annl expenditure
	
 //Contingency plan
	if (type == Ctg_Pln.SUMOF_CONTGPLN_SELF) {
		for ( var tot in Ctg_Pln.Contg_Self) {
			var id = Ctg_Pln.Contg_Self[tot], othrElems = $('#' + id);
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
		}// end of for
		document.getElementById('txtFldContSlfYrsNeed').value = remPriceAfDec(sum);
		document.getElementById('txtFldContSpsYrsNeed').value = remPriceAfDec(sum);
		if (sum == zeroVal){
			document.getElementById('txtFldContSlfYrsNeed').value = '';
		   document.getElementById('txtFldContSpsYrsNeed').value = '';
		}
	}// end of if
	
	//end of Contingency plan
	
	//Source Of Income
	if (type == SrcOF_Inc.SRCOFINCM_SLF) {
		for ( var tot in SrcOF_Inc.SrcOfInc_Slf) {
			var id = SrcOF_Inc.SrcOfInc_Slf[tot], othrElems = $('#' + id);
			var addval=0;
			 if(id == 'incsrcSelfEmpMonthly'||id=='incsrcSelfNempMonthly'){
				addval=12;
			 }else{
				addval=1;
			 
			}
			
			
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value)*addval;
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			 
		}// end of for
		document.getElementById('insrcSelfTotannl').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSelfTotannl').value = '';
	}// end of if
	 
	 
	
	if (type == SrcOF_Inc.SRCOFINCM_SPS) {
		for ( var tot in SrcOF_Inc.SrcOfInc_Sps) {
			var id = SrcOF_Inc.SrcOfInc_Sps[tot], othrElems = $('#' + id);
			 
			var addval=0;
			 if(id == 'incsrcSpsEmpMonthly'||id=='incsrcSpsNempMonthly'){
				addval=12;
			 }else{
				addval=1;
			 
			}
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value)*addval;
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			
		}// end of for
		document.getElementById('insrcSpsTotannl').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSpsTotannl').value = '';
	}// end of if
	 
	
	
	if (type == SrcOF_Inc.SRCOFINCM_JOINT) {
		for ( var tot in SrcOF_Inc.SrcOfInc_Joint) {
			var id = SrcOF_Inc.SrcOfInc_Joint[tot], othrElems = $('#' + id);
			 
			var addval=0;
			 if(id == 'incsrcJointEmpMonthly'||id=='incsrcJointNempMonthly'){
				addval=12;
			 }else{
				addval=1;
			 
			}
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value)*addval;
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val())*addval;
			
		}// end of for
		document.getElementById('insrcJointTotannl').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcJointTotannl').value = '';
	}// end of if
	
	
	/*Source of Income - Increment*/
	if (type == SrcOF_Inc.SRCOFINCRMNT_SLF) {
		for ( var tot in SrcOF_Inc.SrcOfIncIncrmt_Slf) {
			var id = SrcOF_Inc.SrcOfIncIncrmt_Slf[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcSelfTotannlincr').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSelfTotannlincr').value = '';
	}// end of if
	
	
	
	if (type == SrcOF_Inc.SRCOFINCRMNT_SPS) {
		for ( var tot in SrcOF_Inc.SrcOfIncIncrmt_Sps) {
			var id = SrcOF_Inc.SrcOfIncIncrmt_Sps[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcSpsTotannlincr').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSpsTotannlincr').value = '';
	}// end of if
	
	
	
	if (type == SrcOF_Inc.SRCOFINCRMNT_JOINT) {
		for ( var tot in SrcOF_Inc.SrcOfIncIncrmt_Joint) {
			var id = SrcOF_Inc.SrcOfIncIncrmt_Joint[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcJointTotannlincr').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcJointTotannlincr').value = '';
	}// end of if
	
	
	/*Source of Income - Increment*/

	
	/*Source of Income - Period*/
	if (type == SrcOF_Inc.SRCOFPER_SLF) {
		for ( var tot in SrcOF_Inc.SrcOfIncPriod_Slf) {
			var id = SrcOF_Inc.SrcOfIncPriod_Slf[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcSelfTotannlperd').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSelfTotannlperd').value = '';
	}// end of if
	
	
	if (type == SrcOF_Inc.SRCOFPER_SPS) {
		for ( var tot in SrcOF_Inc.SrcOfIncPriod_Sps) {
			var id = SrcOF_Inc.SrcOfIncPriod_Sps[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcSpsTotannlperd').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcSpsTotannlperd').value = '';
	}// end of if
	
	if (type == SrcOF_Inc.SRCOFPER_JOINT) {
		for ( var tot in SrcOF_Inc.SrcOfIncPriod_Joint) {
			var id = SrcOF_Inc.SrcOfIncPriod_Joint[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('insrcJointTotannlperd').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('insrcJointTotannlperd').value = '';
	}// end of if
	
	/*Source of Income - Period*/
	
	//CPF
	if (type == CPF.SUMOF_CPF_SELFCR) {
		for ( var tot in CPF.CPF_SLF_AC) {
			var id = CPF.CPF_SLF_AC[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotCPFSelfCurrBal').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotCPFSelfCurrBal').value = '';
	}// end of if
	
	
	if (type == CPF.SUMOF_CPF_SELFAC) {
		for ( var tot in CPF.CPF_SLF_AA) {
			var id = CPF.CPF_SLF_AA[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotCPFSelfAnnCtr').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotCPFSelfAnnCtr').value = '';
	}// end of if
	
	
	if (type == CPF.SUMOF_CPF_SPSCR) {
		for ( var tot in CPF.CPF_SPS_AC) {
			var id = CPF.CPF_SPS_AC[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotCPFSpsCurrBal').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotCPFSpsCurrBal').value = '';
	}// end of if
	
	
	if (type == CPF.SUMOF_CPF_SPSAC) {
		for ( var tot in CPF.CPF_SPS_AA) {
			var id = CPF.CPF_SPS_AA[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotCPFSpsAnnCtr').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotCPFSpsAnnCtr').value = '';
	}// end of if
	// end of CPF
	

	
	//Cpf Monthly Contribution Total - Self:
	if (type == cpf_monthly.SUMOF_CPFMTHLY_SLF) {
		for ( var tot in cpf_monthly.Cpf_MthSelf) {
			var id = cpf_monthly.Cpf_MthSelf[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotalCCSelf').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotalCCSelf').value = '';
	}// end of if
	
	//Cpf Monthly Contribution Total - Sps:
	if (type == cpf_monthly.SUMOF_CPFMTHLY_SPS) {
		for ( var tot in cpf_monthly.Cpf_MthSpouse) {
			var id = cpf_monthly.Cpf_MthSpouse[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotalCCSps').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotalCCSps').value = '';
	}// end of if
	
	//Financial liabilities
	if (type == FNA_LIA.SUMOF_FINLIAB_SELF) {
		for ( var tot in FNA_LIA.FNA_LIA_SLF) {
			var id = FNA_LIA.FNA_LIA_SLF[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotFincLiabSelf').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotFincLiabSelf').value = '';
	}// end of if
	
	
	if (type == FNA_LIA.SUMOF_FINLIAB_SPS) {
		for ( var tot in FNA_LIA.FNA_LIA_SPS) {
			var id = FNA_LIA.FNA_LIA_SPS[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotFincLiabSps').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotFincLiabSps').value = '';
	}// end of if
	
	if (type == FNA_LIA.SUMOF_FINLIAB_FAM) {
		for ( var tot in FNA_LIA.FNA_LIA_FAM) {
			var id = FNA_LIA.FNA_LIA_FAM[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('txtFldTotFincLiabFam').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('txtFldTotFincLiabFam').value = '';
	}// end of if
	
	
	//Financial liabilities
	
	
	//CASH ASSETS
	
	if (type == CASH_ASS.SUMOF_CASHASST_SELF) {
		for ( var tot in CASH_ASS.CAST_ASS_SELF) {
			var id = CASH_ASS.CAST_ASS_SELF[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('casstSelfTotal').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('casstSelfTotal').value = '';
	}// end of if
	
	
	if (type == CASH_ASS.SUMOF_CASHASST_SPS) {
		for ( var tot in CASH_ASS.CAST_ASS_SPS) {
			var id = CASH_ASS.CAST_ASS_SPS[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('casstSpsTotal').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('casstSpsTotal').value = '';
	}// end of if
	
	
	if (type == CASH_ASS.SUMOF_CASHASST_JOIN) {
		for ( var tot in CASH_ASS.CAST_ASS_JOIN) {
			var id = CASH_ASS.CAST_ASS_JOIN[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('casstFamTotal').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('casstFamTotal').value = '';
	}// end of if
	 
	//CASH ASSETS
	
	
	//Other Assets
	if (type == OTH_ASS.SUMOF_OTHASST_SELF) {
		for ( var tot in OTH_ASS.OTH_ASS_SELF) {
			var id = OTH_ASS.OTH_ASS_SELF[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('othasstSelfTot').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('othasstSelfTot').value = '';
	}// end of if
	
	
	if (type == OTH_ASS.SUMOF_OTHASST_SPS) {
		for ( var tot in OTH_ASS.OTH_ASS_SPS) {
			var id = OTH_ASS.OTH_ASS_SPS[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('othasstSpouseTot').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('othasstSpouseTot').value = '';
	}// end of if
	
	
	if (type == OTH_ASS.SUMOF_OTHASST_JOIN) {
		for ( var tot in OTH_ASS.OTH_ASS_JOIN) {
			var id = OTH_ASS.OTH_ASS_JOIN[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('othasstJointTot').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('othasstJointTot').value = '';
	}// end of if
	
	
	if (type == OTH_ASS.SUMOF_OTHASST_LOAN) {
		for ( var tot in OTH_ASS.OTH_ASS_LOAN) {
			var id = OTH_ASS.OTH_ASS_LOAN[tot], othrElems = $('#' + id);
			 
			if (elemId == id)
				if (!isEmpty(elemObj.value))
					sum += parseFloat(elemObj.value);
			if (elemId != 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			if (elemId == 'null')
				if (elemId != id)
					if (!isEmpty(othrElems.val()))
						sum += parseFloat(othrElems.val());
			
		}// end of for
		document.getElementById('othasstLoansTot').value = remPriceAfDec(sum);

		if (sum == zeroVal)
			document.getElementById('othasstLoansTot').value = '';
	}// end of if
	//Other Assets
}


function EffRateCalcSum(ER1,ER2){
	  
	var CaSlfRoi=Number(ER1.value);
	var CaGenInfRate=Number(ER2.value);
	var sumEffRate=(1+CaSlfRoi)/(1+CaGenInfRate)-1;
	 
	return (sumEffRate);
	
 }

function PVCalculation(rate, periods, payment, future, type) {
	
	  // Initialize type
	  var type = (typeof type === 'undefined') ? 0 : type;

	  rate = eval(rate);
	  periods = eval(periods);

	  // Return present value
	  if (rate === 0) {
	    return - payment * periods - future;
	  } else {
	    return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 +rate * type) - future) / Math.pow(1 + rate, periods);
	  }
} 

function FVCalculation(rate, nper, pmt, pv, type) {
	  var pow = Math.pow(1 + rate, nper),
	    fv;
	  

	  pv = pv || 0;
	  type = type || 0;

	  if (rate) {
	    fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
	  } else {
	    fv = -1 * (pv + pmt * nper);
	  }

	  return fv;
	}


 function FVCalculation_temp1( rate, nper, pmtid, pv, type) {
	 	 
	 	var rate_val = 0;
		var pmt_val=0;
		var nper_val=0;
	    var pv_val=0;
	    var type_val=0;
	    
		
		if(typeof rate != "object" ){
			rate_val = rate;
		 }else{
			rate_val = rate.value;
		 }
		 
		if(typeof pmtid != "object" ){
			pmt_val= pmtid;
		 }else{
			
			pmt_val= pmtid.value;
		 }
		
		if(typeof nper != "object" ){
			nper_val = nper;
		 }else{
			 nper_val = nper.value;
		 }
		
		if(pv  != "object" ){
			pv_val = -(pv.value);
		 }else{
			 
			 pv_val = -(pv);
		 }
		
		if(type  != "undefined" ){
			type_val = type; 
		 }else{
			 type_val = type.value;
		 }
		
		 var pow = Math.pow(1 + rate_val, nper_val), fv;
		  
 
	if (rate_val > 0) {
		fv = (pmt_val * (1 + rate_val * type_val) * (1 - pow) / rate_val) - pv_val * pow;
		 
	} else {
		fv = -1 * (pv_val + pmt_val * nper_val);
		
	}
	  
	 return (fv);
}


function PMTCalculation(r,nper,pv,fv,type){
	
 	var rate_val = Number(r);  
	var nper_val=Number(nper);
    var pv_val=-Number(pv);
    var fv_val=Number(fv);
    var type_val=Number(type);
     

	 var pow = Math.pow(1 + rate_val, nper_val);  

//	 alert("rate_val=>"+rate_val+"/ nper_val=>"+nper_val+"/ pv_val=>"+pv_val+"/ fv_val=>"+fv_val+"/ type_val=>"+type_val+"/ pow value"+pow)
 
	 var pmt= -rate_val * (pv_val * pow + fv_val) / ((1 + rate_val*type_val) * (pow - 1));
	
	 return (pmt);
	 
}

function setAdvMgrId(advObj){
		
	var advId = advObj.value;
	
	var selIndex = advObj.selectedIndex;
	
	
	document.getElementById("selAdvMgrHidden").selectedIndex=selIndex;
	var mgrId = document.getElementById("selAdvMgrHidden").value;
	
	$("#mgrId").val(mgrId); 
	$("select#mgrId").prop("disabled",true);
	$("select#advstfId").prop("disabled",true);
	
	  
}
function setmanagerId(mgrId){
	  
	
	var mgrId = $("#mgrId option:selected").text();
 
	var totMgrNameFlds = document.getElementsByName("txtFldMgrName").length; 
	 for(var i=0;i<totMgrNameFlds;i++){
	 
		 document.getElementsByName("txtFldMgrName")[i].value = mgrId;
	 }
	 
	 
	if(isEmpty(mgrId.value)){
		 for(var i=0;i<totMgrNameFlds;i++){
		 document.getElementsByName("txtFldMgrName")[i].value="";
		 }
	}
	
	var totSignFlds = document.getElementsByName("lblSupervisorSign").length; 
	for(var i=0;i<totSignFlds;i++){ 
		 document.getElementsByName("lblSupervisorSign")[i].value = mgrId;
	}
		 
	if(isEmpty(mgrId.value)){
		 for(var i=0;i<totSignFlds;i++){
		 document.getElementsByName("lblSupervisorSign")[i].value = "";
		 }
	}
	
}


function setRepSign(selAdvId){
	
	var AdvId = $("#advstfId option:selected").text();
	  
	var totAdvNameFlds = document.getElementsByName("txtFldAdviserName").length; 
	 for(var i=0;i<totAdvNameFlds;i++){
	 
		 document.getElementsByName("txtFldAdviserName")[i].value = AdvId;
	 }
	 
	 
	if(isEmpty(selAdvId.value)){
		 for(var i=0;i<totAdvNameFlds;i++){
		 document.getElementsByName("txtFldAdviserName")[i].value="";
		 }
	}
	
	var totSignFlds = document.getElementsByName("lblRepSign").length; 
	for(var i=0;i<totSignFlds;i++){ 
		 document.getElementsByName("lblRepSign")[i].value = AdvId;
	}
		 
	if(isEmpty(selAdvId.value)){
		 for(var i=0;i<totSignFlds;i++){
		 document.getElementsByName("lblRepSign")[i].value = "";
		 }
	}

}

function clientdeclval(getidval,setidval){
	
	var elemObj = eval('fipaForm.' + getidval);
 	 
	var contvalue;
	if (elemObj){
		
		contvalue = elemObj.value;
		if(elemObj.type == "select-one"){			
			$("#"+setidval).selectpicker('val',contvalue);
		 
		}			
		
	}
	
	
	if(!(isEmpty(getidval) && isEmpty(setidval) )){
		document.getElementById(setidval).value=document.getElementById(getidval).value;
		 
	 }
	
}

function reorderTableRows(tblName,reorderflg) {
	
	if(reorderflg){
	
		var tblObj = document.getElementById(tblName);
		var rowLen = tblObj.tBodies[0].rows.length;	
		var tBodyObj = tblObj.tBodies[0];
		
		for(var i=0;i<rowLen;i++)
		{
			
	         var lclIndex = i+1;
	         if(tBodyObj.rows[i].cells[0].firstChild)
	        	 tBodyObj.rows[i].cells[0].firstChild.value =lclIndex;        	
	        
		} 	
	}
}//end incrIndex

function tableDeleteRow(tableId,autodelete){
	
	var table = document.getElementById(tableId);
	var tbody = table.tBodies[0];
	var rowCount = tbody.rows.length;
	 
	
	var deleteFlag = 0;
	
	if(rowCount<1){
		applyToastrAlert("No rows to delete!");
		return;
	}
	
	if(rowCount>=1){
		 
		
		if(!autodelete){
			
			for(var del=0;del<rowCount;del++){
				var row = tbody.rows[del];
				var chkbox = row.cells[2].childNodes[0];
				
				if(null != chkbox && true == chkbox.checked) {
				        deleteFlag = 1;
				}
			}// End of for(del)
			if(!deleteFlag){
				applyToastrAlert("Select a row to delete!");
				return;
			}	
			
		}
		
			

		// to delete the rows checked
		for(var del=0;del<rowCount;del++){
			var row = tbody.rows[del];
			
			mode = row.cells[1].childNodes[0].value;
			var chkbox = row.cells[2].childNodes[0];
		 
			if(((null != chkbox && true == chkbox.checked)||autodelete)) {
				if(mode == INS_MODE){
					tbody.deleteRow(del);
					if(isValidObject(document.getElementById('hSelectRow'))){
						document.getElementById('hSelectRow').value = '';
					}
					rowCount--;
					del--;
				}
				if(mode == QRY_MODE){
			        row.cells[1].childNodes[0].value = DEL_MODE;
			        chkbox.checked = false;
				}
			}
		}// End of for(del)
		
		reorderTableRows(tableId,true);
		
	}

}

function makeTblDeleteMode(tblIdArr){ 
	
//	alert("makeTblDeleteMode");
//	
//	alert(tblIdArr);
	
	if(isValidObject(tblIdArr[tblId])){
		
	for(var tblId in tblIdArr){   
		var tbl = document.getElementById(tblIdArr[tblId]),
		tblBody = tbl.tBodies[0],
	    len = tblBody.rows.length;
		  
		if(len>0){			
			tableDeleteRow(tblIdArr[tblId],true);
		}
	}
  }
	
}

function singleRecordViewDlg(content,currow) {
    
	$("#singlerowviewdivcontent").html(content);

    $("#singlerowviewdiv").dialog({
        resizable: false,
        title: "Private Banking - Single Record View",
        modal: true,
        minWidth: 450,
        minHeight:200,
        //height: 'auto',
        bgiframe: false,        
        buttons: [{text: " OK ",click:function(){
        	
        	if(currow){
        		
        	}
        	
        	$("#singlerowviewdiv").dialog('close');
        	
        	}
        }]
    });
}


function showFIPAModel(dialogId,dialogTitle){

	$("input,select,textarea").each(function(){ 
		$(this).removeClass("mandatoryFillFlds");
		$(this).qtip('disable');
		$(this).qtip('destroy',true); 
	});
	
	$('#'+dialogId).on('shown.bs.modal', function() {  
		if(!isEmpty(dialogTitle)){
			$(this).find(".modal-title").text(dialogTitle);
		}
		  
		  $(this).find(".modal-footer").find("button:eq(0)").unbind(); 
			$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
		});
		$('#'+dialogId).modal({
		  backdrop: 'static',
		  keyboard: true,
		  show:true
		});

}
 
function ajaxCall(parameter,servletName,CallBack) {
	
//	var jsnResponse = "";
			
		$.ajax({
			type : "POST",
			url : servletName,
			data : parameter,
			dataType : "json",
			async : true,
			cache:false,
//			timeout:15000,
//			beforeSend : function() {
//				alert("please wait loading...");				
//				showAlert($("#fipaTextLoader").html());				
//			},
			success : function(data,statusText) {	
//				alert("success");
//				jsnResponse = data;	
				CallBack(data);
			},
//			complete : function(data, statusText) {		
				
//			}, 
			error : function(request, status, error) {
				applyErrorToastrAlert("Please Contact System Administrator!");
				hideLoader();				
			}
		});

		
		
//		return jsnResponse;
}




function enableComboWhenSubmit(form)
{
     for(var elem=0;elem<form.elements.length;elem++)
     {
     if(form.elements[elem].type=='select-one' ||
    	form.elements[elem].type=='radio'|| 
    	form.elements[elem].type=='checkbox' || 
    	form.elements[elem].type=='text' || 
    	form.elements[elem].type=='textarea')
     {
      form.elements[elem].disabled=null;
     }    
     }//end for     
}//end enableComboWhenSubmit

function removeTblRows(tblId) {
  
	var tBodyObj = document.getElementById(tblId).tBodies[0];
	if(tBodyObj){
		var len = tBodyObj.rows.length;
		if (len > 0) {
			for (var i = len; i > 0; i--) {
				tBodyObj.removeChild(tBodyObj.rows[0]);
			}
		}
	}
}

function isValidObject(objToTest) 
{
	
  if (objToTest == null || objToTest == undefined) 
  { 
    return false;
  }

 return true;
}//end isValidObject



function createcell(rowobj,index,cellcontent){
	var cellobj = rowobj.insertCell(index);
	cellobj.innerHTML = '<input type="'+cellcontent[0]+'" readOnly="'+cellcontent[1]+'" class="pbNonEditTblTxt" value=""/>';
	//cellobj.append("<input type='"+cellcontent[0]+"' readonly='"+cellcontent[1]+"'");
}


function copyOptionsArrFromSel(sourceSelect){
	 
	var retArr = [];
	 
	for(var opt=0;opt<sourceSelect.options.length;opt++){
		
		retArr[opt] = new Option(sourceSelect.options[opt].value,sourceSelect.options[opt].text);
		
	}
	
	
	return retArr;
	
}

function copyOptionsArrFromSelSpilt(sourceSelect){
	 
	var retArr = [];
	 
	for(var opt=0;opt<sourceSelect.options.length;opt++){
		var spilted=sourceSelect.options[opt].value.split("^"); 
		retArr[opt] = new Option(spilted[1],sourceSelect.options[opt].text);
		
	}
	
	
	return retArr;
	
}

function comboMaker(cellObj,valArrayObj,selectedVal,addselectflg){
	   
	if(addselectflg){
		addSelectOption(cellObj.children[0]);
		cellObj.children[0].value = "";
		
	}
	
    
    for(var k=0; k < valArrayObj.length; k++)
    {
        if(valArrayObj[k].value.length>0)    {
        	cellObj.children[0].options[cellObj.children[0].options.length++] = new Option(valArrayObj[k].value,valArrayObj[k].text);
        }
        else    {
            cellObj.children[0].options.length=0;
            return;
        }
       
    }//end for{k}
    
    if(!isEmpty(selectedVal))    {
    	cellObj.children[0].value=selectedVal;
    }else{
    	cellObj.children[0].value="";
    }
}//end comboMaker



function addSelectOption(obj) {
	
    var option = document.createElement("option");
    option.text = "--SELECT--";
    option.value = "";
    obj.add(option,0);
    
}


function makeOptionArr(strValues,splitby){
	
	var retArr = [];
	
	var inArrObj = strValues.split(splitby);
	
	for(var opt=0;opt<inArrObj.length;opt++){
		
		retArr[opt] = new Option(inArrObj[opt],inArrObj[opt]);
		
	}
	
	return retArr;
	
}

function financialNumber(x){
	var tostringvar=x.toString();
	var number=tostringvar.toString().indexOf("e");  
	if(number == -1){
		number=x;
	}else{
		number=Number(tostringvar.toString().substring(0,number));
	}
	return number;
}

function remPriceAfDec(num){ 
//	var orinum=num.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0];
//	return orinum;
	return Math.round(num);
}

function remAmountAfDec(num){ 
	var orinum=num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
	return orinum;
}

function No(num){ 
	var orinum=num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
	return orinum;
}


function RemDecimalNumber(x){
	/*
	var tostringvar=x.toString();
	var number=tostringvar.toString().indexOf(".");  
	if(number == -1){
		number=x;
	}else{
		number=Number(tostringvar.toString().substring(0,number));
	}
	return number;
	*/
	return Math.round(x);
}

//function toFixed(x) {
//	  if (Math.abs(x) < 1.0) {
//	    var e = parseInt(x.toString().split('e-')[1]);
//	    if (e) {
//	        x *= Math.pow(10,e-1);
//	        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
//	    }
//	  } else {
//	    var e = parseInt(x.toString().split('+')[1]);
//	    if (e > 20) {
//	        e -= 20;
//	        x /= Math.pow(10,e);
//	        x += (new Array(e+1)).join('0');
//	    }
//	  }
//	  return x;
//	}

function makeArrSplit(strValues,splitby){

	var retArr = []; 
	var inArrObj = strValues.substr(1,strValues.length-2).split(splitby);
	
	for(var opt=0;opt<inArrObj.length;opt++){
		
		retArr.push(inArrObj[opt]);
		
	}
	
	return retArr;
}


function calcAge(dob) {

	var age = "";
	if (!isEmpty(dob)) {

		var birthday = dob.split("/")[2] + "-" + dob.split("/")[1] + "-"
				+ dob.split("/")[0];
		var now = new Date();
		var past = new Date(birthday);

		age = now.getFullYear() - past.getFullYear();
		
	}
	return isNaN(age) ? "" : age;
}




function validateEmail(emailId){

	var email = document.getElementById(emailId);
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                
	if(!filter.test(email.value)){
		applyErrorToastrAlert(VALID_EMAIL);
		email.value = '';
		email.focus();
		return false;
	}//end of if

}

(function ($){
	
	$.fn.maxlength = function(){
		$('textarea[maxlength]').keypress(function(event){
			var key = event.which;
			
			if(key >= 33 || key == 13 || key == 32){
				var maxlength = $(this).value.length;
				var length = this.value.length;
				if(length >= maxlength){
					event.preventDefault();
				}//end of if
			}//end of if
		});
	};//end of function
})(jQuery);


function validateMandatoryFlds(fld,message){
   
	var fldTrim = fld.value.trim(); 
	if(isEmpty(fldTrim)){
		
		showAlert(message,fld); 
		
		return false;
		
	}//end of if
	
	return true;
}//end of validateMandatoryFlds
 
function selectNullvalChk(row,col){ 
	
	var len;
	if(!isEmpty(col)){
		len=$(row).find('select:eq(0)').find('option[value="' + col + '"]').length;
	}else{
		len=0;
	}
	if(len > 0){
		$(row).find('select:eq(0)').val(col);
	}else{
		$(row).find('select:eq(0)').val("");
	} 
	return;
}

function selectNullOrBlank(row,col){ 
	var len,coltext;
	if(!isEmpty(col)){
		len=row.find('option[value="' + col + '"]').length; 
	}else{
		len=0;
	}
	if(len > 0){
		row.val(col); 
	}else{
		row.val(""); 
	} 
	return;
}


function setUnavailableText(select,col){ 
	var len;
	if(!isEmpty(col)){
		len=select.find('option[value="' + col + '"]').length; 
	}else{
		len=0;
	}
	if(len > 0){
		select.val(col); 
	}else{
//		select.val(""); 
		select.append($('<option>', { value: col, text: col }));
		select.val(col);
	} 
	return;
}

function validateFocusFlds(modelId,fld,msg){
   
	 var screename=$("#hTxtScreenName").val();
	var fldTrim = $("#"+fld).val();
	if(isEmpty(fldTrim) && $("#"+fld).is(":visible")){
		
		if((msg == Li_OWN)||(msg == Li_ASS) || (msg == Li_INS) || (msg == Li_POL)||
				(msg == Li_POLSTS) || (msg == Li_DATE) || (msg == Li_PLAN) || (msg == Li_MATDATE ) || (msg == Li_MATVALUE )) { 
			 
//			openDivForClient('lifeInsurce','lifeinscsecion','analysis_li','Life Insurance');
//			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").find("a").click(); 
//		    $("#sidebar-menu #analysis_li").find("ul li:eq(4)").addClass("sideMenuHighlight");
//		    $('#lifeInsNavTabsDets a[href="#lifeInsdetstab"]').click(); 	 
		    $("#lifeinsurance_li").trigger("click");
		    
		}else if((msg == SELF_NAME) || (msg == SELF_NRIC) || (msg == SELF_ADVSTF)||
				(msg == SELF_DOB) || (msg == SELF_NATION) || (msg == SELF_HMEADDR) 
				|| (msg == SELF_HMEADDR2) || (msg == SELF_RPOSTAL )   
				|| (msg == SELF_RCNTRY) || (msg == SELF_MAILADDR )  
				|| (msg == SELF_MAILADDR2) || (msg == SELF_MPOSTAL ) 
				|| (msg == SELF_MCNTRY)  ) {
 	 
//			openDivForClient('particulars','clientsection','dataform_li',"Client's Particulars");  
//			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").click(); 
//			 $("#sidebar-menu #dataform_li").find("ul li:eq(0)").addClass("sideMenuHighlight");
			
			$("#clientdets_li").trigger("click");
			    
			 
		} else if((msg == SPOUSE_NAME) || (msg == SPOUSE_NRIC) || (msg == SPOUSE_DOB)
				|| (msg == SPOUSE_NATION) || (msg == SPOUSE_HMEADDR)
				|| (msg == SPOUSE_HMEADDR2) || (msg == SPOUSE_RPOSTAL)
				|| (msg == SPOUSE_RCNTRY) || (msg == SPOUSE_MAILADDR)
				|| (msg == SPOUSE_MAILADDR2) || (msg == SPOUSE_MPOSTAL)
				|| (msg == SPOUSE_MCNTRY) ) {
			
//			openDivForClient('spousediv','spousesection','dataform_li',"Spouse's Particulars"); 
//			$("#sidebar-menu #dataform_li").find("ul li:eq(1)").addClass("sideMenuHighlight");
//			$("#sidebar-menu #dataform_li").find("ul li:eq(1)").find("a").click();
			
			$("#spousedets_li").trigger("click"); 
			 
		} else if((msg == TOAALYSFOR) || (msg == TOAPURPO)
				|| (msg == TOPLIFE) || (msg == TOPHL) || (msg == TOPAYSTYPES) || (msg == TOAALYSFORSELF)) { 
//			openDivForClient('typesofappln','typesofappsec','typesofAppln_li',"Types of Application");  
			
			 
		} else if((msg == HEALTHINS_RMKS)){
			
//			openDivForClient('lifeInsurce','lifeinscsecion','analysis_li','Life Insurance');
//			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").addClass("sideMenuHighlight");
//			$("#sidebar-menu #analysis_li").find("ul li:eq(4)").find("a").click();
			
			$("#lifeinsurance_li").trigger("click");		    
			$('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').click();
			
//			setTimeout(function() {$("#lifeInsurce").scrollTop(8000);}, 100);
			  
		}else if((msg == INT_NAME)||(msg == INT_NRIC)||(msg == INT_CONTACT)||
				(msg == INT_HOMEADDR)||(msg == INT_REL)){
//			openDivForClient('clientsdeclr','clientsdeclrdiv','clientsdeclr_li','AML Declaration');
//			$("#sidebar-menu #clientsdeclr_li").find("a").click();
			 
		} else if((msg == CHECK_PRODUCT)){
//			openDivForClient('adrecom','adrecomprodiv','advrecm_li','New Purchase & TopUp');
//			$("#sidebar-menu #advrecm_li").find("a").click();
			 
		}else if((msg == SEL_BENOWNER) || (msg == SEL_TPP) || (msg == SEL_PEP)){ 
//			openDivForClient('clientsdeclr','clientsdeclrdiv','clientsdeclr_li','AML Declaration');
//			$("#sidebar-menu #clientsdeclr_li").find("a").click();
			 
		} else if((msg == SWTCH_QUEST1) || (msg == SWTCH_QUEST1REMK) || (msg == SWTCH_QUEST2) ||
				(msg == SWTCH_QUEST3) || (msg == SWTCH_QUEST4)){ 
//		    openDivForClient('switchrep','adrecomswtcdiv','advrecm_li','Switching & Replacement');
//		    $("#sidebar-menu #advrecm_li").find("ul li:eq(1)").addClass("sideMenuHighlight");
//		    $("#sidebar-menu #advrecm_li").find("ul li:eq(1)").find("a").click();
		    
		}else if((msg == REASONS_RECOM)){
			 
//			openDivForClient('reasons','brofrecomdiv','reasons_li','Basis & Rationale of Recommendations');
//			$("#sidebar-menu #reasons_li").find("a").click();
			 
			
		}else if((msg == DECLARATION)){ 
//			openDivForClient('decbycli','decbyclidiv','decbycli_li','Declaration');
//			$("#sidebar-menu #decbycli_li").find("a").click();
			 
		}else if((msg == SUP_REASON) || (msg == SUP_DECLARATION)){ 
//			openDivForClient('suprvsr','suprvsrdiv','supervisor_li',"Supervisor's Review");
//			$("#sidebar-menu #supervisor_li").find("a").click();
			 
		}else if((screename == "cpfInterestRate")){
			
//			 $("#sidebar-menu ul li[id='masteraccintrates']").parent().removeClass("sideMenuHighlight nv");
//			 $("#sidebar-menu ul li[id='masteraccintrates']").addClass("sideMenuHighlight nv"); 
			 
		}else if((screename == "cpfAllocation")){
			
//			 $("#sidebar-menu ul li[id='masteraccallorates']").parent().removeClass("sideMenuHighlight nv");
//			 $("#sidebar-menu ul li[id='masteraccallorates']").addClass("sideMenuHighlight nv");
			 
		}else if((screename == "cpfContribution")){
			
//				$("#sidebar-menu ul li[id='mastercontri']").parent().removeClass("sideMenuHighlight nv");
//			   $("#sidebar-menu ul li[id='mastercontri']").addClass("sideMenuHighlight nv");
			    
		}else if((screename == "cpfAccType")){
//			 $("#sidebar-menu ul li[id='masteracctypes']").parent().removeClass("sideMenuHighlight nv");
//			   $("#sidebar-menu ul li[id='masteracctypes']").addClass("sideMenuHighlight nv");  
			 
		}else if((screename == "quotes")){
//			 $("#sidebar-menu ul li[id='masterquotes']").parent().addClass("sideMenuHighlight nv"); 
//			 $("#"+fld).focus();
		}
		
		
		$("#"+fld).addClass("mandatoryFillFlds");
		$("#"+fld).focus();
		showErrorTooltip(modelId,fld,msg); 
		$("#"+fld).qtip('show');
		return false;
		
	}//end of if 
	 
	return true;
}//end of validateMandatoryFlds


 
function validateFocusDhtmlFlds(dhtmlcol,msg){
	
	var mode= $(dhtmlcol).parents("tr").find("td:first").find('input:eq(0)').val();
	
	if(mode != "D"){
		
		var fldTrim = dhtmlcol.val();
		if(isEmpty(fldTrim)){
			
			if((msg == ATTACH_CATG) || (msg == ATTACH_TITLE) || (msg == ATTACH_DOC)) {
				
//				openDivForClient('attachment','attachmntdiv','attachment_li','Attachments');
//				$("#sidebar-menu #attachment_li").find("a").click(); 
//				$("#sidebar-menu #attachment_li").addClass("nv active");
				
				$("#upload_li").trigger("click");
				
			}else if(msg == OTHAREAOFCRN){
				
//				openDivForClient('othrareaofconcern','areaofconcerndiv','analysis_li','Other Areas of Concerns');
//				$("#sidebar-menu #analysis_li").find("ul li:eq(15)").addClass("sideMenuHighlight");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(15)").find("a").click();
				
				$("#financialinfo_li").trigger("click");
				$("#otherconcern_li").trigger("click");
				
			}else if((msg == CAD_APPLICANT) || (msg == CAD_TRANSTYPE) || (msg == CAD_ACCTYPE)){
				
//				openDivForClient('centralpro','providentdiv','analysis_li','Central Provident Fund');
//				$("#sidebar-menu #analysis_li").find("ul li:eq(11)").addClass("sideMenuHighlight");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(11)").find("a").click();
//				setTimeout(function() {	$("#CPF_APD").scrollTop(500);}, 1000);
				
				$("#financialinfo_li").trigger("click");
				$("#cpf_li").trigger("click");
				$('html, body').animate({ scrollTop: $("#CPF_APD").offset().top  }, 2000);
				
				
			}else if((msg == PERACCHOL) || (msg == PERACCTP) || (msg == PERASTNAME)){
				
//				openDivForClient('assets','cashassetdiv','analysis_li','Cash & Other Assets');
//				$("#sidebar-menu #analysis_li").find("ul li:eq(9)").addClass("sideMenuHighlight");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(9)").find("a").click(); 
//				setTimeout(function() {	$("#assets").scrollTop(2000);	}, 1000);
				
				$("#financialinfo_li").trigger("click");
				$("#cashasstmain_li").trigger("click");
				$("#cashotherasset_li").trigger("click");
				$('html, body').animate({ scrollTop: $("#assets").offset().top  }, 2000);
				
			}else if((msg == MAIN_HOLDER_NAME) || (msg == BANK_NAME) || (msg == BANK_NO) ||
					(msg == VEH_OWNER) || (msg == VEH_MKTVAL) || (msg == VEH_LOANVAL)){
				
//				openDivForClient('assets','cashassetdiv','analysis_li','Cash & Other Assets');
//				$("#sidebar-menu #analysis_li").find("ul li:eq(9)").addClass("sideMenuHighlight");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(9)").find("a").click(); 
//				setTimeout(function() {	$("#assets").scrollTop(10000);  
					$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false); 
//					$("#vehicleownership").focus(); 
//				},1000);
				
				$("#financialinfo_li").trigger("click");
				$("#cashasstmain_li").trigger("click");
				$("#cashotherasset_li").trigger("click");
				$('html, body').animate({ scrollTop: $("#assets").offset().top  }, 2000);
				
			}else if((msg == CHILD_NAME) || (msg == CHILD_AGE) || (msg == CHILD_DOB) || (msg == CHILD_RELATION)){
				
//				openDivForClient('chldpartdiv','childsection','dataform_li',"Children's Particulars");
//				$("#sidebar-menu #dataform_li").find("ul li:eq(2)").addClass("sideMenuHighlight");
//				$("#sidebar-menu #dataform_li").find("ul li:eq(2)").find("a").click();
				
				$("#particulars_li").trigger("click");			
				$("#childdets_li").trigger("click");
//				
			}else if((msg == FINTYPE_GOALS) || (msg == FIN_GOALS)||
					(msg == SAVEINV_PUR) || (msg == SAVEINV_WHEN) || (msg == SAVEINV_AMT)){
				
//				openDivForClient('fingoalsdiv','goalssection','finGoals_li',"Financial Goals");
				$("#fingoals_li").trigger("click");
				
			}else if((msg == POLICY_TYPE) || (msg == INSURED) || (msg == BENIFIT_TYPE)){
				
//				openDivForClient('lifeInsurce','lifeinscsecion','analysis_li',"Life Insurance");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(4)").addClass("sideMenuHighlight");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(4)").find("a").click(); 
//				$('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').click();
				
				$("#financialinfo_li").trigger("click");
				$("#lifeinsurance_li").trigger("click");
				$('#lifeInsNavTabsDets a[href="#healthInsdetstab"]').click();
				
				
			}else if((msg == PROP_DESC) || (msg == PROP_OWNER) || (msg == PROP_MARKETVAL)){
				
//				openDivForClient('property','propertydiv','analysis_li',"Properties");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(6)").addClass("sideMenuHighlight");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(6)").find("a").click();
				
				$("#financialinfo_li").trigger("click");
				$("#property_li").trigger("click");
				
			} else if((msg == OR_TYPE) || (msg == OR_FREQ) || (msg == OR_AGEBSE)|| (msg == OR_AGESTS)||
					(msg == IR_CLSFY) || (msg == IR_FRQ) || (msg == IR_AGEBASED)|| (msg == IR_AGESTS)||
				(msg == INCASS_CLSFY) || (msg == INCASS_FREQ) || (msg == INCASS_AGEBSD)|| (msg == INCASS_AGESTS)){
				
//				openDivForClient('retireplan','retireplandiv','analysis_li',"Retirement Planning");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(3)").addClass("sideMenuHighlight");
//				$("#sidebar-menu #analysis_li").find("ul li:eq(3)").find("a").click();  
//				setTimeout(function() {
//					$("#retireplan").scrollTop(10000); 
//				},1000);
				
				$("#financialinfo_li").trigger("click");
				$("#retirement_li").trigger("click");
				
			}     
			  
			 
			
			
			
			dhtmlcol.addClass("mandatoryFillFlds");
			
			
			
			dhtmlcol.focus(); 
			dhtmlcol.isDisabled = true;
			dhtmlcol.qtip({
			 		content: {text : msg}, 
			         style: {
			             classes: 'qtip-red qtip-rounded qtip-shadow'
			         }, position: {
			             my: 'top left',   
			             at: 'bottom left', 
			             viewport: $(window),  
			         }  
			     });
			
			 
			dhtmlcol.qtip('show');		 
//			dhtmlcol.qtip('show');
			
			/*Error Alert Remove while keyin*/
			dhtmlcol.on("change",function(){
				removeTooltip($(this));
			}); 
			
			if(dhtmlcol.hasClass("mandatoryFillFlds")){
				return false;
			}
			
		}//end of if 
		
		
	}
	
	
	 
	return true;
	
}
function validateFocusRDFlds(modelId,fld,msg){
	   
	var fldTrim = $("#"+fld).val().trim();
	
	if(!($("#"+fld).is(":disabled"))){
	if(isEmpty(fldTrim)){
		
		if(!(modelId == 'retmandatoryDialog')){
		if((msg == RETSCREEN_INTSLFAGE) || (msg == RETSCREEN_INTSPSAGE) || (msg == RETSCREEN_RETAGEBASE)||
				(msg == RETSCREEN_YRSTORET) || (msg == RETSCREEN_CORSLFAGE) || (msg == RETSCREEN_CORSPSAGE) 
				|| (msg == RETSCREEN_PROSLFAGE) || (msg == RETSCREEN_PROSPSAGE 
						|| (msg == RETSCREEN_PROSLFLVYRRET) || (msg == RETSCREEN_PROSPSLVYRRET)
					|| (msg == RETSCREEN_PROFAMLVYRRET) || (msg == RETSCREEN_ROISLF)
					|| (msg == RETSCREEN_ROISPS) || (msg == RETSCREEN_ROIFAM)
					|| (msg == RETSCREEN_LVYRSLF) || (msg == RETSCREEN_LVYRSPS)
					|| (msg == RETSCREEN_LVYRFAM))) { 
			 
			
			$("button[class=close]").click(); 
//			openDivForClient('retireplan','retireplandiv','analysis_li','Retirement Planning');  
			$("#sidebar-menu #analysis_li").find("ul li:eq(3)").addClass("sideMenuHighlight");
			$("#sidebar-menu #analysis_li").find("ul li:eq(3)").find("a").click();
		setTimeout(function() {
//			$("#retireplan").scrollTop(0);
			$("#"+fld).focus();
		}, 100);
			 
		} 
		}
 
		 
		$("#"+fld).addClass("mandatoryFillFlds");
		$("#"+fld).focus();
		showErrorRDTooltip(modelId,fld,msg); 
		$("#"+fld).qtip('show');
		return false;
		
	}//end of if 
	}
	return true;
}//end of validateMandatoryFlds
 
function validateFocusDhtmlFldsWA(dlg,dhtmlcol,msg){
	
	var mode_r = $(dhtmlcol).closest("tr").find("td:first").find('input:eq(0)').val();
	
	if(mode_r  != "D"){
		
		
		var fldTrim = dhtmlcol.val();
		if(isEmpty(fldTrim)){  
			dhtmlcol.addClass("mandatoryFillFlds"); 
			dhtmlcol.focus(); 
			dhtmlcol.isDisabled = true;
			dhtmlcol.qtip({
			 		content: {text : msg}, 
			         style: {
			             classes: 'qtip-red qtip-rounded qtip-shadow'
			         }, position: {
			             my: 'top left',   
			             at: 'bottom left', 
			             viewport: $(window), 
			             target: dhtmlcol,
			             container:$("#"+dlg),
			         }  
			     });
			
			 
			dhtmlcol.qtip('show'); 
			 
			 
			dhtmlcol.qtip('show');
			/*Error Alert Remove while keyin*/
			dhtmlcol.on("change",function(){
				removeTooltip($(this));
			}); 
			
			if(dhtmlcol.hasClass("mandatoryFillFlds")){
				return false;
			}
			
		}//end of if 
		
	}
	
	
	 
	return true;
	
}
function validateCntry(selCntryId,cityFldId,stateFldId){
	
	var selCntryObj = document.getElementById(selCntryId);
	
	if(!isEmpty(selCntryObj.value)){
		
		if(selCntryObj.value == CNTRY_SINGAPORE_VAL){
			
		  document.getElementById(cityFldId).value = '';
		  document.getElementById(cityFldId).readOnly = true;
		  document.getElementById(cityFldId).className = 'readOnlyText';
		  
		  document.getElementById(stateFldId).value = '';
		  document.getElementById(stateFldId).readOnly = true;
		  document.getElementById(stateFldId).className = 'readOnlyText';
		  
		}else{
			
			 document.getElementById(cityFldId).readOnly = false;
			  document.getElementById(cityFldId).className = 'editableCls';
			  
			  document.getElementById(stateFldId).readOnly = false;
			  document.getElementById(stateFldId).className = 'editableCls';
			  
		}//end of if
		
	}//end of if
}//end of validateCntry


function trimStr(value){
	return value.replace(/(^\s+|\s+$)/g, '');
}//end of trimStr 
	


function openURLInNewTab(webSiteObjId){
	
	var webSiteObj = document.getElementById(webSiteObjId);
	var webSiteFldVal = webSiteObj.value;
	
	if(!validateMandatoryFlds(webSiteObj, MASTR_DIST_WEB)) return;
	
	if(webSiteFldVal.indexOf('http://') == -1)webSiteFldVal = 'http://'+webSiteFldVal;
	
	window.open(webSiteFldVal,'_blank');
	window.focus();
	
}//end of openURLInNewTab



//Function for making component for Calendar
function getCalendar(event,txtFldId) {
	
	var dateFld = document.getElementById(txtFldId) || txtFldId;
	
//	if(tblElem){
//		scwShow(tblElem, event);	
//	}else{
	if(dateFld)
		scwShow(dateFld, event);
//	}
	 
	
} // End Function (getCalendar)


function getCalendarInTbl(cal, event) {
	
	var code;
	if (event.keyCode)
		code = event.keyCode;
	else if (event.which)
		code = event.which;

	if (code != 9) { // To escape the tab key in firefox.
		var parentCel = cal.parentNode;

		var hDateValue = parentCel.childNodes[1].value;
        var tblElem = parentCel.childNodes[0];
        
		if (hDateValue == INS_MODE) {
			getCalendar(event,tblElem);
		} else if (hDateValue == UPD_MODE) {
			getCalendar(event,tblElem);
		} else {
			return false;
		}
		cal.focus();
	}
}// End function getCalendarInTbl






/** Function to Check the Max Length for Whole Numbers and Decimal Values*/

function chkDecimal(cellObj,maxlen,decilen)	{
	
	//alert(decilen);	
	
	
	if(!isEmpty(cellObj.value))		{
		var cellValue=cellObj.value;
		var cellValueLen=cellValue.length;
		var precisionLen=maxlen-decilen;
		
		if(cellValue.indexOf(".")== -1)	{			
			if(cellValueLen>precisionLen)	{
				cellObj.value=cellObj.value.substring(0,precisionLen);
				return false;
			}
			 
		}
		
		else if(cellValue.indexOf(".")!=-1)		{			
			var splitDeci= cellValue.split(".");
			var splitInteger=splitDeci[0];
			var splitDecimal=splitDeci[1];
			var splitIntLen= splitInteger.length;
			var splitDeciLen= splitDecimal.length;
			
					
			if(splitIntLen>precisionLen)		{				
				cellObj.value=splitInteger.substring(0, precisionLen) + "."+splitDeci[1];
				return false;
			}
			
			if(splitDeciLen > decilen){ //changed the == symbol to > symbol on 11-10-2012.
				var dec;
				var temp = cellObj.value.split(".");
//				alert(temp);
				dec =  temp[1].substring(0,(decilen-1));
//				alert(precisionLen+","+temp[0].length+","+splitIntLen+","+temp[0]+"."+dec);
				cellObj.value="";
				if((temp[0].length > (precisionLen))){
//					alert("1111");
					cellObj.value=temp[0]+"."+dec;
				}else if((temp[0].length <= (precisionLen))){
//					alert("222");
					cellObj.value=splitInteger.substring(0, precisionLen)+"."+dec;
				}
				//cellObj.value=cellValue.substring(0, (decilen-1));
				return false;
			}
		}
	}
	
	return true;
}//end chkDecimal


function blockNonNumbers(obj, e, allowDecimal, allowNegative)
{
	var key = '';
	var isCtrl = false;
	var keychar;
	var reg;
		
	if(window.event) {
		key = e.keyCode;
		isCtrl = window.event.ctrlKey;
	}
	else if(e.which) {
		key = e.which;
		isCtrl = e.ctrlKey;
	}
	
	if (isNaN(key)) return true;
	
	keychar = String.fromCharCode(key);
	
	// check for backspace or delete, or if Ctrl was pressed
	if (key == 8 || isCtrl)
	{
		return true;
	}

	reg = /\d/;
	var isFirstN = allowNegative ? keychar == '-' && obj.value.indexOf('-') == -1 : false;
	var isFirstD = allowDecimal ? keychar == '.' && obj.value.indexOf('.') == -1 : false;
	
	return isFirstN || isFirstD || reg.test(keychar);
}//end of blockNonNumbers


function tblRowHover(tblId){
	
	
	$('#'+tblId+' tr').mouseover(function() {
		$(this).find('td').each (function() {
			//$(this).find('input').css("background-color","transparent");				
			}); 
	});	
	
	$('#'+tblId+' tr').mouseout(function() {
		$(this).find('td').each (function() {
			//$(this).find('input').css("background-color","transparent");				
			}); 
	});	
	
	$('#'+tblId+' tr').each(function() {
		$(this).dblclick(function(){
			var rad = $(this).find("td").eq(1).find("input").eq(0);
//			$(rad).prop("checked", true);
			
//			populateSearchDetails($(rad));
		}); 
	});
	
	 
	
}	


function singleRecordView(tableId){
	
	var table = document.getElementById(tableId);	
	var tbody = table.tBodies[0];
	var rowCount = tbody.rows.length;
	var currow = null;
	var svflag=false;
	
	if(rowCount<1){
		applyToastrAlert("No rows to single record view!");
		return;
	}
	
	for(var sv=0;sv<rowCount;sv++){
		
		var row = table.rows[sv];
		var chkbox = row.cells[2].childNodes[0];

		if(null != chkbox && true == chkbox.checked) {
			svflag = true;
			currow = row;
		}
	}
	
	if(!svflag){
		applyToastrAlert("Select row for single record view!");
		return;
	}	
	 
		
	var headertbl = document.getElementById(tableId+"headerTbl").childNodes[0].childNodes[0];
	var headerrow = headertbl.tHead;
	var totalcol = currow.cells.length;
	var html = "<table class='pbsinglerowTable' id='pbsinglerowtbl'>";
	
	for(var cel=3;cel<totalcol;cel++){
		
		var cssclass = headerrow.rows[0].cells[cel].className;
		var colHead = headerrow.rows[0].cells[cel].innerHTML ;
		var colContent = currow.cells[cel].innerHTML;
		
		colContent = colContent.replace(/pbEditTableText/g, 'pbsinglerowEditTableText');
		colContent = colContent.replace(/pbSelect/g, 'pbsinglerowSelect');
		
		html += "<tr class='pbsinglerowborder'>" +
					"<td class='"+cssclass+"' align='right'>"+colHead+"</td> " +
					"<td class='ui-widget-content'>"+ colContent + "</td>" +
				"</tr>";
	}
	
	html += "</table>";	
	
	singleRecordViewDlg(html,currow);
	
	//return html;
}


 


function openDivForClient(parentid,chldid,listid,titleName){

//	alert(parentid+"->"+chldid+"->"+listid+"->");

	show(parentid);	
	showchild(chldid);
	$("#sidebar-menu").find("ul li").removeClass("sideMenuHighlight");
	if(titleName!=""){
	$("#menuTitles").html("");
	$("#menuTitles").html(titleName);
	$("#menuTitles").css("display","none"); 
	$("#fipaBreadcrumb").html(""); 
	if(!(titleName == "Profile Summary")){
	$("#fipaBreadcrumb").append($('#sidebar-menu #typesofAppln_li').get(0).innerHTML); 
	}else{
		$("#fipaBreadcrumb").append($('#sidebar-menu #profile_li').get(0).innerHTML);  
	} 
	$("#fipaBreadcrumb").append("<a></a>");
	$("#fipaBreadcrumb").find("a:eq(0)").addClass("active"); 
	 
	}

//	alert($('#sidebar-menu #'+listid+'  ul').get(0))
	$('#sidebar-menu #'+listid+'  ul').css('display','none'); 
	$('#sidebar-menu #'+listid).addClass('active');  

	if ($('#sidebar-menu #'+listid).is('.active')) {

		$('#sidebar-menu #'+listid).is(':focus');
		$('#sidebar-menu li ul').slideUp();
		$('#sidebar-menu li ul').removeClass('vn');
		$('#sidebar-menu #'+listid).addClass('nv');   
		$('#sidebar-menu li').removeClass('active');
		$('#sidebar-menu #'+listid).addClass('active');  
		$('#sidebar-menu #'+listid+'  ul').css('display','block');  

	} else { 

		$(this).removeClass('active');
		$('ul', this).slideUp();
		$(this).removeClass('nv');
		$(this).addClass('vn');
	}

	

}



function valiBussAtr(val,elmid){
	  
	 
	if(!isEmpty(val.value)){
		
		if(val.value == 'Others'){
		showAlert("Please Specify Details!",elmid); 
		elmid.removeAttribute('readonly');
		}
		
	}
}

function showOthersDets(elem,elemtoshow,elemtofocus){
	 
	
	if(elem.checked){
		document.getElementById(elemtoshow).style.display="inline";
		document.getElementById(elemtofocus).readOnly=false;
		showAlert("Please Specify Details!",document.getElementById(elemtofocus)); 
	}else{
		document.getElementById(elemtofocus).value="";
		document.getElementById(elemtofocus).readOnly=true;
		document.getElementById(elemtoshow).style.display="none";
		$(elemtoshow).hide();
	}	
}

function hideOthersDets(elem,elemtoshow,elemtofocus){
	
		document.getElementById(elemtofocus).value="";
		document.getElementById(elemtofocus).readOnly=true;
		document.getElementById(elemtoshow).style.display="none";
		$(elemtoshow).hide();		
}

function chkOthrDets(chkval,elmid){
	 
	if(chkval.checked == true){ 
		showAlert("Please Specify Details!",elmid); 
		elmid.removeAttribute('readonly');
		
	}
	 
}

function UnChkSelectAll(valChk){
	var elmchkd = document.getElementById("chkselectall");
	if(!isEmpty(valChk.value)){ 
		 if(elmchkd.checked  == true){
			 elmchkd.checked = false; 
		 } 
	}
}


 
function chgRegAddrToMailAdd(elmid,chgid,checkedVal){  
	
	var chkspsReg=$("#dfSpsRegmailaddrSame").is(":checked");
	var chkspsMail=$("#dfSpsMailaddrAsSelf").is(":checked"); 
	var chkspsSameReg=$("#dfSpsRegmailaddrSame").is(":checked");
	
	
	if(!($("#"+checkedVal).is(":checked"))){
		if(( !chkspsReg  && !chkspsMail)){
	if(!(isEmpty(elmid.value))){   
			$("#"+chgid).val($(elmid).val());
	}else{
		document.getElementById(chgid).value = "";
		$("#"+chgid).val("");
	}
		}   
	}	
}


function chgRegAddr1(elmid,chgid,checkedVal){  
	
	var chkspsReg=$("#dfSpsRegmailaddrSame").is(":checked");
	var chkspsMail=$("#dfSpsMailaddrAsSelf").is(":checked"); 
	var chkspsSameReg=$("#dfSpsRegmailaddrSame").is(":checked");
	
	
	if(!($("#"+checkedVal).is(":checked"))){
		 
	if(!(isEmpty(elmid.value))){   
			$("#"+chgid).val($(elmid).val());
	}else{
		document.getElementById(chgid).value = "";
		$("#"+chgid).val("");
	}
		}   
	 	
}

function chkSpsReg(curElm,RegElm,MailElm){
	var chkspsSameReg=$("#dfSpsRegmailaddrSame").is(":checked");
	var chkspsMail=$("#dfSpsMailaddrAsSelf").is(":checked"); 
	
	var elmId=$(curElm).val();
	
	if(!(isEmpty(elmId))){
		if(chkspsSameReg){
			$("#"+RegElm).val(elmId);
		}
		if(chkspsMail){
			$("#"+MailElm).val(elmId);
		}
	}
}



function chgIntrptrPrsnt(chkval){
	
	var objval=chkval.value;
	if(!isEmpty(objval)){ 
		if(objval == "Y"){
			showAlert(INTRPER_KEYIN,amlIntprtName);
			InterpreterKeyin();
			 
		}else if(objval == "N" || objval == " "){
			 InterpreterKeyout();
		}  
		
	}
	
}

  


function chgeSignature(chgeId,elmId){ 
	if(!(isEmpty(chgeId))){ 
		var totSignFlds = elmId.length; 
		for(var i=0;i<totSignFlds;i++){
			elmId[i].value=chgeId.value;
		}
	 } 
}

function chgeClntSpsText(chgeId,elmId,nameId){
	

	if(!(isEmpty(chgeId))){ 
		var totSignFlds = elmId.length; 
		for(var i=0;i<totSignFlds;i++){
			elmId[i].value=chgeId.value;
		}
		
		nameId.value = chgeId.value;
	 } 
}
 


function creatSubmtDynaReportPDF(href){

	var lex1 = href.split('?');
	var action= lex1[0];
	var qstr = lex1[1];
	var obj = " ";

	var formId = document.getElementById("hiddenForm");
	var divId = document.getElementById("dynamicFormDiv");

	if(formId){
		if(divId)
			formId.removeChild(divId);
	}

	var newdiv = document.createElement('div');
	newdiv.id = "dynamicFormDiv";

	if(qstr != null) {
		var params = qstr.split('&');
		for(var p=0;p< params.length;p++){
			var keyValue = params[p].split('=');
			var name = keyValue[0];
			var value = keyValue[1];

			if(value.indexOf("\'") != -1)
				value = value.replace("\'","\'");

			obj += '<input type="hidden" name="'+name+'" value="'+value+'"/>';

		}
	}
	newdiv.innerHTML = obj;

	if(document.getElementById("hiddenForm"))
			document.getElementById("hiddenForm").appendChild(newdiv);

	document.forms["hiddenForm"].action=action;
	document.forms["hiddenForm"].method="POST";

	window.open('', 'TheWindowBIRT',"channelMode,toolbar=no,scrollbars=no,location=no,resizable =yes");
	document.getElementById("hiddenForm").submit();

}//end creatSubmtDynaReport

 

function fipaTooltip(obj){ 
	var objval;  
	
	 if($(obj).is("select")){ 
		 objval= $(obj).find("option:selected").text();
     }else {
    	 objval= $(obj).val(); 
     }
	 
	$(obj).isDisabled = true;
      $(obj).qtip({ 
         content: {
        	 text:objval,
               title: { 
                  button: false
               }  
         }, 
         show: {solo: true, ready: false, when: 'mouseover'},
          
         hide: {
             event: 'mouseout'
           },
         style: {
                classes: 'qtip-green qtip-rounded qtip-shadow'
            },
            position: {
                my: 'top left',   
                at: 'bottom left', 
                viewport: $(window),
                target: $(obj)  
            }    
      });
      
    
      
       
      if(!isEmpty(objval) && !(objval == "--SELECT--")){ 
    	  $(obj).qtip('show'); 
      }else if(isEmpty(objval)){ 
    	  	$(obj).qtip('disable'); 
      }else{
    		$(obj).qtip('disable'); 
      }	  
      
      
	     
	     
}




//to remove backspace option 
$(function(){
    /*
     * this swallows backspace keys on any non-input element.
     * stops backspace -> back
     */
    var rx = /INPUT|SELECT|TEXTAREA/i;

    $(document).bind("keydown keypress", function(e){
        if( e.which == 8 ){ // 8 == backspace
            if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
                e.preventDefault();
            }
        }
    });
});

function showLoader(){   
	$(".loading").show();
//	$("#fipaTextLoader").position({my: "center",at: "center",of: window});  
	 $("#layoutfooter").css("display","none");
 
}

function hideLoader(){
	
//	setTimeout(function(){
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);
//		$("body").click();
//	},80); 	
	
	$(".loading").hide();
	$("#layoutfooter").css("display","inline-block"); 

}//end of hideLoader

function hideLoaderOnly(){
	
// 	console.log("hideLoaderOnly");
	
	$(".loading").hide();
	$("#layoutfooter").css("display","inline-block"); 

}//end of hideLoader


function focusId(NRIC_id,focusId){
  if(!isEmpty(NRIC_id.value)){
	 focusId.focus();
  }
}
 
function FVCalculation_temp2(id , rate, nper, pmtid, pv, type) {
 	 
	 	var rate_val = 0;
		var pmt_val=0;
		var nper_val=0;
	    var pv_val=0;
	    var type_val=0;
	    
		
		if(typeof rate != "object" ){
			rate_val = 6
//				rate;
		 }else{
			rate_val = 6
//				rate.value;
		 }
		 
		if(typeof pmtid != "object" ){
			pmt_val= pmtid;
		 }else{
			
			pmt_val= pmtid.value;
		 }
		
		if(typeof nper != "object" ){
			nper_val = nper;
		 }else{
			 nper_val = nper.value;
		 }
		
		if(pv  != "object" ){
			pv_val = -(pv.value);
		 }else{
			 
			 pv_val = -(pv);
		 }
		
		if(type  != "undefined" ){
			type_val = type; 
		 }else{
			 type_val = type.value;
		 }
		
		 var pow = Math.pow(1 + rate_val, nper_val), fv;
		 
		 
//		 alert("FV"+"rate"+rate_val+"||nper"+nper_val+"||pmtid"+pmt_val+"||pv"+pv_val+"||type"+type_val+"pow"+pow);

	if (rate_val > 0) {
		fv = (pmt_val * (1 + rate_val * type_val) * (1 - pow) / rate_val) - pv_val * pow;
		 
	} else {
		fv = -1 * (pv_val + pmt_val * nper_val);
		
	}
	 
	 id.value = fv;
	 return (fv);
}
 
 
 function chgeBenTppPepFlg(elem,eledivEnable,elemtofocus){  
	 
	 if(elem.checked){
		 if(!(stafftype == STAFFTYPE_STAFF)){
	 if(eledivEnable == "beneficialOwnerDiv"){
		if(elem.value == 'Y'){  
			$("#beneficialOwnerDiv :input").prop('disabled', false); 
			$('#beneficialOwnerDiv :input').removeClass("disabledCursor");
			$("#"+elemtofocus).focus(); 
			
		}else if(elem.value == 'N'){
			 $("#beneficialOwnerDiv :input").prop('disabled', true);  
			 $('#beneficialOwnerDiv :input').addClass("disabledCursor");
		}	
	}else if(eledivEnable == "PolExpPersDiv"){
		if(elem.value == 'Y'){  
			$("#PolExpPersDiv :input").prop('disabled', false); 
			$('#PolExpPersDiv :input').removeClass("disabledCursor");
			$("#"+elemtofocus).focus(); 
			
		}else  if(elem.value == 'N'){
			 $("#PolExpPersDiv :input").prop('disabled', true);  
			 $('#PolExpPersDiv :input').addClass("disabledCursor");
		}
		
	}else if(eledivEnable == "ThirdPartyPayerDiv"){
		if(elem.value == 'Y'){  
			$("#ThirdPartyPayerDiv :input").prop('disabled', false); 
			$('#ThirdPartyPayerDiv :input').removeClass("disabledCursor");
			$("#"+elemtofocus).focus(); 
			
		}else  if(elem.value == 'N'){
			 $("#ThirdPartyPayerDiv :input").prop('disabled', true); 
			 $('#ThirdPartyPayerDiv :input').addClass("disabledCursor");
		}
	}
		 }
	 }
 }
 
function fillLifeInsUtIlpProdt(elmid){
	 
	var elementVal = $(elmid).attr("data-attr");  
	 if(!(stafftype == STAFFTYPE_STAFF)){
		 
	if(!isEmpty(elementVal)){ 
		if(elementVal == 'LS' || elementVal == 'LF'){
		 
			$("#lifeInsurancePlanDets").css('display','block');
			$("#SwrepLifeInsPlanDets").css('display','block');
		}
		
		if(elementVal == 'AS' || elementVal == 'AF'){
	 
			$("#UtIlpFundDets").css('display','block');
			$("#SwrepUtIlpFundDets").css('display','block');
		}
		
	}
	 }
}

/*
function diffAddrFunc(openFor,openFlg){
 
	if(openFor == 'Self'){
	
		if(openFlg){ 
			
			$('#dfSelfMailaddr2').prop('readonly', true);
			$('#dfSelfMailaddr2').addClass("readOlyCursor");
			$('#dfSelfMailpostal').prop('readonly', true);
			$('#dfSelfMailpostal').addClass("readOlyCursor");
			$('#dfSelfMailcntry').prop('disabled', true);
			$('#dfSelfMailcntry').addClass("disabledCursor");
			$('#dfSelfAddrreason').prop('disabled', true);
			$('#dfSelfAddrreason').addClass("disabledCursor");
		}else  {
			$('#dfSelfMailaddr').prop('readonly', false);
			$('#dfSelfMailaddr').removeClass("readOlyCursor");
			$('#dfSelfMailaddr2').prop('readonly', false);
			$('#dfSelfMailaddr2').removeClass("readOlyCursor");
			$('#dfSelfMailpostal').prop('readonly', false);
			$('#dfSelfMailpostal').removeClass("readOlyCursor");
			$('#dfSelfMailcntry').prop('disabled', false);
			$('#dfSelfMailcntry').removeClass("disabledCursor");
			$('#dfSelfAddrreason').prop('disabled', false);
			$('#dfSelfAddrreason').removeClass("disabledCursor");
		}
	} 
	 
	if(openFor == 'Spouse'){
		if(openFlg){
			$('#dfSpsMailaddr').prop('readonly', true);
			$('#dfSpsMailaddr').addClass("readOlyCursor");
			$('#dfSpsMailaddr2').prop('readonly',true);
			$('#dfSpsMailaddr2').addClass("readOlyCursor");
			$('#dfSpsMailpostal').prop('readonly', true);
			$('#dfSpsMailpostal').addClass("readOlyCursor");
			$('#dfSpsMailcntry').prop('disabled', true);
			$('#dfSpsMailcntry').addClass("disabledCursor");
			$('#dfSpsAddrreason').prop('disabled', true);
			$('#dfSpsAddrreason').addClass("disabledCursor");
		}else{
			$('#dfSpsMailaddr').prop('readonly', false);
			$('#dfSpsMailaddr').removeClass("readOlyCursor");
			$('#dfSpsMailaddr2').prop('readonly',false);
			$('#dfSpsMailaddr2').removeClass("readOlyCursor");
			$('#dfSpsMailpostal').prop('readonly', false);
			$('#dfSpsMailpostal').removeClass("readOlyCursor");
			$('#dfSpsMailcntry').prop('disabled', false);
			$('#dfSpsMailcntry').removeClass("disabledCursor");
			$('#dfSpsAddrreason').prop('disabled', false);
			$('#dfSpsAddrreason').removeClass("disabledCursor");
		}
		
	}
//	}
	
}

*/

function mailAddress(prefer,options,cursor){
	var txtFldInputsAll;
	if(prefer == 'Slf'){
		txtFldInputsAll = ["dfSelfMailaddr","dfSelfMailaddr2",
	                          "dfSelfMailpostal","dfSelfMailcntry",
	                          "dfSelfAddrreason"];  
	}if(prefer == 'Sps'){
		txtFldInputsAll= ["dfSpsMailaddr","dfSpsMailaddr2",
	                          "dfSpsMailpostal","dfSpsMailcntry",
	                          "dfSpsAddrreason"];  
	}
	
	
	$.each( txtFldInputsAll, function( index, value ) {  
		 $("#"+value).prop('disabled', options);  
		 if(cursor == 'ad'){
			 $("#"+value).addClass("readOlyCursor");
		 }
		 if(cursor == 'rmv'){
			 $("#"+value).removeClass("readOlyCursor");
		 }
	}); 
	
}

function regAddress(prefer,options,cursor){
	var txtFldInputsAll;
	if(prefer == 'Slf'){
		txtFldInputsAll = ["dfSelfMailaddr","dfSelfMailaddr2",
	                          "dfSelfMailpostal","dfSelfMailcntry",
	                          "dfSelfAddrreason"];  
	}
	if(prefer == 'Spse'){
		txtFldInputsAll= ["dfSpsMailaddr","dfSpsMailaddr2",
	                          "dfSpsMailpostal","dfSpsMailcntry",
	                          "dfSpsAddrreason"];  
	}
	
	
	$.each( txtFldInputsAll, function( index, value ) {  
		 $("#"+value).prop('disabled', options);  
		 if(cursor == 'ad'){
			 $("#"+value).addClass("readOlyCursor");
		 }
		 if(cursor == 'rmv'){
			 $("#"+value).removeClass("readOlyCursor");
		 }
	}); 
	
}


//validate All Screen before checked
function mandateCdAgrFlg(){
	var totchkCdAgrFlg = document.getElementsByName("cdAgreeFlg").length;  	
	var valiMsg;
 (!validateDetails())? valiMsg="Incomplete" : valiMsg="Completed"  ;   
	 if(valiMsg=="Incomplete"){ 
	 $( "#declrByClient_Dialog" ).dialog({
		 create: function( event, ui ) {
		      var dialog = $(this).closest(".ui-dialog"); 
		      dialog.find(".ui-dialog-titlebar-close")
	            .appendTo(dialog)
	            .css({
	              position: "absolute",
	              top: 0,
	              right: 0,
	              margin: "3px"
	            });
		      dialog.find(".ui-dialog-titlebar").remove();
		  },
	        resizable: false,
	        height: "auto",
	        width: "auto",
	        modal: true,
	        buttons: {
	          " OK ": function() {
	        	 
	        	 
	        	  
	 			  $( this ).dialog( "close" ); 
	        	  
	        	  if(!validateDetails()) {
	        		  document.getElementsByName("cdAgreeFlg")[0].checked=false;
		 			  document.getElementsByName("cdAgreeFlg")[1].checked=false;
	        		  return false;
	        	  }
	        	 
	          }, 
	        }
	      });//end dialog 
	 		return false;
	 } 
	 
	return true;
	   
}

function finalDeclarationDialog(functnToProceed){
	 $( "#RepresentDeclar_Dialog" ).dialog({
		 create: function( event, ui ) {
		      var dialog = $(this).closest(".ui-dialog"); 
		      dialog.find(".ui-dialog-titlebar-close")
	            .appendTo(dialog)
	            .css({
	              position: "absolute",
	              top: 0,
	              right: 0,
	              margin: "3px"
	            });
		      dialog.find(".ui-dialog-titlebar").remove();
		  },
	        resizable: false,
	        height: "auto",
	        width: "auto",
	        modal: true,
	        buttons: {
	          " OK ": function() { 
	        	  
	        	  showLoader();
	        	  fipaForm.action = functnToProceed;
	      		  fipaForm.submit();
	        	  $( this ).dialog( "close" ); 
	          }, 
	        }
	      });//end dialog 
	 hideLoader();
}


function removeInfoError(tblid){ 
	 $("#"+tblid+"_info").hide(); 
}
function showInfoError(tblid){
	 
	 $("#"+tblid+"_info").show(); 
}


function treeConfig(sideMenuId){

	if(sideMenuId=='profilepage' || sideMenuId=='searchpage'){ 
		clearDataTable('ClientSearchTable');
		  
    	$("#fipaForm #profilepage :input").prop("disabled", false);  
    	
    
    	
		if(sideMenuId=='profilepage'){
			
		$('.accordHeaderDiv').css("display","block");  
		}else if(sideMenuId=='searchpage'){
			$('.accordHeaderDiv').css("display","none");
		}
		$('.footdiv').css("display","none");  
	}else{ 
		$('.accordHeaderDiv').css("display","block");  
		$('.footdiv').css("display","block");   
	}
	
	
	 
	if(sideMenuId=='searchpage'){
//		clearDataTable('ClientSearchTable');
		$("#fipaForm #txtFldSrchCustName").prop("disabled", false); 
		$("#fipaForm #txtFldSrchCustNric").prop("disabled", false); 
		$("#fipaForm #txtFldSrchCustName").prop("readonly", false); 
		$("#fipaForm #txtFldSrchCustNric").prop("readonly", false); 
		$("#fipaForm #btnSrchProfile").prop("disabled", false); 
	}
	
	if(sideMenuId =='clntreport'){
		$('.footerMenus').css("display","none"); 
		$('.reportPrintdiv').css("display","block"); 
		
	}else{
		$('.footerMenus').css("display","block"); 
		$('.reportPrintdiv').css("display","none"); 
	}
	
	
	if(!(stafftype == 'ADVISER')){
		$('.footdiv').css("display","none");  
	  if(sideMenuId =='mastercpf' || sideMenuId=='cpfallocrate'|| 
			sideMenuId=='cpfcontrirate'|| sideMenuId=='cpfAdct' || sideMenuId=='cpfAccType'){
		  
		  	$("#fipaForm #mastercpf :input").attr("disabled", false); 
	    	$("#fipaForm #cpfallocrate :input").attr("disabled", false);
	    	$("#fipaForm #cpfcontrirate :input").attr("disabled", false);
	    	$("#fipaForm #cpfAdct :input").attr("disabled", false);
	    	$("#fipaForm #cpfAccType :input").attr("disabled", false); 
	    	
		    $('.accordHeaderDiv').css("display","none"); 
			$('.footdiv').css("display","block");
			$('button#btnSaveProfile').text('Save');
			
			
			if(sideMenuId=='cpfcontrirate' || sideMenuId=='cpfallocrate' || sideMenuId=='mastercpf'){
				$('button#btnDeleteProfile').css("display","none"); 
			}else if(sideMenuId=='cpfAccType'){
//				$('button#btnDeleteProfile').css("display","block");
			}
			
			$('button#btnDeleteProfile').text('Delete'); 
			$('button#btnNewProfile').css("display","none");
			$('.reportPrintdiv').css("display","none");
			
			
	 }
	} 
	
	
	
	
	  
}


function InterpreterKeyin(){
	 $('#amlIntprtName').prop('readonly', false); 
	 $('#amlIntprtName').removeClass("readOlyCursor"); 
	 $('#amlIntprtRelat').prop('disabled', false); 
	 $('#amlIntprtRelat').removeClass("disabledCursor"); 
	 $('#amlIntprtNric').prop('readonly', false); 
	 $('#amlIntprtNric').removeClass("readOlyCursor"); 
	 $('#amlIntprtMobile').prop('readonly', false); 
	 $('#amlIntprtMobile').removeClass("readOlyCursor"); 
	 $('#amlIntprtHome').prop('readonly', false); 
	 $('#amlIntprtHome').removeClass("readOlyCursor"); 
}
function InterpreterKeyout(){
	$('#amlIntprtName').prop('readonly', true); 
	$('#amlIntprtName').addClass("readOlyCursor"); 
	$('#amlIntprtRelat').prop('disabled', true);
	$('#amlIntprtRelat').addClass("disabledCursor"); 
	$('#amlIntprtNric').prop('readonly', true);
	$('#amlIntprtNric').addClass("readOlyCursor"); 
	$('#amlIntprtMobile').prop('readonly', true);
	$('#amlIntprtMobile').addClass("readOlyCursor"); 
	$('#amlIntprtHome').prop('readonly', true);
	$('#amlIntprtHome').addClass("readOlyCursor"); 
}
 
function clearAllSlfSpsFields(openFor){
	var maritialSts=$("#dfSelfMartsts").val();
	 var numOfSlfCls = document.getElementsByClassName("clsfipaClient").length;
	 var numOfSpsCls = document.getElementsByClassName("clsfipaSpouse").length;
	 var numOfFamCls = document.getElementsByClassName("clsfipaFamily").length;
	 
	 if(openFor == 'Self'){
		 for(var i=0;i<numOfSlfCls;i++){ 
			 if(!isEmpty(document.getElementsByClassName("clsfipaClient")[i].value)){  
				  
				 
				 $("#confalertimg").html(""); 
					$("#confalertmsg").html("Do you want to clear All Self Details");  
					$('#ClearFieldAlertDialog').modal({
						  backdrop: 'static',
						  keyboard: false,
						  show:true,
						}); 
					$('#ClearFieldAlertDialog').on('shown.bs.modal', function() {  
						$('#ClearFieldAlertDialog').find(".modal-title").text("FIPA - Message");
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").unbind(); 
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").click(function (){   
							showLoader(); 
		  			    	$('#dfSelfDob').val('');
		  			    	 $('.clsfipaClient').each(function() {  
		  			    		$(this).val(''); 
		  			    	 });
		  			    	 $('.clearfipaClient').each(function() {  
			  			    		$(this).val('');
			  			    		$(this).prop("readonly",true);
			  			      });
		  			    	
		  			    	$("#dfSelfRegmailaddrSame").attr("checked",false);   
		  			    	
		  			  		hideLoader();	
								$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(1)").click(function (){ 
							 $('.clsfipaClient').each(function() {  
	  			      				$(this).prop("readonly",false);
	  			      			$(this).prop("disabled",false);
	  		  			    	 });
	  			      			 
	  			      			$('.clearfipaClient').each(function() {  
			  			    		$(this).prop("readonly",true);
			  			    	 });
	  			      			
	  			      			 
	  			      			$("input:checkbox[name=txtFldAnalyisFor]:eq(1)").prop("checked",true);
							  	$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						
					});
				  
			 }
	     }
		 
	 }else if(openFor == 'Spouse'){
		 
		 var clientsts   = $("#dfSelfMartsts").val();
		 if(clientsts == "Single"){
			 	$(".clsfipaSpouse").prop("disabled", true);
				$('#dobSpspicker').datetimepicker('remove');
				$("#dfSpsRegaddrAsSelf").prop("disabled", true);
				$("#dfSpsRegaddrAsSelf").prop("checked", false);
				$("#dfSpsRegmailaddrSame").prop("disabled", true);
				$("#dfSpsRegmailaddrSame").prop("checked", false);
				$("#dfSpsMailaddrAsSelf").prop("disabled", true);
				$("#dfSpsMailaddrAsSelf").prop("checked", false);
				$("#dfSpsHomecntry").prop("disabled", true);
				
			 for(var i=0;i<numOfSpsCls;i++){ 
			 
		 
//			 if(!isEmpty(document.getElementsByClassName("clsfipaSpouse")[i].value)){ 
				 
				 $("#confalertimg").html(""); 
					$("#confalertmsg").html("Do you want to clear All Spouse Details");  
					$('#ClearFieldAlertDialog').modal({
						  backdrop: 'static',
						  keyboard: false,
						  show:true,
						}); 
					$('#ClearFieldAlertDialog').on('shown.bs.modal', function() {  
						$('#ClearFieldAlertDialog').find(".modal-title").text("FIPA - Message");
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").unbind(); 
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").click(function (){   
						 
		  			    	 $('#dfSpsDob').val('');
		  			    	 $('.clsfipaSpouse').each(function() {  
		  			    		$(this).val('');
		  			    	 });
		  			    	 $('.clearfipaSpouse').each(function() {  
			  			    		$(this).val('');
			  			    		$(this).prop("readonly",true);
			  			    	 });
		  			  	 
		  					 $("input[name=txtFldDepnProvSps]").each(function() {  
		  							 
		  								 $(this).prop("disabled",true);
		  								 $(this).val("");
		  								DpdcalculateRow(); 
		  				    		 
		  				    	 });
		  				    	 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
		  				    		 
		  								 $(this).prop("disabled",true);
		  								 $(this).val("");
		  							  
		  				    	 });
		  				    	 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
		  				    		 
		  								 $(this).prop("disabled",true);
		  								 $(this).val("");
		  							  
		  				    	 }); 
		  			    	$("#dfSpsRegmailaddrSame").prop("checked",false); 
		  			    	$("#dfSpsRegmailaddrSame").prop("checked",false); 
		  			    	$("#dfSpsMailaddrAsSelf").prop("checked",false); 
		  			    	$("#dfSpsHomecntry").val('');
		  			    	if(!(maritialSts == "Married")){
		  			    		chkOwnership('Spouse',true);
		  			    	}
		  			  		
		  			    	
								$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(1)").click(function (){ 
							showLoader();  
 			      			 $('.clsfipaSpouse').each(function() {  
 			      				$(this).prop("readonly",false);
 			      				$(this).prop("disabled",false);
 		  			    	 });
 			      			$('.clearfipaSpouse').each(function() {  
		  			    		$(this).prop("readonly",true);
		  			    	 }); 
 			      			  
 			      		 
// 			  			 $("input[name=txtFldDepnProvSps]").each(function() {  
// 			  					 if(!isEmpty( $(this).val())){
// 			  						 $(this).prop("disabled",false); 
// 			  					 }
// 			  		    		 
// 			  		    	 });
// 			  		    	 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
// 			  		    		 if(!isEmpty( $(this).val())){
// 			  						 $(this).prop("disabled",false); 
// 			  					 }
// 			  		    	 });
// 			  		    	 $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
// 			  		    		 if(!isEmpty( $(this).val())){
// 			  						 $(this).prop("disabled",false); 
// 			  					 }
// 			  		    	 }); 
//			      			
 			  		    	 $("input:checkbox[name=txtFldAnalyisFor]:eq(1)").prop("checked",true);
//			      			chkOwnership('Spouse',false);
			      		 	
			      			
			      			hideLoader();	
							$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						
					}); 
				  
//			 }
		 }
	   }
	 }else if(openFor == 'Family'){
		 for(var i=0;i<numOfFamCls;i++){ 
//			 if(!isEmpty(document.getElementsByClassName("clsfipaFamily")[i].value)){
				 
				  
				 
				 $("#confalertimg").html(""); 
					$("#confalertmsg").html("Do you want to clear All Family Details");  
					$('#ClearFieldAlertDialog').modal({
						  backdrop: 'static',
						  keyboard: false,
						  show:true,
						}); 
					$('#ClearFieldAlertDialog').on('shown.bs.modal', function() {  
						$('#ClearFieldAlertDialog').find(".modal-title").text("FIPA - Message");
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").unbind(); 
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(0)").click(function (){   
							showLoader();   
		  			    	 $('.clsfipaFamily').each(function() {  
		  			    		$(this).val('');
		  			    	 });
		  			    	 $('.clsfipaFamily').each(function() {  
			  			    		$(this).val('');
			  			    		$(this).prop("readonly",true);
			  			    	 });
		  			    	chkOwnership('Family',true);
		  			  		hideLoader();	
								$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						$('#ClearFieldAlertDialog').find(".modal-footer").find("button:eq(1)").click(function (){ 

 			      			 $('.clsfipaFamily').each(function() {  
 			      				$(this).prop("readonly",false);
 			      			$(this).prop("disabled",false);
 		  			    	 });  
			      			$("input:checkbox[name=txtFldAnalyisFor]:eq(2)").prop("checked",true);
			      			chkOwnership('Family',false);
							$('#ClearFieldAlertDialog').modal('hide');  
							  	
						  });
						
					}); 
				  
//			 }
		 }
	 }
	 
	
}

function clearAllWhnNoProfileCrtdFipa(){
	 
	
	$('#dobSpspicker').datetimepicker('remove');
	
	var numOfSpsCls = document.getElementsByClassName("clsfipaSpouse").length;
	var numOfFamCls = document.getElementsByClassName("clsfipaFamily").length;
	

	 for(var i=0;i<numOfSpsCls;i++){ 
		 if(!isEmpty(document.getElementsByClassName("clsfipaSpouse")[i].value)){ 
			 document.getElementsByClassName("clsfipaSpouse")[i].value="";  
		 } 
	 }
	 
	 for(var i=0;i<numOfFamCls;i++){ 
		 if(!isEmpty(document.getElementsByClassName("clsfipaFamily")[i].value)){ 
			 document.getElementsByClassName("clsfipaFamily")[i].value=""; 
		 } 
	 }
	 
	 $('.clsfipaSpouse').each(function() {  
 		$(this).val('');
 		$(this).prop("disabled",true);
 	 });
 	 $('.clearfipaSpouse').each(function() {  
	    $(this).val('');
	    $(this).prop("disabled",true);
	 });
 	 $('.clsfipaFamily').each(function() {  
  		$(this).val('');
  		$(this).prop("disabled",true);
  	 });
  	 $('.clearfipaFamily').each(function() {  
 	    $(this).val('');
 	    $(this).prop("disabled",true);
 	 });   
  	$("#dfSelfNationality").val("Singaporean"); 
	$("#dfSpsNationality").val("Singaporean");
	$("#dfSpsMartsts").val("Married");
}

function chkOwnership(ownval,opts){
	 
	 
	  $('select[name=txtFldPropCpfOwnership],select[name=txtFldDlgCpfPropOwnership],select[name=retAgeBasedon],'
			  +'select[name=selRDRetAgebasedOn],select[name=lipOwner],select[name=selDlgInvOwnership],select[name=selInvOwner],'
			  +'select[name=selDlgCOBOwnershipType],select[name=selCOBOwnershipType],select[name=txtFldDlgPerAcctHolder],select[name=txtFldPerAcctHolder],'
			  +'select[name=txtFldDlgBusnAcctHolder],select[name=txtFldBuisAcctHolder],select[name=txtFldDlgVehOwner],select[name=txtFldVehOwner],'
			  +'select[name=selDlgCADApplicantType],select[name=selCdApplicantType]').find("option[value="+ownval+"]").each(function() {
				  if($(this).length > 0){
					 if($(this).parent().val() == ownval){
						 if(opts==true){
							 $(this).parent().val("");
						 }
					 }
					 $('#lipAssured option:eq(2)').prop("disabled",opts); 
					 $(this).prop("disabled",opts);
				  }
			  });  
		  
	  
	  if(ownval == "Spouse"){
		  
		  
			 $("select[name=txtFldDlgMainAccHolderName],select[name=txtFldMainAccHolderName],"
			 		+"select[name=txtFldDlgCADApplicant],select[name=txtFldCADApplicant]").each(function(){
				 if($(this).find("option:selected").index == 2){ 
					 if(opts==true){ $(this).val("");}
				 }
				 $(this).find('option:eq(2)').prop("disabled",opts); 
			 });
			 
		  $('select[name=selDlgORAgeBsOn],select[name=selORAgeBsOn],select[name=selDlgIRAgeBsOn],select[name=selIRAgeBsOn],'
				  +'select[name=selDlgIncAssAgeBsOn],select[name=selIncAssAgeBsOn],'
				  +'select[name=selDlgprojORAgeBsOn],select[name=selprojORAgeBsOn],'
				  +'select[name=selDlgprojIRAgeBsOn],select[name=selprojIRAgeBsOn],'
				  +'select[name=selDlgprojIncAssAgeBsOn],select[name=selprojIncAssAgeBsOn]').find("option[value=SPOUSE]").each(function() {
					  if($(this).length > 0){
						 if($(this).parent().val() == "SPOUSE"){
							 if(opts==true){ $(this).parent().val("");	}
						 }
						 $(this).prop("disabled",opts);
					  }
				  });  
			  
	  }
	  hideLoader();	
}


function addLateUpdtDate(){
 
	$("span[id='txtFldRDDate']").text("");
		var crtdDate = $("#dfCreatedDate").val();
		var modDate = $("#dfModifiedDate").val();
		
		modDate = isEmpty(modDate) ? crtdDate : modDate;
		$("input[name='updlstdate']").val("Last updated on "+modDate +"");
		/*RP CF*/$("span[id='txtFldRDDate']").text(modDate);//?????????
		if(!($("#dfSpsName").val() == "")){
			$("input[name='updlstdateSps']").val("Last updated on "+modDate +"");
		}else{
			$("input[name='updlstdateSps']").val("");
		}
		
		$("input[name='updlstdatefrChld']").css("display","none");//?????????????????
		$("input[name='updlstdateChldDecl']").css("display","none"); 
		$("input[name='updlstdatefrAttach']").css("display","none");
		
		 
}


function loadAllSymbols(){ 
	 
		$('span#symbolUsd').addClass('addDollarSign'); 
		$('span#symbolYrs').addClass('addYearSign');   
		$('span#symbolprCent').addClass('addPercentSign');  
		
}
 
function applyToastrAlert(alertInfo,fldtofocus){
//	toastr.clear();
    toastr.info(alertInfo, "FIPA Notification", toastrOpts);
    if(fldtofocus)fldtofocus.focus();
}


function applySuccessToastrAlert(alertInfo,fldtofocus){ 
//	toastr.clear();
	toastr.success(alertInfo, "FIPA Notification", sucToastrOpts);
	if(fldtofocus)fldtofocus.focus();
}

function applyErrorToastrAlert(alertInfo,fldtofocus){ 
//	toastr.clear();
	toastr.error(alertInfo, "FIPA Notification", toastrOpts);
	if(fldtofocus)fldtofocus.focus();
}

function suspErrorToastrAlert(alertInfo,fldtofocus){ 
//	toastr.clear();
	toastr.error(alertInfo, "FIPA Notification", susptoastrOpts);
	if(fldtofocus)fldtofocus.focus();
}

function applyEventHandlers(){

//	$(".numbers").css("text-align","right");
	
	$(".applyNoDecimal").on("keypress keyup blur",function (event) {    
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
	
	//Dollars sign functions
	$(".applyEvntUsd,.applyEvntUsd26,.applyEvntUsd126").on("keypress",function(event) {
		return isNumber(event,this); //changed  isNumberKeydec(event,this);
		
    });    
	
	$(".applyEvntUsd").on('keyup keydown', function (event) { 
		chkDecimal(this,120,5); 
	});  
	$(".applyEvntUsd26").on('keyup keydown', function (event) { 
		chkDecimal(this,120,5);
	}); 
	$(".applyEvntUsd126").on('keyup keydown', function (event) { 
		chkDecimal(this,120,5); 
	}); 
    $(".applyEvntUsd").attr("maxlength","126");
    $(".applyEvntUsd26").attr("maxlength","126");
    $(".applyEvntUsd126").attr("maxlength","126");

    $(".applyEvntUsd26,.applyEvntUsd,.applyEvntUsd126").css("text-align","right");
    $('.applyEvntUsd,.applyEvntUsd26,.applyEvntUsd126').keyup(function(event){
	    var val = $(this).val();
	    if(isNaN(val)){
	         val = val.replace(/[^0-9\.]/g,'');
	         if(val.split('.').length>2) 
	             val =val.replace(/\.+$/,"");
	    }
	    $(this).val(val); 
	});   
 
    
    
	//Percent sign functions  
    $(".applyEvntpCent").keypress(function(event) {
		return isNumber(event,this);
    });
	$(".applyEvntpCent").change(function(event) {
		return checkPercntVal(this);
    });
	$(".applyEvntpCent").on('keyup keydown', function (event) { 
		chkDecimal(this,122,6);
	});   
    $(".applyEvntpCent").attr("maxlength","126");    
    //Section2
    
    $(".applyEvntpCent3").keypress(function(event) {
    	return isNumber(event,this);
    });
    $(".applyEvntpCent3").change(function(event) {
    	return checkPercntVal(this);
    });
	$(".applyEvntpCent3").on('keyup keydown', function (event) { 
//		chkDecimal(this,3,0);
		chkDecimal(this,122,6);
	});   
    $(".applyEvntpCent3").attr("maxlength","126"); 
	//Section 3
    $(".applyEvntpCent5").keypress(function(event) {
    	return isNumber(event,this);
    });
    $(".applyEvntpCent5").blur(function(event) {
    	return checkPercntVal(this);
    });
	$(".applyEvntpCent5").on('keyup keydown', function (event) { 
		chkDecimal(this,122,6);
	});   
    $(".applyEvntpCent5").attr("maxlength","126"); 
    
	//Section 4
    $(".applyEvntpCent26").keypress(function(event) {
    	return isNumber(event,this);
    });
    $(".applyEvntpCent26").change(function(event) {
    	return checkPercntVal(this);
    });
	$(".applyEvntpCent26").on('keyup keydown', function (event) { 
		chkDecimal(this,122,3);
	});   
    $(".applyEvntpCent26").attr("maxlength","126");
    
    $('.applyEvntpCent,.applyEvntpCent3,.applyEvntpCent5,.applyEvntpCent26').css("text-align","right");
    //not to allow more than one decimal points
    $('.applyEvntpCent,.applyEvntpCent3,.applyEvntpCent5,.applyEvntpCent26').keyup(function(event){
	    var val = $(this).val();
	    if(isNaN(val)){
	         val = val.replace(/[^0-9\.]/g,'');
	         if(val.split('.').length>2) 
	             val =val.replace(/\.+$/,"");
	    }
	    $(this).val(val); 
	});
  
	
    //Years Sign functions
    $(".applyEvntYrs").keypress(function(event) {
		return isNumberKeydec(event,this);
    });   
	$(".applyEvntYrs").on('keyup keydown', function (event) { 
		chkDecimal(this,5,0);
	});  
    $(".applyEvntYrs").attr("maxlength","3");  
//    $('.applyEvntYrs').css("text-align","right");
    
    
  // 4 digit Years fields Sign functions
    $(".apply4EvntYrs").keypress(function(event) {
		return isNumberKeydec(event,this);
    });   
	$(".apply4EvntYrs").on('keyup keydown', function (event) { 
		chkDecimal(this,5,0);
	});  
    $(".apply4EvntYrs").attr("maxlength","4");  
//    $('.applyEvntYrs').css("text-align","right");
}  

/*
 * <!--  FIPAlinkToFPMS() --> <!-- commented  by thulasy 03.11.2017-->
function FIPAlinkToFPMS(){ 
	 
	var custId=($("#fipaForm #fpmsCustid").val())?$("#fipaForm #fpmsCustid").val():"";
	var LoggedUserID=($("#fipaForm #hTxtFldLoggedUserID").val())? $("#fipaForm #hTxtFldLoggedUserID").val():"";
	var LoggedUserPass=($("#fipaForm #hTxtFldLoggedUserPass").val())?$("#fipaForm #hTxtFldLoggedUserPass").val():""; 
	if(!isEmpty(custId)){
    creatSubmtDynaForm("http://192.168.1.11:8080/FPMSNL/PolicyPostAction.action?txtFldUserId="+LoggedUserID+"&txtFldPassword="+LoggedUserPass+"&txtFldCustId="+custId+"");
    }else{
		showAlert("No Policy Details For Selected Client!");
	} 
}
*/


function creatSubmtDynaForm(href){	
	
 
		var lex1 = href.split('?');
		var action= lex1[0];
		var qstr = lex1[1];
		var obj = " ";
		var newdiv = document.createElement('div');

		if(qstr != null) {
			var params = qstr.split('&');
			for(var p=0;p< params.length;p++){
				var keyValue = params[p].split('=');
				var name = keyValue[0];
				var value = keyValue[1]; 
				obj += "<input type='hidden' name='"+name+"' value='"+value+"'/>";
				
			}
		}
		
		newdiv.innerHTML = obj; 
		
		if(document.getElementById("fpmshiddenForm"))
			document.getElementById("fpmshiddenForm").appendChild(newdiv);

	document.forms["fpmshiddenForm"].action=action;
	document.forms["fpmshiddenForm"].method="POST"; 
	
	var win=window.open('','TheWindowBIRT',"channelMode,toolbar=no,scrollbars=no,location=no,resizable =yes");
	document.getElementById("fpmshiddenForm").submit();
	  

}//end creatSubmtDynaForm

  
function loadSlfSpsName(){  

	var selfname=$("#dfSelfName").val();
	var spousename=$("#dfSpsName").val();
	var selfnric=$("#dfSelfNric").val();
	
	$("span[id='txtFldClientName']").text("").text(selfname);
	$("span[id='txtFldClientNric']").text("").text(selfnric);

   
	$("[name='txtFldClientName']").val(selfname);
    $("[name='txtFldClientNric']").val(selfnric);
	 
	
	//remove options beform append values
	for(var i=0;i<2;i++){
		$('#Cob_Dialog #txtFldDlgMainAccHolderName option').remove(0);
	} 
	for(var i=0;i<2;i++){
		$('#cpfAddDed_Dialog #txtFldDlgCADApplicant option').remove(0);
	} 
	
	$('#lifeInsdetstab #lipAssured option').remove(0); 
	 
	  
	 
			//append values to select field
	$('#Cob_Dialog #txtFldDlgMainAccHolderName').append('<option value="">--SELECT--</option>' );
	$('#cpfAddDed_Dialog #txtFldDlgCADApplicant').append('<option value="">--SELECT--</option>' );
	$('#lifeInsdetstab #lipAssured').append('<option value="">--SELECT--</option>' );
	 
	 if(!isEmpty(selfname) ){ 
//		 if(!ToClearSelfSpouseFldNames(selfname)) return;
		$('#Cob_Dialog #txtFldDlgMainAccHolderName').append( '<option value="'+selfname+'">'+selfname+'</option>' );
		$('#cpfAddDed_Dialog #txtFldDlgCADApplicant').append( '<option value="'+selfname+'">'+selfname+'</option>' );
		$('#lifeInsdetstab #lipAssured').append( '<option value="'+selfname+'">'+selfname+'</option>' );
//		/*RP CF*/
		$("span[id='txtFldRDClientName']").text("");
		$("span[id='txtFldRDClientName']").text(selfname);
		  
	 }
	 if(!isEmpty(spousename)){ 
//		 if(!ToClearSelfSpouseFldNames(spousename)) return;
		$('#Cob_Dialog #txtFldDlgMainAccHolderName').append( '<option value="'+spousename+'">'+spousename+'</option>' );
		$('#cpfAddDed_Dialog #txtFldDlgCADApplicant').append( '<option value="'+spousename+'">'+spousename+'</option>' );
		$('#lifeInsdetstab #lipAssured').append( '<option value="'+spousename+'">'+spousename+'</option>' );  
//		/*RP CF*/
		$("span[id='txtFldRDSpouseName']").text("");
		$("span[id='txtFldRDSpouseName']").text(selfname);
	} 
	 
	 
		var rowCount = chldpartTbl.rows().count();	 
		if(rowCount >0){
			
			$('#childParticularsTable tbody').find('tr').each(function(){
				var childname=$(this).find("td:eq(2)").find("input:eq(0)").val();
				$('#listofLifeIns_Dialog #lipAssured').append( '<option value="'+childname+'">'+childname+'</option>' ); 
			}); 
		}
	 
 
}

//function ToClearSelfSpouseFldNames(selfspousename){
//	
//	var table = document.getElementById("cashOfBanksTable"),
//	 tbody = table.tBodies[0],
//	 rowCount = tbody.rows.length;
//	
//
//	$("#cashOfBanksTable tbody").find('tr.odd').each(function(){
//        $(this).remove();        
//    }); 
//	
//	
//	var cobtbl= document.getElementById("cashOfBanksTable"), 
//	cobbody = cobtbl.tBodies[0],
//	cobrowCount = cobbody.rows.length,	
//	cobindex = $("#cashOfBanksTable tbody").find("td").length; 
//	 
//	
//	var deleteFlag = 0;
//	var alertFlagCob = 0;
//	
//	if(cobindex>0){
//		for(var cob=0;cob<cobrowCount;cob++){
//			var cobrow = cobbody.rows[cob];  
//			var cobname = cobrow.cells[4].childNodes[0].value;  
//			 
//			if(selfspousename == cobname){ 
//				showAlert("Cant Able to Change Self/Spouse Name,Its been already used !");
//				return false;
//			} 
////			if(spousename == cobname){ 
////				showAlert("Cant Able to Change Spouse Name,Its been already used !");
////				return false;
////			}
//			
//		 } 
//	} 
//	  
//	return true;
//	
//}

 


function dhtmlModChange($row){
	var mode=$row.find("td:first").find('input:eq(0)').val();
	if( mode == QRY_MODE){
		$row.find("td:first").find('input:eq(0)').val(UPD_MODE);	
	}
}

	function show(object,id) {

//		treeConfig(id);
		
			$("#allpages").children().hide();
			$("#accordion").children().hide();
			$('#accordion .panel-collapse').collapse('hide');

			if (id != "none") {

				/* Mobile version */
				if ($("#navigationId").is(":visible")) {
					$("#navigationId").click();
				}
				/* Mobile version */

				$("#" + id).show();
				

				
			} else {
				$('.footdiv').css("display", "none");
			}
			
			
			if(id=='profilepage'){
				$("#fipaForm #profilepage :input").prop("disabled", false); 
				$("#ProfileSearchTable").find("textarea").prop("readonly","true");
			}
			
			if(id=='searchpage'){ 
				$("#fipaForm #searchpage :input").prop("disabled", false);   
				$('.accordHeaderDiv').css("display","none");
				
				if(stafftype == STAFFTYPE_ADVISER){
//					$(".menu_section>ul:not(:first-child)").addClass("hidden");
				}else  if(stafftype == STAFFTYPE_STAFF){
//					$(".menu_section>ul:not(:first-child):not(:last)").addClass("hidden");
				} 
				
//				$('#mastercpf_li').removeClass("hidden"); 
				$("#btnSaveProfile").addClass("hidden");
				$("#btnDeleteProfile").addClass("hidden");

				
			}else if(id =="cpfmasters"){
				$('.accordHeaderDiv').css("display","none");
				
			}else{
				$('.accordHeaderDiv').css("display","block");
			}
			
			$("#new_fipa_menu").find("li").removeClass("active");
			
			$(object).closest("li").addClass("active");
			
	}
	
	

	function showchild(id) {

		$("#accordion").children().hide();
		$('#accordion .panel-collapse').collapse('hide');

		$("#" + id).collapse('show');

		var $div = $(".accordion .accord-header");

		$div.addClass("active");

		if ($div.next("div").is(":visible")) {
			$div.next("div").hide();
		}

		$("#" + id).show();
 
	}
	
	

	function chkClientMenu(){
		$("#ProfileSearchTable").dataTable().fnClearTable();
		$("#ProfileOpenFlag").val("N");
		
		var screenname = $("#hTxtScreenName").val();
		if(screenname != "client"){  
				document.forms[0].action="Link.do"; 
				document.forms[0].submit();      
		}  
		
		
		
	}
	function toggleSingleRow(obj){
		var $row = $(obj).closest('tr');
//		var $tbody = $row.closest('tbody');
//		$tbody.find("tr").each(function(){
//			if($(this).hasClass("selected"))
//				$(this).removeClass('selected'); 
////				$(this).find("td:eq(1)").find('input[type=checkbox]').prop("checked",false);
//		});
		
//		$row.hasClass("selected") ?  $row.removeClass('selected') : $row.addClass('selected');
		
		if($row.hasClass("selected")){
			$row.removeClass('selected');
			$row.find("td:eq(1)").find("input:first").prop("checked",false);
		} else{
			$row.addClass('selected');
			$row.find("td:eq(1)").find("input:first").prop("checked",true);
		}	
		
	}

	function selectSingleRow(obj){
		if($(obj).is(":checked")){
			$(obj).closest('tr').addClass('selected');
		}else{ 
			$(obj).closest('tr').removeClass('selected');
		}
	}
	
	
	
	
	
	
	function showTooltip(id,strTooltipContent){
		
		 $("#"+id).qtip({
		 		content: {text : strTooltipContent ,title : ' FIPA -Notification ',button: true},
//		         show: 'keypress',
//		         hide: 'keypress',        
		         style: {
		             classes: 'qtip-green qtip-rounded qtip-shadow'
		         },
		         show: {solo: true, ready: false, when: 'mouseover'},
		          
		         hide: {
		             event: 'mouseout'
		           }, position: {
		             my: 'top left',   
		             at: 'bottom left', 
		             viewport: $(window),
		             target: $("#"+id)  
		         }  
		     });
		
//		 $("#"+id).qtip('show'); 
	}
	
	
	function showErrorTooltip(modelId,id,strTooltipContent){
		$("#"+id).isDisabled = true;
		 $("#"+id).qtip({
		 		content: {text : strTooltipContent}, 
		         style: {
		             classes: 'qtip-red qtip-rounded qtip-shadow'
		         }, position: {
		             my: 'top left',   
		             at: 'bottom left', 
		             viewport: $(window),
		             target: $("#"+id) ,
		             container:$("#"+modelId),
		             
		         }  
		     });
		
		 
		 $("#"+id).qtip('show'); 
	}
	
	
	
	
	function showErrorRDTooltip(modelId,id,strTooltipContent){
		$("#"+id).isDisabled = true;
		 $("#"+id).qtip({
		 		content: {text : strTooltipContent}, 
		         style: {
		             classes: 'qtip-red qtip-rounded qtip-shadow'
		         }, position: {
		             my: 'top left',   
		             at: 'bottom left', 
		             viewport: $(window),
		             target: $("#"+id) ,
		             container:$("label#"+modelId),
		             
		         }  
		     });
		
		 
		 $("#"+id).qtip('show'); 
	}
	
	
	function showTooltipCls(classid,strTooltipContent){   
			$("."+classid).isDisabled = true;
			$("."+classid).qtip({
		 		content: {text : strTooltipContent}, 
		         style: {
		             classes: 'qtip-green qtip-rounded qtip-shadow'
		         },
		         show: {solo: true, ready: false, when: 'mouseover'},
		          
		         hide: {
		             event: 'mouseout'
		           },
		            
		         position: {
		             my: 'top left',   
		             at: 'bottom left', 
		             viewport: $(window)   
		         }  
		     }); 
			
			 
	}
	 
	 
	function showTooltipAttr(id,contentmsg){ 
		$("#"+id).isDisabled = true;
		$("#"+id).qtip({ 
	 		content: {text :contentmsg}, 
	         style: {
	             classes: 'qtip-green qtip-rounded qtip-shadow'
	         }, 
	         position: {
	             my: 'top left',   
	             at: 'bottom left', 
	             viewport: $(window)   
	         },
	         show: {
	             ready: true
	           }
	     }); 
		
//		$("#"+id).qtip('show');
		
}
 function checkWhetherPolicyExistsInScreen(){
	 var flag=true;
	  $('#lifeInsdetstab,#li_DeathBenef_tab,#li_Disability_tab,'
			  +'#li_CriticalIllness_tab,#li_Hospitalisation_tab'
			  +'#li_RetirementPlg_tab,#li_EducationPlg_tab')
			  .find("input[type='text'],select,input[type='hidden']").each(function() { 
		  var elmval=$(this).val(); 
		   if (!(elmval == null  ||  elmval == "")) {
			      flag = false; 
			      return;
		   }  
	  });
	  
	  if(!flag){ 
		 return false; 
	  }
	  return true;
 }
	function callFipaInsuranceDets($lastRow){ 
		 
						  /**/

							var selfname = $("#dfSelfName").val();
							var spousename = $("#dfSpsName").val();
							
							$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured option").remove(0);
							$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").append('<option value="">--SELECT--</option>' ); 
							if(isValidObject(selfname)){if(!isEmpty(selfname)){$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").append('<option value="'+selfname+'">'+selfname+'</option>');}}
							if(isValidObject(spousename)){if(!isEmpty(spousename)){$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").append('<option value="'+spousename+'">'+spousename+'</option>');}}
							
							$('#childParticularsTable tbody').find('tr').each(function(){
								var childname=$(this).find("td:eq(2)").find("input:eq(0)").val();
								if(isValidObject(childname)){
									if((!isEmpty(childname))){
										$("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured").append( '<option value="'+childname+'">'+childname+'</option>' );
									}
								}
						 	 }); 
							
					    	clearLifeInsuranceScreen();
					    	 
							var aplnName = $lastRow.find("td:eq(1)").find('input:eq(0)').val(),
								lifeIns_id =$lastRow.find("td:eq(1)").find('input:eq(1)').val(),
								fna_id = $lastRow.find("td:eq(1)").find('input:eq(2)').val(),
								app_id  = $lastRow.find("td:eq(1)").find('input:eq(3)').val();
								planname  = $lastRow.find("td:eq(6)").find('input:eq(0)').val();
								planname = isEmpty(planname)?"":planname;
					// console.log(aplnName +","+lifeIns_id+","+fna_id+","+app_id+","+planname)
							
							$lastRow.closest("tbody").find("tr").each(function(){ 
						    	$(this).removeClass("selected");
						     });  
							 
							$lastRow.addClass("selected");
							
							 var selLipAssuredVal;
							 if(aplnName == 'FIPA'){	 
									showLoader();
								if(!(isEmpty(lifeIns_id)) ){
									
									
									var parameter = "DBCALLFOR=GET_FIPALIFEDATA&strSrchlifeInsId="+lifeIns_id;
								
									ajaxCall(parameter,servletName,function(Data){
										
										var retval = Data;	

					for ( var val in retval) {

						var tabdets = retval[val];


						if (tabdets["SESSION_EXPIRY"]) {
							window.location = BASE_URL +  SESSION_EXP_JSP;
							return;
						}

						if (tabdets["DB_ERROR"]) {
							window.location = BASE_URL +  DB_EXP_JSP;
							return;
						}

						for ( var tab in tabdets) {


							if (tabdets.hasOwnProperty(tab)) {

								var key = tab;
								var value = tabdets[tab]; 


								if (key == "CLIENT_LIFEDATA_SRCH"){ 

									var jsnData = value; 	  
									for ( var cont in jsnData) {
										jsonDataPopulate(jsnData[cont], key);
										if (jsnData.hasOwnProperty(cont)) {			

											var contvalue = jsnData[cont];
											for(var data in contvalue){

												var col = contvalue[data]; 

												if(data == "lipAssured"){
													selLipAssuredVal=col;

												} 
												childexist();
												filldetsLifeInsuranceDlg(data,col,contvalue,lifeIns_id);

											}

										}
									}




								}
								if (key == "CLIENT_COVERAGE_SRCH"){ 
									$.each(value, function(contkey, contvalue) {
										getAllCoverage(contvalue);
									});

								}
								
								
								/*
								if (key == "CLIENT_DEATHBENF_SRCH"){ 
									$.each(value, function(contkey, contvalue) {
										getliDthBenfRows(contvalue);
									});

								}

								if (key == "CLIENT_CRITICAL_SRCH"){ 
									$.each(value, function(contkey, contvalue) {
										getlicrtlnsRows(contvalue);	
									});
									

								}

								if (key == "CLIENT_HOSP_SRCH"){ 
									$.each(value, function(contkey, contvalue) {
										getlihospRows(contvalue);
									});

								}
								*/
								if (key == "CLIENT_PLANPRO_SRCH"){
									
									
									$.each(value, function(contkey, contvalue) { 
											getliBasRidDetRows(contvalue, tab); 
									}); 
									
							    }
								
								 

								if (key == "CLIENT_CHLDEDUDATA_SRCH"){  
									$.each(value, function(contkey, contvalue) {
										
										getlieduplgRows(contvalue,[]); 
										tbleCollapse();
									});
								}



								if (key == "CLIENT_MVDATA_SRCH"){  
									$.each(value, function(contkey, contvalue) {
										getRetPlgRows(contvalue);
									});
								}

								if (key == "CLIENT_NOMDATA_SRCH"){
//									jsonTableDataPopulate(value, tab, false);
									$.each(value, function(contkey, contvalue) {
										getNomNameRows(contvalue);
									});

								} 

							}
						}
					}

 
										$('li > a[href="#lifeInsdetstab"]').click();
										$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);  
										selectNullvalChk($("#listofLifeIns_Dialog #lifeInsdetstab #lipAssured"),$("#selLipAssuredVal")); 
//										$("#visibleretTotalPrem").attr("type","text");
//										$("#retTotalPrem").attr("type","hidden"); 
										 planAlertInfo();  
										hideLoader();
									});
							 }
							} 
							 
							 if(aplnName == 'FPMSNL'){ 
									showLoader();
								 fillFPMSDataDlg($lastRow,app_id);	
								 $('li > a[href="#lifeInsdetstab"]').click();
								 selectNullOrBlank($("#listofLifeIns_Dialog #lifeInsdetstab #lipPlanname"),planname);
								 $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
//								 $("#visibleretTotalPrem").attr("type","hidden");
//								 $("#retTotalPrem").attr("type","text");
								
								
								 planAlertInfo();
								 hideLoader();
							
						} 
							 
							 
							

						  /**/
						   
							 loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));		 
	 }
	
	
	

	function showFIPADialog(dialogId,dialogTitle,methods){
		 
		 $("#"+dialogId).dialog({
			 
		    	title: dialogTitle,
		        resizable: false,
		        height:"auto",
		        width: "auto",
		        modal: true,
		        buttons: {
		          " OK ": function() {
		        	  if(!methods())return;
		        	  $( "#"+dialogId ).dialog( "close" );
		          },
		          " CANCEL ": function() {
		        	  $( this ).dialog( "close" );
		          }
		        }
		      });
		 
		 $('#'+dialogId).dialog('option', 'position', 'center');
		
		
	}
	
function reportCheckEvent(elmid,options){

	if(options == "rpt"){
	if(elmid.checked){ 
		$("input:checkbox[name=chkrpt]").map(function() { //If checked iterate the 
			 $(this).prop("checked",true); 
			 $(this).prop("disabled",true); 
		
		}).get();
	}else if(!elmid.checked){
		$("input:checkbox[name=chkrpt]").map(function() { //If checked iterate the 
			 $(this).prop("checked",false); 
			 $(this).prop("disabled",false); 
		
		}).get();
	}
	}
	
	if(options == "All"){ 
		var analysislen = $("input:checkbox[name=chkrpt]").length; 
		$("input:checkbox[name=chkrpt]:checked").map(function() { //If checked iterate the 
			if($("input:checkbox[name=chkrpt]:checked").length == analysislen){
			$("input:checkbox[name=chkAllReport]").prop("checked",true);
			 $(this).prop("checked",true); 
			 $(this).prop("disabled",true); 
			}
		}).get();
	 }
}
function analysisCheckEvent(elmid,options){
	
	$("#divAnalysisTypes").removeClass("panel-danger").addClass("panel-default");

	if(options == "evt"){
	if(elmid.checked){ 
		$("input:checkbox[name=analysis]").map(function() { //If checked iterate the 
			 $(this).prop("checked",true); 
			 $(this).prop("disabled",true); 
		
		}).get();
	}else if(!elmid.checked){
		$("input:checkbox[name=analysis]").map(function() { //If checked iterate the 
			 $(this).prop("checked",false); 
			 $(this).prop("disabled",false); 
		
		}).get();
	}
	}
	
	if(options == "All"){ 
		var analysislen = $("input:checkbox[name=analysis]").length; 
		$("input:checkbox[name=analysis]:checked").map(function() { //If checked iterate the 
			if($("input:checkbox[name=analysis]:checked").length == analysislen){
			$("input:checkbox[name=txtFldAnalysisSelAll]").prop("checked",true);
			 $(this).prop("checked",true); 
			 $(this).prop("disabled",true); 
			}
		}).get();
	 }
}




function estMonthlyIncome(elmid,opts){
	if(opts == 'Self'){
	
	if(!(isEmpty(elmid.value))){ 
		
		 var calEstInSelf=Number(elmid.value) ;//* 12;
		 $("#dfSelfAnnlincome").val(remPriceAfDec(calEstInSelf));
		 
		 applyToastrAlert("The Monthly Gross Income(OW) <b>  "+elmid.value+" </b> is reflected to Estd Monthly Income <b> "+calEstInSelf+"</b> in Client Particular's Screen!");
		 
	}else{
		$("#dfSelfAnnlincome").val("");
	}
	}
	
	
	if(opts == 'Spouse'){
		
		if(!(isEmpty(elmid.value))){ 
			
			 var calEstInSpouse=Number(elmid.value) ;//* 12;
			 $("#dfSpsAnnlincome").val(remPriceAfDec(calEstInSpouse));
			 
			 applyToastrAlert("The Monthly Gross Income(OW) <b>  "+elmid.value+" </b> is reflected to Estd Monthly Income <b> "+calEstInSpouse+"</b>  in Spouse Particular's Screen!"); 
			 
		}else{
			 $("#dfSpsAnnlincome").val("");
		}
	}
		
	
}




function prtclrMnthInc(elmid,opts){
	
	
	if(opts == 'Self'){
		 
	if(!(isEmpty(elmid.value))){ 
		applyToastrAlert("This Income will reflects - Month Gross Income(Self) in  Expected Fund Inflow / Outflow Screen !");

		var calEstInSelf=Number(elmid.value);// / 12;
		 $("#incsrcSelfEmpMonthly").val(remPriceAfDec(calEstInSelf));
	}else{
		$("#incsrcSelfEmpMonthly").val("");
	}
	}
	
	
	if(opts == 'Spouse'){
		if(!(isEmpty(elmid.value))){
			applyToastrAlert("This Income will reflects - Month Gross Income(Self) in Expected Fund Inflow / Outflow Screen!");
			var calEstInSpouse=Number(elmid.value) ;// / 12;
			 $("#incsrcSpsEmpMonthly").val(remPriceAfDec(calEstInSpouse));
		}else{
			 $("#incsrcSpsEmpMonthly").val("");
		}
	}
		
	
}
 
function navlink(elm,parentElm){  
	var curScreentxt = $(elm).text();    
	var status=$(elm).closest("div").hasClass("breadcrumbs");
	$("#sidebar-menu").find("ul li").removeClass("sideMenuHighlight");
	$("#menuTitles").css("display","none"); 
	if(status){
	$("#sidebar-menu").find("ul li a").each(function(){ 
		 if($("#fipaBreadcrumb").find("a:eq(1)").text() == $(this).text()){ 
				$(this).parent().addClass("sideMenuHighlight");
			
		}
	});
	if(curScreentxt == "Profile"){  
		var bccurElm = $(elm).get(0).outerHTML; 
		$("#fipaBreadcrumb").html("");  
		$("#fipaBreadcrumb").append(bccurElm);
		$("#fipaBreadcrumb").append("<a></a>");
		$("#fipaBreadcrumb").find("a:eq(0)").addClass("active"); 
	} 
	
	}
	
	/***********/
	if(!status){//For SIDEMENU NAVIGATION
	
	if(!(elm == null)){    
		var curElm = $(elm).get(0).outerHTML;   
		var parElm = $(elm).closest("ul").parent().parent().find("a:eq(0)").get(0).outerHTML;  
		 
//		parElm=$(elm).find("a").text("test");
//		parElm=$(elm).get(0).outerHTML;
		
		
		if(!(curScreentxt == "")){   
			if(curScreentxt == "Profile Search"){  
				$("#fipaBreadcrumb").html("");  
				$("#menuTitles").css("display","block");
				$("#menuTitles").html("Search Client By");	 
				$("#hTxtMenuName").val("");
				$("#hTxtMenuName").val(curScreentxt);
			}else if(curScreentxt == "Profile"){  
				$("#fipaBreadcrumb").html("");  
				$("#fipaBreadcrumb").append(curElm);
				 
				$("#hTxtMenuName").val("");
				$("#hTxtMenuName").val($(elm).text());
//				alert(curElm);
//				hTxtMenuName
				$("#fipaBreadcrumb").append("<a></a>");
				$("#fipaBreadcrumb").find("a:eq(0)").addClass("active"); 
			}else{   
				$("#fipaBreadcrumb").html("");  
				if(!(parentElm == 'null')){
				 
					 if(parentElm == "Sub"){
						 parElm=$(elm).closest("ul").parent().parent().parent().find("a:eq(0)").get(0).outerHTML;
					 }  
					  
				$("#fipaBreadcrumb").append(parElm); 
				$("#fipaBreadcrumb").append(curElm);
//				alert(curElm);
				$("#hTxtMenuName").val("");
				$("#hTxtMenuName").val($(elm).text());
				$("#fipaBreadcrumb").find("a:eq(1)").addClass("active"); 
				
				if($("#fipaBreadcrumb").find("a:eq(1)").hasClass("active")){  
					$(elm).parent().addClass("sideMenuHighlight");  
				}
				
				}else{
					$("#fipaBreadcrumb").html("");  
					$("#fipaBreadcrumb").append(curElm);
					$("#hTxtMenuName").val("");
					$("#hTxtMenuName").val($(elm).text());
//					alert(curElm);
					$("#fipaBreadcrumb").append("<a></a>");
					$("#fipaBreadcrumb").find("a:eq(0)").addClass("active"); 
				} 
		}     
		} 
		
	} else if(elm == null){  
		$("#fipaBreadcrumb").html("");  
	} 
	
	} 
	
	 
}
 

function resetMultiSel(elmId){
	 $('#'+elmId+' option:selected').each(function() {
         $(this).prop('selected', false);
     });
	    $('#'+elmId).multiselect('refresh');
}

/*
function showAllAnalysisTypes(e){  
var rowIndex=$(e).parent().closest("tr").index();   
var $getProfileRow=$("#ProfileSearchTable tr:eq('"+(rowIndex+1)+"')").find("td:eq(3)");
	    if ($(e).attr("data-image") === "Show") {  
	    	$getProfileRow.find("div:eq(1)").html("");
	    	$getProfileRow.find("div:eq(1)").append("<img src='images/menuicons/icoUp.png' onclick='showAllAnalysisTypes(this)'  align='right' style='width:20px;'>");
	    	$getProfileRow.find("div").find("span").find(":eq(0)").text("");   
	        var catchtext=$getProfileRow.find("div").find("span").attr("data-originalText");
	        $getProfileRow.find("div").find("span").find(":eq(0)").append(catchtext);
	        $getProfileRow.find("div:eq(1)").find("img").attr("data-image","Hide");
	        $getProfileRow.find("div:eq(0)").attr("data-image","Hide");
	    } else { 
	    	$getProfileRow.find("div:eq(1)").html("");
	    	$getProfileRow.find("div:eq(1)").append("<img src='images/menuicons/icoDown.png' onclick='showAllAnalysisTypes(this)'  align='right'  style='width:20px;'>");
	    	$getProfileRow.find("div").find("span").find(":eq(0)").text("");
	        var appdtext=$getProfileRow.find("div").find("span").attr("data-originalText").substring(0,30);
	        $getProfileRow.find("div").find("span").find(":eq(0)").append(appdtext);
	        $getProfileRow.find("div:eq(1)").find("img").attr("data-image","Show");
	        $getProfileRow.find("div:eq(0)").attr("data-image","Show");
	    } 
	     
	    
}

*/

function profileTooltip(obj){ 

	var rowIndex=$(obj).parent().closest("tr").index();    
	var $getProfileRow=$("#ProfileSearchTable tr:eq('"+(rowIndex+1)+"')").find("td:eq(3)");
	var catchtext=$getProfileRow.find("div").find("span").attr("data-originalText");
  
		$(obj).isDisabled = true;
	      $(obj).qtip({ 
	         content: {
	        	 text:"<ol>"+catchtext+"</ol>",
	               title: { 
	                  button: false
	               }  
	         }, 
	         show: {solo: true, ready: false, when: 'mouseover'},
	         hide: { when: 'mouseout', fixed: true },
	         style: {
	                classes: 'qtip-green qtip-rounded qtip-shadow'
	            },
	            position: {
	                my: 'top left',   
	                at: 'bottom left', 
	                viewport: $(window),
	                target: $(obj)  
	            }    
	      });
	      
	      
	       
	    	  	$(obj).qtip('show');  
	 
	 
}
function dhtmltooltip(obj,msg){
	$(obj).isDisabled = true;
    $(obj).qtip({ 
       content: {
      	 text:msg,
             title: { 
                button: false
             }  
       }, 
       show: {solo: true, ready: false, when: 'mouseover'},
       hide: { when: 'mouseout', fixed: true },
       style: {
              classes: 'qtip-green qtip-rounded qtip-shadow'
          },
          position: {
              my: 'top left',   
              at: 'bottom left', 
              viewport: $(window),
              target: $(obj)  
          }    
    });
    
    
     
  	  	$(obj).qtip('show'); 
}

function attachFileDownload(obj){
	var fileTxt=$(obj).parent().parent().find("div").text();
	 
	$(obj).isDisabled = true;
    $(obj).qtip({ 
       content: {
      	 text:"Click To Download '"+fileTxt+"' file",
             title: { 
                button: false
             }  
       }, 
       show: {solo: true, ready: false, when: 'mouseover'},
       hide: { when: 'mouseout', fixed: true },
       style: {
              classes: 'qtip-green qtip-rounded qtip-shadow'
          },
          position: {
              my: 'top left',   
              at: 'bottom left', 
              viewport: $(window),
              target: $(obj)  
          }    
    });
    
    
     
  	  	$(obj).qtip('show');  
}

function validateDateComparision(fromDateFld,toDateFld,chkSymbol,alertMsg){	
	
	var fromDate,toDate ;
	
	if(typeof fromDateFld == "object"){		
		fromDate = fromDateFld.val();		
		fromDate = fromDate.split("/")[2] + "-" + fromDate.split("/")[1] + "-" + fromDate.split("/")[0] ;
		
		
	}else{		
		fromDate = fromDateFld;
		fromDate = fromDate.split("/")[2] + "-" + fromDate.split("/")[1] + "-" + fromDate.split("/")[0] ;
	}
	
	if(typeof toDateFld == "object"){		
		toDate = toDateFld.val();
		toDate = toDate.split("/")[2] + "-" + toDate.split("/")[1] + "-" + toDate.split("/")[0] ;
	}else{		
		toDate = toDateFld;
		toDate = toDate.split("/")[2] + "-" + toDate.split("/")[1] + "-" + toDate.split("/")[0] ;
	}
	
	 //alert("--> "+fromDate + "," +toDate);
	if(!isEmpty(fromDate) && !isEmpty(toDate)){
		
		var cvrt_FromDate = new Date(fromDate);
		var cvrt_ToDate = new Date(toDate);
		
		//alert(chkSymbol+","+cvrt_FromDate + "," +cvrt_ToDate+","+tabFocusPos);
		
		switch(chkSymbol){
		
			case "<":{
				if(!(cvrt_FromDate < cvrt_ToDate)){
					
					applyErrorToastrAlert(alertMsg);
					
					if(typeof toDateFld == "object" ){
//						toDateFld.value="";
						$(toDateFld).val("");
						$(toDateFld).focus();
					}
					return false;
				}
				break;		
			}
			
			case "<=":{
				if(!(cvrt_FromDate <= cvrt_ToDate)){
					applyErrorToastrAlert(alertMsg);
				    
					if(typeof toDateFld == "object" ){
//						toDateFld.value="";
						$(toDateFld).val("");
						$(toDateFld).focus();
					}
					return false;
				}
				break;			
			}
			
			case ">":{
				if(!(cvrt_FromDate > cvrt_ToDate)){
					applyErrorToastrAlert(alertMsg);
				    
					if(typeof toDateFld == "object" ){
//						toDateFld.value="";
						$(toDateFld).val("");
						$(toDateFld).focus();
					}
					return false;
				}
				break;			
			}
			
			case ">=":{
				if(!(cvrt_FromDate >= cvrt_ToDate)){
					applyErrorToastrAlert(alertMsg);
				
					if(typeof toDateFld == "object" ){
//						toDateFld.value="";
						$(toDateFld).val("");
						$(toDateFld).focus();
					};
					return false;
				}
				break;			
			}		
		}	//End of switch case chkSymbol.	
	}
	
	return true;
	
}//End of ValidateDateComparision


function clearDataTable(TableId){ 
	 $('#'+TableId).dataTable().fnClearTable(); 
	 $("#"+TableId).dataTable( { 
		 destroy: true,
		   responsive: false,         
		   ordering: false,
		   sereasnhing: false,     
		   scrollY:  "40vh",
		   scrollX: true,
		   scroller: false,
		   scrollCollapse:false,
		   paging:false, 
		   filter:false,   
		   columnDefs: [], 
		   dom: '<<"top" ip>flt>',  
		} ); 
		 
}

function clearMasterDataTable(TableId){
	 $('#'+TableId).dataTable().fnClearTable();
	 $("#"+TableId).dataTable().fnDestroy();  
	 $("#"+TableId).dataTable( { 
			scrollCollapse: false,
		    paging:false,
		    info : true,
		    filter:false,
		    fixedHeader: {
	            header: true,
	            footer: true
	        }, 
		    oLanguage: {"sEmptyTable": DATATABLE_ERROR,"sInfoEmpty": DATATABLE_ERROR },
		} ); 
		 
		 
}


function datatableDeleteRow(tblId,datatbl,tblSel,eIcon,dIcon){ 
	
	var flg=true;
	var rowCount = datatbl.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	
	$('#'+tblId+' tbody').find('input[type=checkbox],input[type=radio]').each(function(){
		if($(this).is(":checked")){
			isOneRowSelected=true;
		}
	});
	

	if(!isOneRowSelected){ 		
		applyToastrAlert("No Rows Selected");
		flg=false;
	}
	
	
	if(flg){
	$("#confirmationalertmsgdiv #confalertimg").html(""); 
	$("#confirmationalertmsgdiv #confalertmsg").html("Are you sure to delete the row?");
	$('#confirmationalertmsgdiv').modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true,
		}); 
	$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
		$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){   
			$('#'+tblId+' tbody').find('input[type=checkbox],input[type=radio]').each(function(){
				if($(this).is(":checked")){

					var row = $(this).parents("tr");                                    
					var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();

					if(mode == INS_MODE){ //comment for instant save
//						datatbl.row($(this).parent().parent()).remove().draw(); 
						$(this).parents("tr").hide();
						$(this).parents("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);
					}else if (mode == QRY_MODE || mode == UPD_MODE){   //comment for instant save
						$(this).parents("tr").hide();
						$(this).parents("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);    //comment for instant save   		     			
//						row.find("td").css({border:'1px solid red'}); //comment for instant save
//						<!--changes done 19/06/2019 -->
//						$(this).closest("tr").hide(); 
					} //comment for instant save

					reOrderVisibleRows(tblId);
//					instantDelete(tblId,row);//instant save added line
					$(this).attr("checked",false);
					isOneRowSelected=true;
					
				}
			});
			
			
			
//			if(rowCount==1 && isOneRowSelected){ 
//				datatbl.clear().draw(); 
//			}

			
			   
				reOrderVisibleRows(tblId);
				recalculateFooters(tblId);
			
				$('#confirmationalertmsgdiv').modal('hide');  
				var rc = datatbl.row().count();
				if(rc ==0){
					$('#'+tblSel).prop("checked",false);
					crudicons(null,tblId,tblSel,eIcon,dIcon);
				}
			  	
		  });
		$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
			  	$('#confirmationalertmsgdiv').modal('hide');  
			  	
		  });
		
	});
	}

//	clearEmptyRows(); 
	
}

function recalculateFooters(tblId){
	if(tblId == "deptParticularsTable"){DpdcalculateRow();} //Depandant Particulars
	if(tblId == "personalAssetTbl" || tblId == "businessAssetTbl"){calcTotalLiabilitiesLoan();}	 //Assets  
	if(tblId == "fnaVehiOwnTbl"){vehowncalculateRow();calcVehLnRepayment();} //Vehicle Ownership
	if(tblId == "RDExptbl"){getRDcfExpDets();} 
	if(tblId == "RDInctbl" || tblId == "RDIncAsstbl"){getRDcfIncDets();}  
	if(tblId == "liEducationtbl"){totalPvRetEdPlgTerEdAge();}  
	if(tblId == "liEduPayoutstbl"){totalPvTerEdAge();} 
	if(tblId == "liDisabilitytbl"){/*calcTotalPlandetails();*/ilifeInsPremium(null);calcTotSAPremPlandetails();}
	if(tblId == "liRaiderDetailstbl"){/*calcTotalPlandetails();*/ilifeInsPremium(null);calcTotSAPremPlandetails();};
} 


function syncdatatableDeleteRow(tblId,datatbl){
	var rowCount = $('#'+tblId+' tbody tr').length;	 
	  
	$('#'+tblId+' tbody').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){

			var row = $(this).parents("tr");                                    
			var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();

			if(mode == INS_MODE){
				 
				datatbl.row($(this).parent().parent()).remove().draw();

			}else if (mode == QRY_MODE){    

				$(this).parents("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
				row.find("td").css({border:'1px solid red'});
			}
 
			
		}
	});
	
	if(rowCount==1){
		datatbl.clear().draw();
	}

	
	 
	reorderSino(tblId);
//	clearEmptyRows(); 
	
}
function reorderSino(tblid){
	$("#"+tblid+" tbody").find('tr td').find("span").each(function(){
		 var sino=$(this).parent().parent().index()+1; 
	      $(this).text(sino);	         
	  });
}

function reOrderVisibleRows(tbleID){
	   var sino=1; 
	$("#"+tbleID+" tbody").find('tr:visible td').find("span").each(function(){ 
		var row = $(this).closest("tr");
//		var len = Number(row.find("td:eq(1)").find("div:eq(0)").is(":visible"));
		if(row.find("td:eq(1)").find("div:eq(0)").is(":visible")){
			  $(this).text(sino);	
		      sino++;  
		}
	    
	});
}

function clearEmptyRows(tblid){
	$("#"+tblid+"  tbody").find('tr.odd').each(function(){
        $(this).remove();        
     
    });
	
}
function removeDatatableRows(tblid){
	$("#"+tblid+"  tbody").find('tr.odd').each(function(){
        $(this).remove();        
     
    });
	
}

function clrDatatables(TableId){
	var table = $('#'+TableId).DataTable();
	var rows = table.rows().remove().draw();
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
}

function MultiTblRowSyncDel(tblId,datatbl){
	var rowCount = $('#'+tblId+' tbody tr').length;	 
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	}
	var isOneRowSelected=false;
	$('#'+tblId+' tbody').find('input[type=checkbox]').each(function(){
		if($(this).is(":checked")){
			
			 
			var row = $(this).parents("tr");                                    
			var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();
			var refId=$(this).parents("tr").attr("rowrefid");
			
			if(refId == "" || refId== undefined){
				datatableDeleteRow(tblId,datatbl); 
			}else{ 
					
				var refTbl=refId.split("-")[0]; 
				$("#IncAssRetPlgtbl tr[rowrefid='"+refId+"']").each(function(){
					IncAssRetPlgtbl.row($(this)).remove().draw();
				});	
				
				$("#RDIncAsstbl tr[rowrefid='"+refId+"']").each(function(){
					RDIncAsstbl.row($(this)).remove().draw();
				});	
				
				$("#fnaInvestmentTbl tr[rowrefid='"+refId+"']").each(function(){
					fnaInvestmentTbl.row($(this)).remove().draw();
				});	
				
				$("#fnaPropOwnTblByCPF tr[rowrefid='"+refId+"']").each(function(){
					fnaPropOwnTblByCPF.row($(this)).remove().draw();
				});
				
				$("#cashOfBanksTable tr[rowrefid='"+refId+"']").each(function(){
					cashOfBanksTable.row($(this)).remove().draw();
				});
				
				
				if(refTbl=='LIFEREF'){
					$('#sellipIsnurObject').multiselect('deselect', ['RP']);
				}
			}
			 
			
			
			$(this).attr("checked",false);
			isOneRowSelected=true;
			
		}
	});
	if(rowCount==1){
		datatbl.clear().draw();
	}

	
	if(!isOneRowSelected){
		applyToastrAlert("No Rows Selected");
	} 
	reorderSino("IncAssRetPlgtbl");
	reorderSino("RDIncAsstbl");
	reorderSino("fnaInvestmentTbl");
	reorderSino("fnaPropOwnTblByCPF");
	reorderSino("cashOfBanksTable");
//	clearEmptyRows(); 
	
}





function chkClientSingleOrNot(){
	var clientmartstst = $("#dfSelfMartsts").val();
	clientmartstst = isEmpty(clientmartstst) ? "" : clientmartstst.toUpperCase();
	if(clientmartstst == "SINGLE"){
		$(".clsfipaSpouse").prop("disabled",true);
		$(".clsfipaSpouse").val("");
	}else{
		$(".clsfipaSpouse").prop("disabled",false);
	}
//	console.log("client marital status ------->"+clientmartstst);
}
function chkTableDataLatestOrNot(){
//	???? 
	if(dataTableFlg){
		$("table.dataTable").find("input,select,checkbox").each(function(){
		  if(!$(this).is(":disabled")){
				$(this).addClass("disabledcls"); 
				if($(this).hasClass("disabledcls")){
					$(this).attr("disabled", true);
				} 
		  }
		}); 
	}else{
		$("table.dataTable").find("input,select,checkbox").each(function(){
			if($(this).hasClass("disabledcls")){
				$(this).attr("disabled", false);
			} 
		}); 
	}
}
function setSpsDisabled(){
	$(".clsfipaSpouse").prop("disabled",true);
	$(".clsfipaSpouse").val("");
}
function removeTooltip(elmid){

	if(isValidObject(elmid.val())){
		if(!isEmpty(elmid.val())){
			elmid.removeClass("mandatoryFillFlds");
			elmid.qtip('disable');
			elmid.qtip('destroy',true);
		}
	}
}

/*Age Start Validation - Load options from Retirement planning*/
function loadAgeStartEnd(startAgeElmId,basedOn){
	var selfAge=isEmpty($("#retSelfAge").val()) ? "" : Number($("#retSelfAge").val());	
	var spouseAge=isEmpty($("#retSpsAge").val()) ? "" : Number($("#retSpsAge").val()); 
	var selfProjage=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val());
	var array=[];
	var agebasedOn="Self"/*basedOn.val()*/;
	
	var BasedOn=isEmpty(agebasedOn) ? "" : agebasedOn.toUpperCase();  
	
	
	if(BasedOn == "SELF"){
		if(!isEmpty(selfAge) && !isEmpty(selfProjage)){
			if (selfAge <= selfProjage) {
				   var option = ''; 
				  for(var i= selfAge; i<=selfProjage;i++)
					  {  
						  array.push(""+i+""); 
					  }  
			 } 
		}
	}else if(BasedOn == "SPOUSE"){
		if(!isEmpty(spouseAge) && !isEmpty(selfProjage)){
		if (spouseAge <= selfProjage) { 
			   var option = ''; 
			  for(var i=spouseAge; i<=selfProjage;i++)
				  {  
					  array.push(""+i+"");
				  }  
			}
		}
	}  
	
	 var autocomplete = $('#txtFldDlgORAgePaySts').typeahead(); 
	 	 autocomplete.data('typeahead').source = array;
	 
	var autocomplete1 = $('#txtFldDlgIRAgePaySts').typeahead(); 
	autocomplete1.data('typeahead').source = array;
	var autocomplete2 = $('#txtFldDlgIncAssAgePaySts').typeahead(); 
	autocomplete2.data('typeahead').source = array;
	var autocomplete3 = $('#txtFldDlgRetPlgCommOfAge').typeahead(); 
	autocomplete3.data('typeahead').source = array;
	var autocomplete4 = $('#txtFldDlgprojORAgePaySts').typeahead(); 
	autocomplete4.data('typeahead').source = array;
	var autocomplete5 = $('#txtFldDlgprojIRAgePaySts').typeahead(); 
	autocomplete5.data('typeahead').source = array;
	var autocomplete6 = $('#txtFldDlgprojIncAssAgePaySts').typeahead(); 
	autocomplete6.data('typeahead').source = array;
	var autocomplete7 = $('#cashvalRetAge').typeahead(); 
	autocomplete7.data('typeahead').source = array;
}

 
/*Age End Validation -  Load options from Retirement planning*/
function loadAgeEnd(ageStartElmId,ageEndElmId){
	var ageProj=isEmpty($("#retSelfProjage").val()) ? "" : Number($("#retSelfProjage").val()); 
	var start=isEmpty(ageStartElmId.val()) ? "" : Number(ageStartElmId.val());
	
		ageEndElmId.find('option').remove();
		ageEndElmId.empty().append('<option value="">--SELECT--</option>'); 
		if(!isEmpty(start)){
		if(start < ageProj) {//56<90 
				   var option = ''; 
				  for(var i=start; i< ageProj;i++)
					  { 
						  option = '<option value="' + i + '">' +i+  '</option>';  
						  ageEndElmId.append(option);
					  } 
			   }
			} 
}

function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


function addyearsToDate(date,durableYears){
	 var str =date;

     if( /^\d{2}\/\d{2}\/\d{4}$/i.test( str ) ) {

         var parts = str.split("/");

         var day = parts[0] && parseInt( parts[0], 10 );
         var month = parts[1] && parseInt( parts[1], 10 );
         var year = parts[2] && parseInt( parts[2], 10 );
         var duration = parseInt( durableYears, 10);

         if( day <= 31 && day >= 1 && month <= 12 && month >= 1 ) {

             var expiryDate = new Date( year, month - 1, day );
             expiryDate.setFullYear( expiryDate.getFullYear() + duration );
             expiryDate.setDate(expiryDate.getDate()-1);

             var day = ( '0' + expiryDate.getDate() ).slice( -2 );
             var month = ( '0' + ( expiryDate.getMonth() + 1 ) ).slice( -2 );
             var year = expiryDate.getFullYear();

//             $("#expires").val( day + "/" + month + "/" + year );

             return day + "/" + month + "/" + year;
         } 
     }
}




function getYears(from, to) {


	var date1 = from.split("/")[2] + "-" + from.split("/")[1] + "-" + from.split("/")[0];
	var date2 = to.split("/")[2] + "-" + to.split("/")[1] + "-" + to.split("/")[0];
	
	
    var d1 = new Date(date1),
        d2 = new Date(date2),
        yr = [];
    
    var diff_date =  d2 - d1;
    
//    for (var i=d1.getFullYear(); i<=d2.getFullYear(); i++) {
//        yr.push( i );
//    }
//    console.log(yr)
//    return yr.length-1;
    
    var years = Math.floor(diff_date/31536000000);
//    console.log("years-------->"+years)
    return years;
}


function crudicons(obj,tableid,selectid,editid,delid){
//	DHTML SELECT ALL	
//	var chkd = $(this).prop("checked");
	var rc = $('#'+tableid+' tbody tr').length;//chldpartTbl.row().count();
	var isOneRowSelected=0;
	
	if(rc > 0){
		
		$('#'+tableid+' tbody tr').find("td:eq(1)").find("input[type=checkbox]").each(function(){ //Checkbox selection
			var $curElm=$(this);
			if($curElm.is(":checked")){ 
				isOneRowSelected++;
			}
		});
		if(isOneRowSelected == rc){
			$("#"+selectid).prop("checked",true);
		}else{
			$("#"+selectid).prop("checked",false);
		}
		
		if(isOneRowSelected == 0){	 
			$("#"+editid).attr("disabled",true);
			$("#"+delid).attr("disabled",true);
		}else if(isOneRowSelected == 1){
			$("#"+editid).attr("disabled",false);
			$("#"+delid).attr("disabled",false);
		}else if(isOneRowSelected > 1){
			$("#"+editid).attr("disabled",true);
			$("#"+delid).attr("disabled",false);
		} 
	} 
//	DHTML SELECT ALL
}


function showErrorTip(obj,message){
	$(obj).qtip({
		content: {text : '' + message +'' ,title : ' FIPA - Notification ',button: true},
        //show: 'keypress',
        hide: 'keypress',        
        style: {
            classes: 'qtip-red qtip-rounded qtip-shadow'
        }, position: {
            my: 'top left',   
            at: 'bottom left', 
            viewport: $(window),
            target: $(obj)  
        }  
    });
	
	$(obj).qtip('show');
	
	setInterval(function(){
		$(obj).qtip('hide');
		$(".qtip").remove();
		}, 3000);
}


function NPER(rate, payment, present, future, type) {
	  // Initialize type
	  var type = (typeof type === 'undefined') ? 0 : type;

	  // Initialize future value
	  var future = (typeof future === 'undefined') ? 0 : future;

	  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
	  rate = eval(rate);

	  // Return number of periods
	  var num = payment * (1 + rate * type) - future * rate;
	  var den = (present * rate + payment * (1 + rate * type));
	  return Math.log(num / den) / Math.log(1 + rate);
	}



function makeid(length) {
	   var result           = '';
	   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return ("AS_"+result).toUpperCase();
	}

function newMakeId(prefix,length){
	return (prefix+"_"+Math.random().toString(25).substring(2,length)).toUpperCase();
}

function currencyFormat(num) {
	  return '$ '+ num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	
function chkJsonValExist(jsonarray,valueToFind){
	var matchingId ="";
	if(jsonarray.length > 0 ){
		for (var index = 0; index < jsonarray.length; ++index) {

			 var child = jsonarray[index];

			 if(child.childName == valueToFind){
				 matchingId = child.childid;
				 break;
			 }
			}	
	}

	
	
	return matchingId;
}

(function($){
	$.fn.UItoTop = function(options) { 
 		var defaults = {
    			text: 'To Top',
    			min: 100,
    			inDelay:600,
    			outDelay:400,
      			containerID: 'toTop',
    			containerHoverID: 'toTopHover',
    			scrollSpeed: 1200,
    			easingType: 'linear'
 		    },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#'+settings.containerHoverID;
		
		$('section[class=content]').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		$(containerIDhash).hide().on('click.UItoTop',function(){
			$('section[class=content]').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
					
		$('section[class=content]').scroll(function() {
			var sd = $('section[class=content]').scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $('section[class=content]').height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).fadeIn(settings.inDelay);
			else 
				$(containerIDhash).fadeOut(settings.Outdelay);
		});
};
})(jQuery);