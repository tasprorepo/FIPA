/**
 * FnaVehicleownDets Script
 */
 
$("a.addvehcileicon").on("click",function(){ 
	showLoader();
	$("#cashasstmain_li").click();	
	$("#cashotherasset_li").click();	
	
	calcVehLnRepayment();
	if($("#VehARow").hasClass("blinking")){
		$("#VehARow").removeClass("blinking");
	} 
	
	$("#VehARow").addClass("blinking"); 
	if($("#VehARow").hasClass("blinking")){
		setTimeout(function() {
			$("#assets").scrollTop(10000);  
			$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false); 
			$("#vehicleownership").focus(); 
			hideLoader();
		},1000);
	} 
	
	
	
	
});
 

/*Datatable Initialisation*/
//var fnaVehiOwnTbl = $('#fnaVehiOwnTbl').DataTable( {
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
//  	             {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9],"orderable": false,"searchable": false}],		 
//		 fnDrawCallback: function(oSettings) {
//			 if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
//				 
//			    } 
//   
//		 }, 
//}).draw();
	


/*Add Row Click */
$("#VehARow").on("click",function(){
	if(!valvehTbl())return;
			vehClearFlds();
			$("#txtFldDlgVehId").val(makeid(17));
			showFIPAModel('vehown_Dialog','Vehicle Ownership');   
//			$("#vehown_Dialog").find("input[id=txtFldDlgVehMode]").val("I");//instant save added line
			$('#vehown_Dialog').on('shown.bs.modal', function () {
//				$("#vehown_Dialog").find(".modal-footer").find("button:eq(0)").text("Add");
				$("#vehown_Dialog").find("select[id=txtFldDlgVehOwner]").focus();//Aravindh
				$("#vehown_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
						if(!validatevehDetails())return;
					   	vehRdlyflds(INS_MODE);  
					   	getVehOwnRows(null); 
						$('#vehown_Dialog').modal('hide'); 
				  });  
			});
			
			
});



/*Populate Data */
function getVehOwnRows(dataset){ 
	 
var cell0 = '<span></span>'+
'<input type="hidden" name="txtFldvehMode" readonly="true" value="'+INS_MODE+'" class="fipaMode"/><input type="hidden" name="txtFldVehId">';

var cell1 = '<div class="checkbox checkbox-primary text-center"><input type="checkbox" name="radvehSelect"/><label>&nbsp;</label></div>'; 


var cell2 = '<select  name="txtFldVehOwner" class="form-control editable" ></select>';
 
var cell3 = '<input type="text" name="txtFldVehMktVal" class="form-control editable" onmouseover="fipaTooltip(this);"  />'; 

var cell4 = '<input type="text" name="txtFldVehLnVal" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell5 = '<input type="text" name="txtFldVehLnBank" class="form-control editable"   onmouseover="fipaTooltip(this);"  />';

var cell6 = '<input type="text" name="txtFldVehPerd" class="form-control editable" onmouseover="fipaTooltip(this);" />'; 

var cell7 = '<input type="text" name="txtFldVehiMonthInstal"" class="form-control editable"   onmouseover="fipaTooltip(this);" />';

var cell8 = '<select name="txtFldVehiSoldOnDeath" class="form-control editable"></select>';

var cell9 = '<input type="text" name="txtFldVehRemark" class="form-control editable"  maxlength="300" onmouseover="fipaTooltip(this);"  />'
+'<input type="hidden" name="txtFldVehCrtdBy"/><input type="hidden" name="txtFldVehCrtdDate"/>';


fnaVehiOwnTbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9] ).draw( false );

var rowCount = $('#fnaVehiOwnTbl tbody tr:visible').length;	
rowCount =  (rowCount == 0) ? $('#fnaVehiOwnTbl tbody tr').length : rowCount;
var $lastRow = $("#fnaVehiOwnTbl tbody tr:last");	

$lastRow.find("td:first").find('span').text(rowCount); 

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
})

$lastRow.find("td:eq(0)").find('input:eq(1)').val($("#txtFldDlgVehId").val());

$lastRow.find("td:eq(1)").find("input:first").attr('id',"radveh"+$lastRow.index())
.parent().find('label').attr('for',"radveh"+$lastRow.index());


var vehowner = $("#txtFldDlgVehOwner > option").clone();
$lastRow.find("td:eq(2)").find('select:eq(0)').append(vehowner);
$lastRow.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgVehOwner").val());
$lastRow.find("td:eq(2)").find('select:eq(0)').on("change",function(){
	calcVehLnRepayment();	
});


$lastRow.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgVehMktVal").val());
$lastRow.find("td:eq(3)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(3)").find('input:eq(0)').on("change",function(){
	vehowncalculateRow();	
});


$lastRow.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgVehLnVal").val());
$lastRow.find("td:eq(4)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(4)").find('input:eq(0)').on("change",function(){
	vehowncalculateRow();	
});

$lastRow.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgVehLnBank").val());

$lastRow.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgVehPerd").val());
$lastRow.find("td:eq(6)").find('input:eq(0)').addClass("applyEvntYrs");
$lastRow.find("td:eq(6)").find('input:eq(0)').on("change",function(){
	vehowncalculateRow();	
});

$lastRow.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgVehMthlyInstal").val());
$lastRow.find("td:eq(7)").find('input:eq(0)').addClass("applyEvntUsd");
$lastRow.find("td:eq(7)").find('input:eq(0)').on("change",function(){
	calcVehLnRepayment();	
});


var vehisolddeath = $("#txtFldDlgVehiSoldOnDeath > option").clone();
$lastRow.find("td:eq(8)").find('select:eq(0)').append(vehisolddeath);
$lastRow.find("td:eq(8)").find('select:eq(0)').val($("#txtFldDlgVehiSoldOnDeath").val());

$lastRow.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgVehRemark").val());

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
	crudicons(this,'fnaVehiOwnTbl','Selvehicleownership','VehERow','VehDRow');
			
});
//DHTML CRUD ICONS

$lastRow.find("td:eq(1)").find("input:first").click(function(){
	selectSingleRow(this);
//	DHTML CRUD ICONS
	crudicons(this,'fnaVehiOwnTbl','Selvehicleownership','VehERow','VehDRow');
});


if(dataset != null){

	rowCount = $('#fnaVehiOwnTbl tbody tr').length;	
	

	$lastRow.find("td:first").find('span').text(rowCount);
	
			if($("#hTxtFldFnaReviewFlag").val() == "U"  || $("#hTxtFldFnaReviewFlag").val() == ""){ 
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(col);
			}
			
	var infoDetsArr = new Array();
	
	for(var data in dataset){
		var col = dataset[data];
		
		switch(data){
		
		case "vehiId": 
			$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
			break;
			
		case "vehiOwner": 
			selectNullvalChk($lastRow.find("td:eq(2)"),col);
			break;
			
		case "vehiMktvalue": 
			$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
			break;
		 
		case "vehiLoanval": 
			$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
			break;
			
		case "vehiLoanbank": 
			$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 
			break;
		 
		case "vehiPeriod": 
			$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
			break;
			
		case "vehiMonthInstall": 
			$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 			
			break;
		
		case "vehiSoldOnDeath": 
			selectNullvalChk($lastRow.find("td:eq(8)"),col);
			break;
		
		case "vehiRemark": 
			$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
			break;
			
		
		case "createdBy": 
			$lastRow.find("td:eq(9)").find('input:eq(1)').val(col);
			infoDetsArr.push(col);				
			break;
			
		case "createdDate":
			$lastRow.find("td:eq(9)").find('input:eq(2)').val(col);
			infoDetsArr.push(col);
			break;
			 
		}			 
		 
	}
	}
if(dataset == null){
	calcVehLnRepayment();
//	instantVehOwnSave($lastRow,INS_MODE);		//instant save added line
//	DHTML CRUD ICONS
	crudicons(null,'fnaVehiOwnTbl','Selvehicleownership','VehERow','VehDRow');
} 

/*
$lastRow.find("input[type=text]").prop("readonly",true);//instant save added line
$lastRow.find("select").prop("disabled",true);//instant save added line
*/
 $("#fnaVehiOwnTblfooter").css("display","inline");
}

//DHTML SELECT ALL
function SelAllvehicleownership(obj){
	
	if($(obj).is(":checked")){
		
		$('#fnaVehiOwnTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",true);
		
		$("#VehDRow").attr("disabled",false);
		$('#fnaVehiOwnTbl tbody tr').addClass("selected");
		
		var $rowCount = $('#fnaVehiOwnTbl tbody tr').length;
		
		if($rowCount == 0){
			$(obj).prop("checked",false);
			$("#VehERow").attr("disabled",true);
			$("#VehDRow").attr("disabled",true);
		}else if($rowCount == 1){
			$("#VehERow").attr("disabled",false);
			$("#VehDRow").attr("disabled",false);
		}else if($rowCount > 1){
			$("#VehERow").attr("disabled",true);
			$("#VehDRow").attr("disabled",false);
		}
		
	}else{
		
		$('#fnaVehiOwnTbl tbody tr').find("td:eq(1)").find("input[type=checkbox]").prop("checked",false);
		
		$('#fnaVehiOwnTbl tbody tr').removeClass("selected");
		
		$("#VehERow").attr("disabled",true);
		$("#VehDRow").attr("disabled",true);
		
	}
}

/*Edit Row Click */
$("#VehERow").on("click",function(){
	VehVRow(); 
});


/*View Row Click */
function VehVRow(){
	var isOneRowSelected=0;
	var $rowCount = $('#fnaVehiOwnTbl tbody tr').length;	
	var $lastRow = $("#fnaVehiOwnTbl tbody tr:last");	
	
	if($rowCount<1){
		applyToastrAlert("Insert rows before edit/view");
		return;
	} 
	
	
	$("#fnaVehiOwnTbl tbody tr").each(function(){
		var $row = $(this);   
		$row.removeClass('selected');  
		$(this).removeAttr("style"); 
		$row.find("td").removeAttr("style");
	});
	
	
	$("#fnaVehiOwnTbl tbody").find('input[name="radvehSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			isOneRowSelected++;
		}
	});
	
	
	if(isOneRowSelected > 1){ 
		applyToastrAlert("More than one rows selected.Select one row only");
		return;
	}
	
	$("#fnaVehiOwnTbl tbody").find('input[name="radvehSelect"]').each(function(){ //Checkbox selection
		var $curElm=$(this);
		if($curElm.is(":checked")){ 
			var $row = $curElm.parents("tr");                                    
			var $mode = $curElm.parents("tr").find("td:first").find('input:eq(0)').val(); 
			$curElm.prop("checked",false);
	     	 $curElm.parents("tr").removeClass('selected');
	     	 
			if(($mode == INS_MODE) || ($mode == UPD_MODE) ){
				 var $RowId=$row.index();
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);  
				 $curElm.parents("tr").find("td:first").find('input:eq(0)').val($mode);   
					$(this).parents("tr").find("td").find("input.editable,select.editable").each(function(){
					$(this).attr("disabled",false); 
					$row.removeClass('selected');  
					$(this).parent().css({border:'1px solid green'});
					$row.css({border:'1px solid green'});
					$row.find("td").css({border:'1px solid green'}); 
				});
				 	vehRdlyflds($mode);
					vehfilldlgval($row); 
					showFIPAModel('vehown_Dialog','Vehicle Ownership');  
					$("#vehown_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");//instant save added line
					
					$('#vehown_Dialog').on('shown.bs.modal', function () {
				//		$row.find("input[type=text]").prop("readonly",true);//instant save added line
				//		$row.find("select").prop("disabled",true);//instant save added line
	
//						$("#vehown_Dialog").find(".modal-footer").find("button:eq(0)").text("Edit");
						$("#vehown_Dialog").find("select[id=txtFldDlgVehOwner]").focus();//Aravindh
						$("#vehown_Dialog").find(".modal-footer").find("button:eq(0)").on("click",function(){
							 if(!validatevehDetails())return; 
					     		if(!isEmpty($RowId) && !($RowId==undefined)){  
					     			vehfilldomval($RowId,$row); 
					     		}  
					     		vehowncalculateRow();
					     		calcVehLnRepayment();	
					    // 		instantVehOwnSave($row,UPD_MODE); //instant save added line
								$('#vehown_Dialog').modal('hide'); 
								vehClearFlds();
								crudicons(this,'fnaVehiOwnTbl','Selvehicleownership','VehERow','VehDRow');
							
						});
						
						$("#vehown_Dialog").find(".modal-footer").find("button:eq(1)").on("click",function(){
							crudicons(this,'fnaVehiOwnTbl','Selvehicleownership','VehERow','VehDRow');
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
$("#VehDRow").on("click",function(){ 
	 	datatableDeleteRow('fnaVehiOwnTbl',fnaVehiOwnTbl,'Selvehicleownership','VehERow','VehDRow');  
/*//		DHTML CRUD ICONS
		var rc = fnaVehiOwnTbl.row().count();
		if(rc ==0){
			$("#Selvehicleownership").prop("checked",false);
			crudicons(this,'fnaVehiOwnTbl','Selvehicleownership','VehERow','VehDRow');
		}
//		DHTML CRUD ICONS
*/});

/*Clear Fields */
function vehClearFlds(){
	$("#vehown_Dialog").find("input[type=text]").val("");
	$("#vehown_Dialog").find("textarea").val("");
	$("#vehown_Dialog").find("select").val("");
}

/*Disabled/Readonly Fields */
function vehRdlyflds(mode){ 
	 if(mode == QRY_MODE ){
			$("#vehown_Dialog :input").prop("disabled", true); 
	 } else if((mode == INS_MODE) || (mode == UPD_MODE) ){
			$("#vehown_Dialog :input").prop("disabled", false);
	 }
}

/*Validation */
function validatevehDetails(){
	 
	 
	if(!(validateFocusFlds('vehown_Dialog','txtFldDlgVehOwner', VEH_OWNER))) return;
	if(!(validateFocusFlds('vehown_Dialog','txtFldDlgVehMktVal', VEH_MKTVAL))) return;
	if(!(validateFocusFlds('vehown_Dialog','txtFldDlgVehLnVal', VEH_LOANVAL))) return;
		  
	  return true; 
}

function valvehTbl(){ 
//	var $lastRow = $("#fnaVehiOwnTbl tbody tr:last");	
	var $RowCount = fnaVehiOwnTbl.rows().count();

	var valid=true;
	if($RowCount > 0 ){ 
		$("#fnaVehiOwnTbl tbody tr").each(function(){
			var $lastRow=$(this);
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(2)").find('select:eq(0)'), VEH_OWNER))){valid=false;return false;}; 
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(3)").find('input:eq(0)'), VEH_MKTVAL))){valid=false;return false;};
		if(!(validateFocusDhtmlFlds($lastRow.find("td:eq(4)").find('input:eq(0)'), VEH_LOANVAL))) {valid=false;return false;};
		  
		});
	}  
	
return valid;
}


/*Mandatory Fields Tooltip*/ 
$("#txtFldDlgVehOwner,#txtFldDlgVehMktVal,#txtFldDlgVehLnVal").on("change",function(){
	if(!isEmpty($(this).val())){
	$(this).removeClass("mandatoryFillFlds");
	$(this).qtip('disable');
	$(this).qtip('destroy',true);
	}
});
 


/* Filling Model Fields*/
function vehfilldlgval($lastRow){
//	  $('#vehown_Dialog #txtFldDlgVehMode').val($lastRow.find("td:eq(0)").find('input:eq(0)').val());//instant save added line
	  $('#vehown_Dialog #txtFldDlgVehId').val($lastRow.find("td:eq(0)").find('input:eq(1)').val());
	  $('#vehown_Dialog #txtFldDlgVehOwner').val($lastRow.find("td:eq(2)").find('select:eq(0)').val());
	  $('#vehown_Dialog #txtFldDlgVehMktVal').val($lastRow.find("td:eq(3)").find('input:eq(0)').val());
	  $('#vehown_Dialog #txtFldDlgVehLnVal').val($lastRow.find("td:eq(4)").find('input:eq(0)').val());
	  $('#vehown_Dialog #txtFldDlgVehLnBank').val($lastRow.find("td:eq(5)").find('input:eq(0)').val());
	  $('#vehown_Dialog #txtFldDlgVehPerd').val($lastRow.find("td:eq(6)").find('input:eq(0)').val());
	  $('#vehown_Dialog #txtFldDlgVehMthlyInstal').val($lastRow.find("td:eq(7)").find('input:eq(0)').val());
	  $('#vehown_Dialog #txtFldDlgVehiSoldOnDeath').val($lastRow.find("td:eq(8)").find('select:eq(0)').val());
	  $('#vehown_Dialog #txtFldDlgVehRemark').val($lastRow.find("td:eq(9)").find('input:eq(0)').val());
	  $('#vehown_Dialog #txtFldDlgVehCrtdBy').val($lastRow.find("td:eq(9)").find('input:eq(1)').val());
	  $('#vehown_Dialog #txtFldDlgVehCrtdDate').val($lastRow.find("td:eq(9)").find('input:eq(2)').val());
}

/* Filling Table Fields*/
function vehfilldomval($RowId,$row){
	$row.find("td:eq(2)").find('select:eq(0)').val($("#txtFldDlgVehOwner").val()); 
	$row.find("td:eq(3)").find('input:eq(0)').val($("#txtFldDlgVehMktVal").val());
	$row.find("td:eq(4)").find('input:eq(0)').val($("#txtFldDlgVehLnVal").val()); 
	$row.find("td:eq(5)").find('input:eq(0)').val($("#txtFldDlgVehLnBank").val()); 
	$row.find("td:eq(6)").find('input:eq(0)').val($("#txtFldDlgVehPerd").val()); 
	$row.find("td:eq(7)").find('input:eq(0)').val($("#txtFldDlgVehMthlyInstal").val()); 
	$row.find("td:eq(8)").find('select:eq(0)').val($("#txtFldDlgVehiSoldOnDeath").val()); 
	$row.find("td:eq(9)").find('input:eq(0)').val($("#txtFldDlgVehRemark").val());  
	//$row.find("input[type=text]").prop("readonly",true);//instant save added line
	//$row.find("select").prop("disabled",true);//instant save added line

}

//instant save added line
$("#vehown_Dialog").find("input,select,textarea").on("change",function(){
	$("#vehown_Dialog").find(".modal-footer").find("button:eq(0)").removeClass("hidden");
});


/*###########################################################################################################################################################*/


function vehowncalculateRow(){ 
	 var sum1=0,sum2=0,sum3=0;
	 var $fnaVehiOwnTblcount = fnaVehiOwnTbl.rows().count();
		 
		 
		 if($fnaVehiOwnTblcount >0){
			 
			 $("#fnaVehiOwnTbl tbody tr").each(function(i,row){
				 
				 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
				 var vehMrktval=$(this).find("td:eq(3)").find("input:eq(0)").val(); 
				 var vehloanval=$(this).find("td:eq(4)").find("input:eq(0)").val();
				 var vehPerd=$(this).find("td:eq(6)").find("input:eq(0)").val();
				 
				 if(mode_r != "D"){
					 
					 if((!isEmpty(vehMrktval))){
						 sum1 +=Number(vehMrktval); 
					 }
					 if((!isEmpty(vehloanval))){
						 sum2 +=Number(vehloanval); 
					 }
					 if((!isEmpty(vehPerd))){
						 sum3 +=Number(vehPerd); 
					 } 
					 
				 }
				 
			 });
		 }
		 
		 
		 
		 
		 if(!(sum1 == 0 && sum2 == 0 && sum3 == 0)){
			 $("#fnaVehiOwnTblfooter #txtFldTotmktval").val(remPriceAfDec(sum1)); 
		     $("#fnaVehiOwnTblfooter #txtFldTotlnval").val(remPriceAfDec(sum2));
	         $("#fnaVehiOwnTblfooter #txtFldTotperd").val(remPriceAfDec(sum3));
		 }
		 
		 
		 if(sum1 == 0){$("#fnaVehiOwnTblfooter #txtFldTotmktval").val("0");}
		 if(sum2 == 0){$("#fnaVehiOwnTblfooter #txtFldTotlnval").val("0");}
		 if(sum3 == 0){$("#fnaVehiOwnTblfooter #txtFldTotperd").val("0");}
			  
		 return true;
}





function calcVehLnRepayment(){ 

	 var sumSlf=0,sumSps=0; 
 var $fnaVehiOwnTblcount = fnaVehiOwnTbl.rows().count();
	 
	 
	 if($fnaVehiOwnTblcount >0){
		 
		 $("#fnaVehiOwnTbl tbody tr").each(function(i,row){
			 
			 
			 var mode_r = $(this).find("td:first").find('input:eq(0)').val();
			 
			 var vehowner=$(this).find("td:eq(2)").find("select:eq(0)").val(); 
			 var vehMonthInstal=$(this).find("td:eq(7)").find("input:eq(0)").val(); 
			 
			 if(mode_r != "D"){
				 
				 if((!isEmpty(vehMonthInstal)) && vehowner == "Self"){
					 sumSlf +=Number(vehMonthInstal); 
				 }
				 if((!isEmpty(vehMonthInstal)) && vehowner == "Spouse"){
					 sumSps +=Number(vehMonthInstal); 
				 }
				 
			 }
			 
			 
			 
		 });
	 }
	 
	 
	 
	 
	 if(!(sumSlf == 0 && sumSps == 0)){
		 applyToastrAlert("Vehicle loan repayment is calculated and Reflected to Expected fund Inflow and Outflow Screen");
		 $("#expdSelfVehiloan").val(remPriceAfDec(sumSlf * 12)); 
	     $("#expdSpsVehiloan").val(remPriceAfDec(sumSps * 12)); 
	     calcSum(this,'SUMOF_ANNEXP_SELF');
	     calcSum(this,'SUMOF_ANNEXP_SPS');
	     calcSum(this,'SUMOF_ANNEXP_FAM');
	 }else{ 
	     calcSum(this,'SUMOF_ANNEXP_SELF');
	     calcSum(this,'SUMOF_ANNEXP_SPS');
	     calcSum(this,'SUMOF_ANNEXP_FAM');
	 }
	 
	 
	 
	 if(sumSlf == 0){$("#expdSelfVehiloan").val("0");}
	 if(sumSps == 0){$("#expdSpsVehiloan").val("0"); }
	 
	
	 
	 calcSum(this,'SUMOF_ANNEXP_SELF');
	 calcSum(this,'SUMOF_ANNEXP_SPS');
	 
	 
	 return true;
	 
}
