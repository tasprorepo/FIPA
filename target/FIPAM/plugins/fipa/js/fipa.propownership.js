/**
 * Fna CPF Property Ownership Script
 */ 
$("a#syncproperty").on("click",function(){ 
	 
	calcTotalPropertyAmts();
	if($("#powncpfARow").hasClass("blinking")){
		$("#powncpfARow").removeClass("blinking");
	} 
	$("#property_li").click();	 
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#powncpfARow").addClass("blinking"); 
	
	if($("#powncpfARow").hasClass("blinking")){
		setTimeout(function() { 
		$("#property").scrollTop(0);
		 
	}, 1000);
		
	} 
	
	 
}); 



$("a#annualrentalincome").on("click",function(){ 
	 
	calcTotalPropertyAmts();  
	if($("#powncpfARow").hasClass("blinking")){
		$("#powncpfARow").removeClass("blinking");
	} 
	$("#property_li").click();	 
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#powncpfARow").addClass("blinking"); 
	
	if($("#powncpfARow").hasClass("blinking")){
		setTimeout(function() {
		$("#property").scrollTop(0); 
		 
		},1000);
	} 
	
	 
}); 

$("a#mortgagelnicon").on("click",function(){
	 
	calcTotalPropertyAmts();  
	if($("#powncpfARow").hasClass("blinking")){
		$("#powncpfARow").removeClass("blinking");
	}  
	
	$("#property_li").click();	 
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#powncpfARow").addClass("blinking"); 
	
	if($("#powncpfARow").hasClass("blinking")){
		setTimeout(function() {
		$("#property").scrollTop(0); 
		 
		},1000);
	} 
});


function openBackToCpfAD(){
	showLoader();
	if($("#CpfADARow").hasClass("blinking")){
		$("#CpfADARow").removeClass("blinking");
	}
	
	$("#cpf_li").click();	 
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#CpfADARow").addClass("blinking");  
	if($("#CpfADARow").hasClass("blinking")){
		setTimeout(function() {
		$("#centralpro").scrollTop(500);
		hideLoader();
		},1000);
		
	} 
	 
}

//Thulasy Added on 12/11/2018
function openBackToFnLiable(){
	 
	calcTotalPropertyAmts();  
	calcTotalLiabilitiesLoan();		
	if($("#liabSelfShortmort").hasClass("blinking")){
		$("#liabSelfShortmort").removeClass("blinking");
	} 
	$("#finliab_li").click();
//	$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);	
	$("#liabSelfShortmort").addClass("blinking"); 
	
	if($("#liabSelfShortmort").hasClass("blinking")){
		setTimeout(function() { 
		},1500);
	} 
	
}

 
/*Datatable Initialisation*/
//var fnaPropOwnTblByCPF = $('#fnaPropOwnTblByCPF').DataTable( {
//   destroy: true,
//   responsive: false,         
//   ordering: false,
//   searching: false,     
//   scrollY:  "40vh",
//   scrollX: true,
//   scroller: false,
//   scrollCollapse:false,
//   paging:false, 
//   filter:false,   
//   columnDefs: [], 
//   dom: '<<"top" ip>flt>',  
//   columnDefs: [  { width: '20px', targets: [0,1]},
//  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//   
//		 }, 
//}).draw();
	


/*Add Row Click */
$("#powncpfARow").on("click",function(){
	if(!valpropTbl())return;  
			propClearFlds(); 
			
			
			$("#txtFldDlgCpfPropOwnId").val(makeid(17));
			
			propObjChange($("#txtFldDlgCpfPropObj"),$("#txtFldDlgPropCurAnlRetInc"),$("#txtFldDlgCpfPropRentPerd"),$("#txtFldDlgPropYrsToRent"),true); 
			propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),true); 
			onSoldChange($("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),true); 
			retOnRetFnc($("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),true);  
			 
			showFIPAModel('propOwnCpf_Dialog','Property Ownership');   
//			$("#propOwnCpf_Dialog").find("input[id=txtFldDlgPropMode]").val("I");//instant save added line
			$('#propOwnCpf_Dialog').on('shown.bs.modal', function () {
//				$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#propOwnCpf_Dialog").find("input[id=txtFldDlgPropOwnCpfDesc]").focus();
				
				 $("#propOwnCpf_Dialog #txtFldDlgPropFVOnRent").prop("disabled", true);	 
				 $("#propOwnCpf_Dialog #propYrsToRet").val($("#retYrstoret").val()).prop("disabled", true);	 
				 
				$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatepropDetails())return;
					   	propRdlyflds(INS_MODE);  
					   	getPropOwnCpfRows(null); 
					   	chkClientSingleOrNot(); 
					   	$('#propOwnCpf_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getPropOwnCpfRows(dataset){  
//	<!--changes done 19/06/2019 -->

var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldpropMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldPropCpfOwnId"><input type="hidden" name="txtFldPropRefId" >';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radpropSelect"/><label>&nbsp;</label></div>'; 

var cell2 = '<input type="text" name="txtFldPropCpfOwnDesc" maxlength="300" class="form-control editable" onmouseover="fipaTooltip(this);" style="width:190px"/>';

var cell3 = '<input type="text" name="txtFldPropCpfMktVal" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';


var cell4 = '<select   name="txtFldPropCpfOwnership" class="form-control editable"  ></select>';

var cell5 = '<input type="text" name="txtFldPropCpfApprecrate" class="form-control editable applyEvntpCent3" onmouseover="fipaTooltip(this);" onchange="callCalcPropFV($(this));syncPropTblRow($(this).closest(\'tr\'));" />'; 


var cell6 = '<input type="text" name="txtFldPropCpfMortageos" class="form-control editable" onmouseover="fipaTooltip(this);"  />'; 

var cell7 = '<input type="text" name="txtFldPropCpfOsloanPerd" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';
 
var cell8 = '<select   name="txtFldPropCpfObj" class="form-control editable"  ></select>';

var cell9 = '<input type="text" name="txtFldPropCurAnlRetInc" class="form-control editable"   onmouseover="fipaTooltip(this);" />'; 


var cell10 = '<input type="text" name="txtFldPropRentPerd" class="form-control editable"   onmouseover="fipaTooltip(this);" />';


var cell11 = '<input type="text" name="txtFldPropCpfLoanBySlfCpf" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell12 = '<input type="text" name="txtFldPropCpfLoanBySlfCash" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell13 = '<input type="text" name="txtFldPropCpfLoanBySpsCpf" class="form-control editable clsfipaSpouse"   onmouseover="fipaTooltip(this);"  />';

var cell14 = '<input type="text" name="txtFldPropCpfLoanBySpsCash" class="form-control editable clsfipaSpouse"   onmouseover="fipaTooltip(this);" />';

var cell15 = '<select  name="txtFldPropCpfSold" class="form-control editable" ></select>'; 

var cell16 = '<select  name="txtFldPropRentOnRetire" class="form-control editable"  ></select>';

var cell17 ='<input type="text" name="txtFldPropCurRetInc" class="form-control editable"   onmouseover="fipaTooltip(this);"  />'+
'<input type="hidden" name="txtFldPropCpfCrtdBy"/><input type="hidden" name="txtFldPropCpfCrtdDate"/>';

var cell18 = '<input type="text" name="txtFldPropYrsToRent" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell19 = '<input type="text" name="txtFldPropFvOnRent" class="form-control editable" readonly="true"  onmouseover="fipaTooltip(this);"  />';

fnaPropOwnTblByCPF.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17,cell18,cell19] ).draw( false );

var rowCount = $('#fnaPropOwnTblByCPF tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#fnaPropOwnTblByCPF tbody tr').length : rowCount;
var $lastRow = $("#fnaPropOwnTblByCPF tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount);
$lastRow.find("td").find(":input").each(function(){
	$(this).on("click",function(){
		toggleSingleRow($(this));
	})
});

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
});
$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgCpfPropOwnId").val());

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radprop"+$lastRow.index())
.parent().find('label').attr('for',"radprop"+$lastRow.index());
 

$lastRow.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgPropOwnCpfDesc").val());
$lastRow.find("td:eq(2)").find('input:eq(0)').on("change",function(){  
	syncPropTblRow($lastRow);
			return;
		 
});


$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgCpfPropMktVal").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').addClass("applyEvntUsd"); 
$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
	calculateCrtRentIncome($lastRow.find("td:eq(3)").find('input:eq(0)'),$lastRow.find("td:eq(5)").find('input:eq(0)'),$("#retYrstoret"),$lastRow.find("td:eq(19)").find('input:eq(0)'));
	syncPropTblRow($lastRow);	
	
});



var Ownership = $("#txtFldDlgCpfPropOwnership > option").clone();
$lastRow.find("td:eq(4)").find('select:eq(0)').append(Ownership);
$lastRow.find("td:eq(4)").find('select:eq(0)').val($("#txtFldDlgCpfPropOwnership").val());
$lastRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
	calcTotalPropertyAmts();	 
	newRowPropCpfTbl($lastRow); 
	syncPropTblRow($lastRow);	
	return;
});


$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgCpfPropApprecrate").val());
 

$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCpfPropMortageos").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){ 
	calcTotalPropertyAmts(); 
});
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntUsd"); 


$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgCpfPropOsloanPerd").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntYrs"); 



 
var Objective = $("#txtFldDlgCpfPropObj > option").clone();
$lastRow.find("td:eq(8)").find('select:eq(0)').append(Objective);
$lastRow.find("td:eq(8)").find('select:eq(0)').val($("#txtFldDlgCpfPropObj").val());
$lastRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){ 
	
	if($(this).val()=="Res"){ 
		$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', true); 
    }
	if($(this).val()=="Inv"){
		$lastRow.find("td:eq(9)").find('input:eq(0)').attr('disabled', false);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').attr('disabled', false); 
	}
	if($(this).val()==""){
		
		$lastRow.find("td:eq(9)").find('input:eq(0)').attr('disabled', true);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').attr('disabled', true); 
	}
	propObjChange($(this),$lastRow.find("td:eq(9)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),true); 
	propyearstorent($(this),$lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),true);
	calcTotalPropertyAmts();
 
	return;
});
//

$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgPropCurAnlRetInc").val());
$lastRow.find("td:eq(9)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){ 
	
	propObjChange($lastRow.find("td:eq(8)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),true);
	calcTotalPropertyAmts(); 
	return;
});


$lastRow.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgCpfPropRentPerd").val());
$lastRow.find("td:eq(10)").find('input:eq(0)').addClass("applyEvntYrs"); 

 
$lastRow.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySlfCpf").val());
$lastRow.find("td:eq(11)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(11)").find('input:eq(0)').on("change",function(){
	calcTotalPropertyAmts();	  
	newRowPropCpfTbl($lastRow);
	return;
});
 

$lastRow.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySlfCash").val());
$lastRow.find("td:eq(12)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(12)").find('input:eq(0)').on("change",function(){
	calcTotalPropertyAmts(); 
		return;
	
});


$lastRow.find("td:eq(13)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySpsCpf").val());
$lastRow.find("td:eq(13)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(13)").find('input:eq(0)').on("change",function(){
	calcTotalPropertyAmts();	  
	newRowPropCpfTbl($lastRow);
		return;
});

$lastRow.find("td:eq(14)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySpsCash").val());
$lastRow.find("td:eq(14)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(14)").find('input:eq(0)').on("change",function(){
	calcTotalPropertyAmts();  
	return;
});

var Sold = $("#txtFldDlgCpfPropSold > option").clone();
$lastRow.find("td:eq(15)").find('select:eq(0)').append(Sold);
$lastRow.find("td:eq(15)").find('select:eq(0)').val($("#txtFldDlgCpfPropSold").val());
$lastRow.find("td:eq(15)").find('select:eq(0)').on("change",function(){ 
	if($(this).val() == "Y"){
		mandatoryFldForRetirement($(this),null,'PROP'); 
	}
	onSoldChange($(this),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('input:eq(0)'),true);
	propyearstorent($lastRow.find("td:eq(8)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),true);
	syncPropTblRow($lastRow);	

	return;
});



var Retirement = $("#txtFldDlgPropRentOnRetire > option").clone();
$lastRow.find("td:eq(16)").find('select:eq(0)').append(Retirement);
$lastRow.find("td:eq(16)").find('select:eq(0)').val($("#txtFldDlgPropRentOnRetire").val());
$lastRow.find("td:eq(16)").find('select:eq(0)').on("change",function(){  
	if($(this).val() == 'Y'){  
		 mandatoryFldForRetirement($(this),$lastRow,'PROP'); 
	}
	onSoldChange($lastRow.find("td:eq(15)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),true);
	retOnRetFnc($(this),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),true);
	 propyearstorent($lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),true);
	 syncPropTblRow($lastRow);
	return;			
		
});

$lastRow.find("td:eq(17)").find('input:eq(0)').val($("#txtFldDlgPropCurRetInc").val());
$lastRow.find("td:eq(17)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(17)").find('input:eq(0)').on("change",function(){
	onSoldChange($lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(18)").find('input:eq(0)'),true);
	retOnRetFnc($lastRow.find("td:eq(16)").find('select:eq(0)'),$(this),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),true);
	calcTotalPropertyAmts(); 
		return;
});


$lastRow.find("td:eq(18)").find('input:eq(0)').val($("#txtFldDlgPropYrsToRent").val());
$lastRow.find("td:eq(18)").find('input:eq(0)').addClass("applyEvntYrs");
 

 
 
$lastRow.find("td:eq(19)").find('input:eq(0)').val($("#txtFldDlgPropFVOnRent").val());
$lastRow.find("td:eq(19)").find('input:eq(0)').addClass("applyEvntUsd"); 


applyEventHandlers();


$lastRow.find("input,select").on("click",function(event){
	event.stopPropagation();
});
$lastRow.click(function() {
    var checkbox = $(this).find("td:eq(1)").find("input");
    if(checkbox.is(":checked")) {
        checkbox.prop("checked", false);
	$lastRow.removeClass("selected");
    }else {
        checkbox.prop("checked", true);
	$lastRow.addClass("selected");
    }
});

//DHTML CRUD ICONS
$lastRow.click(function(){
	/*toggleSingleRow($lastRow);*/
	crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
});

if(dataset != null){

	rowCount = $('#fnaPropOwnTblByCPF tbody tr').length;	
	
	$lastRow.find("td:first").find('span').text(rowCount);
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "propownId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			

		case "propRefId": 
			$lastRow.find("td:eq(0)").find('input:eq(2)').val(col);  
			if(!isEmpty(col)){$lastRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid");}
			break;
			
			
		case "propDescription": 
			$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
			break;
	

		case "propMktvalue": 
			$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
			break;
			
		case "propOwnership": 
			selectNullvalChk($lastRow.find("td:eq(4)"),col);
			break;
		 
		case "propApprecrate": 
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
			break;
			  
		case "propMortageos": 
			$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
			break; 
			
		case "propOsloanperd": 
			$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
			break;
			
			
		case "propObj": 
			selectNullvalChk($lastRow.find("td:eq(8)"),col);			
			break;
		
		case "propAnlRetInc":
			$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
			break;
			 
		case "propRentPerd": 
			$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
			if($lastRow.find("td:eq(8)").find('select:eq(0)').val()=="Res"){ 
				
				$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);   
				$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', true); 
		    }
			else if($lastRow.find("td:eq(8)").find('select:eq(0)').val()=="Inv"){
				
				$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', false);   
				$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', false); 
			}
			else{
				
				$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);   
				$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', true); 
			}
			break;
			
		case "propLoanBySelfcpf":
			$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
			break;
			
		case "propLoanBySelfcash":
			$lastRow.find("td:eq(12)").find('input:eq(0)').val(col); 
			break;
			
		case "propLoanBySpscpf":
			$lastRow.find("td:eq(13)").find('input:eq(0)').val(col); 
			break;
			
		case "propLoanBySpscash":
			$lastRow.find("td:eq(14)").find('input:eq(0)').val(col); 
			break;
			
		case "propSold":
			selectNullvalChk($lastRow.find("td:eq(15)"),col);
			break;
			
		case "propRentOnret":
			$lastRow.find("td:eq(16)").find('select:eq(0)').val(col); 
			break;
			
		case "propCurRetInc":
			$lastRow.find("td:eq(17)").find('input:eq(0)').val(col); 
			break;
			
		case "propYrsToRent":
			$lastRow.find("td:eq(18)").find('input:eq(0)').val(col);
			break;
			
		case "propFvOnrent":
			$lastRow.find("td:eq(19)").find('input:eq(0)').val(col);
			break;
			
		
		case "propCreatedBy": 
			$lastRow.find("td:eq(17)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "propCreatedDate":
			$lastRow.find("td:eq(17)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);
			break;
		
	
		case "propModifiedBy":
			infoDetsArr.push(col);
			break;
			
		case "propModifiedDate":
			infoDetsArr.push(col);
			break;	
		}			 
		 
	}
	}
else{

//		DHTML CRUD ICONS
		crudicons(null,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
	
}

propObjChange($lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),$lastRow.find("td:eq(10)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),false); 
propyearstorent($lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(9)").find('input:eq(0)'),false);
onSoldChange($lastRow.find("td:eq(15)").find('select:eq(0)'),$lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),false);
retOnRetFnc($lastRow.find("td:eq(16)").find('select:eq(0)'),$lastRow.find("td:eq(17)").find('input:eq(0)'),$lastRow.find("td:eq(18)").find('input:eq(0)'),$lastRow.find("td:eq(8)").find('select:eq(0)'),$lastRow.find("td:eq(15)").find('select:eq(0)'),false);




//sync property row
if(dataset == null){ 
	// instantPropSave($lastRow,INS_MODE);
	if(!($lastRow.find("td:eq(4)").find('select:eq(0)').val() == "Joint")){//Ownership
		syncPropTblRow($lastRow); 
	} 
	if($lastRow.find("td:eq(8)").find('select:eq(0)').val()=="Res"){ 
		$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', true); 
    }
	else if($lastRow.find("td:eq(8)").find('select:eq(0)').val()=="Inv"){
		$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', false);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', false); 
	}
	else{
		$lastRow.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);   
		$lastRow.find("td:eq(10)").find('input:eq(0)').prop('disabled', true); 
	}
	
newRowPropCpfTbl($lastRow);

toggleSingleRow($lastRow);
//instant save added line
 	 
} 
//$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
//$lastRow.find("select").prop("disabled",true);//instant save added line
}



//DHTML SELECT ALL
function SelAllfnaPropOwnTblByCPF(obj){
	
	if($(obj).is(":checked")){ 
		
		$('#fnaPropOwnTblByCPF tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#powncpfDRow").attr("disabled",false);
		$('#fnaPropOwnTblByCPF tbody tr').addClass("selected");
		
		var $rowCount = $('#fnaPropOwnTblByCPF tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			$("#powncpfERow").attr("disabled",true);
			$("#powncpfDRow").attr("disabled",true);
		}else if($rowCount == 1){
			$("#powncpfERow").attr("disabled",false);
			$("#powncpfDRow").attr("disabled",false);
		}else if($rowCount > 1){
			$("#powncpfERow").attr("disabled",true);
			$("#powncpfDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#fnaPropOwnTblByCPF tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#fnaPropOwnTblByCPF tbody tr').removeClass("selected");
		
		$("#powncpfERow").attr("disabled",true);
		$("#powncpfDRow").attr("disabled",true);
		
	}
	

}


 
/*Edit Row Click */
$("#powncpfERow").on("click",function(){
	powncpfVRow();
});


/*View Row Click */
function powncpfVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#fnaPropOwnTblByCPF tbody tr').length;	
	var $lastRow = $("#fnaPropOwnTblByCPF tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	 
	
	$("#fnaPropOwnTblByCPF tbody").find('input[name="radpropSelect"]').each(function(){ //Checkbox selection
		 var $curElm=$(this);
		if($curElm.is(":checked")){ 
			$(this).prop("checked",true);
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#fnaPropOwnTblByCPF tbody").find('input[name="radpropSelect"]').each(function(){ //Checkbox selection
 
		var $curElm=$(this);
		var $row = $curElm.parents("tr");
		
		if($curElm.is(":checked") || $row.hasClass("selected")){
			                                    
			var $mode = $row.find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $row.find("td:first").find('input:eq(0)').val($mode);  
				 $row.find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false);  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'});
				});  
					
					
				 	propRdlyflds($mode);
					propfilldlgval($row); 
 
					propObjChange($("#txtFldDlgCpfPropObj"),$("#txtFldDlgPropCurAnlRetInc"),$("#txtFldDlgCpfPropRentPerd"),$("#txtFldDlgPropYrsToRent"),false);
					propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),false);
					onSoldChange($("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),false); 
					retOnRetFnc($("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),false); 
					
					if($("#dfSelfMartsts").val() == "Single"){
			     		 $("input[name=txtFldDlgPropLoanBySpsCash]").val("");
			     		 $("input[name=txtFldDlgPropLoanBySpsCash]").prop("disabled",true);
			     		 $("input[name=txtFldDlgPropLoanBySpsCpf]").val("");
			    		 $("input[name=txtFldDlgPropLoanBySpsCpf]").prop("disabled",true);
			     	}
					
					$("#propOwnCpf_Dialog #txtFldDlgPropFVOnRent").prop("disabled", true); 
					showFIPAModel('propOwnCpf_Dialog','Property Ownership');
					$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#propOwnCpf_Dialog').on('shown.bs.modal', function () {
				//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line
//						$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#propOwnCpf_Dialog").find("input[id=txtFldDlgPropOwnCpfDesc]").focus();//Aravindh
						$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatepropDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			propfilldomval($RowId,$row); 
					     		}   
					     		calcTotalPropertyAmts();
  
					     		newRowPropCpfTbl($row); 
					     		
					     		syncPropTblRow($row); 
					     		
					     		if($("#dfSelfMartsts").val() == "Single"){
								   	 $("input[name=txtFldPropCpfLoanBySpsCpf]").each(function() {  
								   		 $(this).prop("disabled",true); 
										 $(this).val("");
								     });
								  $("input[name=txtFldPropCpfLoanBySpsCash]").each(function() {  
										$(this).prop("disabled",true);  
									    $(this).val("");
								   });  
						     	}
					     		
					     		propObjChange($row.find("td:eq(8)").find('select:eq(0)'),$row.find("td:eq(9)").find('input:eq(0)'),$row.find("td:eq(10)").find('input:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),false); 
					     		propyearstorent($row.find("td:eq(8)").find('select:eq(0)'),$row.find("td:eq(15)").find('select:eq(0)'),$row.find("td:eq(16)").find('select:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),$row.find("td:eq(9)").find('input:eq(0)'),false);
					     		onSoldChange($row.find("td:eq(15)").find('select:eq(0)'),$row.find("td:eq(16)").find('select:eq(0)'),$row.find("td:eq(17)").find('input:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),false);
					     		retOnRetFnc($row.find("td:eq(16)").find('select:eq(0)'),$row.find("td:eq(17)").find('input:eq(0)'),$row.find("td:eq(18)").find('input:eq(0)'),$row.find("td:eq(8)").find('select:eq(0)'),$row.find("td:eq(15)").find('select:eq(0)'),false);
//					     		instantPropSave($row,UPD_MODE); //instant save added line
					     		$('#propOwnCpf_Dialog').modal('hide'); 
								propClearFlds();
								crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
								
								if($row.find("td:eq(8)").find('select:eq(0)').val()=="Res"){ 
									
									$row.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);
									$row.find("td:eq(10)").find('input:eq(0)').prop('disabled', true);
									
							    }
								else if($row.find("td:eq(8)").find('select:eq(0)').val()=="Inv"){
									
									$row.find("td:eq(9)").find('input:eq(0)').prop('disabled', false);
									$row.find("td:eq(10)").find('input:eq(0)').prop('disabled', false);
								}
								else{
									
									$row.find("td:eq(9)").find('input:eq(0)').prop('disabled', true);
									$row.find("td:eq(10)").find('input:eq(0)').prop('disabled', true);
								}
								 
								
						});
						$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
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
$("#powncpfDRow").on("click",function(){  
	var flg=true;
	var rowCount = fnaPropOwnTblByCPF.row().count();
	if(rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		flg=false;
		return;
	}
	var isOneRowSelected=false;
	$('#fnaPropOwnTblByCPF tbody').find('input[type=checkbox]').each(function(){
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
		$("#confirmationalertmsgdiv #confalertmsg").html("To delete selected row? Other linked data will also be deleted");
		$('#confirmationalertmsgdiv').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
			}); 
		$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
			$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Message");
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){   
 
				$('#fnaPropOwnTblByCPF tbody').find('input[type=checkbox]').each(function(){
					if($(this).is(":checked") || $(this).closest("tr").hasClass("selected")){
						
						 
						var row = $(this).parents("tr");                                    
						var mode = $(this).parents("tr").find("td:first").find('input:eq(0)').val();
						
						
						var refId=$(this).parents("tr").find("td:eq(0)").find("input.rowrefid");//Retirement Reference
						
						var refFlg=$(this).parents("tr").find("td:eq(0)").find("input").hasClass("rowrefid");
					 
						if(isValidObject(refId) && refFlg){  
							    
								  
							var message=false;
							 
							
							$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
								if(refId.val() == $(this).val()){
									message=true;
//									IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
									$(this).closest("tr").hide();
									$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
								}
							});	
							  
						   $("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
							   var myStr = $(this).val();
						       var newStrC = myStr.replace("_C", "");
						       var newStrS = myStr.replace("_S", ""); 
							   	if(refId.val() == newStrC ||refId.val() == newStrS){
							   		message=true;
//							   		cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
							   		$(this).closest("tr").hide();
									$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
							   	}
							});	
							 
						   $("#fnaPropOwnTblByCPF tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
								if(refId.val() == $(this).val()){
								if(message){
									applyErrorToastrAlert("There is row exists in other sections, will also be deleted!");
								}
//								fnaPropOwnTblByCPF.row($(this).closest("tr")).remove().draw();
								$(this).closest("tr").hide();
								$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
								}
							});  
						}
						 
						
						if(!isValidObject($(this).parents("tr").find("td:eq(0)").find("input.rowrefid")) && !refFlg){
							if(refId.val() == $(this).val()){
//								fnaPropOwnTblByCPF.row($(this).closest("tr")).remove().draw();
								$(this).closest("tr").hide();
								$(this).parents("tr").find("td:first").find('input:eq(0)').val("D");
							}
						}
						
						
			//			propfilldlgval(row);//instant save added line
				//		instantPropSave(null,DEL_MODE); //instant save added line
						$(this).attr("checked",false); 
						
					}
				}); 
				
				reOrderVisibleRows("IncAssRetPlgtbl"); 
				reOrderVisibleRows("cpfAccAddDedTable");
				reOrderVisibleRows("fnaPropOwnTblByCPF");
				
				
				
				/*$('#fnaPropOwnTblByCPF tbody tr').find('td:eq(0) input.rowrefid').each(function(){
					
					var oldval = $(this).val();
					var bankrowindex= $(this).closest("tr").index();
					var newval = "PROP_"+bankrowindex;
					
					
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
					
					$(this).val(newval);
				});*/
				
				
				calcTotalPropertyAmts();
			
				
				$('#confirmationalertmsgdiv').modal('hide');  
//				DHTML CRUD ICONS
				var rc = fnaPropOwnTblByCPF.row().count();
				if(rc ==0){
					$("#SelfnaPropOwnTblByCPF").prop("checked",false);
					crudicons(this,'fnaPropOwnTblByCPF','SelfnaPropOwnTblByCPF','powncpfERow','powncpfDRow');
				}
//				DHTML CRUD ICONS
			  });
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
				  	$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			
		});
		
	}
});

/*Clear Fields */
function propClearFlds(){
	$("#propOwnCpf_Dialog").find("input[type=text]").val("");
	$("#propOwnCpf_Dialog").find("textarea").val("");
	$("#propOwnCpf_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function propRdlyflds(mode){ 
	
	 if(mode == QRY_MODE ){
			$("#propOwnCpf_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#propOwnCpf_Dialog :input").prop("disabled", false);
	 }
	 
	 $("#propOwnCpf_Dialog #txtFldDlgPropFVOnRent").prop("disabled", true);	 
	 
	 if($("#dfSelfMartsts").val() == "Single"){
		 $("input[name=txtFldDlgPropLoanBySpsCash]").val("");
 		 $("input[name=txtFldDlgPropLoanBySpsCash]").prop("disabled",true);
 		 $("input[name=txtFldDlgPropLoanBySpsCpf]").val("");
		 $("input[name=txtFldDlgPropLoanBySpsCpf]").prop("disabled",true);
	 }
	 
}

/*Validation */
function validatepropDetails(){ 
	if(!(validateFocusFlds('propOwnCpf_Dialog','txtFldDlgPropOwnCpfDesc',PROP_DESC))) return;
	if(!(validateFocusFlds('propOwnCpf_Dialog','txtFldDlgCpfPropOwnership',PROP_OWNER))) return; 
	if(!(validateFocusFlds('propOwnCpf_Dialog','txtFldDlgCpfPropMktVal',PROP_MARKETVAL))) return;
	
	  return true; 
}

function valpropTbl(){ 
//	var $lastRow = $("#fnaPropOwnTblByCPF tbody tr:last");	
	var $RowCount = fnaPropOwnTblByCPF.rows().count();

	var valid=true;
	if($RowCount > 0 ){ 
		$("#fnaPropOwnTblByCPF tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('input:eq(0)'), PROP_DESC))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('select:eq(0)'), PROP_OWNER))) {valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), PROP_MARKETVAL))) {valid=false;return false;};
	 
		});
	}  
	return valid;
}

/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgPropOwnCpfDesc,#txtFldDlgCpfPropMktVal,#txtFldDlgCpfPropOwnership").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function propfilldlgval($lastRow){
	  
//	  $('#propOwnCpf_Dialog #txtFldDlgPropMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropOwnId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropRefId').val($lastRow.find("td:eq(0)").find('input:eq(2)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropOwnCpfDesc').val($lastRow.find("td:eq(2)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropMktVal').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropOwnership').val($lastRow.find("td:eq(4)").find('select:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropApprecrate').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropMortageos').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropOsloanPerd').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  
//	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropYrstoPay').val($lastRow.find("td:eq(8)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropObj').val($lastRow.find("td:eq(8)").find('select:eq(0)').val()); 
	  $('#propOwnCpf_Dialog #txtFldDlgPropCurAnlRetInc').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropRentPerd').val($lastRow.find("td:eq(10)").find('input:eq(0)').val());
	  
	  $('#propOwnCpf_Dialog #txtFldDlgPropLoanBySlfCpf').val($lastRow.find("td:eq(11)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropLoanBySlfCash').val($lastRow.find("td:eq(12)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropLoanBySpsCpf').val($lastRow.find("td:eq(13)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropLoanBySpsCash').val($lastRow.find("td:eq(14)").find('input:eq(0)').val()); 
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropSold').val($lastRow.find("td:eq(15)").find('select:eq(0)').val()); 
	  $('#propOwnCpf_Dialog #txtFldDlgPropRentOnRetire').val($lastRow.find("td:eq(16)").find('select:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropCurRetInc').val($lastRow.find("td:eq(17)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropCrtdBy').val($lastRow.find("td:eq(17)").find('input:eq(1)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgCpfPropCrtdDate').val($lastRow.find("td:eq(17)").find('input:eq(2)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropYrsToRent').val($lastRow.find("td:eq(18)").find('input:eq(0)').val());
	  $('#propOwnCpf_Dialog #txtFldDlgPropFVOnRent').val($lastRow.find("td:eq(19)").find('input:eq(0)').val());
}

/* Filling Table Fields*/
function propfilldomval($RowId,$row){ 
	$row.find("td:eq(2)").find('input:eq(0)').val($("#txtFldDlgPropOwnCpfDesc").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgCpfPropMktVal").val()); 
	$row.find("td:eq(4)").find('select:eq(0)').val($("#txtFldDlgCpfPropOwnership").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgCpfPropApprecrate").val());  
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgCpfPropMortageos").val());
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgCpfPropOsloanPerd").val()); 
	
//	$row.find("td:eq(8)").find('input:eq(0)').val($("#txtFldDlgCpfPropYrstoPay").val()); 
	$row.find("td:eq(8)").find('select:eq(0)').val($("#txtFldDlgCpfPropObj").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgPropCurAnlRetInc").val());    
	$row.find("td:eq(10)").find('input:eq(0)').val($("#txtFldDlgCpfPropRentPerd").val());
	
	$row.find("td:eq(11)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySlfCpf").val()); 
	$row.find("td:eq(12)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySlfCash").val()); 
	$row.find("td:eq(13)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySpsCpf").val()); 
	$row.find("td:eq(14)").find('input:eq(0)').val($("#txtFldDlgPropLoanBySpsCash").val()); 
	$row.find("td:eq(15)").find('select:eq(0)').val($("#txtFldDlgCpfPropSold").val());  
	$row.find("td:eq(16)").find('select:eq(0)').val($("#txtFldDlgPropRentOnRetire").val());  
	$row.find("td:eq(17)").find('input:eq(0)').val($("#txtFldDlgPropCurRetInc").val());   
	$row.find("td:eq(18)").find('input:eq(0)').val($("#txtFldDlgPropYrsToRent").val());   
	$row.find("td:eq(19)").find('input:eq(0)').val($("#txtFldDlgPropFVOnRent").val()); 
	
//	$row.find("input[type=text]").prop("readonly",true);//instant save added line
//	$row.find("select").prop("disabled",true);//instant save added line

}

//instant save added line
$("#propOwnCpf_Dialog").find("input,select,textarea").on("change",function(){
	$("#propOwnCpf_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});

/*###########################################################################################################################################################*/

//Sync Prop with Retirement
function syncPropTblRow($tblPropRow){
//	console.log("syncPropTblRow")
	
	var onretirement = $tblPropRow.find("td:eq(15)").find("select:eq(0)").val();//sold
	var torent 		 = $tblPropRow.find("td:eq(16)").find("select:eq(0)").val();//to rent
	var owner = $tblPropRow.find("td:eq(4)").find('select:eq(0)').val().toUpperCase(); 
	var pkid = $tblPropRow.find("td:eq(0)").find('input:eq(1)').val();
	
	var rowRefID = pkid ;//"PROP_"+$tblPropRow.index();
		
		var rowexist = chkRetrPlanRowExist(rowRefID);
		var $tblRetRow = null; 
		
	if((onretirement == "N" && torent=="Y") || onretirement=="Y"){
		
		var intretslfage = 0;
		var slfretage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
		var totAge=isEmpty($("#retSelfProjage").val())? 0 :Number($("#retSelfProjage").val());
		var basedon=$("#retAgeBasedon").val().toUpperCase();

		 var spsretage = isEmpty($("#retSpsAge").val())? 0 :Number($("#retSpsAge").val());
		 var spsprojage = $("#retSpsProjage").val();
		 
		 if(owner == "SPOUSE"){
			 intretslfage=spsretage;
		 }else if(owner == "SELF"){
			 intretslfage=slfretage; 
		 }
		

		if(rowexist == null){
			getincassrtRows(null,"N");
			$tblRetRow=$("#IncAssRetPlgtbl tbody tr:last");
		}else{
			$tblRetRow=rowexist;
		}
		
			  

		$tblPropRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
		$tblRetRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
		
		
		
		if(pkid.indexOf("AS_") == 0){
			if(isEmpty($tblRetRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblRetRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
				
		}
		 
		var propdesc = $tblPropRow.find("td:eq(2)").find('input:eq(0)').val();
		var estfuturerent = $tblPropRow.find("td:eq(17)").find('input:eq(0)').val();
		var soldonret =  $tblPropRow.find("td:eq(15)").find('select:eq(0)').val();
		var rentonret = $tblPropRow.find("td:eq(16)").find('select:eq(0)').val();
		var propfvonrent = Number($tblPropRow.find("td:eq(19)").find('input:eq(0)').val());
		var freq= (soldonret == "Y")? "SINGLE" :((rentonret == "Y") ? "REGULAR" :"");
		var yrtorent = $tblPropRow.find("td:eq(18)").find('input:eq(0)').val();
		
		$tblRetRow.find("td:eq(2)").find('input:eq(0)').val("Properties");	
		$tblRetRow.find("td:eq(3)").find('input:eq(0)').val(isEmpty(propdesc)?"":propdesc);	
		$tblRetRow.find("td:eq(4)").find('select:eq(0)').val(freq);
		 
	 	
	 	if(onretirement=="Y"){
	 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty(propfvonrent)? Number(0): Number(propfvonrent)));
	 	}else{
	 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty(estfuturerent)? Number(0): Number(estfuturerent)));
	 	}
	 	
		$tblRetRow.find("td:eq(6)").find('input:eq(0)').val("");
 	 	
		$tblRetRow.find("td:eq(7)").find('input:eq(0)').val(""); 
 		
		$tblRetRow.find("td:eq(8)").find('select:eq(0)').val(isEmpty(owner)? basedon :owner); 
		
		$tblRetRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); 
 
		
		if(freq == "SINGLE"){
			$tblRetRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",true);
			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val(""); 
			
		}else{
			$tblRetRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",false);
			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)+Number(yrtorent)); 
			
		}
 
		
		applyToastrAlert("Property Ownership data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen !");
		


		
	}else if(rowexist  != null){
		
//			IncAssRetPlgtbl.row(rowexist).remove().draw();
		
		if(isEmpty(pkid)){
			IncAssRetPlgtbl.row(rowexist).remove().draw();
		}else{
			rowexist.hide();
			rowexist.find("td:first").find('input:eq(0)').val("D");
		}
		
			reOrderVisibleRows("IncAssRetPlgtbl");			
		}  
}

//function syncPropTblEditRow($lastrow){
////	console.log("syncPropTblEditRow");
//	var intretslfage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
//	var totAge=isEmpty($("#retSelfProjage").val())? 0 :Number($("#retSelfProjage").val());
//	
//	var basedon=$("#retAgeBasedon").val().toUpperCase();
//	
//	var $rowref=$lastrow.find("td:eq(0)").find("input.rowrefid").val(); 
//	$lastrow.find("td:eq(0)").find("input.rowrefid").val($rowref);
//	
//	 
//	
// var desc,amt,owner,obj,refId,freq,yrtorent,propfvonrent;
// var chklength=$("#IncAssRetPlgtbl  tbody").find("tr").find("td:eq(0)").find("input.rowrefid").length; 
//				
//	if(chklength > 0){ 
//				  
//	$("#fnaPropOwnTblByCPF tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//		if($rowref == $(this).val()){
//	      var $tblPropRow=$(this).closest("tr");
//		  desc=$tblPropRow.find("td:eq(2)").find('input:eq(0)').val();		 
//		  owner=$tblPropRow.find("td:eq(4)").find('select:eq(0)').val().toUpperCase();   
//		  obj=$tblPropRow.find("td:eq(16)").find('select:eq(0)').val();
//		  amt=$tblPropRow.find("td:eq(17)").find('input:eq(0)').val();
//		  propfvonrent = Number($tblPropRow.find("td:eq(19)").find('input:eq(0)').val());
//		  var soldonret =  $tblPropRow.find("td:eq(15)").find('select:eq(0)').val();
//		  var rentonret = $tblPropRow.find("td:eq(16)").find('select:eq(0)').val();
//		  yrtorent = $tblPropRow.find("td:eq(18)").find('input:eq(0)').val();
//		  freq= (soldonret == "Y")? "SINGLE" :((rentonret == "Y") ? "REGULAR" :"");
//		  refId=$(this).val();
//		  
//	//		propfilldlgval($tblPropRow);//instant save added line
//		//	instantPropSave($tblPropRow,UPD_MODE); //instant save added line
//		
//		}
//		  
//	});
//	 
//	if(!isValidObject(refId)){
//		if($lastrow.find("td:eq(16)").find('select:eq(0)').val()  ==  "Y" ){
//			if(!($lastrow.find("td:eq(4)").find('select:eq(0)').val() == "Joint")){
//				newRowPropTblRow($lastrow); 
//			}
//		}
//	} 
//	
//	if(!(owner == "Joint")){
//	if(obj == "Y"){
//		 
//		$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//			if($rowref == $(this).val()){ 
//			var $tblRetRow=$(this).closest("tr"); 
//			$(this).addClass("rowrefid").val(refId); 
//		
//		$tblRetRow.find("td:eq(2)").find('input:eq(0)').val("Properties"); 
//		$tblRetRow.find("td:eq(3)").find('input:eq(0)').val(isEmpty(desc)?"":desc); 
//		$tblRetRow.find("td:eq(4)").find('select:eq(0)').val(freq); 
//		$tblRetRow.find("td:eq(4)").find('select:eq(0)').on("change",function(){
//			if(!rdFrequencyValidation($tblRetRow.find("td:eq(10)").find('input:eq(0)'),$tblRetRow.find("td:eq(6)").find('input:eq(0)'),$(this)))return;
//		}); 
//
//		
//		
//	 	if(soldonret=="Y"){
//	 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty(propfvonrent)?Number(0):Number(propfvonrent)));
//	 	}else{
//	 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty(amt)?Number(0):Number(amt)));
//	 	}
//	 	
//	 	
//		$tblRetRow.find("td:eq(5)").find('input:eq(0)').addClass("applyEvntUsd");
//		
//		$tblRetRow.find("td:eq(6)").find('input:eq(0)').val("");
//		$tblRetRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntpCent3");
//		
//		$tblRetRow.find("td:eq(7)").find('input:eq(0)').val(""); 
//		$tblRetRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntpCent3");
//		
//		$tblRetRow.find("td:eq(8)").find('select:eq(0)').val(isEmpty(owner)? basedon :owner);
//		$tblRetRow.find("td:eq(8)").find('select:eq(0)').on("change",function(){ 
//			if(!rdStartAgeValidate($tblRetRow.find("td:eq(9)").find('input:eq(0)'),$tblRetRow.find("td:eq(8)").find('select:eq(0)')))return;
//		}); 
//
//		
//		$tblRetRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage));
//		$tblRetRow.find("td:eq(9)").find('input:eq(0)').on("change",function(){
//			if(!rdStartAgeValidate($tblRetRow.find("td:eq(9)").find('input:eq(0)'),$tblRetRow.find("td:eq(8)").find('select:eq(0)')))return;
//		}); 
//		
//		if(freq == "SINGLE"){
//			$tblRetRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",true);
//			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val("");
//		}else{
//			$tblRetRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",false);
//			$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)+Number(yrtorent));
//		} 
//		 
//		applyEventHandlers();
//		
//			} 
//	 });
//		
//		
//		applyToastrAlert("Property Ownership data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen !");
//	//	incassrtfilldlgval($tblRetRow);
//	//	instantIncAssSave($tblRetRow,UPD_MODE);	
////
//		
//	}else{ 
//		$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//			if($rowref == $(this).val()){ 
//			//	incassrtfilldlgval($(this).closest("tr"));
//			//	console.log("property  delete syncPropTblEditRow")
//			//	instantIncAssSave($(this).closest("tr"),DEL_MODE);	
//				IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
//				reorderSino("IncAssRetPlgtbl"); 
//			}
//		});
//	 }
//}
//	 else{ 
//			$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//				if($rowref == $(this).val()){
//					//incassrtfilldlgval($(this).closest("tr"));
//				//	console.log("property  delete syncPropTblEditRow")
//					//instantIncAssSave($(this).closest("tr"),DEL_MODE);	
//					IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
//					reorderSino("IncAssRetPlgtbl"); 
//				}
//			});
//		}
//	}
//	else{ 
//		
//		
//		if($lastrow.find("td:eq(16)").find('select:eq(0)').val()  ==  "Y" ){
//			if(!($lastrow.find("td:eq(4)").find('select:eq(0)').val() == "Joint")){
//				newRowPropTblRow($lastrow); 
//			}
//		}
//	}
//	 
//}


//function newRowPropTblRow($tblPropRow){
////	console.log(newRowPropTblRow)
//	  var owner=$tblPropRow.find("td:eq(4)").find('select:eq(0)').val().toUpperCase();  
//	  var soldonret =  $tblPropRow.find("td:eq(15)").find('select:eq(0)').val();
//	  var rentonret = $tblPropRow.find("td:eq(16)").find('select:eq(0)').val();
//	  
//	  
//	if(!(owner == "Joint")){
//		if(((soldonret == "N") && (rentonret == "Y")) || soldonret=="Y"){
//			getincassrtRows(null,"N"); 
//
//	var intretslfage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
//	var totAge=isEmpty($("#retSelfProjage").val())? 0 :Number($("#retSelfProjage").val());
//	
//	var basedon=$("#retAgeBasedon").val().toUpperCase();
//	 
//	var $tblRetRow=$("#IncAssRetPlgtbl tbody tr:last");  
//	 
//		var rowRefID = "PROP_"+$tblPropRow.index();
//		 
//
//		$tblPropRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
//		$tblRetRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID);
//		
//		  var freq= (soldonret == "Y")? "SINGLE" :((rentonret == "Y") ? "REGULAR" :"");
//		
//		 
//	
//	$tblRetRow.find("td:eq(2)").find('input:eq(0)').val("Properties"); 
//	
//	
//	$tblRetRow.find("td:eq(3)").find('input:eq(0)').val(isEmpty($tblPropRow.find("td:eq(2)").find('input:eq(0)').val())?"":$tblPropRow.find("td:eq(2)").find('input:eq(0)').val());
// 
//	
//	$tblRetRow.find("td:eq(4)").find('select:eq(0)').val(freq); 
//	
//	
//	
//	if(soldonret=="Y"){
//		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty($tblPropRow.find("td:eq(19)").find('input:eq(0)').val())?Number(0):Number($tblPropRow.find("td:eq(19)").find('input:eq(0)').val())));
//	 	
// 	}else{
// 		$tblRetRow.find("td:eq(5)").find('input:eq(0)').val((isEmpty($tblPropRow.find("td:eq(17)").find('input:eq(0)').val())?Number(0):Number($tblPropRow.find("td:eq(17)").find('input:eq(0)').val())));
// 	 	
// 	}
//	
//	
//	$tblRetRow.find("td:eq(6)").find('input:eq(0)').val("");
//  	
//	$tblRetRow.find("td:eq(7)").find('input:eq(0)').val(""); 
// 	
//	$tblRetRow.find("td:eq(8)").find('select:eq(0)').val(isEmpty(owner)? basedon :owner); 
// 
//	
//	
//	$tblRetRow.find("td:eq(9)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)); 
// 	
//	var yrtorent = $tblPropRow.find("td:eq(18)").find('input:eq(0)').val();
//	
//	if(freq == "SINGLE"){
//		$tblRetRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",true);
//		$tblRetRow.find("td:eq(10)").find('input:eq(0)').val(""); 
//		
//	}else{
//		$tblRetRow.find("td:eq(10)").find('input:eq(0)').prop("disabled",false);
//		$tblRetRow.find("td:eq(10)").find('input:eq(0)').val((isEmpty(intretslfage)) ? Number("0") : Number(intretslfage)+Number(yrtorent)); 
//		
//	}
//
// 
//	applyToastrAlert("Property Ownership data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen !");
//	
//	
//			//propfilldlgval($tblPropRow);//instant save added line
//		//	instantPropSave($tblPropRow,UPD_MODE); //instant save added line
//		//	incassrtfilldlgval($tblRetRow);
//		//	instantIncAssSave($tblRetRow,INS_MODE);	
//	} 
//	}
//}

 
function calcTotalPropertyAmts(){ 
	 
	 var sumslfcash=0,sumspscash=0,sumfamcash=0,sumslfcpf=0,sumspscpf=0;
	 var sumcurincself=0,sumcurincsps=0,sumcurincfam=0;
	 var summortgageslf=0,summortgagesps=0,summortgagefam=0;
	 var $fnaPropOwnTblByCPF = fnaPropOwnTblByCPF.rows().count();
	 var ownership; 

	 if($fnaPropOwnTblByCPF >0){
		 
		 $("#fnaPropOwnTblByCPF tbody tr").each(function(i,row){
			 
			 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			 
			 if(mode_r != "D"){
				 
				 var marketvalue 	=Number($(this).find("td:eq(3)").find("input:eq(0)").val());//Market Value			 
				 ownership=$(this).find("td:eq(4)").find('select:eq(0)').val();//ownership
				 var arate = Number($(this).find("td:eq(5)").find("input:eq(0)").val());//appr_rate
				 var mortgageloan	=Number($(this).find("td:eq(6)").find("input:eq(0)").val()); //Mortage Loans
				// var currannlrentincome=Number($(this).find("td:eq(9)").find("input:eq(0)").val())*((100/100)+(arate/100));//Current Annual Rental Income * Appreciation rate
	       var currannlrentincome=Number($(this).find("td:eq(9)").find("input:eq(0)").val());
				 var totClntLnCpf   =Number($(this).find("td:eq(11)").find("input:eq(0)").val());
				 var totClntLnCash	=Number($(this).find("td:eq(12)").find("input:eq(0)").val());		
				 var totSpsLnCpf	=Number($(this).find("td:eq(13)").find("input:eq(0)").val());
				 var totSpsLnCash	=Number($(this).find("td:eq(14)").find("input:eq(0)").val());
				 var estdfutannlrentincome 	= Number($(this).find("td:eq(17)").find("input:eq(0)").val());
				 var totRetCurInc;
				 currannlrentincome = isEmpty(currannlrentincome) ? 0 : Number(currannlrentincome);
				 arate = isEmpty(arate) ? 0 :arate;
				 var apprRate		=Number(arate);//Appreciation Rate
				 var numofyears		= $("#retYrstoret").val();//Number($(this).find("td:eq(17)").find("input:eq(0)").val());//Years to Rent
				 numofyears = isEmpty(numofyears) ? 0 : numofyears;
				  
				totRetCurInc  = FVCalculation(apprRate, numofyears,0, -1*marketvalue,  1);
				 
				 if(!isEmpty(totClntLnCash)){
					 sumslfcash +=(totClntLnCash); 
				 }
				 
				 if(!isEmpty(totSpsLnCash)){
					 sumspscash +=(totSpsLnCash); 
				 }
				 
				 if(!isEmpty(totClntLnCpf)){
					 sumslfcpf +=(totClntLnCpf); 
				 }
				 
				 if(!isEmpty(totSpsLnCpf)){
					 sumspscpf +=(totSpsLnCpf);  
				 }
				 
				  
					if(ownership =="Self"){sumcurincself +=(currannlrentincome);}
					if(ownership =="Spouse"){sumcurincsps +=(currannlrentincome);}
					if(ownership =="Joint"){sumcurincfam +=(currannlrentincome);}
	 
				 
				 if(!isEmpty(mortgageloan)){
						if(ownership == "Self"){summortgageslf +=(mortgageloan);}
						if(ownership == "Spouse" ){summortgagesps +=(mortgageloan);}
						if(ownership == "Joint"){summortgagefam += (mortgageloan);}
				 }
				 
			 }
			 
			 
			 
			 
			 
		 });
	 } 
	 
		
	 /*hidden property ownership value*/
		$("#hTotClntLnCash").val(remPriceAfDec(sumslfcash));
		$("#hTotSpsLnCash").val(remPriceAfDec(sumspscash));  
		$("#hTotClntLnCpf").val(remPriceAfDec(sumslfcpf));
		$("#hTotSpsLnCpf").val(remPriceAfDec(sumspscpf));
		$("#hTotRetCurInc").val(remPriceAfDec(sumcurincself+sumcurincsps+sumcurincfam));
		
		/*Annual Rental Income in Non-Employment Income section*/
		var toastrmsg ="";
		
		if(sumcurincself==0){
			 $("#incsrcSelfNempRentamt").val("");
		 }
		
		 if(sumcurincsps==0){
			 $("#incsrcSpsNempRentamt").val("");
		 }
		 
		 if(sumcurincfam==0){
			 $("#incsrcJointNempRentamt").val("");
		 }
		
	 if(sumcurincself>0 || sumcurincsps>0 || sumcurincfam>0){		 
		 
		 $("#incsrcSelfNempRentamt").val(remPriceAfDec(sumcurincself));
		 
		 $("#incsrcSpsNempRentamt").val(remPriceAfDec(sumcurincsps));		 
		 
		 $("#incsrcJointNempRentamt").val(remPriceAfDec(sumcurincfam));		  
		 
		 calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);
		 calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);
		 calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);		 
		 
		 calcSum(this,'SUMOF_ANNEXP_SELF');
		 calcSum(this,'SUMOF_ANNEXP_SPS');
		 calcSum(this,'SUMOF_ANNEXP_FAM');
		 
 	 toastrmsg += "<br/>Annual Rental Income is calculated and Reflected to Cash Flow Statements<br/>";
	 } 
		
	 
	  
	 /*Financial Liabilities*/
	   
	   if(summortgageslf>0 || summortgagesps>0 || summortgagefam > 0 ){
			
			
			   $("#liabSelfShortmort").val(remPriceAfDec(summortgageslf));
			   $("#liabSpsShortmort").val(remPriceAfDec(summortgagesps));
			   $("#liabFamShortmort").val(remPriceAfDec(summortgagefam));
			   
			   calcSum(this,'SUMOF_FINLIAB_SELF');
				 calcSum(this,'SUMOF_FINLIAB_SPS');
				 calcSum(this,'SUMOF_FINLIAB_FAM');
				  
				 toastrmsg += "<br/>Mortgage Outstanding is calculated and Reflected to Financial Liabilities section<br/>";
	   }
	   
	   /*annual expenditure values - property loan repaymeny by cash */   
	   if(sumslfcash>0 || sumspscash>0){	
		   
		   if(sumslfcash==0){
			   $("#hTotClntLnCash").val("");
			   $("#expdSelfProploan").val("");
		   }else{
			   $("#expdSelfProploan").val(remPriceAfDec(sumslfcash));
		   }
			 
		   if(sumspscash==0){
			   $("#hTotSpsLnCash").val("");
			   $("#expdSpsProploan").val("");
		   }else{
			   $("#expdSpsProploan").val(remPriceAfDec(sumspscash)); 
		   }
			 
		   
 		   toastrmsg += "<br/>Property loan repayment by cash is calculated and Reflected to Cash Flow Statements<br/>"
	   }
		
 
	 if(!isEmpty(toastrmsg)){
		 applyToastrAlert(toastrmsg);
	 }
	
	 if(sumslfcpf==0){$("#hTotClntLnCpf").val("");}
	 if(sumspscpf==0){$("#hTotSpsLnCpf").val("");}

	 
}


/*********************************************Synchronize Property Ownership to Cpf Addition and Deduction***********************************************/

//function newRowPropCpfEditTbl($lastrow){
//	 
//	
//	
//	var flg=false;
//	var $tblCpfRow=$("#cpfAccAddDedTable tbody tr:last"); 
//		 
//	var $rowref=$lastrow.find("td:eq(0)").find("input.rowrefid").val(); 
//	$lastrow.find("td:eq(0)").find("input.rowrefid").val($rowref);
//	
//	var ownership,ClntLnCpf,SpsLnCpf,refid;
//	  
//	 var chklength=$("#cpfAccAddDedTable  tbody").find("tr").find("td:eq(0)").find("input.rowrefid").length; 
//		
//		if(chklength > 0){  
//		  
//			$("#fnaPropOwnTblByCPF tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//				if($rowref == $(this).val()){
//			      var $tblPropRow=$(this).closest("tr"); 
//					  ownership	=$tblPropRow.find("td:eq(4)").find('select:eq(0)').val();
//					  ClntLnCpf =$tblPropRow.find("td:eq(11)").find("input:eq(0)").val();
//					  SpsLnCpf	=$tblPropRow.find("td:eq(13)").find("input:eq(0)").val();
//					  refid		=$tblPropRow.find("td:eq(0)").find("input.rowrefid").val();
//					//  propfilldlgval($tblPropRow);//instant save added line
//					//  instantPropSave($tblPropRow,UPD_MODE); //instant save added line
//		 }
//
//	});
//		
//	$("#cpfAccAddDedTable tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//		if($rowref == $(this).val()){ 
//		//	adctfilldlgval($(this).closest("tr"));
//	//		instantCpfDedAddSave($(this).closest("tr"),DEL_MODE); //instant save added line
//			cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
//		}
//	});
//	 
//	if($rowref == refid){
//		  if(!isEmpty(ClntLnCpf)){
//				
//				getCADRows(null); 	
//				
//				$tblCpfRow = $("#cpfAccAddDedTable tbody tr:last");	  
//				$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(refid); 
//				$tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");   
//				$tblCpfRow.find("td:eq(3)").find('select:eq(0)').val("Self");  
//				$tblCpfRow.find("td:eq(4)").find('select:eq(0)').val("Loan Repayment");  
//				$tblCpfRow.find("td:eq(5)").find('select:eq(0)').val("Deduction");  
////				$tblCpfRow.find("td:eq(6)").find('input:eq(0)').val("CPFACC000001");
////				$tblCpfRow.find("td:eq(6)").find('input:eq(1)').val("Ordinary");  
////				$tblCpfRow.find("td:eq(7)").find('input:eq(0)').val("");  
////				$tblCpfRow.find("td:eq(8)").find('input:eq(0)').val("");  
//				$tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(ClntLnCpf);  
////				$tblCpfRow.find("td:eq(10)").find('select:eq(0)').val("");  
////				 $tblCpfRow.find("td:eq(11)").find('select:eq(0)').val(""); 
//				 reorderSino("cpfAccAddDedTable"); 
//				 applyToastrAlert("Property Ownership (SELF) data will be reflected to CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen !");
//				 mandatoryFldForCpf($tblCpfRow,$lastrow,'PROP');
//			//	 adctfilldlgval($tblCpfRow);
//			//	 instantCpfDedAddSave($tblCpfRow,UPD_MODE); //instant save added line
//		  }  
//			
//			if(!isEmpty(SpsLnCpf)){
//				
//				getCADRows(null); 	 
//				$tblCpfRow = $("#cpfAccAddDedTable tbody tr:last");	 
//				$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(refid); 
//				$tblCpfRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");  
//				$tblCpfRow.find("td:eq(3)").find('select:eq(0)').val("Spouse"); 
//				$tblCpfRow.find("td:eq(4)").find('select:eq(0)').val("Loan Repayment");  
//				$tblCpfRow.find("td:eq(5)").find('select:eq(0)').val("Deduction");  
////				$tblCpfRow.find("td:eq(6)").find('input:eq(0)').val("CPFACC000001");
////				$tblCpfRow.find("td:eq(6)").find('input:eq(1)').val("Ordinary"); 
////				$tblCpfRow.find("td:eq(7)").find('input:eq(0)').val(""); 
////				$tblCpfRow.find("td:eq(8)").find('input:eq(0)').val(""); 
//				$tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(SpsLnCpf); 
////				$tblCpfRow.find("td:eq(10)").find('select:eq(0)').val("");  
////				$tblCpfRow.find("td:eq(11)").find('select:eq(0)').val(""); 
//				reorderSino("cpfAccAddDedTable"); 
//				applyToastrAlert("Property Ownership (SPOUSE) data will be reflected to CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen !");
//				mandatoryFldForCpf($tblCpfRow,$lastrow,'PROP');
//			//	adctfilldlgval($tblCpfRow);
//				// instantCpfDedAddSave($tblCpfRow,UPD_MODE); //instant save added line
//			} 
//	}
// }else{
//	 var ClntLnCpf =$lastrow.find("td:eq(11)").find("input:eq(0)").val();
//	 var SpsLnCpf =$lastrow.find("td:eq(13)").find("input:eq(0)").val();
//
//	 if(!isEmpty(SpsLnCpf) || (!isEmpty(ClntLnCpf))){
//		 newRowPropCpfTbl($lastrow);
//	}
// }
//return true;
//}

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

function chkRetrPlanRowExist(rowRefID){
	var $tblRPRow = null;
	 $("#IncAssRetPlgtbl tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblRPRow = currrow;
		 } 
	});
	return $tblRPRow;
}


function newRowPropCpfTbl($tblPropRow){
	
	var pkid = $tblPropRow.find("td:eq(0)").find('input:eq(1)').val();
	 
	var rowRefID = pkid ;//"PROP_"+$tblPropRow.index();
 
	$tblPropRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID); 
		
	var ownership	=$tblPropRow.find("td:eq(4)").find('select:eq(0)').val();
	var ClntLnCpf   =$tblPropRow.find("td:eq(11)").find("input:eq(0)").val();
	var SpsLnCpf	=$tblPropRow.find("td:eq(13)").find("input:eq(0)").val();
	var mode = $tblPropRow.find("td:eq(0)").find("input:eq(0)").val();
	var proppkid = $tblPropRow.find("td:eq(0)").find('input:eq(1)').val();
	
	
//	propfilldlgval($tblPropRow);//instant save added line
//	instantPropSave($tblPropRow,UPD_MODE); //instant save added line
	
	var cpftoastrmsg = "";

	if(!isEmpty(ClntLnCpf)){
		
		var rowexist = chkCPFRowExist(rowRefID+"_C");
		var $tblCpfRow = null;
				
		if(rowexist == null){
			getCADRows(null);
			$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
		}else{
			$tblCpfRow = rowexist;
		}
		 
		$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID+"_C"); 
		
		if(pkid.indexOf("AS_") == 0){
			if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
				
		}
		$tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");  
		$tblCpfRow.find("td:eq(3)").find('select:eq(0)').val(ownership); 
		$tblCpfRow.find("td:eq(4)").find('select:eq(0)').val("Loan Repayment"); 
		$tblCpfRow.find("td:eq(5)").find('select:eq(0)').val("Deduction");
		
//		$tblCpfRow.find("td:eq(6)").find('select:eq(0)').val("CPFACC000001");
//		$tblCpfRow.find("td:eq(6)").find('input:eq(0)').val("Ordinary");
		
		
		$tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(ClntLnCpf);
		$tblCpfRow.find("td:eq(10)").find('select:eq(0)').val(1);
		
 		cpftoastrmsg = "Property Loan repayment through the CPF  by Self is reflected to CPF Addition & Deduction screen";
 
		mandatoryFldForCpf($tblCpfRow,$tblPropRow,'PROP');
		
		applyToastrAlert(cpftoastrmsg);
		
	}else if(isEmpty(ClntLnCpf)){
		
		var rowexist = chkCPFRowExist(rowRefID+"_C");
		
		if(rowexist != null){

//			 cpfAccAddDedTable.row(rowexist).remove().draw();
			 
			 if( mode == "I"){
					if(isEmpty(proppkid)){
						cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
					}else{
						rowexist.hide();
						rowexist.find("td:first").find('input:eq(0)').val("D");
					}
			}else{
					rowexist.hide();
					rowexist.find("td:first").find('input:eq(0)').val("D");
			}
			 
		}
		
	}
	
	if(!isEmpty(SpsLnCpf)){
		
		var rowexist = chkCPFRowExist(rowRefID+"_S");
		var $tblCpfRow = null;
		
		if(rowexist == null){
			getCADRows(null);
			$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
		}else{
			$tblCpfRow = rowexist;
		}
		 
		
		$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val(rowRefID+"_S"); 
		var pkid = $tblPropRow.find("td:eq(0)").find('input:eq(1)').val();
		if(pkid.indexOf("AS_") == 0){
			if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
				$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
			}
				
		}
		$tblCpfRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected"); 
		$tblCpfRow.find("td:eq(3)").find('select:eq(0)').val("Spouse"); 
		$tblCpfRow.find("td:eq(4)").find('select:eq(0)').val("Loan Repayment"); 
		$tblCpfRow.find("td:eq(5)").find('select:eq(0)').val("Deduction"); 
		
//		$tblCpfRow.find("td:eq(6)").find('select:eq(0)').val("CPFACC000001");
//		$tblCpfRow.find("td:eq(6)").find('input:eq(0)').val("Ordinary"); 
 
		$tblCpfRow.find("td:eq(10)").find('select:eq(0)').val(1);
		$tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(SpsLnCpf);
		
	    cpftoastrmsg = "<br/>Property Loan repayment through the CPF  by Spouse is reflected to CPF Addition & Deduction screen";
		mandatoryFldForCpf($tblCpfRow,$tblPropRow,'PROP');
		
		applyToastrAlert(cpftoastrmsg);
		
	} else if (isEmpty(SpsLnCpf)){
		var rowexist = chkCPFRowExist(rowRefID+"_S");
		
		if(rowexist != null){

//			cpfAccAddDedTable.row(rowexist).remove().draw();
			
			 if( mode == "I"){
					if(isEmpty(proppkid)){
						cpfAccAddDedTable.row($(this).closest("tr")).remove().draw();
					}else{
						rowexist.hide();
						rowexist.find("td:first").find('input:eq(0)').val("D");
					}
			}else{
					rowexist.hide();
					rowexist.find("td:first").find('input:eq(0)').val("D");
			}
			 
		}
		
		
	}
	if(!isEmpty(cpftoastrmsg)){
//		applyToastrAlert(cpftoastrmsg);
	}
	
	  
}
 
$("#txtFldDlgCpfPropObj").on("change",function(){
	propObjChange($(this),$("#txtFldDlgPropCurAnlRetInc"),$("#txtFldDlgCpfPropRentPerd"),$("#txtFldDlgPropYrsToRent"),true);
	propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),true);
	
});

$("#txtFldDlgCpfPropSold").on("change",function(){
	if($(this).val() == "Y"){
		mandatoryFldForRetirement($(this),null,'PROP'); 
	}
	onSoldChange($(this),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),true);
});


 

$("#txtFldDlgPropRentOnRetire").on("change",function(){
	if($(this).val() == 'Y'){  
		mandatoryFldForRetirement($(this),null,'PROP');
	}
	retOnRetFnc($(this),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),true);
	
});


function validationRetirementScreenWithOutAlert(){
	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
 	
	
		if(!(validateFocusRDFldsWA('focusfmIntage','retSelfAge',RETSCREEN_INTSLFAGE))) return;  
		if(!(validateFocusRDFldsWA('focusfmRdAge','retAgeBasedon',RETSCREEN_RETAGEBASE))) return; 
		if(!(validateFocusRDFldsWA('focusfmyrstord','retYrstoret',RETSCREEN_YRSTORET))) return; 
		if(!(validateFocusRDFldsWA('focusfmcoyrs','retSelfCoordinateage',RETSCREEN_CORSLFAGE))) return; 
		if(!(validateFocusRDFldsWA('focusfmprojlife','retSelfProjage',RETSCREEN_PROSLFAGE))) return; 
		if(!(validateFocusRDFldsWA('focusfmprojlvyrs','retSelfLivyrs',RETSCREEN_PROSLFLVYRRET))) return; 
		if(!(validateFocusRDFldsWA('focusfmroi','retSelfProjroi',RETSCREEN_ROISLF))) return;
		
		
		if(analysisForSpouse){
			if(!(validateFocusRDFldsWA('focusfmIntage','retSpsAge',RETSCREEN_INTSPSAGE))) return;
			if(!(validateFocusRDFldsWA('focusfmcoyrs','retSpsCoordinateage',RETSCREEN_CORSPSAGE))) return;
			if(!(validateFocusRDFldsWA('focusfmprojlife','retSpsProjage',RETSCREEN_PROSPSAGE))) return;
			if(!(validateFocusRDFldsWA('focusfmprojlvyrs','retSpsLivyrs',RETSCREEN_PROSPSLVYRRET))) return;
			if(!(validateFocusRDFldsWA('focusfmroi','retSpsProjroi',RETSCREEN_ROISPS))) return;
		}
		if(analysisForFamily){
			if(!(validateFocusRDFldsWA('focusfmprojlvyrs','retFamLivyrs',RETSCREEN_PROFAMLVYRRET))) return;
			if(!(validateFocusRDFldsWA('focusfmroi','retFamProjroi',RETSCREEN_ROIFAM))) return;   
		}
		
//		if(!(validateFocusRDFldsWA('focusfmlvself','retSelfAnnlexpdamt',RETSCREEN_LVYRSLF)))return; 
//		if(!(validateFocusRDFldsWA('focusfmlvsps','retSpsAnnlexpdamt',RETSCREEN_LVYRSPS))) return; 
//		if(!(validateFocusRDFldsWA('focusfmlvfam','retFamAnnlexpdamt',RETSCREEN_LVYRFAM))) return; 
		return true;
	 
}

function validateFocusRDFldsWA(modelId,fld,msg){
var fldTrim = $("#"+fld).val().trim(); 
	if(isEmpty(fldTrim)){ 
		return false; 
	}//end of if  
	return true;
}

function validationRetirementdlgIdScreen(dlgId){

	var analysisForSpouse = $("#txtFldAnalyisForSpouse").is(":checked");
	var analysisForFamily = $("#txtFldAnalyisForFamily").is(":checked");
 	
		if(!(validateFocusRDFlds(dlgId,'retSelfAge',RETSCREEN_INTSLFAGE))) return;  
		if(!(validateFocusRDFlds(dlgId,'retAgeBasedon',RETSCREEN_RETAGEBASE))) return;
		if(!(validateFocusRDFlds(dlgId,'retYrstoret',RETSCREEN_YRSTORET))) return;
		if(!(validateFocusRDFlds(dlgId,'retSelfCoordinateage',RETSCREEN_CORSLFAGE))) return; 
		if(!(validateFocusRDFlds(dlgId,'retSelfProjage',RETSCREEN_PROSLFAGE))) return; 
		if(!(validateFocusRDFlds(dlgId,'retSelfLivyrs',RETSCREEN_PROSLFLVYRRET))) return;  
		if(!(validateFocusRDFlds(dlgId,'retSelfProjroi',RETSCREEN_ROISLF))) return; 
		
		if(analysisForSpouse){
			if(!(validateFocusRDFlds(dlgId,'retSpsAge',RETSCREEN_INTSPSAGE))) return;
			if(!(validateFocusRDFlds(dlgId,'retSpsCoordinateage',RETSCREEN_CORSPSAGE))) return;
			if(!(validateFocusRDFlds(dlgId,'retSpsProjage',RETSCREEN_PROSPSAGE))) return;
			if(!(validateFocusRDFlds(dlgId,'retSpsLivyrs',RETSCREEN_PROSPSLVYRRET))) return;
			if(!(validateFocusRDFlds(dlgId,'retSpsProjroi',RETSCREEN_ROISPS))) return;
		} 
		if(analysisForFamily){
			if(!(validateFocusRDFlds(dlgId,'retFamLivyrs',RETSCREEN_PROFAMLVYRRET))) return;
			if(!(validateFocusRDFlds(dlgId,'retFamProjroi',RETSCREEN_ROIFAM))) return;
		}
		
		
		return true;
}

function onSoldChange(elmid,chgeid1,chgeid2,yrstorent,flg){ 
//	elmid-sold on
//	chgeid1-txtFldDlgPropRentOnRetire
//	chgeid2-txtFldDlgPropCurRetInc
//	yrstorent-txtFldDlgPropYrsToRent
//	($(this),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"));
//	console.log("onSoldChange"+flg);
	var value=elmid.val();

	if(value=="N"){  
		$(".solddiv").css("display","block");
		$(".soldrentdiv").css("display","none");  
		if(chgeid1.val() == "Y"){
			$(".yearstorentdiv").css("display","block"); 
			yrstorent.prop("disabled",true);
			if(flg){yrstorent.val("");} 
		}else{
			$(".yearstorentdiv").css("display","none");
			yrstorent.prop("disabled",false);
		}
		chgeid1.prop("disabled",false);
		chgeid2.prop("disabled",true); 
		
		
	}else if(value=="Y"){
		 
		$(".solddiv").css("display","none");
		$(".soldrentdiv").css("display","none");
		$(".yearstorentdiv").css("display","none");
		$(".yrstosolddiv").css("display","block"); 
		chgeid1.prop("disabled",true);
		chgeid2.prop("disabled",true); 
		if(flg){chgeid1.val("");
		yrstorent.val("");}
	}else{ 
	
		$(".solddiv").css("display","none");
		$(".soldrentdiv").css("display","none"); 
		$(".yearstorentdiv").css("display","none");
		$(".yrstosolddiv").css("display","none"); 
			yrstorent.prop("disabled",true);
			yrstorent.val("");  
		chgeid1.prop("disabled",true);
		chgeid2.prop("disabled",true); 
		chgeid1.val("");
		if(flg){yrstorent.val("");} 
	
	}
	 
	return true;
}

function propObjChange(elmid,changeId,rentPer,yrstorent,flg){
//	propObjChange($(this),$("#txtFldDlgPropCurAnlRetInc"),$("#txtFldDlgCpfPropRentPerd"),$("#txtFldDlgPropYrsToRent"));
//console.log("propObjChange"+flg);
	var value=elmid.val(); 
	if(value=="Inv"){ 
		$(".currentinc").prop("disabled",false);
//		$(".yrstosolddiv").prop("display","block"); 
//		changeId.prop("disabled",false);
//		rentPer.prop("disabled",false); 
//		yrstorent.prop("disabled",false);
	}else{ 
		$(".currentinc").prop("disabled",true);
//		$(".yrstosolddiv").prop("display","none"); 
//		yrstorent.prop("disabled",true);
//		changeId.prop("disabled",true);
//		rentPer.prop("disabled",true);
		if(flg){rentPer.val("");
		changeId.val("");
		yrstorent.val(""); }
	}
	
	return true;
	
}

function retOnRetFnc(elmid,changeid,yrstorent,obj,soldon,flg){
//	retOnRetFnc($(this),$("#txtFldDlgPropCurRetInc"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"));
//	console.log("retOnRetFnc"+flg);
	var retonretval=elmid.val();  
	var soldon=soldon.val();
	
	if(retonretval == 'Y' ){  //&& obj.val() == "Inv"
		 
		$(".soldrentdiv").css("display","block"); 
		$(".yearstorentdiv").css("display","block"); 
		changeid.prop("disabled",false); 
		yrstorent.prop("disabled",false); 		
		 
	} else{ 
		$(".soldrentdiv").css("display","none");
		$(".yearstorentdiv").css("display","none");
		if(soldon == "Y"){
		 $(".yrstosolddiv").css("display","block");
		}else{
			$(".yrstosolddiv").css("display","none");
		}
		changeid.prop("disabled",true);
		if(flg){changeid.val("");}
		yrstorent.prop("disabled",true); 
		if(flg){yrstorent.val("");}
		 
	}
	
	$("#propYrsToRet").val($("#retYrstoret").val()).prop("disabled",true); 
	return true;
}


function propyearstorent(elmid,sold,rent,changeid,curRentInc,flg){
//elmid : $("#txtFldDlgCpfPropObj")
//sold:$("#txtFldDlgCpfPropSold")
//rent:$("#txtFldDlgPropRentOnRetire")
//changeid:$("#txtFldDlgPropYrsToRent")
//curRentInc:$("#txtFldDlgPropCurRetInc"));
//	console.log("propyearstorent"+flg);
	var invobject=elmid.val();
	var soldval = sold.val();
	var rentval = rent.val();
	

	
	if(soldval=="Y"){
		$(".yrstosolddiv").css("display","block"); 	
	}else{
		
//		if(invobject =="Inv"){
			if( soldval=="N" && rentval=="Y"){
			
				$(".yearstorentdiv").css("display","block"); 
				changeid.prop("disabled",false);
				curRentInc.prop("disabled",false);

//			}else if(soldval=="Y" && rentval!="Y"){
//				$(".yrstosolddiv").css("display","block"); 	
			} else{
				$(".yrstosolddiv").css("display","none"); 	
			}
//		} 
		/*else{
			$(".yearstorentdiv").css("display","none"); 
			changeid.prop("disabled",true);
			curRentInc.prop("disabled",true);
			if(flg){changeid.val("");
			curRentInc.val("");}
		}*/
		
	}
	
	
	return true;
}




$("#txtFldDlgPropRentOnRetire").on("change",function(){  
		propyearstorent($("#txtFldDlgCpfPropObj"),$("#txtFldDlgCpfPropSold"),$("#txtFldDlgPropRentOnRetire"),$("#txtFldDlgPropYrsToRent"),$("#txtFldDlgPropCurRetInc"),true); 
});

$("#txtFldDlgCpfPropMktVal").on("change",function(){
	calculateCrtRentIncome($("#txtFldDlgCpfPropMktVal"),$("#txtFldDlgCpfPropApprecrate"),$("#retYrstoret"),$("#txtFldDlgPropFVOnRent")); 
});

function callCalcPropFV(obj){
	if(obj){
		var rowobj = obj.closest("tr");
		calculateCrtRentIncome(rowobj.find("td:eq(3)").find('input:eq(0)'),rowobj.find("td:eq(5)").find('input:eq(0)'),$("#retYrstoret"),rowobj.find("td:eq(19)").find('input:eq(0)'));
	}else{
		calculateCrtRentIncome($("#txtFldDlgCpfPropMktVal"),$("#txtFldDlgCpfPropApprecrate"),$("#retYrstoret"),$("#txtFldDlgPropFVOnRent"));	
	}
	
}
  

function calculateCrtRentIncome(mart,aprate,yrtoret,chgeid){
	
	var mktval=Number(mart.val());
	var apprate= isEmpty(aprate.val()) ? 0 : (Number(aprate.val())/100);
	yrtoret=Number(yrtoret.val());
	 
	var result = FVCalculation(apprate, yrtoret, 0,-1*mktval, 1); 
	chgeid.val(remPriceAfDec(result));
	
}

