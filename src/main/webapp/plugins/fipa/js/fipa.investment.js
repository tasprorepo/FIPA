

 /**
 * Investment
 * 
 */
  

$("a.addInflwOutflw").on("click",function(){ 
	
	calcTotalInvestAmts();
	if($("#InvestARow").hasClass("blinking")){
		$("#InvestARow").removeClass("blinking");
	} 
	$("#investment_li").click();	
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#InvestARow").addClass("blinking");  
	
});

function openBackToCOB(){
	if($("#CobARow").hasClass("blinking")){
		$("#CobARow").removeClass("blinking");
	} 
	$("#cashasstmain_li").click();	 
	$("#cashatbank_li").click();	 
	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#CobARow").addClass("blinking"); 
}
 

/*Add Row Click */
$("#InvestARow").on("click",function(){
	
	$("#invNameofChilddiv").css("display","none");
	$("#invChildYrtoterdiv").css("display","none");   
	$("#txtFldDlgInvDesc").html("");
	$("#txtFldDlgInvDesc").html('<option value="">--SELECT--</option>'); 
			investClearFlds();
			
			$("#txtFldDlgInvtmntId").val(makeid(17));
			$("#txtFldDlgInvtmntRefId").val(newMakeId("INV",15));
			
			childexist();
			$("#Investment_Dialog #txtFldDlgInvFABrokerName").val(DEFAULT_FA_AVALLIS);  
			activeInvAmt($("#txtFldDlgAnyRegInvPlan"),$("#selDlgInvFreq"),$("#txtFldDlgAnyRegInvPlanAmt"),$("#txtFldDlgNoOfYrsRegInv"));//,$("#txtFldDlgTotNoOfYrsStayInv")
			enableDividends($("#selDlgDivdReInv"),$("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDividendAmt"),false);
			disbursementOpts($("#txtFldDlgBscDsbrseOf"),$("#txtFldDlgDsbsAmt"),$("#txtFldDlgDsbsYrs"));
			enablePAR($("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgInvCurBid"),$("#txtFldDlgInvNoOfUnits"),$("#txtFldDlgInvNAV"),$("#genNavicon"),true);
			
			$("#selDlgInvObjInvst").val("No plans");//By Default - Aug_2019
			if(!checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"),$("#txtFldDlgInvSource")))
				return;
			
			
//			$("#Investment_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
		
			showFIPAModel('Investment_Dialog','Investment Details');
			
//			$("#Investment_Dialog").find("input[id=txtFldDlgInvtmntMode]").val("I");//instant save added line
			
			$('#Investment_Dialog').on('shown.bs.modal', function () {
				$("#Investment_Dialog").find("select[id=selDlgInvOwnership]").focus();
				$("#Investment_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validateinvestDetails())return; 
						if(!validateRegInvPlan())return; 
					   	investRdlyflds(INS_MODE); 
					   	addInptInvstRows(null); 
					   	$('#Investment_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function addInptInvstRows(dataset){ 
//	console.log("inv add -->"+new Date());
 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldinvestMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldOwnInvstId"><input type="hidden"  name="txtFldOwnInvRefId">';
 
var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radinvestSelect"/><label>&nbsp;</label></div>'; 

/*Investment details*/

var cell2 = '<select  name="selInvOwner" class="form-control editable" onmouseover="fipaTooltip(this);" ></select>';

var cell3 = '<select name="selInvType" class="form-control editable" onmouseover="fipaTooltip(this);" ></select>'; 

var cell4 = '<input type="text" name="txtFldInvFa" class="form-control editable" onmouseover="fipaTooltip(this);" maxlength="60"/>';

var cell5 = '<select name="txtFldInvAnnlPortfolio" class="form-control editable"onmouseover="fipaTooltip(this);" ></select>'; 

var cell6 = '<select name="txtFldInvInstname" class="form-control editable"onmouseover="fipaTooltip(this);" ></select>'; 

var cell7 = '<select name="txtFldInvDesc" class="form-control editable" onmouseover="fipaTooltip(this);"></select>';

var cell8 = '<input type="text" name="txtFldInvEstrate" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell9 = '<input type="text" name="txtFldInvAmount" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell10 = '<select  name="selInvPaymethod" class="form-control editable" onmouseover="fipaTooltip(this);" ></select>';

/*NAV details*/

var cell11 = '<input type="text" name="txtFldInvDate" class="form-control editable"   maxlength="10" onmouseover="fipaTooltip(this);" />';

var cell12 = '<div class="inputnoborder" style="border:none important!;"><input type="text" name="txtFldInvCurrbid" class="form-control editable"   onmouseover="fipaTooltip(this);" /></div>'+
'<div class="inputnoborder"><a class="btn btn-default genNavicon" id="tblgenNavicon" style="margin-left: 3px;" onmouseover="dhtmltooltip(this,&quot;Fetch NAV&quot;);"/></a></div>';


var cell13 = '<input type="text" name="txtFldInvUnitsAlloc" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell14 = '<input type="text" name="txtFldinvCurrNAV" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell15 = '<input type="text" name="txtFldInvRemarks" class="form-control editable"   onmouseover="fipaTooltip(this);" maxlength="300"/>';

/*Dividend details*/

var cell16 = '<select  name="selInvDividendReInv" class="form-control editable"   onmouseover="fipaTooltip(this);" >';

var cell17 = '<select  name="selInvDividendBasdOn" class="form-control editable" disabled="true" onmouseover="fipaTooltip(this);" >';

var cell18 = '<input type="text" name="txtFldInvDivPARAmt" class="form-control editable"  disabled="true" maxlength="10" onmouseover="fipaTooltip(this);" />';

var cell19 = '<input type="text" name="txtFldInvAnnlDivid" class="form-control editable"  disabled="true"  onmouseover="fipaTooltip(this);" />';

var cell20 = '<select  name="selInvDividPaymode" class="form-control editable" disabled="true" onmouseover="fipaTooltip(this);" >';

var cell21 = '<input type="text" name="txtFldDividendAmt" class="form-control editable"  disabled="true" maxlength="10" onmouseover="fipaTooltip(this);" />';

/*Regular investment plan details*/

var cell22 = '<select  name="txtFldInvAnyRegPlan" class="form-control editable" onmouseover="fipaTooltip(this);" ></select>';

var cell23 = '<select  name="selInvRegPlanFreq" class="form-control editable" disabled="true" onmouseover="fipaTooltip(this);" ></select>';

var cell24 = '<input type="text" name="txtInvRegPlanAmout" class="form-control editable"  disabled="true"  onmouseover="fipaTooltip(this);" />';

var cell25 = '<input type="text" name="txtFldInvRegPlanFromYrs" disabled="true" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

/*Inv Objective details*/

var cell26 = '<select name="selInvObjective" class="form-control editable" onmouseover="fipaTooltip(this);" ></select>';

var cell27 = '<input type="text" name="selInvYrsToRet" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell28 = '<select  name="txtFldInvChildname" class="form-control editable"   onmouseover="fipaTooltip(this);" ></select>';

var cell29 = '<input type="text" name="txtFldInvAccPrcnt" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell30 = '<input type="text" name="txtFldDivPeriod" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

/*Disbursement plan details*/

var cell31 = '<select name="selBasDisburse" class="form-control editable" onmouseover="fipaTooltip(this);" ></select>';

var cell32 = '<input type="text" name="txtFldDisburseAmt" class="form-control editable"   onmouseover="fipaTooltip(this);" />';
  
var cell33 = '<input type="text" name="txtFldDisburseYrs" class="form-control editable"   onmouseover="fipaTooltip(this);" />'+
'<input type="hidden" name="invCreatedBy"/><input type="hidden" name="invCreatedDate"/>';
 
fnaInvestmentTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17,cell18,cell19,cell20,cell21,cell22,cell23,cell24,cell25,cell26,cell27,cell28,cell29,cell30,cell31,cell32,cell33] ).draw( false );

var $lastRow = $("#fnaInvestmentTbl tbody tr:last");	

var rowCount = $('#fnaInvestmentTbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#fnaInvestmentTbl tbody tr').length : rowCount;

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radinvest"+$lastRow.index())
.parent().find('label').attr('for',"radinvest"+$lastRow.index());

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgInvtmntId").val());
$lastRow.find("td:eq(0)").find('input:eq(2)').val($("#txtFldDlgInvtmntRefId").val());

/*****Investment ownership*****/

var ownership = $("#selDlgInvOwnership > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(ownership);
$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#selDlgInvOwnership").val());
$lastRow.find("td:eq(2)").find('select:eq(0)').on("change",function(){
	
	
	calcTotalInvestAmts();
	calInvSumryRow();  
	newRowInvestCpfTbl($lastRow);
	
	if(!checkOwnerForPayment( $(this),$lastRow.find("td:eq(9)").find('select:eq(0)')))return;
	 
	syncInvestTblRow($lastRow);
		
	return;
});
/****Types of investment******/
var typeofInvst = $("#selDlgInvTypesOfInvst > option").clone();
$lastRow.find("td:eq(3)").find('select:eq(0)').append(typeofInvst);
$lastRow.find("td:eq(3)").find('select:eq(0)').val($("#selDlgInvTypesOfInvst").val()); 
$lastRow.find("td:eq(3)").find('select:eq(0)').on("change",function(){
	estimateInvRate($lastRow.find("td:eq(3)").find('select:eq(0)'),$lastRow.find("td:eq(8)").find('input:eq(0)'));
	calInvSumryRow();   
		return;
});
/**********/
$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgInvFABrokerName").val());
/*****Analysis by portfolio*****/

var analyportflo = $("#txtFldDlgAnalsByPortfolio > option").clone();
$lastRow.find("td:eq(5)").find('select:eq(0)').append(analyportflo);
$lastRow.find("td:eq(5)").find('select:eq(0)').val($("#txtFldDlgAnalsByPortfolio").val());
$lastRow.find("td:eq(5)").find('select:eq(0)').on("change",function(){
	addAvallisFin($(this),$lastRow.find("td:eq(6)").find('select:eq(0)'));
	invcloneportflio($lastRow.find("td:eq(6)").find('select:eq(0)'),$lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(7)").find('select:eq(0)'));  
	
	return;
});
/*****Institutions*****/
var tblinvclearnavprev,tblinvclearnavid;
var invstins =  $("#txtFldDlgInvInstitution > option").clone();
$lastRow.find("td:eq(6)").find('select:eq(0)').append(invstins);
$lastRow.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgInvInstitution").val()); 
$lastRow.find("td:eq(6)").find('select:eq(0)').on("change",function(){
	removeTooltip($(this));
	invcloneportflio($lastRow.find("td:eq(6)").find('select:eq(0)'),$lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(7)").find('select:eq(0)'));  
	syncInvestTblRow($lastRow);
	return;
}); 
$lastRow.find("td:eq(6)").find('select:eq(0)').on("focus",function(){ 
	tblinvclearnavid=$(this).attr("id");
	tblinvclearnavprev=$(this).val();
	
}).change(function(){
	clearCurrentBidPriceAlert($(this),tblinvclearnavid,tblinvclearnavprev,$lastRow.find("td:eq(12)").find('input:eq(0)'),$lastRow);
	calInvSumryRow(); 
});


/*****Description of investment*****/

var sell =  $("#txtFldDlgInvDesc > option").clone();
$lastRow.find("td:eq(7)").find('select:eq(0)').append(sell);
invcloneportflio($lastRow.find("td:eq(6)").find('select:eq(0)'),$lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(7)").find('select:eq(0)'));  
$lastRow.find("td:eq(7)").find('select:eq(0)').val($("#txtFldDlgInvDesc").val()); 
$lastRow.find("td:eq(7)").find('select:eq(0)').on("change",function(){ 
	removeTooltip($(this));
	syncInvestTblRow($lastRow);

    return;
});
$lastRow.find("td:eq(7)").find('select:eq(0)').on("focus",function(){ 
	tblinvclearnavid=$(this).attr("id");
	tblinvclearnavprev=$(this).val();
	
}).change(function(){
	calcTotalInvestAmts();
	clearCurrentBidPriceAlert($(this),tblinvclearnavid,tblinvclearnavprev,$lastRow.find("td:eq(12)").find('input:eq(0)'),$lastRow);
	
});

/*****Estimated rate*****/

$lastRow.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgInvEstInvRate").val());
$lastRow.find("td:eq(8)").find('input:eq(0)').addClass("applyEvntpCent3");
$lastRow.find("td:eq(8)").find('input:eq(0)').on("change",function(){
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
		return;
});
/*****Amount*****/

$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgInvAmt").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
	calcTotalInvestAmts(); 
	newRowInvestCpfTbl($lastRow);
	newRowInvestSRSTbl($lastRow);
	
	syncInvestTblRow($lastRow);
	
		return;
});

/****Payment mode******/

var invstsource =  $("#txtFldDlgInvSource > option").clone();
$lastRow.find("td:eq(10)").find('select:eq(0)').append(invstsource); 
$lastRow.find("td:eq(10)").find('select:eq(0)').val($("#txtFldDlgInvSource").val());
$lastRow.find("td:eq(10)").find('select:eq(0)').on("change",function(){

	if(!checkInvObjDets($(this),$lastRow.find("td:eq(28)").find('select:eq(0)'),$lastRow.find("td:eq(27)").find('input:eq(0)'),$lastRow.find("td:eq(29)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('select:eq(0)')))
		return;

	calcTotalInvestAmts();
	if(!checkOwnerForPayment($lastRow.find("td:eq(2)").find('select:eq(0)'), $(this)))return;
	if(!checkPaymentWithObj($lastRow.find("td:eq(10)").find('select:eq(0)'),
			$lastRow.find("td:eq(26)").find('select:eq(0)'),
			$lastRow.find("td:eq(27)").find('input:eq(0)'),
			$lastRow.find("td:eq(28)").find('select:eq(0)'),
			$lastRow.find("td:eq(29)").find('input:eq(0)')
			))return;
	
	calInvSumryRow(); 
	newRowInvestCpfTbl($lastRow);
	newRowInvestSRSTbl($lastRow);
	syncInvestTblRow($lastRow);
	
	return;
});




/*****NAV DETAILS*****/
/*****Date invested******/
$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgInvDateInvst").val()); 
$lastRow.find("td:eq(11)").find('input:eq(0)').datetimepicker(dateOptions).on("change",function(){
	removeTooltip($(this));
	 checkDateFormat($(this));    
			return;
}); 
$lastRow.find("td:eq(11)").find('input:eq(0)').on("focus",function(){ 
	tblinvclearnavid=$(this).attr("id");
	tblinvclearnavprev=$(this).val();
	
}).change(function(){
	clearCurrentBidPriceAlert($(this),tblinvclearnavid,tblinvclearnavprev,$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow);
	calInvSumryRow(); 
});
/*****Current Bid******/
$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgInvCurBid").val());
$lastRow.find("td:eq(12)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(12)").find('input:eq(0)').on("change",function(){
	currentNavcalc($lastRow); 
	calInvSumryRow(); 
	 calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	 calcTotalInvestAmts();
		return;
}); 

$lastRow.find("td:eq(12)").find('a').on("click",function(){ 
	if(!validateInvstNavDetails($lastRow))return; 
	fetchCurentNAV($lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(7)").find('select:eq(0)'),$lastRow.find("td:eq(11)").find('input:eq(0)'),$lastRow.find("td:eq(12)").find('input:eq(0)'));
	currentNavcalc($lastRow);
	 calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	 calcTotalInvestAmts();
	 syncInvestTblRow($lastRow);
	calInvSumryRow(); 
});
/****No of units******/
$lastRow.find("td:eq(13)").find('input:eq(0)').val($("#txtFldDlgInvNoOfUnits").val());
$lastRow.find("td:eq(13)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(13)").find('input:eq(0)').on("change",function(){
	currentNavcalc($lastRow);
	 calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	 calcTotalInvestAmts();
	calInvSumryRow(); 
	syncInvestTblRow($lastRow);
		return;
});
/****Current NAV******/
$lastRow.find("td:eq(14)").find('input:eq(0)').val($("#txtFldDlgInvNAV").val());
$lastRow.find("td:eq(14)").find('input:eq(0)').addClass("applyEvntUsd"); 
$lastRow.find("td:eq(14)").find('input:eq(0)').on("change",function(){   
	calInvSumryRow(); 
	 calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	 calcTotalInvestAmts();
	 syncInvestTblRow($lastRow);
		return;
});

/*****Remarks*****/
$lastRow.find("td:eq(15)").find('input:eq(0)').val($("#selDlgInvRemarks").val());


/*****DIVIDEND DETAILS*****/ 

/*****Div reinvst*****/
var divReinvst =  $("#selDlgDivdReInv > option").clone();
$lastRow.find("td:eq(16)").find('select:eq(0)').append(divReinvst);
$lastRow.find("td:eq(16)").find('select:eq(0)').val($("#selDlgDivdReInv").val());
$lastRow.find("td:eq(16)").find('select:eq(0)').on("change",function(){ 
	enableDividends($lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});

/**** Div Based on******/
var divbasedon =  $("#selDlgDivdBasedOn > option").clone();
$lastRow.find("td:eq(17)").find('select:eq(0)').append(divbasedon);
$lastRow.find("td:eq(17)").find('select:eq(0)').val($("#selDlgDivdBasedOn").val());
$lastRow.find("td:eq(17)").find('select:eq(0)').on("change",function(){
	
	enablePAR($lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(12)").find('input:eq(0)'),$lastRow.find("td:eq(13)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(12)").find('a'));
	enableDividends($lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));

	calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});


/****Par value******/ 
$lastRow.find("td:eq(18)").find('input:eq(0)').val($("#txtFldDlgDividendPAR").val());
$lastRow.find("td:eq(18)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(18)").find('input:eq(0)').on("change",function(){
	
	calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});



/*****Dividend rate*****/
$lastRow.find("td:eq(19)").find('input:eq(0)').val($("#txtFldDlgAnlDivdRate").val());
$lastRow.find("td:eq(19)").find('input:eq(0)').addClass("applyEvntpCent");
$lastRow.find("td:eq(19)").find('input:eq(0)').on("change",function(){  
//	syncInvestTblEditRow($lastRow);  
	
		syncInvestTblRow($lastRow);
		
		calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
		calcTotalInvestAmts();
		return;
}); 

/****Dividend Payment mode******/
var invstpaymode =  $("#selDlgDivdPaymode > option").clone();
$lastRow.find("td:eq(20)").find('select:eq(0)').append(invstpaymode);
$lastRow.find("td:eq(20)").find('select:eq(0)').val($("#selDlgDivdPaymode").val());
$lastRow.find("td:eq(20)").find('select:eq(0)').on("change",function(){
	 calcDividendAmount($lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	 calcTotalInvestAmts();
});


/****div Amt per annum******/ 
$lastRow.find("td:eq(21)").find('input:eq(0)').val($("#selDlgDividendAmt").val());
$lastRow.find("td:eq(21)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(21)").find('input:eq(0)').on("change",function(){ 
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});


/*****REGULAR INVESTMENT PLAN*****/

/*****Regular Inv plan*****/

var invstplan =  $("#txtFldDlgAnyRegInvPlan > option").clone();
$lastRow.find("td:eq(22)").find('select:eq(0)').append(invstplan); 
$lastRow.find("td:eq(22)").find('select:eq(0)').val($("#txtFldDlgAnyRegInvPlan").val());
$lastRow.find("td:eq(22)").find('select:eq(0)').on("change",function(){ 
	activeInvAmt($(this),$lastRow.find("td:eq(23)").find('select:eq(0)'),$lastRow.find("td:eq(24)").find('input:eq(0)'),$lastRow.find("td:eq(25)").find('input:eq(0)'));//,$lastRow.find("td:eq(25)").find('input:eq(0)') 
	syncInvestTblRow($lastRow);
		return;
	
});

/*****Investment Frequency*****/
var invstfreq =  $("#selDlgInvFreq > option").clone();
$lastRow.find("td:eq(23)").find('select:eq(0)').append(invstfreq);
$lastRow.find("td:eq(23)").find('select:eq(0)').val($("#selDlgInvFreq").val());
$lastRow.find("td:eq(23)").find('select:eq(0)').on("change",function(){ 
	calInvSumryRow();    
	 
		return;
});
/****RSA Amount******/
$lastRow.find("td:eq(24)").find('input:eq(0)').val($("#txtFldDlgAnyRegInvPlanAmt").val());
$lastRow.find("td:eq(24)").find('input:eq(0)').prop("disabled",false);
$lastRow.find("td:eq(24)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(24)").find('input:eq(0)').on("change",function(){   
	syncInvestTblRow($lastRow);
		return;
});

/****No of years regular investment******/
$lastRow.find("td:eq(25)").find('input:eq(0)').val($("#txtFldDlgNoOfYrsRegInv").val());
$lastRow.find("td:eq(25)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(25)").find('input:eq(0)').on("change",function(){
	if(!validatenoofyrs($lastRow))return;  
	syncInvestTblRow($lastRow);
		return;
});


/*** INVESTMENT OBJECTIVES*******/
/*** Investment objective*******/
var invstObj =  $("#selDlgInvObjInvst > option").clone();
$lastRow.find("td:eq(26)").find('select:eq(0)').append(invstObj);
$lastRow.find("td:eq(26)").find('select:eq(0)').val($("#selDlgInvObjInvst").val());
$lastRow.find("td:eq(26)").find('select:eq(0)').on("change",function(){ 
	
	 if($(this).val() == "Retirement Planning" || $(this).val() == "CPF-RP" ){
		 mandatoryFldForRetirement($(this),$lastRow,'INVEST');
	 }
	
	 if(!checkPaymentWithObj($lastRow.find("td:eq(10)").find('select:eq(0)'),
				$lastRow.find("td:eq(26)").find('select:eq(0)'),
				$lastRow.find("td:eq(27)").find('input:eq(0)'),
				$lastRow.find("td:eq(28)").find('select:eq(0)'),
				$lastRow.find("td:eq(29)").find('input:eq(0)')
				))return;
		
		if(!checkInvObjDets($(this),$lastRow.find("td:eq(28)").find('select:eq(0)'),$lastRow.find("td:eq(27)").find('input:eq(0)'),$lastRow.find("td:eq(29)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('select:eq(0)')))
			return;

		if($lastRow.find("td:eq(16)").find('select:eq(0)').val() == "N"){
			if($lastRow.find("td:eq(10)").find('select:eq(0)').val() ==  "Cash"){
//				mandatoryFldForCob($(this),$lastRow,'INVEST');
			}
		}
		
		
		syncInvestTblRow($lastRow)
		
	return;
	
});

/*****Year to retirement*****/
$lastRow.find("td:eq(27)").find('input:eq(0)').val($("#selDlgInvYrToRet").val());
$lastRow.find("td:eq(27)").find('input:eq(0)').addClass("applyEvntYrs"); 
$lastRow.find("td:eq(27)").find('input:eq(0)').on("change",function(){   
	syncInvestTblRow($lastRow);
		return;
});
/****Name of child******/
var Nameofchild =  $("#selDlgInvNameOfChild > option").clone();
$lastRow.find("td:eq(28)").find('select:eq(0)').append(Nameofchild);
$lastRow.find("td:eq(28)").find('select:eq(0)').val($("#selDlgInvNameOfChild").val());
$lastRow.find("td:eq(28)").find('select:eq(0)').on("change",function(){ 
	getChildYrtoTerEduc($(this),$lastRow.find("td:eq(27)").find('input:eq(0)'));  
		return;
});
/**** % Accumulation******/
$lastRow.find("td:eq(29)").find('input:eq(0)').val($("#selDlgInvPercntAcc").val());
$lastRow.find("td:eq(29)").find('input:eq(0)').addClass("symbolprCent"); 
 
/*** period of investment*******/
$lastRow.find("td:eq(30)").find('input:eq(0)').val($("#selDlgInvDivPeriod").val());
$lastRow.find("td:eq(30)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(30)").find('input:eq(0)').on("change",function(){
	calcTotalInvestAmts();
	syncInvestTblRow($lastRow);
});



/*** DISBURSEMENT PLAN*******/
/*** Basis of disbursement*******/
var disburseOpt = $("#txtFldDlgBscDsbrseOf > option").clone();
$lastRow.find("td:eq(31)").find('select:eq(0)').append(disburseOpt);
$lastRow.find("td:eq(31)").find('select:eq(0)').val($("#txtFldDlgBscDsbrseOf").val());
$lastRow.find("td:eq(31)").find('select:eq(0)').on("change",function(){
	disbursementOpts($lastRow.find("td:eq(31)").find('select:eq(0)'),$lastRow.find("td:eq(32)").find('input:eq(0)'),$lastRow.find("td:eq(33)").find('input:eq(0)'));
	syncInvestTblRow($lastRow);
});


$lastRow.find("td:eq(32)").find('input:eq(0)').val($("#txtFldDlgDsbsAmt").val()); 
$lastRow.find("td:eq(32)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(32)").find('input:eq(0)').on("change",function(){
	syncInvestTblRow($lastRow);
});

$lastRow.find("td:eq(33)").find('input:eq(0)').val($("#txtFldDlgDsbsYrs").val());
$lastRow.find("td:eq(33)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(33)").find('input:eq(0)').on("change",function(){
	syncInvestTblRow($lastRow);
});
/**********/ 

applyEventHandlers();


$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});



//DHTML CRUD ICONS
$lastRow.click(function(){
	toggleSingleRow($lastRow);
	crudicons(this,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
});

	if(dataset != null){ 
		
		
		rowCount = $('#fnaInvestmentTbl tbody tr').length;
		$lastRow.find("td:first").find('span').text(rowCount); 
	
		if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
				$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
		}
				
		var infoDetsArr = new Array();
		var investDes;
		for(var data in dataset){
			var col = dataset[data];
			
			switch(data){
			
			case "owninvstId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
			
			case "invReferenceId": 
				$lastRow.find("td:eq(0)").find('input:eq(2)').val(col);
				if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");} 
				break;
				
			case "invOwner": 
				selectNullvalChk($lastRow.find("td:eq(2)"),col); 
				break;
				
			case "invType": 
				selectNullvalChk($lastRow.find("td:eq(3)"),col); 
				break;
			 
			case "invFa": 
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
				break;
			 
			case "invAnlysByPtflio": 
				selectNullvalChk($lastRow.find("td:eq(5)"),col); 
				break;
			
				
			case "invInstname":  
				selectNullvalChk($lastRow.find("td:eq(6)"),col);
				invcloneportflio($lastRow.find("td:eq(6)").find('select:eq(0)'),$lastRow.find("td:eq(5)").find('select:eq(0)'),$lastRow.find("td:eq(7)").find('select:eq(0)'));  
				$lastRow.find("td:eq(7)").find("select:eq(0)").val(investDes);
				break; 
				
			case "invDesc":		
				investDes=col;
				$lastRow.find("td:eq(7)").find("select:eq(0)").val(col);
				break;
				
				
			case "invEstrate": 
				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
				break;
			
			case "invAmount": 
				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
				break;
				
			case "invPaymethod":
				selectNullvalChk($lastRow.find("td:eq(10)"),col); 		
				break;
				
				/*NAV details*/
				
			case "invDate":
				$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
				break;  
				
				
			case "invCurrbid":
				$lastRow.find("td:eq(12)").find('input:eq(0)').val(col); 
				break;
					
			case "invUnitsalloc":
				$lastRow.find("td:eq(13)").find('input:eq(0)').val(col); 
				break;
				
			case "invCurrentNAV":
				$lastRow.find("td:eq(14)").find('input:eq(0)').val(col); 
				break;
				
			case "invRemarks":
				$lastRow.find("td:eq(15)").find('input:eq(0)').val(col); 
				break;
				
				/*Dividend fields*/
			case "invDividendReInv":
				selectNullvalChk($lastRow.find("td:eq(16)"),col); 		
				break;
				
			case "invDividendBasdOn":
				selectNullvalChk($lastRow.find("td:eq(17)"),col); 		
				break;
				
			case "invDivPARAmt":
				$lastRow.find("td:eq(18)").find('input:eq(0)').val(col); 
				break; 
				
			case "invAnnlDividPrct":
				$lastRow.find("td:eq(19)").find('input:eq(0)').val(col); 
				break;
				
			case "invDividPaymode":
				$lastRow.find("td:eq(20)").find('select:eq(0)').val(col); 
				break; 
				
			case "invDividendAmt":
				$lastRow.find("td:eq(21)").find('input:eq(0)').val(col); 
				break; 	
				/*Regular plan*/
			case "invAnyregplan":
				selectNullvalChk($lastRow.find("td:eq(22)"),col); 		
				break;
				
			case "invRegplanFreq":
				selectNullvalChk($lastRow.find("td:eq(23)"),col); 	
				
				break;
				
			case "invRegplanAmount":
				$lastRow.find("td:eq(24)").find('input:eq(0)').val(col);  
				break;
				
	
			case "invRegplanFromyrs":
				$lastRow.find("td:eq(25)").find('input:eq(0)').val(col); 
				break;
				
				/*Investment objective*/
			case "invObjective":
				selectNullvalChk($lastRow.find("td:eq(26)"),col); 	 
				break;
				
			case "invYrstoret": 
				$lastRow.find("td:eq(27)").find('input:eq(0)').val(col); 
				break;
				
			case "invChildname":
				selectNullvalChk($lastRow.find("td:eq(28)"),col); 		
				break;
				
			case "invAccprcnt":
				$lastRow.find("td:eq(29)").find('input:eq(0)').val(col); 
				break;
				
			case "invDivPeriod":
				$lastRow.find("td:eq(30)").find('input:eq(0)').val(col); 
				break;
				
			case "invBasisOfDisbursement":
				selectNullvalChk($lastRow.find("td:eq(31)"),col); 	
				break;
				
			case "invDisburseAmount":
				$lastRow.find("td:eq(32)").find('input:eq(0)').val(col); 
				break;
				
			case "invDisburseYears":
				$lastRow.find("td:eq(33)").find('input:eq(0)').val(col); 
				break;
					
			case "invCreatedBy": 
				$lastRow.find("td:eq(33)").find('input:eq(1)').val(col);
				infoDetsArr.push(col);				
				break;
				
			case "invCreatedDate":
				$lastRow.find("td:eq(33)").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "invModifiedBy":
				infoDetsArr.push(col);
				break;
				
			case "invModifiedDate":
				infoDetsArr.push(col);
				break;	
				
		
				
			}		
			 
		}
	}else{
		
//		DHTML CRUD ICONS
		crudicons(null,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
		
	
		syncInvestTblRow($lastRow);
			
		
		calcTotalInvestAmts(); 
		
		var tempPayMeth = $lastRow.find("td:eq(10)").find('select:eq(0)').val();
		
		if(  tempPayMeth == "CPFOA" || tempPayMeth  == "CPFSA" || 	tempPayMeth  == "CPFMA" || tempPayMeth  == "CPFRA"){
			newRowInvestCpfTbl($lastRow); 
		}
		
		if(tempPayMeth == "SRS"){
			newRowInvestSRSTbl($lastRow);	
		}
		
	}
	
	enableDividends($lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'),$lastRow.find("td:eq(21)").find('input:eq(0)'));
	disbursementOpts($lastRow.find("td:eq(31)").find('select:eq(0)'),$lastRow.find("td:eq(32)").find('input:eq(0)'),$lastRow.find("td:eq(33)").find('input:eq(0)'));
	enablePAR($lastRow.find("td:eq(17)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(12)").find('input:eq(0)'),$lastRow.find("td:eq(13)").find('input:eq(0)'),$lastRow.find("td:eq(14)").find('input:eq(0)'),$lastRow.find("td:eq(12)").find('a')); 
	invpaymentmtd($lastRow.find("td:eq(10)").find('select:eq(0)'),$lastRow.find("td:eq(19)").find('input:eq(0)'),$lastRow.find("td:eq(20)").find('select:eq(0)'));
	calInvSumryRow();
	activeInvAmt($lastRow.find("td:eq(22)").find('select:eq(0)'),$lastRow.find("td:eq(23)").find('select:eq(0)'),$lastRow.find("td:eq(24)").find('input:eq(0)'),$lastRow.find("td:eq(25)").find('input:eq(0)'));//,$lastRow.find("td:eq(25)").find('input:eq(0)')
	if(!checkInvObjDets($lastRow.find("td:eq(26)").find('select:eq(0)'),$lastRow.find("td:eq(28)").find('select:eq(0)'),$lastRow.find("td:eq(27)").find('input:eq(0)'),$lastRow.find("td:eq(29)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('select:eq(0)')))
		return;
 
}


function validateInvstNavDetails($lastRow){ 
	 
 
	if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(6)").find('select:eq(0)'),  IPINVST_INSNAME))) return;
	if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(7)").find('select:eq(0)'), IPINVST_FUNDCODE))) return;  
	if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(11)").find('input:eq(0)'), IPINST_DATEINV))) return;   
	
  return true; 
}







/*Mandatory Fields Tooltip*/ 
$("#selDlgInvOwnership,#selDlgInvTypesOfInvst,#txtFldDlgInvDateInvst").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});

//DHTML SELECT ALL
function SelAllSelfnaInvestment(obj){
	
	if($(obj).is(":checked")){
		
		$('#fnaInvestmentTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#InvestDRow").attr("disabled",false);
		$('#fnaInvestmentTbl tbody tr').addClass("selected");
		
		var $rowCount = $('#fnaInvestmentTbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			$("#InvestERow").attr("disabled",true);
			$("#InvestDRow").attr("disabled",true);
		}else if($rowCount == 1){
			$("#InvestERow").attr("disabled",false);
			$("#InvestDRow").attr("disabled",false);
		}else if($rowCount > 1){
			$("#InvestERow").attr("disabled",true);
			$("#InvestDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#fnaInvestmentTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#fnaInvestmentTbl tbody tr').removeClass("selected");
		
		$("#InvestERow").attr("disabled",true);
		$("#InvestDRow").attr("disabled",true);
		
	}
	
}
/*Edit Row Click */
$("#InvestERow").on("click",function(){ 
	InvestVRow(); 
});


/*View Row Click */
function InvestVRow(){

	activeInvAmt($("#txtFldDlgAnyRegInvPlan"),$("#selDlgInvFreq"),$("#txtFldDlgAnyRegInvPlanAmt"),$("#txtFldDlgNoOfYrsRegInv"));//,$("#txtFldDlgTotNoOfYrsStayInv")
	var isOneRowSelected=0;
	var $rowCount = $('#fnaInvestmentTbl tbody tr').length;	
//	var $lastRow = $("#fnaInvestmentTbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	
	$("#fnaInvestmentTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
		
			
	});
	
	
	
	$("#fnaInvestmentTbl tbody").find('input[name="radinvestSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#fnaInvestmentTbl tbody").find('input[name="radinvestSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			
			$curElm.prop("checked",false);
	     	$curElm.parents("tr").removeClass('selected');
	     	
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);
				 
				 $(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
						$(this).attr("disabled",false); 
						$row.removeClass('selected');  
						$(this).parent().css({border:'1px solid green'});
						$row.css({border:'1px solid green'});
						$row.find("td").css({border:'1px solid green'});
					});  
				 
				 	investRdlyflds($mode);
				 	investfilldlgval($row);
//					checkInvObjDetsRem($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"));
					yrtoretirementChk($("#selDlgInvYrToRet"));
					activeInvAmt($("#txtFldDlgAnyRegInvPlan"),$("#selDlgInvFreq"),$("#txtFldDlgAnyRegInvPlanAmt"),$("#txtFldDlgNoOfYrsRegInv"));//,$("#txtFldDlgTotNoOfYrsStayInv")
					invpaymentmtd($("#txtFldDlgInvSource"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"));
					enableDividends($("#selDlgDivdReInv"),$("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDividendAmt"));
					enablePAR($("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgInvCurBid"),$("#txtFldDlgInvNoOfUnits"),$("#txtFldDlgInvNAV"),$("#genNavicon"));
					disbursementOpts($("#txtFldDlgBscDsbrseOf"),$("#txtFldDlgDsbsAmt"),$("#txtFldDlgDsbsYrs"));
					if(!checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"),$("#txtFldDlgInvSource")))
						return;
						
					showFIPAModel('Investment_Dialog','Investment Details');
					
					$("#Investment_Dialog").find("select[id=selDlgInvOwnership]").focus();
					
					$('#Investment_Dialog').on('shown.bs.modal', function () {
					
						$("#Investment_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							
									
							 if(!validateinvestDetails())return; 
							 if(!validateRegInvPlan())return
							
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			investfilldomval($RowId,$row); 
					     		}  
							 
							 syncInvestTblRow($row);
						 		
//						 		checkInvObjDetsRem($row.find("td:eq(26)").find('select:eq(0)'),$row.find("td:eq(28)").find('select:eq(0)'),$row.find("td:eq(27)").find('input:eq(0)'));
						 		
//						 	 	newRowInvestCpfEditTbl($row);//CODRU
						 		newRowInvestCpfTbl($row);
						 		newRowInvestSRSTbl($row);
						 		
							 	calcTotalInvestAmts(); 
							 	enableDividends($row.find("td:eq(16)").find('select:eq(0)'),$row.find("td:eq(17)").find('select:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),$row.find("td:eq(19)").find('input:eq(0)'),$row.find("td:eq(20)").find('select:eq(0)'),$row.find("td:eq(21)").find('input:eq(0)'));
							 	enablePAR($row.find("td:eq(17)").find('select:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),$row.find("td:eq(12)").find('input:eq(0)'),$row.find("td:eq(13)").find('input:eq(0)'),$row.find("td:eq(14)").find('input:eq(0)'),$row.find("td:eq(12)").find('a'));
							 	disbursementOpts($row.find("td:eq(31)").find('select:eq(0)'),$row.find("td:eq(32)").find('input:eq(0)'),$row.find("td:eq(33)").find('input:eq(0)'));
							 	calInvSumryRow();  
							 	
								$('#Investment_Dialog').modal('hide'); 
								investClearFlds();
								
								crudicons(null,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
							
						});
						
						$("#Investment_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(null,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
						});
					});
					 
			}  
			isOneRowSelected++;
		} 
	});
	
	 
	if(isOneRowSelected==0){
		applyToastrAlert("No Rows Selected");
		return;
	}

	
}


/*Delete Row Click */
$("#InvestDRow").on("click",function(){ 
	var flg=true;
	var rowCount = fnaInvestmentTbl.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	$('#fnaInvestmentTbl tbody').find('input[type=checkbox]').each(function(){
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
				$('#fnaInvestmentTbl tbody').find('input[type=checkbox]').each(function(){
					if($(this).is(":checked")){  
						
						var row = $(this).parents("tr");                                    
						var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();
						var invPKId = $(this).parents("tr").find("td:first").find('input:eq(1)').val();
						
						var refId=$(this).parents("tr").find("td:eq(0)").find("input.rowrefid");//Retirement Reference 
						var refFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("rowrefid"); 
						if(isValidObject(refId) && refFlg){  
					 
							if(!isEmpty(refId.val())){
							   
								var message=false;
								 
								$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
									if(refId.val() == $(this).val()){
										
										message=true;
//										IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
										
										if( mode == "I"){
											if(isEmpty(invPKId)){
												IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
											}else{
												$(this).closest("tr").hide();
												$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
											}
										}
										
										
									}
								});	
								  
								$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
									if(refId.val() == $(this).val()){
										
										message=true;
//									 	cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
										
										if( mode == "I"){
											if(isEmpty(invPKId)){
												cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
											}else{
												$(this).closest("tr").hide();
												$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
											}
										}
										
									 	
									}
								});	
								
								 
								$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
									if(refId.val() == $(this).val()){
										
										message=true;
//										srsTable.row($(this).closest("tr")).remove().draw();
										
										
										if( mode == "I"){
											if(isEmpty(invPKId)){
												srsTable.row($(this).closest("tr")).remove().draw();
											}else{
												$(this).closest("tr").hide();
												$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
											}
										}
										
										
									}
								});	
								 
							 $("#fnaInvestmentTbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
										 if(refId.val() == $(this).val()){
											 
											if(message){
												applyErrorToastrAlert("There is row exists in other sections, will also be deleted");
											}
											
//										 fnaInvestmentTbl.row($(this).closest("tr")).remove().draw();
											
											if( mode == "I"){
												if(isEmpty(invPKId)){
													fnaInvestmentTbl.row($(this).closest("tr")).remove().draw();
												}else{
													$(this).closest("tr").hide();
													$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
												}
											}
											
									}
								});
							 
							}else{
								
								if( mode == "I"){
									if(isEmpty(invPKId)){
										fnaInvestmentTbl.row($(this).closest("tr")).remove().draw();
									}else{
										$(this).closest("tr").hide();
										$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
									}
								}
								
							}
						}else{
							
							if( mode == "I"){
								if(isEmpty(invPKId)){
									fnaInvestmentTbl.row($(this).closest("tr")).remove().draw();
								}else{
									$(this).closest("tr").hide();
									$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
								}
							}
						} 
						
						$(this).attr("checked",false); 
					}
				}); 
				
				reOrderVisibleRows("fnaInvestmentTbl");
				reOrderVisibleRows("IncAssRetPlgtbl"); 
				reOrderVisibleRows("cpfAccAddDedTable");
				reOrderVisibleRows("srsTable");
				
				
			/*$('#fnaInvestmentTbl tbody tr').find('td:eq(0) input.rowrefid').each(function(){
					
					var oldval = $(this).val();
					var bankrowindex= $(this).closest("tr").index();
					var newval = "INV_"+bankrowindex;
					
					
					$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(oldval == $(this).val()){
			     		   $(this).val(newval);
			     	   }
			        });
					
					
					$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(oldval == $(this).val()){
			     		   $(this).val(newval);
			     	   }
			        });
					
					$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
				     	   if(oldval == $(this).val()){
				     		   $(this).val(newval);
				     	   }
				        });
					
					$(this).val(newval);
				});*/


				calInvSumryRow(); 
				calcTotalInvestAmts();
				
			
				$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
				  	$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			
		});
		
}


//	DHTML CRUD ICONS
	var rc = fnaInvestmentTbl.row().count();
	if(rc ==0){
		$("#SelfnaInvestment").prop("checked",false);
		crudicons(this,'fnaInvestmentTbl','SelfnaInvestment','InvestERow','InvestDRow');
	}
//	DHTML CRUD ICONS

});

/*Clear Fields */
function investClearFlds(){
	$("#Investment_Dialog").find("input[type=text]").val("");
	$("#Investment_Dialog").find("textarea").val("");
	$("#Investment_Dialog").find("select").val("");
	$("#Investment_Dialog #txtFldDlgInvDesc option").remove(0);
	$('#Investment_Dialog #txtFldDlgInvDesc').append( '<option value="">--SELECT--</option>' ); 
}

/*Disabled/Readonly Fields */
function investRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#Investment_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#Investment_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validateinvestDetails(){
	 
	if(!(validateFocusFlds('Investment_Dialog','selDlgInvOwnership', IPINVST_OWNNAME))) return;
	if(!(validateFocusFlds('Investment_Dialog','selDlgInvTypesOfInvst',IPINVST_TYPE))) return;
	if(!(validateFocusFlds('Investment_Dialog','txtFldDlgInvDateInvst', IPINST_DATEINV))) return; 
	
	  return true; 
}
 

/*Mandatory Fields Tooltip*/ 
$("#selDlgInvOwnership,#selDlgInvTypesOfInvst,#txtFldDlgInvDateInvst").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
  


/* Filling Model Fields*/
function investfilldlgval($lastRow){
//	  $('#Investment_Dialog #txtFldDlgInvtmntMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#Investment_Dialog #txtFldDlgInvtmntId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#Investment_Dialog #txtFldDlgInvtmntRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
	  $('#Investment_Dialog #selDlgInvOwnership').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  $('#Investment_Dialog #selDlgInvTypesOfInvst').val($lastRow.find("td:eq(3)").find('select:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgInvFABrokerName').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgAnalsByPortfolio').val($lastRow.find("td:eq(5)").find('select:eq(0)').val());
	  addAvallisFin($('#Investment_Dialog #txtFldDlgAnalsByPortfolio'),$('#Investment_Dialog #txtFldDlgInvInstitution'));
	  $('#Investment_Dialog #txtFldDlgInvInstitution').val($lastRow.find("td:eq(6)").find('select:eq(0)').val());
	  

	  /**/
	  
	  invcloneportflio($('#Investment_Dialog #txtFldDlgInvInstitution'),$('#Investment_Dialog #txtFldDlgAnalsByPortfolio'),$('#Investment_Dialog #txtFldDlgInvDesc'));  
		
	   /**/
		 
	  
	  $('#Investment_Dialog #txtFldDlgInvDesc').val($lastRow.find("td:eq(7)").find('select:eq(0)').val()); 
	  $('#Investment_Dialog #txtFldDlgInvEstInvRate').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgInvAmt').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgInvSource').val($lastRow.find("td:eq(10)").find('select:eq(0)').val());
	  
	  $('#Investment_Dialog #txtFldDlgInvDateInvst').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgInvCurBid').val($lastRow.find("td:eq(12)").find('input:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgInvNoOfUnits').val($lastRow.find("td:eq(13)").find('input:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgInvNAV').val($lastRow.find("td:eq(14)").find('input:eq(0)').val());
	  $('#Investment_Dialog #selDlgInvRemarks').val($lastRow.find("td:eq(15)").find('input:eq(0)').val());
	  
	  $('#Investment_Dialog #selDlgDivdReInv').val($lastRow.find("td:eq(16)").find('select:eq(0)').val());
	  $('#Investment_Dialog #selDlgDivdBasedOn').val($lastRow.find("td:eq(17)").find('select:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgDividendPAR').val($lastRow.find("td:eq(18)").find('input:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgAnlDivdRate').val($lastRow.find("td:eq(19)").find('input:eq(0)').val());
	  $('#Investment_Dialog #selDlgDivdPaymode').val($lastRow.find("td:eq(20)").find('select:eq(0)').val());
	  $('#Investment_Dialog #selDlgDividendAmt').val($lastRow.find("td:eq(21)").find('input:eq(0)').val());
	  

	  $('#Investment_Dialog #txtFldDlgAnyRegInvPlan').val($lastRow.find("td:eq(22)").find('select:eq(0)').val());
	  $('#Investment_Dialog #selDlgInvFreq').val($lastRow.find("td:eq(23)").find('select:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgAnyRegInvPlanAmt').val($lastRow.find("td:eq(24)").find('input:eq(0)').val()); 
	  $('#Investment_Dialog #txtFldDlgNoOfYrsRegInv').val($lastRow.find("td:eq(25)").find('input:eq(0)').val());
	  
	  
	  $('#Investment_Dialog #selDlgInvObjInvst').val($lastRow.find("td:eq(26)").find('select:eq(0)').val());
	  $('#Investment_Dialog #selDlgInvYrToRet').val($lastRow.find("td:eq(27)").find('input:eq(0)').val());
	  $('#Investment_Dialog #selDlgInvNameOfChild').val($lastRow.find("td:eq(28)").find('select:eq(0)').val());
	  $('#Investment_Dialog #selDlgInvPercntAcc').val($lastRow.find("td:eq(29)").find('input:eq(0)').val());
	  $('#Investment_Dialog #selDlgInvDivPeriod').val($lastRow.find("td:eq(30)").find('input:eq(0)').val());
	  
	 
	 	  
	  $('#Investment_Dialog #txtFldDlgBscDsbrseOf').val($lastRow.find("td:eq(31)").find('select:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgDsbsAmt').val($lastRow.find("td:eq(32)").find('input:eq(0)').val());
	  $('#Investment_Dialog #txtFldDlgDsbsYrs').val($lastRow.find("td:eq(33)").find('input:eq(0)').val()); 
	  $('#Investment_Dialog #txtFldDlgInvtmntCrtdBy').val($lastRow.find("td:eq(33)").find('input:eq(1)').val());
	  $('#Investment_Dialog #txtFldDlgInvtmntCrtdDate').val($lastRow.find("td:eq(33)").find('input:eq(2)').val());
	
}

/* Filling Table Fields*/
function investfilldomval($RowId,$row){
	
	$row.find("td:eq(2)").find('select:eq(0)').val($("#selDlgInvOwnership").val()); 
	$row.find("td:eq(3)").find('select:eq(0)').val($("#selDlgInvTypesOfInvst").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgInvFABrokerName").val()); 
	$row.find("td:eq(5)").find('select:eq(0)').val($("#txtFldDlgAnalsByPortfolio").val()); 
	addAvallisFin($row.find("td:eq(5)").find('select:eq(0)'),$row.find("td:eq(6)").find('select:eq(0)'));
	$row.find("td:eq(6)").find('select:eq(0)').val($("#txtFldDlgInvInstitution").val()); 
	
	invcloneportflio($row.find("td:eq(6)").find('select:eq(0)'),$row.find("td:eq(5)").find('select:eq(0)'),$row.find("td:eq(7)").find('select:eq(0)'));  

	$row.find("td:eq(7)").find('select:eq(0)').val($("#txtFldDlgInvDesc").val()); 
	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgInvEstInvRate").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgInvAmt").val()); 
	$row.find("td:eq(10)").find('select:eq(0)').val($("#txtFldDlgInvSource").val()); 
	
	

	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgInvDateInvst").val()); 
	$row.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgInvCurBid").val());
	$row.find("td:eq(13)").find('input:eq(0)').val($("#txtFldDlgInvNoOfUnits").val()); 
	$row.find("td:eq(14)").find('input:eq(0)').val($("#txtFldDlgInvNAV").val());
	$row.find("td:eq(15)").find('input:eq(0)').val($("#selDlgInvRemarks").val());  
	

	$row.find("td:eq(16)").find('select:eq(0)').val($("#selDlgDivdReInv").val());  
	$row.find("td:eq(17)").find('select:eq(0)').val($("#selDlgDivdBasedOn").val());
	$row.find("td:eq(18)").find('input:eq(0)').val($("#txtFldDlgDividendPAR").val());
	$row.find("td:eq(19)").find('input:eq(0)').val($("#txtFldDlgAnlDivdRate").val()); 
	$row.find("td:eq(20)").find('select:eq(0)').val($("#selDlgDivdPaymode").val());  
	$row.find("td:eq(21)").find('input:eq(0)').val($("#selDlgDividendAmt").val()); 
	

	$row.find("td:eq(22)").find('select:eq(0)').val($("#txtFldDlgAnyRegInvPlan").val()); 
	$row.find("td:eq(23)").find('select:eq(0)').val($("#selDlgInvFreq").val()); 
	$row.find("td:eq(24)").find('input:eq(0)').val($("#txtFldDlgAnyRegInvPlanAmt").val()); 
	$row.find("td:eq(25)").find('input:eq(0)').val($("#txtFldDlgNoOfYrsRegInv").val()); 
	
	$row.find("td:eq(26)").find('select:eq(0)').val($("#selDlgInvObjInvst").val()); 
	$row.find("td:eq(27)").find('input:eq(0)').val($("#selDlgInvYrToRet").val()); 
	$row.find("td:eq(28)").find('select:eq(0)').val($("#selDlgInvNameOfChild").val()); 
	$row.find("td:eq(29)").find('input:eq(0)').val($("#selDlgInvPercntAcc").val()); 
	$row.find("td:eq(30)").find('input:eq(0)').val($("#selDlgInvDivPeriod").val());
	
	   
	$row.find("td:eq(31)").find('select:eq(0)').val($("#txtFldDlgBscDsbrseOf").val()); 
	$row.find("td:eq(32)").find('input:eq(0)').val($("#txtFldDlgDsbsAmt").val()); 
	$row.find("td:eq(33)").find('input:eq(0)').val($("#txtFldDlgDsbsYrs").val());

//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//$row.find("select").prop("disabled",true);//instant save added line

}



/*//instant save added line
$("#Investment_Dialog").find("input,select,textarea").on("change",function(){
	$("#Investment_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});*/




/*###########################################################################################################################################################*/


$("#txtFldDlgInvCurBid,#txtFldDlgInvNoOfUnits").on("change",function(){
	currentNavcalc(null);
});
$("#txtFldDlgNoOfYrsRegInv").on("change",function(){//,#txtFldDlgTotNoOfYrsStayInv
	if(!validatenoofyrs(null))return;
});

function currentNavcalc($lastRow){
	var curbidprice=(isEmpty($("#txtFldDlgInvCurBid").val())) ? Number(0) : Number($("#txtFldDlgInvCurBid").val()); 
	var noofunits=(isEmpty($("#txtFldDlgInvNoOfUnits").val())) ? Number(0) : Number($("#txtFldDlgInvNoOfUnits").val());
		  
	var currentNav=curbidprice*noofunits;
	$("#txtFldDlgInvNAV").val(remPriceAfDec(currentNav));
	
	
	if($lastRow){
		var curbidpricerow=(isEmpty($lastRow.find("td:eq(12)").find('input:eq(0)').val())) ? Number(0) : Number($lastRow.find("td:eq(12)").find('input:eq(0)').val()); 
		var noofunitsrow=(isEmpty($lastRow.find("td:eq(13)").find('input:eq(0)').val())) ? Number(0) : Number($lastRow.find("td:eq(13)").find('input:eq(0)').val());
			  
		var currentNavrow=curbidpricerow*noofunitsrow;
		$lastRow.find("td:eq(14)").find('input:eq(0)').val(remPriceAfDec(currentNavrow));
	} 
}


function validatenoofyrs($lastRow){
	var rspyrs=$("#txtFldDlgNoOfYrsRegInv").val(); 
	
	var perdofinvobj = $("#selDlgInvDivPeriod");
	var perdofinv=perdofinvobj.val();
	
	if($lastRow){
		rspyrs=$lastRow.find("td:eq(25)").find('input:eq(0)').val(); 
		perdofinvobj = $lastRow.find("td:eq(30)").find('input:eq(0)');
		perdofinv=perdofinvobj.val();
	}
		    
	if(!isEmpty(rspyrs) ){
		if(!isEmpty(perdofinv)){
		if(Number(perdofinv) < Number(rspyrs)){
			applyErrorToastrAlert("Period of Investment should be greater than No.of Yrs of Regular Investment",perdofinvobj);
			
//			showErrorTip($("#txtFldDlgNoOfYrsRegInv"),"'No. of Yrs of Regular Investment' field should not exceed the 'Period of Investment' field");
			
			perdofinvobj.val("");
			return false;
		}
		}
	}
	
	/*if($lastRow){
		
		var noofyrsrow=$lastRow.find("td:eq(25)").find('input:eq(0)').val(); 
		var totnoyrsrow=$lastRow.find("td:eq(30)").find('input:eq(0)').val();
		
		if(!isEmpty(noofyrsrow) ){
			if(!isEmpty(totnoyrsrow)){
			if(Number(totnoyrsrow) < Number(noofyrsrow)){
				applyErrorToastrAlert("Total number of years to stay invested should be greater than Number of years of regular investment",$lastRow.find("td:eq(30)").find('input:eq(0)'));
				$lastRow.find("td:eq(30)").find('input:eq(0)').val("");
				return false;
			}
			}
		}
	}*/ 
	
	return true;
}


/*function totInsuranceCalcRow(){
	
	
	 var sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0;
	 var tbl = document.getElementById('fnaInvestmentTbl'),
	 tblBody = tbl.tBodies[0],
	 len = tblBody.rows.length;
 	
	 for(var edit=0;edit<len;edit++){
		 if(document.getElementsByName("txtFldLipDthchBenf")[edit]){
			 sum1 +=Number(document.getElementsByName("txtFldLipDthchBenf")[edit].value);
		 }
		 if(document.getElementsByName("txtFldLipMiCoverage")[edit]){
			 sum2 +=Number(document.getElementsByName("txtFldLipMiCoverage")[edit].value);
		 }
		 if(document.getElementsByName("txtFldLipCashValue")[edit]){
			 sum3 +=Number(document.getElementsByName("txtFldLipCashValue")[edit].value);
		 } 
		 if(document.getElementsByName("txtFldLipOsValue")[edit]){
			 sum4 +=Number(document.getElementsByName("txtFldLipOsValue")[edit].value);
		 }
		 if(document.getElementsByName("txtFldLipRpValue")[edit]){
			 sum5 +=Number(document.getElementsByName("txtFldLipRpValue")[edit].value);
		 }
		 if(document.getElementsByName("txtFldLipAnnlPrem")[edit]){
			 sum6 +=Number(document.getElementsByName("txtFldLipAnnlPrem")[edit].value);
		 }
		 if(document.getElementsByName("txtFldLipComputedtpd")[edit]){
			 sum7 +=Number(document.getElementsByName("txtFldLipComputedtpd")[edit].value);
		 }
	 } 
	 
	 if(!(sum1 == 0 && sum2 == 0 && sum3 == 0 && sum4 == 0 && sum5 == 0 && sum6 == 0 && sum7 == 0)){ 
	 $("#fnaInvestmentTblfooter #tottxtFldDeathBenf").val(remPriceAfDec(sum1));  
	 $("#fnaInvestmentTblfooter #tottxtFldMICoverage").val(remPriceAfDec(sum2));  
	 $("#fnaInvestmentTblfooter #tottxtFldCashValue").val(remPriceAfDec(sum3));  
	 $("#fnaInvestmentTblfooter #tottxtFldOutsgLoan").val(remPriceAfDec(sum4));  
	 $("#fnaInvestmentTblfooter #tottxtFldValRPCash").val(remPriceAfDec(sum5));  
	 $("#fnaInvestmentTblfooter #tottxtFldAnlPrem").val(remPriceAfDec(sum6));  
	 $("#fnaInvestmentTblfooter #tottxtFldCompTPD").val(remPriceAfDec(sum7)); 
	 }
	 
	 if(sum1 == 0){$('#tottxtFldDeathBenf').val("0");}
	 if(sum2 == 0){$('#tottxtFldMICoverage').val("0");}
	 if(sum3 == 0){$('#tottxtFldCashValue').val("0");}
	 if(sum4 == 0){$('#tottxtFldOutsgLoan').val("0");}
	 if(sum5 == 0){$('#tottxtFldValRPCash').val("0");}
	 if(sum6 == 0){$('#tottxtFldAnlPrem').val("0");}
	 if(sum7 == 0){ $('#tottxtFldCompTPD').val("0");}
	 
	  
	   
}*/

function UpdInvstmntChildName(existingName,newchildname){
 
	
	var table = document.getElementById("fnaInvestmentTbl"); 
	var tbody = table.tBodies[0];
	var rowCount = tbody.rows.length;
	var editFlag = 0;
	 
	
	var Insrnceindex = fnaInvestmentTbl.row().count();
	 
 
		if(Insrnceindex>0){
	for(var editrow=0;editrow<rowCount;editrow++){ 
			 var editCurRow = tbody.rows[editrow];   
			 if( existingName == editCurRow.cells[28].childNodes[0].value ){  
				 var RowId=editCurRow.rowIndex; 
				 table.rows[RowId].cells[28].childNodes[0].value = newchildname;  
			 } 
		}
	}
		return true;	
}


  
function activeInvAmt(elmid,freq,amt,noofyrs) {//,stayinv removed from screens
	var option = elmid.val();
	
	if (option == "Y") {  
		amt.prop("disabled", false);
		freq.prop("disabled", false);
		noofyrs.prop("disabled", false);
	}else {  
		amt.prop("disabled", true);
		amt.val("");
		freq.prop("disabled", true);
		freq.val("");
		noofyrs.prop("disabled", true);
		noofyrs.val("");
	}
		
	return true;
}
 
	
$("#txtFldDlgAnyRegInvPlan").on("change",function(){
	activeInvAmt($(this),$("#selDlgInvFreq"),$("#txtFldDlgAnyRegInvPlanAmt"),$("#txtFldDlgNoOfYrsRegInv"));//,$("#txtFldDlgTotNoOfYrsStayInv") 
});

	
$("#selDlgInvObjInvst").on("change",function(){

//	if(!checkPaymentInvObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst")))return;
	
	if(!checkPaymentWithObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst"),$("#selDlgInvYrToRet"),$("#selDlgInvNameOfChild"),$("#selDlgInvPercntAcc"))){
		return;
	} 
	if(!checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"),$("#txtFldDlgInvSource")))
		return;
		
	
	
	
	 if($(this).val() == "Retirement Planning" || $(this).val() == "CPF-RP"){
//		 if(!validationRetirementScreen())return; 
		 mandatoryFldForRetirement($(this),null,'INVEST');
	 }
	
	
});

$("#txtFldDlgInvSource").on("change",function(){
	 
	
	invpaymentmtd($(this),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"));
	if(!checkOwnerForPayment( $("#selDlgInvOwnership"),$("#txtFldDlgInvSource")))return;
//	if(!checkPaymentInvObj($("#txtFldDlgInvSource"),$("#selDlgInvObjInvst")))return;
	if(!checkPaymentWithObj(
			$("#txtFldDlgInvSource"),
			$("#selDlgInvObjInvst"),
			$("#selDlgInvYrToRet"),
			$("#selDlgInvNameOfChild"),
			$("#selDlgInvPercntAcc")
			))return;
	if(!checkInvObjDets($("#selDlgInvObjInvst"),$("#selDlgInvNameOfChild"),$("#selDlgInvYrToRet"),$("#selDlgInvPercntAcc"),$("#txtFldDlgInvSource")))
		return;
	
});

$("#selDlgInvOwnership").on("change",function(){
	if(!checkOwnerForPayment( $("#selDlgInvOwnership"),$("#txtFldDlgInvSource")))return;
});



function  checkOwnerForPayment(owner,source){
	var ownership = owner.val();
	var paymentmeth = source.val();
	if(!(ownership==null) && !(paymentmeth == null)){
	if(!isEmpty(ownership) && !isEmpty(paymentmeth) ){
	if( ownership  == "Joint" && (paymentmeth.toUpperCase() != "CASH")){
		applyErrorToastrAlert("Joint ownership will not accept any CPFOA, CPFSA or SRS as investment source", '');
		source.val("");
		return false;
	  }
	}
	}
	return true;
}

function  checkPaymentWithObj(paymtdobject,obj,yrstoret,childname,accmprcnt){
	var paymtd = paymtdobject.val();
	var objv = obj.val();
	 
	if(!isEmpty(paymtd) && !isEmpty(objv) ){
	if((paymtd  == "SRS" || paymtd  == "CPFOA" || paymtd  == "CPFSA" || paymtd  == "CPFMA" || paymtd  == "CPFRA") && (objv == "Education Planning")){
//		applyErrorToastrAlert("Education planning is not applicable for CPF related payment methods", '');
		showErrorTip(obj,"Education planning is not applicable for CPF related payment methods");
		obj.val("No plans");
		if(!checkInvObjDets(obj,childname,yrstoret,accmprcnt,paymtdobject))
			return;
		return false;
	  }
	}
	
	
	if(!isEmpty(paymtd) && !isEmpty(objv) ){
		if(( paymtd  != "CPFOA" && paymtd  != "CPFSA" && paymtd  != "CPFMA" && paymtd  != "CPFRA") && (objv == "CPF-RP")){
//			applyErrorToastrAlert("Education planning is not applicable for CPF related payment methods", '');
			showErrorTip(obj,"CPF - Retirement planning is applicable to CPF related payment methods");
			
			obj.val("No plans");
			if(!checkInvObjDets(obj,childname,yrstoret,accmprcnt,paymtdobject))
				return;
			return false;
		  }
		}
	 
	return true;
}


function checkPaymentInvObj(source,invobj){
	var paymentmeth = source.val();
	var invobjective = invobj.val();
//	if(!(paymentmeth==null) && !(invobjective == null)){
if(!isEmpty(paymentmeth) && !isEmpty(invobjective) ){

	paymentmeth = paymentmeth.toUpperCase();
	invobjective = invobjective.toUpperCase();
	
	if( !isEmpty(paymentmeth) && !(paymentmeth == "CASH")  
			&& (invobjective == "Education Planning")){
		applyErrorToastrAlert("For CPF related payment for investment, Education Planning will not available", '');
		invobj.val("");
		return false;
	}
}
	
//}
	return true;
}

function checkInvObjDets(elmid,child,ret,percnt,payment){
	$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").html("");
	
	var invobj = elmid.val(); 
	
	if(!(isEmpty(invobj))){ 
			if(invobj == "Education Planning"){
				
				
				
				$("#invNameofChilddiv").css("display","block");
				$("#invChildYrtoterdiv").css("display","block");
				$("#invPerOfAccmldiv").css("display","block");  
				$("#divInvPerd").css("display","block");   
				
				$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").html(" Years to Tertiary&nbsp;<a class='btn btn-default addinfoicon' id='popAselDlgInvYrToRet'></a>");
				showPopOver('popAselDlgInvYrToRet',RET_TEREDU);
				
//				ret.val("");
				ret.prop("disabled",false); 
				child.prop("disabled",false);
				percnt.prop("disabled",false);
				
				
				 
				
				
			}else if(invobj == "Retirement Planning" || invobj == "CPF-RP"){ 
				
				$("#invNameofChilddiv").css("display","none");
				$("#invChildYrtoterdiv").css("display","block"); 
				$("#invPerOfAccmldiv").css("display","block");
				$("#divInvPerd").css("display","block");
				
				$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").html("Yr to Retirement&nbsp;<a class='btn btn-default addinfoicon' id='popBselDlgInvYrToRet'></a>");   
				showPopOver('popBselDlgInvYrToRet',RET_YRSTOTER);
				
				child.val("");
				ret.val($("#retYrstoret").val());
				
				ret.prop("disabled",false); 
				child.prop("disabled",true);
				percnt.prop("disabled",false);
				
			}else if(invobj == "No plans"){
				
				$("#invNameofChilddiv").css("display","none");
				$("#invChildYrtoterdiv").css("display","none"); 
				$("#invPerOfAccmldiv").css("display","none");
				$("#divInvPerd").css("display","block");
				
				child.val("");
				ret.val("");
				
				ret.prop("disabled",true);  
				child.prop("disabled",true);
				percnt.prop("disabled",true);
			}
			
		}else{
			
			$("#invNameofChilddiv").css("display","none");
			$("#invChildYrtoterdiv").css("display","none"); 
			$("#invPerOfAccmldiv").css("display","none");
			$("#divInvPerd").css("display","block");  
			
			child.val("");
			ret.val("");
			
			ret.prop("disabled",true);  
			child.prop("disabled",true);
			percnt.prop("disabled",true);
			
		} 
	return true; 
}

/*function checkInvObjDetsRem(elmid,child,ret){
	var invobj = elmid.val(); 
	if(!(isEmpty(invobj))){ 
		if(invobj == "Education Planning"){
			$("#invNameofChilddiv").css("display","block");
			$("#invChildYrtoterdiv").css("display","block"); 
			$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").text("Yrs in Tertiary Education");
			ret.prop("disabled",false);
			child.prop("disabled",false);
		}else if(invobj == "Retirement Planning"){  
			$("#invNameofChilddiv").css("display","none");
			$("#invChildYrtoterdiv").css("display","block"); 
			$("#invChildYrtoterdiv").find("label[id=objofinvlabelchange]").text("Yr to Retirement");   
			 
		//	ret.prop("disabled",true); 
			child.prop("disabled",true);
		}else if(invobj == "No plans"){ 
			$("#invNameofChilddiv").css("display","none");
			$("#invChildYrtoterdiv").css("display","none"); 
			ret.prop("disabled",true);  
			child.prop("disabled",true);
		}  
	}else{ 
		$("#invNameofChilddiv").css("display","none");
		$("#invChildYrtoterdiv").css("display","none"); 
		ret.prop("disabled",true);  
		child.prop("disabled",true);
	} 
return true;

}*/
 
function validateRegInvPlan(){
	
	if($("#txtFldDlgAnyRegInvPlan").val() == "Y"){  
		if(!(validateFocusFlds('Investment_Dialog','txtFldDlgAnyRegInvPlanAmt', IPINVST_AMT))) return;
		if(!(validateFocusFlds('Investment_Dialog','selDlgInvFreq',IPINVST_FREQ))) return;
		if(!(validateFocusFlds('Investment_Dialog','txtFldDlgNoOfYrsRegInv', IPINST_NOOFYRS))) return;
//		if(!(validateFocusFlds('Investment_Dialog','txtFldDlgTotNoOfYrsStayInv', IPINST_YRSTOSTAY))) return;
	}
	return true;
}

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgAnyRegInvPlanAmt,#selDlgInvFreq,#txtFldDlgNoOfYrsRegInv,#txtFldDlgTotNoOfYrsStayInv").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});


function calInvSumryRow(){
	 
	 var $rowCount = fnaInvestmentTbl.rows().count();			
//	 var $lastRow = $("#fnaInvestmentTbl tbody tr:last");  
	 
	 /* Self*/
	 var slfBdCashCur=0,slfBdCpfOACur=0,slfBdCpfSACur=0,slfBdCpfRACur=0,slfBdSrsCur=0,slfBdTotCur=0;//Bonds Current
	 var slfBdCashReg=0,slfBdCpfOAReg=0,slfBdCpfSAReg=0,slfBdCpfRAReg=0,slfBdSrsReg=0,slfBdTotReg=0;//Bonds Regular
	 
	 var slfDivCashCur=0,slfDivCpfOACur=0,slfDivCpfSACur=0,slfDivCpfRACur=0,slfDivSrsCur=0,slfDivTotCur=0;//Dividend Current
	 var slfDivCashReg=0,slfDivCpfOAReg=0,slfDivCpfSAReg=0,slfDivCpfRAReg=0,slfDivSrsReg=0,slfDivTotReg=0;//Dividend Regular
	 
	 var slfILPCashCur=0,slfILPCpfOACur=0,slfILPCpfSACur=0,slfILPCpfRACur=0,slfILPSrsCur=0,slfILPTotCur=0;//ILP Current
	 var slfILPCashReg=0,slfILPCpfOAReg=0,slfILPCpfSAReg=0,slfILPCpfRAReg=0,slfILPSrsReg=0,slfILPTotReg=0;//ILP Regular
	
	 var slfShCashCur=0,slfShCpfOACur=0,slfShCpfSACur=0,slfShCpfRACur=0,slfShSrsCur=0,slfShTotCur=0;//Shares Current
	 var slfShCashReg=0,slfShCpfOAReg=0,slfShCpfSAReg=0,slfShCpfRAReg=0,slfShSrsReg=0,slfShTotReg=0;//Shares Regular
	
	 var slfStckCashCur=0,slfStckCpfOACur=0,slfStckCpfSACur=0,slfStckCpfRACur=0,slfStckSrsCur=0,slfStckTotCur=0;//Shares Current
	 var slfStckCashReg=0,slfStckCpfOAReg=0,slfStckCpfSAReg=0,slfStckCpfRAReg=0,slfStckSrsReg=0,slfStckTotReg=0;//Shares Regular
	
	 var slfUTCashCur=0,slfUTCpfOACur=0,slfUTCpfSACur=0,slfUTCpfRACur=0,slfUTSrsCur=0,slfUTTotCur=0;//UT Current
	 var slfUTCashReg=0,slfUTCpfOAReg=0,slfUTCpfSAReg=0,slfUTCpfRAReg=0,slfUTSrsReg=0,slfUTTotReg=0;//UT Regular
	 
	 var slfOthCashCur=0,slfOthCpfOACur=0,slfOthCpfSACur=0,slfOthCpfRACur=0,slfOthSrsCur=0,slfOthTotCur=0;//Others Current
	 var slfOthCashReg=0,slfOthCpfOAReg=0,slfOthCpfSAReg=0,slfOthCpfRAReg=0,slfOthSrsReg=0,slfOthTotReg=0;//Others Regular
	 /* */
	 
	 /* Spouse*/
	 var spsBdCashCur=0,spsBdCpfOACur=0,spsBdCpfSACur=0,spsBdCpfRACur=0,spsBdSrsCur=0,spsBdTotCur=0;//Bonds Current
	 var spsBdCashReg=0,spsBdCpfOAReg=0,spsBdCpfSAReg=0,spsBdCpfRAReg=0,spsBdSrsReg=0,spsBdTotReg=0;//Bonds Regular
	 
	 var spsDivCashCur=0,spsDivCpfOACur=0,spsDivCpfSACur=0,spsDivCpfRACur=0,spsDivSrsCur=0,spsDivTotCur=0;//Dividend Current
	 var spsDivCashReg=0,spsDivCpfOAReg=0,spsDivCpfSAReg=0,spsDivCpfRAReg=0,spsDivSrsReg=0,spsDivTotReg=0;//Dividend Regular
	 
	 var spsILPCashCur=0,spsILPCpfOACur=0,spsILPCpfSACur=0,spsILPCpfRACur=0,spsILPSrsCur=0,spsILPTotCur=0;//ILP Current
	 var spsILPCashReg=0,spsILPCpfOAReg=0,spsILPCpfSAReg=0,spsILPCpfRAReg=0,spsILPSrsReg=0,spsILPTotReg=0;//ILP Regular
 
	 var spsShCashCur=0,spsShCpfOACur=0,spsShCpfSACur=0,spsShCpfRACur=0,spsShSrsCur=0,spsShTotCur=0;//Shares Current
	 var spsShCashReg=0,spsShCpfOAReg=0,spsShCpfSAReg=0,spsShCpfRAReg=0,spsShSrsReg=0,spsShTotReg=0;//Shares Regular
	
	 var spsStckCashCur=0,spsStckCpfOACur=0,spsStckCpfSACur=0,spsStckCpfRACur=0,spsStckSrsCur=0,spsStckTotCur=0;//Shares Current
	 var spsStckCashReg=0,spsStckCpfOAReg=0,spsStckCpfSAReg=0,spsStckCpfRAReg=0,spsStckSrsReg=0,spsStckTotReg=0;//Shares Regular
	
	 var spsUTCashCur=0,spsUTCpfOACur=0,spsUTCpfSACur=0,spsUTCpfRACur=0,spsUTSrsCur=0,spsUTTotCur=0;//UT Current
	 var spsUTCashReg=0,spsUTCpfOAReg=0,spsUTCpfSAReg=0,spsUTCpfRAReg=0,spsUTSrsReg=0,spsUTTotReg=0;//UT Regular
	 
	 var spsOthCashCur=0,spsOthCpfOACur=0,spsOthCpfSACur=0,spsOthCpfRACur=0,spsOthSrsCur=0,spsOthTotCur=0;//Others Current
	 var spsOthCashReg=0,spsOthCpfOAReg=0,spsOthCpfSAReg=0,spsOthCpfRAReg=0,spsOthSrsReg=0,spsOthTotReg=0;//Others Regular
	 /* */
	 
	 /* Joint*/
	 
	 var jntBdCashCur=0,jntBdCpfOACur=0,jntBdCpfSACur=0,jntBdCpfRACur=0,jntBdSrsCur=0,jntBdTotCur=0;//Bonds Current
	 var jntBdCashReg=0,jntBdCpfOAReg=0,jntBdCpfSAReg=0,jntBdCpfRAReg=0,jntBdSrsReg=0,jntBdTotReg=0;//Bonds Regular
	 
	 var jntDivCashCur=0,jntDivCpfOACur=0,jntDivCpfSACur=0,jntDivCpfRACur=0,jntDivSrsCur=0,jntDivTotCur=0;//Dividend Current
	 var jntDivCashReg=0,jntDivCpfOAReg=0,jntDivCpfSAReg=0,jntDivCpfRAReg=0,jntDivSrsReg=0,jntDivTotReg=0;//Dividend Regular
	 
	 var jntILPCashCur=0,jntILPCpfOACur=0,jntILPCpfSACur=0,jntILPCpfRACur=0,jntILPSrsCur=0,jntILPTotCur=0;//ILP Current
	 var jntILPCashReg=0,jntILPCpfOAReg=0,jntILPCpfSAReg=0,jntILPCpfRAReg=0,jntILPSrsReg=0,jntILPTotReg=0;//ILP Regular
	 
	 var jntShCashCur=0,jntShCpfOACur=0,jntShCpfSACur=0,jntShCpfRACur=0,jntShSrsCur=0,jntShTotCur=0;//Shares Current
	 var jntShCashReg=0,jntShCpfOAReg=0,jntShCpfSAReg=0,jntShCpfRAReg=0,jntShSrsReg=0,jntShTotReg=0;//Shares Regular

	 var jntStckCashCur=0,jntStckCpfOACur=0,jntStckCpfSACur=0,jntStckCpfRACur=0,jntStckSrsCur=0,jntStckTotCur=0;//Shares Current
	 var jntStckCashReg=0,jntStckCpfOAReg=0,jntStckCpfSAReg=0,jntStckCpfRAReg=0,jntStckSrsReg=0,jntStckTotReg=0;//Shares Regular

	 var jntUTCashCur=0,jntUTCpfOACur=0,jntUTCpfSACur=0,jntUTCpfRACur=0,jntUTSrsCur=0,jntUTTotCur=0;//UT Current
	 var jntUTCashReg=0,jntUTCpfOAReg=0,jntUTCpfSAReg=0,jntUTCpfRAReg=0,jntUTSrsReg=0,jntUTTotReg=0;//UT Regular
	 
	 var jntOthCashCur=0,jntOthCpfOACur=0,jntOthCpfSACur=0,jntOthCpfRACur=0,jntOthSrsCur=0,jntOthTotCur=0;//Others Current
	 var jntOthCashReg=0,jntOthCpfOAReg=0,jntOthCpfSAReg=0,jntOthCpfRAReg=0,jntOthSrsReg=0,jntOthTotReg=0;//Others Regular
	 
	 /*Inv Summary */
	 var $selfdiv = $("#divforInvestmentSummary").find("div[id=genInvestSummarySelf]");
	 var $spousediv = $("#divforInvestmentSummary").find("div[id=genInvestSummarySpouse]");
	 var $jointdiv = $("#divforInvestmentSummary").find("div[id=genInvestSummaryFamily]");
	  
	 
	 /*Cpf Summary*/ 
	 var $cpfselfdiv = $("#divforCpfSummary").find("div[id=genCpfSummarySelf]");
	 var $cpfspousediv = $("#divforCpfSummary").find("div[id=genCpfSummarySpouse]");
	 var $cpfjointdiv = $("#divforCpfSummary").find("div[id=genCpfSummaryFamily]"); 
	 /*SRS Summary*/  
	 var $srsselfdiv = $("#divforSRSSummary").find("div[id=genSRSSummarySelf]");
	 var $srsspousediv = $("#divforSRSSummary").find("div[id=genSRSSummarySpouse]");
	 var $srsjointdiv = $("#divforSRSSummary").find("div[id=genSRSSummaryFamily]");
	 
	 
	 var $mergeSlfdiv = $("div#generateItSelf").html();
	 var $mergeSpsdiv = $("div#generateItSpouse").html();
	 var $mergeFamdiv = $("div#generateItFamily").html();
	 

	 $spousediv.html(""); 
	 $jointdiv.html(""); 
	 $selfdiv.html("");
	 
	 $cpfselfdiv.html("");
	 $cpfspousediv.html("");
	 $cpfjointdiv.html("");
	 
	 $srsselfdiv.html("");
	 $srsspousediv.html("");
	 $srsjointdiv.html("");
	 
	 
	 var $catg="",$paymentMode="",$reinvest="",$mode="";
//	 $("#divforInvestmentSummary").css("display","none");
	 $("#divforInvestmentSummary").find("input").val("").attr("readonly","true"); 
	 $("#divforCpfSummary").css("display","none");
	 $("#divforCpfSummary").find("input").val(""); 
	 $("#divforSRSSummary").css("display","none");
	 $("#divforSRSSummary").find("input").val("");
	 $("#INVSUM_NORECFOUND").css("display","block");
	 
	  
	 
	 
 if($rowCount >0){
	
	
	 
 $("#fnaInvestmentTbl tbody tr").each(function(count,value){
	 
	 $mode=$(this).find("td:eq(0)").find("input:eq(0)").val();
	 
	 if($mode != "D"){
		 
	 }
	 
	 var $ownership=$(this).find("td:eq(2)").find("select:eq(0)").val();
	 $catg=$(this).find("td:eq(3)").find("select:eq(0)").val(); 
	 $paymentMode=$(this).find("td:eq(10)").find("select:eq(0)").val();
	 var $currnav = $(this).find("td:eq(14)").find("input:eq(0)").val();
	 $reinvest 	=$(this).find("td:eq(16)").find('select:eq(0)').val();
	 
	 var $divfreq = $(this).find("td:eq(20)").find("select:eq(0)").val();
	 var $divamount = $(this).find("td:eq(21)").find("input:eq(0)").val();
	 
	 var $rspexist = $(this).find("td:eq(22)").find("select:eq(0)").val();	 
	 var $rspfreq= $(this).find("td:eq(23)").find("select:eq(0)").val();
	 var $rspamount= $(this).find("td:eq(24)").find("input:eq(0)").val();
	 var $rspyrs= $(this).find("td:eq(25)").find("input:eq(0)").val();

	 var TopUpAmt=0; 

	 if(!isEmpty($rspfreq)){

		 if($rspfreq == 'ANNUAL'){
			 TopUpAmt=1;
		 }else if($rspfreq == 'SEMI ANNUAL'){
			 TopUpAmt=2;
		 }else if($rspfreq == 'QUARTERLY'){
			 TopUpAmt=4;
		 }else if($rspfreq == 'MONTHLY'){
			 TopUpAmt=12;
		 }else if($rspfreq == 'SINGLE'){
			 TopUpAmt=0;
		 }
	}
 	
//	 && ($reinvest=="N")
	if(!isEmpty($paymentMode) && $mode != "D"){
		 $("#divforInvestmentSummary").css("display","block");   

		if($ownership == "Self"){
			
			$selfdiv.html($mergeSlfdiv); 
			$selfdiv.find("input[id=txtFldISOwnership]").val("SELF");

			
			 if($catg=='Bonds'){  
				 
				   if($paymentMode == 'Cash'){
					   slfBdCashCur +=Number($currnav);   
					   slfBdCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfBdCpfOACur +=Number($currnav);   
					   slfBdCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfBdCpfSACur +=Number($currnav);   
					   slfBdCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfBdCpfRACur +=Number($currnav);   
					   slfBdCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfBdSrsCur +=Number($currnav);   
					   slfBdSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfBdTotCur=slfBdCashCur+slfBdCpfOACur+slfBdCpfSACur+slfBdCpfRACur+slfBdSrsCur;
				   slfBdTotReg=slfBdCashReg+slfBdCpfOAReg+slfBdCpfSAReg+slfBdCpfRAReg+slfBdSrsReg;
				   
				 	
			   }
			 
			  $("#txtFldISSelfbondsCurCash").val(remPriceAfDec(slfBdCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfbondsCurCash").val(currencyFormat(slfBdCashCur)); 
			   
			   $("#txtFldISSelfbondsCurCpfoa").val(remPriceAfDec(slfBdCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCurCpfoa").val(currencyFormat(slfBdCpfOACur)); 
			   
			   $("#txtFldISSelfbondsCurCpfsa").val(remPriceAfDec(slfBdCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCurCpfsa").val(currencyFormat(slfBdCpfSACur)); 
			   
			   $("#txtFldISSelfbondsCurCpfra").val(remPriceAfDec(slfBdCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCurCpfra").val(currencyFormat(slfBdCpfRACur));
			   
			   $("#txtFldISSelfbondsCursrs").val(remPriceAfDec(slfBdSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCursrs").val(currencyFormat(slfBdSrsCur));
			   
			   $("#txtFldISSelfbondsCurTot").val(remPriceAfDec(slfBdTotCur)).attr("readonly","true");
			   $("#txtFldISSelfbondsCurTot").val(currencyFormat(slfBdTotCur));
			   
			   $("#txtFldISSelfbondsRegCash").val(remPriceAfDec(slfBdCashReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegCash").val(currencyFormat(slfBdCashReg));
			   
			   $("#txtFldISSelfbondsRegCpfoa").val(remPriceAfDec(slfBdCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegCpfoa").val(currencyFormat(slfBdCpfOAReg));
			   
			   $("#txtFldISSelfbondsRegCpfsa").val(remPriceAfDec(slfBdCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegCpfsa").val(currencyFormat(slfBdCpfSAReg));
			   
			   $("#txtFldISSelfbondsRegCpfra").val(remPriceAfDec(slfBdCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegCpfra").val(currencyFormat(slfBdCpfRAReg));
			   
			   $("#txtFldISSelfbondsRegsrs").val(remPriceAfDec(slfBdSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegsrs").val(currencyFormat(slfBdSrsReg));
			   
			   $("#txtFldISSelfbondsRegTot").val(remPriceAfDec(slfBdTotReg)).attr("readonly","true");
			   $("#txtFldISSelfbondsRegTot").val(currencyFormat(slfBdTotReg));
		
			 
			 if(!isEmpty($catg) && $reinvest == "N"){ 
				 
				   if($paymentMode == 'Cash'){
//					   slfDivCashCur +=Number($currnav);   
					   slfDivCashReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
//					   slfDivCpfOACur +=Number($currnav);   
					   slfDivCpfOAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
//					   slfDivCpfSACur +=Number($currnav);   
					   slfDivCpfSAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
//					   slfDivCpfRACur +=Number($currnav);   
					   slfDivCpfRAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'SRS'){
//					   slfDivSrsCur +=Number($currnav);   
					   slfDivSrsReg +=Number($divamount); 
		     	   } 
				   
//				   slfDivTotCur=slfDivCashCur+slfDivCpfOACur+slfDivCpfSACur+slfDivCpfRACur+slfDivSrsCur;
				   slfDivTotReg=slfDivCashReg+slfDivCpfOAReg+slfDivCpfSAReg+slfDivCpfRAReg+slfDivSrsReg;
				   
			   } 
			 
			 if(!isEmpty($catg) && $catg == "Dividend" && $reinvest != "N"){ 
				 
				   if($paymentMode == 'Cash'){
					   slfDivCashCur +=Number($currnav);   
//					   slfDivCashReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfDivCpfOACur +=Number($currnav);   
//					   slfDivCpfOAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfDivCpfSACur +=Number($currnav);   
//					   slfDivCpfSAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfDivCpfRACur +=Number($currnav);   
//					   slfDivCpfRAReg +=Number($divamount); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfDivSrsCur +=Number($currnav);   
//					   slfDivSrsReg +=Number($divamount); 
		     	   } 
				   
				   slfDivTotCur=slfDivCashCur+slfDivCpfOACur+slfDivCpfSACur+slfDivCpfRACur+slfDivSrsCur;
//				   slfDivTotReg=slfDivCashReg+slfDivCpfOAReg+slfDivCpfSAReg+slfDivCpfRAReg+slfDivSrsReg;
				   
			   }
			 

			   $("#txtFldISSelfdivCurCash").val(remPriceAfDec(slfDivCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfdivCurCash").val(currencyFormat(slfDivCashCur)); 
			   
			   $("#txtFldISSelfdivCurCpfoa").val(remPriceAfDec(slfDivCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfdivCurCpfoa").val(currencyFormat(slfDivCpfOACur)); 
			   
			   $("#txtFldISSelfdivCurCpfsa").val(remPriceAfDec(slfDivCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfdivCurCpfsa").val(currencyFormat(slfDivCpfSACur)); 
			   
			   
			   $("#txtFldISSelfdivCurCpfra").val(remPriceAfDec(slfDivCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfdivCurCpfra").val(currencyFormat(slfDivCpfRACur)); 
			   
			   $("#txtFldISSelfdivCursrs").val(remPriceAfDec(slfDivSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfdivCursrs").val(currencyFormat(slfDivSrsCur)); 
			   
			   $("#txtFldISSelfdivCurTot").val(remPriceAfDec(slfDivTotCur)).attr("readonly","true");
			   $("#txtFldISSelfdivCurTot").val(currencyFormat(slfDivTotCur)); 
			   
			   $("#txtFldISSelfdivRegCash").val(remPriceAfDec(slfDivCashReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegCash").val(currencyFormat(slfDivCashReg)); 
			   
			   $("#txtFldISSelfdivRegCpfoa").val(remPriceAfDec(slfDivCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegCpfoa").val(currencyFormat(slfDivCpfOAReg)); 
			   
			   $("#txtFldISSelfdivRegCpfsa").val(remPriceAfDec(slfDivCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegCpfsa").val(currencyFormat(slfDivCpfSAReg));
			   
			   $("#txtFldISSelfdivRegCpfra").val(remPriceAfDec(slfDivCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegCpfra").val(currencyFormat(slfDivCpfRAReg));
			   
			   $("#txtFldISSelfdivRegsrs").val(remPriceAfDec(slfDivSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegsrs").val(currencyFormat(slfDivSrsReg));
			   
			   $("#txtFldISSelfdivRegTot").val(remPriceAfDec(slfDivTotReg)).attr("readonly","true");
			   $("#txtFldISSelfdivRegTot").val(currencyFormat(slfDivTotReg));
			   
			   
			   if($catg=='ILP'){  
				   if($paymentMode == 'Cash'){
					   slfILPCashCur +=Number($currnav);   
					   slfILPCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfILPCpfOACur +=Number($currnav);   
					   slfILPCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfILPCpfSACur +=Number($currnav);   
					   slfILPCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfILPCpfRACur +=Number($currnav);   
					   slfILPCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfILPSrsCur +=Number($currnav);   
					   slfILPSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfILPTotCur=slfILPCashCur+slfILPCpfOACur+slfILPCpfSACur+slfILPCpfRACur+slfILPSrsCur;
				   slfILPTotReg=slfILPCashReg+slfILPCpfOAReg+slfILPCpfSAReg+slfILPCpfRAReg+slfILPSrsReg; 
			   } 
			 
			  
			   $("#txtFldISSelfilpCurCash").val(remPriceAfDec(slfILPCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfilpCurCash").val(currencyFormat(slfILPCashCur)); 
			   
			   $("#txtFldISSelfilpCurCpfoa").val(remPriceAfDec(slfILPCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfilpCurCpfoa").val(currencyFormat(slfILPCpfOACur)); 
			   
			   $("#txtFldISSelfilpCurCpfsa").val(remPriceAfDec(slfILPCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfilpCurCpfsa").val(currencyFormat(slfILPCpfSACur)); 
			   
			   $("#txtFldISSelfilpCurCpfra").val(remPriceAfDec(slfILPCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfilpCurCpfra").val(currencyFormat(slfILPCpfRACur)); 
			   
			   $("#txtFldISSelfilpCursrs").val(remPriceAfDec(slfILPSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfilpCursrs").val(currencyFormat(slfILPSrsCur)); 
			   
			   $("#txtFldISSelfilpCurTot").val(remPriceAfDec(slfILPTotCur)).attr("readonly","true");
			   $("#txtFldISSelfilpCurTot").val(currencyFormat(slfILPTotCur)); 
			   
			   $("#txtFldISSelfilpRegCash").val(remPriceAfDec(slfILPCashReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegCash").val(currencyFormat(slfILPCashReg)); 
			   
			   $("#txtFldISSelfilpRegCpfoa").val(remPriceAfDec(slfILPCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegCpfoa").val(currencyFormat(slfILPCpfOAReg)); 
			   
			   $("#txtFldISSelfilpRegCpfsa").val(remPriceAfDec(slfILPCpfSAReg)).attr("readonly","true");
			   $("txtFldISSelfilpRegCpfsa").val(currencyFormat(slfILPCpfSAReg)); 
			   
			   $("#txtFldISSelfilpRegCpfra").val(remPriceAfDec(slfILPCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegCpfra").val(currencyFormat(slfILPCpfRAReg)); 
			   
			   $("#txtFldISSelfilpRegsrs").val(remPriceAfDec(slfILPSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegsrs").val(currencyFormat(slfILPSrsReg)); 
			   
			   $("#txtFldISSelfilpRegTot").val(remPriceAfDec(slfILPTotReg)).attr("readonly","true");
			   $("#txtFldISSelfilpRegTot").val(currencyFormat(slfILPTotReg));
			   
			   if($catg=='Shares'){  
				   if($paymentMode == 'Cash'){
					   slfShCashCur +=Number($currnav);   
					   slfShCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfShCpfOACur +=Number($currnav);   
					   slfShCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfShCpfSACur +=Number($currnav);   
					   slfShCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfShCpfRACur +=Number($currnav);   
					   slfShCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfShSrsCur +=Number($currnav);   
					   slfShSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfShTotCur=slfShCashCur+slfShCpfOACur+slfShCpfSACur+slfShCpfRACur+slfShSrsCur;
				   slfShTotReg=slfShCashReg+slfShCpfOAReg+slfShCpfSAReg+slfShCpfRAReg+slfShSrsReg;
				   
				   
			   } 
			 
			   $("#txtFldISSelfsharesCurCash").val(remPriceAfDec(slfShCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfsharesCurCash").val(currencyFormat(slfShCashCur)); 
			   
			   $("#txtFldISSelfsharesCurCpfoa").val(remPriceAfDec(slfShCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCurCpfoa").val(currencyFormat(slfShCpfOACur)); 
			   
			   $("#txtFldISSelfsharesCurCpfsa").val(remPriceAfDec(slfShCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCurCpfsa").val(currencyFormat(slfShCpfSACur)); 
			   
			   $("#txtFldISSelfsharesCurCpfra").val(remPriceAfDec(slfShCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCurCpfra").val(currencyFormat(slfShCpfRACur)); 
			   
			   $("#txtFldISSelfsharesCursrs").val(remPriceAfDec(slfShSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCursrs").val(currencyFormat(slfShSrsCur)); 
			   
			   $("#txtFldISSelfsharesCurTot").val(remPriceAfDec(slfShTotCur)).attr("readonly","true");
			   $("#txtFldISSelfsharesCurTot").val(currencyFormat(slfShTotCur)); 
			   
			   $("#txtFldISSelfsharesRegCash").val(remPriceAfDec(slfShCashReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegCash").val(currencyFormat(slfShCashReg)); 
			   
			   $("#txtFldISSelfsharesRegCpfoa").val(remPriceAfDec(slfShCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegCpfoa").val(currencyFormat(slfShCpfOAReg)); 
			   
			   $("#txtFldISSelfsharesRegCpfsa").val(remPriceAfDec(slfShCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegCpfsa").val(currencyFormat(slfShCpfSAReg)); 
			   
			   $("#txtFldISSelfsharesRegCpfra").val(remPriceAfDec(slfShCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegCpfra").val(currencyFormat(slfShCpfRAReg)); 
			   
			   $("#txtFldISSelfsharesRegsrs").val(remPriceAfDec(slfShSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegsrs").val(currencyFormat(slfShSrsReg)); 
			   
			   $("#txtFldISSelfsharesRegTot").val(remPriceAfDec(slfShTotReg)).attr("readonly","true");
			   $("#txtFldISSelfsharesRegTot").val(currencyFormat(slfShTotReg)); 

			   if($catg=='Stocks'){  
				   if($paymentMode == 'Cash'){
					   slfStckCashCur +=Number($currnav);   
					   slfStckCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfStckCpfOACur +=Number($currnav);   
					   slfStckCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfStckCpfSACur +=Number($currnav);   
					   slfStckCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfStckCpfRACur +=Number($currnav);   
					   slfStckCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfStckSrsCur +=Number($currnav);   
					   slfStckSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfStckTotCur=slfStckCashCur+slfStckCpfOACur+slfStckCpfSACur+slfStckCpfRACur+slfStckSrsCur;
				   slfStckTotReg=slfStckCashReg+slfStckCpfOAReg+slfStckCpfSAReg+slfStckCpfRAReg+slfStckSrsReg;
				   
				   
			   } 
			 
			   $("#txtFldISSelfstocksCurCash").val(remPriceAfDec(slfStckCashCur)).attr("readonly","true"); 
			   $("#txtFldISSelfstocksCurCash").val(currencyFormat(slfStckCashCur)); 
			   
			   $("#txtFldISSelfstocksCurCpfoa").val(remPriceAfDec(slfStckCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCurCpfoa").val(currencyFormat(slfStckCpfOACur)); 
			   
			   $("#txtFldISSelfstocksCurCpfsa").val(remPriceAfDec(slfStckCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCurCpfsa").val(currencyFormat(slfStckCpfSACur)); 
			   
			   $("#txtFldISSelfstocksCurCpfra").val(remPriceAfDec(slfStckCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCurCpfra").val(currencyFormat(slfStckCpfRACur)); 
			   
			   $("#txtFldISSelfstocksCursrs").val(remPriceAfDec(slfStckSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCursrs").val(currencyFormat(slfStckSrsCur)); 
			   
			   $("#txtFldISSelfstocksCurTot").val(remPriceAfDec(slfStckTotCur)).attr("readonly","true");
			   $("#txtFldISSelfstocksCurTot").val(currencyFormat(slfStckTotCur)); 
			   
			   $("#txtFldISSelfstocksRegCash").val(remPriceAfDec(slfStckCashReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegCash").val(currencyFormat(slfStckCashReg)); 
			   
			   $("#txtFldISSelfstocksRegCpfoa").val(remPriceAfDec(slfStckCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegCpfoa").val(currencyFormat(slfStckCpfOAReg)); 
			   
			   $("#txtFldISSelfstocksRegCpfsa").val(remPriceAfDec(slfStckCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegCpfsa").val(currencyFormat(slfStckCpfSAReg)); 
			   
			   $("#txtFldISSelfstocksRegCpfra").val(remPriceAfDec(slfStckCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegCpfra").val(currencyFormat(slfStckCpfRAReg)); 
			   
			   $("#txtFldISSelfstocksRegsrs").val(remPriceAfDec(slfStckSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegsrs").val(currencyFormat(slfStckSrsReg)); 
			   
			   $("#txtFldISSelfstocksRegTot").val(remPriceAfDec(slfStckTotReg)).attr("readonly","true");
			   $("#txtFldISSelfstocksRegTot").val(currencyFormat(slfStckTotReg)); 
			   
			 /*Set Self-UTs Values*/
			 if($catg=='UT'){  
				 
				   if($paymentMode == 'Cash'){
//					   =Number($(this).find("td:eq(14)").find("input:eq(0)").val() * $(this).find("td:eq(15)").find("input:eq(0)").val());
					   slfUTCashCur +=Number($currnav);  //current nav
					   slfUTCashReg +=Number($rspamount * TopUpAmt); //RSA Amount * Topupamt(Freq)
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   slfUTCpfOACur +=Number($currnav);   
					   slfUTCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   slfUTCpfSACur +=Number($currnav);   
					   slfUTCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   slfUTCpfRACur +=Number($currnav);   
					   slfUTCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   slfUTSrsCur +=Number($currnav);   
					   slfUTSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   slfUTTotCur=slfUTCashCur+slfUTCpfOACur+slfUTCpfSACur+slfUTCpfRACur+slfUTSrsCur;
				   slfUTTotReg=slfUTCashReg+slfUTCpfOAReg+slfUTCpfSAReg+slfUTCpfRAReg+slfUTSrsReg;
				   
				 
			   } 
			 
			  $("#txtFldISSelfutsCurCash").val(remPriceAfDec(slfUTCashCur)).attr("readonly","true"); 
			  $("#txtFldISSelfutsCurCash").val(currencyFormat(slfUTCashCur));
			  
			   $("#txtFldISSelfutsCurCpfoa").val(remPriceAfDec(slfUTCpfOACur)).attr("readonly","true");
			   $("#txtFldISSelfutsCurCpfoa").val(currencyFormat(slfUTCpfOACur));
			   
			   $("#txtFldISSelfutsCurCpfsa").val(remPriceAfDec(slfUTCpfSACur)).attr("readonly","true");
			   $("#txtFldISSelfutsCurCpfsa").val(currencyFormat(slfUTCpfSACur));
			   
			   $("#txtFldISSelfutsCurCpfra").val(remPriceAfDec(slfUTCpfRACur)).attr("readonly","true");
			   $("#txtFldISSelfutsCurCpfra").val(currencyFormat(slfUTCpfRACur));
			   
			   $("#txtFldISSelfutsCursrs").val(remPriceAfDec(slfUTSrsCur)).attr("readonly","true");
			   $("#txtFldISSelfutsCursrs").val(currencyFormat(slfUTSrsCur));
			   
			   $("#txtFldISSelfutsCurTot").val(remPriceAfDec(slfUTTotCur)).attr("readonly","true");
			   $("#txtFldISSelfutsCurTot").val(currencyFormat(slfUTTotCur));
			
			   $("#txtFldISSelfutsRegCash").val(remPriceAfDec(slfUTCashReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegCash").val(currencyFormat(slfUTCashReg));
			   
			   $("#txtFldISSelfutsRegCpfoa").val(remPriceAfDec(slfUTCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegCpfoa").val(currencyFormat(slfUTCpfOAReg));
			   
			   $("#txtFldISSelfutsRegCpfsa").val(remPriceAfDec(slfUTCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegCpfsa").val(currencyFormat(slfUTCpfSAReg));
			   
			   $("#txtFldISSelfutsRegCpfra").val(remPriceAfDec(slfUTCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegCpfra").val(currencyFormat(slfUTCpfRAReg));
			   
			   $("#txtFldISSelfutsRegsrs").val(remPriceAfDec(slfUTSrsReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegsrs").val(currencyFormat(slfUTSrsReg));
			   
			   $("#txtFldISSelfutsRegTot").val(remPriceAfDec(slfUTTotReg)).attr("readonly","true");
			   $("#txtFldISSelfutsRegTot").val(currencyFormat(slfUTTotReg)); 
			 
				 if($catg=='Others'){  
					 
					   if($paymentMode == 'Cash'){
//						   =Number($(this).find("td:eq(14)").find("input:eq(0)").val() * $(this).find("td:eq(15)").find("input:eq(0)").val());
						   slfOthCashCur +=Number($currnav);  //current nav
						   slfOthCashReg +=Number($rspamount * TopUpAmt); //RSA Amount * Topupamt(Freq)
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   slfOthCpfOACur +=Number($currnav);   
						   slfOthCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   slfOthCpfSACur +=Number($currnav);   
						   slfOthCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   slfOthCpfRACur +=Number($currnav);   
						   slfOthCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   slfOthSrsCur +=Number($currnav);   
						   slfOthSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   slfOthTotCur=slfOthCashCur+slfOthCpfOACur+slfOthCpfSACur+slfOthCpfRACur+slfOthSrsCur;
					   slfOthTotReg=slfOthCashReg+slfOthCpfOAReg+slfOthCpfSAReg+slfOthCpfRAReg+slfOthSrsReg;
					   
					 
				   } 
				 
				  $("#txtFldISSelfothersCurCash").val(remPriceAfDec(slfOthCashCur)).attr("readonly","true"); 
				  $("#txtFldISSelfothersCurCash").val(currencyFormat(slfOthCashCur));
				  
				   $("#txtFldISSelfothersCurCpfoa").val(remPriceAfDec(slfOthCpfOACur)).attr("readonly","true");
				   $("#txtFldISSelfothersCurCpfoa").val(currencyFormat(slfOthCpfOACur));
				   
				   $("#txtFldISSelfothersCurCpfsa").val(remPriceAfDec(slfOthCpfSACur)).attr("readonly","true");
				   $("#txtFldISSelfothersCurCpfsa").val(currencyFormat(slfOthCpfSACur));
				   
				   $("#txtFldISSelfothersCurCpfra").val(remPriceAfDec(slfOthCpfRACur)).attr("readonly","true");
				   $("#txtFldISSelfothersCurCpfra").val(currencyFormat(slfOthCpfRACur));
				   
				   $("#txtFldISSelfothersCursrs").val(remPriceAfDec(slfOthSrsCur)).attr("readonly","true");
				   $("#txtFldISSelfothersCursrs").val(currencyFormat(slfOthSrsCur));
				   
				   $("#txtFldISSelfothersCurTot").val(remPriceAfDec(slfOthTotCur)).attr("readonly","true");
				   $("#txtFldISSelfothersCurTot").val(currencyFormat(slfOthTotCur));
				
				   $("#txtFldISSelfothersRegCash").val(remPriceAfDec(slfOthCashReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegCash").val(currencyFormat(slfOthCashReg));
				   
				   $("#txtFldISSelfothersRegCpfoa").val(remPriceAfDec(slfOthCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegCpfoa").val(currencyFormat(slfOthCpfOAReg));
				   
				   $("#txtFldISSelfothersRegCpfsa").val(remPriceAfDec(slfOthCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegCpfsa").val(currencyFormat(slfOthCpfSAReg));
				   
				   $("#txtFldISSelfothersRegCpfra").val(remPriceAfDec(slfOthCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegCpfra").val(currencyFormat(slfOthCpfRAReg));
				   
				   $("#txtFldISSelfothersRegsrs").val(remPriceAfDec(slfOthSrsReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegsrs").val(currencyFormat(slfOthSrsReg));
				   
				   $("#txtFldISSelfothersRegTot").val(remPriceAfDec(slfOthTotReg)).attr("readonly","true");
				   $("#txtFldISSelfothersRegTot").val(currencyFormat(slfOthTotReg)); 
				 
			   
			   /*Total - Horizontal */
			   
			   var slfOthCashCurTot =slfBdCashCur+slfDivCashCur+slfILPCashCur+slfShCashCur+slfStckCashCur+slfUTCashCur+slfOthCashCur;
			   var slfOthCashRegTot =slfBdCashReg+slfDivCashReg+slfILPCashReg+slfShCashReg+slfStckCashReg+slfUTCashReg+slfOthCashReg;
			   
			   var slfOthCpfOACurTot =slfBdCpfOACur+slfDivCpfOACur+slfILPCpfOACur+slfShCpfOACur+slfStckCpfOACur+slfUTCpfOACur+slfOthCpfOACur;
			   var slfOthCpfOARegTot =slfBdCpfOAReg+slfDivCpfOAReg+slfILPCpfOAReg+slfShCpfOAReg+slfStckCpfOAReg+slfUTCpfOAReg+slfOthCpfOAReg;
			   
			   var slfOthCpfSACurTot =slfBdCpfSACur+slfDivCpfSACur+slfILPCpfSACur+slfShCpfSACur+slfStckCpfSACur+slfUTCpfSACur+slfOthCpfSACur;
			   var slfOthCpfSARegTot =slfBdCpfSAReg+slfDivCpfSAReg+slfILPCpfSAReg+slfShCpfSAReg+slfStckCpfSAReg+slfUTCpfSAReg+slfOthCpfSAReg;
			   
			   var slfOthCpfRACurTot =slfBdCpfRACur+slfDivCpfRACur+slfILPCpfRACur+slfShCpfRACur+slfStckCpfRACur+slfUTCpfRACur+slfOthCpfRACur;
			   var slfOthCpfRARegTot =slfBdCpfRAReg+slfDivCpfRAReg+slfILPCpfRAReg+slfShCpfRAReg+slfStckCpfRAReg+slfUTCpfRAReg+slfOthCpfRAReg;
			   
			   var slfOthSrsCurTot =slfBdSrsCur+slfDivSrsCur+slfILPSrsCur+slfShSrsCur+slfStckSrsCur+slfUTSrsCur+slfOthSrsCur;
			   var slfOthSrsRegTot =slfBdSrsReg+slfDivSrsReg+slfILPSrsReg+slfShSrsReg+slfStckSrsReg+slfUTSrsReg+slfOthSrsReg;
			   
			   /*Total - Verticle */
			   var slfOthTotCurVTot =slfOthCashCur+slfOthCpfOACur+slfOthCpfSACur+slfOthCpfRACur+slfOthSrsCur;
			   var slfOthTotRegVTot=slfOthCashReg+slfOthCpfOAReg+slfOthCpfSAReg+slfOthCpfRAReg+slfOthSrsReg;
			
			   $("#txtFldISSelftotCurCash").val(remPriceAfDec(slfOthCashCurTot)).attr("readonly","true"); 
			   $("#txtFldISSelftotCurCash").val(currencyFormat(slfOthCashCurTot));
			   
			   $("#txtFldISSelftotCurCpfoa").val(remPriceAfDec(slfOthCpfOACurTot)).attr("readonly","true");
			   $("#txtFldISSelftotCurCpfoa").val(currencyFormat(slfOthCpfOACurTot));
			   
			   $("#txtFldISSelftotCurCpfsa").val(remPriceAfDec(slfOthCpfSACurTot)).attr("readonly","true");
			   $("#txtFldISSelftotCurCpfsa").val(currencyFormat(slfOthCpfSACurTot));
			   
			   $("#txtFldISSelftotCurCpfra").val(remPriceAfDec(slfOthCpfRACurTot)).attr("readonly","true");
			   $("#txtFldISSelftotCurCpfra").val(currencyFormat(slfOthCpfRACurTot));
			   
			   $("#txtFldISSelftotCursrs").val(remPriceAfDec(slfOthSrsCurTot)).attr("readonly","true");
			   $("#txtFldISSelftotCursrs").val(currencyFormat(slfOthSrsCurTot));
			   
			   $("#txtFldISSelftotCurTot").val(remPriceAfDec(slfOthTotCurVTot)).attr("readonly","true");
			   $("#txtFldISSelftotCurTot").val(currencyFormat(slfOthTotCurVTot));
			   
			   $("#txtFldISSelftotRegCash").val(remPriceAfDec(slfOthCashRegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegCash").val(currencyFormat(slfOthCashRegTot));
			   
			   $("#txtFldISSelftotRegCpfoa").val(remPriceAfDec(slfOthCpfOARegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegCpfoa").val(currencyFormat(slfOthCpfOARegTot));
			   
			   $("#txtFldISSelftotRegCpfsa").val(remPriceAfDec(slfOthCpfSARegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegCpfsa").val(currencyFormat(slfOthCpfSARegTot));
			   
			   $("#txtFldISSelftotRegCpfra").val(remPriceAfDec(slfOthCpfRARegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegCpfra").val(currencyFormat(slfOthCpfRARegTot));
			   
			   $("#txtFldISSelftotRegsrs").val(remPriceAfDec(slfOthSrsRegTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegsrs").val(currencyFormat(slfOthSrsRegTot));
			   
			   $("#txtFldISSelftotRegTot").val(remPriceAfDec(slfOthTotRegVTot)).attr("readonly","true");
			   $("#txtFldISSelftotRegTot").val(currencyFormat(slfOthTotRegVTot));
			 
			 $selfdiv.find("div#generateItSelf").css("display","block");
			
			 if($paymentMode == 'CPFOA' || $paymentMode == 'CPFSA' || $paymentMode == 'CPFRA' || $paymentMode == 'SRS'){
				 
				 $("#divforCpfSummary").css("display","block");
				 
				 $cpfselfdiv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySelf]").clone());
			 
				 $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr").each(function(){ 
					 $(this).find('th:eq(1)').remove(); 
				 });
				  $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr:even").each(function(){ 
						$(this).addClass("even");
						if($(this).hasClass("even")){ 
							 $(this).find('td:eq(2)').remove(); 
						}
				  });
				  
				  $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr:odd").each(function(){ 
						$(this).addClass("odd");
						if($(this).hasClass("odd")){ 
							 $(this).find('td:eq(1)').remove(); 
						}
				  });
				  
			  
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfutsCurTot").val(remPriceAfDec(slfUTCpfOACur+slfUTCpfSACur+slfUTCpfRACur+slfUTSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfutsCurTot").val(currencyFormat(slfUTCpfOACur+slfUTCpfSACur+slfUTCpfRACur+slfUTSrsCur)).attr("readonly","true");
			  
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfutsRegTot").val(remPriceAfDec(slfUTCpfOAReg+slfUTCpfSAReg+slfUTCpfRAReg+slfUTSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfutsRegTot").val(currencyFormat(slfUTCpfOAReg+slfUTCpfSAReg+slfUTCpfRAReg+slfUTSrsReg)).attr("readonly","true");
			  
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfilpCurTot").val(remPriceAfDec(slfILPCpfOACur+slfILPCpfSACur+slfILPCpfRACur+slfILPSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfilpCurTot").val(currencyFormat(slfILPCpfOACur+slfILPCpfSACur+slfILPCpfRACur+slfILPSrsCur)).attr("readonly","true");
			  
			  
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfilpRegTot").val(remPriceAfDec(slfILPCpfOAReg+slfILPCpfSAReg+slfILPCpfRAReg+slfILPSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfilpRegTot").val(currencyFormat(slfILPCpfOAReg+slfILPCpfSAReg+slfILPCpfRAReg+slfILPSrsReg)).attr("readonly","true");
			
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfsharesCurTot").val(remPriceAfDec(slfShCpfOACur+slfShCpfSACur+slfShCpfRACur+slfShSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(slfShCpfOACur+slfShCpfSACur+slfShCpfRACur+slfShSrsCur)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfsharesRegTot").val(remPriceAfDec(slfShCpfOAReg+slfShCpfSAReg+slfShCpfRAReg+slfShSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(slfShCpfOAReg+slfShCpfSAReg+slfShCpfRAReg+slfShSrsReg)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfbondsCurTot").val(remPriceAfDec(slfBdCpfOACur+slfBdCpfSACur+slfBdCpfRACur+slfBdSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(slfBdCpfOACur+slfBdCpfSACur+slfBdCpfRACur+slfBdSrsCur)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfbondsRegTot").val(remPriceAfDec(slfBdCpfOAReg+slfBdCpfSAReg+slfBdCpfRAReg+slfBdSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(slfBdCpfOAReg+slfBdCpfSAReg+slfBdCpfRAReg+slfBdSrsReg)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivCurTot").val(remPriceAfDec(slfDivCpfOACur+slfDivCpfSACur+slfDivCpfRACur+slfDivSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivCurTot").val(currencyFormat(slfDivCpfOACur+slfDivCpfSACur+slfDivCpfRACur+slfDivSrsCur)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivRegTot").val(remPriceAfDec(slfDivCpfOAReg+slfDivCpfSAReg+slfDivCpfRAReg+slfDivSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivRegTot").val(currencyFormat(slfDivCpfOAReg+slfDivCpfSAReg+slfDivCpfRAReg+slfDivSrsReg)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelftotCurTot").val(remPriceAfDec(slfOthCpfOACur+slfOthCpfSACur+slfOthCpfRACur+slfOthSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelfdivRegTot").val(currencyFormat(slfOthCpfOACur+slfOthCpfSACur+slfOthCpfRACur+slfOthSrsCur)).attr("readonly","true");
				
//			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelftotRegTot").val(remPriceAfDec(slfOthCpfOAReg+slfOthCpfSAReg+slfOthCpfRAReg+slfOthSrsReg)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySelf").find("input#txtFldISSelftotRegTot").val(currencyFormat(slfOthCpfOAReg+slfOthCpfSAReg+slfOthCpfRAReg+slfOthSrsReg)).attr("readonly","true");
				
			 }
			  /*SRS Summary*/
			 if($paymentMode == 'Cash' || $paymentMode == 'SRS'){
				
				 $("#divforSRSSummary").css("display","block");  
				 $srsselfdiv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySelf]").clone());
				 $("#INVSUM_NORECFOUND").css("display","none");
				 
				 
			  $("#divforSRSSummary").find("div[id=genSRSSummarySelf]").find("table tr").each(function(){ 
				  $(this).find('th:eq(2),th:eq(3),th:eq(4)').remove(); 
				 });
			  
			  $("#divforSRSSummary").find("div[id=genSRSSummarySelf]").find("table tr:even").each(function(){ 
					$(this).addClass("even");
					if($(this).hasClass("even")){ 
						  $(this).find('td:eq(3),td:eq(4),td:eq(5)').remove();
					}
			  });
			  $("#divforSRSSummary").find("div[id=genSRSSummarySelf]").find("table tr:odd").each(function(){ 
					$(this).addClass("odd");
					if($(this).hasClass("odd")){ 
						  $(this).find('td:eq(2),td:eq(3),td:eq(4)').remove();
					}
			  });  
			  
				  
				  
			  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfutsCurTot").val(remPriceAfDec(slfUTCashCur+slfUTSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfutsCurTot").val(currencyFormat(slfUTCashCur+slfUTSrsCur)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfutsRegTot").val(remPriceAfDec(slfUTCashReg+slfUTSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfutsRegTot").val(currencyFormat(slfUTCashReg+slfUTSrsReg)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfilpCurTot").val(remPriceAfDec(slfILPCashCur+slfILPSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfilpCurTot").val(currencyFormat(slfILPCashCur+slfILPSrsCur)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfilpRegTot").val(remPriceAfDec(slfILPCashReg+slfILPSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfilpRegTot").val(currencyFormat(slfILPCashReg+slfILPSrsReg)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfsharesCurTot").val(remPriceAfDec(slfShCashCur+slfShSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(slfShCashCur+slfShSrsCur)).attr("readonly","true");
				  
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfsharesRegTot").val(remPriceAfDec(slfShCashReg+slfShSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(slfShCashReg+slfShSrsReg)).attr("readonly","true");
					 
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfbondsCurTot").val(remPriceAfDec(slfBdCashCur+slfBdSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(slfBdCashCur+slfBdSrsCur)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfbondsRegTot").val(remPriceAfDec(slfBdCashReg+slfBdSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(slfBdCashReg+slfBdSrsReg)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfdivCurTot").val(remPriceAfDec(slfDivCashCur+slfDivSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfdivCurTot").val(currencyFormat(slfDivCashCur+slfDivSrsCur)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfdivRegTot").val(remPriceAfDec(slfDivCashReg+slfDivSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelfdivRegTot").val(currencyFormat(slfDivCashReg+slfDivSrsReg)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelftotCurTot").val(remPriceAfDec(slfOthCashCur+slfOthSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelftotCurTot").val(currencyFormat(slfOthCashCur+slfOthSrsCur)).attr("readonly","true");
					
//				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelftotRegTot").val(remPriceAfDec(slfOthCashReg+slfOthSrsReg)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySelf").find("input#txtFldISSelftotRegTot").val(currencyFormat(slfOthCashReg+slfOthSrsReg)).attr("readonly","true");
					
			 }
			 
		 }else if($ownership == "Spouse"){
			 $spousediv.html($mergeSpsdiv); 
			 $spousediv.find("input[id=txtFldISOwnership]").val("SPOUSE");
			 
			 if($catg=='Bonds'){  
				   if($paymentMode == 'Cash'){
					   spsBdCashCur +=Number($currnav);   
					   spsBdCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   spsBdCpfOACur +=Number($currnav);   
					   spsBdCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   spsBdCpfSACur +=Number($currnav);   
					   spsBdCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   spsBdCpfRACur +=Number($currnav);   
					   spsBdCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   spsBdSrsCur +=Number($currnav);   
					   spsBdSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   spsBdTotCur=spsBdCashCur+spsBdCpfOACur+spsBdCpfSACur+spsBdCpfRACur+spsBdSrsCur;
				   spsBdTotReg=spsBdCashReg+spsBdCpfOAReg+spsBdCpfSAReg+spsBdCpfRAReg+spsBdSrsReg;
				   
				 
			   } 
				  $("#txtFldISSpsbondsCurCash").val(remPriceAfDec(spsBdCashCur)).attr("readonly","true"); 
				  $("#txtFldISSpsbondsCurCash").val(currencyFormat(spsBdCashCur));
				   $("#txtFldISSpsbondsCurCpfoa").val(remPriceAfDec(spsBdCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCurCpfoa").val(currencyFormat(spsBdCpfOACur));
				   $("#txtFldISSpsbondsCurCpfsa").val(remPriceAfDec(spsBdCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCurCpfsa").val(currencyFormat(spsBdCpfSACur));
				   $("#txtFldISSpsbondsCurCpfra").val(remPriceAfDec(spsBdCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCurCpfra").val(currencyFormat(spsBdCpfRACur));
				   $("#txtFldISSpsbondsCursrs").val(remPriceAfDec(spsBdSrsCur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCursrs").val(currencyFormat(spsBdSrsCur));
				   $("#txtFldISSpsbondsCurTot").val(remPriceAfDec(spsBdTotCur)).attr("readonly","true");
				   $("#txtFldISSpsbondsCurTot").val(currencyFormat(spsBdTotCur));
				
				   $("#txtFldISSpsbondsRegCash").val(remPriceAfDec(spsBdCashReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegCash").val(currencyFormat(spsBdCashReg));
				   $("#txtFldISSpsbondsRegCpfoa").val(remPriceAfDec(spsBdCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegCpfoa").val(currencyFormat(spsBdCpfOAReg));
				   $("#txtFldISSpsbondsRegCpfsa").val(remPriceAfDec(spsBdCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegCpfsa").val(currencyFormat(spsBdCpfSAReg));
				   $("#txtFldISSpsbondsRegCpfra").val(remPriceAfDec(spsBdCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegCpfra").val(currencyFormat(spsBdCpfRAReg));
				   $("#txtFldISSpsbondsRegsrs").val(remPriceAfDec(spsBdSrsReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegsrs").val(currencyFormat(spsBdSrsReg));
				   $("#txtFldISSpsbondsRegTot").val(remPriceAfDec(spsBdTotReg)).attr("readonly","true");
				   $("#txtFldISSpsbondsRegTot").val(currencyFormat(spsBdTotReg));
				   
				 /*Set Spouse-Dividend Values*/
				 if(!isEmpty($catg) && $reinvest == "N"){  
					   if($paymentMode == 'Cash'){
//						   spsDivCashCur +=Number($currnav);   
						   spsDivCashReg +=Number($divamount); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
//						   spsDivCpfOACur +=Number($currnav);   
						   spsDivCpfOAReg +=Number($divamount); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
//						   spsDivCpfSACur +=Number($currnav);   
						   spsDivCpfSAReg +=Number($divamount); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
//						   spsDivCpfRACur +=Number($currnav);   
						   spsDivCpfRAReg +=Number($divamount); 
			     	   } 
					   if($paymentMode == 'SRS'){
//						   spsDivSrsCur +=Number($currnav);   
						   spsDivSrsReg +=Number($divamount); 
			     	   } 
					   
//					   spsDivTotCur=spsDivCashCur+spsDivCpfOACur+spsDivCpfSACur+spsDivCpfRACur+spsDivSrsCur;
					   spsDivTotReg=spsDivCashReg+spsDivCpfOAReg+spsDivCpfSAReg+spsDivCpfRAReg+spsDivSrsReg;
					   
				   } 
				 
				 if(!isEmpty($catg) && $catg == "Dividend" && $reinvest != "N"){  
					   if($paymentMode == 'Cash'){
						   spsDivCashCur +=Number($currnav);   
//						   spsDivCashReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   spsDivCpfOACur +=Number($currnav);   
//						   spsDivCpfOAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val()); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   spsDivCpfSACur +=Number($currnav);   
//						   spsDivCpfSAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   spsDivCpfRACur +=Number($currnav);   
//						   spsDivCpfRAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   spsDivSrsCur +=Number($currnav);   
//						   spsDivSrsReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   
					   spsDivTotCur=spsDivCashCur+spsDivCpfOACur+spsDivCpfSACur+spsDivCpfRACur+spsDivSrsCur;
//					   spsDivTotReg=spsDivCashReg+spsDivCpfOAReg+spsDivCpfSAReg+spsDivCpfRAReg+spsDivSrsReg;
					   
				   } 

				   $("#txtFldISSpsdivCurCash").val(remPriceAfDec(spsDivCashCur)).attr("readonly","true"); 
				   $("#txtFldISSpsdivCurCash").val(currencyFormat(spsDivCashCur));
				   $("#txtFldISSpsdivCurCpfoa").val(remPriceAfDec(spsDivCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpsdivCurCpfoa").val(currencyFormat(spsDivCpfOACur));
				   $("#txtFldISSpsdivCurCpfsa").val(remPriceAfDec(spsDivCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpsdivCurCpfsa").val(currencyFormat(spsDivCpfSACur));
				   $("#txtFldISSpsdivCurCpfra").val(remPriceAfDec(spsDivCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpsdivCurCpfra").val(currencyFormat(spsDivCpfRACur));
				   $("#txtFldISSpsdivCursrs").val(remPriceAfDec(spsDivSrsCur)).attr("readonly","true");
				   $("#txtFldISSpsdivCursrs").val(currencyFormat(spsDivSrsCur));
				   $("#txtFldISSpsdivCurTot").val(remPriceAfDec(spsDivTotCur)).attr("readonly","true");
				   $("#txtFldISSpsdivCurTot").val(currencyFormat(spsDivTotCur));
				
				   $("#txtFldISSpsdivRegCash").val(remPriceAfDec(spsDivCashReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegCash").val(currencyFormat(spsDivCashReg));
				   $("#txtFldISSpsdivRegCpfoa").val(remPriceAfDec(spsDivCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegCpfoa").val(currencyFormat(spsDivCpfOAReg));
				   $("#txtFldISSpsdivRegCpfsa").val(remPriceAfDec(spsDivCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegCpfsa").val(currencyFormat(spsDivCpfSAReg));
				   $("#txtFldISSpsdivRegCpfra").val(remPriceAfDec(spsDivCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegCpfra").val(currencyFormat(spsDivCpfRAReg));
				   $("#txtFldISSpsdivRegsrs").val(remPriceAfDec(spsDivSrsReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegsrs").val(currencyFormat(spsDivSrsReg));
				   $("#txtFldISSpsdivRegTot").val(remPriceAfDec(spsDivTotReg)).attr("readonly","true");
				   $("#txtFldISSpsdivRegTot").val(currencyFormat(spsDivTotReg));
			 
				   
				   if($catg=='ILP'){  
					   if($paymentMode == 'Cash'){
						   spsILPCashCur +=Number($currnav);   
						   spsILPCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   spsILPCpfOACur +=Number($currnav);   
						   spsILPCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   spsILPCpfSACur +=Number($currnav);   
						   spsILPCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   spsILPCpfRACur +=Number($currnav);   
						   spsILPCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   spsILPSrsCur +=Number($currnav);   
						   spsILPSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   spsILPTotCur=spsILPCashCur+spsILPCpfOACur+spsILPCpfSACur+spsILPCpfRACur+spsILPSrsCur;
					   spsILPTotReg=spsILPCashReg+spsILPCpfOAReg+spsILPCpfSAReg+spsILPCpfRAReg+spsILPSrsReg;
					 
				   } 
				  
				   $("#txtFldISSpsilpCurCash").val(remPriceAfDec(spsILPCashCur)).attr("readonly","true"); 
				   $("#txtFldISSpsilpCurCash").val(currencyFormat(spsILPCashCur));
				   $("#txtFldISSpsilpCurCpfoa").val(remPriceAfDec(spsILPCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpsilpCurCpfoa").val(currencyFormat(spsILPCpfOACur));
				   $("#txtFldISSpsilpCurCpfsa").val(remPriceAfDec(spsILPCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpsilpCurCpfsa").val(currencyFormat(spsILPCpfSACur));
				   $("#txtFldISSpsilpCurCpfra").val(remPriceAfDec(spsILPCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpsilpCurCpfra").val(currencyFormat(spsILPCpfRACur));
				   $("#txtFldISSpsilpCursrs").val(remPriceAfDec(spsILPSrsCur)).attr("readonly","true");
				   $("#txtFldISSpsilpCursrs").val(currencyFormat(spsILPSrsCur));
				   $("#txtFldISSpsilpCurTot").val(remPriceAfDec(spsILPTotCur)).attr("readonly","true");
				   $("#txtFldISSpsilpCurTot").val(currencyFormat(spsILPTotCur));
				
				   $("#txtFldISSpsilpRegCash").val(remPriceAfDec(spsILPCashReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegCash").val(currencyFormat(spsILPCashReg));
				   $("#txtFldISSpsilpRegCpfoa").val(remPriceAfDec(spsILPCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegCpfoa").val(currencyFormat(spsILPCpfOAReg));
				   $("#txtFldISSpsilpRegCpfsa").val(remPriceAfDec(spsILPCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegCpfsa").val(currencyFormat(spsILPCpfSAReg));
				   $("#txtFldISSpsilpRegCpfra").val(remPriceAfDec(spsILPCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegCpfra").val(currencyFormat(spsILPCpfRAReg));
				   $("#txtFldISSpsilpRegsrs").val(remPriceAfDec(spsILPSrsReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegsrs").val(currencyFormat(spsILPSrsReg));
				   $("#txtFldISSpsilpRegTot").val(remPriceAfDec(spsILPTotReg)).attr("readonly","true");
				   $("#txtFldISSpsilpRegTot").val(currencyFormat(spsILPTotReg));
				   
				 /*Set Spouse-Stocks Values*/
				 if($catg=='Shares'){  
					   if($paymentMode == 'Cash'){
						   spsShCashCur +=Number($currnav);   
						   spsShCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   spsShCpfOACur +=Number($currnav);   
						   spsShCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   spsShCpfSACur +=Number($currnav);   
						   spsShCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   spsShCpfRACur +=Number($currnav);   
						   spsShCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   spsShSrsCur +=Number($currnav);   
						   spsShSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   spsShTotCur=spsShCashCur+spsShCpfOACur+spsShCpfSACur+spsShCpfRACur+spsShSrsCur;
					   spsShTotReg=spsShCashReg+spsShCpfOAReg+spsShCpfSAReg+spsShCpfRAReg+spsShSrsReg;
					
				   } 
				   
				   $("#txtFldISSpssharesCurCash").val(remPriceAfDec(spsShCashCur)).attr("readonly","true"); 
				   $("#txtFldISSpssharesCurCash").val(currencyFormat(spsShCashCur));
				   $("#txtFldISSpssharesCurCpfoa").val(remPriceAfDec(spsShCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpssharesCurCpfoa").val(currencyFormat(spsShCpfOACur));
				   $("#txtFldISSpssharesCurCpfsa").val(remPriceAfDec(spsShCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpssharesCurCpfsa").val(currencyFormat(spsShCpfSACur));
				   $("#txtFldISSpssharesCurCpfra").val(remPriceAfDec(spsShCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpssharesCurCpfra").val(currencyFormat(spsShCpfRACur));
				   $("#txtFldISSpssharesCursrs").val(remPriceAfDec(spsShSrsCur)).attr("readonly","true");
				   $("#txtFldISSpssharesCursrs").val(currencyFormat(spsShSrsCur));
				   $("#txtFldISSpssharesCurTot").val(remPriceAfDec(spsShTotCur)).attr("readonly","true");
				   $("#txtFldISSpssharesCurTot").val(currencyFormat(spsShTotCur));
				
				   $("#txtFldISSpssharesRegCash").val(remPriceAfDec(spsShCashReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegCash").val(currencyFormat(spsShCashReg));
				   $("#txtFldISSpssharesRegCpfoa").val(remPriceAfDec(spsShCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegCpfoa").val(currencyFormat(spsShCpfOAReg));
				   $("#txtFldISSpssharesRegCpfsa").val(remPriceAfDec(spsShCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegCpfsa").val(currencyFormat(spsShCpfSAReg));
				   $("#txtFldISSpssharesRegCpfra").val(remPriceAfDec(spsShCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegCpfra").val(currencyFormat(spsShCpfRAReg));
				   $("#txtFldISSpssharesRegsrs").val(remPriceAfDec(spsShSrsReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegsrs").val(currencyFormat(spsShSrsReg));
				   $("#txtFldISSpssharesRegTot").val(remPriceAfDec(spsShTotReg)).attr("readonly","true");
				   $("#txtFldISSpssharesRegTot").val(currencyFormat(spsShTotReg));

				   if($catg=='Stocks'){  
					   if($paymentMode == 'Cash'){
						   spsStckCashCur +=Number($currnav);   
						   spsStckCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   spsStckCpfOACur +=Number($currnav);   
						   spsStckCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   spsStckCpfSACur +=Number($currnav);   
						   spsStckCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   spsStckCpfRACur +=Number($currnav);   
						   spsStckCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   spsStckSrsCur +=Number($currnav);   
						   spsStckSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   spsStckTotCur=spsStckCashCur+spsStckCpfOACur+spsStckCpfSACur+spsStckCpfRACur+spsStckSrsCur;
					   spsStckTotReg=spsStckCashReg+spsStckCpfOAReg+spsStckCpfSAReg+spsStckCpfRAReg+spsStckSrsReg;
					
				   } 
				   
				   $("#txtFldISSpsstocksCurCash").val(remPriceAfDec(spsStckCashCur)).attr("readonly","true"); 
				   $("#txtFldISSpsstocksCurCash").val(currencyFormat(spsStckCashCur));
				   $("#txtFldISSpsstocksCurCpfoa").val(remPriceAfDec(spsStckCpfOACur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCurCpfoa").val(currencyFormat(spsStckCpfOACur));
				   $("#txtFldISSpsstocksCurCpfsa").val(remPriceAfDec(spsStckCpfSACur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCurCpfsa").val(currencyFormat(spsStckCpfSACur));
				   $("#txtFldISSpsstocksCurCpfra").val(remPriceAfDec(spsStckCpfRACur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCurCpfra").val(currencyFormat(spsStckCpfRACur));
				   $("#txtFldISSpsstocksCursrs").val(remPriceAfDec(spsStckSrsCur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCursrs").val(currencyFormat(spsStckSrsCur));
				   $("#txtFldISSpsstocksCurTot").val(remPriceAfDec(spsStckTotCur)).attr("readonly","true");
				   $("#txtFldISSpsstocksCurTot").val(currencyFormat(spsStckTotCur));
				
				   $("#txtFldISSpsstocksRegCash").val(remPriceAfDec(spsStckCashReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegCash").val(currencyFormat(spsStckCashReg));
				   $("#txtFldISSpsstocksRegCpfoa").val(remPriceAfDec(spsStckCpfOAReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegCpfoa").val(currencyFormat(spsStckCpfOAReg));
				   $("#txtFldISSpsstocksRegCpfsa").val(remPriceAfDec(spsStckCpfSAReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegCpfsa").val(currencyFormat(spsStckCpfSAReg));
				   $("#txtFldISSpsstocksRegCpfra").val(remPriceAfDec(spsStckCpfRAReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegCpfra").val(currencyFormat(spsStckCpfRAReg));
				   $("#txtFldISSpsstocksRegsrs").val(remPriceAfDec(spsStckSrsReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegsrs").val(currencyFormat(spsStckSrsReg));
				   $("#txtFldISSpsstocksRegTot").val(remPriceAfDec(spsStckTotReg)).attr("readonly","true");
				   $("#txtFldISSpsstocksRegTot").val(currencyFormat(spsStckTotReg));

				   
			 /*Set Spouse-UTs Values*/
			 if($catg=='UT'){  
				   if($paymentMode == 'Cash'){
					   spsUTCashCur +=Number($currnav);   
					   spsUTCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   spsUTCpfOACur +=Number($currnav);   
					   spsUTCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   spsUTCpfSACur +=Number($currnav);   
					   spsUTCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   spsUTCpfRACur +=Number($currnav);   
					   spsUTCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   spsUTSrsCur +=Number($currnav);   
					   spsUTSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   spsUTTotCur=spsUTCashCur+spsUTCpfOACur+spsUTCpfSACur+spsUTCpfRACur+spsUTSrsCur;
				   spsUTTotReg=spsUTCashReg+spsUTCpfOAReg+spsUTCpfSAReg+spsUTCpfRAReg+spsUTSrsReg;
				
			   } 
			 
			   
			   $("#txtFldISSpsutsCurCash").val(remPriceAfDec(spsUTCashCur)).attr("readonly","true"); 
			   $("#txtFldISSpsutsCurCash").val(currencyFormat(spsUTCashCur));
			   $("#txtFldISSpsutsCurCpfoa").val(remPriceAfDec(spsUTCpfOACur)).attr("readonly","true");
			   $("#txtFldISSpsutsCurCpfoa").val(currencyFormat(spsUTCpfOACur));
			   $("#txtFldISSpsutsCurCpfsa").val(remPriceAfDec(spsUTCpfSACur)).attr("readonly","true");
			   $("#txtFldISSpsutsCurCpfsa").val(currencyFormat(spsUTCpfSACur));
			   $("#txtFldISSpsutsCurCpfra").val(remPriceAfDec(spsUTCpfRACur)).attr("readonly","true");
			   $("#txtFldISSpsutsCurCpfra").val(currencyFormat(spsUTCpfRACur));
			   $("#txtFldISSpsutsCursrs").val(remPriceAfDec(spsUTSrsCur)).attr("readonly","true");
			   $("#txtFldISSpsutsCursrs").val(currencyFormat(spsUTSrsCur));
			   $("#txtFldISSpsutsCurTot").val(remPriceAfDec(spsUTTotCur)).attr("readonly","true");
			   $("#txtFldISSpsutsCurTot").val(currencyFormat(spsUTTotCur));
			
			   $("#txtFldISSpsutsRegCash").val(remPriceAfDec(spsUTCashReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegCash").val(currencyFormat(spsUTCashReg));
			   $("#txtFldISSpsutsRegCpfoa").val(remPriceAfDec(spsUTCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegCpfoa").val(currencyFormat(spsUTCpfOAReg));
			   $("#txtFldISSpsutsRegCpfsa").val(remPriceAfDec(spsUTCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegCpfsa").val(currencyFormat(spsUTCpfSAReg));
			   $("#txtFldISSpsutsRegCpfra").val(remPriceAfDec(spsUTCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegCpfra").val(currencyFormat(spsUTCpfRAReg));
			   $("#txtFldISSpsutsRegsrs").val(remPriceAfDec(spsUTSrsReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegsrs").val(currencyFormat(spsUTSrsReg));
			   $("#txtFldISSpsutsRegTot").val(remPriceAfDec(spsUTTotReg)).attr("readonly","true");
			   $("#txtFldISSpsutsRegTot").val(currencyFormat(spsUTTotReg));
			
			   if($catg=='Others'){  
				   if($paymentMode == 'Cash'){
					   spsOthCashCur +=Number($currnav);   
					   spsOthCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   spsOthCpfOACur +=Number($currnav);   
					   spsOthCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   spsOthCpfSACur +=Number($currnav);   
					   spsOthCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   spsOthCpfRACur +=Number($currnav);   
					   spsOthCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   spsOthSrsCur +=Number($currnav);   
					   spsOthSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   spsOthTotCur=spsOthCashCur+spsOthCpfOACur+spsOthCpfSACur+spsOthCpfRACur+spsOthSrsCur;
				   spsOthTotReg=spsOthCashReg+spsOthCpfOAReg+spsOthCpfSAReg+spsOthCpfRAReg+spsOthSrsReg;
				
			   } 
			 
			   
			   $("#txtFldISSpsothersCurCash").val(remPriceAfDec(spsOthCashCur)).attr("readonly","true"); 
			   $("#txtFldISSpsothersCurCash").val(currencyFormat(spsOthCashCur));
			   $("#txtFldISSpsothersCurCpfoa").val(remPriceAfDec(spsOthCpfOACur)).attr("readonly","true");
			   $("#txtFldISSpsothersCurCpfoa").val(currencyFormat(spsOthCpfOACur));
			   $("#txtFldISSpsothersCurCpfsa").val(remPriceAfDec(spsOthCpfSACur)).attr("readonly","true");
			   $("#txtFldISSpsothersCurCpfsa").val(currencyFormat(spsOthCpfSACur));
			   $("#txtFldISSpsothersCurCpfra").val(remPriceAfDec(spsOthCpfRACur)).attr("readonly","true");
			   $("#txtFldISSpsothersCurCpfra").val(currencyFormat(spsOthCpfRACur));
			   $("#txtFldISSpsothersCursrs").val(remPriceAfDec(spsOthSrsCur)).attr("readonly","true");
			   $("#txtFldISSpsothersCursrs").val(currencyFormat(spsOthSrsCur));
			   $("#txtFldISSpsothersCurTot").val(remPriceAfDec(spsOthTotCur)).attr("readonly","true");
			   $("#txtFldISSpsothersCurTot").val(currencyFormat(spsOthTotCur));
			
			   $("#txtFldISSpsothersRegCash").val(remPriceAfDec(spsOthCashReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegCash").val(currencyFormat(spsOthCashReg));
			   $("#txtFldISSpsothersRegCpfoa").val(remPriceAfDec(spsOthCpfOAReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegCpfoa").val(currencyFormat(spsOthCpfOAReg));
			   $("#txtFldISSpsothersRegCpfsa").val(remPriceAfDec(spsOthCpfSAReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegCpfsa").val(currencyFormat(spsOthCpfSAReg));
			   $("#txtFldISSpsothersRegCpfra").val(remPriceAfDec(spsOthCpfRAReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegCpfra").val(currencyFormat(spsOthCpfRAReg));
			   $("#txtFldISSpsothersRegsrs").val(remPriceAfDec(spsOthSrsReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegsrs").val(currencyFormat(spsOthSrsReg));
			   $("#txtFldISSpsothersRegTot").val(remPriceAfDec(spsOthTotReg)).attr("readonly","true");
			   $("#txtFldISSpsothersRegTot").val(currencyFormat(spsOthTotReg));
			    
			
			 
			 /*Set Spouse-ILPs Values*/
						   
			 
			 /*Set Spouse-Bonds Values*/
			 

			   /*Total - Horizontal */
			   
			   var spsOthCashCurTot =spsBdCashCur+spsDivCashCur+spsILPCashCur+spsShCashCur+spsStckCashCur+spsUTCashCur+spsOthCashCur;
			   var spsOthCashRegTot =spsBdCashReg+spsDivCashReg+spsILPCashReg+spsShCashReg+spsStckCashReg+spsUTCashReg+spsOthCashReg;
			   
			   var spsOthCpfOACurTot =spsBdCpfOACur+spsDivCpfOACur+spsILPCpfOACur+spsShCpfOACur+spsStckCpfOACur+spsUTCpfOACur+spsOthCpfOACur
			   var spsOthCpfOARegTot =spsBdCpfOAReg+spsDivCpfOAReg+spsILPCpfOAReg+spsShCpfOAReg+spsStckCpfOAReg+spsUTCpfOAReg+spsOthCpfOAReg;
			   
			   var spsOthCpfSACurTot =spsBdCpfSACur+spsDivCpfSACur+spsILPCpfSACur+spsShCpfSACur+spsStckCpfSACur+spsUTCpfSACur+spsOthCpfSACur;
			   var spsOthCpfSARegTot =spsBdCpfSAReg+spsDivCpfSAReg+spsILPCpfSAReg+spsShCpfSAReg+spsStckCpfSAReg+spsUTCpfSAReg+spsOthCpfSAReg;
			   
			   var spsOthCpfRACurTot =spsBdCpfRACur+spsDivCpfRACur+spsILPCpfRACur+spsShCpfRACur+spsStckCpfRACur+spsUTCpfRACur+spsOthCpfRACur;
			   var spsOthCpfRARegTot =spsBdCpfRAReg+spsDivCpfRAReg+spsILPCpfRAReg+spsShCpfRAReg+spsStckCpfRAReg+spsUTCpfRAReg+spsOthCpfRAReg;
			   
			   var spsOthSrsCurTot =spsBdSrsCur+spsDivSrsCur+spsILPSrsCur+spsShSrsCur+spsStckSrsCur+spsUTSrsCur+spsOthSrsCur;
			   var spsOthSrsRegTot =spsBdSrsReg+spsDivSrsReg+spsILPSrsReg+spsShSrsReg+spsStckSrsReg+spsUTSrsReg+spsOthSrsReg;
			   
			   /*Total - Verticle */
			   var spsOthTotCurVert = spsOthCashCurTot + spsOthCpfOACurTot + spsOthCpfSACurTot + spsOthCpfRACurTot + spsOthSrsCurTot;
			   var spsOthTotRegVert = spsOthCashRegTot + spsOthCpfOARegTot + spsOthCpfSARegTot + spsOthCpfRARegTot + spsOthSrsRegTot;

			   $("#txtFldISSpstotCurCash").val(remPriceAfDec(spsOthCashCurTot)).attr("readonly","true"); 
			   $("#txtFldISSpstotCurCash").val(currencyFormat(spsOthCashCurTot));
			   
			   $("#txtFldISSpstotCurCpfoa").val(remPriceAfDec(spsOthCpfOACurTot)).attr("readonly","true");
			   $("#txtFldISSpstotCurCpfoa").val(currencyFormat(spsOthCpfOACurTot));
			   
			   $("#txtFldISSpstotCurCpfsa").val(remPriceAfDec(spsOthCpfSACurTot)).attr("readonly","true");
			   $("#txtFldISSpstotCurCpfsa").val(currencyFormat(spsOthCpfSACurTot));
			   
			   $("#txtFldISSpstotCurCpfra").val(remPriceAfDec(spsOthCpfRACurTot)).attr("readonly","true");
			   $("#txtFldISSpstotCurCpfra").val(currencyFormat(spsOthCpfRACurTot));
			   
			   $("#txtFldISSpstotCursrs").val(remPriceAfDec(spsOthSrsCurTot)).attr("readonly","true");
			   $("#txtFldISSpstotCursrs").val(currencyFormat(spsOthSrsCurTot));
			   
			   $("#txtFldISSpstotCurTot").val(remPriceAfDec(spsOthTotCurVert)).attr("readonly","true");
			   $("#txtFldISSpstotCurTot").val(currencyFormat(spsOthTotCurVert));
			
			   $("#txtFldISSpstotRegCash").val(remPriceAfDec(spsOthCashRegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegCash").val(currencyFormat(spsOthCashRegTot));
			   
			   $("#txtFldISSpstotRegCpfoa").val(remPriceAfDec(spsOthCpfOARegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegCpfoa").val(currencyFormat(spsOthCpfOARegTot));
			   
			   $("#txtFldISSpstotRegCpfsa").val(remPriceAfDec(spsOthCpfSARegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegCpfsa").val(currencyFormat(spsOthCpfSARegTot));
			   
			   $("#txtFldISSpstotRegCpfra").val(remPriceAfDec(spsOthCpfRARegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegCpfra").val(currencyFormat(spsOthCpfRARegTot));
			   
			   $("#txtFldISSpstotRegsrs").val(remPriceAfDec(spsOthSrsRegTot)).attr("readonly","true");
			   $("#txtFldISSpstotRegsrs").val(currencyFormat(spsOthSrsRegTot));
			   
			   $("#txtFldISSpstotRegTot").val(remPriceAfDec(spsOthTotRegVert)).attr("readonly","true");
			   $("#txtFldISSpstotRegTot").val(currencyFormat(spsOthTotRegVert));
			   
			   $spousediv.find("div#generateItSpouse").css("display","block"); 
			 
			 
			 /*Cpf Summary*/
			 if($paymentMode == 'CPFOA' || $paymentMode == 'CPFSA' || $paymentMode == 'CPFRA' || $paymentMode == 'SRS'){
				 
				 $("#divforCpfSummary").css("display","block");    
				 
				 $cpfspousediv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySpouse]").clone());
					
				 
				 /*Cpf Summary*/
				 $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr").each(function(){ 
					 $(this).find('th:eq(1)').remove(); 
				 });
				  $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr:even").each(function(){ 
						$(this).addClass("even");
						if($(this).hasClass("even")){ 
							 $(this).find('td:eq(2)').remove(); 
						}
				  });
				  
				  $("#divforCpfSummary").find("div[id=genCpfSummarySelf]").find("table tr:odd").each(function(){ 
						$(this).addClass("odd");
						if($(this).hasClass("odd")){ 
							 $(this).find('td:eq(1)').remove(); 
						}
				  });

			   

			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(spsBdCpfOACur+spsBdCpfSACur+spsBdCpfRACur+spsBdSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(spsBdCpfOAReg+spsBdCpfSAReg+spsBdCpfRAReg+spsBdSrsReg)).attr("readonly","true");

			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfdivCurTot").val(currencyFormat(spsDivCpfOACur+spsDivCpfSACur+spsDivCpfRACur+spsDivSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfdivRegTot").val(currencyFormat(spsDivCpfOAReg+spsDivCpfSAReg+spsDivCpfRAReg+spsDivSrsReg)).attr("readonly","true");

			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfilpCurTot").val(currencyFormat(spsILPCpfOACur+spsILPCpfSACur+spsILPCpfRACur+spsILPSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfilpRegTot").val(currencyFormat(spsILPCpfOAReg+spsILPCpfSAReg+spsILPCpfRAReg+spsILPSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(spsShCpfOACur+spsShCpfSACur+spsShCpfRACur+spsShSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(spsShCpfOAReg+spsShCpfSAReg+spsShCpfRAReg+spsShSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfstocksCurTot").val(currencyFormat(spsStckCpfOACur+spsStckCpfSACur+spsStckCpfRACur+spsStckSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfstocksRegTot").val(currencyFormat(spsStckCpfOAReg+spsStckCpfSAReg+spsStckCpfRAReg+spsStckSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfutsCurTot").val(currencyFormat(spsUTCpfOACur+spsUTCpfSACur+spsUTCpfRACur+spsUTSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelfutsRegTot").val(currencyFormat(spsUTCpfOAReg+spsUTCpfSAReg+spsUTCpfRAReg+spsUTSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelftotCurTot").val(currencyFormat(spsOthCpfOACur+spsOthCpfSACur+spsOthCpfRACur+spsOthSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummarySpouse").find("input#txtFldISSelftotRegTot").val(currencyFormat(spsOthCpfOAReg+spsOthCpfSAReg+spsOthCpfRAReg+spsOthSrsReg)).attr("readonly","true");
			 
		  }
			  /*SRS Summary*/
			  if($paymentMode == 'Cash' || $paymentMode == 'SRS'){ 
				  $("#divforSRSSummary").css("display","block");  
				  $srsspousediv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySpouse]").clone());
					 $("#INVSUM_NORECFOUND").css("display","none");
					
			  $("#divforSRSSummary").find("div[id=genSRSSummarySpouse]").find("table tr").each(function(){ 
				  $(this).find('th:eq(2),th:eq(3),th:eq(4)').remove(); 
				 });
			  
			  $("#divforSRSSummary").find("div[id=genSRSSummarySpouse]").find("table tr:even").each(function(){ 
					$(this).addClass("even");
					if($(this).hasClass("even")){ 
						  $(this).find('td:eq(3),td:eq(4),td:eq(5)').remove();
					}
			  });
			  $("#divforSRSSummary").find("div[id=genSRSSummarySpouse]").find("table tr:odd").each(function(){ 
					$(this).addClass("odd");
					if($(this).hasClass("odd")){ 
						  $(this).find('td:eq(2),td:eq(3),td:eq(4)').remove();
					}
			  }); 
					 
					 

			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(spsBdCashCur+spsBdSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(spsBdCashReg+spsBdSrsReg)).attr("readonly","true");

			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfdivCurTot").val(currencyFormat(spsDivCashCur+spsDivSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfdivRegTot").val(currencyFormat(spsDivCashReg+spsDivSrsReg)).attr("readonly","true");
			  
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfilpCurTot").val(currencyFormat(spsILPCashCur+spsILPSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfilpRegTot").val(currencyFormat(spsILPCashReg+spsILPSrsReg)).attr("readonly","true");
			
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(spsShCashCur+spsShSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(spsShCashReg+spsShSrsReg)).attr("readonly","true");
			
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfstocksCurTot").val(currencyFormat(spsStckCashCur+spsStckSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfstocksfRegTot").val(currencyFormat(spsStckCashReg+spsStckSrsReg)).attr("readonly","true");
			
				  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfutsCurTot").val(currencyFormat(spsUTCashCur+spsUTSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelfutsRegTot").val(remPriceAfDec(spsUTCashReg+spsUTSrsReg)).attr("readonly","true");
				  
				  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelftotCurTot").val(currencyFormat(spsOthCashCur+spsOthSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummarySpouse").find("input#txtFldISSelftotRegTot").val(currencyFormat(spsOthCashReg+spsOthSrsReg)).attr("readonly","true");
				 
			  }
				  
		 }else if($ownership == "Joint"){
			 $jointdiv.html($mergeFamdiv); 
			 $jointdiv.find("input[id=txtFldISOwnership]").val("JOINT/FAMILY");
			 

			 if($catg=='Bonds'){
				 
				   if($paymentMode == 'Cash'){
					   jntBdCashCur +=Number($currnav);   
					   jntBdCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   jntBdCpfOACur +=Number($currnav);   
					   jntBdCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   jntBdCpfSACur +=Number($currnav);   
					   jntBdCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   jntBdCpfRACur +=Number($currnav);   
					   jntBdCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   jntBdSrsCur +=Number($currnav);   
					   jntBdSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   jntBdTotCur=jntBdCashCur+jntBdCpfOACur+jntBdCpfSACur+jntBdCpfRACur+jntBdSrsCur;
				   jntBdTotReg=jntBdCashReg+jntBdCpfOAReg+jntBdCpfSAReg+jntBdCpfRAReg+jntBdSrsReg;
				   
				   
			   } 
				 
				   $("#txtFldISFambondsCurCash").val(remPriceAfDec(jntBdCashCur)).attr("readonly","true");
				   $("#txtFldISFambondsCurCash").val(currencyFormat(jntBdCashCur));
				   
				   $("#txtFldISFambondsCurCpfoa").val(remPriceAfDec(jntBdCpfOACur)).attr("readonly","true");
				   $("#txtFldISFambondsCurCpfoa").val(currencyFormat(jntBdCpfOACur));
				   
				   $("#txtFldISFambondsCurCpfsa").val(remPriceAfDec(jntBdCpfSACur)).attr("readonly","true");
				   $("#txtFldISFambondsCurCpfsa").val(currencyFormat(jntBdCpfSACur));
				   
				   $("#txtFldISFambondsCurCpfra").val(remPriceAfDec(jntBdCpfRACur)).attr("readonly","true");
				   $("#txtFldISFambondsCurCpfra").val(currencyFormat(jntBdCpfRACur));
				   
				   $("#txtFldISFambondsCursrs").val(remPriceAfDec(jntBdSrsCur)).attr("readonly","true");
				   $("#txtFldISFambondsCursrs").val(currencyFormat(jntBdSrsCur));
				   
				   $("#txtFldISFambondsCurTot").val(remPriceAfDec(jntBdTotCur)).attr("readonly","true");
				   $("#txtFldISFambondsCurTot").val(currencyFormat(jntBdTotCur));
				
				   $("#txtFldISFambondsRegCash").val(remPriceAfDec(jntBdCashReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegCash").val(currencyFormat(jntBdCashReg));
				   
				   $("#txtFldISFambondsRegCpfoa").val(remPriceAfDec(jntBdCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegCpfoa").val(currencyFormat(jntBdCpfOAReg));
				   
				   $("#txtFldISFambondsRegCpfsa").val(remPriceAfDec(jntBdCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegCpfsa").val(currencyFormat(jntBdCpfSAReg));
				   
				   $("#txtFldISFambondsRegCpfra").val(remPriceAfDec(jntBdCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegCpfra").val(currencyFormat(jntBdCpfRAReg));
				   
				   $("#txtFldISFambondsRegsrs").val(remPriceAfDec(jntBdSrsReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegsrs").val(currencyFormat(jntBdSrsReg));
				   
				   $("#txtFldISFambondsRegTot").val(remPriceAfDec(jntBdTotReg)).attr("readonly","true");
				   $("#txtFldISFambondsRegTot").val(currencyFormat(jntBdTotReg));
				 
				 /*Set Joint-Dividend Values*/
				 if(!isEmpty($catg) && $reinvest == "N"){  
					   if($paymentMode == 'Cash'){
//						   jntDivCashCur +=Number($currnav);   
						   jntDivCashReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
//						   jntDivCpfOACur +=Number($currnav);   
						   jntDivCpfOAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
//						   jntDivCpfSACur +=Number($currnav);   
						   jntDivCpfSAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
//						   jntDivCpfRACur +=Number($currnav);   
						   jntDivCpfRAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'SRS'){
//						   jntDivSrsCur +=Number($currnav);   
						   jntDivSrsReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val()); 
			     	   } 
					   
//					   jntDivTotCur=jntDivCashCur+jntDivCpfOACur+jntDivCpfSACur+jntDivCpfRACur+jntDivSrsCur;
					   jntDivTotReg=jntDivCashReg+jntDivCpfOAReg+jntDivCpfSAReg+jntDivCpfRAReg+jntDivSrsReg;
					
					   
				   }
				 
				 if(!isEmpty($catg) && $catg == "Dividend" && $reinvest != "N"){  
					   if($paymentMode == 'Cash'){
						   jntDivCashCur +=Number($currnav);   
//						   jntDivCashReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   jntDivCpfOACur +=Number($currnav);   
//						   jntDivCpfOAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   jntDivCpfSACur +=Number($currnav);   
//						   jntDivCpfSAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   jntDivCpfRACur +=Number($currnav);   
//						   jntDivCpfRAReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val() ); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   jntDivSrsCur +=Number($currnav);   
//						   jntDivSrsReg +=Number($(this).find("td:eq(21)").find("input:eq(0)").val()); 
			     	   } 
					   
					   jntDivTotCur=jntDivCashCur+jntDivCpfOACur+jntDivCpfSACur+jntDivCpfRACur+jntDivSrsCur;
//					   jntDivTotReg=jntDivCashReg+jntDivCpfOAReg+jntDivCpfSAReg+jntDivCpfRAReg+jntDivSrsReg;
					
					   
				   } 
				   
				   $("#txtFldISFamdivCurCash").val(remPriceAfDec(jntDivCashCur)).attr("readonly","true"); 
				   $("#txtFldISFamdivCurCash").val(currencyFormat(jntDivCashCur));
				   $("#txtFldISFamdivCurCpfoa").val(remPriceAfDec(jntDivCpfOACur)).attr("readonly","true");
				   $("#txtFldISFamdivCurCpfoa").val(currencyFormat(jntDivCpfOACur));
				   $("#txtFldISFamdivCurCpfsa").val(remPriceAfDec(jntDivCpfSACur)).attr("readonly","true");
				   $("#txtFldISFamdivCurCpfsa").val(currencyFormat(jntDivCpfSACur));
				   $("#txtFldISFamdivCurCpfra").val(remPriceAfDec(jntDivCpfRACur)).attr("readonly","true");
				   $("#txtFldISFamdivCurCpfra").val(currencyFormat(jntDivCpfRACur));
				   $("#txtFldISFamdivCursrs").val(remPriceAfDec(jntDivSrsCur)).attr("readonly","true");
				   $("#txtFldISFamdivCursrs").val(currencyFormat(jntDivSrsCur));
				   $("#txtFldISFamdivCurTot").val(remPriceAfDec(jntDivTotCur)).attr("readonly","true");
				   $("#txtFldISFamdivCurTot").val(currencyFormat(jntDivTotCur));
				
				   $("#txtFldISFamdivRegCash").val(remPriceAfDec(jntDivCashReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegCash").val(currencyFormat(jntDivCashReg));
				   $("#txtFldISFamdivRegCpfoa").val(remPriceAfDec(jntDivCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegCpfoa").val(currencyFormat(jntDivCpfOAReg));
				   $("#txtFldISFamdivRegCpfsa").val(remPriceAfDec(jntDivCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegCpfsa").val(currencyFormat(jntDivCpfSAReg));
				   $("#txtFldISFamdivRegCpfra").val(remPriceAfDec(jntDivCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegCpfra").val(currencyFormat(jntDivCpfRAReg));
				   $("#txtFldISFamdivRegsrs").val(remPriceAfDec(jntDivSrsReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegsrs").val(currencyFormat(jntDivSrsReg));
				   $("#txtFldISFamdivRegTot").val(remPriceAfDec(jntDivTotReg)).attr("readonly","true");
				   $("#txtFldISFamdivRegTot").val(currencyFormat(jntDivTotReg));

				   if($catg=='ILP'){  
					   if($paymentMode == 'Cash'){
						   jntILPCashCur +=Number($currnav);   
						   jntILPCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   jntILPCpfOACur +=Number($currnav);   
						   jntILPCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   jntILPCpfSACur +=Number($currnav);   
						   jntILPCpfSAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   jntILPCpfRACur +=Number($currnav);   
						   jntILPCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   jntILPSrsCur +=Number($currnav);   
						   jntILPSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   jntILPTotCur=jntILPCashCur+jntILPCpfOACur+jntILPCpfSACur+jntILPCpfRACur+jntILPSrsCur;
					   jntILPTotReg=jntILPCashReg+jntILPCpfOAReg+jntILPCpfSAReg+jntILPCpfRAReg+jntILPSrsReg;
					   
					
					   
				   } 
				 
				   $("#txtFldISFamilpCurCash").val(remPriceAfDec(jntILPCashCur)).attr("readonly","true"); 
				   $("#txtFldISFamilpCurCash").val(currencyFormat(jntILPCashCur));
				   $("#txtFldISFamilpCurCpfoa").val(remPriceAfDec(jntILPCpfOACur)).attr("readonly","true");
				   $("#txtFldISFamilpCurCpfoa").val(currencyFormat(jntILPCpfOACur));
				   $("#txtFldISFamilpCurCpfsa").val(remPriceAfDec(jntILPCpfSACur)).attr("readonly","true");
				   $("#txtFldISFamilpCurCpfsa").val(currencyFormat(jntILPCpfSACur));
				   $("#txtFldISFamilpCurCpfra").val(remPriceAfDec(jntILPCpfRACur)).attr("readonly","true");
				   $("#txtFldISFamilpCurCpfra").val(currencyFormat(jntILPCpfRACur));
				   $("#txtFldISFamilpCursrs").val(remPriceAfDec(jntILPSrsCur)).attr("readonly","true");
				   $("#txtFldISFamilpCursrs").val(currencyFormat(jntILPSrsCur));
				   $("#txtFldISFamilpCurTot").val(remPriceAfDec(jntILPTotCur)).attr("readonly","true");
				   $("#txtFldISFamilpCurTot").val(currencyFormat(jntILPTotCur));
				
				   $("#txtFldISFamilpRegCash").val(remPriceAfDec(jntILPCashReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegCash").val(currencyFormat(jntILPCashReg));
				   $("#txtFldISFamilpRegCpfoa").val(remPriceAfDec(jntILPCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegCpfoa").val(currencyFormat(jntILPCpfOAReg));
				   $("#txtFldISFamilpRegCpfsa").val(remPriceAfDec(jntILPCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegCpfsa").val(currencyFormat(jntILPCpfSAReg));
				   $("#txtFldISFamilpRegCpfra").val(remPriceAfDec(jntILPCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegCpfra").val(currencyFormat(jntILPCpfRAReg));
				   $("#txtFldISFamilpRegsrs").val(remPriceAfDec(jntILPSrsReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegsrs").val(currencyFormat(jntILPSrsReg));
				   $("#txtFldISFamilpRegTot").val(remPriceAfDec(jntILPTotReg)).attr("readonly","true");
				   $("#txtFldISFamilpRegTot").val(currencyFormat(jntILPTotReg));
				   
				   if($catg=='Shares'){  
					   if($paymentMode == 'Cash'){
						   jntShCashCur +=Number($currnav);   
						   jntShCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   jntShCpfOACur +=Number($currnav);   
						   jntShCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   jntShCpfSACur +=Number($(this).find("td:eq(21)").find("input:eq(0)").val());   
						   jntShCpfSAReg +=Number($(this).find("td:eq(23)").find("input:eq(0)").val() * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   jntShCpfRACur +=Number($currnav);   
						   jntShCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   jntShSrsCur +=Number($currnav);   
						   jntShSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   jntShTotCur=jntShCashCur+jntShCpfOACur+jntShCpfSACur+jntShCpfRACur+jntShSrsCur;
					   jntShTotReg=jntShCashReg+jntShCpfOAReg+jntShCpfSAReg+jntShCpfRAReg+jntShSrsReg;
					
					   
				   } 
				   
				   $("#txtFldISFamsharesCurCash").val(remPriceAfDec(jntShCashCur)).attr("readonly","true"); 
				   $("#txtFldISFamsharesCurCash").val(currencyFormat(jntShCashCur));
				   $("#txtFldISFamsharesCurCpfoa").val(remPriceAfDec(jntShCpfOACur)).attr("readonly","true");
				   $("#txtFldISFamsharesCurCpfoa").val(currencyFormat(jntShCpfOACur));
				   $("#txtFldISFamsharesCurCpfsa").val(remPriceAfDec(jntShCpfSACur)).attr("readonly","true");
				   $("#txtFldISFamsharesCurCpfsa").val(currencyFormat(jntShCpfSACur));
				   $("#txtFldISFamsharesCurCpfra").val(remPriceAfDec(jntShCpfRACur)).attr("readonly","true");
				   $("#txtFldISFamsharesCurCpfra").val(currencyFormat(jntShCpfRACur));
				   $("#txtFldISFamsharesCursrs").val(remPriceAfDec(jntShSrsCur)).attr("readonly","true");
				   $("#txtFldISFamsharesCursrs").val(currencyFormat(jntShSrsCur));
				   $("#txtFldISFamsharesCurTot").val(remPriceAfDec(jntShTotCur)).attr("readonly","true");
				   $("#txtFldISFamsharesCurTot").val(currencyFormat(jntShTotCur));
				
				   $("#txtFldISFamsharesRegCash").val(remPriceAfDec(jntShCashReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegCash").val(currencyFormat(jntShCashReg));
				   $("#txtFldISFamsharesRegCpfoa").val(remPriceAfDec(jntShCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegCpfoa").val(currencyFormat(jntShCpfOAReg));
				   $("#txtFldISFamsharesRegCpfsa").val(remPriceAfDec(jntShCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegCpfsa").val(currencyFormat(jntShCpfSAReg));
				   $("#txtFldISFamsharesRegCpfra").val(remPriceAfDec(jntShCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegCpfra").val(currencyFormat(jntShCpfRAReg));
				   $("#txtFldISFamsharesRegsrs").val(remPriceAfDec(jntShSrsReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegsrs").val(currencyFormat(jntShSrsReg));
				   $("#txtFldISFamsharesRegTot").val(remPriceAfDec(jntShTotReg)).attr("readonly","true");
				   $("#txtFldISFamsharesRegTot").val(currencyFormat(jntShTotReg));
				
				 if($catg=='Stocks'){  
					   if($paymentMode == 'Cash'){
						   jntStckCashCur +=Number($currnav);   
						   jntStckCashReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFOA'){
						   jntStckCpfOACur +=Number($currnav);   
						   jntStckCpfOAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFSA'){
						   jntStckCpfSACur +=Number($(this).find("td:eq(21)").find("input:eq(0)").val());   
						   jntStckCpfSAReg +=Number($(this).find("td:eq(23)").find("input:eq(0)").val() * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'CPFRA'){
						   jntStckCpfRACur +=Number($currnav);   
						   jntStckCpfRAReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   if($paymentMode == 'SRS'){
						   jntStckSrsCur +=Number($currnav);   
						   jntStckSrsReg +=Number($rspamount * TopUpAmt); 
			     	   } 
					   
					   jntStckTotCur=jntStckCashCur+jntStckCpfOACur+jntStckCpfSACur+jntStckCpfRACur+jntStckSrsCur;
					   jntStckTotReg=jntStckCashReg+jntStckCpfOAReg+jntStckCpfSAReg+jntStckCpfRAReg+jntStckSrsReg;
					
					   
				   } 
				   
				   $("#txtFldISFamstocksCurCash").val(remPriceAfDec(jntStckCashCur)).attr("readonly","true"); 
				   $("#txtFldISFamstocksCurCash").val(currencyFormat(jntStckCashCur));
				   $("#txtFldISFamstocksCurCpfoa").val(remPriceAfDec(jntStckCpfOACur)).attr("readonly","true");
				   $("#txtFldISFamstocksCurCpfoa").val(currencyFormat(jntStckCpfOACur));
				   $("#txtFldISFamstocksCurCpfsa").val(remPriceAfDec(jntStckCpfSACur)).attr("readonly","true");
				   $("#txtFldISFamstocksCurCpfsa").val(currencyFormat(jntStckCpfSACur));
				   $("#txtFldISFamstocksCurCpfra").val(remPriceAfDec(jntStckCpfRACur)).attr("readonly","true");
				   $("#txtFldISFamstocksCurCpfra").val(currencyFormat(jntStckCpfRACur));
				   $("#txtFldISFamstocksCursrs").val(remPriceAfDec(jntStckSrsCur)).attr("readonly","true");
				   $("#txtFldISFamstocksCursrs").val(currencyFormat(jntStckSrsCur));
				   $("#txtFldISFamstocksCurTot").val(remPriceAfDec(jntStckTotCur)).attr("readonly","true");
				   $("#txtFldISFamstocksCurTot").val(currencyFormat(jntStckTotCur));
				
				   $("#txtFldISFamstocksRegCash").val(remPriceAfDec(jntStckCashReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegCash").val(currencyFormat(jntStckCashReg));
				   $("#txtFldISFamstocksRegCpfoa").val(remPriceAfDec(jntStckCpfOAReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegCpfoa").val(currencyFormat(jntStckCpfOAReg));
				   $("#txtFldISFamstocksRegCpfsa").val(remPriceAfDec(jntStckCpfSAReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegCpfsa").val(currencyFormat(jntStckCpfSAReg));
				   $("#txtFldISFamstocksRegCpfra").val(remPriceAfDec(jntStckCpfRAReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegCpfra").val(currencyFormat(jntStckCpfRAReg));
				   $("#txtFldISFamstocksRegsrs").val(remPriceAfDec(jntStckSrsReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegsrs").val(currencyFormat(jntStckSrsReg));
				   $("#txtFldISFamstocksRegTot").val(remPriceAfDec(jntStckTotReg)).attr("readonly","true");
				   $("#txtFldISFamstocksRegTot").val(currencyFormat(jntStckTotReg));
				
			 
			 /*Set Joint-UTs Values*/
			 if($catg=='UT'){  
				   if($paymentMode == 'Cash'){
					   jntUTCashCur +=Number($currnav);   
					   jntUTCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   jntUTCpfOACur +=Number($currnav);   
					   jntUTCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   jntUTCpfSACur +=Number($currnav);   
					   jntUTCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   jntUTCpfRACur +=Number($currnav);   
					   jntUTCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   jntUTSrsCur +=Number($currnav);   
					   jntUTSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   jntUTTotCur=jntUTCashCur+jntUTCpfOACur+jntUTCpfSACur+jntUTCpfRACur+jntUTSrsCur;
				   jntUTTotReg=jntUTCashReg+jntUTCpfOAReg+jntUTCpfSAReg+jntUTCpfRAReg+jntUTSrsReg;
		
			   } 
			 
			   
			   $("#txtFldISFamutsCurCash").val(remPriceAfDec(jntUTCashCur)).attr("readonly","true"); 
			   $("#txtFldISFamutsCurCash").val(currencyFormat(jntUTCashCur));
			   $("#txtFldISFamutsCurCpfoa").val(remPriceAfDec(jntUTCpfOACur)).attr("readonly","true");
			   $("#txtFldISFamutsCurCpfoa").val(currencyFormat(jntUTCpfOACur));
			   $("#txtFldISFamutsCurCpfsa").val(remPriceAfDec(jntUTCpfSACur)).attr("readonly","true");
			   $("#txtFldISFamutsCurCpfsa").val(currencyFormat(jntUTCpfSACur));
			   $("#txtFldISFamutsCurCpfra").val(remPriceAfDec(jntUTCpfRACur)).attr("readonly","true");
			   $("#txtFldISFamutsCurCpfra").val(currencyFormat(jntUTCpfRACur));
			   $("#txtFldISFamutsCursrs").val(remPriceAfDec(jntUTSrsCur)).attr("readonly","true");
			   $("#txtFldISFamutsCursrs").val(currencyFormat(jntUTSrsCur));
			   $("#txtFldISFamutsCurTot").val(remPriceAfDec(jntUTTotCur)).attr("readonly","true");
			   $("#txtFldISFamutsCurTot").val(currencyFormat(jntUTTotCur));
			
			   $("#txtFldISFamutsRegCash").val(remPriceAfDec(jntUTCashReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegCash").val(currencyFormat(jntUTCashReg));
			   $("#txtFldISFamutsRegCpfoa").val(remPriceAfDec(jntUTCpfOAReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegCpfoa").val(currencyFormat(jntUTCpfOAReg));
			   $("#txtFldISFamutsRegCpfsa").val(remPriceAfDec(jntUTCpfSAReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegCpfsa").val(currencyFormat(jntUTCpfSAReg));
			   $("#txtFldISFamutsRegCpfra").val(remPriceAfDec(jntUTCpfRAReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegCpfra").val(currencyFormat(jntUTCpfRAReg));
			   $("#txtFldISFamutsRegsrs").val(remPriceAfDec(jntUTSrsReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegsrs").val(currencyFormat(jntUTSrsReg));
			   $("#txtFldISFamutsRegTot").val(remPriceAfDec(jntUTTotReg)).attr("readonly","true");
			   $("#txtFldISFamutsRegTot").val(currencyFormat(jntUTTotReg));
			   
			   if($catg=='Others'){  
				   if($paymentMode == 'Cash'){
					   jntOthCashCur +=Number($currnav);   
					   jntOthCashReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFOA'){
					   jntOthCpfOACur +=Number($currnav);   
					   jntOthCpfOAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFSA'){
					   jntOthCpfSACur +=Number($currnav);   
					   jntOthCpfSAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'CPFRA'){
					   jntOthCpfRACur +=Number($currnav);   
					   jntOthCpfRAReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   if($paymentMode == 'SRS'){
					   jntOthSrsCur +=Number($currnav);   
					   jntOthSrsReg +=Number($rspamount * TopUpAmt); 
		     	   } 
				   
				   jntOthTotCur=jntOthCashCur+jntOthCpfOACur+jntOthCpfSACur+jntOthCpfRACur+jntOthSrsCur;
				   jntOthTotReg=jntOthCashReg+jntOthCpfOAReg+jntOthCpfSAReg+jntOthCpfRAReg+jntOthSrsReg;
		
			   } 
			 
			   
			   $("#txtFldISFamothersCurCash").val(remPriceAfDec(jntOthCashCur)).attr("readonly","true"); 
			   $("#txtFldISFamothersCurCash").val(currencyFormat(jntOthCashCur));
			   $("#txtFldISFamothersCurCpfoa").val(remPriceAfDec(jntOthCpfOACur)).attr("readonly","true");
			   $("#txtFldISFamothersCurCpfoa").val(currencyFormat(jntOthCpfOACur));
			   $("#txtFldISFamothersCurCpfsa").val(remPriceAfDec(jntOthCpfSACur)).attr("readonly","true");
			   $("#txtFldISFamothersCurCpfsa").val(currencyFormat(jntOthCpfSACur));
			   $("#txtFldISFamothersCurCpfra").val(remPriceAfDec(jntOthCpfRACur)).attr("readonly","true");
			   $("#txtFldISFamothersCurCpfra").val(currencyFormat(jntOthCpfRACur));
			   $("#txtFldISFamothersCursrs").val(remPriceAfDec(jntOthSrsCur)).attr("readonly","true");
			   $("#txtFldISFamothersCursrs").val(currencyFormat(jntOthSrsCur));
			   $("#txtFldISFamothersCurTot").val(remPriceAfDec(jntOthTotCur)).attr("readonly","true");
			   $("#txtFldISFamothersCurTot").val(currencyFormat(jntOthTotCur));
			
			   $("#txtFldISFamothersRegCash").val(remPriceAfDec(jntOthCashReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegCash").val(currencyFormat(jntOthCashReg));
			   $("#txtFldISFamothersRegCpfoa").val(remPriceAfDec(jntOthCpfOAReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegCpfoa").val(currencyFormat(jntOthCpfOAReg));
			   $("#txtFldISFamothersRegCpfsa").val(remPriceAfDec(jntOthCpfSAReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegCpfsa").val(currencyFormat(jntOthCpfSAReg));
			   $("#txtFldISFamothersRegCpfra").val(remPriceAfDec(jntOthCpfRAReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegCpfra").val(currencyFormat(jntOthCpfRAReg));
			   $("#txtFldISFamothersRegsrs").val(remPriceAfDec(jntOthSrsReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegsrs").val(currencyFormat(jntOthSrsReg));
			   $("#txtFldISFamothersRegTot").val(remPriceAfDec(jntOthTotReg)).attr("readonly","true");
			   $("#txtFldISFamothersRegTot").val(currencyFormat(jntOthTotReg));
		
			 
			 /*Set Joint-ILPs Values*/
			  
			 /*Set Joint-Bonds Values*/
			 
						

			   /*Total - Horizontal */
			   
			   var jntOthCashCurTot =jntBdCashCur+jntDivCashCur+jntILPCashCur+jntShCashCur+jntStckCashCur+jntUTCashCur+jntOthCashCur;
			   var jntOthCashRegTot =jntBdCashReg+jntDivCashReg+jntILPCashReg+jntShCashReg+jntStckCashReg+jntUTCashReg+jntOthCashReg;
			   
			   var jntOthCpfOACurTot =jntBdCpfOACur+jntDivCpfOACur+jntILPCpfOACur+jntShCpfOACur+jntStckCpfOACur+jntUTCpfOACur+jntOthCpfOACur;
			   var jntOthCpfOARegTot =jntBdCpfOAReg+jntDivCpfOAReg+jntILPCpfOAReg+jntShCpfOAReg+jntStckCpfOAReg+jntUTCpfOAReg+jntOthCpfOAReg;
			   
			   var jntOthCpfSACurTot =jntBdCpfSACur+jntDivCpfSACur+jntILPCpfSACur+jntShCpfSACur+jntStckCpfSACur+jntUTCpfSACur+jntOthCpfSACur;
			   var jntOthCpfSARegTot =jntBdCpfSAReg+jntDivCpfSAReg+jntILPCpfSAReg+jntShCpfSAReg+jntStckCpfSAReg+jntUTCpfSAReg+jntOthCpfSAReg;
			   
			   var jntOthCpfRACurTot =jntBdCpfRACur+jntDivCpfRACur+jntILPCpfRACur+jntShCpfRACur+jntStckCpfRACur+jntUTCpfRACur+jntOthCpfRACur;
			   var jntOthCpfRARegTot =jntBdCpfRAReg+jntDivCpfRAReg+jntILPCpfRAReg+jntShCpfRAReg+jntStckCpfRAReg+jntUTCpfRAReg+jntOthCpfRAReg;
			   
			   var jntOthSrsCurTot =jntBdSrsCur+jntDivSrsCur+jntILPSrsCur+jntShSrsCur+jntStckSrsCur+jntUTSrsCur+jntOthSrsCur;
			   var jntOthSrsRegTot =jntBdSrsReg+jntDivSrsReg+jntILPSrsReg+jntShSrsReg+jntStckSrsReg+jntUTSrsReg+jntOthSrsReg;
			   
			   /*Total - Verticle */
			   var jntOthTotCurVert = jntOthCashCurTot+jntOthCpfOACurTot+jntOthCpfSACurTot+jntOthCpfRACurTot+jntOthSrsCurTot;
			   var jntOthTotRegVert = jntOthCashRegTot+jntOthCpfOARegTot+jntOthCpfSARegTot+jntOthCpfRARegTot+jntOthSrsRegTot;
			   
			   $("#txtFldISFamtotCurCash").val(remPriceAfDec(jntOthCashCurTot)).attr("readonly","true"); 
			   $("#txtFldISFamtotCurCash").val(currencyFormat(jntOthCashCurTot));
			   
			   $("#txtFldISFamtotCurCpfoa").val(remPriceAfDec(jntOthCpfOACurTot)).attr("readonly","true");
			   $("#txtFldISFamtotCurCpfoa").val(currencyFormat(jntOthCpfOACurTot));
			   
			   $("#txtFldISFamtotCurCpfsa").val(remPriceAfDec(jntOthCpfSACurTot)).attr("readonly","true");
			   $("#txtFldISFamtotCurCpfsa").val(currencyFormat(jntOthCpfSACurTot));
			   
			   $("#txtFldISFamtotCurCpfra").val(remPriceAfDec(jntOthCpfRACurTot)).attr("readonly","true");
			   $("#txtFldISFamtotCurCpfra").val(currencyFormat(jntOthCpfRACurTot));
			   
			   $("#txtFldISFamtotCursrs").val(remPriceAfDec(jntOthSrsCurTot)).attr("readonly","true");
			   $("#txtFldISFamtotCursrs").val(currencyFormat(jntOthSrsCurTot));
			   
			   $("#txtFldISFamtotCurTot").val(remPriceAfDec(jntOthTotCurVert)).attr("readonly","true");
			   $("#txtFldISFamtotCurTot").val(currencyFormat(jntOthTotCurVert));
			
			   $("#txtFldISFamtotRegCash").val(remPriceAfDec(jntOthCashRegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegCash").val(currencyFormat(jntOthCashRegTot));
			   
			   $("#txtFldISFamtotRegCpfoa").val(remPriceAfDec(jntOthCpfOARegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegCpfoa").val(currencyFormat(jntOthCpfOARegTot));
			   
			   $("#txtFldISFamtotRegCpfsa").val(remPriceAfDec(jntOthCpfSARegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegCpfsa").val(currencyFormat(jntOthCpfSARegTot));
			   
			   $("#txtFldISFamtotRegCpfra").val(remPriceAfDec(jntOthCpfRARegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegCpfra").val(currencyFormat(jntOthCpfRARegTot));
			   
			   $("#txtFldISFamtotRegsrs").val(remPriceAfDec(jntOthSrsRegTot)).attr("readonly","true");
			   $("#txtFldISFamtotRegsrs").val(currencyFormat(jntOthSrsRegTot));
			   
			   $("#txtFldISFamtotRegTot").val(remPriceAfDec(jntOthTotRegVert)).attr("readonly","true");
			   $("#txtFldISFamtotRegTot").val(currencyFormat(jntOthTotRegVert));
			
			 $jointdiv.find("div#generateItFamily").css("display","block");
		 
		
			 
			 /*Cpf Summary*/
			 if($paymentMode == 'CPFOA' || $paymentMode == 'CPFSA' || $paymentMode == 'CPFRA' || $paymentMode == 'SRS'){
				 
				 $("#divforCpfSummary").css("display","block");    
				 $cpfspousediv.html($("#divforInvestmentSummary").find("div[id=genInvestSummarySpouse]").clone());
					
				 
				 $("#divforCpfSummary").find("div[id=genCpfSummarySpouse]").find("table tr").each(function(){ 
				 $(this).find('th:eq(1)').remove(); 
			 });
			  $("#divforCpfSummary").find("div[id=genCpfSummarySpouse]").find("table tr:even").each(function(){ 
					$(this).addClass("even");
					if($(this).hasClass("even")){ 
						 $(this).find('td:eq(2)').remove(); 
					}
			  });
			  
			  $("#divforCpfSummary").find("div[id=genCpfSummarySpouse]").find("table tr:odd").each(function(){ 
					$(this).addClass("odd");
					if($(this).hasClass("odd")){ 
						 $(this).find('td:eq(1)').remove(); 
					}
			  });
				  
			   
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(jntBdCpfOACur+jntBdCpfSACur+jntBdCpfRACur+jntBdSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(jntBdCpfOAReg+jntBdCpfSAReg+jntBdCpfRAReg+jntBdSrsReg)).attr("readonly","true");

				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfdivCurTot").val(currencyFormat(jntDivCpfOACur+jntDivCpfSACur+jntDivCpfRACur+jntDivSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfdivRegTot").val(currencyFormat(jntDivCpfOAReg+jntDivCpfSAReg+jntDivCpfRAReg+jntDivSrsReg)).attr("readonly","true");
				  
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfilpCurTot").val(currencyFormat(jntILPCpfOACur+jntILPCpfSACur+jntILPCpfRACur+jntILPSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfilpRegTot").val(currencyFormat(jntILPCpfOAReg+jntILPCpfSAReg+jntILPCpfRAReg+jntILPSrsReg)).attr("readonly","true");

				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(jntShCpfOACur+jntShCpfSACur+jntShCpfRACur+jntShSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(jntShCpfOAReg+jntShCpfSAReg+jntShCpfRAReg+jntShSrsReg)).attr("readonly","true");

				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfstocksCurTot").val(currencyFormat(jntShCpfOACur+jntShCpfSACur+jntShCpfRACur+jntShSrsCur)).attr("readonly","true");
				  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfstocksRegTot").val(currencyFormat(jntShCpfOAReg+jntShCpfSAReg+jntShCpfRAReg+jntShSrsReg)).attr("readonly","true");

				  
			  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfutsCurTot").val(currencyFormat(jntUTCpfOACur+jntUTCpfSACur+jntUTCpfRACur+jntUTSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelfutsRegTot").val(currencyFormat(jntUTCpfOAReg+jntUTCpfSAReg+jntUTCpfRAReg+jntUTSrsReg)).attr("readonly","true");
			  
			  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelftotCurTot").val(currencyFormat(jntOthCpfOACur+jntOthCpfSACur+jntOthCpfRACur+jntOthSrsCur)).attr("readonly","true");
			  $("div#divforCpfSummary").find("div#genCpfSummaryFamily").find("input#txtFldISSelftotRegTot").val(currencyFormat(jntOthCpfOAReg+jntOthCpfSAReg+jntOthCpfRAReg+jntOthSrsReg)).attr("readonly","true");
		 }
			  
			  /*SRS Summary*/
			  if($paymentMode == 'Cash' || $paymentMode == 'SRS'){  
				  
				  $("#divforSRSSummary").css("display","block");  
					 $srsjointdiv.html($("#divforInvestmentSummary").find("div[id=genInvestSummaryFamily]").clone());
					  
					 $("#INVSUM_NORECFOUND").css("display","none");
					 

					 
			  $("#divforSRSSummary").find("div[id=genSRSSummaryFamily]").find("table tr").each(function(){ 
				  $(this).find('th:eq(2),th:eq(3),th:eq(4)').remove(); 
				 });
			  
			  $("#divforSRSSummary").find("div[id=genSRSSummaryFamily]").find("table tr:even").each(function(){ 
					$(this).addClass("even");
					if($(this).hasClass("even")){ 
						  $(this).find('td:eq(3),td:eq(4),td:eq(5)').remove();
					}
			  });
			  $("#divforSRSSummary").find("div[id=genSRSSummaryFamily]").find("table tr:odd").each(function(){ 
					$(this).addClass("odd");
					if($(this).hasClass("odd")){ 
						  $(this).find('td:eq(2),td:eq(3),td:eq(4)').remove();
					}
			  }); 

			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfbondsCurTot").val(currencyFormat(slfBdCashCur+slfBdSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfbondsRegTot").val(currencyFormat(slfBdCashReg+slfBdSrsReg)).attr("readonly","true");
			  
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfdivCurTot").val(currencyFormat(slfDivCashCur+slfDivSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfdivRegTot").val(currencyFormat(slfDivCashReg+slfDivSrsReg)).attr("readonly","true");
			  
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfilpCurTot").val(currencyFormat(slfILPCashCur+slfILPSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfilpRegTot").val(currencyFormat(slfILPCashReg+slfILPSrsReg)).attr("readonly","true");

			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfsharesCurTot").val(currencyFormat(slfShCashCur+slfShSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfsharesRegTot").val(currencyFormat(slfShCashReg+slfShSrsReg)).attr("readonly","true");

			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfstocksCurTot").val(currencyFormat(slfStckCashCur+slfStckSrsCur)).attr("readonly","true");
			  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfstocksRegTot").val(currencyFormat(slfStckCashReg+slfStckSrsReg)).attr("readonly","true");

				  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfutsCurTot").val(currencyFormat(slfUTCashCur+slfUTSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelfutsRegTot").val(currencyFormat(slfUTCashReg+slfUTSrsReg)).attr("readonly","true");
				  
				  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelftotCurTot").val(currencyFormat(slfOthCashCur+slfOthSrsCur)).attr("readonly","true");
				  $("div#divforSRSSummary").find("div#genSRSSummaryFamily").find("input#txtFldISSelftotRegTot").val(currencyFormat(slfOthCashReg+slfOthSrsReg)).attr("readonly","true");
				  
				  
				  
			  }
			  
		 } 
		}
	 });
  
 }
 
 applyEventHandlers();
	 return true;
}
  

$("#txtFldDlgInvInstitution").on("change",function(){ 
	invcloneportflio($("#txtFldDlgInvInstitution"),$("#txtFldDlgAnalsByPortfolio"),$("#txtFldDlgInvDesc"));
});   
$("#txtFldDlgAnalsByPortfolio").on("change",function(){
	addAvallisFin($(this),$("#txtFldDlgInvInstitution"));
	invcloneportflio($("#txtFldDlgInvInstitution"),$("#txtFldDlgAnalsByPortfolio"),$("#txtFldDlgInvDesc"));
});

function invcloneportflio(inselmid,porelmid,chgeid){ 
	chgeid.html("");
//	if(!isEmpty(chgeid.val())){
	chgeid.html('<option value="">--SELECT--</option>'); 
//	}
	//Portfolio
	if(porelmid.val() == "Y"){
		
		var apT1="<optgroup label='------Portfolio Category------'></optgroup>"; 
		chgeid.append(apT1);  
		$("#selhidPortfolio optgroup>option").each(function(i){   
			var portflio = $(this).val();  
			 if(!isEmpty(portflio)){
		  		 var clonevar=$(this).clone();  
		  		chgeid.find('optgroup[label="------Portfolio Category------"]').append(clonevar); 
			 } 
		});  
		if(chgeid.find(' optgroup[label="------Fund Name List------"]').length > 0){
			chgeid.find('optgroup[label="------Fund Name List------"]').remove(0);
		}
	}else{   
		
		if(chgeid.find('optgroup[label="------Portfolio Category------"]').length > 0){
			chgeid.find('optgroup[label="------Portfolio Category------"]').remove(0);
		}
		if(chgeid.find(' optgroup[label="------Fund Name List------"]').length > 0){
			chgeid.find('optgroup[label="------Fund Name List------"]').remove(0);
		}
		
		if(!isEmpty(inselmid.val())){ 
			var apT2="<optgroup label='------Fund Name List------'></optgroup>"; 
			var fdCode=inselmid;  
			chgeid.append(apT2);  
			$("#selhidFundName optgroup>option").each(function(i){   
				var fdnamesplit = $(this).val().split("^");  
			  	 if(!isEmpty($(this).val())){
			  		 var clonevar=$(this).clone(); 
			  		 if(fdnamesplit[0] == fdCode.val()){   
			  			clonevar.val(fdnamesplit[1]) 
			  			chgeid.find('optgroup[label="------Fund Name List------"]').append(clonevar);
			  		 }
			  	 } 
			});
		}
		
	}
	
	 return true;
}

/****************************Synronization with Investment To Retirement Planning **************************************************/
function syncInvestTblRow($tblInvRow){
	
//	var owner=$("#selDlgInvOwnership").val().toUpperCase(); 
	
	
	var invpkid = $tblInvRow.find("td:eq(0)").find('input:eq(1)').val();
 	var invrefkey = $tblInvRow.find("td:eq(0)").find('input:eq(2)').val();
// 	var pkid = $tblInvRow.find("td:eq(0)").find('input:eq(1)').val();
 	var ownership 	= $tblInvRow.find("td:eq(2)").find('select:eq(0)').val().toUpperCase();//ownership
 	
	var selfretage = $("#retSelfAge").val();
	var selfprojage = $("#retSelfProjage").val();
	 var basedon=$("#retAgeBasedon").val().toUpperCase();
	 var yrstoret=$("#retYrstoret").val();
	 
	 var spsretage = $("#retSpsAge").val();
	 var spsprojage = $("#retSpsProjage").val();
	 
	 var selfAge = $("#dfSelfAge").val();
	 var spsAge = $("#dfSpsAge").val();
	 var ageIncomeStart = 0,ageIncomeEnd=0;
	
 	var intretslfage= 0;
 	var totAge = 0;
 	
 
 	
	
	var fundmgr 	= $tblInvRow.find("td:eq(5)").find('select:eq(0)').find("option:selected").text();
	var fund 	= $tblInvRow.find("td:eq(6)").find('select:eq(0)').find("option:selected").text();
	
	var estrate	=$tblInvRow.find("td:eq(8)").find('input:eq(0)').val();
	var amtinvested	=$tblInvRow.find("td:eq(9)").find('input:eq(0)').val();//amount invested	
	var paymentmtd	=$tblInvRow.find("td:eq(10)").find('select:eq(0)').val();//Payment method	
	var dateinvested =$tblInvRow.find("td:eq(11)").find('input:eq(0)').val();
	 var currnav =$tblInvRow.find("td:eq(14)").find('input:eq(0)').val();
	 
	var reinvest 	=$tblInvRow.find("td:eq(16)").find('select:eq(0)').val();
	var reinvestbased 	=$tblInvRow.find("td:eq(17)").find('select:eq(0)').val();
	var reinvestPAR 	=$tblInvRow.find("td:eq(18)").find('input:eq(0)').val();
	var reinvestdivrate 	=$tblInvRow.find("td:eq(19)").find('input:eq(0)').val();
	var reinvestdivfreq 	=$tblInvRow.find("td:eq(20)").find('select:eq(0)').val();
	var reinvestdivamt 	=$tblInvRow.find("td:eq(21)").find('input:eq(0)').val();
	
	var rspflag		=$tblInvRow.find("td:eq(22)").find('select:eq(0)').val();
	var rspfreq		=$tblInvRow.find("td:eq(23)").find('select:eq(0)').val();//regular frequency
	var rspinvamt	=$tblInvRow.find("td:eq(24)").find('input:eq(0)').val();//investment amount
	var rspyrs	=$tblInvRow.find("td:eq(25)").find('input:eq(0)').val();//investment amount
	
	var objofinv	=$tblInvRow.find("td:eq(26)").find('select:eq(0)').val();//objective of investment
	var yrofret		=$tblInvRow.find("td:eq(27)").find('input:eq(0)').val();//year of retirement
	yrofret = isEmpty(yrofret)?0:yrofret;
	var nameofchd	=$tblInvRow.find("td:eq(28)").find('select:eq(0)').val();//name of child
	var accumlation	=$tblInvRow.find("td:eq(29)").find('input:eq(0)').val(); 
	var perdofinv	=$tblInvRow.find("td:eq(30)").find('input:eq(0)').val(); 
	perdofinv = isEmpty(perdofinv) ? 0 : perdofinv;
	
	 var disimbursebase	=$tblInvRow.find("td:eq(31)").find('select:eq(0)').val();
	 var disimburseamt	=$tblInvRow.find("td:eq(32)").find('input:eq(0)').val();
	 var disimburseyr	=$tblInvRow.find("td:eq(33)").find('input:eq(0)').val();
	

	 
		if(ownership == "SELF"){
	 		intretslfage= isEmpty(selfretage)? 0 :Number(selfretage); 
	 		totAge=isEmpty(selfprojage)? 0 :Number(selfprojage);
	 		
	 		ageIncomeStart = selfAge;		
	 		ageIncomeEnd =  Number(selfAge) + (isEmpty(perdofinv) ? Numbere(0) : Number(perdofinv));
	 		
	 	}else if(ownership == "SPOUSE"){
	 		intretslfage= isEmpty(spsretage)? 0 :Number(spsretage); 
	 		totAge=isEmpty(spsprojage)? 0 :Number(spsprojage);
	 		
	 		ageIncomeStart = spsAge;		
	 		ageIncomeEnd = Number(spsAge) + (isEmpty(perdofinv) ? Numbere(0) : Number(perdofinv));
	 		
	 	} 
//		|| (objofinv == "CPF-RP")
	 if((objofinv == "Retirement Planning" ) && !(ownership == "JOINT") && paymentmtd.toUpperCase() == "CASH"){
				
				var rowRefID = invrefkey ;//"INV_"+$tblInvRow.index();
				
				var rowexist = chkRPIncAssetRowExist(rowRefID);
				var rowexistDivi = chkRPIncAssetRowExist("DIVI"+rowRefID);
				
				var $tblRetRow = null;
				var $tblRetRowDivi = null;
						
				if(rowexist == null){
					getincassrtRows(null,"N");
					$tblRetRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
				}else{
					$tblRetRow = rowexist;
				}
				
				if(reinvest == "N" && rowexistDivi == null){					
					getincassrtRows(null);
					$tblRetRowDivi = $("#IncAssRetPlgtbl tbody tr:last"); 
					$tblRetRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);
					$tblRetRowDivi =  chkRPIncAssetRowExist("DIVI"+rowRefID);
					
				}else if(reinvest == "N" && rowexistDivi != null){
					$tblRetRowDivi = rowexistDivi;
				}
			 
				//Reference ID  
				$tblInvRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
				$tblRetRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
				
				
				
				if(!isEmpty(invpkid)){//invpkid.indexOf("AS_") == 0
					if(isEmpty($tblRetRow.find("td:eq(0)").find('input:eq(1)').val())){
						$tblRetRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
						$tblRetRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
					}
					
					if(reinvest == "N" ){
						$tblRetRowDivi.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
						$tblRetRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);
					}		
						
				}
				
				//Amount Invested
				var accPrt=isEmpty(accumlation)? 0 :Number(accumlation)/100;
				var amountcal=isEmpty(amtinvested)? 0 :Number(amtinvested);
				
				var incomeamount = 0, disincomeamt= 0 ,rspincomeamt = 0;//,rspyrs=0
				var ageupto = Number(perdofinv);
				
				
				if(reinvest == "N" && $tblRetRowDivi!= null){
					 
//					if( paymentmtd == "CPFOA" ||  paymentmtd == "CPFMA" ||  paymentmtd == "CPFSA" ||  paymentmtd == "CPFRA"){
//						 $tblRetRowDivi.find("td:eq(2)").find('input:eq(0)').val("CPF-RP - Dividend");
//					}else{
						
							$tblRetRowDivi.find("td:eq(2)").find('input:eq(0)').val("Investment - Dividend");	
						
						
//					}
					 
						
					 $tblRetRowDivi.find("td:eq(3)").find('input:eq(0)').val((isEmpty(fund))?"":fund);
					 
					 $tblRetRowDivi.find("td:eq(4)").find('select:eq(0)').val("REGULAR"); 
					 
					 var incomeamountdiv = 0;
				 	
					 var n=0,i=0,pv=0;
						
						if(isEmpty(objofinv)){
							n = Number(perdofinv) + Number (yrstoret);
				 		}else if (objofinv == "Retirement Planning" ||  objofinv == "CPF-RP" || objofinv == "Education Planning"){
							 n = Number(isEmpty(perdofinv) ? 0 : perdofinv)
						}
						
						i = isEmpty(estrate)? 0 :Number(estrate)/100;
						pv = Number(reinvestdivamt);			
						
						
						incomeamountdiv  = FVCalculation(i, n,0, -1*(pv), 1);
						incomeamountdiv = incomeamountdiv * accPrt;
					 
					 $tblRetRowDivi.find("td:eq(5)").find('input:eq(0)').val(Math.round(Number(incomeamountdiv)));
					 
					 
					 var rate = isEmpty(estrate)? 0 :Number(estrate);
					 $tblRetRowDivi.find("td:eq(6)").find('input:eq(0)').val(rate); 
					 
					 $tblRetRowDivi.find("td:eq(7)").find('input:eq(0)').val(); 
					 
					 $tblRetRowDivi.find("td:eq(8)").find('select:eq(0)').val(isEmpty(ownership)? basedon :ownership);//Need to check 
					 
					 
					 $tblRetRowDivi.find("td:eq(9)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); 
					 
					 var eage = isEmpty(perdofinv) ? 0 : perdofinv;		 
					 $tblRetRowDivi.find("td:eq(10)").find('input:eq(0)').val( Number(intretslfage) + Number(eage) );//Age Ends
					 
					 
				 }
				
				/*if(reinvest == "Y" ){
					
					var n=0,i=0,pv=0;
					
					if(isEmpty(objofinv)){
						n = Number(perdofinv) + Number (yrstoret);
			 		}else if (objofinv == "Retirement Planning" || objofinv == "Education Planning"){
						 n = Number(perdofinv);
					}
					
					i = isEmpty(estrate)? 0 :Number(estrate)/100;
					pv = Number(currnav);	
					
					
					incomeamount  = FVCalculation(i, n,0, -1*(pv), 1);
		 			incomeamount = incomeamount * accPrt;
		 			
		 			$tblRetRow.find("td:eq(4)").find("select:eq(0)").val("SINGLE");
		 			//pro living age
		 			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val("").prop("disabled",true);//Age Ends
					
				}else if(reinvest == "N"){
					
					var n=0,i=0,pv=0;
					
					if(isEmpty(objofinv)){
						n = Number(perdofinv) + Number (yrstoret);
			 		}else if (objofinv == "Retirement Planning" || objofinv == "Education Planning"){
						 n = Number(perdofinv);
					}
					
					i = isEmpty(estrate)? 0 :Number(estrate)/100;
					pv = Number(currnav);			
					
					console.log(i+","+ n+","+pv);
					
					incomeamount  = FVCalculation(i, n,0, -1*(pv), 1);
		 			incomeamount = incomeamount * accPrt;
		 			
		 			$tblRetRow.find("td:eq(4)").find("select:eq(0)").val("REGULAR");
		 			//pro living age
		 			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage) + Number(ageupto) );//Age Ends
					
					
				}*/
			 	
			 	if(!isEmpty(disimbursebase)){
//			 		incomeamount = amountcal * accPrt;
//			 	}else{
			 		
			 		$tblRetRow.find("td:eq(2)").find('input:eq(1)').val("DISIMBURSEMENT");
			 		if(disimbursebase == "Years"){
			 			
			 			var n = Number(disimburseyr);
			 			var i = isEmpty(estrate)? 0 :Number(estrate)/100;
			 			var pv = Number(currnav);
			 			
			 			disincomeamt  = FVCalculation(i, n,0, -1*(pv), 1);
			 			disincomeamt = disincomeamt * accPrt;
			 			
			 			ageupto= Number(disimburseyr);
			 			
			 		}else{
			 			
			 			var i = isEmpty(estrate)? 0 :Number(estrate)/100;	
			 			 
			 			var nextdate = addyearsToDate(dateinvested, yrofret); 				
			 			var n = getYears(dateinvested, nextdate);
			 			var pmt = Number(disimburseamt);
			 			var pv = Number(currnav);
			 		 
			 			
			 			 var pvannlincome = FVCalculation(i, n,pmt, (pv),  1);
			 			 pvannlincome = Math.sign(pvannlincome) == -1 ? pvannlincome : (-1 *pvannlincome);
			 			 
			 			disincomeamt  = FVCalculation(i, n ,0,  (pvannlincome),  1);
			 			disincomeamt = disincomeamt * accPrt;
			 			
			 		}
			 		
//			 		$tblRetRow.find("td:eq(4)").find("select:eq(0)").val("REGULAR");
//			 		$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage) + Number(ageupto) );//Age Ends
					
			 	}
			 	
			 	if(rspflag == "Y"){
			 		
			 		var rsp_freq = 1;
			 		 switch(rspfreq){
					 case "ANNUAL":rsp_freq=1;break;
					 case "SEMI ANNUAL":rsp_freq=2;break;
					 case "QUARTERLY":rsp_freq=4;break;
					 case "MONTHLY":rsp_freq=12;break;
					 case "SINGLE":rsp_freq=1;break;
					 
					 }
					 
					 rspyrs = isEmpty(rspyrs)?0:rspyrs;
					 var i = isEmpty(estrate)? 0 :Number(estrate)/100;	
					 var n = rspyrs;
					 var pv = -1 * currnav;
					 var pmt = -1 * Number(rspinvamt) * rsp_freq;			 
					 
					 var rspfv = FVCalculation(i, n,pmt, pv,  1);
					
					 
					 i = isEmpty(estrate)? 0 :Number(estrate)/100;	
					 perdofinv = isEmpty(perdofinv)?0:perdofinv;
					 n = perdofinv - rspyrs;					 
					 
					 incomeamount = FVCalculation(i, n,0, -1 * rspfv,  1);
					 
					 
					 /*perdofinv = isEmpty(perdofinv)?0:perdofinv;
					 
					 
						var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
			 			var n = rspyrs < perdofinv ? rspyrs : perdofinv; // addyearsToDate(dateinvested, yrofret);
			 			var pmt = Number(rspinvamt);
//			 			var pv = currnav;
					 
					 var pvannlincome = FVCalculation(i, n,pmt, 0,  1);
					 pvannlincome = Math.sign(pvannlincome) == -1 ? pvannlincome : (-1 *pvannlincome);
					 
					rspincomeamt  = FVCalculation(i, n ,0,  (pvannlincome),  1);
//					dec 2019
					*/
			 	}
			 	
//			 	console.log(incomeamount +","+rspincomeamt +","+disincomeamt);
//			 	if( paymentmtd == "CPFOA" ||  paymentmtd == "CPFOA" ||  paymentmtd == "CPFOA" ||  paymentmtd == "CPFOA"){
//			 	if( paymentmtd != "CPFOA" ||  paymentmtd != "CPFMA" ||  paymentmtd != "CPFSA" ||  paymentmtd != "CPFRA"){
//			 		$tblRetRow.find("td:eq(2)").find('input:eq(0)').val("CPF-RP Investment");//Classification	
//			 	}else{
			 		$tblRetRow.find("td:eq(2)").find('input:eq(0)').val("Investment");//Classification
//			 	}
				$tblRetRow.find("td:eq(3)").find('input:eq(0)').val(fund);	
		 
				selectNullvalChk($tblRetRow.find("td:eq(4)"),"SINGLE");
				
				if(rspflag != "Y"){
					
					var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
					var n = perdofinv; 			
					var pv = Number(currnav);
					incomeamount =  FVCalculation(i, n, 0, (-1*pv), 1);
					
				}
				
				incomeamount = ( Number(incomeamount) ) * accPrt;
				
			 	$tblRetRow.find("td:eq(5)").find('input:eq(0)').val(Math.round(incomeamount));
			 	
			 	if(!isEmpty(disimbursebase)){
			 		incomeamount = ( Number(disincomeamt) + Number(rspincomeamt) ) * accPrt;
			 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val(Math.round(incomeamount));
			 	}
			 	
				//escalation rate
				$tblRetRow.find("td:eq(6)").find('input:eq(0)').val(estrate);  
			
				//roi
				$tblRetRow.find("td:eq(7)").find('input:eq(0)').val();  
			
				selectNullvalChk($tblRetRow.find("td:eq(8)"),isEmpty(ownership)? basedon :ownership);

				//Retirement self age
				$tblRetRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty(ageIncomeEnd)) ? Number("0") : Number(ageIncomeEnd)); //Age Inc starts
		 
				$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(ageIncomeEnd)) ? Number("0") : Number(ageIncomeEnd)  );
		  
				applyToastrAlert("Investment data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen");
			
				
			
	 }else{
		 
		 
		 $('#fnaInvestmentTbl tbody tr').find('td:eq(0) input.rowrefid').each(function(){
				
				var invrefid = $(this).val();
				
				$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
		     	   if(invrefid == $(this).val()){
		     		   
		     		  $(this).closest("tr").hide();
		     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
						
		     		 
		     	   }
		        });
				
				
				/*$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
		     	   if(invrefid == $(this).val()){
		     		  $(this).closest("tr").hide();
		     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
		     	   }
		        });
				
				$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(invrefid == $(this).val()){
			     		  $(this).closest("tr").hide();
			     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
			     	   }
			        });*/
				
				
			});
			
	 }
	return true;
}

/****************************End of Synronization with Investment To Retirement Planning **************************************************/



/**************************** Total Calculated Value from Investment To Expected Inflow Outflow(Investment/divident) ***********************/
function calcTotalInvestAmts(){  
	 var sumslfcash=0,sumspscash=0,sumfamcash=0;
	 var $fnaInvestmentTbl = fnaInvestmentTbl.rows().count();
var ownership = "" , mode = "";
 
	 if($fnaInvestmentTbl >0){
		 
		 $("#fnaInvestmentTbl tbody tr").each(function(i,row){
			 
			 ownership=$(this).find("td:eq(2)").find('select:eq(0)').val();			 
			 mode=$(this).find("td:eq(0)").find('input:eq(0)').val(); 
			 
			 var CurNavAmt	=Number($(this).find("td:eq(14)").find("input:eq(0)").val()); //Current NAV
			 var annlDivd=Number($(this).find("td:eq(19)").find("input:eq(0)").val())/100; //Annual Dividend
			 var dividPaymode=$(this).find("td:eq(20)").find("select:eq(0)").val();//Dividend payment mode
			 var reinvest=$(this).find("td:eq(16)").find('select:eq(0)').val();//re-investment
			 var divdBasedOn=$(this).find("td:eq(17)").find('select:eq(0)').val();//divident based on
			 var dividendAmt=Number($(this).find("td:eq(21)").find('input:eq(0)').val()); //divident amount
			 var paymtd=$(this).find("td:eq(10)").find('select:eq(0)').val(); //Payment method
			 var TopUpAmt=1; 
			
			 if(reinvest == "N" && paymtd=="Cash" && mode != "D"){
			 if(!isEmpty(divdBasedOn)){
				 if(dividPaymode == 'ANNUAL'){
						TopUpAmt=1;
					}else if(dividPaymode == 'SEMI ANNUAL'){
						TopUpAmt=2;
					}else if(dividPaymode == 'QUARTERLY'){
						TopUpAmt=4;
					}else if(dividPaymode == 'MONTHLY'){
						TopUpAmt=12;
					}else if(dividPaymode == 'SINGLE'){
						TopUpAmt=1;
					}
			 }
			 
			 
			 var amount = 0;
			 
			 if(divdBasedOn == "PAR"){
				 amount= dividendAmt;
			 }else{
				 amount= dividendAmt;//CurNavAmt * annlDivd * TopUpAmt;
			 }
			 
			 if(!isEmpty(amount)){if(ownership =="Self"){sumslfcash +=Number(amount);}}
			 if(!isEmpty(amount)){if(ownership =="Spouse"){sumspscash +=Number(amount);}}
			 if(!isEmpty(amount)){if(ownership =="Joint"){sumfamcash +=Number(amount);}}
		
			 }
			 
		 });
	 }
	  
//	 if(!( sumslfcash==0 && sumspscash==0 && sumfamcash==0 )){ 
		applyToastrAlert("Investment Income,dividends, gains is calculated and Reflected to Expected fund Inflow and Outflow Screen");
		console.log("sumslfcash=="+sumslfcash);
		$("#incsrcSelfNempDivdamt").val(remPriceAfDec(sumslfcash));
		
		$("#incsrcSpsNempDivdamt").val(remPriceAfDec(sumspscash)); 
		
		$("#incsrcJointNempDivdamt").val(remPriceAfDec(sumfamcash));
		
//	 } 
	 
	 
//	 if(sumslfcash==0){
//		 $("#incsrcSelfNempDivdamt").val(sumslfcash);
//	 }
//	 if(sumspscash==0){
//		 $("#incsrcSpsNempDivdamt").val(sumspscash);
//	 }
//	 if( sumfamcash==0 ){
//		 $("#incsrcJointNempDivdamt").val(sumfamcash);
//	 }
	 
	
	 calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);
	 calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);
	 calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);
	 
	 return true;
}

function newRowInvestCpfTbl($tblInvRow){
	
	
	var tempPayMeth = $tblInvRow.find("td:eq(10)").find('select:eq(0)').val().toUpperCase();
	var rowRefID = $tblInvRow.find("td:eq(0)").find('input:eq(2)').val();//"INV_"+$tblInvRow.index();
	
	if(  tempPayMeth == "CPFOA" || tempPayMeth  == "CPFSA" || 	tempPayMeth  == "CPFMA" || tempPayMeth  == "CPFRA"){
		
		var reinvest 	= $tblInvRow.find("td:eq(16)").find('select:eq(0)').val();
		$tblInvRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
		
		var rowexist = chkCPFRowExist(rowRefID);
		var rowexistDivi = chkCPFRowExist("DIVI"+rowRefID);
		
		var $tblCpfRow = null;
		var $tblCpfRowDivi = null;
				
		if(rowexist == null){
			getCADRows(null);
			$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last");
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
			$tblCpfRow =  chkCPFRowExist(rowRefID);//$("#cpfAccAddDedTable tbody tr:last"); 
		}else{
			$tblCpfRow = rowexist;
		}
		
		if(reinvest == "N" && rowexistDivi == null){
			getCADRows(null);
			$tblCpfRowDivi = $("#cpfAccAddDedTable tbody tr:last"); 
			$tblCpfRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);
			$tblCpfRowDivi =  chkCPFRowExist("DIVI"+rowRefID);//$("#cpfAccAddDedTable tbody tr:last"); 
		}else if(reinvest == "N" && rowexistDivi != null){
			$tblCpfRowDivi = rowexistDivi;
		}

		
		var pkid = $tblInvRow.find("td:eq(0)").find('input:eq(1)').val();
		if(pkid.indexOf("AS_") == 0){
			if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
			
			if(reinvest == "N" && isEmpty($tblCpfRowDivi.find("td:eq(0)").find('input:eq(1)').val())){
				$tblCpfRowDivi.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
				
		}
		

		var ownership 	= $tblInvRow.find("td:eq(2)").find('select:eq(0)').val();//ownership
		
		var fmobj =$tblInvRow.find("td:eq(6)").find('select:eq(0)');
		var fundobj =$tblInvRow.find("td:eq(7)").find('select:eq(0)');	
		var fundmanager = fmobj.find("option:selected").text();
		var fund = fundobj.find("option:selected").text();
		
		
		var estrate	=$tblInvRow.find("td:eq(8)").find('input:eq(0)').val();	 
		var amtinvested	=$tblInvRow.find("td:eq(9)").find('input:eq(0)').val();//amount invested	
		var paymentmtd	=$tblInvRow.find("td:eq(10)").find('select:eq(0)').val();//Payment method	
		var dateinvested =$tblInvRow.find("td:eq(11)").find('input:eq(0)').val();
		 var currnav =$tblInvRow.find("td:eq(14)").find('input:eq(0)').val();
		
		
		var reinvestbased 	=$tblInvRow.find("td:eq(17)").find('select:eq(0)').val();
		var reinvestPAR 	=$tblInvRow.find("td:eq(18)").find('input:eq(0)').val();
		var reinvestdivrate 	=$tblInvRow.find("td:eq(19)").find('input:eq(0)').val();
		var reinvestdivfreq 	=$tblInvRow.find("td:eq(20)").find('select:eq(0)').val();
		var reinvestdivamt 	=$tblInvRow.find("td:eq(21)").find('input:eq(0)').val();
		
		var rspflag		=$tblInvRow.find("td:eq(22)").find('select:eq(0)').val();
		var rspfreq		=$tblInvRow.find("td:eq(23)").find('select:eq(0)').val();//regular frequency
		var rspinvamt	=$tblInvRow.find("td:eq(24)").find('input:eq(0)').val();//investment amount
		var rspyrs	=$tblInvRow.find("td:eq(25)").find('input:eq(0)').val();//investment amount
		
		var objofinv	=$tblInvRow.find("td:eq(26)").find('select:eq(0)').val();//objective of investment
		var yrofret		=$tblInvRow.find("td:eq(27)").find('input:eq(0)').val();//year of retirement
		var nameofchd	=$tblInvRow.find("td:eq(28)").find('select:eq(0)').val();//name of child
		var accumlation	=$tblInvRow.find("td:eq(29)").find('input:eq(0)').val(); 
		var perdofinv	=$tblInvRow.find("td:eq(30)").find('input:eq(0)').val(); 
		
		var selfAge = $("#dfSelfAge").val();
		
//		if(reinvest == "N"){
		if(!isEmpty(paymentmtd)){ 
			
				if(paymentmtd == "CPFOA" || paymentmtd == "CPFSA" || paymentmtd == "CPFMA" || paymentmtd == "CPFRA"){
					  
					var cpfacc="",ccid="";
				 
				 if(paymentmtd == "CPFOA"){cpfacc="Ordinary";ccid="CPFACC000001";}
				 else if(paymentmtd == "CPFSA"){cpfacc="Special";ccid="CPFACC000002";}
				 else if(paymentmtd == "CPFMA"){cpfacc="Medisave";ccid="CPFACC000003";}
				 else if(paymentmtd == "CPFRA"){cpfacc="Retirement";ccid="CPFACC000004";}
				 else {cpfacc="";ccid="";}
			 
				 
				 
				 if(ownership == "Self"){
					 $tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");//Name of account
				 }else  if(ownership == "Spouse"){
					 $tblCpfRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
				 }else{
					 $tblCpfRow.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
				 } 
				 
				 $tblCpfRow.find("td:eq(3)").find('select:eq(0)').val(ownership); //Applicant Type
	
				 $tblCpfRow.find("td:eq(6)").find('input:eq(0)').val(ccid);//Type of CPF Account 
				 $tblCpfRow.find("td:eq(6)").find('select:eq(0)').val(ccid);
				 
	//			 $tblCpfRow.find("td:eq(7)").find('input:eq(0)').val(dateinvested);//Period From
	//			 $tblCpfRow.find("td:eq(7)").find('input:eq(1)').val(selfAge);
				 
				 
				 if(reinvest == "N"){
					 
					 if(ownership == "Self"){
						 $tblCpfRowDivi.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");//Name of account
					 }else  if(ownership == "Spouse"){
						 $tblCpfRowDivi.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
					 }else{
						 $tblCpfRowDivi.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
					 } 
					 
					 $tblCpfRowDivi.find("td:eq(3)").find('select:eq(0)').val(ownership); //Applicant Type
	
					 $tblCpfRowDivi.find("td:eq(6)").find('input:eq(0)').val(ccid);//Type of CPF Account 
					 $tblCpfRowDivi.find("td:eq(6)").find('select:eq(0)').val(ccid);
					 
	//				 $tblCpfRowDivi.find("td:eq(7)").find('input:eq(0)').val(dateinvested);//Period From
	//				 $tblCpfRowDivi.find("td:eq(7)").find('input:eq(1)').val(selfAge);
					 
				 }
				 
				 var incomeamount = 0,rspincomeamt = 0;
				 var enddate = "";
				 var typeofdesc = "";
				 var typeoftrans="Addition";
				 var remaininginvyrs = 0;
				
				 
				 if(objofinv == "Retirement Planning" ||objofinv == "CPF-RP" || objofinv == "No plans"){
					 					 
					 if(reinvest == "N"){
						 
							var n = Number(perdofinv);
					 		var i = isEmpty(estrate)? 0 :Number(estrate)/100;
					 		var pv = Number(reinvestdivamt);
								
							incomeamount  = FVCalculation(i, n,0, -1*(pv), 1);
							
							typeofdesc = "Investment - Dividends";
														
							$tblCpfRowDivi.find("td:eq(5)").find('select:eq(0)').val(typeoftrans); //Types of Transaction
							$tblCpfRowDivi.find("td:eq(4)").find('select:eq(0)').val(typeofdesc); //Description of Investment
							 
							 
							var endage="";
							 if(!isEmpty(perdofinv)){
								 enddate = addyearsToDate(dateinvested, perdofinv);
								 endage = Number(selfAge)+Number(perdofinv);
							 }
							 
							 $tblCpfRowDivi.find("td:eq(7)").find('input:eq(0)').val(dateinvested);//Period From
							 $tblCpfRowDivi.find("td:eq(7)").find('input:eq(1)').val(selfAge);
							 
							 $tblCpfRowDivi.find("td:eq(8)").find('input:eq(0)').val(enddate);//Period To		 
							 $tblCpfRowDivi.find("td:eq(8)").find('input:eq(1)').val(endage);//Period To
							 
							 $tblCpfRowDivi.find("td:eq(9)").find('input:eq(0)').val(Math.round(Number(incomeamount)));//Amount
							 
							 $tblCpfRowDivi.find("td:eq(10)").find('select:eq(0)').val(1); //Frequency of Transaction
							 
							 $tblCpfRowDivi.find("td:eq(11)").find('select:eq(0)').val(""); //Amt to be transferred
							 
					}
						 
					 
					 if(rspflag == "Y"){
						 
						 
						 var rsp_freq = 1;
				 		 switch(rspfreq){
						 case "ANNUAL":rsp_freq=1;break;
						 case "SEMI ANNUAL":rsp_freq=2;break;
						 case "QUARTERLY":rsp_freq=4;break;
						 case "MONTHLY":rsp_freq=12;break;
						 case "SINGLE":rsp_freq=1;break;
						 
						 }
						
						 
						 rspyrs = isEmpty(rspyrs)?0:rspyrs;
						 perdofinv = isEmpty(perdofinv)?0:perdofinv;
						 remaininginvyrs =  perdofinv - rspyrs ;//rspyrs < perdofinv ? perdofinv - rspyrs : perdofinv;
						 
							var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
				 			var n = rspyrs; // addyearsToDate(dateinvested, yrofret); 			
				 			var pmt = -1 * Number(rspinvamt) * Number(rsp_freq);
				 			var pv = -1 * Number(currnav);
						 
	//			 			var pvannlincome = FVCalculation(i, n,(pmt), 0, 1);
	//			 			pvannlincome = Math.sign(pvannlincome) == -1 ? pvannlincome : (-1 *pvannlincome);	 			 
	//			 			rspincomeamt  = FVCalculation(i, n ,0,  (pvannlincome),  1);
				 			
				 			rspincomeamt = FVCalculation(i, n, pmt,  pv,  1);
				 			
				 			 
				 			if(remaininginvyrs >0 ){
				 				rspincomeamt =  FVCalculation(i, remaininginvyrs, 0, (-1*rspincomeamt), 1);
					 			console.log("for remaining  yrs "+remaininginvyrs+", FV="+rspincomeamt);
				 			}
				 			
//				 			i = isEmpty(estrate)? 0 :Number(estrate)/100;	
//							 perdofinv = remaininginvyrs;//isEmpty(perdofinv)?0:perdofinv;
//							 n = perdofinv - rspyrs;
//							 
//							 console.log(i+","+n+","+rspincomeamt)
//							 
//							 incomeamount = FVCalculation(i, n,0, -1 * rspincomeamt,  1);
							 
//				 			incomeamount = Number(incomeamount) + Number(rspincomeamt);
						 
					 }
					 
					 
//					 if(rspflag != "Y"){
						 
						 	var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
				 			var n = perdofinv; // addyearsToDate(dateinvested, yrofret); 			
				 			var pv = Number(currnav);
				 			incomeamount =  FVCalculation(i, n, 0, (-1*pv), 1);
				 			
				 			console.log("current NAV for "+n+", FV="+incomeamount);
						 
//					 }
					 
					 
					 typeofdesc = "Investment";
					 
					 $tblCpfRow.find("td:eq(5)").find('select:eq(0)').val(typeoftrans); //Types of Transaction
					 $tblCpfRow.find("td:eq(4)").find('select:eq(0)').val(typeofdesc); //Description of Investment
					 
					 
					var endage="";
					 if(!isEmpty(perdofinv)){
						 enddate = addyearsToDate(dateinvested, perdofinv);
						 endage = Number(selfAge)+Number(perdofinv);
					 }
					 
					 $tblCpfRow.find("td:eq(7)").find('input:eq(0)').val(enddate);//Period From
					 $tblCpfRow.find("td:eq(7)").find('input:eq(1)').val(endage);
					 $tblCpfRow.find("td:eq(8)").find('input:eq(0)').val(enddate);//Period To		 
					 $tblCpfRow.find("td:eq(8)").find('input:eq(1)').val(endage);//Period To
					 
					 $tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(Math.round(Number(incomeamount)  + Number(rspincomeamt)   ));//Amount
					 
					 $tblCpfRow.find("td:eq(10)").find('select:eq(0)').val(-1); //Frequency of Transaction
					 
					 $tblCpfRow.find("td:eq(11)").find('select:eq(0)').val(""); //Amt to be transferred
				
//					 $tblCpfRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntUsd");
					
					 applyToastrAlert("Investment data will be reflected to CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen !");
					 mandatoryFldForCpf($tblCpfRow,$tblInvRow,'INVEST'); 
				 }
			}  
		}
	}else{
		
		
		 $('#fnaInvestmentTbl tbody tr').find('td:eq(0) input.rowrefid').each(function(){
				
				var invrefid = $(this).val();
				
				/*$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
		     	   if(invrefid == $(this).val()){
		     		   
		     		  $(this).closest("tr").hide();
		     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
						
		     		 
		     	   }
		        });*/
				
				
				$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
		     	   if(invrefid == $(this).val()){
		     		  $(this).closest("tr").hide();
		     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
		     	   }
		        });
				
				/*$("#srsTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
			     	   if(invrefid == $(this).val()){
			     		  $(this).closest("tr").hide();
			     		  $(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
			     	   }
			        });*/
				
				
			});
		
	}
  
	
	 
	return true;
}


function newRowInvestSRSTbl($tblInvRow){ 
	
//	var $tblInvRow=$("#fnaInvestmentTbl tbody tr:last");  ????????
	var pkid = $tblInvRow.find("td:eq(0)").find('input:eq(1)').val();
	var rowRefID = $tblInvRow.find("td:eq(0)").find('input:eq(2)').val();//"INV_"+$tblInvRow.index();
	
	var ownership 	=$tblInvRow.find("td:eq(2)").find('select:eq(0)').val();//ownership
	
	var description	=$tblInvRow.find("td:eq(7)").find('select:eq(0)').val();//description
	var estrate		=$tblInvRow.find("td:eq(8)").find('input:eq(0)').val();//escalation rate
		 
	var amtinvested	 =$tblInvRow.find("td:eq(9)").find('input:eq(0)').val();//amount invested	
	var paymentmtd	 =$tblInvRow.find("td:eq(10)").find('select:eq(0)').val();//Payment method	
	var dateinvested =$tblInvRow.find("td:eq(11)").find('input:eq(0)').val();//date invested
	var currnav 	 =$tblInvRow.find("td:eq(14)").find('input:eq(0)').val();//current NAV
	
	var reinvest 		 =$tblInvRow.find("td:eq(16)").find('select:eq(0)').val();
	var reinvestbased 	 =$tblInvRow.find("td:eq(17)").find('select:eq(0)').val();
	var reinvestPAR 	 =$tblInvRow.find("td:eq(18)").find('input:eq(0)').val();
	var reinvestdivrate  =$tblInvRow.find("td:eq(19)").find('input:eq(0)').val();
	var reinvestdivfreq  =$tblInvRow.find("td:eq(20)").find('select:eq(0)').val();
	var reinvestdivamt 	 =$tblInvRow.find("td:eq(21)").find('input:eq(0)').val();
	
	var rspflag		=$tblInvRow.find("td:eq(22)").find('select:eq(0)').val();
	var rspfreq		=$tblInvRow.find("td:eq(23)").find('select:eq(0)').val();//regular frequency
	var rspinvamt	=$tblInvRow.find("td:eq(24)").find('input:eq(0)').val();//investment amount
	var rspyrs		=$tblInvRow.find("td:eq(25)").find('input:eq(0)').val();//investment yrs
	
	var objofinv	=$tblInvRow.find("td:eq(26)").find('select:eq(0)').val();//objective of investment
	var yrofret		=$tblInvRow.find("td:eq(27)").find('input:eq(0)').val();//year of retirement
	var nameofchd	=$tblInvRow.find("td:eq(28)").find('select:eq(0)').val();//name of child
	var accumlation	=$tblInvRow.find("td:eq(29)").find('input:eq(0)').val(); 
	var perdofinv	=$tblInvRow.find("td:eq(30)").find('input:eq(0)').val(); 
	
 
	$tblInvRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
	
	 
	if(!isEmpty(paymentmtd)){ 
		
		if(paymentmtd == "SRS"){
			
			 if(reinvest == "N"){
				 
//				 var rowRefID = "INV_"+$tblInvRow.index()+"NOT_RI"; //NOT_RI = Not Reinvested
					
					var rowexistDivi = chkSRSRowExist("DIVI"+rowRefID);
					var $tblSrsRowDivi = null;
							
					if(rowexistDivi == null){
						getcshSRSRows(null);
						$tblSrsRowDivi =  $("#srsTable tbody tr:last"); 
					}else{
						$tblSrsRowDivi = rowexistDivi;
					}

//					$tblSrsRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
				 
//				var n = Number(perdofinv);
//		 		var i = isEmpty(estrate)? 0 :Number(estrate)/100;
//		 		var pv = Number(currnav);
					
//				$tblSrsRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);				
				incomeamount  =  reinvestdivamt;// FVCalculation(i, n,0, -1*(pv), 1); 
				
				typeofdesc = "Investment - Dividends";
				
				if(pkid.indexOf("AS_") == 0){
					if(isEmpty($tblSrsRowDivi.find("td:eq(0)").find('input:eq(1)').val())){
						$tblSrsRowDivi.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
					}
				}	
				
				$tblSrsRowDivi.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val("DIVI"+rowRefID);
				
				$tblSrsRowDivi.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
				 
				$tblSrsRowDivi.find("td:eq(3)").find('input:eq(0)').val(typeofdesc + (isEmpty(description)? "" : "["+description+"]")); //Description of Investment
				 
				$tblSrsRowDivi.find("td:eq(4)").find('select:eq(0)').val("ANNUAL"); 
				 
				$tblSrsRowDivi.find("td:eq(5)").find('input:eq(0)').val(Math.round(Number(incomeamount)));//Amount
				 
				$tblSrsRowDivi.find("td:eq(6)").find('input:eq(0)').val(dateinvested);//Period From
				 			
				 if(!isEmpty(perdofinv)){
					 enddate = addyearsToDate(dateinvested, perdofinv); 
				 }	 
				 
				 $tblSrsRowDivi.find("td:eq(7)").find('input:eq(0)').val(enddate);//Period To	
				
		}
			
			var rowexist = chkSRSRowExist(rowRefID);
			var $tblSrsRow = null;
					
			if(rowexist == null){
				getcshSRSRows(null);
				$tblSrsRow =  $("#srsTable tbody tr:last"); 
			}else{
				$tblSrsRow = rowexist;
			}
			 
			$tblSrsRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
			
			
			if(pkid.indexOf("AS_") == 0){
				if(isEmpty($tblSrsRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblSrsRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
			}	
		 
		 var incomeamount = 0,rspincomeamt = 0;
		 var enddate = "";
		 var typeofdesc = "";
		 var remaininginvyrs=0;
		 
		 
		 if(rspflag == "Y"){
			 
			 var rsp_freq = 1;
	 		 switch(rspfreq){
			 case "ANNUAL":rsp_freq=1;break;
			 case "SEMI ANNUAL":rsp_freq=2;break;
			 case "QUARTERLY":rsp_freq=4;break;
			 case "MONTHLY":rsp_freq=12;break;
			 case "SINGLE":rsp_freq=1;break;
			 
			 }
			 
			 rspyrs = isEmpty(rspyrs)?0:rspyrs;
			 perdofinv = isEmpty(perdofinv)?0:perdofinv;
			 remaininginvyrs =  perdofinv - rspyrs ;//rspyrs < perdofinv ? perdofinv - rspyrs : perdofinv;
			 
				var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
	 			var n = rspyrs; // addyearsToDate(dateinvested, yrofret); 			
	 			var pmt = -1 * Number(rspinvamt) * rsp_freq;
	 			var pv = -1 * Number(currnav);
	 			
	 			rspincomeamt = FVCalculation(i, n, pmt,  pv,  1);
	 			
	 			console.log("for rspp yrs "+n+", FV="+rspincomeamt);
	 			if(remaininginvyrs >0 ){
	 				rspincomeamt =  FVCalculation(i, remaininginvyrs, 0, (-1*rspincomeamt), 1);
		 			console.log("for remaining  yrs "+remaininginvyrs+", FV="+rspincomeamt);
	 			}
	 			
	 			i = isEmpty(estrate)? 0 :Number(estrate)/100;	
				 perdofinv = isEmpty(perdofinv)?0:perdofinv;
				 n = perdofinv - rspyrs;
				 
				 console.log(i+","+n+","+rspincomeamt)
				 
				 incomeamount = FVCalculation(i, n,0, -1 * rspincomeamt,  1);
	 			
//	 			 $tblSrsRow.find("td:eq(5)").find('input:eq(0)').val(Math.round(Number(rspincomeamt)));//Amount
	 			 
		 		
		 }
		 
		 
		 if(rspflag != "Y"){
			 
			 var i = isEmpty(estrate)? 0 :Number(estrate)/100;			
			 var n = perdofinv; 	
			 var pv = Number(currnav);
			 incomeamount =  FVCalculation(i, n, 0, (-1*pv), 1);
			 typeofdesc = "Investment";
				
			console.log("current NAV for "+n+", FV="+incomeamount);
			
			
			 
		 }
		 
		 $tblSrsRow.find("td:eq(5)").find('input:eq(0)').val(Math.round(Number(incomeamount)));//Amount
		 
		 $tblSrsRow.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
		 
		 $tblSrsRow.find("td:eq(4)").find('select:eq(0)').val("SINGLE"); 
		 			
		 if(!isEmpty(perdofinv)){
			// enddate =  dateinvested;//addyearsToDate(dateinvested, 0); 
			 enddate = addyearsToDate(dateinvested, perdofinv); 
		 }	 
		 
		 $tblSrsRow.find("td:eq(6)").find('input:eq(0)').val(enddate);//Period From
		 
		 $tblSrsRow.find("td:eq(7)").find('input:eq(0)').val(enddate);//Period To	
		 
		 $tblSrsRow.find("td:eq(3)").find('input:eq(0)').val(typeofdesc + (isEmpty(description)? "" : "["+description+"]")); //Description of Investment
		   
		 applyToastrAlert("Investment data will be reflected to SRS Screen !");
		 
		 mandatoryFldForSRS($tblSrsRow,$tblInvRow,'INVEST'); 
		  
	}  
 } 
	 
	return true;
}
/**************************** Clear Current NAV on Focus and Onchange Description of Investment***********************/
var invclearnavprev,invclearnavid;
$("#txtFldDlgInvDesc,#txtFldDlgInvDateInvst,#txtFldDlgInvInstitution").on("focus",function(){ 
	invclearnavid=$(this).attr("id");
	invclearnavprev=$(this).val();
}).change(function(){
	clearCurrentBidPriceAlert($(this),invclearnavid,invclearnavprev,$("#txtFldDlgInvCurBid"),null);
});


function clearCurrentBidPriceAlert(elmid,invclearnavid,invclearnavprev,curbidprcid,row){
	if(!isEmpty(elmid.val())){ 
		if(!isEmpty(curbidprcid.val())){
			$("#confirmationalertmsgdiv #confalertimg").html(""); 
			$("#confirmationalertmsgdiv #confalertmsg").html("Do you want to clear Current Bid Price");
			$('#confirmationalertmsgdiv').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
				$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){   
						curbidprcid.val("");   
						currentNavcalc(row);
						$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
						$("#"+invclearnavid).val(invclearnavprev);
					  	currentNavcalc(row);
					  	$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				
			});
			}
		}	
}
 
/**************************** Fetch Current NAV From DB***********************/
$("a#genNavicon").on("click",function(){
	if(!validateNavDetails())return;   
	fetchCurentNAV($("#txtFldDlgAnalsByPortfolio"),$("#txtFldDlgInvDesc"),$("#txtFldDlgInvDateInvst"),$("#txtFldDlgInvCurBid")); 
});

function fetchCurentNAV(port,desc,date,curbid){
	var portofolioExist = port.val();
 
	if(portofolioExist == "N" || portofolioExist == ""){ 

	var fundcode  =desc.val();
	var dateInvest=date.val();
	showLoader(); 
	parameter = "DBCALLFOR=FETCH_NAV&strFundCode="+fundcode+"&strDateInvest="+dateInvest;
		 ajaxCall(parameter,servletName,function(Data){ 
			var retval = Data;  
			hideLoader(); 
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

	 			if(tabdets["CURRENT_NAV"]){ 
	 				var navval=tabdets["CURRENT_NAV"];  
	 				curbid.val(navval);
	 				currentNavcalc(null);
				} 
	 			
	 			if(tabdets["NO_NAV"]){ 
	 				var navval=tabdets["NO_NAV"];  
	 				curbid.val(navval);
	 				currentNavcalc(null);
	 				
				} 
	 			
	 			
	 		}
		}); 
	}else{
		applyErrorToastrAlert(NONAV_CALCULATED);
	}
	return true;
}
 

/**************************** Child Name based Year to Teritary Education Validation***********************/

$("#selDlgInvNameOfChild").on("change",function(){
	getChildYrtoTerEduc($(this),$("#selDlgInvYrToRet"));
});

function getChildYrtoTerEduc(curElm,chgElm){
	if(!isEmpty(curElm.val())){ 
		var rowCount = chldpartTbl.rows().count();	 
		if(rowCount >0){ 
			$('#childParticularsTable tbody').find('tr').each(function(){
				var childname=$(this).find("td:eq(2)").find("input:eq(0)").val();
				if(childname == curElm.val()){
					chgElm.val($(this).find("td:eq(7)").find("input:eq(0)").val());
				}
			}); 
		}
	}
}

/***************************************Mandatory Validation*************************************************/
 
function validateNavDetails(){
	
	
	 
	if(!(validateFocusFlds('Investment_Dialog','txtFldDlgInvInstitution', IPINVST_INSNAME))) return;
	if(!(validateFocusFlds('Investment_Dialog','txtFldDlgInvDesc', IPINVST_FUNDCODE))) return;
	if(!(validateFocusFlds('Investment_Dialog','txtFldDlgInvDateInvst',IPINST_DATEINV))) return; 
	
	  return true; 
}
 
/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgInvInstitution,#txtFldDlgInvDesc,#txtFldDlgInvDateInvst").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});

/**************************** Payment Method Validation***********************/
 

	$("#txtFldDlgAnalsByPortfolio").on("change",function(){
	 invportfolioChk($(this));
	});
	
	$("#selDlgInvObjInvst,#selDlgInvYrToRet").on("change",function(){
		yrtoretirementChk($("#selDlgInvYrToRet"));
	});

	$("#selDlgInvTypesOfInvst").on("change",function(){
		estimateInvRate($(this),$("#txtFldDlgInvEstInvRate"));
	});


	$("#selDlgDivdBasedOn").on("change",function(){ 
		enablePAR($(this),$("#txtFldDlgDividendPAR"),$("#txtFldDlgInvCurBid"),$("#txtFldDlgInvNoOfUnits"),$("#txtFldDlgInvNAV"),$("#genNavicon")); 
		enableDividends($("#selDlgDivdReInv"),$("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDividendAmt"));
			
	});

	$("#selDlgDivdReInv").on("change",function(){ 
		enableDividends($("#selDlgDivdReInv"),$("#selDlgDivdBasedOn"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDividendAmt"));
	});
	 
	$("#txtFldDlgInvCurBid,#txtFldDlgInvNoOfUnits,#selDlgDivdPaymode,#selDlgDivdBasedOn,#selDlgDivdReInv,#txtFldDlgDividendPAR,#txtFldDlgInvNAV").on("change",function(){
		
		calcDividendAmount($("#txtFldDlgAnlDivdRate"),$("#selDlgDivdPaymode"),$("#selDlgDivdBasedOn"),$("#selDlgDivdReInv"),$("#txtFldDlgDividendPAR"),$("#txtFldDlgInvNAV"),$("#selDlgDividendAmt"));
	}); 

	  
	
function invpaymentmtd(elmid,changeid,chgeid2){
	var invpaycash=elmid.val(); 
	if(invpaycash == 'Cash'){  //-Dividend enabling
//		$("#invAnlDivid").css("display","block"); 
//		changeid.prop("readonly",false);
//		chgeid2.prop("disabled",false);
	} else{
//		$("#invAnlDivid").css("display","none"); 
//		changeid.prop("readonly",true);
//		changeid.val("");
//		chgeid2.prop("disabled",true);
//		chgeid2.val("");
	}
	
	return true;
}

/****************************Analysis By Portfolio validation***********************/

function invportfolioChk(elmid){
	if(elmid.val() == 'Y'){  
		$("#currentnavdiv").find("label[id=currentnavlabelchange]").text("Current Portfolio NAV");
	}else{
		$("#currentnavdiv").find("label[id=currentnavlabelchange]").text("Current NAV");
	}
}


/****************************Objective based Year to retirement validation***********************/


  
function yrtoretirementChk(elmid){
	var yrtoretirement=elmid.val(); 
	var oriretyr=$("#retYrstoret").val();
	if(!isEmpty(yrtoretirement) && !isEmpty($("#selDlgInvObjInvst").val())){
	if($("#selDlgInvObjInvst").val() == "Retirement Planning" || $("#selDlgInvObjInvst").val() == "CPF-RP"){
		if(oriretyr < yrtoretirement){  
			$("#alertRetyrMsg").removeClass("hidden"); 
//			$("#selDlgInvYrToRet").val(oriretyr);
		}else{
			$("#alertRetyrMsg").addClass("hidden"); 
		}
	}else{
		$("#alertRetyrMsg").addClass("hidden"); 
	}
	}else{
		$("#alertRetyrMsg").addClass("hidden"); 
	}
	
	return true;
}

function estimateInvRate(typeofinv,estRate){
	 var invType=typeofinv.val(); 
		if(invType == "Bonds"){
			estRate.val($("#caBonds").val()); 
		}else if(invType == "ILP" || invType == "UT"){
			estRate.val($("#caUtilp").val()); 
		}else if(invType == "Stocks"){
			estRate.val($("#caShares").val()); 
		}else if(invType == "Dividend"){
			estRate.val(""); 
		}else if(invType == "Others"){
			estRate.val($("#caOthinv").val()); 
		}else{
			estRate.val(""); 
		} 
		
}
 

function enablePAR(elmId,enableID,curbid,units,nav,navicon){
	if(elmId.val() == "PAR"){ 
		enableID.prop("disabled",false);  
		
//		curbid.prop("disabled",true);
//		curbid.val("");
//		units.prop("disabled",true);
//		units.val("");
//		nav.prop("disabled",true);
//		nav.val("");
//		navicon.css("visibility","hidden");
	}else{ 
		enableID.prop("disabled",true);  
		enableID.val("");
//		curbid.prop("disabled",false); 
//		units.prop("disabled",false); 
//		nav.prop("disabled",false); 
//		navicon.css("visibility","visible");
	}
//	if(flag){
//		if(enableID.attr("disabled"))enableID.val("");
//		if(enableID.attr("disabled"))curbid.val("");
//		if(enableID.attr("disabled"))units.val("");
//		if(enableID.attr("disabled"))nav.val("");
//	}
}


function enableDividends(reinv,basedOn,par,divprct,paymode,divAmt){
 
 
		if(reinv.val() == "N"){

			basedOn.prop("disabled",false);
			
//			par.prop("disabled",false);
			divprct.prop("disabled",false); 
			paymode.prop("disabled",false); 
			divAmt.prop("disabled",false); 
			
//			curbid.prop("disabled",true);
//			units.prop("disabled",true);
//			navicon.css("visibility","hidden");
		}else{


			basedOn.prop("disabled",true);
			basedOn.val("");
			par.prop("disabled",true);
			par.val("");
			divprct.prop("disabled",true);
			divprct.val("");
			paymode.prop("disabled",true);
			paymode.val("");
			divAmt.prop("disabled",true);
			divAmt.val("");
//			
//			curbid.prop("disabled",false);
//			units.prop("disabled",false);
//			navicon.css("visibility","visible");
		}
	 
//		if(flag){
//			basedOn.val("");
//			par.val("");
//			divprct.val("");
//			paymode.val("");
//			divAmt.val(""); 
//		}
}


$("#txtFldDlgBscDsbrseOf").on("change",function(){
	disbursementOpts($("#txtFldDlgBscDsbrseOf"),$("#txtFldDlgDsbsAmt"),$("#txtFldDlgDsbsYrs"));
});

function disbursementOpts(disburseOpt,dsbsAmt,dsbsYrs){
	if(disburseOpt.val() == "Years"){
		$("#disburseAmtdiv").addClass("hidden");
		$("#disburseYrdiv").removeClass("hidden");  
		dsbsAmt.val(""); 
		dsbsYrs.prop("readonly",false);
		dsbsAmt.prop("readonly",true);
	}else if(disburseOpt.val() == "Amount"){
		$("#disburseAmtdiv").removeClass("hidden");
		$("#disburseYrdiv").addClass("hidden"); 
		dsbsYrs.val(""); 
		dsbsYrs.prop("readonly",true);
		dsbsAmt.prop("readonly",false);
	}else{
		$("#disburseAmtdiv").addClass("hidden");
		$("#disburseYrdiv").addClass("hidden");
		dsbsAmt.prop("readonly",true);
		dsbsYrs.prop("readonly",true);
		dsbsAmt.val("");
		dsbsYrs.val(""); 
	}
	
}


function calcDividendAmount(divprct,paymode,basedOn,reInvest,par,nav,divAmt){
	
	
	var dividPercnt = (isEmpty(divprct.val())) ? 0 : Number(divprct.val())/100; 
	var dividPaymode = paymode.val();
	var dividBasedOn = basedOn.val();
	var dividReInvest = reInvest.val();
	var dividPAR = (isEmpty(par.val())) ? 0 : Number(par.val());
	var dividNAV = (isEmpty(nav.val())) ? 0 : Number(nav.val()); 
	var resultant=0;
	var TopUpAmt=1;
	
	 if(!isEmpty(dividPaymode)){
		 if(dividPaymode == 'ANNUAL'){
				TopUpAmt=1;
			}else if(dividPaymode == 'SEMI ANNUAL'){
				TopUpAmt=2;
			}else if(dividPaymode == 'QUARTERLY'){
				TopUpAmt=4;
			}else if(dividPaymode == 'MONTHLY'){
				TopUpAmt=12;
			}else if(dividPaymode == 'SINGLE'){
				TopUpAmt=1;
			}
	 }
	 
	 
	if(!isEmpty(dividReInvest)){
		if(dividReInvest == "N"){
			if(dividBasedOn == "PAR"){
				resultant= dividPercnt * dividPAR / TopUpAmt * TopUpAmt;
			}else if(dividBasedOn == "NAV"){
				resultant= dividPercnt * dividNAV / TopUpAmt * TopUpAmt;
				par.val("");
			}
			
		} 
	}
	
	divAmt.val(RemDecimalNumber(resultant)); 
	
}

function addAvallisFin(crtElm,chgeElmId){
//	Avallis portfolio is Yes
	
	if(chgeElmId.find('option:eq(1)').val() == "AFPL"){
		chgeElmId.find('option:eq(1)').remove();
	}
	
	if(crtElm.val() == "Y"){
		//Name of Institution
		chgeElmId.find('option:eq(0)').after("<option value='AFPL'>Avallis Financial Pte Ltd</option>");
	}
}




function chkCPFRowExist(rowRefID){
	var $tblCpfRow = null;
	 $("#cpfAccAddDedTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblCpfRow = currrow;
		 } 
	});
	return $tblCpfRow;
}

 
function chkSRSRowExist(rowRefID){
	var $tblCpfRow = null;
	 $("#srsTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblCpfRow = currrow;
		 } 
	});
	return $tblCpfRow;
}


function chkRPIncAssetRowExist(rowRefID){
	var $tblRetRow = null;
	 $("#IncAssRetPlgtbl tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblRetRow = currrow;
		 } 
	});
	return $tblRetRow;
}





