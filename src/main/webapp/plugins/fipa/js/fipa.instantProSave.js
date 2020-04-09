/**
 * Instant Saving
 */
var prevScrFlg=""; 
var CLIENTFLG = "CLIENTFLG";
var SPOUSEFLG = "SPOUSEFLG";
var CHILDFLG = "CHILDFLG";

var CURNTASSUMFLG = "CURNTASSUMFLG";
var EMPDETSFLG = "EMPDETSFLG";
var ANNLEXPFLG = "ANNLEXPFLG";
var CONTPLANFLG = "CONTPLANFLG";
var RETPLANFLG = "RETPLANFLG";
var CASTASSTFLG = "CASTASSTFLG";
var OTHASSTFLG = "OTHASSTFLG";
var LIABLTYFLG = "LIABLTYFLG";
var ESTPLANFLG = "ESTPLANFLG";
var EMPCONTRBFLG = "EMPCONTRBFLG";
var DECLARFLG = "DECLARFLG";
var TYPEOFAPPFLG = "TYPEOFAPPFLG"; 
var SUMMARYFLG = "SUMMARYFLG";
var LIFEDETSFLG = "LIFEDETSFLG";
var HEALTHFLG = "HEALTHFLG";


var currentDate = new Date();

var month = currentDate.getMonth()+1;
var day = currentDate.getDate();

var ResultNewDate = ((''+day).length<2 ? '0' : '') + day +'/'+
    ((''+month).length<2 ? '0' : '') + month + '/' +
    currentDate.getFullYear();

		//console.log("Current Date(DD/MM/YYYY)==>"+ResultNewDate);


$("div.autosavetrigger").find(":input").on("change",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
	 
});

$(document).on("change",".editable",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
});


$(document).on("click",".delRow-icon",function(){
	var divdesc = $(this).parents("div.autosavetrigger").data("desc");
	prevScrFlg = isEmpty(divdesc) ? "" : divdesc ;
	instantsaveValidation();
});



//$(".addRow-icon").on("click" ,function(){ 
//	 
//	var val=$("#dfSelfName").val();  
//	if(isEmpty(val)){
//		showAlert(CLIENT_REQ);
//		return;
//	}  
//	
//	
//	var divdesc = $(this).closest("div.autosavetrigger").data("desc");
//	console.log("divdesc----------->"+ divdesc);
//	prevScrFlg=divdesc; 
//});


/*Instant save Bind onchange*/
//$("#clientsection").find("input,select,checkbox").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=CLIENTFLG; 
//}); 
//$("#spousesection").find("input,select,checkbox").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=SPOUSEFLG; 
//}); 
//$("#currentAssumptiondiv").find("input").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=CURNTASSUMFLG; 
//});
//$("#employeincomediv,#nonemployeeincomediv").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=EMPDETSFLG; 
//});
//$("#annualexpendiv").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=ANNLEXPFLG; 
//});
//$("#contingencysection").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=CONTPLANFLG; 
//});
//$("#retireplandiv").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=RETPLANFLG; 
//});
//$("#cashassetdiv").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=CASTASSTFLG; 
//});
//$("#cashassetdiv").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=OTHASSTFLG; 
//});
//$("#liabilitydiv").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=LIABLTYFLG; 
//});
//
//$("#estateplansection").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=ESTPLANFLG; 
//});
//
//
//$("#cpfEmpContribution").find("input").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=EMPCONTRBFLG; 
//});
//
//$("#decbyclidiv,#suprvsrdiv").find("input,textarea,select").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=DECLARFLG; 
//});
//
//$("#typesofappln").find("input,select,checkbox,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=TYPEOFAPPFLG; 
//}); 
//
//$("#summarydiv").find("input,select,checkbox,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=SUMMARYFLG; 
//}); 
//
//
//
//$("#lifeInsdetstab").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=LIFEDETSFLG;  
//});
//
//
//$("#healthInsdetstab").find("input,select,textarea").on("change",function(){
//	instantsaveValidation();
//	prevScrFlg=HEALTHFLG; 
//});

function instantsaveValidation(){
	
	/*var hMenuName=$("#hTxtMenuName").val();

	var dfselfname = $("#dfSelfName").val();
	if(isEmpty(dfselfname)){
		showAlert(SELF_NAME);
		return;
	}
	var dfselfdob = $("#dfSelfDob").val();
	if(isEmpty(dfselfdob)){
		showAlert(SELF_DOB);
		return;
	}
	var nationality = $("#dfSelfNationality").val();
	if(isEmpty(nationality)){
		showAlert(SELF_NATION);
		return;
	}
	var addr1 = $("#dfSelfHomeaddr").val();
	if(isEmpty(addr1)){
		showAlert(SELF_HMEADDR);
		return;
	}
	var postal = $("#dfSelfHomepostal").val();
	if(isEmpty(postal)){
		showAlert(SELF_RPOSTAL);
		return;
	}
	var country = $("#dfSelfHomecntry").val();
	if(isEmpty(country)){
		showAlert(SELF_RCNTRY);
		return;
	}
	var maddr1 = $("#dfSelfMailaddr").val();
	if(isEmpty(maddr1)){
		showAlert(SELF_MAILADDR);
		return;
	}
	var mpostal = $("#dfSelfMailpostal").val();
	if(isEmpty(mpostal)){
		showAlert(SELF_MPOSTAL);
		return;
	}
	var mcountry = $("#dfSelfMailcntry").val();
	if(isEmpty(mcountry)){
		showAlert(SELF_MCNTRY);
		return;
	}*/
	 
	 
	
}

$(".sidebar-menu li a").on("click",function(event){
	
	var limainmenu = $(this).parent().hasClass("mainmenu");
	var lisubmenu = $(this).parent().hasClass("submenu");
	if(limainmenu || lisubmenu){
		
		processInstantSaving();
		
	}
//	processInstantSaving();
});

//$('#lifeInsNavTabsDets').find("li a").on("click",function(){ 
//processInstantSaving();
//});

function processInstantSaving(){
	
//	console.info("inside processInstantSaving--------->"+prevScrFlg);
	
	var hMenuName=$("#hTxtMenuName").val();
	
//	console.info("inside processInstantSaving hMenuName --------->"+hMenuName);
	
	if( hMenuName !="#searchpage" && hMenuName != "#profilepage"  ){
		
		
		
//	   if(prevScrFlg ==CLIENTFLG || prevScrFlg == SPOUSEFLG || prevScrFlg == DECLARFLG || prevScrFlg == TYPEOFAPPFLG){instantSaveClientDetails();/*instantSrcOfIncDetails();Employee Income*/} 
//	   if(prevScrFlg ==CURNTASSUMFLG){instantCurAssDetails();} 
//	   if(prevScrFlg ==EMPDETSFLG || prevScrFlg ==ANNLEXPFLG ){instantSrcOfIncDetails();instantExpendDetails();}  
//	   if(prevScrFlg ==CONTPLANFLG){instantContingDetails();} 
//	   if(prevScrFlg ==RETPLANFLG){instantRetirplgDetails();instantCurAssDetails();} 
//	   if(prevScrFlg ==CASTASSTFLG || prevScrFlg ==OTHASSTFLG){instantCashAsstDetails();instantOtherAsstDetails();}  
//	   if(prevScrFlg ==LIABLTYFLG){instantLiabilityDetails();} 
//	   if(prevScrFlg ==ESTPLANFLG){/*instantEstPlnSave();*/} 
//	   if(prevScrFlg ==EMPCONTRBFLG){instantEmpContrbSave();}  
//	   if(prevScrFlg ==SUMMARYFLG){instantSummaryDetails();} 
//	   if(prevScrFlg ==LIFEDETSFLG){instantLifeInsDetails();planPolicyFPMS();}
//	   if(prevScrFlg ==HEALTHFLG){instantHealthDetails();}
		
		if(!isEmpty(prevScrFlg)){
			instantSaveClientDetails();
		}
	} 
	
//	if(!isEmpty(prevScrFlg)){
//		instantSaveClientDetails();
//	}
	
	prevScrFlg = "";
}


/*End - Instant save Bind onchange*/



/* ##################################  Financial Goals > Particulars >Client Particulars ####################################### */



 function instantSaveClientDetails(){
	 
	   console.info("Save client details...");
	   
	var val=$("#dfSelfName").val();  
	if(!isEmpty(val)){ 
			  
	 var flgMgr=false;
	 var fnaId=$("#fnaId").val();
	 
	 
	 	var disabled = $("#fipaForm").find(':input:disabled').removeAttr('disabled');
	 
	 	var fnaData = $("#fipaForm").serialize();
	 	
	 	disabled.attr('disabled','disabled');
	 
	 	var saveFor = "FPMS_CLIENT";  
		var parameter = fnaData + "&DBCALLFOR=FPMSCLIENT_INSTANT_SAVE&txtFldSaveFor=" + saveFor ;
//		console.log(parameter);
		
		
		$.post(InstantProServlet,parameter
		).done(function(data) {
			console.log("data after auto update ------>" + data);
			var jsnRslt=JSON.parse(data); 
				
			$.each(jsnRslt,function(i,obj){
				
				$.each(obj,function(i,val){
//					console.log(i+'='+val+';')
					
					$("#fipaForm input[name='"+i+"']").val(val);
					
				});
			});
			
			
		});
	
//		 if(!isEmpty($("#dfSelfName").val())){
//			 
//			 $(".formHiddenIds").each(function(){
//							var id=$(this).attr("id");
//							var val=$("#"+id).val(); 
//							parameter+="&"+id+"="+val; 
//			});
//				
//			 $("#clientsection").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//			
//		 }
//		 
//		 
//		 if(!isEmpty($("#dfSpsName").val())){
//			$("#spousesection").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		 }  
//		  
//		 
//		 $("#clientsection,#spousesection").find("[type=checkbox]").each(function(){
//				var checked = $(this).is(":checked");
//				var id=$(this).attr("id");
//				var val="N";
//				if(checked){
//					val="Y";
//				} 
//				parameter+="&"+id+"="+val; 
//		 });
//		 
//		 
//		 $("#typesofappsec").find("textarea,input[type=text],input[type=hidden],select").each(function(){
//			 var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//		 });
//		 
//		 $("#typesofappsec").find("[type=radio],[type=checkbox]").each(function(){
//			 var checked = $(this).is(":checked");
//				var id=$(this).attr("id");
//				var val="N";
//				if(checked){
//					val="Y";
//				} 
//				parameter+="&"+id+"="+val; 
//				flgMgr=true;
//		 });
//		 
//		 $("#decbyclidiv,#suprvsrdiv").find("[type=radio],[type=checkbox]").each(function(){
//				var checked = $(this).is(":checked");
//				var id=$(this).attr("id");
//				var val="N";
//				if(checked){
//					val="Y";
//				} 
//				
//				if(($("#cdAgreeFlgYes").is(":checked"))){
//					parameter+="&cdAgreeFlg=Y"; 
//				}else{
//					parameter+="&cdAgreeFlg=N"; 
//				}
//				
//				
//				if(($("#mgrAgreeFlagYes").is(":checked"))){
//					parameter+="&mgrAgreeFlag=Y"; 
//				}else{
//					parameter+="&mgrAgreeFlag=N"; 
//				}
//				
//				
//				parameter+="&"+id+"="+val; 
//		 });
//		 
//		 
//		 
//		 $("#decbyclidiv,#suprvsrdiv").find("textarea,input,select").each(function(){
//			 var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//		 });
		 
		
		 
		 
		 
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){  
//						
//						 if(i == "SLFSPS_DETS"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 //console.log("SLFSPS_DETS Saved successfully"+clientId);
//								 $("#fnaId").val(clientId);
//								 $("#hTxtFldFnaReviewFlag").val("I");//To Save profile Manually set Review flg to I
//							 });
//						 } 
//						 
//						 
//						 if(i == "ADVDECLR_DETS"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var advDecId = contvalue["advDecId"];
//								 //console.log("ADVDECLR_DETS Saved successfully"+advDecId);
//								 $("#advDecId").val(advDecId);
//							 });
//							
//						 }  
//						  
//						return;  
//					}); 
//				});  
//				 prevScrFlg="";
//			}
//		});  
//		}
		}
}
 
 

 function instantFPMSSaveClientDetails(){ 
//	 console.log("Save FPMS client details...");
//	 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "FPMS_CLIENT";  
//		var parameter = "DBCALLFOR=FPMSCLIENT_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		 if(!isEmpty($("#dfSelfName").val())){
//			$("#clientsection").find("input,select").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		 }
//		   
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){   
//						 if(i == "SLFSPS_DETS"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"]; 
//								 $("#fnaId").val(clientId);
//								
//							 });
//							 prevScrFlg="";
//						 }  
//						 
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/*##################################Financial Goals > Cash Flw Stmt > Source of income##################################*/

function instantSrcOfIncDetails(){ 
//	console.log("Save Source of income details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "SRCOFINCOME";  
//		var parameter = "DBCALLFOR=SRCOFINCOME_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#employeincomediv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		  
//		 $("#nonemployeeincomediv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		 
//		 
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){  
//						 if(i == "SRCOFINCOME_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var incsrcId = contvalue["incsrcId"];
//								 //console.log("SRCOFINCOME_RECORD Saved successfully"+incsrcId);
//								 $("#fnaId").val(clientId);
//								 $("#incsrcId").val(incsrcId);
//								
//							 });
//							 prevScrFlg="";
//						 } 
//						
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/**/




/*##################################Financial Goals > Cash Flw Stmt >  Annual Expenditure ##############*/


function instantExpendDetails(){ 
	console.log("Save Expected Inflow and Outflow details...")
//	instantSaveClientDetails();
//	
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "EXPENDITURE";  
//		var parameter = "DBCALLFOR=EXPENDITURE_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#annualexpendiv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		   
//		 
//		 
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){  
//						 if(i == "EXPENDITURE_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var expdId = contvalue["expdId"];
//								 //console.log("EXPENDITURE_RECORD Saved successfully"+expdId);
//								 $("#fnaId").val(clientId);
//								 $("#expdId").val(expdId);
//							 });
//							 prevScrFlg="";
//						 } 
//						  
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/**/

/*##################################Financial Goals > Contingency planning ##############*/

function instantContingDetails(){ 
	console.log("Save Contigency planning details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "CONTINGENCY";  
//		var parameter = "DBCALLFOR=CONTINGENCY_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#contingencysection").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		   
//		 
//		 
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){  
//						 if(i == "CONTINGENCY_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var conId = contvalue["conId"];
//								 //console.log("CONTINGENCY_RECORD Saved successfully"+conId);
//								 $("#fnaId").val(clientId);
//								 $("#conId").val(conId);
//							 });
//							 prevScrFlg="";
//						 } 
//						  
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/**/




/*##################################Financial Goals > Retirement planning ##############*/

function instantRetirplgDetails(){ 
	console.log("Save Retirement planning details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "RETIREPLAN";  
//		var parameter = "DBCALLFOR=RETIREPLAN_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#retireplandiv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		     
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){
//						
//						 if(i == "RETIREPLAN_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var retId = contvalue["retId"];
////								 console.log("RETIREPLAN_RECORD Saved successfully"+retId);
//								 $("#fnaId").val(clientId);
//								 $("#retId").val(retId);
//							 });
//							 prevScrFlg="";
//						 }  
//						 
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/**/





/*##################################Financial Goals > Cash Assets ##############*/

function instantCashAsstDetails(){ 
	console.log("Save Cash Assets details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "CASHASSET";  
//		var parameter = "DBCALLFOR=CASHASSET_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#cashassetdiv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		     
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){
//						
//						 if(i == "CASHASSET_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var casstId = contvalue["casstId"];
//								 //console.log("CASHASSET_RECORD Saved successfully"+casstId);
//								 $("#fnaId").val(clientId);
//								 $("#casstId").val(casstId);
//							 });
//							 prevScrFlg="";
//						 }  
//						 
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/**/




/*##################################Financial Goals > Other Assets ##############*/

function instantOtherAsstDetails(){ 
//	console.log("Save Other Assets details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "OTHERASSET";  
//		var parameter = "DBCALLFOR=OTHERASSET_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#cashassetdiv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		     
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){
//						
//						 if(i == "OTHERASSET_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var othId = contvalue["othId"];
//								 //console.log("OTHERASSET_RECORD Saved successfully"+othId);
//								 $("#fnaId").val(clientId);
//								 $("#othId").val(othId);
//							 });
//							 prevScrFlg="";
//						 }  
//						 
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/**/




/*##################################Financial Goals > Liability ##############*/


function instantLiabilityDetails(){ 
	console.log("Save Liabilities details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "LIABILITY";  
//		var parameter = "DBCALLFOR=LIABILITY_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#liabilitydiv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		     
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){ 
//						 if(i == "LIABILITY_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var liabId = contvalue["liabId"];
//								 //console.log("LIABILITY_RECORD Saved successfully"+liabId);
//								 $("#fnaId").val(clientId);
//								 $("#liabId").val(liabId);
//							 });
//							 prevScrFlg="";
//						 }  
//						 
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/**/



/*##################################Financial Goals > Current assumption ##############*/



function instantCurAssDetails(){ 
	console.log("Save Current assumption details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "CURASS";  
//		var parameter = "DBCALLFOR=CURASS_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#currentAssumptiondiv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		     
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){ 
//						 if(i == "CURASS_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var caId = contvalue["caId"];
//								 //console.log("CURASS_RECORD Saved successfully"+caId);
//								 $("#fnaId").val(clientId);
//								 $("#caId").val(caId);
//							 });
//							 prevScrFlg="";
//						 }  
//						 
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}
/**/
/*################################## Summary ##############*/ 

function instantSummaryDetails(){ 
//	console.log("Save Summary details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "SUMMARY";  
//		var parameter = "DBCALLFOR=SUMMARY_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#summarydiv").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		 
//		     
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){ 
//						 if(i == "SUMMARY_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var saId = contvalue["saId"];
////								 console.log("SUMMARY_RECORD Saved successfully"+saId);
//								 $("#fnaId").val(clientId);
//								 $("#saId").val(saId);
//							 });
//							 prevScrFlg="";
//						 }  
//						 
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}

/*################################## Summary ##############*/ 

function instantHealthDetails(){ 
//	console.log("Save Health Insurance details...")
//	instantSaveClientDetails(); 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val();
//	 
//	 	var saveFor = "HEALTH";  
//		var parameter = "DBCALLFOR=HEALTH_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		 
//		$(".formHiddenIds").each(function(){
//					var id=$(this).attr("id");
//					var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val; 
//		 });
//		
//		  
//		 $("#healthInsdetstab").find("input,select,textarea").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			}); 
//		 
//		     
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){ 
//						 if(i == "HEALTH_RECORD"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var persprioId = contvalue["persprioId"];
////								 console.log("HEALTH_RECORD Saved successfully"+persprioId);
//								 $("#fnaId").val(clientId);
//								 $("#persprioId").val(persprioId);
//							 });
//							 prevScrFlg="";
//						 }  
//						 
//						return;  
//					}); 
//				});  
//			}
//		});  
//		}
}

/*##################################Financial Goals > Estate planning ##############*/


function instantEstPlnSave(){
//	console.log("Save Estate planning details...")
//	instantSaveClientDetails();//insert/update clent details
//	 var fnaId=$("#fnaId").val(); 
//	 var estId=$("#estId").val(); 
//	 
//		var saveFor = "ESTATEPLAN"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"ESTATEPLAN_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,  
//					"estId"				:estId,  
//					"txtFldEstTrstDesc"	 		:$("#txtFldEstTrstDesc").val(), 
//					"txtFldEstSlfTrstFlg"	 	:$("#txtFldEstSlfTrstFlg").val(), 
//					"txtFldEstSpsTrstFlg"		:$("#txtFldEstSpsTrstFlg").val(),
//					"txtFldEstTrstRmrks"		:$("#txtFldEstTrstRmrks").val(),  
//					"txtFldEstLPOADesc"			:$("#txtFldEstLPOADesc").val(), 
//					"txtFldEstSlfLPOAFlg"		:$("#txtFldEstSlfLPOAFlg").val(),
//					"txtFldEstSpsLPOAFlg"		:$("#txtFldEstSpsLPOAFlg").val(), 
//					"txtFldEstLPOARmrks"  		:$("#txtFldEstLPOARmrks").val(), 
//					"txtFldEstCharityDesc"		:$("#txtFldEstCharityDesc").val(),
//					"txtFldEstSlfCharityFlg"	:$("#txtFldEstSlfCharityFlg").val(),  					
//					"txtFldEstSpsCharityFlg"	:$("#txtFldEstSpsCharityFlg").val(),  
//					"txtFldEstCharityRmrks" 	:$("#txtFldEstCharityRmrks").val(),  
//					"txtFldEstOverseasDesc"		:$("#txtFldEstOverseasDesc").val(), 
//					"txtFldEstSpsOverseasFlg"	:$("#txtFldEstSpsOverseasFlg").val(), 
//					"txtFldEstOverseasRmrks"	:$("#txtFldEstOverseasRmrks").val(), 
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "ESTATEPLAN_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//									 var estId = contvalue["estId"];
//									 console.log("ESTATEPLAN_RECORD Saved successfully"+estId);
//									 $("#fnaId").val(fnaId);
//									 $("#estId").val(estId);
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
		 
}
/**/
/*################################## Central Provident Fund - Emp Contribution ##############*/


function instantEmpContrbSave(){
	console.log("Save Employee contribution details...")
//	instantSaveClientDetails();//insert/update clent details
//	 var fnaId=$("#fnaId").val(); 
//	 var ccPkId=$("#ccPkId").val(); 
//	 
//		var saveFor = "EMPCONTRB"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"EMPCONTRB_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,  
//					"ccPkId"			:ccPkId,  
//					"ccSelfOrSps"		:$("#ccSelfOrSps").val(),  
//					"ccEmpleContrb"		:$("#ccEmpleContrb").val(),  
//					"ccEmplrContrb"		:$("#ccEmplrContrb").val(),  
//					"ccCrtdBy"			:$("#ccCrtdBy").val(),  
//					"ccCrtdDate"		:$("#ccCrtdDate").val(),   
//					 
//				},
//				 
//				
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "EMPCONTRB_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//									 var ccPkId = contvalue["ccPkId"];
//									 //console.log("EMPCONTRB_RECORD Saved successfully"+ccPkId);
//									 $("#fnaId").val(fnaId);
//									 $("#ccPkId").val(ccPkId);
//									}); 
//								 prevScrFlg="";
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
		 
} 


 
/* ######################################Children Particulars Save###################################### */

function instantChildSave($row,$mode){
	console.log("Save Child details...")
// instantSaveClientDetails();//instant save/update client details
// var fnaId=$("#fnaId").val();
//  
// 
// if(!isEmpty($("#txtFldDlgChldName").val()) && //to mandatories are filled are not
//		 !isEmpty($("#txtFldDlgChildDob").val()) &&
//		   !isEmpty($("#txtFldDlgChldRel").val()) ){
// 
//	var saveFor = "CHILD_PARTICULARS"; 
//		showLoader();  
//		$.ajax({
//			url:InstantProServlet,
//			async:false,
//			data:{
//				"DBCALLFOR":"CHILD_INSTANT_SAVE",
//				"txtFldSaveFor"				:saveFor, 
//				"fnaId"						:fnaId,
//				"txtFldChildMode"			:$mode,
//				"txtFldFnaChldId"			:$("#txtFldDlgFnaChldId").val(),
//				"txtFldChldName"			:$("#txtFldDlgChldName").val(),
//				"txtFldChldRel"				:$("#txtFldDlgChldRel").val(),
//				"txtFldChldDob"				:$("#txtFldDlgChildDob").val(),
//				"txtFldChldAge"				:$("#txtFldDlgChldAge").val(),
//				"txtFldChldGender"			:$("#txtFldDlgChldGender").val(),
//				"txtFldChldYrs2ter"			:$("#txtFldDlgChldYrs2ter").val(),
//				"txtFldChldYrsofEdu"		:$("#txtFldDlgChldYrsofEdu").val(), 
//				"txtFldChldPerAnnEduCost"	:$("#txtFldDlgChldPerAnnEduCost").val(),
//				"txtFldChldAvailEdnFund"	:$("#txtFldDlgChldAvailEdnFund").val(),
//				"txtFldChldRemrks"			:$("#txtFldDlgChldRemrks").val(), 
//				"txtFldChldCrtdBy"			:$("#txtFldDlgChldCrtdBy").val(), 
//				"txtFldChldCrtdDate"		:$("#txtFldDlgChldCrtdDate").val(),  
//			},
//			success: function(result){ 
//				var jsnRslt=JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){
//					if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//						window.location = BASE_URL + SESSION_EXP_JSP; 
//						return;
//					}
//
//					if (obj.SESSION_EXPIRY=="DB_ERROR") {
//						window.location = BASE_URL + DB_EXP_JSP; 
//						return;
//					}
//					
//					$.each(obj,function(i,val){  
//						 if(i == "CHILD_RECORD"){   
//							 $.each(val, function(contkey, contvalue) { 
//									 if($mode == INS_MODE || $mode == UPD_MODE){
//										 applyToastrAlert(CHILD_INS_SAVE);
//									 }
//									 if($mode == DEL_MODE){
//										 applyToastrAlert(CHILD_INS_DEL);
//									 }
//									 if($mode == INS_MODE){
//										 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//										 $row.find("td:eq(10)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//										 $row.find("td:eq(10)").find('input:eq(2)').val(ResultNewDate); 
//									 } 
//								}); 
//						 }
//							  
//							 return; 
//							  
//					});
//					
//					
//				});
//				 hideLoader(); 
//				
//			}
//		}); 
//    }
}
/* #############################END - Children Particulars Save ###################################### */


/* #############################  Financial Goals Save ###################################### */
function instantFinGoalsSave($row,$mode){
	console.log("Save Financial goals details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 			  
//	 if(!isEmpty($("#selDlgFinGoalType").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgFinGoal").val()) ){
//		 
//		var saveFor = "FIN_GOALS"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"FIN_GOALS_INSTANT_SAVE",
//					"txtFldSaveFor"				:saveFor, 
//					"fnaId"						:fnaId,
//					"txtFldFinGoalsMode"		:$mode,
//					"txtFldFnaGoalId"			:$("#txtFldDlgFnaGoalId").val(),
//					"selFinGoalType"			:$("#selDlgFinGoalType").val(),
//					"txtFldFinGoal"				:$("#txtFldDlgFinGoal").val(), 
//					"selFinGoalPrio"			:$("#selDlgFinGoalPrio").val(),  
//					"txtFldFGCrtdBy"			:$("#txtFldDlgFGCrtdBy").val(), 
//					"txtFldFGCrtdDate"			:$("#txtFldDlgFGCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "FINGL_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(FINGL_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(FINGL_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(4)").find('input:eq(0)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(4)").find('input:eq(1)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
}



/* #############################  Wealth Accumulation Save ###################################### */
function instantWlthAcSave($row,$mode){
	console.log("Save wealth accumulation details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 	
//	 if(!isEmpty($("#txtFldDlgSAPurpose").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgSAWhen").val()) &&
//			   !isEmpty($("#txtFldDlgSAmount").val()) ){
//		var saveFor = "WLTH_GOALS"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"WLTH_GOALS_INSTANT_SAVE",
//					"txtFldSaveFor"				:saveFor, 
//					"fnaId"						:fnaId,
//					"txtFldwlthaccMode"			:$mode,
//					"txtFldSAInvId"				:$("#txtFldDlgSAInvId").val(),
//					"txtFldSAPurpose"			:$("#txtFldDlgSAPurpose").val(),
//					"txtFldSAWhen"				:$("#txtFldDlgSAWhen").val(), 
//					"txtFldSAmount"				:$("#txtFldDlgSAmount").val(),  
//					"selSAPriority"				:$("#selDlgSAPriority").val(), 
//					"selSARiskLvl"				:$("#selDlgSARiskLvl").val(),  
//					"txtFldSACrtdBy"			:$("#txtFldDlgSACrtdBy").val(), 
//					"txtFldSACrtdDate"			:$("#txtFldDlgSACrtdDate").val(),   
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "WLTHGLS_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(WLTHGL_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(WLTHGL_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(6)").find('input:eq(0)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(6)").find('input:eq(1)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader();  
//				}
//			}); 
//	 } 
}



/* #############################  Dependant Save ###################################### */
function instantDepnSave($row,$mode){
//	console.log("Save Depandent details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 			  
//	 if(!isEmpty($("#txtFldDlgDepnName").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgDepnRelationship").val()) &&
//			   !isEmpty($("#txtFldDlgDepnDob").val()) ){
//		var saveFor = "DEPNT"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"DEPNT_INSTANT_SAVE",
//					"txtFldSaveFor"				:saveFor, 
//					"fnaId"						:fnaId,
//					"txtFlddeptMode"			:$mode,
//					"txtFldDepnId"				:$("#txtFldDlgDepnId").val(),
//					"txtFldDepnName"			:$("#txtFldDlgDepnName").val(),
//					"selDepnRelationship"		:$("#selDlgDepnRelationship").val(), 
//					"txtFldDepnDob"				:$("#txtFldDlgDepnDob").val(),  
//					"txtFldDepnAge"				:$("#txtFldDlgDepnAge").val(), 
//					"selDepnGender"				:$("#selDlgDepnGender").val(),  
//					"txtFldDepnYrssupport"		:$("#txtFldDlgDepnYrssupport").val(), 
//					"txtFldDepnProvSlf"			:$("#txtFldDlgDepnProvSlf").val(),   
//					"txtFldDepnProvSps"			:$("#txtFldDlgDepnProvSps").val(),  
//					"txtFldDepnMonthctr"		:$("#txtFldDlgDepnMonthctr").val(), 
//					"txtFldDepnCrtdBy"			:$("#txtFldDlgDepnCrtdBy").val(),  
//					"txtFldDepnCrtdDate"		:$("#txtFldDlgDepnCrtdDate").val(),    
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "DEPNT_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(DEPNT_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(DEPNT_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(10)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(10)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					instantExpendDetails();/*Annual expenditure - Dependant contributions*/
//					hideLoader(); 
//					
//				}
//			}); 
//	 }		 
}




/* #############################  Central Provident Fund Save ###################################### */
function instantCpfDedAddSave($row,$mode){
	console.log("Save Cpf Addition and deduction details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val(); 
//	 if(!isEmpty($("#txtFldDlgCADApplicant").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgCADTypesOfTrans").val())){
//		var saveFor = "CPFADD"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"CPFADD_INSTANT_SAVE",
//					"txtFldSaveFor"			:saveFor, 
//					"fnaId"					:fnaId,
//					"txtFldCADMode"			:$mode,
//					"cdPkid"				:$("#txtFldDlgCADPkid").val(),
//					"txtFldCADRefId"		:$("#txtFldDlgCADRefId").val(), 
//					"txtFldCADApplicant"	:$("#txtFldDlgCADApplicant").val(),
//					"selCdApplicantType"	:$("#selDlgCADApplicantType").val(), 
//					"selCADType"			:$("#selDlgCADType").val(),  
//					"selCADTypesOfTrans"	:$("#selDlgCADTypesOfTrans").val(), 
//					"selCADCpfAcctype"		:$("#selDlgCADCpfAcctype").val(),  
//					"txtFldCADPerFrom"		:$("#txtFldDlgCADPerFrom").val(), 
//					"txtFldCADPerTo"		:$("#txtFldDlgCADPerTo").val(),   
//					"txtFldCADAmt"			:$("#txtFldDlgCADAmt").val(),  
//					"selCADPayTerm"			:$("#selDlgCADPayTerm").val(),   
//					"selCADRetrAccAge"		:$("#selDlgCADRetrAccAge").val(), 
//					"txtFldCADCrtdBy"		:$("#txtFldDlgCADCrtdBy").val(),  
//					"txtFldCADCrtdDate"		:$("#txtFldDlgCADCrtdDate").val(),   
//					 
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "CPFADD_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(CPFAD_INS_SAVE); 
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(CPFAD_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(11)").find('input:eq(0)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(11)").find('input:eq(1)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
	}



/* #############################  Other Area of Concern Save ###################################### */
function instantArOfConSave($row,$mode){
	console.log("Save Area of concern details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 			  
//	 if(!isEmpty($("#txtFldDlgOthAreaConcern").val()) ){ //to mandatories are filled are not
//		var saveFor = "AROFCON"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"AROFCON_INSTANT_SAVE",
//					"txtFldSaveFor"			:saveFor, 
//					"fnaId"					:fnaId,
//					"txtFldarcMode"			:$mode,
//					"txtFldFnaOacId"		:$("#txtFldDlgFnaOacId").val(),
//					"txtFldOthAreaConcern"	:$("#txtFldDlgOthAreaConcern").val(), 
//					"txtFldFgCrtdBy"		:$("#txtFldDlgFgCrtdBy").val(),
//					"txtFldFgCrtdDate"		:$("#txtFldDlgFgCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "AROFCON_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(AROFCON_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(AROFCON_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(2)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(2)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
	}



/* #############################  Personal Asset Save ###################################### */
function instantPersAssetSave($row,$mode){
	console.log("Save Personal assets details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 if(!isEmpty($("#txtFldDlgPerAcctHolder").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgPerTypeOfAsset").val()) &&
//			   !isEmpty($("#txtFldDlgPerNameOfAsset").val()) ){
//		
//		var saveFor = "PERSASST"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"PERSASST_INSTANT_SAVE",
//					"txtFldSaveFor"			:saveFor, 
//					"fnaId"					:fnaId,
//					"txtFldperastMode"		:$mode,
//					"txtFldPerBusiPersId"	:$("#txtFldDlgPerBusiPersId").val(),
//					"txtFldPerAcctHolder"	:$("#txtFldDlgPerAcctHolder").val(), 
//					"txtFldPerTypeOfAsset"	:$("#txtFldDlgPerTypeOfAsset").val(),
//					"txtFldPerNameOfAsset"	:$("#txtFldDlgPerNameOfAsset").val(),  
//					"txtFldPerPurInvValue"	:$("#txtFldDlgPerPurInvValue").val(), 
//					"txtFldPerCurrValue"	:$("#txtFldDlgPerCurrValue").val(),
//					"txtFldPerOsValue"		:$("#txtFldDlgPerOsValue").val(), 
//					"txtFldPerEstApprValue"	:$("#txtFldDlgPerEstApprValue").val(), 
//					"txtFldPerYrs2keep"		:$("#txtFldDlgPerYrs2keep").val(),
//					"txtFldPerChildEdnPrcnt":$("#txtFldDlgPerChildEdnPrcnt").val(), 
//					"txtFldPerRetPlanPrcnt"	:$("#txtFldDlgPerRetPlanPrcnt").val(), 
//					"txtFldPerRemarks"		:$("#txtFldDlgPerRemarks").val(),
//					"txtFldPerCrtdBy"		:$("#txtFldDlgPerCrtdBy").val(), 
//					"txtFldPerCrtdDate"		:$("#txtFldDlgPerCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "PERSASST_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(PERSASST_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(PERSASST_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(12)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(12)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }	 
	}


/* #############################  Business Asset Save ###################################### */
function instantBusiAssetSave($row,$mode){
	console.log("Save Businesss assets details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 				  
//	 if(!isEmpty($("#txtFldDlgBusnAcctHolder").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgBusnTypeOfAsset").val()) &&
//			   !isEmpty($("#txtFldDlgBusnNameOfAsset").val()) ){
//		var saveFor = "BUSIASST"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"BUSIASST_INSTANT_SAVE",
//					"txtFldSaveFor"			 :saveFor, 
//					"fnaId"					 :fnaId,
//					"txtFldbusnastMode"		 :$mode,
//					"txtFldBuisBusiPersId"	 :$("#txtFldDlgBusnBusiPersId").val(),
//					"txtFldBuisAcctHolder"	 :$("#txtFldDlgBusnAcctHolder").val(), 
//					"txtFldBuisTypeOfAsset"	 :$("#txtFldDlgBusnTypeOfAsset").val(),
//					"txtFldBuisNameOfAsset"	 :$("#txtFldDlgBusnNameOfAsset").val(),  
//					"txtFldBuisPurInvValue"	 :$("#txtFldDlgBusnPurInvValue").val(), 
//					"txtFldBuisCurrValue"	 :$("#txtFldDlgBusnCurrValue").val(),
//					"txtFldBuisOsValue"		 :$("#txtFldDlgBusnOsValue").val(), 
//					"txtFldBuisEstApprValue" :$("#txtFldDlgBusnEstApprValue").val(), 
//					"txtFldBuisYrs2keep"	 :$("#txtFldDlgBusnYrs2keep").val(),
//					"txtFldBuisChildEdnPrcnt":$("#txtFldDlgBusnChildEdnPrcnt").val(), 
//					"txtFldBuisRetPlanPrcnt" :$("#txtFldDlgBusnRetPlanPrcnt").val(), 
//					"txtFldBuisRemarks"		 :$("#txtFldDlgBuisRemarks").val(),
//					"txtFldBuisCrtdBy"		 :$("#txtFldDlgBusnCrtdBy").val(), 
//					"txtFldBuisCrtdDate"	 :$("#txtFldDlgBusnCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "BUSIASST_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(BUSIASST_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(BUSIASST_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(12)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(12)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
	}



/* #############################  Vehicle Ownership Save ###################################### */
function instantVehOwnSave($row,$mode){
//	console.log("Save Vehicle ownership details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 if(!isEmpty($("#txtFldDlgVehOwner").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgVehMktVal").val()) &&
//			   !isEmpty($("#txtFldDlgVehLnVal").val()) ){
//		
//		var saveFor = "VEHOWN"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"VEHOWN_INSTANT_SAVE",
//					"txtFldSaveFor"			 :saveFor, 
//					"fnaId"					 :fnaId,
//					"txtFldvehMode"		     :$mode,
//					"txtFldVehId"	 		 :$("#txtFldDlgVehId").val(),
//					"txtFldVehOwner"	 	 :$("#txtFldDlgVehOwner").val(), 
//					"txtFldVehMktVal"	 	 :$("#txtFldDlgVehMktVal").val(),
//					"txtFldVehLnVal"	 	 :$("#txtFldDlgVehLnVal").val(),  
//					"txtFldVehLnBank"	  	 :$("#txtFldDlgVehLnBank").val(), 
//					"txtFldVehPerd"	 		 :$("#txtFldDlgVehPerd").val(),
//					"txtFldVehiMonthInstal"	 :$("#txtFldDlgVehMthlyInstal").val(), 
//					"txtFldVehiSoldOnDeath"  :$("#txtFldDlgVehiSoldOnDeath").val(), 
//					"txtFldVehRemark"	     :$("#txtFldDlgVehRemark").val(),
//					"txtFldVehCrtdBy"		 :$("#txtFldDlgVehCrtdBy").val(), 
//					"txtFldVehCrtdDate" 	 :$("#txtFldDlgVehCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "VEHOWN_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(VEHOWN_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(VEHOWN_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(9)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(9)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
	}


/* #############################  Cash At Banks Save ###################################### */
function instantCobSave($row,$mode){
	console.log("Save cash at bank details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 			  
//	 if(!isEmpty($("#txtFldDlgMainAccHolderName").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgCOBOwnershipType").val())  ){
//		var saveFor = "COB"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"COB_INSTANT_SAVE",
//					"txtFldSaveFor"			 :saveFor, 
//					"fnaId"					 :fnaId,
//					"txtFldCobMode"		     :$mode,
//					"txtFldCashBankId"	 	 	:$("#txtFldDlgCashBankId").val(),
//					"txtFldCOBRefId"	 	 	:$("#txtFldDlgCashBankRefId").val(), 
//					"txtFldMainAccHolderName"	:$("#txtFldDlgMainAccHolderName").val(),
//					"txtFldSuppAccHolderName"	:$("#txtFldDlgSuppAccHolderName").val(),  
//					"selCOBRelationship"	  	:$("#selDlgCOBRelationship").val(), 
//					"selCOBOwnershipType"	 	:$("#selDlgCOBOwnershipType").val(),
//					"txtFldCOBBankName"	 		:$("#txtFldDlgCOBBankName").val(), 
//					"txtFldCOBBankAccNo"  		:$("#txtFldDlgCOBBankAccNo").val(), 
//					"selCOBAccountType"	     	:$("#selDlgCOBAccountType").val(),
//					"txtFldCOBCurBalance"		:$("#txtFldDlgCOBCurBalance").val(), 
//					"txtFldCOBRegDeposit" 	 	:$("#txtFldDlgCOBRegDeposit").val(), 
//					"selCOBDepositFreq" 	 	:$("#selDlgCOBDepositFreq").val(),  
//					"txtFldCOBPerFrom"	 	 	:$("#txtFldDlgCOBPerFrom").val(),
//					"txtFldCOBPerTo"	 	 	:$("#txtFldDlgCOBPerTo").val(),  
//					"selCOBObjective"	  	 	:$("#selDlgCOBObjective").val(), 
//					"txtFldCOBRetrmntPrcnt"	 	:$("#txtFldDlgCOBRetrmntPrcnt").val(),
//					"selCOBChildName"	 		:$("#selDlgCOBChildName").val(), 
//					"txtFldCOBRemarks"  		:$("#txtFldDlgCOBRemarks").val(), 
//					"txtFldCOBCrtdBy"	     	:$("#txtFldDlgCOBCrtdBy").val(),
//					"txtFldCOBCrtdDate"		 	:$("#txtFldDlgCOBCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "COB_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(COB_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(COB_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(17)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(17)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
	}




/* #############################  Retirement planning - CPF Life Account Save ###################################### */
function instantRetCpfPaySave($row,$mode){
//	console.log("Save retirement cpfpay details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val(); 
//	 if(!isEmpty($("#txtFldDlgcpfLfAge").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgcpfLfType").val())  ){
//		var saveFor = "CPFTRANSFER"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"CPFTRANSFER_INSTANT_SAVE",
//					"txtFldSaveFor"			 	:saveFor, 
//					"fnaId"					 	:fnaId,
//					"txtFldcpfLfeMode"		    :$mode,
//					"txtFldcpfLfeId"	 	 	:$("#txtFldDlgcpfLfId").val(),
//					"txtFldCpfLifeAge"	 	 	:$("#txtFldDlgcpfLfAge").val(), 
//					"txtFldCpfLifeTypes"		:$("#txtFldDlgcpfLfType").val(),
//					"txtFldCpfLifePrem"			:$("#selDlgcpfLfPrem").val(),  
//					"txtFldCpfLifePayoutInc"	:$("#txtFldDlgcpfLifePayInc").val(), 
//					"txtFldCpfLifeFdTrans"	 	:$("#txtFldDlgcpfLifeRA").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "CPFTRANSFER_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
////											 applyToastrAlert(FDTRNCPFLFE_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
////											 applyToastrAlert(FDTRNCPFLFE_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]);  
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
	}


/* #############################  Retirement Planning - Other incomes Save ###################################### */
function instantRetORSave($row,$mode){
//	console.log("Save Retirement OR details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 if(!isEmpty($("#txtFldDlgORtyofpay").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgORFreq").val()) &&
//			   !isEmpty($("#selDlgORAgeBsOn").val()) ){  
//		
//		var saveFor = "OTHERINC"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"OTHERINC_INSTANT_SAVE",
//					"txtFldSaveFor"			 :saveFor, 
//					"fnaId"					 :fnaId,
//					"txtFldothretMode"		:$mode,
//					"txtFldORId"	 	 	:$("#txtFldDlgORId").val(),
//					"txtFldORtyofpay"	 	:$("#txtFldDlgORtyofpay").val(), 
//					"selORFreq"				:$("#selDlgORFreq").val(),
//					"txtFldORAnlExp"		:$("#txtFldDlgORAnlExp").val(),  
//					"txtFldOREslrate"	  	:$("#txtFldDlgOREslrate").val(), 
//					"selORAgeBsOn"	 		:$("#selDlgORAgeBsOn").val(),
//					"txtFldORAgePaySts"	 	:$("#txtFldDlgORAgePaySts").val(), 
//					"txtFldORAgePayends"  	:$("#txtFldDlgORAgePayends").val(), 
//					"txtFldORRemarks"	    :$("#txtFldDlgORRemarks").val(),
//					"txtFldORCrtdBy"		:$("#txtFldDlgORCrtdBy").val(), 
//					"txtFldORCrtdDate" 	 	:$("#txtFldDlgORCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "OTHERINC_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(RETOTHERPAY_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(RETOTHERPAY_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(9)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(9)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
 }



/* #############################  Retirement Planning - Income Received Save ###################################### */
function instantRetIRSave($row,$mode){
//	console.log("Save Retirement IR details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 if(!isEmpty($("#txtFldDlgIRClsfy").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgIRFreq").val()) &&
//			   !isEmpty($("#selDlgIRAgeBsOn").val()) ){
//		var saveFor = "RETINCREV"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"RETINCREV_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"txtFldincretMode"	:$mode,
//					"txtFldIRId"	 	:$("#txtFldDlgIRId").val(),
//					"txtFldIRClsfy"	 	:$("#txtFldDlgIRClsfy").val(), 
//					"txtFldIRDesc"		:$("#txtFldDlgIRDesc").val(),
//					"selIRFreq"			:$("#selDlgIRFreq").val(),  
//					"txtFldIRAmtofInc"	:$("#txtFldDlgIRAmtofInc").val(), 
//					"txtFldIREslrate"	:$("#txtFldDlgIREslrate").val(),
//					"txtFldIRRoi"	 	:$("#txtFldDlgIRRoi").val(), 
//					"selIRAgeBsOn"  	:$("#selDlgIRAgeBsOn").val(), 
//					"txtFldIRAgePaySts"	:$("#txtFldDlgIRAgePaySts").val(),
//					"txtFldIRAgePayends":$("#txtFldDlgIRAgePayends").val(), 
//					"txtFldIRCrtdBy" 	:$("#txtFldDlgIRCrtdBy").val(),  
//					"txtFldIRCrtdDate" 	:$("#txtFldDlgIRCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "RETINCREV_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(RETINCRECV_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(RETINCRECV_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(10)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(10)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
 }




/* #############################  Retirement Planning - Income and Asset Received Save ###################################### */
function instantIncAssSave($row,$mode){
//	console.log("Save Ret income Assets details..."+$mode);
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 if(!isEmpty($("#txtFldDlgIncAssClsfy").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgIncAssFreq").val()) &&
//			   !isEmpty($("#selDlgIncAssAgeBsOn").val()) ){
//		var saveFor = "RETINCASSREV"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"RETINCASSREV_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"txtFldincassrtMode"	:$mode,
//					"txtFldIncAssId"	 	:$("#txtFldDlgIncAssId").val(),
//					"txtFldIncAssRefId"	 	:$("#txtFldDlgIncAssRefId").val(), 
//					"txtFldIncAssClsfy"		:$("#txtFldDlgIncAssClsfy").val(),
//					"txtFldIncAssDesc"		:$("#txtFldDlgIncAssDesc").val(),  
//					"selIncAssFreq"			:$("#selDlgIncAssFreq").val(), 
//					"txtFldIncAssAmtofInc"	:$("#txtFldDlgIncAssAmtofInc").val(),
//					"txtFldIncAssEslrate"	:$("#txtFldDlgIncAssEslrate").val(), 
//					"txtFldIncAssRoi"  		:$("#txtFldDlgIncAssRoi").val(), 
//					"selIncAssAgeBsOn"		:$("#selDlgIncAssAgeBsOn").val(),
//					"txtFldIncAssAgePaySts"	:$("#txtFldDlgIncAssAgePaySts").val(), 
//					"txtFldIncAssAgePayends":$("#txtFldDlgIncAssAgePayends").val(),  
//					"txtFldIncAssCrtdBy" 	:$("#txtFldDlgIncAssCrtdBy").val(),  
//					"txtFldIncAssCrtdDate" 	:$("#txtFldDlgIncAssCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "RETINCASSREV_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(RETINCASST_INS_SAV);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(RETINCASST_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(10)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(10)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//		}
 }

 


/* #############################  Investment Save ###################################### */
function instantInvestSave($row,$mode){
//	console.log("Save Investment details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 if(!isEmpty($("#selDlgInvOwnership").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgInvTypesOfInvst").val()) &&
//			   !isEmpty($("#txtFldDlgInvDateInvst").val()) ){
//		var saveFor = "INVEST"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"INVEST_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"txtFldinvestMode"	:$mode,//37 fields
//					"txtFldOwnInvstId"	 		:$("#txtFldDlgInvtmntId").val(),
//					"txtFldOwnInvRefId"	 		:$("#txtFldDlgInvtmntRefId").val(), 
//					"selInvOwner"				:$("#selDlgInvOwnership").val(),
//					"selInvType"				:$("#selDlgInvTypesOfInvst").val(),  
//					"txtFldInvFa"				:$("#txtFldDlgInvFABrokerName").val(), 
//					"txtFldInvAnnlPortfolio"	:$("#txtFldDlgAnalsByPortfolio").val(),
//					"txtFldInvInstname"			:$("#txtFldDlgInvInstitution").val(), 
//					"txtFldInvDesc"  			:$("#txtFldDlgInvDesc").val(), 
//					"txtFldInvEstrate"			:$("#txtFldDlgInvEstInvRate").val(),
//					"txtFldInvAmount"			:$("#txtFldDlgInvAmt").val(), 
//					"selInvPaymethod"			:$("#txtFldDlgInvSource").val(),  
//					"txtFldDivPeriod" 			:$("#selDlgInvDivPeriod").val(),  
//					"selInvDividendReInv"		:$("#selDlgDivdReInv").val(), 
//					"selInvDividendBasdOn"		:$("#selDlgDivdBasedOn").val(), 
//					"txtFldInvDivPARAmt"		:$("#txtFldDlgDividendPAR").val(),
//					"txtFldInvAnnlDivid"		:$("#txtFldDlgAnlDivdRate").val(),  
//					"selInvDividPaymode"		:$("#selDlgDivdPaymode").val(), 
//					"txtFldDividendAmt"			:$("#selDlgDividendAmt").val(), 
//					"txtFldInvDate"				:$("#txtFldDlgInvDateInvst").val(),
//					"txtFldInvCurrbid"			:$("#txtFldDlgInvCurBid").val(),   
//					"txtFldInvUnitsAlloc"		:$("#txtFldDlgInvNoOfUnits").val(),
//					"txtFldinvCurrNAV"			:$("#txtFldDlgInvNAV").val(), 
//					"txtFldInvAnyRegPlan"		:$("#txtFldDlgAnyRegInvPlan").val(), 
//					"selInvRegPlanFreq"			:$("#selDlgInvFreq").val(),
//					"txtInvRegPlanAmout"		:$("#txtFldDlgAnyRegInvPlanAmt").val(), 
//					"txtFldInvRegPlanFromYrs"  	:$("#txtFldDlgNoOfYrsRegInv").val(), 
////					"txtFldInvRegPlanToYrs"		:$("#txtFldDlgTotNoOfYrsStayInv").val(),removed column
//					"selInvObjective"			:$("#selDlgInvObjInvst").val(), 
//					"selInvYrsToRet"			:$("#selDlgInvYrToRet").val(),  
//					"txtFldInvChildname" 		:$("#selDlgInvNameOfChild").val(),  
//					"txtFldInvAccPrcnt"			:$("#selDlgInvPercntAcc").val(), 
//					"txtFldInvRemarks"			:$("#selDlgInvRemarks").val(), 
//					"invCreatedBy"				:$("#txtFldDlgInvtmntCrtdBy").val(),
//					"invCreatedDate"			:$("#txtFldDlgInvtmntCrtdDate").val(),  
//					"selBasDisburse"			:$("#txtFldDlgBscDsbrseOf").val(),
//					"txtFldDisburseAmt"			:$("#txtFldDlgDsbsAmt").val(),
//					"txtFldDisburseYrs"			:$("#txtFldDlgDsbsYrs").val(),
//				
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "INVEST_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(INV_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(INV_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(30)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(30)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
 }




/* #############################  Property Ownership Save ###################################### */
function instantPropSave($row,$mode){
//	console.log("Save PRoperty ownership details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val(); 
//	 if(!isEmpty($("#txtFldDlgPropOwnCpfDesc").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgCpfPropMktVal").val()) &&
//			   !isEmpty($("#txtFldDlgCpfPropOwnership").val()) ){
//		var saveFor = "PROP"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"PROP_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"txtFldpropMode"	:$mode,
//					"txtFldPropCpfOwnId"	 	:$("#txtFldDlgCpfPropOwnId").val(),
//					"txtFldPropRefId"	 		:$("#txtFldDlgPropRefId").val(), 
//					"txtFldPropCpfOwnDesc"		:$("#txtFldDlgPropOwnCpfDesc").val(),
//					"txtFldPropCpfMktVal"		:$("#txtFldDlgCpfPropMktVal").val(),  
//					"txtFldPropCpfOwnership"	:$("#txtFldDlgCpfPropOwnership").val(), 
//					"txtFldPropCpfApprecrate"	:$("#txtFldDlgCpfPropApprecrate").val(),
//					"txtFldPropCpfMortageos"	:$("#txtFldDlgCpfPropMortageos").val(), 
//					"txtFldPropCpfOsloanPerd"  	:$("#txtFldDlgCpfPropOsloanPerd").val(), 
//					"txtFldPropCpfObj"			:$("#txtFldDlgCpfPropObj").val(),
//					"txtFldPropCurAnlRetInc"	:$("#txtFldDlgPropCurAnlRetInc").val(), 
//					"txtFldPropRentPerd"		:$("#txtFldDlgCpfPropRentPerd").val(),  
//					"txtFldPropCpfLoanBySlfCpf" :$("#txtFldDlgPropLoanBySlfCpf").val(),  
//					"txtFldPropCpfLoanBySlfCash":$("#txtFldDlgPropLoanBySlfCash").val(), 
//					"txtFldPropCpfLoanBySpsCpf"	:$("#txtFldDlgPropLoanBySpsCpf").val(), 
//					"txtFldPropCpfLoanBySpsCash":$("#txtFldDlgPropLoanBySpsCash").val(),
//					"txtFldPropCpfSold"			:$("#txtFldDlgCpfPropSold").val(),  
//					"txtFldPropRentOnRetire"	:$("#txtFldDlgPropRentOnRetire").val(), 
//					"txtFldPropCurRetInc"		:$("#txtFldDlgPropCurRetInc").val(), 
//					"txtFldPropYrsToRent"		:$("#txtFldDlgPropYrsToRent").val(),
//					"txtFldPropFvOnRent"		:$("#txtFldDlgPropFVOnRent").val(),   
//					"txtFldPropCpfCrtdBy"		:$("#txtFldDlgCpfPropCrtdBy").val(),
//					"txtFldPropCpfCrtdDate"		:$("#txtFldDlgCpfPropCrtdDate").val(), 
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "PROP_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(PROP_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(PROP_INS_DEL);
//											 if(fnaPropOwnTblByCPF.rows().count() > 0){
//												 $('#fnaPropOwnTblByCPF tbody').find('input[type=checkbox]').each(function(){
//														if($(this).is(":checked") || $(this).closest("tr").hasClass("selected")){
//															 fnaPropOwnTblByCPF.row($(this).closest("tr")).remove().draw();
//														}
//												 });
//												
//											 }
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(17)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(17)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
 }


/* #############################  Life Insurance Save ###################################### */
 

function instantLifeInsDetails(){
//	console.log("Save Life insurance  details...")
//	instantSaveClientDetails();//instant save/update client details 
//	 var flgMgr=false;
//	 var fnaId=$("#fnaId").val(); 
//	 
//	var totsa =$("#retTotalSa").val(); 
//	var totprem =$("#retTotalPrem").val(); 
//	
//	 	var saveFor = "NEW_LIFEINSURANCE";  
//		var parameter = "DBCALLFOR=NEW_LIFE_INSTANT_SAVE&txtFldSaveFor=" + saveFor;
//		parameter+="&retTotalSa="+totsa+"&retTotalPrem="+totprem;
//	 	
//		
//		
//		if(!isEmpty($("#lipOwner").val())){
//			$(".formHiddenIds").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//				parameter+="&"+id+"="+val;
////				flgMgr=true;
//	     });
//			 $("#lifeInsdetstab").find("input,select,checkbox").each(function(){
//				var id=$(this).attr("id");
//				var val=$("#"+id).val(); 
//					parameter+="&"+id+"="+val;
//					flgMgr=true;
//			});
// 
////			 $("#li_RetirementPlg_tab").find("input,select,checkbox").each(function(){
////					var id=$(this).attr("id");
////					var val=$("#"+id).val(); 
////						parameter+="&"+id+"="+val;
////						flgMgr=true;
////				});
//			 
//			 
//		}
//			 
//			 
//		if(flgMgr){
//		$.ajax({
//			url		:	InstantProServlet,
//			async	:	false,
//			data	:	parameter,
//			success	: 	function(result){ 
//				var jsnRslt =JSON.parse(result); 
//				$.each(jsnRslt,function(i,obj){ 
//					$.each(obj,function(i,val){  
//						 if(i == "LIFE_DETS"){    
//							 $.each(val, function(contkey, contvalue) {  
//								 var clientId = contvalue["fnaId"];
//								 var lifeId = contvalue["lipId"];
//								 //console.log("New life Saved successfully"+clientId+"lifeId=>"+lifeId);
//								 $("#fnaId").val(clientId);
//								 $("#lipId").val(lifeId);
//								 $("#lipRefId").val(contvalue["lipRefId"]); 
//								 $("#lipCreatedBy").val(contvalue["lipCreatedBy"]);
//								 $("#lipCreatedDate").val(ResultNewDate); 
//							 });
//						 } 
//						  
//						return;  
//					}); 
//				});  
//			}
//		});  
//		
//		
//		
//	}
//		
}
/* #############################  FPMS Policy plan Instant Save ###################################### */
function planPolicyFPMS(type){
//	if(type == "B"){
//	var baslen = liPlanDetailstbl.rows().count();
//	if(baslen>0){
//	 $("#liPlanDetailstbl tbody tr").each(function(){
//		 var $row = $(this);
//		 if($row.find("td:eq(0)").find('input:eq(0)').val() == "I"){ 
//			 var findMax=[]; 
//				 var rowRef = $row.find("td:eq(0)").find('input:eq(3)').val();
//				 if(!isEmpty(rowRef)){
//				  var splitId=rowRef.split("_");
//				  findMax.push(Number(splitId[1])); 
//				 } 
//			 
//			 if(findMax.length > 0){
//				 $planRefID=Math.max.apply(Math,findMax)+1;
//			 }else{
//				 $planRefID=1;
//			 } 
//			 $row.find("td:eq(0)").find('input:eq(3)').addClass("planrefid").val("B_"+$planRefID); 
//			 liplandlgval($row);//instant save added line 
//			 instantlfBasPlanSave($row,INS_MODE); 
//		 } 
//	 }); 
//	}
//	}else if(type == "R"){
//	
//	var ridlen = liRaiderDetailstbl.rows().count();
//	if(ridlen>0){
//	 $("#liRaiderDetailstbl tbody tr").each(function(){
//		 var $row = $(this);
//		 if($row.find("td:eq(0)").find('input:eq(0)').val() == "I"){
//			
//			 var findMax=[];
//			  
//			 var rowRef = $row.find("td:eq(0)").find('input:eq(3)').val();
//			 if(!isEmpty(rowRef)){
//			  var splitId=rowRef.split("_");
//			  findMax.push(Number(splitId[1])); 
//			 }
//		    
//		 
//		 if(findMax.length > 0){
//			 $planRefID=Math.max.apply(Math,findMax)+1;
//		 }else{
//			 $planRefID=1;
//		 } 
//		 $row.find("td:eq(0)").find('input:eq(3)').addClass("planrefid").val("R_"+$planRefID);
//		 liRdrplandlgval($row);
//		 instantlfRidPlanSave($row,INS_MODE);	
//		 } 
//	 }); 
//	}
//	}
}
/* #############################  Basic plan Save ###################################### */
function instantlfBasPlanSave($row,$mode){
	console.log("Save Basic planning details...")
//	instantLifeInsDetails();//insert/update life details
//	 
//	 var fnaId=$("#fnaId").val(); 
//	 var lipId=$("#lipId").val();
//	 
//	 if(!isEmpty($("#txtFldDlgliplnName").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgliplntype").val()) &&
//			   !isEmpty($("#txtFldDlgliplnPremTerm").val()) ){
//		  
//		 
//		var saveFor = "BASPLAN"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"BASPLAN_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFldplnDetMode"		:$mode,
//					"txtFldliplnId"	 		:$("#txtFldDlgliplnId").val(),
//					"txtFldBasicRefId"	 	:$("#hDlgPlanRefId").val(), 
//					"txtFldPlnRefId"	 	:$("#txtFldDlgliplnRefId").val(), 
//					"txtFldliplnName"		:$("#txtFldDlgliplnName").val(),
//					"selliplntype"			:$("#selDlgliplntype").val(),  
//					"txtFldliplnPremTerm"	:$("#txtFldDlgliplnPremTerm").val(), 
//					"txtFldliplnSA"			:$("#txtFldDlgliplnSA").val(),
//					"txtFldliplnPremAmt"	:$("#txtFldDlgliplnPremAmt").val(), 
//					"selliplnPayMode"  		:$("#selDlgliplnPayMode").val(), 
//					"selliplnPayMtd"		:$("#selDlgliplnPayMtd").val(),
//					"txtFldliplnCoverages"	:$("#hidDlgCoveragetype").val(), 
//					"txtFldPlanIncepDate"	:$("#txtFldDlgPlanIncDate").val(),  
//					"txtFldPlanExpDate" 	:$("#txtFldDlgPlanExpDate").val(),  
//					"txtFldliplnRemarks"	:$("#txtFldDlgliplnRemarks").val(), 
//					"txtFldliplnCrtdBy"		:$("#txtFldDlgliplnCrtdBy").val(), 
//					"txtFldliplnCrtdDate"	:$("#txtFldDlgliplnCrtdDate").val(), 
//					"bplfretYrstoret"		:$("#lfretYrstoret").val(), 
//					"bpretSelfretage"		:$("#retSelfretage").val(),
//					"bpretSpouseretage"		:$("#retSpouseretage").val(),
//					"bpretMultionret"		:$("#retMultionret").val(), 
//					"bpretCashvalonret"		:$("#retCashvalonret").val(),
//					"bpretIntrateused"		:$("#retIntrateused").val(),
//					"bpretPrcnttoused"		:$("#retPrcnttoused").val(),
//					"bpcashvalRetAge"		:$("#cashvalRetAge").val(),
//					"bpcashvalRefId"		:$("#lipRetRefId").val()
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "BASPLAN_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(BASIC_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(BASIC_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(12)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(12)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					
//					
//					
//					
//					 hideLoader(); 
//					
//				}
//			}); 
//
//			planPolicyFPMS("B"); 
//			planPolicyFPMS("R"); 
//	 }
}


/* #############################  Raider plan Save ###################################### */
function instantlfRidPlanSave($row,$mode){
	console.log("Save rider plans details...")
//	instantLifeInsDetails();//insert/update life details
//	
//	 var fnaId=$("#fnaId").val();
//	 var lipId=$("#lipId").val();
//	 if(!isEmpty($("#txtFldDlgliplnName").val()) && //to mandatories are filled are not
//			 !isEmpty($("#selDlgliRdrplntype").val()) &&
//			   !isEmpty($("#txtFldDlgliplnPremTerm").val()) ){
//		var saveFor = "RIDPLAN"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"RIDPLAN_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFldplnRaidDetMode"		:$mode,
//					"txtFldliplnRaidId"	 		:$("#txtFldDlgliplnId").val(),
//					"RaidRefId"	 				:$("#hDlgPlanRefId").val(), 
//					"txtFldPlnRaidRefId"	 	:$("#txtFldDlgliplnRefId").val(), 
//					"txtFldliplnRaidName"		:$("#txtFldDlgliplnName").val(),
//					"selliplnRaidtype"			:$("#selDlgliRdrplntype").val(),  
//					"txtFldliplnRaidPremTerm"	:$("#txtFldDlgliplnPremTerm").val(), 
//					"txtFldliplnRaidSA"			:$("#txtFldDlgliplnSA").val(),
//					"txtFldliplnRaidPremAmt"	:$("#txtFldDlgliplnPremAmt").val(), 
//					"selliplnRaidPayMode"  		:$("#selDlgliplnPayMode").val(), 
//					"selliplnRaidPayMtd"		:$("#selDlgliplnPayMtd").val(),
//					"txtFldliplnRaidCoverages"	:$("#hidDlgCoveragetype").val(),  					
//					"txtFldPlanRaidIncepDate"	:$("#txtFldDlgPlanIncDate").val(),  
//					"txtFldPlanRaidExpDate" 	:$("#txtFldDlgPlanExpDate").val(),  
//					"txtFldliplnRaidRemarks"	:$("#txtFldDlgliplnRemarks").val(), 
//					"txtFldliplnRaidCrtdBy"		:$("#txtFldDlgliplnCrtdBy").val(), 
//					"txtFldliplnRaidCrtdDate"	:$("#txtFldDlgliplnCrtdDate").val(),
//					"rplfretYrstoret"			:$("#lfretYrstoret").val(), 
//					"rpretSelfretage"			:$("#retSelfretage").val(),
//					"rpretSpouseretage"			:$("#retSpouseretage").val(),
//					"rpretMultionret"			:$("#retMultionret").val(), 
//					"rpretCashvalonret"			:$("#retCashvalonret").val(),
//					"rpretIntrateused"			:$("#retIntrateused").val(),
//					"rpretPrcnttoused"			:$("#retPrcnttoused").val(),
//					"rpcashvalRetAge"			:$("#cashvalRetAge").val(),
//					"rpcashvalRefId"			:$("#lipRetRefId").val()
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "RIDPLAN_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(RIDER_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(RIDER_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(12)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(12)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//			
//	 }
		
}

/* #############################  Death Benefit Save ###################################### */
function instantDeathBfSave($row,$mode){
//	console.log("Save death benefit details...")
//	instantLifeInsDetails();//insert/update life details
//	 var fnaId=$("#fnaId").val();
//	 var lipId=$("#lipId").val();
//	 if(!isEmpty($("#txtFldDlgDfTermOfCov").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgDfDeathBenefit").val()) ){
//		var saveFor = "DEATHBF"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"DEATHBF_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFlddthbfMode"	:$mode,
//					"txtFldDfId"	 		:$("#txtFldDlgDfId").val(),
//					"txtFldliDfPlnName"	 	:$("#txtFldDlgliDfPlnName").val(), 
//					"txtFldDfIncepDate"		:$("#txtFldDlgDfIncepDate").val(),
//					"txtFldDfExpiryDate"	:$("#txtFldDlgDfExpiryDate").val(),  
//					"txtFldDfTermOfCov"		:$("#txtFldDlgDfTermOfCov").val(), 
//					"txtFldDfDeathBenefit"	:$("#txtFldDlgDfDeathBenefit").val(),
//					"txtFldDfCrtdBy"		:$("#txtFldDlgDfCrtdBy").val(), 
//					"txtFldDfCrtdDate"  	:$("#txtFldDlgDfCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "DEATHBF_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(DFBEN_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(DFBEN_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(6)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(6)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
}

/* #############################  Disability Save ###################################### */
function instantlfDisableSave($row,$mode){
	console.log("Save disable details...")
//	instantLifeInsDetails();//insert/update life details
//	 var fnaId=$("#fnaId").val();
//	 var lipId=$("#lipId").val();
//	 if(!isEmpty($("#selDlgliDsbltyTypes").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgliDsbltyYrBegins").val()) &&
//			   !isEmpty($("#txtFldDlgliDsbltyYrCeases").val()) ){
//		var saveFor = "DISABLITY"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"DISABLITY_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFlddsbltyMode"	:$mode,
//					"txtFldliDsbltyId"	 		:$("#txtFldDlgliDsbltyId").val(),
//					"txtFldliDsbltyPlanname"	:$("#txtFldDlgDsPlanName").val(), 
//					"txtFldliDsbltyIncDate"		:$("#txtFldDlgDsIncepDate").val(),
//					"txtFldliDsbltyExpDate"		:$("#txtFldDlgDsExpryDate").val(),  
//					"selliDsbltyTypes"			:$("#selDlgliDsbltyTypes").val(), 
//					"txtFldliDsbltyYrBegins"	:$("#txtFldDlgliDsbltyYrBegins").val(),
//					"txtFldliDsbltyYrCeases"	:$("#txtFldDlgliDsbltyYrCeases").val(), 
//					"txtFldliDsbltyBenf"  		:$("#txtFldDlgliDsbltyBenf").val(), 
//					"txtFldliDsbltyIncBenf"		:$("#txtFldDlgliDsbltyIncBenf").val(),
//					"txtFldliDsbltyCrtdBy"		:$("#txtFldDlgliDsbltyCrtdBy").val(), 
//					"txtFldliDsbltyCrtdDate"	:$("#txtFldDlgliDsbltyCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "DISABLITY_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(DSBLE_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(DSBLE_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(9)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(9)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
}

/* #############################  Critical Illness Save ###################################### */
function instantlfCritlsSave($row,$mode){
	console.log("Save critical illness details...")
//	instantLifeInsDetails();//insert/update life details
//	 var fnaId=$("#fnaId").val();
//	 var lipId=$("#lipId").val();
//	 if(!isEmpty($("#selDlgCrtlnsLvlDD").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgCrtlnsBenfAmt").val()) &&
//			   !isEmpty($("#txtFldDlgCrtlnsTermofBenf").val()) ){
//		var saveFor = "CRTLS"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"CRTLS_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFldcrtlnsMode"	:$mode,
//					"txtFldCrtlnsId"	 		:$("#txtFldDlgCrtlnsId").val(),
//					"txtFldCrtlnsPlanName"	 	:$("#txtFldDlgCrtlPlanName").val(), 
//					"txtFldCrtlnsIncDate"		:$("#txtFldDlgCrtlsIncepDate").val(),
//					"txtFldCrtlnsExpDate"		:$("#txtFldDlgCrtlnsExpDate").val(),  
//					"selCrtlnsLvlDD"			:$("#selDlgCrtlnsLvlDD").val(), 
//					"txtFldCrtlnsBenfAmt"		:$("#txtFldDlgCrtlnsBenfAmt").val(),
//					"txtFldCrtlnsTermofBenf"	:$("#txtFldDlgCrtlnsTermofBenf").val(), 
//					"txtFldCrtlnsRemarks"  		:$("#txtFldDlgCrtlnsRemarks").val(), 
//					"txtFldCrtlnsCrtdBy"		:$("#txtFldDlgCrtlnsCrtdBy").val(),
//					"txtFldCrtlnsCrtdDate"		:$("#txtFldDlgCrtlnsCrtdDate").val(),   
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "CRTLS_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(CRTLSS_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(CRTLSS_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(8)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(8)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
}

/* #############################  Hospitality Save ###################################### */
function instantlfHospSave($row,$mode){
	console.log("Save hospital details...")
//	instantLifeInsDetails();//insert/update life details
//	 var fnaId=$("#fnaId").val();
//	 var lipId=$("#lipId").val();
//	 if(!isEmpty($("#txtFldDlgHospAnnPrem").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgHospClsOfBenf").val()) &&
//			   !isEmpty($("#txtFldDlgHospTermOfCov").val()) ){
//		var saveFor = "HOSP"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"HOSP_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFldhospMode"	:$mode,
//					"txtFldHospId"	 			:$("#txtFldDlgHospId").val(),
//					"txtFldHospPlanName"	 	:$("#txtFldDlgHospPlanName").val(), 
//					"txtFldHospIncepDate"		:$("#txtFldDlgHospIncepDate").val(),
//					"txtFldHospExpDate"			:$("#txtFldDlgHospExpDate").val(),  
//					"txtFldHospAnnPrem"			:$("#txtFldDlgHospAnnPrem").val(), 
//					"txtFldHospClsOfBenf"		:$("#txtFldDlgHospClsOfBenf").val(),
//					"txtFldHospTermOfCov"		:$("#txtFldDlgHospTermOfCov").val(), 
//					"txtFldHospDedctble"  		:$("#txtFldDlgHospDedctble").val(), 
//					"txtFldHospCoIns"			:$("#txtFldDlgHospCoIns").val(),
//					"txtFldHospCrtdBy"			:$("#txtFldDlgHospCrtdBy").val(), 
//					"txtFldHospCrtdDate"		:$("#txtFldDlgHospCrtdDate").val(),   
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "HOSP_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(HOSP_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(HOSP_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(9)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(9)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
}

/* #############################  Retirement Planning Save ###################################### */
function instantlfRetPlgSave($row,$mode){
	console.log("Save life -Ret planning details...")
//	instantLifeInsDetails();//insert/update life details
//	 var fnaId=$("#fnaId").val();
//	 var lipId=$("#lipId").val();
//	 if(!isEmpty($("#txtFldDlgRetPlgCommOfAge").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgRetPlgEndOfAge").val()) &&
//			   !isEmpty($("#txtFldDlgRetPlgEscaltAge").val()) ){
//		var saveFor = "LIFERET"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"LIFERET_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFldretplgMode"	:$mode,
//					"txtFldMvRetId"	 			:$("#txtFldDlgRetPlgId").val(),
//					"txtFldMvRetRefId"	 		:$("#txtFldDlgRetPlgRefId").val(), 
//					"txtFldMvretPlanName"	 	:$("#txtFldDlgRetPlgPlanName").val(), 
//					"txtFldMvretIncDate"		:$("#txtFldDlgRetPlgIncepDate").val(),
//					"txtFldMvretExpDate"		:$("#txtFldDlgRetPlgExpDate").val(),  
//					"txtFldCommenceAge"			:$("#txtFldDlgRetPlgCommOfAge").val(), 
//					"txtFldEndAge"				:$("#txtFldDlgRetPlgEndOfAge").val(),
//					"txtFldEsclationRate"		:$("#txtFldDlgRetPlgEscaltAge").val(), 
//					"txtFldGtdIncome"  			:$("#txtFldDlgRetPlgGTDIncome").val(), 
//					"txtFldNonGtdIncome"		:$("#txtFldDlgRetPlgNonGTDIncome").val(),
//					"txtFldTotalIncome"			:$("#txtFldDlgRetPlgTotalIncome").val(), 
//					"txtFldAssumedBankInt"		:$("#txtFldDlgRetPlgAssBankIntRate").val(),  
//					"txtFldMvRetCrtdBy" 		:$("#txtFldDlgRetPlgCrtdBy").val(),  
//					"txtFldMvRetCrtdDate"		:$("#txtFldDlgRetPlgCrtdDate").val(), 
//					"txtFldMvRemarks"			:$("#selDlgRetPlgRemarks").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "LIFERET_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(LFRET_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(LFRET_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(11)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(11)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }
}

/* #############################  Education Save ###################################### */
function instantEduPlgSave($row,$mode){
//	console.log("Save education planning details...")
//	instantLifeInsDetails();//insert/update life details
//	 var fnaId=$("#fnaId").val();
//	 var lipId=$("#lipId").val(); 
//	 if(!isEmpty($("#selDlgEdPlgChldName").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgEdPlgTerEdcAge").val()) &&
//			   !isEmpty($("#txtFldDlgEdPlgBankIntRate").val()) ){
//	 $("#liEduPayoutstbl tbody").find("tr").each(function(c,r){
//		 var $lastrow=$(this);
//			var begAge=$lastrow.find("td:eq(2)").find("input:eq(0)").val();
//			var totpaid=$lastrow.find("td:eq(3)").find("input:eq(0)").val();
//			var tereduage=$lastrow.find("td:eq(4)").find("input:eq(0)").val();
//			
//	  
//		var saveFor = "EDUPLG"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"EDUPLG_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFldEduPlgMode"	:$mode,
//					"txtFldEduPlgId"	 	:$("#txtFldDlgEduPlgId").val(),
//					"txtFldRefId"	 		:$("#txtFldDlgRefId").val(), 
//					"selEdPlgChldName"		:$("#selDlgEdPlgChldName").val(),
//					"txtFldChldPlanName"	:$("#txtFldDlgEduPlgPlanName").val(),  
//					"txtFldChldIncDate"		:$("#txtFldDlgEduPlgIncepDate").val(), 
//					"txtFldChldExpDate"		:$("#txtFldDlgEduPlgExpDate").val(),
//					"txtFldEdPlgTerEdcAge"	:$("#txtFldDlgEdPlgTerEdcAge").val(), 
//					"txtFldEdPlgBankIntRate":$("#txtFldDlgEdPlgBankIntRate").val(), 
//					"txtFldEdPlgInfRate"	:$("#txtFldDlgEdPlgInfRate").val(),
//					"txtFldEduPlgChlBegAge"	:begAge, 
//					"txtFldEduPlgTotProPaid":totpaid,  
//					"txtFldEduPlgChldTerAge":tereduage, 
//					"txtFldEduPlgCrtdBy"	:$("#txtFldDlgEduPlgCrtdBy").val(), 
//					"txtFldEduPlgCrtdDate"	:$("#txtFldDlgEduPlgCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "EDUPLG_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(EDUPLG_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(EDUPLG_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(11)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(11)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 });
//	 }
}

/* #############################  Nominee Save ###################################### */
function instantlfNomineSave($row,$mode){
//	console.log("Save nominee details...")
//	instantLifeInsDetails();//insert/update life details
//	 var fnaId=$("#fnaId").val(); 
//	 var lipId=$("#lipId").val(); 
//	 if(!isEmpty($("#txtFldDlgNomineeName").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgNomineePercnt").val())  ){
//		var saveFor = "NOMINE"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"NOMINE_INSTANT_SAVE",
//					"txtFldSaveFor"		:saveFor, 
//					"fnaId"				:fnaId,
//					"lipId"				:lipId,
//					"txtFldnomineMode"	:$mode,
//					"txtFldNomineeId"	 		:$("#txtFldDlgNomineeId").val(),
//					"txtFldNomineeName"	 		:$("#txtFldDlgNomineeName").val(), 
//					"txtFldNomineePercnt"		:$("#txtFldDlgNomineePercnt").val(),
//					"txtFldNomineeCrtdBy"		:$("#txtFldDlgNomineeCrtdBy").val(),  
//					"txtFldNomineeCrtdDate"		:$("#txtFldDlgNomineeCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "NOMINE_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(NOM_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(NOM_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(0)').val("Q");
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(3)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(3)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }	 
}




//<!--changes done 19/06/2019 -->
function instantCashSRSSave(){
//	console.log("Save Cash SRS details...")
//	instantSaveClientDetails();//instant save/update client details
//	 var fnaId=$("#fnaId").val();
//	 if(!isEmpty($("#selDlgSRSClassify").val()) && //to mandatories are filled are not
//			 !isEmpty($("#txtFldDlgSRSDesc").val()) &&
//			   !isEmpty($("#txtFldDlgSRSFreq").val()) ){
//		
//		var saveFor = "CASHSRS"; 
//			showLoader();  
//			$.ajax({
//				url:InstantProServlet,
//				async:false,
//				data:{
//					"DBCALLFOR":"CASHSRS_INSTANT_SAVE",
//					"txtFldSaveFor"			:saveFor, 
//					"fnaId"					:fnaId,
//					"txtFldcshSRSMode"		:$mode,
//					"txtFldSRSId"			:$("#txtFldDlgSRSId").val(),
//					"txtFldSRSRefId"		:$("#txtFldDlgSRSRefId").val(), 
//					"selSrsClassify"		:$("#selDlgSRSClassify").val(),
//					"txtFldSrsDesc"			:$("#txtFldDlgSRSDesc").val(),  
//					"selSrsFreq"			:$("#txtFldDlgSRSFreq").val(), 
//					"txtFldSrsAmount"		:$("#txtFldDlgSRSAmount").val(),
//					"txtFldSrsPerdFrom"		:$("#txtFldDlgSRSPerFrom").val(), 
//					"txtFldSrsPerdTo"		:$("#txtFldDlgSRSPerTo").val(), 
//					"txtFldSrsAgestart"		:$("#txtFldDlgSRSAge").val(),
//					"txtFldSrsPayoutPerd"	:$("#txtFldDlgSRSPayoutPerd").val(), 
//					"txtFldSrsCrtdBy"		:$("#txtFldDlgSRSCrtdBy").val(), 
//					"txtFldSrsCrtdDate"		:$("#txtFldDlgSRSCrtdDate").val(),  
//				},
//				success: function(result){ 
//					var jsnRslt=JSON.parse(result); 
//					$.each(jsnRslt,function(i,obj){
//						if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
//							window.location = BASE_URL + SESSION_EXP_JSP; 
//							return;
//						}
//
//						if (obj.SESSION_EXPIRY=="DB_ERROR") {
//							window.location = BASE_URL + DB_EXP_JSP; 
//							return;
//						}
//						
//						$.each(obj,function(i,val){  
//							 if(i == "CASHSRS_RECORD"){   
//								 $.each(val, function(contkey, contvalue) { 
//										 if($mode == INS_MODE || $mode == UPD_MODE){
//											 applyToastrAlert(CASHSRS_INS_SAVE);
//										 }
//										 if($mode == DEL_MODE){
//											 applyToastrAlert(CASHSRS_INS_DEL);
//										 }
//										 if($mode == INS_MODE){
//											 $row.find("td:eq(0)").find('input:eq(1)').val(contvalue["ID"]); 
//											 $row.find("td:eq(9)").find('input:eq(1)').val(contvalue["CRTDBY"]);
//											 $row.find("td:eq(9)").find('input:eq(2)').val(ResultNewDate); 
//										 } 
//									}); 
//							 }
//						  return;	  
//						});
//						
//						
//					});
//					 hideLoader(); 
//					
//				}
//			}); 
//	 }	 
}


