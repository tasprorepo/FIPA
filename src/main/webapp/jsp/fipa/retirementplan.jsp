 <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 <%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
 
 
<div id="accordion" class="panel-group">
	<div id="retireplandiv" class="accord-content">   
	<div class="panel-body">  
   	  <div class="row"> 
      <div class=" col-md-12">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-3 col-sm-3 col-xs-3">
<!-- 		<button type="button" class="btn btn-primary floatbtn rp-cf-btn-float"  id="btnRPCFAnalysis"> -->
<!-- 			 <span class="fa fa-bar-chart"></span>&nbsp;RP CF Analysis -->
<!-- 		</button> -->
		
		
		<div class="btnStyle"> 
					    <button type="button" id="btnRPCFAnalysis" class="btn BtnFIPASRCH StylishSRCH floatbtn rp-cf-btn-float"  
					    style="position: fixed;top: 136px;">
					      <span class="txt">RP CF Analysis</span>
					      <span class="round"><i class="fa fa-bar-chart"></i></span>
					    </button> 
			    	</div>
		
		</div>
		 <div class="col-md-3 col-sm-3 col-xs-3 text-center">
           <label class="control-label">SELF</label>
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3 text-center">
           <label class="control-label">SPOUSE</label>
         </div> 
         <div class="col-md-3 col-sm-3 col-xs-3 text-center">
           <label class="control-label">FAMILY</label>
         </div> 
       </div> 
      </div>    
      </div> 
   </div> 
   <div id="RET_APD2"> 
   <div id="retMandatoryFlds"> <!--  Retirement Screen Mandatory Fields -->
   		<!-- <div class="clearspace50"></div> -->
   		<span class="panelHeaderTitle">Retirement Details</span>
   		&nbsp; <a class="btn btn-default addinfoicon" id="mandatoryRetFlds" ></a>
   		<br>    
   		<div class="form-group">  
	<div class="row">
	 <div class="clearspace10"></div> 
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
		<div class="fipaFldLblText mandFldastrks" id="focusfmIntage">Intended
								retirement age<span class="mandFldastrks">*</span></div>
		</div>
		 <div class="col-md-3 col-sm-3 col-xs-3">
		 <div class=" input-group input-group-sm fld-resp-sm">  
					            <input type="text" name="retSelfAge"
							id="retSelfAge" class="form-control numbers clsfipaClient applyEvntYrs" 
							onchange="calcRtrmntPln(this);">
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div> 
          
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text" name="retSpsAge"
							id="retSpsAge" class="form-control numbers clsfipaSpouse applyEvntYrs" 
							onchange="calcRtrmntPln(this);">
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div>
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
           &nbsp; 
       </div> 
      </div>  
      </div>
       
      <div class="form-group">  
      <div class="row">
		<div class="col-md-4 col-sm-4 col-xs-4 text-right">
		<div class="fipaFldLblText mandFldastrks"  id="focusfmRdAge">Retirement
								age based on<span class="mandFldastrks">*</span></div>
		</div>
		 <div class="col-md-6 col-sm-6 col-xs-6"> 
		 <select class="form-control fld-resp"
							id="retAgeBasedon" style="margin-left: 50px"
							name="retAgeBasedon" onchange="calcRtrmntPln(this);">
								<option value="">--SELECT--</option>
								<option value="Self">Self</option>
								<option value="Spouse">Spouse</option>
						</select> 
         </div> 
         
         <div class="col-md-2 col-sm-2 col-xs-2">
           &nbsp; 
       </div> 
      </div>   
      		</div>
      		
      		<div class="form-group">  
      <div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
			<div class="fipaFldLblText "  id="focusfmyrstord" style="text-align: right;font-weight: bold;">Yr to retirement
			 </div> 
		</div>
		 <div class="col-md-2 col-sm-2 col-xs-2">
		 <div class="input-group input-group-sm fld-resp"  style="margin-left:50px">  
					            <input type="text" name="retYrstoret" id="retYrstoret" class="form-control numbers readOlyCursor applyEvntYrs"  readonly="true"/>
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div>
          
         </div> 
       <div class="col-md-2 col-sm-2 col-xs-2">
          &nbsp;
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
           &nbsp; 
       </div> 
      </div>
      </div> 
      <div class="form-group">  
      <div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText mandFldastrks"  id="focusfmcoyrs"  style="text-align: right">Coordinated retirement age
				<span class="mandFldastrks">*</span></div>
						 </div>
		 <div class="col-md-3 col-sm-3 col-xs-3">
		 <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text" name="retSelfCoordinateage"
							id="retSelfCoordinateage" class="form-control numbers clsfipaClient applyEvntYrs"
							 />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div>
         </div> 
         <div class="col-md-3 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm">  
					            <input type="text" name="retSpsCoordinateage"
							id="retSpsCoordinateage" class="form-control numbers clsfipaSpouse applyEvntYrs"  />
							 <span class="input-group-addon">
					                <span class="glyphicon" id="symbolYrs"></span>
					            </span>
							</div>
         </div> 
          <div class="col-md-2 col-sm-2 col-xs-2">
           &nbsp; 
       </div> 
      </div> 
      </div>
      <div class="form-group">  
       <div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText mandFldastrks" id="focusfmprojlife"   style="text-align: right">Projected
								life expectancy (Age)<span class="mandFldastrks">*</span></div>
		 </div>
		 <div class="col-md-3 col-sm-3 col-xs-3">
		<div class="input-group input-group-sm fld-resp-sm"> 
					       <input type="text" name="retSelfProjage"
							id="retSelfProjage" class="form-control numbers clsfipaClient applyEvntYrs" 
							onchange="calcRtrmntPln(this);" />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
         </div> 
         <div class="col-md-3 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSpsProjage"
							id="retSpsProjage" class="form-control numbers clsfipaSpouse applyEvntYrs" 
							onchange="calcRtrmntPln(this);" />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
         </div> 
          <div class="col-md-2 col-sm-2 col-xs-2">
           &nbsp; 
       </div> 
      </div> 
      		</div>
      		
      	<div class="form-group">  
      		<div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText mandFldastrks" id="focusfmprojlvyrs"  style="text-align: right">
								Projected Living years in retirement<span class="mandFldastrks">*</span></div>
					</div>
		 
		 <div class="col-md-3 col-sm-3 col-xs-3">
		<div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSelfLivyrs" id="retSelfLivyrs"
							class="form-control numbers applyEvntYrs"  >
							 <span class="input-group-addon" >
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSpsLivyrs"
							id="retSpsLivyrs" class="form-control numbers clsfipaSpouse applyEvntYrs"  >
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
           <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retFamLivyrs" id="retFamLivyrs"
							class="form-control numbers clsfipaFamily applyEvntYrs"  >
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolYrs"></span>
					         </span>
					       </div>
       </div> 
       </div>
       </div>
			
			<div class="form-group">  
			<div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText"  id="focusfmroi"  style="text-align: right">
								<span class="mandFldastrks">Projected ROI after retirement*
								</span><a class="btn btn-default addinfoicon" id="popretSelfProjroi" ></a></div>
						
					</div>
		 
		<div class="col-md-3 col-sm-3 col-xs-3">
		<div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSelfProjroi"
							id="retSelfProjroi" class="form-control numbers clsfipaClient applyEvntpCent"
							  />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					       </div>
         </div> 
       <div class="col-md-3 col-sm-3 col-xs-3">
          <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retSpsProjroi"
							id="retSpsProjroi" class="form-control numbers clsfipaSpouse applyEvntpCent"
						 />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					       </div>
         </div> 
        <div class="col-md-2 col-sm-2 col-xs-2">
           <div class="input-group input-group-sm fld-resp-sm"> 
						<input type="text" name="retFamProjroi"
							id="retFamProjroi" class="form-control numbers clsfipaFamily applyEvntpCent"
							  />
							 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolprCent"></span>
					         </span>
					       </div>
       </div> 
      </div>
      </div>
      
      <div class="form-group hidden">  
			<div class="row">
		 <div class="col-md-4 col-sm-4 col-xs-4 text-right">
				<div class="fipaFldLblText"   style="text-align: right;font-weight: bold;"> 
				Selected Retirement Sum (SdRS)
				<a class="btn btn-default addinfoicon" id="popretSdRs" ></a>
				</div> 
					</div>
		 
		 <div class="col-md-3 col-sm-3 col-xs-3">
		 
		 <select name="retSelfSDRSAmt" id="retSelfSDRSAmt" class="form-control fld-resp-mm">
              <option value="">--SELECT--</option>  
              <c:if test="${not empty SDRS_AMT_LIST}">
						<c:forEach var="sdrsamt" items="${SDRS_AMT_LIST}">
							<option value="${sdrsamt[2]}">BRS - ${sdrsamt[2]}</option>
							<option value="${sdrsamt[3]}">FRS - ${sdrsamt[3]}</option>
							<option value="${sdrsamt[4]}">ERS - ${sdrsamt[4]}</option>
						</c:forEach>
					</c:if>
             </select> 
             
<!-- 		<div class="input-group input-group-sm fld-resp-sm">  -->
<!-- 		 <span class="input-group-addon"> -->
<!-- 					              <span class="glyphicon" id="symbolUsd"></span> -->
<!-- 					         </span> -->
<!-- 						<input type="text" name="retSelfSDRSAmt" -->
<!-- 							id="retSelfSDRSAmt" class="form-control numbers clsfipaClient applyEvntUsd"/>  -->
<!-- 					       </div> -->
         </div> 
       <div class="col-md-3 col-sm-3 col-xs-3">
       <select name="retSpsSDRSAmt" id="retSpsSDRSAmt" class="form-control fld-resp-mm clsfipaSpouse">
              <option value="">--SELECT--</option>  
              <c:if test="${not empty SDRS_AMT_LIST}">
						<c:forEach var="sdrsamt" items="${SDRS_AMT_LIST}">
							<option value="${sdrsamt[2]}">BRS - ${sdrsamt[2]}</option>
							<option value="${sdrsamt[3]}">FRS - ${sdrsamt[3]}</option>
							<option value="${sdrsamt[4]}">ERS - ${sdrsamt[4]}</option>
						</c:forEach>
					</c:if>
             </select>
             
          <!-- <div class="input-group input-group-sm fld-resp-sm"> 
           <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
						<input type="text" name="retSpsSDRSAmt"
							id="retSpsSDRSAmt" class="form-control numbers clsfipaSpouse applyEvntUsd" /> 
					       </div> -->
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
         &nbsp;
         <select name="retFamSDRSAmt" id="retFamSDRSAmt" class="form-control fld-resp-mm clsfipaFamily hidden">
              <option value="">--SELECT--</option>  
              <c:if test="${not empty SDRS_AMT_LIST}">
						<c:forEach var="sdrsamt" items="${SDRS_AMT_LIST}">
							<option value="${sdrsamt[2]}">BRS - ${sdrsamt[2]}</option>
							<option value="${sdrsamt[3]}">FRS - ${sdrsamt[3]}</option>
							<option value="${sdrsamt[4]}">ERS - ${sdrsamt[4]}</option>
						</c:forEach>
					</c:if>
             </select>
           <!-- <div class="input-group input-group-sm fld-resp-sm"> 
            <span class="input-group-addon">
                         <span class="glyphicon" id="symbolUsd"></span>
			    </span>
						<input type="text" name="retFamSDRSAmt" 
								id="retFamSDRSAmt" class="form-control numbers clsfipaFamily applyEvntUsd"  />
							
					       </div> -->
       </div> 
      </div>
      </div>
      
        </div> <!-- End of Retirement Screen Mandatory Fields -->
	  </div>
	  
	  
	  
			<div class="row">
	  <hr class="border"/>
	  </div> 
	  
	  
	  <!-- CPF Life & Top UP Details -->
	  <span class="headerlabel">CPF Life & Top-Up Details</span><br>
	
	<div class="form-group">  
		<div class="clearspace20"></div> 
		<div class="row">
	 	<div class="clearspace10"></div> 
		 <div class="col-md-3 col-sm-3 col-xs-3 text-right">
		<label class="control-label">I have pledged my property to CPF</label>
		</div>
		 <div class="col-md-2 col-sm-2 col-xs-2">
		 <select class="form-control fld-resp-sm"
							id="retPropToCPF"
							name="retPropToCPF" >
								<option value="">--SELECT--</option>
								<option value="Y">Yes</option>
								<option value="N">No</option>
						</select>           
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3 text-right">
          <label class="control-label">Under Medical Grounds Scheme?</label>
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
         <select class="form-control fld-resp-sm" id="retMedGround" name="retMedGround" >
								<option value="">--SELECT--</option>
								<option value="Y">Yes</option>
								<option value="N">No</option>
						</select>
       </div> 
       
      <div class="col-md-2 col-sm-2 col-xs-2">
          <label class="control-label">&nbsp;</label>
      </div> 
      </div>  
      </div>
      
      
      
      
      
      <div class="form-group">  
	<div class="row">
	 <div class="clearspace10"></div> 
		 <div class="col-md-3 col-sm-3 col-xs-3 text-right">
		<label class="control-label">Top up RA to ERS</label>
		</div>
		 <div class="col-md-2 col-sm-2 col-xs-2">
		 <select class="form-control fld-resp-sm"
							id="retTopUpRAERS"
							name="retTopUpRAERS" >
								<option value="">--SELECT--</option>
								<option value="Y">Yes</option>
								<option value="N">No</option>
						</select>           
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3 text-right">
          <label class="control-label">Has existing annuity/ pension?</label>
         </div> 
         <div class="col-md-2 col-sm-2 col-xs-2">
         <select class="form-control fld-resp-sm" id="retExistAnnuity" name="retExistAnnuity" >
								<option value="">--SELECT--</option>
								<option value="Y">Yes</option>
								<option value="N">No</option>
						</select>
       </div> 
       
      <div class="col-md-2 col-sm-2 col-xs-2">
          <label class="control-label">&nbsp;</label>
         </div> 
         
      </div>  
      </div>
      
       
	
		<div class="row">
	  <hr class="border"/>
	  </div> 
	  
	<div class="row">    
    <div class="col-md-12">
	<div class="clearspace10"></div> 
     <span class="headerlabel">Funds Transfer from CPF Account to CPF Life</span> 
    <div class="table-responsive">
		<div class="btn-group pull-right funcToDisable hidden" role="group"> 
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="CpfLifeDRow"></button>
				</div>
				<div class="btn-group pull-right funcToDisable hidden" role="group" style="margin-right: 10px;"> 
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="CpfLifeARow"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="CpfLifeERow"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DOthRet"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="VOthRet"></button> -->
  				 </div>
			</div>	  
			<div class="col-md-12">
		<table id="retCpfPayoutTable" class="dataTable table-bordered table-striped display hover" style="width:100%">
					<thead> 
						<tr>
							<th>#</th>
							<th>Select</th>
							<th><div style="width:50px">Age</div></th> 
							<th><div style="width:150px">CPF Life Type</div></th>
							<th><div style="width:150px">CPF Life Premium&nbsp;<small>($)</small></div></th>
							<th><div style="width:150px">CPF Life Pay Out Income&nbsp;<small>($)</small></div></th>
				 			<th><div style="width:150px">Funds Transferred From&nbsp;RA ($)</div></th> 
						</tr> 
						  
					</thead> 
					<tbody>   
					</tbody> 
				</table> 
				</div>
				<!-- <div class="col-md-4">&nbsp;</div> -->
		</div>
		
		<div class="col-md-12">
		<div class="clearspace10"></div> 
		<span class="panelHeaderTitle">Disclaimer</span><br> 
		<ul>
		  <li><img src="images/menuicons/bullets.png" width="1%"/>
		  		&nbsp;Assuming the property pledge made is sufficient.</li>
		  <li><img src="images/menuicons/bullets.png" width="1%"/>
		  		&nbsp;Members who didn't choose what CPF Life plans, would by default, fall under the Standard Plan.</li>
		  <li><img src="images/menuicons/bullets.png" width="1%"/>
		  		&nbsp;The CPF Life pay out is assumed to be paid out once member reaches the pay out eligibility age.</li>
		  <li><img src="images/menuicons/bullets.png" width="1%"/>
		  		&nbsp;The CPF Life pay out is an estimated amount, taking the minimum amount of the range given by CPF for the respective CPF Life plans.</li>
		</ul>  
		 
		</div> 
		</div> 
	<!--changes done 19/06/2019 -->
	<div class="row">
	  <hr class="border"/>
	  </div> 
	<div class="row">
	<span class="headerlabel">CPF Life Pay Out Income</span>
	</div>
	<div class="row">    
    <div class="col-md-10"   id="retcpflifpayIncome">
	<div class="clearspace10"></div> 
     
     <div class="col-md-9"> 
		<table id="retCpfPayoutTableReplica" class="dataTable table-bordered table-striped display hover" style="width:100%">
					<thead> 
						<tr>
							<th><div style="width:20px">#</div></th> 
								<th><div style="width:100px">Retirement Scheme</div></th>
								<th><div style="width:130px">Pay out year</div></th>
								<th><div style="width:130px">Monthly<small>($)</small></div></th> 
								<th><div style="width:130px">Annually<small>($)</small></div></th>
						</tr> 
						  
					</thead> 
					<tbody>
						 <c:if test="${not empty CPF_LIFE_PAYOUT}">
						 <c:forEach var="mastdata" items='${CPF_LIFE_PAYOUT}'  varStatus="mc">
						 	<tr>
								<td>${mc.count}</td>
								<td>${mastdata.retScheme}</td>
								<td>${mastdata.payoutYear}</td>
								<td><fmt:formatNumber type="number" pattern="$###.###" value="${mastdata.monthlyAmt}" />  
								</td>
								<td><fmt:formatNumber type="number" pattern="$###.###" value="${mastdata.yearlyAmt}" /></td>
							</tr>
						 </c:forEach>
						
						</c:if>  
					</tbody> 
				</table>
		</div> 
		</div>
		
		 
		</div>
	  <!--  -->
	 
	  <div class="row">
	  <hr class="border"/>
	  </div> 
	   
	    <span class="headerlabel">  
				Retirement Needs <sup><span class="label label-info">
				Living Needs during retirement(today's cost)</span></sup>
	</span><br>
	  <span class="panelHeaderSubTitle">  
			
	</span><br>
	
	
	   <div class="row">   
    <div class="col-md-10"> 
		<table class="table table-borderless">
				 <thead> 
		<tr>
			<th class="text-center" style="border-bottom: 1px solid #465A65;">Description</th>
			<th class="text-center" style="border-bottom: 1px solid #465A65;">Annual Amount Needed($)</th>
			<th class="text-center" style="border-bottom: 1px solid #465A65;">Co-ordinated Retirement Age(yrs)&nbsp;
								<a class="btn btn-default addinfoicon" id="popcoretage" ></a></th>
			<th class="text-center" style="border-bottom: 1px solid #465A65;">Projected Living Years in retirement(yrs)&nbsp;
								<a class="btn btn-default addinfoicon" id="popprojlvyrs" ></a></th>
		</tr>
		<tr>
		 <td class="border"></td>
		 </tr>
		</thead>
		<tbody>
		<tr><td><div  id="focusfmlvself"  ><label class="control-label">Self</label></div></td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-mm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="retSelfAnnlexpdamt"
							id="retSelfAnnlexpdamt" 
							class="form-control numbers clsfipaClient applyEvntUsd"  />
							
					       </div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm"> 
				<input type="text" maxlength="22" class="form-control numbers clsfipaClient applyEvntYrs" name="retSelfCoordretage" 
				id="retSelfCoordretage">
				 <div class="input-group-addon"> 
				<span class="glyphicon addYearSign" id="symbolYrs"></span> </div> 
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm"> 
					<input type="text" maxlength="22" class="form-control numbers clsfipaClient applyEvntYrs" name="txtFldSlfLvProAge" id="txtFldSlfLvProAge">
					 <div class="input-group-addon"> 
					<span class="glyphicon addYearSign" id="symbolYrs"></span> </div> 
					</div>
		</td>
		</tr>
		<tr><td><div  id="focusfmlvsps"  ><label class="control-label">Spouse</label></div></td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-mm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="retSpsAnnlexpdamt"
							id="retSpsAnnlexpdamt" class="form-control numbers clsfipaSpouse applyEvntUsd" />
							</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm"> 
				<input type="text" maxlength="22" class="form-control numbers clsfipaSpouse applyEvntYrs" 
				name="retSpsCoordretage" id="retSpsCoordretage">
				 <div class="input-group-addon"> 
				<span class="glyphicon addYearSign" id="symbolYrs"></span> </div> 
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm"> 
					<input type="text" maxlength="22" class="form-control numbers clsfipaSpouse applyEvntYrs" 
					name="txtFldSpsLvProAge" id="txtFldSpsLvProAge">
					 <div class="input-group-addon"> 
					<span class="glyphicon addYearSign" id="symbolYrs"></span> </div> 
					</div>
		</td>
		</tr>
		<tr><td><div  id="focusfmlvfam">
		<label class="control-label">Family</label></div></td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-mm"> 
						 <span class="input-group-addon">
					              <span class="glyphicon" id="symbolUsd"></span>
					         </span>
					         <input type="text" name="retFamAnnlexpdamt"
							id="retFamAnnlexpdamt" class="form-control numbers clsfipaFamily applyEvntUsd" />
							</div>
							</td>
		 
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm"> 
				<input type="text" maxlength="22" class="form-control numbers applyEvntYrs clsfipaFamily" name="retFamCoordretage" id="retFamCoordretage">
				 <div class="input-group-addon"> 
				<span class="glyphicon addYearSign" id="symbolYrs"></span> </div> 
				</div>
		</td>
		<td align="center">
		<div class="input-group input-group-sm fld-resp-sm"> 
					<input type="text" maxlength="22" class="form-control numbers clsfipaFamily applyEvntYrs" 
					name="txtFldFamLvProAge" id="txtFldFamLvProAge">
					 <div class="input-group-addon"> 
					<span class="glyphicon addYearSign" id="symbolYrs"></span> </div> 
					</div>
		</td>
		</tr>
		</tbody>
		</table>
		</div>
		</div>
	  
	  
	
	  
	  
	  
	  
	  <div class="row">
	  <hr class="border"/>
	  </div> 
	  
	  <div class="row">
	  		 <div class="col-md-7"><span class="panelHeaderTitle">Other payment to be made during retirement</span> </div>
			<div class="col-md-5">
				<div class="table-responsive">
					<div class="btn-group pull-right funcToDisable" role="group"> 
							<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DOthRet" disabled="true"></button>
					</div>
					<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;"> 
							<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="AOthRet"></button>
							<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EOthRet" disabled="true"></button>
	<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DOthRet"></button> -->
	<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="VOthRet"></button> -->
	  				 </div>
				</div>	 
			</div>	  
	  </div>
	  
	  <div class="row">
	  		<div class="col-md-12">
				<table id="OthRetPlgtbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					 <thead> 
						<tr>
						<th>#</th><!--changes done 19/06/2019 -->
					<!-- 	<th>Select</th> -->
						<th><div class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelOthRetPlgtbl" name="SelOthRetPlgtbl" onclick="SelAllOthRetPlgtbl(this)"><label for="SelOthRetPlgtbl" >&nbsp;</label></div></th>
						<th><div style="width:150px">Types of payment<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:100px">Annual<br/>Expenditure<br/><small>($)</small></div></th>
						<th><div style="width:50px">Escalation<br/><small>(%)</small></div></th>
						<th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Payment Starts<br/><small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Payment Ends<br/><small>(yrs)</small></div></th>
						<th><div style="width:150px">Remarks</div></th>
						</tr>
					</thead>
					<tbody></tbody>
			  </table>
			  </div>
	  
	  
	  </div>
	    
	 
			
		<div class="row">
	  		<hr class="border"/>
	  	</div> 
	  	
	  	<div class="row">
	  		<div class="col-md-7"><span class="panelHeaderTitle">Income to be received during retirement</span> </div>
			<div class="col-md-5">
				<div class="table-responsive">
					<div class="btn-group pull-right funcToDisable" role="group"> 
							<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DIncRet" disabled="true"></button>
					</div>
					<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;"> 
							<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="AIncRet"></button>
							<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EIncRet" disabled="true"></button>
	<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DIncRet"></button> -->
	<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="VIncRet"></button> -->
	  				</div>				 
				</div> 
			</div>
	  	</div>
		
		<div class="row">
			<div class="col-md-12">
				<table id="IncRetPlgtbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					 <thead> 
						<tr>
						<th>#</th><!--changes done 19/06/2019 -->
						<!-- <th>Select</th> -->
						<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelIncRetPlgtbl" name="SelIncRetPlgtbl" onclick="SelAllIncRetPlgtbl(this)"><label for="SelIncRetPlgtbl">&nbsp;</label></div></th>
						<th><div style="width:130px">Classification<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:140px">Description</div></th>
						<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:100px">Amount of Income<br/><small>($)</small></div></th>
						<th><div style="width:50px">Escalation Rate<br/><small>(%)</small></div></th>
						<th><div style="width:50px">ROI<br/><small>(%)</small></div></th>
						<th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Income Starts<br/><small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Income Ends<br/><small>(yrs)</small></div></th>
						</tr>
					</thead>
					<tbody></tbody>
			  	</table>
			  </div>		
		</div>
		
		<div class="row">
	  		<hr class="border"/>
	  	</div> 
			  <div class="row">
		 		<div class="col-md-9"> 
					<span class="panelHeaderTitle">Income and assets available for retirement
					</span>&nbsp; <a class="btn btn-default addinfoicon" id="fetchfromotherscreen" ></a>
		 			 
				</div> 
				<div class="col-md-3">
					<div class="table-responsive">
				<div class="btn-group pull-right funcToDisable" role="group"> 
						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DIncAssRet" disabled="true"></button>
				 </div>
				<div class="btn-group pull-right funcToDisable" role="group" style="margin-right: 10px;"> 
						<button type="button"  class="btn btn-default navbar-btn addRow-icon" id="AIncAssRet"></button>
						<button type="button"  class="btn btn-default navbar-btn editRow-icon" id="EIncAssRet" disabled="true"></button>
<!-- 						<button type="button"  class="btn btn-default navbar-btn delRow-icon" id="DIncAssRet"></button> -->
<!-- 						<button type="button"  class="btn btn-default navbar-btn viewRow-icon" id="VIncAssRet"></button> -->
  				 </div>
				 
				</div> 
				</div>
				</div>
				<div class="row">
				<div class="col-md-12">
				<table id="IncAssRetPlgtbl" class="dataTable table-bordered table-striped display hover" style="width: 100%">
					 <thead> 
						<tr>
						<th>#</th><!--changes done 19/06/2019 -->
						<!-- <th>Select</th> -->
						<th><div  class="checkbox checkbox-primary text-center"><input type="checkbox" id="SelIncAssRetPlgtbl" name="SelIncAssRetPlgtbl" onclick="SelAllIncAssRetPlgtbl(this)"><label for="SelIncAssRetPlgtbl">&nbsp;</label></div></th>
						<th><div style="width:130px">Classification<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:140px">Description</div></th>
						<th><div style="width:80px">Frequency<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:100px">Amount of Income<br/><small>($)</small></div></th>
						<th><div style="width:50px">Escalation Rate<br/><small>(%)</small></div></th>
						<th><div style="width:50px">ROI<br/><small>(%)</small></div></th>
						<th><div style="width:70px">Age Based on<span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Income Starts<br/><small>(yrs)</small><span class="mandFldastrks">*</span></div></th>
						<th><div style="width:50px">Age Income Ends<br/><small>(yrs)</small></div></th>
						</tr>
					</thead>
					<tbody></tbody>
			  </table>
			  </div>
			  	  
			  
			 
		</div>
		
		<!-- </fieldset> -->
  </div>
</div>
      </div>
      
   
	
 
	

	
 
