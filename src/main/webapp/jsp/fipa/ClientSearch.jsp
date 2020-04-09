<!--  <span class='panelHeaderTitle'>Search Client By</span> -->


<div class="panel-group" style="height:auto;overflow-y:hidden">  
 <div id="typesofappsec" class="accord-content"  >  
      <div class="panel-body" > 
      <div class="table-responsive"> 
      
      	<div class="col-md-12">  
      		<div class="row">
      			<label for="txtFldSrchCustName" class="col-sm-2 control-label alignRight">Name</label>
      			<div class="col-sm-5">
      				 <div class="form-group">
				      <input type="text"  id="txtFldSrchCustName" name="txtFldSrchCustName" class="srchtextflds" onchange="clearClntSrchRows();"
				      onkeypress="clearClntSrchRows();" tabIndex="1"/>
			  		</div>
      			</div>
      			<div class="col-sm-5">
      				<div class="btnStyle" style="padding-top: 20px;">
			       		&nbsp;&nbsp;
					    <button type="button"  id="btnSrchProfile" class="btn BtnFIPASRCH StylishSRCH" onclick="fipaSearch()"  tabIndex="3">
					      <span class="txt">Search</span>
					      <span class="round"><i class="fa fa-search"></i></span>
					    </button> 
			    	</div> 
      			</div>
      		</div>
      		<div class="row">
      			<label for="txtFldSrchCustNric" id="lblSrchNric" class="col-sm-2 control-label alignRight">NRIC/ FIN / Passport </label>
      			
      			<div class="col-sm-5">
      				<div class="form-group">
      					<input type="text" id="txtFldSrchCustNric" name="txtFldSrchCustNric" class="srchtextflds" onchange="clearClntSrchRows();"     onkeypress="clearClntSrchRows();"  tabIndex="2"/>
      				</div>
      			</div>
			      
      		</div>
		</div> 
		<div class="col-md-12">
			 <div class="middle-line"></div>  
			 <span class="pull-left grpBoxTextTitle">Search Results</span>
		 </div> 
		 
		 
		 <div class="col-md-12">
			<table id="ClientSearchTable"
				class="dataTable table-striped table-bordered display hover"
				style="width: 100%;">
				<thead>
		
					<tr>
						<th>#</th>
						<th>Select</th>
						<th><div style="width: 160px">Client Name</div></th>
						<th>NRIC</th>
						<th>Email</th>
						<th>Contacts</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							id="imgFIPAProspect" />FIPA</th>
						<th><img src="images/menuicons/green-f.png" width="20px"
							id="imgFPMSClient" />FPMS</th>
						<th><img src="images/menuicons/blue-f.png" width="20px"
							style="margin-right: -10px" id="imgBoth1" /> &nbsp;<img
							src="images/menuicons/green-f.png" width="20px" id="imgBoth2" />Both
						</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>

		</div>
      
      </div>
      
      	
		
      </div>
 </div>
</div>





