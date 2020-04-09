 
$("#genBasicicon").on("click",function(){
	getBasicfn(true,null);
});


function getBasicfn(validateprevdata,dataset){

	
//	var tdpos=Number($("#cvplnleftpaneltbl tbody tr:eq(0)").find("td").length);
//	var nexttd = Number(tdpos) + 1;
	
	
	if(validateprevdata){
		
		if(dataset  == null){
			if(!checkRidervalidation())return;
		}
				
		
		$("#cvplnleftpaneltbl tbody tr").each(function(i,e){
			
			var thisrow = $(this);
			
			var totalcell = thisrow.find("td").length;
			console.log(totalcell);	
			
			 var total_basics = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("input[name=txtFldTotalRiders]").length;
			
			var ori=thisrow.find("td:last").find("select,input[type='text'],textarea").prop("name");
			var formulsel = thisrow.find("td:last").find("select").hasClass("multibenefits");
			
			
			var currid = ori + "B" + total_basics;
			
			
			if(formulsel){
				
//				$('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:eq("+tdpos+")").after("<td width='1%' class='cvborder-bottom'>"+$("#appendRMultselect").html()+"</td>");
//				
//				$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find(":input").prop("id",newriderid);
//				
//				genMultseltBR(newriderid); 
//				
//				
//				$("#"+newriderid).parents("td").find("span.multiselect-native-select").find("ul.multiselect-container").find("label.checkbox").removeClass("checkbox");
				
//				$("#appendRMultselect").find("select").prop("id",currid); 
//				$("#appendRMultselect").find("input[type='text']").prop("id",currid);
				
				thisrow.find("td:last").after("<td width='1%' class='cvborder-bottom'>"+$("#appendRMultselect").html()+"</td>");
				thisrow.find("td:last").find(":input").prop("id",currid);
				genMultseltBR(currid);
				
				$("#"+currid).parents("td").find("span.multiselect-native-select").find("ul.multiselect-container").find("label.checkbox").removeClass("checkbox");
				
			}else{
				$('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:last").after("<td width='1%' class='cvborder-bottom'>"+$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq(0)").html()+"</td>");  
				$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:last").find("select,input[type='text'],textarea").prop("id",currid);
				$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:last").find("label[class=switchs]").find("input:eq(0)").prop("id",currid);
				if( i == 0){
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:last").addClass("basicplantd");
				}
			}   
			 

//			$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:last").find("input:eq(1)").on("change",function(){
//				calculateEndDateFromYear($("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:last").find("input:eq(1)"),$("#cvplnleftpaneltbl tbody").find("tr:eq(3)").find("td:last").find("input:eq(0)"),$("#cvplnleftpaneltbl tbody").find("tr:eq(4)").find("td:last").find("input:eq(0)"));
//			});
			
			
//			 var planNames_Lst=fpmsPlannamelist(); 
//		     $("#cvplnleftpaneltbl tbody").find("tr:eq(1)").find("td:last").find("input").typeahead({source: planNames_Lst});
		      
			var chkhasdate=thisrow.find("td:last").find("select,input[type='text'],textarea").closest("div").hasClass("date");
			if(chkhasdate){
				thisrow.find("td:last").find("input[type='text']").closest("div").prop("id",currid);
				thisrow.find("td:last").find("input[type='text']").closest("div").datetimepicker(dateOptions).on("change", function() {
					checkDateFormat($(this));
				}); 
				
//				$('#'+currid).datetimepicker(dateOptions).on("change", function() {
//					checkDateFormat($(this));
//				});
				
				$('#'+currid).on("change", function() {
					checkDateFormat($(this));
				}); 
			}  
		}); 
	}
	 
	
	
	
	var total_cell= $('#cvplnleftpaneltbl tbody tr:eq(0)').find("td").length;
	total_cell = total_cell-1;
	
	var noofbsc = Number($("#cvplnleftpaneltbl").find("td.basicplantd").length);
	var ori = $('#cvplnleftpaneltbl tbody tr:first').find("td:eq("+total_cell+")").find("select,input[type='text'],textarea").prop("name");
	var currid = ori + "B" + noofbsc;
	
	
	$('#cvplnleftpaneltbl tbody tr:first').find("td:eq("+total_cell+")").find("span").text("B"+noofbsc);
	$('#cvplnleftpaneltbl tbody tr:first').find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(0)").val("B"+noofbsc);
	
	if(dataset != null){
		
		displayValue(dataset, null, total_cell);
		$('#cvplnleftpaneltbl tbody tr:first').find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(0)").val("B"+noofbsc);
		
	}else{
		
//		var hori=$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").find("div.hiddens").find("input:eq(0)").prop("id").split("B");   
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(0)").prop("id",currid);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(1)").val();//<!-- Created By -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(2)").val();//<!-- Created Date -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(3)").val($("#retYrstoret").val());//<!-- Yrs to ret -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(4)").val($("#retSelfCoordinateage").val());//<!-- Co-self age -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(5)").val($("#retSpsCoordinateage").val());//<!-- Co-spouse age -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(6)").val();//<!-- Mulition  -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(7)").val();//<!-- Cash value on Ret -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(8)").val($("#caSavingDeprate").val());//<!-- Int rate used -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(9)").val();//<!-- Prct used-->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(10)").val();//<!-- Cash value on ret -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(11)").val();//<!-- Cash val Ref Id -->
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(12)").val(INS_MODE);//<!-- Cash val Ref Id -->
		 
		
		
		var ridernewid = makeid(17);
		var noofbsc_ = Number($("#cvplnleftpaneltbl").find("input[value=Basic]").length);
		var BASIC_REF = "B"+noofbsc_;
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(0)").val(BASIC_REF);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(12)").val("I");
		  
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(13)").val(ridernewid);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(14)").val(newMakeId("LIP", 12));
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(18)").val(newMakeId("REF", 12));
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(1)").find("td:eq("+total_cell+")").find("input:eq(0)").focus();
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(2)").find("td:eq("+total_cell+")").find("span.multiselect-native-select").find("ul.multiselect-container").find("label.checkbox").removeClass("checkbox");
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+total_cell+")").find("input:eq(0)").prop("checked",true);
		if(validateprevdata){
			$("#cvplnleftpaneltbl tbody").find("tr:eq(5)").find("td:eq("+total_cell+")").find("input:eq(0)").val($("#lipIncepdate").val());
			$("#cvplnleftpaneltbl tbody").find("tr:eq(7)").find("td:eq("+total_cell+")").find("input:eq(0)").val($("#lipExpdate").val());
			
		}
		
//		var planconveselctid = $("#cvplnleftpaneltbl tbody").find("tr:eq(2)").find("td:eq("+total_cell+")").find("select").prop("id");
//		alert(planconveselctid)
	//	
//		genMultseltBR(planconveselctid);
		 
//		$("[name=txtFldIncDate]").val($("#lipIncepdate").val());
//		$("[name=txtFldPolExpDate]").val($("#lipExpdate").val());
	//	
//		setPlanBTheme();

		
	}
	
	$(".cashflowst").on("change",function(){
		calcTotSAPremPlandetails();
	});
	
	if(isEmpty($("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(18)").val())){
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+total_cell+")").find("div.hiddens").find("input:eq(18)").val(newMakeId("REF", 12));
	}
	 
	applyEventHandlers();
	showTooltip('basicDelbtn', BASIC_DELETE);
	showTooltip('riderDelbtn', RIDER_DELETE);
	showTooltipCls('covrgico', COVERAGE_PLAN); 
	showTooltipCls('covrgicoAdd', COVERAGE_PLAN); 
	showTooltipCls('genAddRProicon', ADD_RIDER);
	showTooltipCls('genAddBProicon', ADD_BASIC);
	planAlertInfo();

}




function genRiderfn(curElm,validateprevdata,dataset){
	
	var basiccount = $(curElm).parents("td").find("div.hiddens").find("input:eq(0)").val(); 
	var basicMode = $(curElm).parents("td").find("div.hiddens").find("input:eq(12)").val();
	var basicRefId = $(curElm).parents("td").find("div.hiddens").find("input:eq(14)").val();
	var totalRiderElm = $(curElm).parents("td").find("div.hiddens").find("input:eq(17)");
	var totalRiders = totalRiderElm.val();
	
	if(validateprevdata){
		if(!checkRidervalidation())return;	
	}
	 
	console.log("basicMode------->"+basicMode);
	
	if(basicMode != DEL_MODE){
		
		var tdpos=Number($(curElm).parents("td").index());
		var nexttd = Number(tdpos) + 1;
		
		
		var ridercount = "R"+totalRiders;//basiccount
		var text = "";
		
		if(validateprevdata){
			
			totalRiders = isEmpty(totalRiders) ?0:totalRiders;
			totalRiders = Number(totalRiders)+1;
			
			var currid = basiccount+"R"+totalRiders;
			
			
			$("#cvplnleftpaneltbl tbody tr").each(function(i,e){ 

//				$("#toAppendCVPlan table tbody").find("tr:first").find("td:eq(0)").find("span").text(basiccount); 
//				$("#toAppendCVPlan table tbody").find("tr:first").find("td:eq(0)").find("input").prop("readonly",true);
//				var ori=$("#toAppendCVPlan table tbody").find("tr:eq("+i+")").find("td:eq(0)").find("select,input[type='text'],textarea").prop("id");
				
				
				
//				$("#toAppendCVPlan table tbody").find("tr:eq("+i+")").find("td:eq(0)").find("select,input[type='text'],textarea").prop("id",currid);
				
//				Hidden Reference id
//				$(this).find("td:eq(0)").find("div.hiddens").find("input:eq(0)").val(basiccount+"_R"+(Number(pre)+1)); 
//				var hori = $("#toAppendCVPlan table tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(0)").prop("id").split("R");
				
				var currbasid = $('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:eq(0)").find(":input").prop("name");
				var currhtml = $('#toAppendCVPlan table tbody tr:eq('+i+')').find("td:eq(0)").html();		
				var newriderid = currbasid  + currid;
				
				var formulselR = $("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq(0)").find("select").hasClass("multibenefits");
				
				if(formulselR){  
					
//					$("#appendRMultselect").find("select").prop("id",currid);   
//					$("#appendRMultselect").find("input[type='hidden']").prop("id",currid);
					
					$('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:eq("+tdpos+")").after("<td width='1%' class='cvborder-bottom'>"+$("#appendRMultselect").html()+"</td>");
					
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find(":input").prop("id",newriderid);
					
					genMultseltBR(newriderid); 
					
					$("#"+newriderid).parents("td").find("span.multiselect-native-select").find("ul.multiselect-container").find("label.checkbox").removeClass("checkbox");
					
				}else{
					$('#cvplnleftpaneltbl tbody tr:eq('+i+')').find("td:eq("+tdpos+")").after("<td width='1%' class='cvborder-bottom'>"+currhtml+"</td>");
					
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find("label[class=switchs]").find("input:eq(0)").prop("id",newriderid);
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find(":input").prop("id",newriderid);
					$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find("div.date").prop("id","div_"+newriderid);
					
					var chkhasdateR=$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find("div").hasClass("date");
					
					if(chkhasdateR){
						
//						$("#cvplnleftpaneltbl table tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").find("div.date").prop("id","div_"+newriderid);
						$("#div_"+newriderid).datetimepicker(dateOptions).on("change", function() {
							checkDateFormat($(this));
						});  
						
//						var num = Number(tdpos)+1; 
//						$("#"+currid).datetimepicker(dateOptions).on("change", function() {
//							checkDateFormat($(this));
//						}); 
						
//						$("#"+newriderid).datetimepicker(dateOptions).on("change", function() {
//							checkDateFormat($(this));
//						});
					 }
					
					if( i == 0){
						$("#cvplnleftpaneltbl tbody").find("tr:eq("+i+")").find("td:eq("+nexttd+")").addClass("riderplantd");
					}
					
				}
				
//				var planNames_Lst=fpmsPlannamelist(); 
//				$("#cvplnleftpaneltbl tbody").find("input[name=selplan]").typeahead({source: planNames_Lst});
				 
//				text = ori[0]+"R0"+(Number(ori[1])+1); 
			 });
			
		}
		
 
	  
//	var ori=$("#toAppendCVPlan table tbody").find("tr:first").find("td:last").find("select,input[type='text'],textarea").prop("id");
	
//	var pre = $('#cvplnleftpaneltbl tbody tr:eq(11)').find("td").length;
//	var currid =  "R0"+pre//ori.replace("R0"+pre,"R0"+tdpos);
	
	var currbasid = $('#cvplnleftpaneltbl tbody tr:eq(0)').find("td:eq("+tdpos+")").find(":input").prop("name");
	var currid = basiccount+"R"+totalRiders;
	var newriderid = currbasid.substr(0,currbasid.length-5) + currid;
	
//	hiddens
	var index = nexttd ;//$('#cvplnleftpaneltbl tbody tr:eq(11)').find("td").find("textarea[id="+currid+"]").closest("td").index();
	
	
	if(dataset != null){
		
		displayValue(dataset, null, index);
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("span.lblbadge").text(basiccount);
		
		
	}else{
		
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(0)").prop("id",newriderid);
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(1)").val();//<!-- Created By -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(2)").val();//<!-- Created Date -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(3)").val($("#retYrstoret").val());//<!-- Yrs to ret -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(4)").val($("#retSelfCoordinateage").val());//<!-- Co-self age -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(5)").val($("#retSpsCoordinateage").val());//<!-- Co-spouse age -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(6)").val();//<!-- Mulition  -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(7)").val();//<!-- Cash value on Ret -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(8)").val($("#caSavingDeprate").val());//<!-- Int rate used -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(9)").val();//<!-- Prct used-->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(10)").val();//<!-- Cash value on ret -->
		$("#cvplnleftpaneltbl table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(11)").val();//<!-- Cash val Ref Id -->  

		
//		setPlanRTheme(index);
		
//		if(validateprevdata){
		$("#cvplnleftpaneltbl tbody").find("tr:eq(5)").find("td:eq("+index+")").find("input:eq(0)").val($("#lipIncepdate").val());
		$("#cvplnleftpaneltbl tbody").find("tr:eq(7)").find("td:eq("+index+")").find("input:eq(0)").val($("#lipExpdate").val());	
//		}
//		$("#toAppendCVPlan table tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(12)").val(INS_MODE);	
//		$("#toAppendCVPlan table tbody").find("tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(0)").prop("checked",true);
//		$("#toAppendCVPlan table tbody").find("tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(1)").val("");
		
		
		var basicnewid = makeid(17); 
//		console.log("ridercount------------------->"+ridercount)
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(0)").val(ridercount);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(12)").val(INS_MODE);	
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(13)").val(basicnewid);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(14)").val(basicRefId);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(18)").val(newMakeId("REF", 12));
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div:eq(1)").find("input:eq(0)").prop("disabled",true);
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("span.lblbadge").text(basiccount);
		
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find("input:eq(0)").prop("checked",true);
		$("#cvplnleftpaneltbl tbody").find("tr:eq(1)").find("td:eq("+index+")").find("input:eq(0)").focus();

//		$("[name=txtFldIncDate]").val($("#lipIncepdate").val());
//		$("[name=txtFldPolExpDate]").val($("#lipExpdate").val());

		
	}
	
	totalRiderElm.val(totalRiders);
	
	$(".cashflowst").on("change",function(){
		calcTotSAPremPlandetails();
	});
	
	if(isEmpty($("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(18)").val())){
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find("input:eq(18)").val(newMakeId("REF", 12));
	}

		 
	applyEventHandlers();
	showTooltip('basicDelbtn', BASIC_DELETE);
	showTooltip('riderDelbtn', RIDER_DELETE); 
	showTooltipCls('covrgico', COVERAGE_PLAN); 
	showTooltipCls('covrgicoAdd', COVERAGE_PLAN); 
	showTooltipCls('genAddRProicon', ADD_RIDER);
	showTooltipCls('genAddBProicon', ADD_BASIC);
	planAlertInfo();
	
	}else{
		applyErrorToastrAlert("Rider cannot be added when this basic is in DELETE MODE");
		$(curElm).css({"cursor": "not-allowed","pointer-events": "none"});
		$(curElm).off("click");
	}
}

function setPlanBTheme(){
	$("#cvplnleftpaneltbl tbody").find("tr").find("td").addClass("cvborder-topbottom");
	$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:last").addClass("cvborder-bottom");
	$("#cvplnleftpaneltbl tbody").find("tr:eq(11)").find("td:last").addClass("cvborder-top");
}




function setPlanRTheme(index){ 
	$("#cvplnleftpaneltbl tbody").find("tr").find("td").addClass("cvborder-topbottom");
	$("#cvplnleftpaneltbl tbody").find("tr").find("td").find("input,select,textarea").prop("disabled",false);
	$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").addClass("cvborder-bottom");
	$("#cvplnleftpaneltbl tbody").find("tr:eq(11)").find("td:eq("+index+")").addClass("cvborder-top");
	
}
 /*Validation */
function checkRidervalidation(){ 
	 
	var valid=true; 
			 
			if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:last").find('input:eq(0)'), "Key-in Plan Name"))) {return valid=false;;};
			if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:last").find('input:eq(0)'), "Key-in Sum Assured"))) { return valid=false;;};
			if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:last").find('input:eq(0)'), "Key-in Premium"))) {return valid=false;;};
			if(!(validateFocusDhtmlFlds($("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:last").find('input:eq(0)'), "Key-in Inception date"))) {return valid=false;;};
		 
	  
  return valid; 
}


function colorChangeRetEdu(){ 
	var plan = $("#covPlanName").text();
	setTimeout(function(){ 
		var retBool = false;
		 var RetRowCount = Number(liRetirementPlgtbl.rows().count());
		 var multiret  = $("#retMultionret").val();
		 if((RetRowCount >0 ) || !isEmpty(multiret) || !isEmpty($("#covMultion").text())){
				
			$("#liRetirementPlgtbl tbody tr").find("input[name=txtFldMvretPlanName]").each(function(){
		
				var value = $(this).val();
				if(plan ==  value){
					retBool=true; 
					 return retBool;
				}
			 });
		 }
				
			if(retBool){
				$(".educationclone").removeClass("btn-default");
				$(".educationclone").addClass("btn-success");
			}else{
				$(".educationclone").removeClass("btn-success");
				$(".educationclone").addClass("btn-default");
			}
				
			var eduBool = false;
			var EduRowCount =liEducationtbl.rows().count();
			if(EduRowCount > 0){
			$("#liEducationtbl tbody tr").find("input[name=txtFldChldPlanName]").each(function(){
		
				var value = $(this).val();
				if(plan ==  value){
					eduBool=true;
				 return eduBool;
				}
			 });
			}
			
			if(eduBool){
				$(".educationclone").removeClass("btn-default");
				$(".educationclone").addClass("btn-success");
			}else{
				$(".educationclone").removeClass("btn-success");
				$(".educationclone").addClass("btn-default");
			}
	 },100);
}


function changeNRExpDate(curElm){
	var tdpos=Number($(curElm).closest("td").index());  
	var term   = $("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(1)");
	var incDate= $("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+tdpos+")").find("input:eq(0)");
    var expDate= $("#cvplnleftpaneltbl tbody tr:eq(7)").find("td:eq("+tdpos+")").find("input:eq(0)"); 
    calculateEndDateFromYear(term,incDate,expDate);
	
}


function delRidfn(curElm){ 
	
	
	
		 var totalRiders = $(curElm).closest("tr").find("td.basicplantd").find("input[name=txtFldTotalRiders]").val();
		 totalRiders = isEmpty(totalRiders) ? 0 : Number(totalRiders)-1;
			
		var totalRidercntElm = $(curElm).closest("tr").find("td.basicplantd").find("input[name=txtFldTotalRiders]");
	
	var tdpos=Number($(curElm).closest("td").index());  
	var mode=$(curElm).parents("td").find("div.hiddens").find("input:eq(12)").val();
	var riderRef = $(curElm).parents("td").find("div.hiddens").find("input:eq(0)").val();
	 var riderPKId = $(curElm).parents("td").find("div.hiddens").find("input:eq(13)").val();
	 var syncRef = $(curElm).parents("td").find("div.hiddens").find("input:eq(18)").val();
	 
	 
	 $("#confirmationalertmsgdiv #confalertimg").html(""); 
		$("#confirmationalertmsgdiv #confalertmsg").html("The FIPA system will also delete all the associated coverages.<br/>Are you sure to delete this rider plan?");
		$('#confirmationalertmsgdiv').modal({
			  backdrop: 'static',
			  keyboard: false,
			  show:true,
			}); 
		
		$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
			$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Confirm?");
			
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
			
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){  
				

				 if(mode == INS_MODE){
						$("#cvplnleftpaneltbl tbody tr").each(function(){
								$(this).closest("tr").find("td:eq("+tdpos+")").remove();
						});
					 }else if(mode == QRY_MODE || mode == UPD_MODE){
						 $("#cvplnleftpaneltbl tbody tr").each(function(){
							 $(this).closest("tr").find("td:eq("+tdpos+")").find("input:eq(12)").val("D");
//							 $(this).closest("tr").find("td:eq("+tdpos+")").find("div[class=row]").css("border","1px solid red");
							 $(this).closest("tr").find("td:eq("+tdpos+")").css("opacity", "0.5");
							 $(this).closest("tr").find("td:eq("+tdpos+")").css("pointer-events","none");
							 $(this).closest("tr").find("td:eq("+tdpos+")").find(":input,img").off("click");
							 $(this).closest("tr").find("td:eq("+tdpos+")").fadeTo(0, 0.5);
							 $(this).closest("tr").find("td:eq("+tdpos+")").fadeIn();
						}); 
					 } 
					 
					 totalRidercntElm.val(totalRiders);
					 
					 
					 planAlertInfo();
					 
					 newplancoverageDelete(riderPKId);
					 
					 calcTotSAPremPlandetails();
					 
					 newplaneducationDelete(riderRef);
					 newplanretirementDelete(riderRef);
					 syncNLAllDelete(syncRef);
				 
				 $('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
				  	$('#confirmationalertmsgdiv').modal('hide');  
				  	
			  });
			
		});
	 

	 
	 
}

function delBRfn(curElm){
	
//	 var basicRef=$(curElm).parents("td").find("div.hiddens").find("span").text(); 
	 var bRef= $(curElm).parents("td").find("div.hiddens").find("input:eq(0)").val();
	 
	 var mode = $(curElm).parents("td").find("div.hiddens").find("input:eq(12)").val();
	 var basicplanref = $(curElm).parents("td").find("div.hiddens").find("input:eq(14)").val();
	 var basicplanpkid = $(curElm).parents("td").find("div.hiddens").find("input:eq(13)").val();
	 var syncRef= $(curElm).parents("td").find("div.hiddens").find("input:eq(18)").val();
	 
	 var total_basics = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td.basicplantd").length;
	 
	 
//	 var tdpos=Number($(curElm).closest("td").index());  
	 
	 if(total_basics > 1){
		 

			$("#confirmationalertmsgdiv #confalertimg").html(""); 
			$("#confirmationalertmsgdiv #confalertmsg").html("The FIPA system will also delete all the associated riders,coverages.<br/>Are you sure to delete this Basic plan?");
			$('#confirmationalertmsgdiv').modal({
				  backdrop: 'static',
				  keyboard: false,
				  show:true,
				}); 
			
			$('#confirmationalertmsgdiv').on('shown.bs.modal', function() {  
				$('#confirmationalertmsgdiv').find(".modal-title").text("FIPA - Confirm?");
				
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").unbind(); 
				
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(0)").click(function (){  
					
					 var ind=[];
					 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
						 var bpref=$(this).find("input:eq(14)").val();
						 if(bpref == basicplanref){
							 ind.push($(this).index());
						 }
					 });
					 
//					 if(ind.length > 1){
//						 alert("All related riders also deleted!");
//					 }
					 
					 $.each(ind, function( index, value ) {  
						 $("#cvplnleftpaneltbl tbody tr").each(function(){

							 if(mode == INS_MODE){
								 
								 $(this).find("td:eq("+value+")").find("input:eq(12)").val("D");
//								 $(this).find("td:eq("+value+")").find("div[class=row]").css("border","1px solid red");
								 $(this).find("td:eq("+ind[0]+")").remove();
//								 $(this).find("td:eq("+ind[0]+")").remove();
								 
							 }else if(mode == QRY_MODE || mode == UPD_MODE){
								 $(this).find("td:eq("+value+")").find("input:eq(12)").val("D");
//								 $(this).find("td:eq("+value+")").css("border","1px solid red");
								 $(this).find("td:eq("+value+")").css("opacity", "0.5");
								 $(this).find("td:eq("+value+")").css("pointer-events","none");
								 $(this).find("td:eq("+value+")").find(":input,img").off("click");
								 $(this).find("td:eq("+value+")").fadeTo(0, 0.5);
								 $(this).find("td:eq("+value+")").fadeIn();
							 }
						 });  
					}); 
					 
					 $('#confirmationalertmsgdiv').modal('hide');  
					 
					 newplancoverageDelete(basicplanpkid);
					 newplaneducationDelete(basicplanpkid);
					 newplanretirementDelete(basicplanpkid);
					 syncNLAllDelete(syncRef);
					  	
				  });
				$('#confirmationalertmsgdiv').find(".modal-footer").find("button:eq(1)").click(function (){ 
					  	$('#confirmationalertmsgdiv').modal('hide');  
					  	
				  });
				
			});
			
	
			planAlertInfo();
	 
	 }else{
		 applyErrorToastrAlert("Atleast 1 Basic plan is required to register a policy!");
	 }
	 
	
}

function syncNLAllDelete(syncRef){
	var cpfAccAddDedTablelen = cpfAccAddDedTable.rows().count();
	if(cpfAccAddDedTablelen > 0){
		$("#cpfAccAddDedTable tbody tr").each(function(){
			
			var cpfCurRef = $(this).find("td:eq(0)").find("input:eq(2)").val();
			var cpfCurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			
			if(cpfCurRef == syncRef){
				if(cpfCurMode == INS_MODE){ 
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE); 
					$(this).hide();
//					cpfAccAddDedTable.row($(this)).remove().draw(); 
				}else if (cpfCurMode == QRY_MODE){    
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
					$(this).find("td").css({border:'1px solid red'});  
				} 
			}
		});
	}
	
	
	
	var srsTablelen = srsTable.rows().count();
	if(srsTablelen > 0){
		$("#srsTable tbody tr").each(function(){
			
			var srsCurRef = $(this).find("td:eq(0)").find("input:eq(2)").val();
			var srsCurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			
					if(srsCurRef == syncRef){
						if(srsCurMode == INS_MODE){ 
//							srsTable.row($(this)).remove().draw(); 
							$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);  
							$(this).hide()
						}else if (srsCurMode == QRY_MODE){    
							$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
							$(this).find("td").css({border:'1px solid red'});  
						} 
					}
		});
	}
	
	
}

function newplancoverageDelete(Ref){
	//Coverage Benefit delete function
	
	var planCoverageslen = planCoveragestbl.rows().count();
	if(planCoverageslen > 0){
		$("#planCoveragestbl tbody tr").each(function(){
			var CurRef = $(this).find("td:eq(4)").find("input").val();
			var CurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			if(CurRef == Ref){
				if(CurMode == INS_MODE){ 
					planCoveragestbl.row($(this)).remove().draw(); 
			}else if (CurMode == QRY_MODE || CurMode == "U"){    
				$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
				$(this).find("td").css({border:'1px solid red'}); 
				$(this).hide(); 
			}
			
			}
		});
	}
}
function newplaneducationDelete(Ref){
	//Education delete function
	var liEducationlen = liEducationtbl.rows().count();
	if(liEducationlen > 0){
		$("#liEducationtbl tbody tr").each(function(){
			var CurRef = $(this).find("td:first").find('input:eq(2)').val(); 
			var CurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			if(CurRef == Ref){
				if(CurMode == INS_MODE){ 
//					liEducationtbl.row($(this)).remove().draw(); 
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);
					$(this).hide(); 
			}else if (CurMode == QRY_MODE){    
				$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
				$(this).find("td").css({border:'1px solid red'}); 
				$(this).hide(); 
			}
			
			}
		});
	}
}
function newplanretirementDelete(Ref){
	//Retirement delete function
	var liRetirementPlglen = liRetirementPlgtbl.rows().count();
	if(liRetirementPlglen > 0){ 
		$("#liRetirementPlgtbl tbody tr").each(function(){
			var CurRef = $(this).find("td:first").find('input:eq(2)').val(); 
			var CurMode = $(this).find("td:eq(0)").find("input:eq(0)").val();
			if(CurRef == Ref){
				if(CurMode == INS_MODE){ 
//					liRetirementPlgtbl.row($(this)).remove().draw(); 
					$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
					$(this).hide(); 
			}else if (CurMode == QRY_MODE){    
				$(this).find("td:first").find('input:eq(0)').val(DEL_MODE);      		     			
				$(this).find("td").css({border:'1px solid red'}); 
				$(this).hide(); 
			}
			
			}
		}); 
	}
}
 
function showSelectedRet($reference){
	var liRetirementPlglen = liRetirementPlgtbl.rows().count();
	if(liRetirementPlglen > 0){ 
		$("#liRetirementPlgtbl tbody tr").each(function(){
			var CurRef = $(this).find("td:first").find('input:eq(2)').val();  
			$(this).hide(); 
			
			if(CurRef == $reference){ 
				$(this).show(); 
			}
			 
		}); 
	}
	
	RetPlgcalculateRow(); 
}
function showSelectedEdu($reference){
	var liEducationlen = liEducationtbl.rows().count();
	if(liEducationlen > 0){
		$("#liEducationtbl tbody tr").each(function(){
			var CurRef = $(this).find("td:first").find('input:eq(2)').val();  
			$(this).hide(); 
			if(CurRef == $reference){ 
				$(this).show();  
			}
		});
	}
	totalPvRetEdPlgTerEdAge(); 
}



$("#updownicoCV").on("click",function(){
  if($("#cvlapse1div").is(":visible")){
	  $("#cvplnleftpaneltbl tbody tr").each(function(i,e){
  		if(i>1){
  			$(this).hide();
  		}
  	});
        	$("#cvlapse1div").css("display","none"); 
        	$(".cvbgcync").css("height","11.2vh");
        	
        } else{
        	$("#cvplnleftpaneltbl tbody tr").each(function(i,e){
        		if(i>1){
        			$(this).show();
        		}
        });
        	$("#cvlapse1div").css("display","block"); 
        	$(".cvbgcync").css("height",$("#cvplnleftpaneltbl").height() );
        	
      } 
	
});


$("#covback00").on("click",function(){  
	$("#covback00").addClass("hidden");
	$("#visCoverEdu").css("display","none");
	$("#visCoverRet").css("display","none");
	$("#visCover").css("display","block");
	colorChangeRetEdu();
});



function ForCoverageClone(cur){
	
	var $tdpos     = $(cur).closest("td").index();
	var $planName  = $(cur).closest("tr").prev("tr").find("td:eq("+$tdpos+")").find("input:eq(0)").val();
	var $SA		   = $("#cvplnleftpaneltbl tbody tr:eq(3) td:eq("+$tdpos+")").find("input").val();
	var $plan	   = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("span").text();  
	var $hcov  	   = $("#cvplnleftpaneltbl tbody tr:eq(2) td:eq("+$tdpos+")").find("input[type=hidden]").val(); 
	var $cov 	   = $("#cvplnleftpaneltbl tbody tr:eq(2) td:eq("+$tdpos+")").find("select");
	var $basicrid  = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("[name=txtFldTfplan]").val();
	var $Mode      = INS_MODE;
	var $covPayMtd = $("#cvplnleftpaneltbl tbody tr:eq(9) td:eq("+$tdpos+")").find("[name=selPaymtd]").val();
	
	var $inception   = $("#cvplnleftpaneltbl tbody tr:eq(5) td:eq("+$tdpos+")").find("[name=txtFldIncDate]").val();
	var $expiry   	 = $("#cvplnleftpaneltbl tbody tr:eq(7) td:eq("+$tdpos+")").find("[name=txtFldPolExpDate]").val();
	
	var $reference   = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("[name=txtFldliplnId]").val();//pkid
	var $planPKId   = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("input:eq(13)").val();
	var $syncRefId   = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("input:eq(18)").val();
	
	var $multion = $("#cvplnleftpaneltbl tbody tr:eq(0) td:eq("+$tdpos+")").find("input[type=hidden]:eq(6)").val();
//	console.log(multion);
//	if($basicrid == "Rider"){
	//	$planPKId =  $("#toAppendCVPlan tbody tr:eq(0) td:eq("+$tdpos+")").find("input:eq(13)").val();
//	}
	
 
	$("#plancoveragetbl tbody td").each(function(i){
		$(this).removeClass("selectedd");
		$(this).find("input[type=text],select").val("");
	}); 
	
	$("#plancoveragetbl thead th").each(function(i){
		$(this).removeClass("selectedd");
	});
	$("#plancoveragetbl tbody tr:eq(3)").find("td").each(function(){ 
		$(this).find("input").val("1");
	}); 
	$("#plancoveragetbl tbody tr:eq(0)").find("td").each(function(){ 
		$(this).find("input").val("1");
	});
	
	$("#plancoveragetbl tbody tr:eq(1)").find("td").each(function(){ 
		$(this).find("input").val($SA);
	}); 
	$("#covPlanName").text("");
	$("#covTypeofbenefit").text("");
	$("#covBasicRider").text("");	
	$("#covInception").text("");  
	$("#covExpiry").text("");  
	$("#covRef").text("");  
	$("#covMode").text("");
	$("#covPayMtd").text("");
	$("#covMultion").text("");
	$("#covSA").text("");
	
	multibenefits($cov); 

	$("#covback00").addClass("hidden");
	$("#covSave00").removeClass("hidden");
	$("#covClose00").removeClass("hidden");
	
	if(!isEmpty($planName) && !isEmpty($hcov)) { 
		
		$("#covPlanName").text($planName);  
		$("#covTypeofbenefit").text(expandCoverOpts($hcov,true)); 
		if($basicrid == "Basic"){
			$("#covBasicRider").text($basicrid+" - "+$plan);	
		}else if($basicrid == "Rider"){
			$("#covBasicRider").text($basicrid+" of "+$plan);	
		} 
		
		$("#covInception").text($inception);  
		$("#covExpiry").text($expiry);  
		$("#covRef").text($reference);   
		$("#covMode").text($Mode);
		$("#covPayMtd").text($covPayMtd);
		$("#covMultion").text($multion);
		$("#covSA").text($SA);
		
		$("#visCover").css("display","block");
	  	$("#visCoverEdu").css("display","none");
		$("#visCoverRet").css("display","none"); 
		
		domToPopCoverage($planPKId);
		showSelectedRet($planPKId);
		showSelectedEdu($planPKId);
		colorChangeRetEdu();
		setMainRPPlanTbltoLifeRP($tdpos);
		
		$("#plancovMandatoryFlds").insertAfter( $( "#coverageCloneModel" )); 
				$('#coveragesDialog').modal({
					  backdrop: 'static',
					  keyboard: false,
					  show:true,
					}); 
				
				$('#coveragesDialog').on('shown.bs.modal', function() {  
					$($.fn.dataTable.tables(true)).DataTable().columns.adjust(); 
						$(this).find(".modal-title").html("Coverage Benefits");   
						$(this).find(".modal-header").find("button:eq(0)").unbind();
						
						//Back	  
						 $(this).find(".modal-header").find("button:eq(0)").click(function (){  
								  $(this).addClass("hidden");

									$("#covSave00").removeClass("hidden");
									$("#covClose00").removeClass("hidden");
									 
										$("#visCoverEdu").css("display","none");
										$("#visCoverRet").css("display","none");
										$("#visCover").css("display","block");
										colorChangeRetEdu();
										
									  
						});
			   
			   //Save
		       $(this).find(".modal-header").find("button:eq(1)").click(function (){ 
		    	   	   if(!chkValidateCoverages())return; 
		    	       setAllCoverageTODHML(null,$hcov,$planPKId);
			    	   $( "#plancovMandatoryFlds" ).insertAfter($("#PLANCOV_APD"));
						  $("#visCover").css("display","none");
						  colorChangeRetEdu();
						  $('#coveragesDialog').modal('hide');   
				});
				
		       
				//Close  
				$(this).find(".modal-header").find("button:eq(2)").click(function (){
					
//					added
//						setAllCoverageTODHML(null,$hcov,$planPKId);
						//
						  $( "#plancovMandatoryFlds" ).insertAfter($("#PLANCOV_APD"));
						  $("#visCover").css("display","none");
						  colorChangeRetEdu();
						  $('.popover').popover('hide'); 
						  $('#coveragesDialog').modal('hide');   
				});
				
		});   
	}else{
		applyErrorToastrAlert("Please select the Plan Name and Coverages of selected plan");
		return false;
	}
}//end of ForCoverageClone

 

function toCalMAA(multiBootElm,MAAElm){
	var curelm = $("#"+multiBootElm).val();
	var curSumAssured = Number($("#covSA").text());
	$("#"+MAAElm).val(remPriceAfDec(curelm*curSumAssured)); 
}




$("#covback00").on("click",function(){
	$(this).addClass("hidden"); 
	$("#covSave00").removeClass("hidden");
	$("#covClose00").removeClass("hidden"); 
	$("#visCoverEdu").css("display","none");
	$("#visCoverRet").css("display","none");
	$("#visCover").css("display","black"); 
});

function chkCoverageExists(covertype,$planPKId){
	
	var exists = null;
	var len = planCoveragestbl.rows().count();
	if(len >0){
	 $('#planCoveragestbl tbody tr').each(function(){
		 
		 var currrow = $(this);
		 
		 var strTypeofCov =currrow.find("td:eq(5)").find('input:eq(0)').val();
		 var strPlanPKId =currrow.find("td:eq(4)").find('input:eq(0)').val();
		 
		 
		 if(strTypeofCov == covertype && strPlanPKId == $planPKId){
			 return exists = currrow;
			 
		 }		 
	 });
	}
	 return exists;
}


function setAllCoverageTODHML(dataset,$hcov,$planPKId){ 
	
	var strplanName	=	$("#covPlanName").text();
	var strTypeofbef=	$("#covTypeofbenefit").text();
	var strBasRid 	=	$("#covBasicRider").text();	
	var strInception=	$("#covInception").text();  
	var strExpiry	=	$("#covExpiry").text();  
	var strRef		=	$("#covRef").text();  
	var strMode		=	$("#covMode").text(); 
	var strPayMtd   =   $("#covPayMtd").text();
	var planrefid = $("#lipRetRefId").val();//
	/*Populate Data */
	
//	added
	var selectedCover = [];
	selectedCover = $hcov.split(",");
	
	 
	 if(strMode == INS_MODE || strMode == UPD_MODE){
		$("#plancoveragetbl thead tr:eq(0) th").each(function(colindex){ 
			
				if(colindex > 0){
					
					var isVisible = $(this).is(":visible");
					
						if(isVisible){
							
							var indexTD = $(this).index(); 
							var strTypeofCov 		= $(this).find("input").val();
							
							var strbooster  		= $("#plancoveragetbl tbody tr:eq(0)").find("td:eq("+indexTD+")").find("input").val();
							var strmaaAmtAsd  		= $("#plancoveragetbl tbody tr:eq(1)").find("td:eq("+indexTD+")").find("input").val();
							var strmaaExpPerd 		= $("#plancoveragetbl tbody tr:eq(2)").find("td:eq("+indexTD+")").find("input").val();
							var strnoOfYrs 			= $("#plancoveragetbl tbody tr:eq(3)").find("td:eq("+indexTD+")").find("input").val();
							var strDsbltyBenf 		= $("#plancoveragetbl tbody tr:eq(4)").find("td:eq("+indexTD+")").find("input").val();
							var stryrsOfDsbltyPay	= $("#plancoveragetbl tbody tr:eq(5)").find("td:eq("+indexTD+")").find("input").val();
							var strmaxPayoutAge		= $("#plancoveragetbl tbody tr:eq(6)").find("td:eq("+indexTD+")").find("input").val();
							var strtypesOfHS  		= $("#plancoveragetbl tbody tr:eq(7)").find("td:eq("+indexTD+")").find("input").val();
							var strdeductible 		= $("#plancoveragetbl tbody tr:eq(8)").find("td:eq("+indexTD+")").find("input").val();
							var strcoInsurance 		= $("#plancoveragetbl tbody tr:eq(9)").find("td:eq("+indexTD+")").find("input").val();
							var strdescription		= $("#plancoveragetbl tbody tr:eq(10)").find("td:eq("+indexTD+")").find("input").val();
							var strremarks 			= $("#plancoveragetbl tbody tr:eq(11)").find("td:eq("+indexTD+")").find("input:eq(0)").val();
							var strCovPKID 			= $("#plancoveragetbl tbody tr:eq(11)").find("td:eq("+indexTD+")").find("input:eq(1)").val();
							var strCovPlanPKID 		= $("#plancoveragetbl tbody tr:eq(11)").find("td:eq("+indexTD+")").find("input:eq(1)").val();
							
							
							if(strTypeofCov != undefined && strTypeofCov != "undefined" && 
									strTypeofCov != "Retirement_Planning" && strTypeofCov  != "Education_Planning"){ 
									
									strTypeofCov.replace(new RegExp('_', 'g')," ").replace(new RegExp('-', 'g')," ");
									
									
									if( isEmpty(strCovPKID) ){
										strCovPKID=makeid(17);
									}
									
									console.log(strTypeofCov +"<------------->"+strCovPKID);
	
									var $lastRow = chkCoverageExists(strTypeofCov,strRef);
									console.log("last row in exist -->"+$lastRow)
									
									if( $lastRow == null ){ 
										
										var cell0 = '<span></span>'+
										'<input type="hidden" name="txtFldCoverageMode" readonly="true" value="'+strMode+'" class="fipaModeDummy"/>'+
										'<input type="hidden" name="txtFldliCovId"><input type="hidden" name="txtFldliPlanPKId">';
										var cell1 = '<input type="text" name="txtFldliCoverPlanname"  class="form-control editable"  readonly="true"/>';
										var cell2 = '<input type="text" name="txtFldliCoverIncDate" class="form-control editable"  readonly="true"/>';
										var cell3 = '<input type="text" name="txtFldliCoverExpDate" class="form-control editable" readonly="true" />';
										var cell4 = '<input type="text" name="txtFldliBasicRiderRef" class="form-control editable" readonly="true" />';
										var cell5 = '<input type="text" name="txtFldliTypeOfCoverage" class="form-control editable" readonly="true" />';
										var cell6 = '<input type="text" name="txtFldliMultiBooster" class="form-control editable" readonly="true" />';
										var cell7 = '<input type="text" name="txtFldliMaaAmtAssured" class="form-control editable"   readonly="true"/>';
										var cell8 = '<input type="text" name="txtFldliMaaExpPeriod" class="form-control editable"   readonly="true"/>';
										var cell9 = '<input type="text" name="txtFldliNoofyears"  class="form-control editable"   readonly="true"/>';  
										var cell10 = '<input type="text" name="txtFldliDsbltyBenf"  class="form-control editable"   readonly="true"/>'; 
										var cell11 = '<input type="text" name="txtFldliYrsofdsbpay" class="form-control editable"  readonly="true" />'; 
										var cell12 = '<input type="text" name="txtFldliMaxPayoutAge"  class="form-control editable"   readonly="true"/>'; 
										var cell13 = '<input type="text" name="txtFldliTypesofHS" class="form-control editable"   readonly="true"/>'; 
										var cell14 = '<input type="text" name="txtFldliDeductible" class="form-control editable"  readonly="true" />'; 
										var cell15 = '<input type="text" name="txtFldliCoInsurance"  class="form-control editable"   readonly="true"/>'; 
										var cell16 = '<input type="text" name="txtFldliDescription"  class="form-control editable"   readonly="true"/>';  
										var cell17 ='<input type="text" name="txtFldliRemarks" class="form-control editable"  readonly="true"/>'+
										'<input type="hidden" name="txtFldliCovCrtdBy"/><input type="hidden" name="txtFldliCovCrtdDate"/>'; 
	
										planCoveragestbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17] ).draw( false );
										
										var rowCount = $('#planCoveragestbl tbody tr:visible').length;	
										rowCount =  (rowCount == 0) ? $('#planCoveragestbl tbody tr').length : rowCount;
										$lastRow = $("#planCoveragestbl tbody tr:last");
										
										$lastRow.find("td:first").find('span').text(rowCount);
										$lastRow.find("td:eq(0)").find('input:eq(0)').val("I");
										
									}
									
									    $lastRow.find("td:eq(0)").find('input:eq(1)').val(strCovPKID);
									    $lastRow.find("td:eq(0)").find('input:eq(2)').val($planPKId);
										$lastRow.find("td:eq(1)").find('input:eq(0)').val(strplanName); 
										$lastRow.find("td:eq(2)").find('input:eq(0)').val(strInception);  
										$lastRow.find("td:eq(3)").find('input:eq(0)').val(strExpiry);    
										$lastRow.find("td:eq(4)").find('input:eq(0)').val(strRef);  
										$lastRow.find("td:eq(5)").find('input:eq(0)').val(strTypeofCov);  
										$lastRow.find("td:eq(6)").find('input:eq(0)').val(strbooster); 
										$lastRow.find("td:eq(7)").find('input:eq(0)').val(strmaaAmtAsd); 
										$lastRow.find("td:eq(8)").find('input:eq(0)').val(strmaaExpPerd);
										$lastRow.find("td:eq(9)").find('input:eq(0)').val(strnoOfYrs); 
										$lastRow.find("td:eq(10)").find('input:eq(0)').val(strDsbltyBenf);  
										$lastRow.find("td:eq(11)").find('input:eq(0)').val(stryrsOfDsbltyPay);    
										$lastRow.find("td:eq(12)").find('input:eq(0)').val(strmaxPayoutAge);  
										$lastRow.find("td:eq(13)").find('input:eq(0)').val(strtypesOfHS); 
										$lastRow.find("td:eq(14)").find('input:eq(0)').val(strdeductible); 
										$lastRow.find("td:eq(15)").find('input:eq(0)').val(strcoInsurance);  
										$lastRow.find("td:eq(16)").find('input:eq(0)').val(strdescription);    
										$lastRow.find("td:eq(17)").find('input:eq(0)').val(strremarks);    
									
	
							
						}
							
						if(strTypeofCov != undefined && strTypeofCov != "undefined" &&  strTypeofCov == "Retirement_Planning" ){ 
							setMainEditRPPlanTbltoLifeRP();
//							alert($("#retCashvalonret").val())
							addCashValueToRet($("#retMultionret").val(),$("#retCashvalonret").val(),$("#lipRetRefId").val(),$("#covPayMtd").text(),$("#covPlanName").text(),$("#cashvalRetAge").val(),$("#retPrcnttoused").val(),$("#covRef").text());
							
							
//							$("#liRetirementPlgtbl tbody tr").each(function(){
								
//								find("tr:visible").find("td:eq(0)").find("input:eq(2)")
								
//								var refId=$(this).find("td:eq(0)").find("input:eq(2)").val();
								
//								$("#covPlanName").text();
							
							var multiDis = $("#retMultionret").val();
							
							if(multiDis != "Y"){
								
								$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
									
									var incassretrow = $(this).closest("tr");
									
									if(strRef == $(this).val()){ 
										
										incassretrow.hide();
										incassretrow.find("td:first").find('input:eq(0)').val(DEL_MODE);
										
									}
									
								});
								
							}
							
							if(multiDis != "N"){
								
								$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
									
									var incassretrow = $(this).closest("tr");
									
									if(planrefid == $(this).val()){ 
										
										incassretrow.hide();
										incassretrow.find("td:first").find('input:eq(0)').val(DEL_MODE);
										
									}
									
								});
								
							}
							
							if(multiDis == "Y"){
								
							}
								   
//								if(flg){
//									if($("#covPlanName").text() == planname){
//								 retrowId.find("td:first").find('input:eq(0)').val(DEL_MODE); 
//								 liRetirementPlgtbl.rows(retrowId).remove().draw();
////									$("#lipRetRefId").val("");
//									}
//								}
//							}); 
							
							
						}
					
					}
					
				}
			
				 
		});
	 }
	  
}

function chkValidateCoverages(){
		/*Validation */   
					if(!(validateFocusFlds('plancoveragetbl','mulBootDeath', COV_BOOSTR))) return;
					if(!(validateFocusFlds('plancoveragetbl','maaDeath', COV_MAA_AMTASS))) return;
					if(!(validateFocusFlds('plancoveragetbl','expDeath', COV_EXPPERD))) return;
					if(!(validateFocusFlds('plancoveragetbl','yrPayDeath', COV_NOOFYR))) return;

					if(!(validateFocusFlds('plancoveragetbl','disBenefit', COV_DISBENF))) return;
					if(!(validateFocusFlds('plancoveragetbl','disPayout', COV_DISPAYOUT))) return;
					if(!(validateFocusFlds('plancoveragetbl','maxPayout', COV_MAXPAYOUT))) return;
					
					if(!(validateFocusFlds('plancoveragetbl','mulTPD', COV_BOOSTR))) return;
					if(!(validateFocusFlds('plancoveragetbl','maaTPD', COV_MAA_AMTASS))) return;
					if(!(validateFocusFlds('plancoveragetbl','expTPD', COV_EXPPERD))) return;
					
					if(!(validateFocusFlds('plancoveragetbl','mulCriIllAdv', COV_BOOSTR))) return;
					if(!(validateFocusFlds('plancoveragetbl','maaCriIllAdv', COV_MAA_AMTASS))) return;
					if(!(validateFocusFlds('plancoveragetbl','expCriIllAdv', COV_EXPPERD))) return;
					
					if(!(validateFocusFlds('plancoveragetbl','mulCriIllErly', COV_BOOSTR))) return;
					if(!(validateFocusFlds('plancoveragetbl','maaCriIllErly', COV_MAA_AMTASS))) return;
					if(!(validateFocusFlds('plancoveragetbl','expCriIllErly', COV_EXPPERD))) return;
					
					if(!(validateFocusFlds('plancoveragetbl','mulPA', COV_BOOSTR))) return;
					if(!(validateFocusFlds('plancoveragetbl','maaPA', COV_MAA_AMTASS))) return;
					if(!(validateFocusFlds('plancoveragetbl','expPA', COV_EXPPERD))) return;
					if(!(validateFocusFlds('plancoveragetbl','yrPayPA', COV_NOOFYR))) return;
					
//					if(!(validateFocusFlds('plancoveragetbl','mulHSP', COV_BOOSTR))) return;
//					if(!(validateFocusFlds('plancoveragetbl','maaHSP',COV_MAA_AMTASS))) return;
//					if(!(validateFocusFlds('plancoveragetbl','expHSP', COV_EXPPERD))) return;
//					if(!(validateFocusFlds('plancoveragetbl','yrPayHSP', COV_NOOFYR))) return;
				  
					return true;
}
  
function getAllCoverage(dataset){
//populating
	var cell0 = '<span></span>'+
	'<input type="hidden" name="txtFldCoverageMode" readonly="true" value="'+UPD_MODE+'" class="fipaModeDummy"/>'+
	'<input type="hidden" name="txtFldliCovId"><input type="hidden" name="txtFldliPlanPKId">';
	var cell1 = '<input type="text" name="txtFldliCoverPlanname"  class="form-control editable"  readonly="true"/>';
	var cell2 = '<input type="text" name="txtFldliCoverIncDate" class="form-control editable"  readonly="true"/>';
	var cell3 = '<input type="text" name="txtFldliCoverExpDate" class="form-control editable" readonly="true" />';
	var cell4 = '<input type="text" name="txtFldliBasicRiderRef" class="form-control editable" readonly="true" />';
	var cell5 = '<input type="text" name="txtFldliTypeOfCoverage" class="form-control editable" readonly="true" />';
	var cell6 = '<input type="text" name="txtFldliMultiBooster" class="form-control editable" readonly="true" />';
	var cell7 = '<input type="text" name="txtFldliMaaAmtAssured" class="form-control editable"   readonly="true"/>';
	var cell8 = '<input type="text" name="txtFldliMaaExpPeriod" class="form-control editable"   readonly="true"/>';
	var cell9 = '<input type="text" name="txtFldliNoofyears"  class="form-control editable"   readonly="true"/>';  
	var cell10 = '<input type="text" name="txtFldliDsbltyBenf"  class="form-control editable"   readonly="true"/>'; 
	var cell11 = '<input type="text" name="txtFldliYrsofdsbpay" class="form-control editable"  readonly="true" />'; 
	var cell12 = '<input type="text" name="txtFldliMaxPayoutAge"  class="form-control editable"   readonly="true"/>'; 
	var cell13 = '<input type="text" name="txtFldliTypesofHS" class="form-control editable"   readonly="true"/>'; 
	var cell14 = '<input type="text" name="txtFldliDeductible" class="form-control editable"  readonly="true" />'; 
	var cell15 = '<input type="text" name="txtFldliCoInsurance"  class="form-control editable"   readonly="true"/>'; 
	var cell16 = '<input type="text" name="txtFldliDescription"  class="form-control editable"   readonly="true"/>';  
	var cell17 ='<input type="text" name="txtFldliRemarks" class="form-control editable"  readonly="true"/>'+
	'<input type="hidden" name="txtFldliCovCrtdBy"/><input type="hidden" name="txtFldliCovCrtdDate"/>'; 

	planCoveragestbl.row.add( [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17] ).draw( false );

	var rowCount = $('#planCoveragestbl tbody tr:visible').length;	
	rowCount =  (rowCount == 0) ? $('#planCoveragestbl tbody tr').length : rowCount;
	var  $lastRow = $("#planCoveragestbl tbody tr:last");
	 
		

	$lastRow.find("td:first").find('span').text(rowCount);

	if(dataset != null){
 
		var infoDetsArr = new Array();
		
		for(var data in dataset){
			var col = dataset[data];
			
			switch(data){
			
			case "coverId": 
				$lastRow.find("td:eq(0)").find('input:eq(1)').val(col); 
				break;
				

			case "coverLevelortype": 
				$lastRow.find("td:eq(0)").find('input:eq(2)').val(col); 
				break;
				
			case "coverPlanname": 
				$lastRow.find("td:eq(1)").find('input:eq(0)').val(col); 
				break;
				
			case "effDate": 
				$lastRow.find("td:eq(2)").find('input:eq(0)').val(col); 
				break;
			 
			case "expiryDate": 
				$lastRow.find("td:eq(3)").find('input:eq(0)').val(col); 
				break;
			 
			case "coverBasorrid": 
				$lastRow.find("td:eq(4)").find('input:eq(0)').val(col); 
				break;
				
			case "coverName": 
				$lastRow.find("td:eq(5)").find('input:eq(0)').val(col); 			
				break;
			
			case "multiBoost": 
				$lastRow.find("td:eq(6)").find('input:eq(0)').val(col); 
				break;
			
			case "maaAmtAssured": 
				$lastRow.find("td:eq(7)").find('input:eq(0)').val(col); 
				break;
				
			case "maaExPeriod":
				$lastRow.find("td:eq(8)").find('input:eq(0)').val(col); 
				break;
				
			case "payNoofyear":
				$lastRow.find("td:eq(9)").find('input:eq(0)').val(col); 
				break;
				
			case "benefAmount":
				$lastRow.find("td:eq(10)").find('input:eq(0)').val(col); 
				break;
					
			case "payYears":
				$lastRow.find("td:eq(11)").find('input:eq(0)').val(col); 
				break;
			
			
			case "maxPayoutAge": 
				$lastRow.find("td:eq(12)").find('input:eq(0)').val(col); 	
				break;
				
			case "typeOfHS": 
				$lastRow.find("td:eq(13)").find('input:eq(0)').val(col); 	
				break; 
				
			case "coverDeductable":
				$lastRow.find("td:eq(14)").find('input:eq(0)').val(col); 
				break;
				
			case "coInsurance":
				$lastRow.find("td:eq(15)").find('input:eq(0)').val(col); 
				break;
				
			case "descriptions":
				$lastRow.find("td:eq(16)").find('input:eq(0)').val(col); 
				break;
				
			case "coverRemarks":
				$lastRow.find("td:eq(17)").find('input:eq(0)').val(col); 
				break;
				
			case "coverCreatedBy":
				$lastRow.find("td:eq(17)").find('input:eq(0)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "coverCreatedDate":
				$lastRow.find("td:eq(17)").find('input:eq(0)').val(col);
				infoDetsArr.push(col);
				break;
				
			case "coverModifiedBy": 
				infoDetsArr.push(col);
				break;
				
			case "coverModifiedDate":
				infoDetsArr.push(col);
				break; 
			 
		}
		}
	}
}



function domToPopCoverage(planPKId){
 
	var RefId=$("#covRef").text();
	
	/*Populate Data */
	$("#planCoveragestbl tbody tr").each(function(){ 
		var strRefId	= $(this).find("td:eq(4)").find("input:eq(0)").val(); 
		if(strRefId == planPKId){
			var trind = $(this).index();
			var typeOfCoverage = $("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(5)").find("input").val();
			var reCov = typeOfCoverage.replace(new RegExp('_', 'g')," ").replace(new RegExp('-', 'g')," ");
			
			var covID = $("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(0)").find("input:eq(1)").val();
			
			if(isEmpty(covID)){
				$("#covMode").text("I");
			}else{
				$("#covMode").text("U");
			}
 
				if(reCov=="Death Benefit"){
					$("#hdeathbenfPK").val(covID);
					$('#mulBootDeath').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaDeath').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expDeath').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#yrPayDeath').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(9)").find("input").val());
					$('#remarks1').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				
				if(reCov=="Disability"){
					$("#hdisablebenfPK").val(covID);
					$('#disBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(10)").find("input").val());
					$('#disPayout').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(11)").find("input").val());
					$('#maxPayout').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(12)").find("input").val()); 
					$('#remarks2').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="TPD"){
					$("#hTPDbenfPK").val(covID);
					$('#mulTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#disTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(10)").find("input").val());
					$('#disPayoutTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(11)").find("input").val());
					$('#maxPayoutTPD').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(12)").find("input").val());
					$('#remarks3').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="CI Advanced"){
					$("#hciadvancedbenfPK").val(covID);
					$('#mulCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#disCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(10)").find("input").val());
					$('#disPayoutCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(11)").find("input").val());
					$('#maxPayoutCriIllAdv').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(12)").find("input").val());
					$('#remarks4').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="CI Early"){ 
					$("#hciearlybenfPK").val(covID);
					$('#mulCriIllErly').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaCriIllErly').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expCriIllErly').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#yrPayCriIllErly').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(9)").find("input").val());
					$('#remarks5').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="PA"){
					$("#hpabenfPK").val(covID);
					$('#mulPA').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaPA').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expPA').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#yrPayPA').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(9)").find("input").val());
					$('#remarks6').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				if(reCov=="Hospitalisation"){
					$("#hhospbenfPK").val(covID);
					$('#mulHSP').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(6)").find("input").val());
					$('#maaHSP').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(7)").find("input").val());
					$('#expHSP').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(8)").find("input").val());
					$('#yrPayHSP').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(9)").find("input").val());
					$('#typHSBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(13)").find("input").val());
					$('#dedHSBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(14)").find("input").val());
					$('#insHSBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(15)").find("input").val());
					$('#desHSBenefit').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(16)").find("input").val());
					$('#remarks7').val($("#planCoveragestbl tbody tr:eq("+trind+")").find("td:eq(17)").find("input").val());
				}
				
//				added
//				planCoveragestbl.row($(this)).remove().draw();
			}
				
		 
	}); 
			
		 
}

function onChangeCovTextMode(){
	if($("#covMode").text() == QRY_MODE){
		$("#covMode").text("U");	
	}
	 planAlertInfo(); 
}

function ForRetirementClone(){
	
		mandatoryFldForRetirement($(this),null,'LIFE'); 
		
//		var $planName = $("#cov0Plan").text();
//		var $typeofplan = $("#cov1Plan").text();
		  
		$("#visCover").css("display","none");
		$("#visCoverEdu").css("display","none");
		$("#visCoverRet").css("display","block");
		
		$("#covback00").removeClass("hidden"); 
		$("#covSave00").addClass("hidden");
		$("#covClose00").addClass("hidden"); 

		setvaluefromRetirementToCov();
		  		
		colorChangeRetEdu();
		
		setTimeout(function(){
			RetPlgcalculateRow();
		},100);
		
				$("#plancovRetMandatoryFlds").insertAfter( $( "#coverageCloneModel" ));
				$('#coveragesDialog').modal({
					  backdrop: 'static',
					  keyboard: false,
					  show:true,
					}); 
				$('#coveragesDialog').on('shown.bs.modal', function() {  
				
					$($.fn.dataTable.tables(true)).DataTable().columns.adjust(); 
					
					  $(this).find(".modal-title").html("Coverage Benefits - Retirement Planning");
					  $(this).find(".modal-header").find("button:eq(0)").unbind();
					 
//			 Back	  
					 $(this).find(".modal-header").find("button:eq(0)").click(function (){  
							  $(this).addClass("hidden");
	
								$("#covSave00").removeClass("hidden");
								$("#covClose00").removeClass("hidden");
								 
									$("#visCoverEdu").css("display","none");
									$("#visCoverRet").css("display","none");
									$("#visCover").css("display","block");
									colorChangeRetEdu();
								  
					});
					  
					  
//			  //Save
//			  $(this).find(".modal-header").find("button:eq(1)").click(function (){ 
//						  $( "#plancovRetMandatoryFlds" ).insertAfter($("#PLANCOVRET_APD"));
//						  $("#visCoverRet").css("display","none");
//						  $('#coveragesDialog').modal('hide');   
//				});
//					  
//					  
//				//Close	  
//				$(this).find(".modal-header").find("button:eq(2)").click(function (){ 
//						  $( "#plancovRetMandatoryFlds" ).insertAfter($("#PLANCOVRET_APD"));
//						  $("#visCoverRet").css("display","none");
//						  $('#coveragesDialog').modal('hide');   
//				});
				
		});     
	 
}//end of ForRetirementClone

function setvaluefromRetirementToCov(){

	$("#retSelfretage").val($("#retSelfCoordinateage").val()).prop("readonly",true);
	$("#retSpouseretage").val($("#retSpsCoordinateage").val()).prop("readonly",true);
	$("#lfretYrstoret").val($("#retYrstoret").val()).prop("readonly",true);
	$("#retIntrateused").val($("#caSavingDeprate").val()).prop("readonly",true);
	RetPlgcalculateRow(); 
	
}
function ForEducationClone(){
	
//	  var $planName = $("#cov0Plan").text();
//	  var $typeofplan = $("#cov1Plan").text();
	
	  $("#covback00").removeClass("hidden");
	  $("#covSave00").addClass("hidden");
	  $("#covClose00").addClass("hidden");
	  
	  	$("#visCover").css("display","none");
	  	$("#visCoverEdu").css("display","block");
		$("#visCoverRet").css("display","none");
		
		 colorChangeRetEdu(); 
		 
		 setTimeout(function(){
		 totalPvRetEdPlgTerEdAge();
		 arrangePayouts();
		 },100);
		 
				$("#plancovEduMandatoryFlds").insertAfter( $( "#coverageCloneModel" ));
				$('#coveragesDialog').modal({
					  backdrop: 'static',
					  keyboard: false,
					  show:true,
					}); 
				$('#coveragesDialog').on('shown.bs.modal', function() { 
					$($.fn.dataTable.tables(true)).DataTable().columns.adjust(); 
					  $(this).find(".modal-title").html("Coverage Benefits - Education Planning");
					  $(this).find(".modal-header").find("button:eq(0)").unbind();
					 
					  //Back
			$(this).find(".modal-header").find("button:eq(0)").click(function (){ 

						  $(this).addClass("hidden");

							$("#covSave00").removeClass("hidden");
							$("#covClose00").removeClass("hidden");
							 
							
							$("#visCoverEdu").css("display","none");
							$("#visCoverRet").css("display","none");
							$("#visCover").css("display","block"); 
							colorChangeRetEdu();
				});
					  
//			  //Save
//			$(this).find(".modal-header").find("button:eq(1)").click(function (){ 
//							  $( "#plancovEduMandatoryFlds" ).insertAfter($("#PLANCOVEDU_APD"));
//							  $("#visCoverEdu").css("display","none");
//							  $('#coveragesDialog').modal('hide');   
//					});
//						
//			  //Close
//				$(this).find(".modal-header").find("button:eq(2)").click(function (){ 
//						  $( "#plancovEduMandatoryFlds" ).insertAfter($("#PLANCOVEDU_APD"));
//						  $("#visCoverEdu").css("display","none");
//						  $('#coveragesDialog').modal('hide');   
//				});
				
		});     
	  
}//end of ForEducationClone

function arrangePayouts(){

	var oldref="",R1;  
	$("#liEducationtbl tbody").find("tr:visible").each(function(c,r){
		var refId=$(this).find("td:first").find("input:eq(2)").val(); 
	if($(this).find("td:eq(2) select:eq(0)").css("display") != "none"){		 
	R1 = $(this);
	}
		if(!isEmpty(refId) && refId == oldref){   
			if($(this).find("td:eq(2) select:eq(0)").css("display") == "none"){
				var R2 = $(this);  
				$(this).find("td").each(function(i){
				
					 if(i == 0){
							var spanHTML = R2.find("td:eq(0)").html();
							 spanHTML = spanHTML
						       .replace(/<span style="display: none;">/g, '<i>')
						       .replace(/<\/span>/g, '</i>');
							 R2.find("td:eq(0)").html(spanHTML); 
							 R2.find("td:eq(0)").find("i").text(""); 
						 R1.find("td:eq(0)").find("input[type=text]:last,input[type=hidden]:last,select:last").after(R2.find("td:eq(0)").html());
							
					 }
					if(i != 11 && i != 0){ 
						R1.find("td:eq("+i+")").find("input[type=text]:last,input[type=hidden]:last,select:last").after(R2.find("td:eq("+i+")").html());
					}
				});
				R1.find("td:eq(11) div[class=divdatatemp]:last").after("<div class='divdatatemp'>"+R2.find("td:eq(11) div[class=divdatatemp]").html()+"</div>");
				$(this).hide();
			} 
		}
		oldref=refId;  
	});

}
function multibenefits(elm){
	var SelCoverageTypes = [];  
    var NtSelCoverageTypes = [];  
    var DeSelCoverageTypes = []; 
    var SelCovValOfIns=[]; 
     
    
    var elmid =$(elm).attr("id");
    var hid=$(elm).closest("div").find("input[type=hidden]");
   var checked=$(elm).find("option:selected").is(":checked");
   
   $('#divmulTPD,#divmaaTPD,#divexpTPD,#divdisTPD,#divdisPayoutTPD,#divmaxPayoutTPD').hide();
	$('#divmulBootDeath,#divmaaDeath,#divexpDeath,#divyrPayDeath').hide();
	$('#divdisBenefit,#divdisPayout,#divmaxPayout').hide();
	$('#divmulCriIllErly,#divmaaCriIllErly,#divexpCriIllErly,#divyrPayCriIllErly').hide();
	$('#divmulCriIllAdv,#divmaaCriIllAdv,#divexpCriIllAdv,#divdisCriIllAdv,#divdisPayoutCriIllAdv,#divmaxPayoutCriIllAdv').hide();
	$('#divdesHSBenefit,#divinsHSBenefit,#divdedHSBenefit,#divtypHSBenefit,#divyrPayHSP,#divexpHSP,#divmaaHSP,#divmulHSP').hide();
	$('#divmulPA,#divmaaPA,#divexpPA,#divyrPayPA').hide();
	$('#divremarks1,#divremarks2,#divremarks3,#divremarks4,#divremarks5,#divremarks6,#divremarks7').hide();
	$('#btnForRetirementClone').hide();
	$('#btnForEducationClone').hide();

	var tdindex = $(elm).closest("td").index();
	var planPKId = $(elm).closest("tr").parents().find("tr:eq(0)").find("td:eq("+tdindex+")").find("div.hiddens").find("input:eq(13)").val();
	
	
	$(elm).find('option').each(function() {
		
		var val = $(this).val();
		var txt = $(this).text();
		var casetxt = "";
		
		if(txt != undefined && txt != "undefined" && 
				txt != "Retirement" && txt  != "Education"){
			
			switch(val){
			case "TPD":casetxt = "TPD";break;
			case "DB":casetxt = "Death_Benefit";break;
			case "DIS":casetxt = "Disability";break;
			case "CIE":casetxt = "CI-Early";break;
			case "CIA":casetxt = "CI-Advanced";break;
			case "HP":casetxt = "Hospitalisation";break;
			case "PA":casetxt = "PA";break;
			}
			console.log(planPKId + "<"+casetxt)
			var $lastRow = chkCoverageExists(casetxt,planPKId);
			
			if($lastRow != null){
				
				if($(this).is(":selected")){
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(UPD_MODE);
				}else{
					$lastRow.find("td:eq(0)").find('input:eq(0)').val(DEL_MODE);
				}
			}
		}
    }); 
	
	
if (checked == false) {  
  $(elm).find('option:selected').each(function() { 	
			 NtSelCoverageTypes.push($(this).val());    
          $.each( NtSelCoverageTypes, function( index, value ) { 
//        	  MultiSelectOption("mulSelButton","hmulSelButton","REMOVE",NtSelCoverageTypes); 
        	  MultiselectCoverage($(this),hid,"REMOVE",NtSelCoverageTypes);
        	 }); 
          
          
         }); 
	 }
    
    
    
    if(checked == true){
    	$(elm).find(' option:selected').each(function() { 	
    	SelCoverageTypes.push($(this).val());    
     $.each( SelCoverageTypes, function( index, value ) {  
    	 MultiselectCoverage($(this),hid,"SELECT",SelCoverageTypes);
    	 typeOfCoveragePro(value,"block");/* commented custom*/
    	 
   	 }); 
     
    }); 
    }else{  
    	$(elm).find('option:not(:selected)').each(function() { 	
    		DeSelCoverageTypes.push($(this).val());   
            $.each( DeSelCoverageTypes, function( index, value ) {   
       	 	typeOfCoveragePro(value,"none");/* commented* checked and then unchecked*/
       	    MultiselectCoverage($(this),hid,"NONE",DeSelCoverageTypes); 
            }); 
           
    	});
    }
    
    
    $(elm).find(' option:selected').each(function() {     
    	SelCovValOfIns.push($(this).val());  
    }); 
    
    
    if($.inArray("RP",SelCovValOfIns) != -1){ 
    	$(elm).multiselect('deselect','RP');      
//      	 mandatoryFldForRetirement($(this),null,'LIFE'); 
      	$(elm).multiselect('select','RP'); 
 	    loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));

      }
 

} 
 
 
 function MultiselectCoverage(elmId,hid,options,arrayList){
	  
			if(options=="ALL"){ 
				hid.val("RP,EP,TPD,DB,DIS,CIE,CIA,HP,PA"); 
			}else if(options=="NONE"){
				hid.val(""); 
			}else if(options=="SELECT"){  
				hid.val(arrayList);
			}else if(options=="REMOVE"){ 
				hid.val(arrayList);
			}
	 
 }

 function genMultseltBR(elmtId){

	 	console.log("multiselect.elmtId------->"+elmtId);
	 	
	 	$('#'+elmtId).multiselect('destroy');
	 
		$('#'+elmtId).multiselect({ 
			 	includeSelectAllOption: true, 
		        buttonWidth: '120px',  
		        maxHeight: "100%",
		        
		        onSelectAll: function() {
		        	var SelCovValOfIns = [];
		        	var elmid =$(this).attr("id");
		        	var hid=$(this).closest("div").find("input"); 
		        	MultiselectCoverage(elmid,hid,"ALL",null);
		        	typeOfCoveragePro("All","block");/*commented Enable all*/ 
		        	 $("#"+elmid+'option:selected').each(function() { 
		        		 SelCovValOfIns.push($(this).val());  
		        	 });
		        	 if($.inArray("RP",SelCovValOfIns) != -1){
			            	
		            	 $('#'+elmtId).multiselect('deselect','RP');    
//		            	 	mandatoryFldForRetirement($(this),null,'LIFE'); 
					  	  	$('#'+elmtId).multiselect('select','RP');  
					  	  loadAgeStartEnd($("#txtFldDlgRetPlgCommOfAge"),$("#retAgeBasedon"));
		        	 }	
		        	
		        },
		        onDeselectAll: function() {
		        	 var SelCovValOfIns=[];
		        		var elmid =$(this).attr("id");
			        	var hid=$(this).closest("div").find("input"); 
		        	MultiselectCoverage($(this),"NONE",null);
		        	typeOfCoveragePro("All","none");/*commented disable all*/
		        	
		        	$("#"+elmid+' option:selected').each(function() {     
		        		 SelCovValOfIns.push($(this).val());  
		                });  
	           },
		        onChange: function(option, checked, select) { 
		        	console.log($('#'+elmtId) + "," + elmtId)
		                console.log(option.val()+"---------------------------->>>>>>>>>>>>>>>>"+option.text()+",checked:"+checked+",select:"+select);
		                var tdindex = $('#'+elmtId).parents("td").index();
		                console.log(tdindex);
		                var planCoverage = $("#cvplnleftpaneltbl tbody tr:eq(2) td:eq("+tdindex+")").find("select");
		                multibenefits(planCoverage)
//		                var pkid = $(elmtId).closest("tbody").find("tr:eq(0)").find("td:eq("+tdindex+")").find("div.hiddens").find("input:eq(13)").val();
//		                console.log(pkid);
		                
		                
		                
		        } 
		        
		    });
		
//		$('#'+elmtId).multiselect('destroy');
//	 	$('#'+elmtId).multiselect('rebuild');
//	 	$('#'+elmtId).multiselect('refresh');
		
		
 }
 
 
 /*BASIC AND RIDER PLANS*/
 function getliBasRidDetRows(dataset,tab){
	 
	if(dataset != null){
		
		var prodType = dataset["strFPMSPolPrdtType"];
		var application = dataset["strFPMSPolApplnName"];
		var prodTypeFipa = dataset["basorrid"];
		var prodTypeCount = dataset["planReferenceId"];
		
		if(!isEmpty(prodTypeFipa) && prodTypeFipa == "Basic")prodType="B";
		if(!isEmpty(prodTypeFipa) && prodTypeFipa == "Rider")prodType="R";
		
		console.log("prodType-----------> "+prodType +",prodTypeCount---->"+prodTypeCount);
		
		
		var currbasic_count = 1;
		if(!isEmpty(prodTypeCount)) currbasic_count=prodTypeCount.substr(1);
		
		
		console.log("prodType-----------> "+prodType +",prodTypeCount---->"+prodTypeCount +",currbasic_count------------>"+currbasic_count);
		
		if(prodType == "B"){			
			
			if(currbasic_count == 1){
				displayValue(dataset, null, 0);
				if(application == "FPMSNL"){
					getBasicfn(false,null);
				}					
			}else{
				getBasicfn(true,dataset);
//				displayValue(dataset, null, total_td-1);
			}
			
		}else if (prodType == "R"){
			
//			var basicTds = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td.basicplantd").length;
			var basicTdIndex = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td.basicplantd:last").index();
			
			console.log("basicTdIndex------------->"+basicTdIndex)
			
			var curElm = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+(basicTdIndex)+")").find("a.genAddRProicon");//.basicplantd
			genRiderfn(curElm,true,dataset);
			
			if(application == "FPMSNL"){
				genRiderfn(curElm, false, null);
			}
//			displayValue(dataset, null, total_td-1);
		}
		
		
//		for(var data in dataset){
//			var col = dataset[data];  
////				console.log("plan data----->"+data + "col--->"+col)
////				    if(data == "planReferenceId"){ 
////				    	var chk  = col.substring(0,2); 
////				    	var len =  col.length; 
////				    	if(col != "B1"){
////				    	if(len == 2){
////				    		$("#genBasicicon").click();
////				    		displayValue(dataset,tab,Number($("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td").length)-1);
////				    	}else if(len == 4){ 
////				    		$("[value="+chk+"]").closest("div").closest("td").find("a:eq(0)").click();
////				    		console.log($("[value="+chk+"]").closest("div").closest("td").index());
////				    		displayValue(dataset,tab,Number($("[value="+chk+"]").closest("div").closest("td").index())+1);
////				    	}
////				    	}else if(col == "B1"){
////				    		displayValue(dataset,tab,0);
////				    	}
//				    	
////				    } 
//				
//				
//				
//				var total_td = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td").length-1;
//				if(data == "strFPMSPolPrdtType"){
//					
//				
//					
//				}
//			} 
	}  
}
 
	function displayValue(dataset,tab,index){
//		console.log(index);
		console.log("inside displayvalue")
		var $tbody=$("#cvplnleftpaneltbl tbody");
		
		var $len = "";
		var fpmsplan = false;
		
		var infoDetsArr = new Array();
		
		for(var data in dataset){
			var col = dataset[data];
			if(data == "strFPMSPolApplnName" && col == "FPMSNL"){
				fpmsplan = true;
			}
		
		
		
		switch(data){ 
		
		
			case "planReferenceId": 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(0)').val(col);		
				break;
				
			case "strFPMSPolPrdtType":			
				var total_rider = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("input[name=txtFldTotalRiders]").val();
				total_rider = (isEmpty(total_rider) || total_rider == 0) ? 1 : ( total_rider ); 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(0)').val(col+total_rider); 
				break;
				
			case "planCrtdBy": 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(1)').val(col);
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(12)').val(UPD_MODE);
				infoDetsArr.push(col);				
				break;
				
			case "planCrtdDate":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(2)').val(col);
				infoDetsArr.push(col);
				break;
	
			case "plnlfretYrstoret":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(3)').val(col); 
				break;
				
			case "plnretSelfretage":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(4)').val(col); 
				break;
				
			case "plnretSpouseretage":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(5)').val(col); 
				break;
			case "plnretMultionret":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(6)').val(col); 
				break;
				
			case "plnretCashvalonret":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(7)').val(col); 
				break;
				
			case "plnretIntrateused":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(8)').val(col); 
				break;
				
			case "plnretPrcnttoused":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(9)').val(col); 
				break;
				
			case "plncashvalRetAge":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(10)').val(col);
				 break; 
				 
			case "cashValRefId":  
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(11)').val(col); 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(18)').val(col); 
				break;
				
			case "riderId": 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(13)').val(col); 					
				break;
			
			case "benfRaidRefId": 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").find('input:eq(14)').val(col); 
				break;
				
			case"fnaSelfspouseDets":			
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(15)').val(col);
				break;
				
			case"fnaLifeinsuranceDets":
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(16)').val(col);
				break;
			
			case "basorrid"://Type of plan 
				$tbody.find("tr:eq(0)").find("td:eq("+index+")").find("div.hiddens").next("div").find('input:eq(0)').val(col); 
				break;
				
			case "planName"://Plan name 
			case "strFPMSPolPlanName": 
				$tbody.find("tr:eq(1)").find("td:eq("+index+")").find('input:eq(0)').val(col); 
				break;
				
			case "coverageTypes":  //Types of benefits
				var arrLipCovType=col.split(','); 
				$tbody.find("tr:eq(2)").find("td:eq("+index+")").find('select:eq(0)').multiselect('select',arrLipCovType);  
				$tbody.find("tr:eq(2)").find("td:eq("+index+")").find('input[name=hselCoverages]').val(col);  
				break;
				
			case "sumAssured"://Sum Assured 
			case "strFPMSPolSA":
				$tbody.find("tr:eq(3)").find("td:eq("+index+")").find('input:eq(0)').val(col); 
				break;
				
			case "premAmount"://Premium
			case "strFPMSPolPremium":
				$tbody.find("tr:eq(4)").find("td:eq("+index+")").find('input:eq(0)').val(col); 
				break; 
				
			case "planIncepDate"://Inception Date
			case "strFPMSPolEffDate": 
				$tbody.find("tr:eq(5)").find("td:eq("+index+")").find('input:eq(0)').val(col);  
				break;
				
			case "premTerm": //Premium Term
			case "strFPMSPolPremTerm": 
				$tbody.find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').val(col); 
				if(col != "WHOLE LIFE"){
					$tbody.find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(0)').prop("checked",true);
				}
				
				toggleTermPlanSwitch($tbody.find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)'),$tbody.find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(0)'));
				
				
				
				break;
				
			case "planExpDate"://Policy Expiry Date
				$tbody.find("tr:eq(7)").find("td:eq("+index+")").find('input:eq(0)').val(col);				
				break;
			
				
		//		case "planPremTrDate":  //Premium Term Date
//			$tbody.find("tr:eq(7)").find("td:eq("+index+")").find('input:eq(0)').val(col); 
//			break; 
			case "paymentMode": //Payment mode
			case "strFPMSPolPaymentMode":
				var mode;
				if(col == "SEMI-ANNUAL" || col=="HALF-YEARLY"){
					mode="HALF YEARLY";
				}else if (col == "ANNUALLY" || col == "ANNUALY"){
					mode = "ANNUALLY";
				}else{
					mode=col;
				} 
				selectNullvalChk($tbody.find("tr:eq(8)").find("td:eq("+index+")"),mode);   
				break;
			
			case "paymentMethod": //Payment Method
			case "strFPMSPolPaymentMeth":
				selectNullvalChk($tbody.find("tr:eq(9)").find("td:eq("+index+")"),col); 
				break;
	case "insurCashval"://Insurance Cash Value
			$tbody.find("tr:eq(10)").find("td:eq("+index+")").find('input:eq(0)').val(col);  
			break;
			
			
		case "lifeInsLoans"://Life Insurance Loans
			$tbody.find("tr:eq(11)").find("td:eq("+index+")").find('input:eq(0)').val(col);  
			break;
			
				 
			case "planRemarks": //Remarks
			case "strFPMSPolRemarks":
				$tbody.find("tr:eq(12)").find("td:eq("+index+")").find('textarea:eq(0)').val(col);
				
//				both FIPA & FPMS having remarks column and it is the last indexing, so placed here.
				if(isEmpty($tbody.find("tr:eq(7)").find("td:eq("+index+")").find('input:eq(0)').val())){
					changeNRExpDate($tbody.find("tr:eq(7)").find("td:eq("+index+")").find('input:eq(0)'));
				}
				
				break;
				
	 
		}
	} 
		$("[name=txtFldTfplan]").prop("readonly",true);
		ilifeInsPremium('FETCH'); 
}
	
	
 
function onchangePlanMode(elm){
	var index=$(elm).closest("td").index();
	var mode = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(12)').val();
	if(mode == QRY_MODE){
		$("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+index+")").find('input:eq(12)').val(UPD_MODE);
	}
}

function clearPlanTab(defaultrow){
	$("#cvplnleftpaneltbl tbody tr td").each(function(){
		var index  =  $(this).index();
		      if(defaultrow){
		    	  if(index!=0){
		    		  $(this).closest("tr").find("td:eq("+index+")").remove();  
		    	  }		    	  
		      }else{
		    	  $(this).closest("tr").find("td:eq("+index+")").remove();
		      }
		      
		      
		$(this).closest("tr").find("td:eq(0)").find("input,select,textarea").val("");
		
		});
	
//	resetMultiSel("selCoveragesB00");
//	resetMultiSel("selCoveragesR00Hidden");
	genMultseltBR("selCoveragesB00");
	$("#txtFldTfplanB00").val("Basic").prop("readOnly",true);
	$("#txtFldplanTefIdB01").val("B1");
	$("#txtFldplnDetModeB01").val("I");
	$("#newlifeprinname").text("");
	$("#newlifepolicyno").text("");
	
//	var BASIC_REF = "B1";
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(0)").val(BASIC_REF);
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(12)").val("I");
//	  
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(13)").val(makeid(17));
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq(0)").find("div.hiddens").find("input:eq(14)").val(newMakeId("LIP", 12));
//	  
//	  $("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq(0)").find("input:eq(0)").prop("checked",true);
	
	getBasicfn(false,null);
}
	




function onchangeExpDate(elm){
	var index=$(elm).closest("td").index();
		var InpDate= $("#cvplnleftpaneltbl tbody").find("tr:eq(3)").find("td:eq("+index+")").find('input').attr("id");
	var ExpDate= $("#cvplnleftpaneltbl tbody").find("tr:eq(4)").find("td:eq("+index+")").find('input').attr("id");
		
		if(!chkFromToDateValidation(InpDate,ExpDate,'Expiry Date should be greater than the Inception Date'));
	/*	if(!dhtmlChkDateValidation('InpDate','ExpDate','Expiry Date should be greater than the Inception Date'));*/
		
}


/*Aravindh*/
function onchangePremTerm(elm){
	  
	var index=$(elm).closest("td").index();
	var uniqueId = $("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(0)').attr("id");

	if ($('#'+uniqueId).is(':checked')) {
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').val("");
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').prop("readonly", false);
		
    }
	
	else{
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').val("WHOLE LIFE");
		$("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').prop("readonly", true);
	}
}


//function onchangePremTermDate(elm){
//	var index=$(elm).closest("td").index();
//	var uniqueIdPremTr = $("#cvplnleftpaneltbl tbody").find("tr:eq(6)").find("td:eq("+index+")").find('input:eq(1)').attr("id");
//	var uniqueIdIncDate = $("#cvplnleftpaneltbl tbody").find("tr:eq(3)").find("td:eq("+index+")").find('input').attr("id");
//	var uniqueIdExpDate = $("#cvplnleftpaneltbl tbody").find("tr:eq(4)").find("td:eq("+index+")").find('input').attr("id");
//	
//	if(!calculateEndDateFromYear($("#"+uniqueIdPremTr),$("#"+uniqueIdIncDate),$("#"+uniqueIdExpDate)));
//	
//	
//}


function calculateEndDateFromYear(term,IncDate,eodDate){
	
	 var endDate=""; 
	 var termval = term.val();
	 var IncDateval = IncDate.val();
	if(!isEmpty(termval) && !isEmpty(IncDateval)){
		 if(term.val()!="WHOLE LIFE"){
			 endDate=addyearsToDate(IncDate.val(),term.val());
			 eodDate.val(endDate);
		 }else{
			 eodDate.val("");
		 } 
	 }else{
		 eodDate.val("");
	 }
} 

function toggleTermPlanSwitch(elmId,switchId){

  var PremTerm=elmId.val();
  
  if(!isEmpty(PremTerm)){
	if (PremTerm.toUpperCase() == "WHOLE LIFE")
	{
		switchId.prop("checked", false);
		elmId.prop("readonly", true).val("WHOLE LIFE"); 
		
	}
	else{
		switchId.prop("checked", true); 
//		elmId.prop("readonly", false).val(""); 
	}
  }
}

/*Synchronization part*/

/*CPF SYNC*/
function newlifesyncCPF(curElm){
	var tdpos=Number($(curElm).closest("td").index());  
	NRLfInsCpfTbl(tdpos);  //Sync to CPF,CPFOA,CPFSA
} 

//Sync to CPF,CPFOA,CPFSA
function NRLfInsCpfTbl(tdpos){ 
	
	var $planRow = $("#cvplnleftpaneltbl tbody");
	 
	var planrefid = $planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(18)").val();//Reference id
	var $rowref = planrefid; 
	 
	 
	var ownership=$("#lipOwner").val(); //Ownership
	var policyNo = $("#lipPolicyno").val();
	var selfAge = $("#dfSelfAge").val();


	var planname	=$planRow.find("tr:eq(1)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Plan Name
  	var amount		= $planRow.find("tr:eq(4)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Premium amount
  	amount = isEmpty(amount) ? Number(0) : Number(amount);
  	
  	var paymode		=$planRow.find("tr:eq(8)").find("td:eq("+tdpos+")").find('select:eq(0)').val();//mode
	var paymentmtd	=$planRow.find("tr:eq(9)").find("td:eq("+tdpos+")").find('select:eq(0)').val();//payment mtd(CPF/CPFOA,CPFSA)
	var periodFrm	=$planRow.find("tr:eq(5)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Inception date
	var periodTo	=$planRow.find("tr:eq(7)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Expiry date
	var premTerm	=$planRow.find("tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(1)").val(); //Premium Term
//	var basiccount		=$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(0)").val();//Reference id
	
	var dateTopay ="",stillNeedTopay=false;
	 if(!isEmpty(premTerm) && !isEmpty(periodFrm)){
		 if(premTerm.toUpperCase() != "WHOLE LIFE"){
			  dateTopay			= addyearsToDate(periodFrm,premTerm);	
			  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
		 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
			 stillNeedTopay		= true;
		 }
	 }
			
	 
	 if(!isEmpty(paymentmtd) && stillNeedTopay && paymode != "SINGLE"){ 
			if(ownership != "Joint" && ownership != "Parents"){
		
		if(paymentmtd  == "CPFOA" ||   paymentmtd  == "CPFSA" ||  paymentmtd  == "CPF" ){
			
			var rowexistsrsdel = chkNLifeSRSExist($rowref);
			 if(rowexistsrsdel){
				 
				 var mode = rowexistsrsdel.find("td:first").find('input:eq(0)').val();

					if(mode == INS_MODE){ 
						rowexistsrsdel.hide();
						rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
					}else if (mode == QRY_MODE || mode == UPD_MODE){
						rowexistsrsdel.hide();
						rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
					} 

					reOrderVisibleRows("srsTable");
			 }
				
			var rowexist = chkNLifeRowCPFExist($rowref);
	
			var $tblCpfRow = null; 
			if(rowexist == null){
				getCADRows(null);
				$tblCpfRow =  $("#cpfAccAddDedTable tbody tr:last"); 
			}else{
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				$tblCpfRow = rowexist;
			}
			
			
	

//			$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(14)").val($rowref);
			$tblCpfRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
			var pkid = $planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find('input:eq(13)').val();
			
			if(pkid.indexOf("AS_") == 0){
				if(isEmpty($tblCpfRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblCpfRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
			}
	
 
			
			var cpfedacc,ccedid;
			 
			 if(paymentmtd == "CPFOA" ){cpfedacc="Ordinary";ccedid="CPFACC000001";}//|| paymentmtd == "CPF"|| paymentmtd == "SRS"
			 else if(paymentmtd == "CPFSA"){cpfedacc="Special";ccedid="CPFACC000002";}
			 else if(paymentmtd == "CPFMA"){cpfedacc="Medisave";ccedid="CPFACC000003";}
			 else if(paymentmtd == "CPFRA"){cpfedacc="Retirement";ccedid="CPFACC000004";}
			 else {cpfedacc="";ccedid="";}
		 
			 var frequency="";
			 if(paymode == "ANNUALLY"){frequency="1";}
			 else if(paymode == "HALF YEARLY"){frequency="2";}
			 else if(paymode == "QUARTERLY"){frequency="4";}
			 else if(paymode == "MONTHLY"){frequency="12";}
			 else if(paymode == "SINGLE"){frequency="1";}  
		 
		  
		 
		 
			 if(ownership == "Self"){
				 $tblCpfRow.find("td:eq(2)").find('option:eq(1)').prop("selected","selected");
			 }else  if(ownership == "Spouse"){
				 $tblCpfRow.find("td:eq(2)").find('option:eq(2)').prop("selected","selected");
			 }else{
				 $tblCpfRow.find("td:eq(2)").find('option:eq(0)').prop("selected","selected");
			 } 
			 
			  
			 selectNullvalChk($tblCpfRow.find("td:eq(3)"),ownership);   
		 
		    
			 selectNullvalChk($tblCpfRow.find("td:eq(4)"),"Life Insurance");  
			 $tblCpfRow.find("td:eq(4)").find('input:eq(0)').val(planname);  
			 $tblCpfRow.find("td:eq(4)").find('input:eq(1)').val(policyNo);  
			 $tblCpfRow.find("td:eq(4)").find('div[id="spanplanname"]').text(isEmpty(planname) ? "": "Plan Name : "+planname);  
			 $tblCpfRow.find("td:eq(4)").find('div[id="spanpolno"]').text(isEmpty(policyNo) ? "": "Policy No : "+policyNo);  

		  
			 selectNullvalChk($tblCpfRow.find("td:eq(5)"),"Deduction"); 
	
			 $tblCpfRow.find("td:eq(6)").find('input:eq(0)').val(ccedid);  
			 selectNullvalChk($tblCpfRow.find("td:eq(6)"),ccedid); 
			 
			 $tblCpfRow.find("td:eq(7)").find('input:eq(0)').val(periodFrm);
			 $tblCpfRow.find("td:eq(7)").find('input:eq(1)').val(selfAge);
			 
			 var toage = getYears(periodFrm, dateTopay);
			 $tblCpfRow.find("td:eq(8)").find('input:eq(0)').val(dateTopay);
			 $tblCpfRow.find("td:eq(8)").find('input:eq(1)').val( Number(selfAge) + Number(toage) );
		 
			 $tblCpfRow.find("td:eq(9)").find('input:eq(0)').val(remPriceAfDec(amount*frequency)); 
			 
			 frequency ="1";//Always CPF Set to Annual because the amount is converted to Annual.
			 selectNullvalChk($tblCpfRow.find("td:eq(10)"),frequency); 
			  
	
			 applyEventHandlers();
			 applyToastrAlert("Life Insurance data will be reflected to CPF Account - Additions & Deductions of funds into CPF A/C in Central Provident Fund Screen");
			 mandatoryFldForCpf($tblCpfRow,null,'LIFE');
		  

			  
		}	 
		  
	}  
 } 
	 
	return true;
}

function chkNLifeRowCPFExist(rowRefID){
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

/*SRS SYNC*/
//*Life Insurance > Central provident fund when payment mode is SRS-Basic Plan*//
 
function newlifesyncSRS(curElm){
	var tdpos=Number($(curElm).closest("td").index());  
	NRLfInsSRSTbl(tdpos);  //Sync to CPF,CPFOA,CPFSA
} 

function NRLfInsSRSTbl(tdpos){ 
	
	var $planRow = $("#cvplnleftpaneltbl tbody");
	 
	var planrefid		=$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(18)").val();//Reference id
	var $rowref= planrefid;//"SRS"+tdpos; 
	 
	 
	var ownership=$("#lipOwner").val(); //Ownership
	var policyNo = $("#lipPolicyno").val();
	
	var planname	=$planRow.find("tr:eq(1)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Plan Name
  	var amount		= $planRow.find("tr:eq(4)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Premium amount
  	amount = isEmpty(amount) ? Number(0) : Number(amount);
  	
  	var paymode		=$planRow.find("tr:eq(8)").find("td:eq("+tdpos+")").find('select:eq(0)').val();//mode
	var paymentmtd	=$planRow.find("tr:eq(9)").find("td:eq("+tdpos+")").find('select:eq(0)').val();//payment mtd(CPF/CPFOA,CPFSA)
	var periodFrm	=$planRow.find("tr:eq(5)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Inception date
	var periodTo	=$planRow.find("tr:eq(7)").find("td:eq("+tdpos+")").find('input:eq(0)').val();//Expiry date
	var premTerm	=$planRow.find("tr:eq(6)").find("td:eq("+tdpos+")").find("input:eq(1)").val(); //Premium Term
//	var basiccount		=$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(0)").val();//Reference id
	
	 var frequency="";
	 if(paymode == "ANNUALLY"){frequency="1";}
	 else if(paymode == "HALF YEARLY"){frequency="2";}
	 else if(paymode == "QUARTERLY"){frequency="4";}
	 else if(paymode == "MONTHLY"){frequency="12";}
	 else if(paymode == "SINGLE"){frequency="1";}  
 

	var dateTopay ="",stillNeedTopay=false;
	 if(!isEmpty(premTerm) && !isEmpty(periodFrm)){
		 if(premTerm.toUpperCase() != "WHOLE LIFE"){
			  dateTopay			= addyearsToDate(periodFrm,premTerm);	
			  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
		 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
			 stillNeedTopay		= true;
		 }
	 }
	 
	 
	 if(!isEmpty(paymentmtd) && stillNeedTopay && paymode != "SINGLE"){ 
			if(ownership != "Joint" && ownership != "Parents"){
		
		if(paymentmtd == "SRS"){
			
			 var rowexistcpfdel = chkNLifeRowCPFExist($rowref);
			 
			 if(rowexistcpfdel){
				 
				 var mode = rowexistcpfdel.find("td:first").find('input:eq(0)').val();

					if(mode == INS_MODE){ 
						rowexistcpfdel.hide();
						rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
					}else if (mode == QRY_MODE || mode == UPD_MODE){
						rowexistcpfdel.hide();
						rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
					} 

					reOrderVisibleRows("cpfAccAddDedTable");
			 }
			
			var rowexist = chkNLifeSRSExist($rowref);
			
			var $tblSRSRow = null; 
			if(rowexist == null){
				getcshSRSRows(null);
				$tblSRSRow =  $("#srsTable tbody tr:last"); 
			}else{
				
				if(rowexist.css('display') == 'none'){
					rowexist.css("display","");
				}
				if(rowexist.find("td:first").find("input:first").val() == 'D'){
					rowexist.find("td:first").find("input:first").val("I");
				}
				
				$tblSRSRow = rowexist;
			}
			
			
			
			
		
		//	$planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find("input:eq(18)").val($rowref);
			$tblSRSRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
			
			var pkid = $planRow.find("tr:eq(0)").find("td:eq("+tdpos+")").find('input:eq(13)').val();
			
			if(pkid.indexOf("AS_") == 0){
				if(isEmpty($tblSRSRow.find("td:eq(0)").find('input:eq(1)').val())){
					$tblSRSRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
				}
					
			}
			
			$tblSRSRow.find("td:eq(2)").find('select:eq(0)').val("Annual Addition"); //Classification  
			 
			$tblSRSRow.find("td:eq(3)").find('input:eq(0)').val("Life Insurance"); 
			
			$tblSRSRow.find("td:eq(4)").find('select:eq(0)').val("ANNUAL"); 
			
			$tblSRSRow.find("td:eq(5)").find('input:eq(0)').val(remPriceAfDec( Number(amount) * Number(frequency) )); 
		   
			$tblSRSRow.find("td:eq(6)").find('input:eq(0)').val(periodFrm);//Period From
		   
			$tblSRSRow.find("td:eq(7)").find('input:eq(0)').val(dateTopay);
		 
		  

			applyEventHandlers();
			applyToastrAlert("Life Insurance data will be reflected to SRS Account in Cash At Bank Screen");
			mandatoryFldForSRS($tblSRSRow,null,'LIFE');
		 
			 

			  
		}	 
		  
	}  
 } 
	 
	return true;
}

function chkNLifeSRSExist(rowRefID){
	var $tblSRSRow = null;
	 $("#srsTable tbody tr").each(function(){
		 var currrow = $(this);
		 var currrowrefid = currrow.find("td:eq(0)").find('input:eq(2)').val();
		 if(rowRefID == currrowrefid){
			 return $tblSRSRow = currrow;
		 } 
	});
	return $tblSRSRow;
}



/*Life To Retirement - Multion YES*/
function NRRetPlgTbl($tblRetplgRow){ 
	 
	 
	var owner=$("#lipOwner").val().toUpperCase();   
	if(owner != "SPOUSE"){
	var paymtd = $("#hPaymentMtd").val();

	var intretslfage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
	var totAge=isEmpty($("#retSelfProjage").val())? 0 :Number($("#retSelfProjage").val());
 
	 var calPrcnt =isEmpty($("#retPrcnttoused").val())?Number(1):Number($("#retPrcnttoused").val())/100;
		
	
	 var descpt=$("#lipPlanname").val();//Description
	 
	 var $rowref=$tblRetplgRow.find("td:eq(0)").find("input:eq(1)").val(); //LifeMVRet Ref Id
		
	var rowexist = chkNLifeRetExist($rowref);
	
	var $tblRETRow = null; 
	if(rowexist == null){
		getincassrtRows(null,"N");
		$tblRETRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
	}else{
		$tblRETRow = rowexist;
	}
	
 
	$tblRETRow.find("td:eq(0)").find('input:eq(2)').addClass("rowrefid").val($rowref);
	
	
	var pkid = $tblRetplgRow.find("td:eq(0)").find('input:eq(1)').val();
	
	if(pkid.indexOf("AS_") == 0){
		if(isEmpty($tblRETRow.find("td:eq(0)").find('input:eq(1)').val())){
			$tblRETRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
		}
			
	}
	
	 var clasfic	= "Insurance";//Classification
	 var descpt		= $tblRetplgRow.find("td:eq(2)").find('input:eq(0)').val();
	 var frequency	= "REGULAR";
	 var amtOfInc	= isEmpty($tblRetplgRow.find("td:eq(10)").find('input:eq(0)').val())?Number("0"):remPriceAfDec(Number($tblRetplgRow.find("td:eq(10)").find('input:eq(0)').val())*calPrcnt);
	 var escRate	= isEmpty($tblRetplgRow.find("td:eq(7)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(7)").find('input:eq(0)').val());
	 var basedon    = $("#lipOwner").val().toUpperCase();//Age Based on 
	 var ageIncStart= isEmpty($tblRetplgRow.find("td:eq(5)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(5)").find('input:eq(0)').val());
	 var ageIncEnd	= isEmpty($tblRetplgRow.find("td:eq(6)").find('input:eq(0)').val())?Number("0"):Number($tblRetplgRow.find("td:eq(6)").find('input:eq(0)').val());
	 
	 
	$tblRETRow.find("td:eq(2)").find('input:eq(0)').val(clasfic);
	
	$tblRETRow.find("td:eq(3)").find('input:eq(0)').val(descpt);
	 
	selectNullvalChk($tblRETRow.find("td:eq(4)"),frequency); 
	
	$tblRETRow.find("td:eq(5)").find('input:eq(0)').val(amtOfInc); 	
	
	$tblRETRow.find("td:eq(6)").find('input:eq(0)').val(escRate); 
		
	$tblRETRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));   
  
	selectNullvalChk($tblRETRow.find("td:eq(8)"),basedon);//Need to check
 
	$tblRETRow.find("td:eq(9)").find('input:eq(0)').val(ageIncStart);
 
	$tblRETRow.find("td:eq(10)").find('input:eq(0)').val(ageIncEnd);
  

	applyEventHandlers();
	
	applyToastrAlert("Life Insurance data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen !");
	mandatoryFldForRetirement($(this),$tblRETRow,'LIFE');
	reorderSino("IncAssRetPlgtbl");
	}
	return true;
}
/********end********/
function chkNLifeRetExist(rowRefID){
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


/*Life To Retirement - Multion NO*/
function addCashValueToRet(multiDis,cashvalue,refId,paymtd,descpt,cashvalretage,calPrcnt,planpkid){  
	
	
	var owner	= $("#lipOwner").val().toUpperCase();   
	var basedon = $("#lipOwner").val().toUpperCase();//Age Based on
	
//	var refId	= $("#lipRetRefId").val(); 
//	var paymtd  = $("#covPayMtd").text();
	
	var savingdeprate = $("#caSavingDeprate").val();
	 

	var intretslfage=isEmpty($("#retSelfAge").val())? 0 :Number($("#retSelfAge").val()); 
	var intretspsage=isEmpty($("#retSpsAge").val())? 0 :Number($("#retSpsAge").val());
	
	intretslfage = (owner == "SELF") ? intretslfage : ((owner == "SPOUSE") ? intretspsage : intretslfage);
	
	if( multiDis != "N"){
		var rowexist = chkNLifeRetExist(refId);
		
		var $tblRetRow = null; 
		if(rowexist != null){
			$tblRetRow = rowexist;
			$tblRetRow.hide();
			$tblRetRow.find("td:first").find('input:eq(0)').val(DEL_MODE);			
		} 
		
		if(multiDis == "Y"){
			
			var rowexistmul = chkNLifeRetExist(planpkid);
			if(rowexistmul != null){
				$tblRetRow = rowexistmul;
				if($tblRetRow.css("display") == "none"){
					$tblRetRow.css("display","");
				}
				if($tblRetRow.find("input:first").val() == 'D'){
					$tblRetRow.find("input:first").val("I") ;
				}
			}			
		}
		
		if(isEmpty(multiDis)){
			var rowexistmul = chkNLifeRetExist(planpkid);
			if(rowexistmul != null){
				$tblRetRow = rowexistmul;
				$tblRetRow.hide();
				$tblRetRow.find("input:first").val("D") ;
				
			}
		}
		
		
	}
	
		
	if(!isEmpty(cashvalue) && multiDis == "N"){ //&& (cashvalue=="N")
		 
		if( (owner != "JOINT" && owner != "PARENTS" || owner != "SPOUSE") && 
			(paymtd ==  "CASH" || paymtd ==  "CHEQUE" || paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" || 
			 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ")){ 
			
			var amountofincome = 0;
			
//			 var descpt=$("#covPlanName").text();//Description
			 var cls="Insurance";//Classification
			
			 cashvalretage =  isEmpty(cashvalretage)?Number(intretslfage):Number(cashvalretage);
			 calPrcnt =isEmpty(calPrcnt)?Number(1):Number(calPrcnt)/100; 
			 
			 
			 savingdeprate = isEmpty(savingdeprate)?0:Number(savingdeprate);
			  
				 cashvalretage =  Number(cashvalretage);
				 var agediff = intretslfage-cashvalretage;
				 cashvalue = Number(cashvalue);
				 
				 if(cashvalretage < intretslfage){
//					 If Retirement Plan were to mature before the client?s intended retirement age : Requirement
					 amountofincome  = FVCalculation(savingdeprate/100, agediff,0, -1*cashvalue,  1);
					 amountofincome = Math.round(amountofincome * calPrcnt);
						
				 }else{
					 amountofincome = Math.round(cashvalue * calPrcnt);
				 }
				 
				 
				 var rowexist = chkNLifeRetExist(refId);
					
					var $tblRetRow = null; 
					if(rowexist == null){
						getincassrtRows(null,"N");
						$tblRetRow =  $("#IncAssRetPlgtbl tbody tr:last"); 
					}else{
						if(rowexist.css("display") == "none"){
							rowexist.css("display","");
						}
						if(rowexist.find("td:first").find('input:eq(0)').val() == "D"){
							rowexist.find("td:first").find('input:eq(0)').val("I");
						}
						$tblRetRow = rowexist;
					}
 
					
//				 if(isEmpty(refId)){
					 
					 
//						getincassrtRows(null,"N");
//						var $tblRetRow=$("#IncAssRetPlgtbl tbody tr:last");//Retirement on Asset
						  
//						var dte=new Date();  
//						var rowRefID = "RPCS_"+dte.getDate()+dte.getMonth()+dte.getYear()+dte.getMinutes()+
//						 dte.getSeconds()+dte.getMilliseconds();
					
						 
						$tblRetRow.find("td:eq(0)").find("input:eq(2)").addClass("rowrefid").val(refId);
//						$("#lipRetRefId").val(rowRefID);
						
						if(isEmpty($tblRetRow.find("td:eq(0)").find('input:eq(1)').val())){
							$tblRetRow.find("td:eq(0)").find('input:eq(1)').val(makeid(17));
						}
						
						$tblRetRow.find("td:eq(2)").find('input:eq(0)').val(cls);
						
						$tblRetRow.find("td:eq(2)").find('input:eq(1)').val("DISIMBURSEMENT");
						
						$tblRetRow.find("td:eq(3)").find('input:eq(0)').val(descpt);			
					 
						$tblRetRow.find("td:eq(4)").find('select:eq(0)').val("SINGLE"); 		 	
										
						$tblRetRow.find("td:eq(5)").find('input:eq(0)').val(amountofincome);
					 
						$tblRetRow.find("td:eq(6)").find('input:eq(0)').val("").attr("readonly",true);			
						
						$tblRetRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));  			
					 
						$tblRetRow.find("td:eq(8)").find('select:eq(0)').val(basedon);//Need to check  
						
						$tblRetRow.find("td:eq(9)").find('input:eq(0)').val(cashvalretage);
					 
						$tblRetRow.find("td:eq(10)").find('input:eq(0)').val("").attr("readonly",true);
//				 }else{
//					 
//					 $("#IncAssRetPlgtbl tbody tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//						 if($(this).val() ==  $("#lipRetRefId").val()){
//							 
//									 var $parRow=$(this).closest("tr"); 
//									 $parRow.find("td:eq(0)").find("input:eq(2)").addClass("rowrefid").val($(this).val());
//									 $("#lipRetRefId").val($(this).val());
//									
//									 $parRow.find("td:eq(2)").find('input:eq(0)').val(cls);
//									
//									 $parRow.find("td:eq(3)").find('input:eq(0)').val(descpt);						
//								 
//									 $parRow.find("td:eq(4)").find('select:eq(0)').val("SINGLE");
//									 
//									$parRow.find("td:eq(5)").find('input:eq(0)').val(amountofincome);						
//									
//									$parRow.find("td:eq(6)").find('input:eq(0)').val("").attr("readonly",true);						
//									
//									$parRow.find("td:eq(7)").find('input:eq(0)').val(Number("0"));					
//								 
//									$parRow.find("td:eq(8)").find('select:eq(0)').val(basedon);//Need to check 				
//									
//									$parRow.find("td:eq(9)").find('input:eq(0)').val(cashvalretage);
//								 
//									$parRow.find("td:eq(10)").find('input:eq(0)').val("").attr("readonly",true);
//						 }
//					 });
//					 
//				 }
				reOrderVisibleRows("IncAssRetPlgtbl");  
				applyEventHandlers();
				
				applyToastrAlert("Life Insurance data will be reflected to Income and assets available for Retirement Section in Retirement Planning Screen !");
					  
		}
	}
	
	
	
	
	reOrderVisibleRows("IncAssRetPlgtbl");  
	return true;
}



function setMainRPPlanTbltoLifeRP($lastCol){ 
	
	var $lastRow 	= $("#cvplnleftpaneltbl tbody tr:eq(0)");
	var yrtoret  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(3)').val();
	var slfretage 	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(4)').val();
	var spsretage  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(5)').val();
	var multionret  = $lastRow.find("td:eq("+$lastCol+")").find('input:eq(6)').val();
	var cashvalonret= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(7)').val();
	var intrate  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(8)').val();
	var prctused  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(9)').val();
	var cashretage  = $lastRow.find("td:eq("+$lastCol+")").find('input:eq(10)').val(); 
//	var cashrefid  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(11)').val(); 
	var planpkid  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(18)').val();
	var cashrefid  	= $lastRow.find("td:eq("+$lastCol+")").find('input:eq(18)').val();
	console.log("plan sync id------->"+cashrefid+",planpkid-->"+planpkid)
	
	
	$("#lfretYrstoret").val(isEmpty(yrtoret)?$("#retYrstoret").val():yrtoret); 
	$("#retSelfretage").val(isEmpty(slfretage)?$("#retSelfCoordinateage").val():slfretage); 
	$("#retSpouseretage").val(isEmpty(spsretage)?$("#retSpsCoordinateage").val():spsretage);  
	$("#retMultionret").val(isEmpty(multionret)?"":multionret); 
	$("#retCashvalonret").val(isEmpty(cashvalonret)?"":cashvalonret); 
	$("#retIntrateused").val(isEmpty(intrate)?$("#caSavingDeprate").val():intrate);  
	$("#retPrcnttoused").val(isEmpty(prctused)?"":prctused); 
	$("#cashvalRetAge").val(isEmpty(cashretage)?"":cashretage);
	$("#lipRetRefId").val(cashrefid);
	enableRetCashValOnRet($("#retMultionret"),$("#retCashvalonret"),false,$("#lipRetRefId").val(),planpkid); 
	RetPlgcalculateRow();  
	
}

function setMainEditRPPlanTbltoLifeRP(){
	
	var bpRef		=	$("#covRef").text();  
	
	var bpcount = $("#cvplnleftpaneltbl tbody tr:eq(0) td").length;
	if(bpcount > 0){ 
		 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
			 var ref=$(this).find("input[name=txtFldliplnId]").val();
			 if(ref == bpRef){
				 var indx=$(this).index();
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(11)').val("");
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(3)').val($("#lfretYrstoret").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(4)').val($("#retSelfretage").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(5)').val($("#retSpouseretage").val());  
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(6)').val($("#retMultionret").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(7)').val($("#retCashvalonret").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(8)').val($("#retIntrateused").val());  
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(9)').val($("#retPrcnttoused").val()); 
				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(10)').val($("#cashvalRetAge").val());
//				 $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+indx+")").find('input:eq(11)').val($("#lipRetRefId").val()); 
					
			 }
		 });  
	} 
	
	
}


function enableRetCashValOnRet(sel,elmid,flg,cashrefId,planpkid){ 
	
	console.log("inside enableRetCashValOnRet"+planpkid+",cashrefId->"+cashrefId);
	
//	elmid - cash value element 
//	flg->Sets while onchange "true" otherwise false
	 
	var msg=false;
	var retval=false;
	var selvalue = sel.val();//retmultiflg element
//	var cashrefId=$("#lipRetRefId").val();
	
	if(selvalue == 'N'){
		if(flg){
			showAlert(CASH_VAL_RET,elmid); 
		}
		retval=true;
		 	
	}else if(selvalue == 'Y'){
		 retval=false; 
		 elmid.val("");
		
	 }else{
		 retval=false;
		 elmid.val("");
	 }
	
	
	
	if(retval){
		
		elmid.attr("readonly",false);
		elmid.removeClass("readOlyCursor");
		
		$("#liRetirementPlgtbl tbody").find("tr:visible").find("td:eq(0)").find("input:eq(2)").each(function(){
			
			var retrowId = $(this).closest("tr");
			var planname = $(this).closest("tr").find("td:eq(2)").find('input:eq(0)').val();
			var refId=$(this).val();
			
//			$("#covPlanName").text();
			$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
				
				var incassretrow = $(this).closest("tr");
				
				if(refId == $(this).val()){ 
//					msg=true; 
//					if(flg){   
//					 	IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();
					incassretrow.hide();
					incassretrow.find("td:first").find('input:eq(0)').val(DEL_MODE);
					
//					}
				}
				
			});   
//			if(flg){
//				if($("#covPlanName").text() == planname){
//			 retrowId.find("td:first").find('input:eq(0)').val(DEL_MODE); 
//			 liRetirementPlgtbl.rows(retrowId).remove().draw();
////				$("#lipRetRefId").val("");
//				}
//			}
		});  
		
//		RetPlgcalculateRow();   
		$("#divRetirementPlgtbl").hide();
		
	}else{ 
		 liRetirementPlgtbl.columns.adjust().draw(false);
		 elmid.attr("readonly",true); 
		 elmid.addClass("readOlyCursor"); 
//		  
//		 $("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){ 
//			if(cashrefId == $(this).val()){
//				msg=true; 
//				if(flg){ 
//					 IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw(); 
////					 $("#lipRetRefId").val("");
//					 }
//				 }
//			
//		 });   
//		 if(isEmpty(cashrefId)){
//			 $("#liRetirementPlgtbl tbody").find("tr").find("td:eq(0)").find("input:eq(1)").each(function(){
//					var planname = $(this).closest("tr").find("td:eq(2)").find('input:eq(0)').val();
//					var refId=$(this).val();   
//					$("#IncAssRetPlgtbl tbody").find("tr").find("td:eq(0)").find("input.rowrefid").each(function(){
//						var desc = $(this).closest("tr").find("td:eq(3)").find('input:eq(0)').val();
//						if(refId == $(this).val() && planname==desc){ 
//							msg=true; 
//							if(flg){   
//							 	IncAssRetPlgtbl.row($(this).closest("tr")).remove().draw();  
//							}
//						} 
//					 
//					});
//			 });
//		 }
//		 
//			if(flg){  
//			 $("#liRetirementPlgtbl tbody").find("tr").find("td:eq(0)").find("input:eq(1)").each(function(){
//				 var planname = $(this).closest("tr").find("td:eq(2)").find('input:eq(0)').val();
//					if(planname ==  $("#covPlanName").text()){
//						 $(this).closest("tr").find("td:first").find('input:eq(0)').val(DEL_MODE);
//						 liRetirementPlgtbl.rows( $(this).closest("tr")).remove().draw();  
//					} 
//			 });
//			}
		 
		 if(selvalue == 'Y'){
			 $("#divRetirementPlgtbl").show();
		 }
			 
	}
	
	
	if(msg && flg){ 
		applyErrorToastrAlert("There is row exists in other sections, will also be deleted!");
	}
	 
	
	reOrderVisibleRows("IncAssRetPlgtbl"); 
	reOrderVisibleRows("liRetirementPlgtbl"); 
}


$(".cashflowst").on("change",function(){
	calcTotSAPremPlandetails();
});
//
//function calcTotalPlandetails(){
//	
//var sumSlf=0,sumSps=0,sumFam=0,sumOfSA=0; 
//var totsumassure=0,totpremium=0;
//
////var $liPlanDetailstblcount =  $("#cvplnleftpaneltbl tbody tr:eq(0) td");  
//var ownship=$("#lipOwner").val();
//
// var ind=[];
//$("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
//		 ind.push($(this).index()); 
//}); 		
//
//
//	$.each(ind, function( index, value ) {  
//	
//		
//		var planpremiumamt		= $("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:eq("+ind[index]+")").find("input:eq(0)").val(); 
//		 var sumassuredamt		=Number($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:eq("+ind[index]+")").find("input:eq(0)").val());
//		 var paymode			=$("#cvplnleftpaneltbl tbody tr:eq(9)").find("td:eq("+ind[index]+")").find("select:eq(0)").val(); 
//		 var paymtd				=$("#cvplnleftpaneltbl tbody tr:eq(10)").find("td:eq("+ind[index]+")").find("select:eq(0)").val();  
//		 var premTerm			=$("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+ind[index]+")").find("input:eq(1)").val(); 
//		 var incdate			=$("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+ind[index]+")").find("input:eq(0)").val();
//		 var coverages			=$("#cvplnleftpaneltbl tbody tr:eq(2)").find("td:eq("+ind[index]+")").find("input[name=hselCoverages]").val();   
//		 var planName			=$("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:eq("+ind[index]+")").find("input:eq(0)").val();   
//		 var cashvalretage = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(10)").val();
//		 var calPrcnt =$("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(9)").val();
//		 var mode		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("div.hiddens").find("input:eq(12)").val(); 
//			var syncRefId		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("div.hiddens").find("input:eq(18)").val();
//			var multiDis = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("div.hiddens").find("input:eq(6)").val()
//		 
//		 console.log(paymtd + "-->"+mode +",coverages-->"+coverages);
//		 
//		 if(mode != "D"){
//			 
//			 var planpkid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(13)").val();//Reference id
//			 var planrefid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(18)").val();//Reference id
//			 var $rowref = planrefid; 
//			 var cashvalueonRetVal		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("div.hiddens").find("input:eq(7)").val();
//			 
//			 /**/
//			 if(coverages.indexOf("RP") != -1){
//				 addCashValueToRet(multiDis,cashvalueonRetVal,syncRefId,paymtd,planName,cashvalretage,calPrcnt,planpkid);
//			 }
//			 
//			 if(coverages.indexOf("RP") == -1){
//				 
//				 var rowexistRPIncAss = chkNLifeRetExist($rowref);
//				 
//				 if(rowexistRPIncAss){
//					 
//					 var mode = rowexistRPIncAss.find("td:first").find('input:eq(0)').val();
//
//						if(mode == INS_MODE){ 
//							rowexistRPIncAss.hide();
//							rowexistRPIncAss.find("td:first").find('input:eq(0)').val(DEL_MODE);
//						}else if (mode == QRY_MODE || mode == UPD_MODE){
//							rowexistRPIncAss.hide();
//							rowexistRPIncAss.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
//						} 
//
//						reOrderVisibleRows("IncAssRetPlgtbl");
//				 }
//					
//					
//			 }
//			 /**/
//			 
//			 if(paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
//				paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"){
//					 
//					 var planrefid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(18)").val();//Reference id
//					 var $rowref = planrefid; 
//					 var rowexistcpfdel = chkNLifeRowCPFExist($rowref);
//					 
//					 if(rowexistcpfdel){
////						 rowexistcpfdel.find("td:eq(1)").find('input[type=checkbox]').prop("checked",true);
////						 $("#CpfADDRow").trigger("click");
//						 
//						 var mode = rowexistcpfdel.find("td:first").find('input:eq(0)').val();
//
//							if(mode == INS_MODE){ 
//								rowexistcpfdel.hide();
//								rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
//							}else if (mode == QRY_MODE || mode == UPD_MODE){
//								rowexistcpfdel.hide();
//								rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
//							} 
//
//							reOrderVisibleRows("cpfAccAddDedTable");
//					 }
//					 
//					 var rowexistsrsdel = chkNLifeSRSExist($rowref);
//					 if(rowexistsrsdel){
//						 
//						 var mode = rowexistsrsdel.find("td:first").find('input:eq(0)').val();
//
//							if(mode == INS_MODE){ 
//								rowexistsrsdel.hide();
//								rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
//							}else if (mode == QRY_MODE || mode == UPD_MODE){
//								rowexistsrsdel.hide();
//								rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
//							} 
//
//							reOrderVisibleRows("srsTable");
//					 }
//					 
//					
//					 
//					 
//					
//	
//					 var TopUpAmt=0; 
//				 		if(paymode == 'ANNUALLY'){
//							TopUpAmt=1;
//						}else if(paymode == 'HALF YEARLY'){
//							TopUpAmt=2;
//						}else if(paymode == 'QUARTERLY'){
//							TopUpAmt=4;
//						}else if(paymode == 'MONTHLY'){
//							TopUpAmt=12;
//						}else if(paymode == 'SINGLE'){
//							TopUpAmt=1;
//						}
//				 		
//				 		 console.log(TopUpAmt+","+planpremiumamt+","+premTerm+","+incdate);
//					 
//					 var sumamt	=	planpremiumamt*TopUpAmt;
//					 totpremium +=Number(sumamt); 
//					 
//					 
//					 var dateTopay ="",stillNeedTopay=false;
//					 if(!isEmpty(premTerm) && !isEmpty(incdate)){
//						 if(premTerm.toUpperCase() != "WHOLE LIFE"){
//							  dateTopay			= addyearsToDate(incdate,premTerm);
//							  console.log(dateTopay);
//							  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
//						 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
//							 stillNeedTopay		= true;
//						 }
//					 }
//				 
//				   
//				  console.log(stillNeedTopay +",----------->"+paymode+",-------->"+ownship)
//				  
//					if(stillNeedTopay && paymode != 'SINGLE'){
//						 if((!isEmpty(sumamt)) && ownship == "Self"){
//							 sumSlf +=Number(sumamt); 
//							 
//						 }
//						 if((!isEmpty(sumamt)) && ownship == "Spouse"){
//							 sumSps +=Number(sumamt); 
//						 } 
//						 if((!isEmpty(sumamt)) && ownship == "Joint"){
//							 sumFam +=Number(sumamt); 
//						 }   
//						 if((!isEmpty(sumassuredamt))){
//							 totsumassure +=Number(sumassuredamt); 
//						 }   
//							} 
//					
//						 }
//						 
//						 if((!isEmpty(sumassuredamt))){
//							 sumOfSA +=Number(sumassuredamt); 
//						 } 
//			 
//		 }
//	 
//	 
//	
//	}); 
//
// 
//		 
//			
//	  console.log(sumSlf +","+sumSps+","+sumFam)
//		$("#expdSelfInsurance").val(remPriceAfDec(sumSlf)); 
//		$("#expdSpsInsurance").val(remPriceAfDec(sumSps));
//		$("#expdFamilyInsurance").val(remPriceAfDec(sumFam));  
//		$("#lipSa").val(remPriceAfDec(sumOfSA)); 
//		
//		
//		
//		
//		calcSum(this,'SUMOF_ANNEXP_SELF');
//		calcSum(this,'SUMOF_ANNEXP_SPS');
//		calcSum(this,'SUMOF_ANNEXP_FAM'); 
//
//		return true;
//} 
function ilifeInsPremium(opts){ 
 
var client_NRIC = $("#dfSelfNric").val();
var client_AdvId = $("#advstfId").val();
var fpmsCustId = $("[name=custId]").val();
var fnaId = $("#fnaId").val();

var strPremAmtSelf=0,strPremAmtSpouse=0,strPremAmtFamily=0;

var tempSelfIns =Number($("#expdSelfInsurance").val());
var tempSpsIns =Number($("#expdSpsInsurance").val());
var tempFamIns =Number($("#expdFamilyInsurance").val()); 
$.ajax({
	url:servletName,
	async:false,
	data:{
		"DBCALLFOR":"FNA_LIFE_PREMAMT",
		"strClientNRIC":client_NRIC,
		"strClientAdvId":client_AdvId,
		"strCustId":fpmsCustId,
		"strFNAId":fnaId
	},
	success: function(result){
		
		var jsnRslt=JSON.parse(result); 
		$.each(jsnRslt,function(i,obj){
			if(obj.SESSION_EXPIRY=='SESSION_EXPIRY'){
				window.location = BASE_URL + SESSION_EXP_JSP;

				hideLoader();
				return;
			}

			if (obj.SESSION_EXPIRY=="DB_ERROR") {
				window.location = BASE_URL + DB_EXP_JSP;

				hideLoader();
				return;
			}
			
			$.each(obj,function(i,val){
				console.log("i==>"+i+"val===>"+val)
				if(i=="CLNT_LIFEPREM_AMT"){
					$.each(val, function(contkey, contvalue) { 
						var appName = contvalue["jsonApplnName"];
						var lifeId 	= contvalue["jsonLifeId"];
						var owner 	= contvalue["jsonLifeOwner"];
						var planName= contvalue["jsonLifePlanName"];
						var incDate = contvalue["jsonLifeIncDate"];
						var payMode = contvalue["jsonLifePayMode"]; 
						var paymtd 	= contvalue["jsonLifePayMtd"]; 
						var premAmt = Number(contvalue["jsonLifePremAmt"]);   
						var polDate = contvalue["jsonLifePolDate"];
//						var planterm = contvalue["jsonLifePlanTerm"];
//						var planuniqid = contvalue["jsonLifePlanId"];
//						var planstatus = contvalue["jsonLifePlanStatus"];
						
						console.log("paymtd---------------->"+paymtd+ ",appName----------->"+appName+",premAmt---------->"+premAmt + ",payMode --->"+payMode)
						 
						if(paymtd == "CPFOA" || paymtd == "CPFSA" || paymtd == "CPF" || paymtd == "SRS" || (paymtd.indexOf("CPF") == 0)){ 
						if(appName == "FPMSNL"){ 
					 		  if(opts == "FETCH"){
					 		 	 syncFPMSCpf(contvalue,lifeId);
					 		 }
					 	 }
						}
						 
						 if(paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
								 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"){
	 
						if(!isEmpty(premAmt) && isValidObject(premAmt)){ 
							 var TopUpAmt=0; 
						 		if(payMode == 'ANNUALLY'){
									TopUpAmt=1;
								}else if(payMode == 'HALF YEARLY'){
									TopUpAmt=2;
								}else if(payMode == 'QUARTERLY'){
									TopUpAmt=4;
								}else if(payMode == 'MONTHLY'){
									TopUpAmt=12;
								}else if(payMode == 'SINGLE'){
									TopUpAmt=1;
								}
						 		
						 		 var stillNeedTopay=false;
						 		 var sumamt			= 0;
						 		 	 sumamt=premAmt*TopUpAmt;    
						 		 stillNeedTopay 	= validateDateComparision(polDate,ResultNewDate,">="); 
						 		
						 		 	 
						 		 	 
						 		 //check for loaded policy	 
						 		 	 var updPremCal = "";
						 		 	 if(appName == "FIPA"){
						 		 		updPremCal = $("input[name=lipId]").val();
						 		 	 }
						 		 	 
						 		 	 if(appName == "FPMSNL"){
						 		 		updPremCal = $("input[name=lipAppId]").val(); 
						 		 	 }
						 		 	 
						 		 	 console.log("owner--->"+owner+",stillNeedTopay--->"+stillNeedTopay + ",sumamt---->"+sumamt)
						 if(stillNeedTopay){
							 if(lifeId != $("input[name=lipId]").val()){ //For FIPA Applications
								 if(owner == "Self"){
										strPremAmtSelf +=Number(sumamt);
									}
									if(owner == "Spouse"){
										strPremAmtSpouse +=Number(sumamt);
									}
									if(owner == "Parents" || owner == "Joint"){
										strPremAmtFamily +=Number(sumamt);
									} 
							 }
							 
							 calcTotalPlandetails(opts,strPremAmtSelf,strPremAmtSpouse,strPremAmtFamily);
							 
						  }
						}
						 }
					}); 
				}
				
			});
			
			
		});
		
	}
});  

//calcTotalPlandetails(opts,strPremAmtSelf,strPremAmtSpouse,strPremAmtFamily);

//calcTotalPlandetails(opts,tempSelfIns,tempSpsIns,tempFamIns);
} 
function calcTotalPlandetails(opts,sumSlf,sumSps,sumFam){ 
		 	 var sumOfSA=0; 
			 var totsumassure=0,totpremium=0; 
			 var ownship=$("#lipOwner").val();
 
			 
			 
			  var ind=[];
			 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
			 		 ind.push($(this).index()); 
			 }); 		
			 if(ind.length >0){
			 $.each(ind, function( index, value ) {  
					
					
					var planpremiumamt		=Number($("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:eq("+ind[index]+")").find("input:eq(0)").val()); 
					 var sumassuredamt		=Number($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:eq("+ind[index]+")").find("input:eq(0)").val());
					 var paymode			=$("#cvplnleftpaneltbl tbody tr:eq(8)").find("td:eq("+ind[index]+")").find("select:eq(0)").val(); 
					 var paymtd				=$("#cvplnleftpaneltbl tbody tr:eq(9)").find("td:eq("+ind[index]+")").find("select:eq(0)").val();  
					 var premTerm			=$("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+ind[index]+")").find("input:eq(1)").val(); 
					 var incdate			=$("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+ind[index]+")").find("input:eq(0)").val();
					 var coverages			=$("#cvplnleftpaneltbl tbody tr:eq(2)").find("td:eq("+ind[index]+")").find("input[name=hselCoverages]").val();   
					 var planName			=$("#cvplnleftpaneltbl tbody tr:eq(1)").find("td:eq("+ind[index]+")").find("input:eq(0)").val();   
					 var cashvalretage = Number($("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(10)").val());
					 var calPrcnt =Number($("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(9)").val());
					 var mode		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("div.hiddens").find("input:eq(12)").val(); 
						var syncRefId		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("div.hiddens").find("input:eq(18)").val();
						var multiDis = $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("div.hiddens").find("input:eq(6)").val()
					 
					 console.log(paymtd + "-->"+mode +",coverages-->"+coverages);
					 
					 if(mode != "D"){
						 
						 var planpkid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(13)").val();//Reference id
						 var planrefid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(18)").val();//Reference id
						 var $rowref = planrefid; 
						 var cashvalueonRetVal		= $("#cvplnleftpaneltbl tbody tr:eq(0)").find("td:eq("+ind[index]+")").find("div.hiddens").find("input:eq(7)").val();
						 
						 /**/
						 if(!isEmpty(coverages)){
						 if(coverages.indexOf("RP") != -1){
							 addCashValueToRet(multiDis,cashvalueonRetVal,syncRefId,paymtd,planName,cashvalretage,calPrcnt,planpkid);
						 }
						 
						 if(coverages.indexOf("RP") == -1){
							 
							 var rowexistRPIncAss = chkNLifeRetExist($rowref);
							 
							 if(rowexistRPIncAss){
								 
								 var mode = rowexistRPIncAss.find("td:first").find('input:eq(0)').val();

									if(mode == INS_MODE){ 
										rowexistRPIncAss.hide();
										rowexistRPIncAss.find("td:first").find('input:eq(0)').val(DEL_MODE);
									}else if (mode == QRY_MODE || mode == UPD_MODE){
										rowexistRPIncAss.hide();
										rowexistRPIncAss.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
									} 

									reOrderVisibleRows("IncAssRetPlgtbl");
							 }
								
								
						 }
						 }
						 /**/
						 
						 if(paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
							paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"){
								 
								 var planrefid = $("#cvplnleftpaneltbl tbody").find("tr:eq(0)").find("td:eq("+ind[index]+")").find("input:eq(18)").val();//Reference id
								 var $rowref = planrefid; 
								 var rowexistcpfdel = chkNLifeRowCPFExist($rowref);
								 
								 if(rowexistcpfdel){
//									 rowexistcpfdel.find("td:eq(1)").find('input[type=checkbox]').prop("checked",true);
//									 $("#CpfADDRow").trigger("click");
									 
									 var mode = rowexistcpfdel.find("td:first").find('input:eq(0)').val();

										if(mode == INS_MODE){ 
											rowexistcpfdel.hide();
											rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
										}else if (mode == QRY_MODE || mode == UPD_MODE){
											rowexistcpfdel.hide();
											rowexistcpfdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
										} 

										reOrderVisibleRows("cpfAccAddDedTable");
								 }
								 
								 var rowexistsrsdel = chkNLifeSRSExist($rowref);
								 if(rowexistsrsdel){
									 
									 var mode = rowexistsrsdel.find("td:first").find('input:eq(0)').val();

										if(mode == INS_MODE){ 
											rowexistsrsdel.hide();
											rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);
										}else if (mode == QRY_MODE || mode == UPD_MODE){
											rowexistsrsdel.hide();
											rowexistsrsdel.find("td:first").find('input:eq(0)').val(DEL_MODE);   		     			
										} 

										reOrderVisibleRows("srsTable");
								 }
								 
								
								 
								 
								
				
								 var TopUpAmt=0; 
							 		if(paymode == 'ANNUALLY'){
										TopUpAmt=1;
									}else if(paymode == 'HALF YEARLY'){
										TopUpAmt=2;
									}else if(paymode == 'QUARTERLY'){
										TopUpAmt=4;
									}else if(paymode == 'MONTHLY'){
										TopUpAmt=12;
									}else if(paymode == 'SINGLE'){
										TopUpAmt=1;
									}
							 		
							 		 console.log(TopUpAmt+","+planpremiumamt+","+premTerm+","+incdate);
								 
								 var sumamt	=	planpremiumamt*TopUpAmt;
								 totpremium +=Number(sumamt); 
								 
								 
								 var dateTopay ="",stillNeedTopay=false;
								 if(!isEmpty(premTerm) && !isEmpty(incdate)){
									 if(premTerm.toUpperCase() != "WHOLE LIFE"){
										  dateTopay			= addyearsToDate(incdate,premTerm);
										  console.log(dateTopay);
										  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
									 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
										 stillNeedTopay		= true;
									 }
								 }
							 
							   
							  console.log(stillNeedTopay +",----------->"+paymode+",-------->"+ownship)
							  
								if(stillNeedTopay && paymode != 'SINGLE'){
									 if((!isEmpty(sumamt)) && ownship == "Self"){
										 sumSlf +=Number(sumamt); 
										 
									 }
									 if((!isEmpty(sumamt)) && ownship == "Spouse"){
										 sumSps +=Number(sumamt); 
									 } 
									 if((!isEmpty(sumamt)) && ownship == "Joint"){
										 sumFam +=Number(sumamt); 
									 }   
									 if((!isEmpty(sumassuredamt))){
										 totsumassure +=Number(sumassuredamt); 
									 }   
										} 
								
									 }
									 
									 if((!isEmpty(sumassuredamt))){
										 sumOfSA +=Number(sumassuredamt); 
									 } 
						 
					 }
				 
				 
				
				});     
			 
			 }
			 if(opts != "FETCH"){
				 if(!(sumSlf == 0 && sumSps == 0 && sumFam == 0)){
					 applyToastrAlert("Life Insurance Premium is calculated and Reflected to Expected fund Inflow and Outflow Screen");
		 		 } 
             }
			 

		    
		     console.log("opts---------->"+opts+ ",sumSlf --->"+sumSlf)
		     
		     
		     
		     if(opts == "FETCH"){
		    		var tempSelfIns =Number($("#expdSelfInsurance").val());
		    		var tempSpsIns =Number($("#expdSpsInsurance").val());
		    		var tempFamIns =Number($("#expdFamilyInsurance").val()); 
		    		
		    	 $("#expdSelfInsurance").val(remPriceAfDec(sumSlf)); 
				 $("#expdSelfInsurance").attr("data-attr",tempSelfIns).attr("onmouseover","toolTipLifeShow($(this))");
				 if(tempSelfIns  != $("#expdSelfInsurance").val() && !isEmpty($("#expdSelfInsurance").attr("data-attr"))){
					 $("#expdSelfInsurance").addClass("alterColor");
				 }else{
					 $("#expdSelfInsurance").removeClass("alterColor");
				 }
			     $("#expdSpsInsurance").val(remPriceAfDec(sumSps));
			     $("#expdSpsInsurance").attr("data-attr",tempSpsIns).attr("onmouseover","toolTipLifeShow($(this))");
			     if( tempSpsIns  != $("#expdSpsInsurance").val() &&   !isEmpty($("#expdSpsInsurance").attr("data-attr")) ){
			    	 $("#expdSpsInsurance").addClass("alterColor");
				 }else{
					 $("#expdSpsInsurance").removeClass("alterColor");
				 }
			     $("#expdFamilyInsurance").val(remPriceAfDec(sumFam));   
			     $("#expdFamilyInsurance").attr("data-attr",tempFamIns).attr("onmouseover","toolTipLifeShow($(this))");
			     if(tempFamIns != $("#expdFamilyInsurance").val() && !isEmpty($("#expdFamilyInsurance").attr("data-attr"))){
			    	 $("#expdFamilyInsurance").addClass("alterColor");
				 }else{
					 $("#expdFamilyInsurance").removeClass("alterColor");
				 } 
			     
		     }else{
				 $("#expdSelfInsurance").val(remPriceAfDec(sumSlf)); 
			     $("#expdSpsInsurance").val(remPriceAfDec(sumSps));
			     $("#expdFamilyInsurance").val(remPriceAfDec(sumFam)); 
		     }
		     
		     
		     
		     $("#lipSa").val(remPriceAfDec(sumOfSA));  
//		     $("#retTotalSa").val(Number(sumOfSA).toFixed(2)); 
//		     $("#retTotalPrem").val(Number(totpremium).toFixed(2));  
		     
		     
			 calcSum(this,'SUMOF_ANNEXP_SELF');
			 calcSum(this,'SUMOF_ANNEXP_SPS');
			 calcSum(this,'SUMOF_ANNEXP_FAM'); 
			 
			  
			 return true;
}
function calcTotSAPremPlandetails(){
	 var sumSlf=0,sumSps=0,sumFam=0,sumOfSA=0; 
	 var totsumassure=0,totpremium=0; 
	 var ownship=$("#lipOwner").val();

	  var ind=[];
	 $("#cvplnleftpaneltbl tbody tr:eq(0) td").each(function(){ 
	 		 ind.push($(this).index()); 
	 }); 		
	 if(ind.length >0){
	 $.each(ind, function( index, value ) {   
	 	 var planpremiumamt		= Number($("#cvplnleftpaneltbl tbody tr:eq(4)").find("td:eq("+ind[index]+")").find("input:eq(0)").val()); 
	 	 var sumassuredamt		=Number($("#cvplnleftpaneltbl tbody tr:eq(3)").find("td:eq("+ind[index]+")").find("input:eq(0)").val());
	 	//SCREEN CHANGE REFLECTION
	 	 var paymode			=$("#cvplnleftpaneltbl tbody tr:eq(8)").find("td:eq("+ind[index]+")").find("select:eq(0)").val(); 
	 	 var paymtd				=$("#cvplnleftpaneltbl tbody tr:eq(9)").find("td:eq("+ind[index]+")").find("select:eq(0)").val();  
	 	 var premTerm			=$("#cvplnleftpaneltbl tbody tr:eq(6)").find("td:eq("+ind[index]+")").find("input:eq(1)").val(); 
	 	 var incdate			=$("#cvplnleftpaneltbl tbody tr:eq(5)").find("td:eq("+ind[index]+")").find("input:eq(0)").val();   
	 	 
	 	 
	 	 if(paymtd ==  "CASH" || paymtd ==  "CHEQUE" ||	 paymtd ==  "CREDIT-CARD" || paymtd ==  "GIRO - POSB" ||
	 		 paymtd ==  "TT" || paymtd ==  "GIRO - OTHERS" || paymtd ==  "CASH CARD" || paymtd ==  "CASH/CHQ"){

	 	 var TopUpAmt=0; 
	 	 		if(paymode == 'ANNUALLY'){
	 				TopUpAmt=1;
	 			}else if(paymode == 'HALF YEARLY'){
	 				TopUpAmt=2;
	 			}else if(paymode == 'QUARTERLY'){
	 				TopUpAmt=4;
	 			}else if(paymode == 'MONTHLY'){
	 				TopUpAmt=12;
	 			}else if(paymode == 'SINGLE'){
	 				TopUpAmt=1;
	 			}
	 		 
	 		 var sumamt	=	planpremiumamt*TopUpAmt;
	 		 totpremium +=Number(sumamt); 
	 		 
	 		 
	 		 var dateTopay ="",stillNeedTopay=false;
	 		 if(!isEmpty(premTerm) && !isEmpty(incdate)){
	 			 if(premTerm.toUpperCase() != "WHOLE LIFE"){
	 				  dateTopay			= addyearsToDate(incdate,premTerm);	
	 				  stillNeedTopay 	= validateDateComparision(dateTopay,ResultNewDate,">=");  
	 			 }else if(premTerm.toUpperCase() == "WHOLE LIFE"){
	 				 stillNeedTopay		= true;
	 			 }
	 		 }
	 	 
	 	   
	 	  
	 	  
	 		if(stillNeedTopay && paymode != 'SINGLE'){
	 			 if((!isEmpty(sumamt)) && ownship == "Self"){
	 				 sumSlf +=Number(sumamt); 
	 				 
	 			 }
	 			 if((!isEmpty(sumamt)) && ownship == "Spouse"){
	 				 sumSps +=Number(sumamt); 
	 			 } 
	 			 if((!isEmpty(sumamt)) && ownship == "Joint"){
	 				 sumFam +=Number(sumamt); 
	 			 }   
	 			 if((!isEmpty(sumassuredamt))){
	 				 totsumassure +=Number(sumassuredamt); 
	 			 }   
	 				} 
	 		
	 			 }
	 			 
	 			 if((!isEmpty(sumassuredamt))){
	 				 sumOfSA +=Number(sumassuredamt); 
	 			 }  
	 	});   
	 
	 }
 
 
 
 $("#lipSa").val(remPriceAfDec(sumOfSA));  
 $("#retTotalSa").val(Number(sumOfSA).toFixed(2)); 
 $("#retTotalPrem").val(Number(totpremium).toFixed(2));  
 
 
 calcSum(this,'SUMOF_ANNEXP_SELF');
 calcSum(this,'SUMOF_ANNEXP_SPS');
 calcSum(this,'SUMOF_ANNEXP_FAM'); 
	 return true;
}





//For Master Coverages
function incovrgicoAdd(){ 
	$('#incovrgicoAdd').popover({
        container: 'body',
        html: true,
        trigger: "click" ,
        content: function () { 
            var clone = $($(this).data('popover-content')).clone().removeClass('hidden'); 
            return clone;
        },
//        title:function () {
//		    return 'Info';
//		},
        animation: 'true',
    }).click(function(e) {
        e.preventDefault();
    });
	clearAllCovPopover();
	
}	
$("#incovrgicoAdd").on("click",function(){
	$('#dummydiv').modal('show');
	$('#dummydiv').modal('hide'); 
}); 

function benefitsAddedMtd(){
	if(!validateBenefits()) return; 
	$('.popover').popover('hide'); 
	$('#covAddPopContent').addClass('hidden');
	$(".popover-content").find("table").parent("div").removeClass("bg-danger"); 
	setBenefitsIntoCoverageTable();
}
function benefitsCancelMtd(){
	clearAllCovPopover();
	$('.popover').popover('hide'); 
	$('#covAddPopContent').addClass('hidden');
}
function clearAllCovPopover(){
	$(".popover-content #covAddPopContent").find("input").val("");
	$(".popover-content #covAddPopContent").find("input:checkbox").each(function() {
		 $(this).prop("checked",false);
		 $(this).prop("disabled",false); 
    });
}
function setBenefitsIntoCoverageTable(){ 
	var life_Bef = $(".popover-content #txtFldLifePlanCoverages").val();
	var hCols_Bef = $(".popover-content #hcoverageClientChoice").val();	
/* Head Append*/
	var thDiv= $("#plancoveragetbl thead tr th:eq(1)");
	$("#plancoveragetbl thead tr th:first").after("<th class='selectedd'>"+thDiv.html()+"</th>");
	$("#plancoveragetbl thead tr th:eq(1)").find("div").text(life_Bef).find("input").attr("id","h"+life_Bef).val(life_Bef);
/* Body Append*/
	var clientChoice=[]; 
	clientChoice=$(".popover-content #hcoverageClientChoice").val().split(",");
	
	
	$("#plancoveragetbl tbody tr").each(function(i){
		$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").find("div:eq(1)").attr("id","div"+life_Bef);
		$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").find("input:eq(0)").attr("id",life_Bef).attr("name",life_Bef);
		 
		
		
		var exist = clientChoice.indexOf((i).toString());
		if(exist > -1){  
		if(i >= 0 && i <= 3){ //0,1,2,3 
			$(this).find("td:first").after("<td align='center' class='selectedd'>"+$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").html()+"</td>");
 		} 
		if(i > 3 && i <= 6){//4,5,6
			$(this).find("td:first").after("<td align='center' class='selectedd'>"+$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").html()+"</td>");
		} 
		if(i > 6 && i <= 10){//7,8,9,10
			$(this).find("td:first").after("<td align='center' class='selectedd'>"+$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").html()+"</td>");
		}
		if(i == 11){
			$(this).find("td:first").after("<td align='center' class='selectedd'>"+$("#covBodyTagging tbody tr:eq("+i+")").find("td:eq(0)").html()+"</td>");
		}
		}else{
			$(this).find("td:first").after("<td align='center' class='selectedd'><div>&nbsp;</div></td>");
		} 
	});
	
}


function validateBenefits(){  
//		if(!(validateFocusFlds('.popover-content','txtFldLifePlanCoverages',POP_COV_BENEFITS))) return;
		var benftxt = $(".popover-content #txtFldLifePlanCoverages").val(); 
		if (isEmpty(benftxt.trim())) { 
			applyErrorToastrAlert(POP_COV_BENEFITS);  
			$(".popover-content #txtFldLifePlanCoverages").focus(); 
			return false; 
		}
		
		var coveragechk = 0;  
		$(".popover-content").find("input:checkbox[name='chkcovbenf']").each(function() {
			if ($(this).prop("checked")) {
				coveragechk++;
			}
		}); 
		if (coveragechk == 0) {
			applyErrorToastrAlert(POP_SELCOV_BENEFITS);
			$(".popover-content").find("table").parent("div").addClass("bg-danger");
			 return false; 
		}
		
		return true;
}
function coveragesCheckEvent(elmid,options){ 
	if(options == "cov"){
		if(elmid.checked){ 
			$(".popover-content").find("input:checkbox[name='chkcovbenf']").map(function() { //If checked iterate the 
				var id = $(this).attr("id");  
				$(".popover-content  #"+id).prop("checked",true); 
				$(".popover-content  #"+id).attr("disabled",true);  
			}).get();
		}else if(!elmid.checked){ 
			$(".popover-content").find("input:checkbox[name='chkcovbenf']").map(function() {  
				var id = $(this).attr("id");
				$(".popover-content #"+id).prop("checked",false); 
				$(".popover-content #"+id).attr("disabled",false);  
			}).get();
		}
		} 
		if(options == "All"){ 
		
			var coverageslen = $(".popover-content input:checkbox[name='chkcovbenf']").length; 
			if(elmid.checked){$(".popover-content").find("table").parent("div").removeClass("bg-danger");} 
			if( $(".popover-content input[name=chkcovbenf]:checked").length == coverageslen){
				$(".popover-content input[name=chkAllCoverages]").prop("checked",true);  
				$(this).prop("checked",false); 
				$(".popover-content input[name=chkcovbenf]").attr("disabled",true);
			}
			
			
		 }
		var hiddenObjval =$(".popover-content #hcoverageClientChoice"); 
		hiddenObjval.val();
		var chkCoverageId=[]; 
		chkCoverageId.push("11");	 
		var coveragePushval=  $(".popover-content input:checkbox[name='chkcovbenf']:checked").map(function() { 
			chkCoverageId.push($(this).attr("value"));	 
		   return this.value; 
		}).get(); 
		hiddenObjval.val(coveragePushval.toString()); 
		 
}//EnD Master coverage validations
 

//$("#lipOwner").on("change",function(){
//	var $elmVal=$(this).val(); 
//	if(!isEmpty($elmVal)){ 
//		 var selectedIndex=$("#lipOwner option").index($("#lipOwner option:selected")); 
//		 var assrdSize=$("#lipAssured option").size();
//	if(selectedIndex == 1){
//		$("#lipAssured  option")[1].selected = true; 
//		$("#lipAssured").prop("disabled",true);
//	}else if(selectedIndex == 2){ 
//		$("#lipAssured  option")[2].selected = true;
//		$("#lipAssured").prop("disabled",true);
//	}else if(selectedIndex == 3  ){  
//		if( assrdSize > 3){
//			$("#lipAssured  option")[3].selected = true;	
//			$("#lipAssured").prop("disabled",false); 
//		}else{
//			$("#lipAssured  option")[0].selected = true;
//			$("#lipAssured").prop("disabled",false);
//		}
//	}else if(selectedIndex == 0 || selectedIndex == 4){ 
//		$("#lipAssured  option")[0].selected = true;
//		$("#lipAssured").prop("disabled",false);
//	}
//  }else{
//	  $("#lipAssured  option")[0].selected = true;
//		$("#lipAssured").prop("disabled",false);
//  }
//});
//
//$("#lipAssured").on("change",function(){
//	var owner = $("#lipOwner").val();
//	if(isEmpty(owner)){
//		applyErrorToastrAlert("Please select Owner");
//		$(this).val("");
//		return false;
//	}else{
//		 var selectedIndex=$("#lipAssured option").index($("#lipAssured option:selected"));
//		 if(selectedIndex == 1){
//				$("#lipOwner  option")[1].selected = true; 
//				$("#lipAssured").prop("disabled",true);
//		 }else if(selectedIndex == 2){ 
//				$("#lipOwner  option")[2].selected = true;
//				$("#lipAssured").prop("disabled",true);
//			}else if(selectedIndex >= 3){  
//				$("#lipOwner  option")[3].selected = true; 
//				$("#lipAssured").prop("disabled",false);
//			}else if(selectedIndex == 0){ 
//				$("#lipOwner  option")[0].selected = true;
//				$("#lipAssured").prop("disabled",false);
//			}
//	}
//	
//});