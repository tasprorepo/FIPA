var generatetoamendincExp,generatetoamendincExpAccm;
 
$("#RdAmendInc ,#RdAmendExp").click(function(){
	

//	amendIncomeAndExpenditure();
});

function amendIncomeAndExpenditure(){
//	if(!validationOnProjOfExp())return;
//	if(!validationOnProjOfInc())return;
	 showLoader();
	setTimeout(function(){
		 getRDIncomeAndExp();
		 hideLoader();
	 }, 1000);
	
}

$("#rpcfannlbufamt").on("change",function(){
	 showLoader();
	setTimeout(function(){
		
		getRDIncomeAndExp();
		 hideLoader();
	},1000);
	
});
$("#rpcfannlbufamtintrate").on("change",function(){
	 showLoader();
		setTimeout(function(){
			
			getRDIncomeAndExp();
			 hideLoader();
		},1000);
});
$("#rpcfannlbufamtroi").on("change",function(){
	 showLoader();
		setTimeout(function(){
			
			getRDIncomeAndExp();
			 hideLoader();
		},1000);;
});

var finalchart = null;

function getRDIncomeAndExp(){
	 
	$("#generateproRetirementtbl tbody").html("");
	
//	var projOnRtddata = [];
	var annlincomexp = [],annlincomexpaccm=[];
	
	var intretslfage=Number($("#txtFldRDSlfIntAge").val());
	var intretspsage=Number($("#txtFldRDSpsIntAge").val());
	var totAge=Number($("#txtFldRDSlfProjLfe").val());

	var bufferfundamt = $("#rpcfannlbufamt").val();
	var bufferfundintrate = $("#rpcfannlbufamtintrate").val();
	var bufferfundamtroi = $("#rpcfannlbufamtroi").val();
	 
	bufferfundamt = isEmpty(bufferfundamt) ? "" : Number(bufferfundamt);
	bufferfundintrate = isEmpty(bufferfundintrate) ? 0 : Number(bufferfundintrate)/100;
	bufferfundamtroi = isEmpty(bufferfundamtroi) ? 0 : Number(bufferfundamtroi)/100;

	var dataset=[],datasetAccm=[];
	
	 $("#projInvRettbldiv").css("display","block"); 


var dataHeader=[
                {"data":"Self Age","title":"Self Age","className":"dt-head-center"},
                {"data":"Spouse Age","title":"Spouse Age","className":"dt-head-center"},
                {"data":"Buffer fund for retirement","title":"Buffer Fund <br/> for Retirement",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Current cash funds on retirement","title":"Current Cash <br/> Funds on <br/> Retirement",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Annual income","title":"Annual <br/> Income",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Annual Expenditure","title":"Annual <br/> Expenditure",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Available retirement funds -(Surplus/ deficit)","title":"Available Retirement <Br/> Funds -(Surplus/ deficit)",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                ];
 

var dataHeaderAccm=[
                {"data":"Self Age","title":"Self Age","className":"dt-head-center"},
                {"data":"Spouse Age","title":"Spouse Age","className":"dt-head-center"},
                {"data":"Buffer fund for retirement","title":"Buffer Fund <br/> for Retirement",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Current cash funds on retirement","title":"Current Cash <br/> Funds on <br/> Retirement",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Accumlation income","title":"Accumlation <br/> Income",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Accumlation Expenditure","title":"Accumlation <br/> Expenditure",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                {"data":"Available retirement funds -(Surplus/ deficit)","title":"Available Retirement <Br/> Funds -(Surplus/ deficit)",render: $.fn.dataTable.render.number(',', '.', 0, '$'),"className":"dt-head-center"},
                ];


/*Data Set*/
 


/*Data Set*/ 
//$("#RetirementValueBasedOn").val(agebasedon); 

var count=0;
var oldval=0;
var olddata=0;
   
	d3.select("#CashFlwprojectionOnRtmnt").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmnt_ED").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmntAccm").selectAll("svg").remove();
	d3.select("#CashFlwprojectionOnRtmntAccm_ED").selectAll("svg").remove();

var ExpHeadercount=isValidObject(rdcflwTbl)?Number(rdcflwTbl.columns().header().length)-2:0;
var ExpHeadercountAccm=isValidObject(rdcflwTbl)?Number(rdcflwTbl.columns().header().length)-1:0;
//var ExpHeadercount = Number($("#generateproExptbl tbody tr td").length)-2
var IncHeadercount=isValidObject(rdcflwIncAssTbl)?Number(rdcflwIncAssTbl.columns().header().length)-2:0;
var IncHeadercountAccm=isValidObject(rdcflwIncAssTbl)?Number(rdcflwIncAssTbl.columns().header().length)-1:0;
//var IncHeadercount=Number($("#generateproIncometbl tbody tr td").length)-2;
var spouseage=intretspsage;

for(var i=intretslfage;i<=totAge;i++){ 
		
	var arrlist={};var arrlistAccm={};
			
			arrlist["Self Age"]=i+'<input type="hidden" value="'+(count+1)+'"/>'; //self age
			arrlist["Spouse Age"]=spouseage; //spouse age
			
			arrlistAccm["Self Age"]=i+'<input type="hidden" value="'+(count+1)+'"/>'; //self age
			arrlistAccm["Spouse Age"]=spouseage; //spouse age
			
			var annlIncm = $("#generateproIncometbl tbody").find("tr:eq("+(count)+")").find("td:eq("+IncHeadercount+")").text();
			annlIncm = annlIncm.replace("$","");
			annlIncm = annlIncm.replace(/,/g, "");	
			
			var annlIncmAccm = $("#generateproIncometbl tbody").find("tr:eq("+(count)+")").find("td:eq("+IncHeadercountAccm+")").text();
			annlIncmAccm = annlIncmAccm.replace("$","");
			annlIncmAccm = annlIncmAccm.replace(/,/g, "");	
			annlIncmAccm = Number(annlIncmAccm);
			
			var anlInc=Number(annlIncm);
			
			var annlExpnd= $("#generateproExptbl tbody").find("tr:eq("+(count)+")").find("td:eq("+ExpHeadercount+")").text();
			annlExpnd = annlExpnd.replace("$","");
			annlExpnd = annlExpnd.replace(/,/g, "");
			

			var annlExpndAccm= $("#generateproExptbl tbody").find("tr:eq("+(count)+")").find("td:eq("+ExpHeadercountAccm+")").text();
			annlExpndAccm = annlExpndAccm.replace("$","");
			annlExpndAccm = annlExpndAccm.replace(/,/g, "");
			annlExpndAccm = Number(annlExpndAccm);
				 
			var anlExp=Number(annlExpnd);
			
			arrlist["Annual Expenditure"]=RemDecimalNumber(anlExp);
			arrlistAccm["Accumlation Expenditure"]=RemDecimalNumber(annlExpndAccm);
			
			
			if(i == intretslfage){
				arrlist["Current cash funds on retirement"]=0;
				arrlist["Buffer fund for retirement"]=bufferfundamt;
				arrlist["Annual income"]= RemDecimalNumber(anlInc) -  RemDecimalNumber(bufferfundamt);
				
				arrlistAccm["Current cash funds on retirement"]=0;
				arrlistAccm["Buffer fund for retirement"]=bufferfundamt;
				arrlistAccm["Accumlation income"]= RemDecimalNumber(annlIncmAccm) -  RemDecimalNumber(bufferfundamt);
				
			}else{
				var prevcurrcash=dataset[dataset.length-1]["Current cash funds on retirement"]; 
				var prevbuffund = dataset[dataset.length-1]["Buffer fund for retirement"];
				var prevfinalfund = dataset[dataset.length-1]["Available retirement funds -(Surplus/ deficit)"];				
//				prevcurrcash = prevcurrcash.replace("$","");
//				prevcurrcash = prevcurrcash.replace(/,/g, "");
				prevcurrcash = (isNaN(prevcurrcash)) ? 0 : RemDecimalNumber(Number(prevcurrcash));
				
				var prevcurrcashAccm = datasetAccm[datasetAccm.length-1]["Current cash funds on retirement"]; 
				var prevbuffundAccm = datasetAccm[datasetAccm.length-1]["Buffer fund for retirement"];
				var prevfinalfundAccm = datasetAccm[datasetAccm.length-1]["Available retirement funds -(Surplus/ deficit)"];
				prevcurrcashAccm = (isNaN(prevcurrcashAccm)) ? 0 : RemDecimalNumber(Number(prevcurrcashAccm));
				
				arrlist["Current cash funds on retirement"]= (prevfinalfund > 0) ? (prevfinalfund * (1+bufferfundamtroi)) : RemDecimalNumber(prevfinalfund);
				arrlist["Buffer fund for retirement"]= RemDecimalNumber(prevbuffund * (1+bufferfundintrate));
				arrlist["Annual income"]= RemDecimalNumber(anlInc);
				
				arrlistAccm["Current cash funds on retirement"]= (prevfinalfundAccm > 0) ? (prevfinalfundAccm * (1+bufferfundamtroi)) : RemDecimalNumber(prevfinalfundAccm);
				arrlistAccm["Buffer fund for retirement"]= RemDecimalNumber(prevbuffundAccm * (1+bufferfundintrate));
				arrlistAccm["Accumlation income"]= RemDecimalNumber(annlIncmAccm);
			}		
			
			var total=arrlist["Current cash funds on retirement"] + (arrlist["Annual income"] - arrlist["Annual Expenditure"]);
			var totalAccm = arrlistAccm["Current cash funds on retirement"] + (arrlistAccm["Accumlation income"] - arrlistAccm["Accumlation Expenditure"]);
			
			arrlist["Available retirement funds -(Surplus/ deficit)"]=(total);  
			arrlistAccm["Available retirement funds -(Surplus/ deficit)"]=(totalAccm);  
				
			dataset.push(arrlist);
			datasetAccm.push(arrlistAccm);
			
			spouseage++;
			count++;
			
//			projOnRtddata.push({Date: i,Categories: [{Name: "Annual income",Value: anlInc }, { Name: "Annual Expenditure",Value: anlExp}],LineCategory: [{Name: "Available retirement funds -(Surplus/ deficit)",Value: total}]});
			
			annlincomexp.push({"Age":i,"Annual Income":arrlist["Annual income"],"Annual Expenditure":arrlist["Annual Expenditure"],"Available retirement funds -(Surplus/ deficit)":total});
			annlincomexpaccm.push({"Age":i,"Accumlation Income":arrlistAccm["Accumlation income"],"Accumlation Expenditure":arrlistAccm["Accumlation Expenditure"],"Available retirement funds -(Surplus/ deficit)":totalAccm})
		}
 
//genCashFlwProjChartOnRtrmnt(projOnRtddata);

if ($.fn.DataTable.isDataTable( '#generatetoamendincExp,#generatetoamendincExpAccm') ) {
	generatetoamendincExp.destroy();
	generatetoamendincExpAccm.destroy();
	$('#generatetoamendincExp').html("");
	$("#generatetoamendincExpAccm").html("");
}			 
 


	/*Generate Proper header*/
generatetoamendincExp=$('#generatetoamendincExp').DataTable( { 
		destroy: true,
	 	responsive: false,         
	    ordering: false,
	    searching: false,
	    scrollY:  "auto",
	    scrollX: "540px",
 	    scrollCollapse:true,
	    paging:false, 
	    filter:false,     
	    dom: '<<"top" ip>flt>', 
	    "columns": dataHeader,  
        data:dataset,
//        fixedColumns:   {rightColumns: 2 },
       	columnDefs: [
       	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
       	             {"targets" : [6],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
       	            	if ( sData < "0" ) {
                            $(nTd).css('color', 'red');
                            $(nTd).css('font-weight', 'bold');
       	            	}
       	            	 
       	             }}
       	             ],
		fnDrawCallback: function(oSettings) {
		    		if(this.fnSettings().bSorted){
		    			reorderSino('generatetoamendincExp');
		    		}
    	}    	
	}).draw();

generatetoamendincExpAccm =$('#generatetoamendincExpAccm').DataTable( { 
	destroy: true,
 	responsive: false,         
    ordering: false,
    searching: false,     
    scrollY:  "auto",
    scrollX: "500px",
	 scroller: true,
	    scrollCollapse:true,
    paging:false, 
    filter:false,     
    dom: '<<"top" ip>flt>', 
    "columns": dataHeaderAccm,  
    data:datasetAccm,
//    fixedColumns:   {rightColumns: 2 },
   	columnDefs: [
   	             {"className": "dt-right","targets": "_all","orderable": false,"searchable": false},
   	             {"targets" : [6],"fnCreatedCell":function(nTd, sData, oData, iRow, iCol){
   	            	if ( sData < "0" ) {
                        $(nTd).css('color', 'red');
                        $(nTd).css('font-weight', 'bold');
   	            	}
   	            	 
   	             }}
   	             ],
	fnDrawCallback: function(oSettings) {
	    		if(this.fnSettings().bSorted){
	    			reorderSino('generatetoamendincExpAccm');
	    		}
	}    	
}).draw();




finalchart = c3.generate({
    bindto: '#CashFlwprojectionOnRtmnt',
   
    title: {
        show: false,
        text: 'Cashflow Projection on Retirement',
        position: 'top-center',  
        padding: { top: 20, right: 20, bottom: 40, left: 50}
      },
    grid: {
        x: { show: true },
        y: { show: true }
    },
    zoom: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    data: {
    	json: annlincomexp,
    	keys :{x: 'Age',value: ['Annual Income', 'Annual Expenditure']},//,'Available retirement funds -(Surplus/ deficit)'
    	type : "bar",
    	types : {
    			 "Annual Income" : "bar",
    			 "Annual Expenditure" : "bar"
    			},//"Available retirement funds -(Surplus/ deficit)":	"area",
    	colors: {
    			'Annual Income': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; },
    		    'Annual Expenditure': function(d) { return d.value < 0 ? 'red' : '#EA738DFF'; }
    		    }
    },
    axis: {
    	 x: { label: 'Age'},
    	 y : {
    		 label: 'Amount',
             tick: {
                 format: d3.format("$,")
             },
             show: true
         }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Annual Income / Expenditure at Age ' + d; },
            value: function (value, ratio, id) {
                var format =  d3.format('$,');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    },
    size: {
        height: 480,
        width:660
    }
//    ,
//    color: {
//        pattern: ['green', 'red','#00cc00']
//    }
});



var finalchartED = c3.generate({
	
    bindto: '#CashFlwprojectionOnRtmnt_ED',
   
    title: {
        show: false,
        text: 'Available retirement funds - (Surplus/Deficit)',
        position: 'top-center',  
        padding: { top: 20, right: 20, bottom: 40, left: 50}
      },
    grid: {
        x: { show: true },
        y: { show: true }
    },
    zoom: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    data: {
    	json: annlincomexp,
    	keys :{x: 'Age',value: ['Available retirement funds -(Surplus/ deficit)']},//,'Available retirement funds -(Surplus/ deficit)'
    	type : "bar",
    	types : {
    			 "Available retirement funds -(Surplus/ deficit)" : "bar"
    			  },//"Available retirement funds -(Surplus/ deficit)":	"area",
    	colors: {
    	   		'Available retirement funds -(Surplus/ deficit)': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; }
    	}
    },
    axis: {
    	 x: { label: 'Age'},
    	 y : {
    		 label: 'Amount',
             tick: {
                 format: d3.format("$,")
             },
             show: true
         }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Available retirement funds at Age ' + d; },
            value: function (value, ratio, id) {
                var format =  d3.format('$,');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    },
    size: {
        height: 480,
        width:660
    }
//    ,
//    color: {
//        pattern: ['green', 'red','#00cc00']
//    }
});

d3.selectAll('#CashFlwprojectionOnRtmnt *,#CashFlwprojectionOnRtmnt_ED *').each(function (e) {
    if (d3.select(this).style('fill-opacity') == 0)
        d3.select(this).style('opacity', 0);
    d3.select(this).style('fill', d3.select(this).style('fill'));
    d3.select(this).style('stroke', d3.select(this).style('stroke'));
});
d3.selectAll('#CashFlwprojectionOnRtmnt text,#CashFlwprojectionOnRtmnt_ED text').each(function (e) {
    d3.select(this).style('font-size', d3.select(this).style('font-size'));
    d3.select(this).style('font-family', d3.select(this).style('font-family'));
});

// html2canvas does not recognize dy
d3.selectAll('#CashFlwprojectionOnRtmnt tspan,#CashFlwprojectionOnRtmnt_ED tspan').each(function (e) {
    // convert em to px
    if (d3.select(this).attr('dy').indexOf('em') !== -1 && d3.select(this).style('font-size').indexOf('px') !== -1) {
        d3.select(this).attr('dy', d3.select(this).attr('dy').replace('em', '') * d3.select(this).style('font-size').replace('px', ''));
    }

    if (d3.select(this).attr('dy') != 0) {
        d3.select(this.parentNode).attr('y', Number(d3.select(this.parentNode).attr('y')) + Number(d3.select(this).attr('dy')));
        d3.select(this).attr('dy', 0);
    }
});

var finalchartAccm = c3.generate({
    bindto: '#CashFlwprojectionOnRtmntAccm',
   
    title: {
        show: false,
        text: 'Accumulated Annual Income & Expenditure',
        position: 'top-center',  
        padding: { top: 20, right: 20, bottom: 40, left: 50}
      },
    grid: {
        x: { show: true },
        y: { show: true }
    },
    zoom: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    data: {
    	json: annlincomexpaccm,
    	keys :{x: 'Age',value: ['Accumlation Income', 'Accumlation Expenditure']},//,'Available retirement funds -(Surplus/ deficit)'
    	type : "bar",
    	types : {
    			 "Accumlation Income" : "area",
    			 "Accumlation Expenditure" : "area"
    			},//"Available retirement funds -(Surplus/ deficit)":	"area",
    	colors: {
    		    'Accumlation Income': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; },
    		    'Accumlation Expenditure': function(d) { return d.value < 0 ? 'red' : '#EA738DFF'; }
    		    }
    },
    axis: {
    	 x: { label: 'Age'},
    	 y : {
    		 label: 'Amount',
             tick: {
                 format: d3.format("$,")
             },
             show: true
         }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Accumlation Income / Expenditure at Age ' + d; },
            value: function (value, ratio, id) {
                var format =  d3.format('$,');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    },
    size: {
        height: 480,
        width:660
    }
//    ,
//    color: {
//        pattern: ['green', 'red','#00cc00']
//    }
});


var finalchartAccmED = c3.generate({
    bindto: '#CashFlwprojectionOnRtmntAccm_ED',
   
    title: {
        show: false,
        text: 'Accumulated Available retirement funds - (Surplus/Deficit)',
        position: 'top-center',  
        padding: { top: 20, right: 20, bottom: 40, left: 50}
      },
    grid: {
        x: { show: true },
        y: { show: true }
    },
    zoom: {
        enabled: true
    },
    legend: {
        position: 'bottom'
    },
    data: {
    	json: annlincomexpaccm,
    	keys :{x: 'Age',value: ['Available retirement funds -(Surplus/ deficit)']},//'Accumlation Income', 'Accumlation Expenditure',
//    	type : "bar",
    	types : {"Available retirement funds -(Surplus/ deficit)":	"area"},
    	colors: {
    		'Available retirement funds -(Surplus/ deficit)': function(d) { return d.value < 0 ? 'red' : '#97BC62FF'; }
        }
//    	 "Accumlation Income" : "bar",
//		 "Accumlation Expenditure" : "bar"
    },
    axis: {
    	 x: { label: 'Age'},
    	 y : {
    		 label: 'Amount',
             tick: {
                 format: d3.format("$,")
             },
             show: true
         }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Accumlation Available retirement funds - (Surplus/Deficit) at Age ' + d; },
            value: function (value, ratio, id) {
                var format =  d3.format('$,');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    },
    size: {
        height: 480,
        width:660
    }
//    ,
//    color: {
//        pattern: ['green', 'red','#00cc00']
//    }
});


d3.selectAll('#CashFlwprojectionOnRtmntAccm *,#CashFlwprojectionOnRtmntAccm_ED *').each(function (e) {
    if (d3.select(this).style('fill-opacity') == 0)
        d3.select(this).style('opacity', 0);
    d3.select(this).style('fill', d3.select(this).style('fill'));
    d3.select(this).style('stroke', d3.select(this).style('stroke'));
});
d3.selectAll('#CashFlwprojectionOnRtmntAccm text,#CashFlwprojectionOnRtmntAccm_ED text').each(function (e) {
    d3.select(this).style('font-size', d3.select(this).style('font-size'));
    d3.select(this).style('font-family', d3.select(this).style('font-family'));
});

// html2canvas does not recognize dy
d3.selectAll('#CashFlwprojectionOnRtmntAccm tspan,#CashFlwprojectionOnRtmntAccm_ED tspan').each(function (e) {
    // convert em to px
    if (d3.select(this).attr('dy').indexOf('em') !== -1 && d3.select(this).style('font-size').indexOf('px') !== -1) {
        d3.select(this).attr('dy', d3.select(this).attr('dy').replace('em', '') * d3.select(this).style('font-size').replace('px', ''));
    }

    if (d3.select(this).attr('dy') != 0) {
        d3.select(this.parentNode).attr('y', Number(d3.select(this.parentNode).attr('y')) + Number(d3.select(this).attr('dy')));
        d3.select(this).attr('dy', 0);
    }
});

var len=Number($("#generatetoamendincExp thead tr").find("th").length)-1;  

$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollHeadInner").css("width","100%;")
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th").css("text-align","center");
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th:eq('"+(Number(len)-1)+"')").css("background-color","#23C6C8").css("color","white");
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollHeadInner").find("table thead tr").find("th:eq('"+(Number(len)-2)+"')").css("background-color","#23C6C8").css("color","white");
  

$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollBody").find("table tbody tr").each(function(){
	$(this).find("td:eq(0)").css("text-align","center");
	$(this).find("td:eq(1)").css("text-align","center");
});
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq('"+(Number(len)-1)+"')").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollBody").find("table tbody tr").find("td:eq('"+(Number(len)-2)+"')").css("background-color","rgb(39, 220, 222)").css("color","#FFF").css("border","1px solid #FAFDFF").css("font-weight","bold");
	
$("#generatetoamendincExp_wrapper,#generatetoamendincExpAccm_wrapper").find(".dataTables_scrollBody").css("width","100%;");


}
function validationOnProjOfExp(){
	var $rdexpcount = RDExptbl.rows().count();	
	if($rdexpcount<1){
		applyToastrAlert("No Records found in Input Expenditure on retirement based on current cost !");
		$("#RDExpAddRow").focus(); 
		$("#RDExpAddRow").parent().css("border","2px solid #F25B5B");
		return false;
	}
	return true;
}
 
//function validationOnProjOfInc(){
//	var $rdinccount = RDInctbl.rows().count(); 
//	var $rdincasscount = RDIncAsstbl.rows().count();
//	applyErrorToastrAlert
//	if($rdinccount<1  && $rdincasscount<1){
//		applyToastrAlert("No Records found in Income to be received during retirement !");
//		$("#RDIncAddRow").focus(); 
//		$("#RDIncAddRow").parent().css("border","2px solid #F25B5B");
//		return false;
//	}
//	return true;
//}
 
