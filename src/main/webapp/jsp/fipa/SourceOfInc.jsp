<div id="accordion" class="panel-group">
	<div id="sourceincomediv" class="accord-content"  style="">

 <!--  <span class="panelHeaderTitle">
 Sources of Income - Inflow</span> -->
		<div class="panel-body">
		 <!-- <div class="col-md-12">     
	<div class="form-group">
	<div class="row">
		<div class="col-md-3 col-sm-3 col-xs-3">
		&nbsp;
		</div>
		 <div class="col-md-3 col-sm-3 col-xs-3" style="text-align:center;">
           <span class="fipaFldLblTextbold">SELF</span>
         </div> 
        <div class="col-md-3 col-sm-3 col-xs-3" style="">
           <span class="fipaFldLblTextbold">SPOUSE</span>
         </div> 
         <div class="col-md-3 col-sm-3 col-xs-3" style="">
           <span class="fipaFldLblTextbold">JOINT/FAMILY</span>
         </div> 
       </div> 
      </div>    
      </div>  -->
		<div class="panelHeaderSubTitle">Employment Income</div>
		
				 <div class="table-responsive" id="employeincomediv">
<!-- 				 table-borderless --> 
			<fieldset class="fieldsetClsborder"> 
   		<div class="clearspace40"></div>  
			 
				<table class="display nowrap table  table-bordered "  id="tblssourceofincome"> 
					<col width="5%">
					<col width="30%">
					<col width="5%">
					<col width="5%">
					<col width="20%">
					<col width="20%">
					<col width="20%">
					<thead>
						<tr>
							<td colspan="4">&nbsp;</td>
							<td align="center"><span class="fipaFldLblTextbold">SELF</span>	</td>
							<td align="center"><span class="fipaFldLblTextbold">SPOUSE</span>	</td>
							<td align="center"><span class="fipaFldLblTextbold">JOINT/FAMILY</span>	</td>
						</tr>
					</thead> 
					<tbody> 
<!-- 1 -->
					<tr valign="top">
					<td rowspan="3">
							<div > 
							  <img src="images/menuicons/empinc.png" class="img-rounded" width="70" height="70" />
							</div>
							</td>
							
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 Monthly Gross Income 
								</div>
							</td>    
							<td><span class="label label-info">OW</span></td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;<!-- Icons space -->
								</div>
							</td>
							<td>   
							<div class="input-group input-group-sm fld-resp-md"  >
								<div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolUsd"></span>
							   </div>
							   
							<input  type="text" class="form-control numbers clsfipaClient applyEvntUsd" 
						      	name="incsrcSelfEmpMonthly" id="incsrcSelfEmpMonthly" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);estMonthlyIncome(this,'Self')"
								 ></input>
							 </div> 
							</td> 
							
							
							<td>
							<div class="input-group input-group-sm fld-resp-md" >
								<div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolUsd"></span> </div>
								  <input type="text"  class=" form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"
							    name="incsrcSpsEmpMonthly" id="incsrcSpsEmpMonthly"
								 onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);estMonthlyIncome(this,'Spouse')"
								 ></input>
							 </div>
							</td>
							
							
							<td>
							<div class="input-group input-group-sm fld-resp-md" >
								<div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolUsd"></span> </div>
								  <input type="text"  class=" form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"
							    name="incsrcJointEmpMonthly" id="incsrcJointEmpMonthly" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);"
								 ></input>
							 </div>
							</td>
							
						 
							
							
					</tr>
					
					<tr valign="top"> 
					<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Increment
								</div>
							</td> 
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;<!-- Icons space -->
								</div>
							</td>
							<td>  
<!-- 							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SLF);"  -->
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input type="text"  class="form-control numbers clsfipaClient applyEvntpCent" 
						      	name="incsrcSelfEmpIncr" id="incsrcSelfEmpIncr" 
						      	></input>
								 <div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolprCent"></span> </div>
								 </div> 
								 </td>
								 
							
						<td>   
<!-- 						onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SPS);" -->
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input type="text"  class="form-control numbers clsfipaSpouse applyEvntpCent" 
						      	name="incsrcSpsEmpIncr" id="incsrcSpsEmpIncr" 
						      	/>
							 <div class="input-group-addon" > 
							  <span class="glyphicon" id="symbolprCent"></span> </div>
						 </div> 
						</td>
					
					
					<td>   
					
<!-- 						      	onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_JOINT);" -->
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input type="text"  class="form-control numbers clsfipaFamily applyEvntpCent" 
						      	name="incsrcJointEmpIncr" id="incsrcJointEmpIncr"/>
								 <div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolprCent"></span> </div>
								 </div> 
								 </td>
					 
								 
								 
					</tr>
					
					
					<tr valign="top"> 
					<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Period
								</div>
							</td> 
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;<!-- Icons space -->
								</div>
							</td>
							<td>
<!-- 							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SLF);" -->
							<div class="input-group input-group-sm fld-resp-sm" > 
								  <input type="text" class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs"
								name="incsrcSelfEmpPeriod"
								id="incsrcSelfEmpPeriod" ></input>
								 <div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolYrs"></span> </div>
								 </div>
								 </td>
								 
							
							<td>
<!-- 							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SPS);" -->
							<div class="input-group input-group-sm fld-resp-sm" > 
								  <input type="text"  class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntYrs"
							    name="incsrcSpsEmpPeriod" id="incsrcSpsEmpPeriod"
							    
								 ></input>
								 <div class="input-group-addon" > 
							  <span class="glyphicon" id="symbolYrs"></span> </div>
							 </div>
							</td> 	 
								 
								 
						<td>
<!-- 						 onchange="calcSum(null,SrcOF_Inc.SRCOFPER_JOINT);" -->
							<div class="input-group input-group-sm fld-resp-sm" > 
								  <input type="text"  class="form-control fld-resp-sm numbers clsfipaFamily applyEvntYrs"
							    name="incsrcJointEmpPeriod" id="incsrcJointEmpPeriod"
							   
								 ></input>
							 <div class="input-group-addon" > 
							  <span class="glyphicon" id="symbolYrs"></span> </div>
							 </div>
						 </td>		 
								 
								 
					</tr>
					
					<tr valign="top">  
						<td rowspan="3">&nbsp;</td> 
							<td valign="middle" rowspan="3">
							<div class="fipaFldLblText" style="text-align: right;">
							  Bonus
								</div>
							</td>   
							<td><span class="label label-info">AW</span></td>
							<td>&nbsp;</td>
							
							<td rowspan="2" >   
							<div class="input-group input-group-sm fld-resp-md">
								<div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolUsd"></span>
							   </div> 
							<input type="text"  class="form-control numbers clsfipaClient applyEvntUsd" 
						      	name="incsrcSelfEmpAddlwage" id="incsrcSelfEmpAddlwage"  
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);"
								 ></input>
							 </div> 
							</td>  

							<td rowspan="2">
							<div class="input-group input-group-sm fld-resp-md" >
								<div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolUsd"></span> </div>
								  <input type="text"  class=" form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"
							    name="incsrcSpsEmpAddlwage" id="incsrcSpsEmpAddlwage" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);"
								 ></input>
							 </div>
							</td>
								   
						<td rowspan="2" >&nbsp; </td> 	 
						</tr>
					
					
					
					</tbody>
					
				</table>
       </fieldset>
				<!-- End -->
				
				
				</div>
				
				<br>
				  <div class="panelHeaderSubTitle">Non-employment Income</div>
								 <div class="table-responsive" id="nonemployeeincomediv"> 
			<fieldset class="fieldsetClsborder">
				<table class="display nowrap table  table-bordered "  id="tblssourceofincome">
				<col width="5%">
					<col width="30%">
					<col width="5%">
					<col width="5%">
					<col width="20%">
					<col width="20%">
					<col width="20%">
					<thead>
						<tr>
							<td colspan="4">&nbsp;</td>
							<td align="center"><span class="fipaFldLblTextbold">SELF</span>	</td>
							<td align="center"><span class="fipaFldLblTextbold">SPOUSE</span>	</td>
							<td align="center"><span class="fipaFldLblTextbold">JOINT/FAMILY</span>	</td>
						</tr>
					</thead> 
			
				 
					<tbody> 
<!--2 -->
					<tr valign="top">
					<td rowspan="7">
							<div > 
							  <img src="images/menuicons/nonempinc.png" />
							</div>
							</td>
							
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 Monthly Income 
								</div>
							</td>   
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;<!-- Icons space -->
								</div>
							</td>    
							
							<td>   
							<div class="input-group input-group-sm fld-resp-md" > 
					        <span class="input-group-addon" >
					                <span class="glyphicon" id="symbolUsd"></span>
					            </span>
							<input type="text"  name="incsrcSelfNempMonthly" id="incsrcSelfNempMonthly"
							    class=" form-control fld-resp-md numbers clsfipaClient applyEvntUsd" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);"></input>
								</div>
							</td>
							
							
							<td>
								<div class="input-group input-group-sm fld-resp-md" > 
						        <span class="input-group-addon">
						                <span class="glyphicon" id="symbolUsd"></span>
						            </span>
								<input type="text"  name="incsrcSpsNempMonthly" id="incsrcSpsNempMonthly" 
								class=" form-control fld-resp-md numbers clsfipaSpouse applyEvntUsd" 
							    onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);"
								 ></input>
								 </div>
							</td>
							
							
							<td>
							<div class="input-group input-group-sm fld-resp-md" >
								<div class="input-group-addon" > 
								  <span class="glyphicon" id="symbolUsd"></span> </div>
								  <input type="text"  class=" form-control fld-resp-md numbers clsfipaFamily applyEvntUsd"
							    name="incsrcJointNempMonthly" id="incsrcJointNempMonthly" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);"
								 ></input>
							 </div>
							</td>
								  
					</tr>
					
					<!-- <tr valign="top">  
							 <td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Increment
								</div>
							</td> 
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							 	<td>   
									<div class="input-group input-group-sm fld-resp-sm" > 
									<input  class="form-control numbers clsfipaClient applyEvntpCent3" 
									name="incsrcSelfNempIncr" id="incsrcSelfNempIncr"  
									onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SLF);"
									></input>
									<div class="input-group-addon" > 
									<span class="glyphicon" id="symbolprCent"></span> </div>
									</div> 
							 </td>

								 
										 
							<td>   
									<div class="input-group input-group-sm fld-resp-sm" > 
									<input  class="form-control numbers clsfipaSpouse applyEvntpCent" 
									name="incsrcSpsNempIncr" id="incsrcSpsNempIncr"   
									onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SPS);"
									></input>
									<div class="input-group-addon" > 
									<span class="glyphicon" id="symbolprCent"></span> </div>
									</div> 
									</td>
									

							
							 
											 
							
							<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers clsfipaFamily applyEvntpCent" 
							name="incsrcJointNempIncr" id="incsrcJointNempIncr"
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_JOINT);" />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
							
							

								 
								 	 		  
								  
						</tr>
					
					
							<tr valign="top">
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Period
								</div>
							</td>  
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							 	<td>
									<div class="input-group input-group-sm fld-resp-sm" > 
									<input class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs"
									name="incsrcSelfNempPeriod"
									id="incsrcSelfNempPeriod" onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SLF);"
									></input>
									<div class="input-group-addon" > 
									<span class="glyphicon" id="symbolYrs"></span> </div>
									</div>
								</td>  
								 
								 
										 	 
							<td>
								<div class="input-group input-group-sm fld-resp-sm" > 
								<input  class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntYrs"
								name="incsrcSpsNempPeriod" id="incsrcSpsNempPeriod"
								onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SPS);"
								  />
								<div class="input-group-addon" > 
								<span class="glyphicon" id="symbolYrs"></span> </div>
								</div>
								</td> 

								 
								
						 <td>
							<div class="input-group input-group-sm fld-resp-sm"  > 
								<input  class="form-control fld-resp-sm numbers clsfipaFamily applyEvntYrs"
								name="incsrcJointNempPeriod" id="incsrcJointNempPeriod"
								onchange="calcSum(null,SrcOF_Inc.SRCOFPER_JOINT);"
								 />
								<div class="input-group-addon" > 
								<span class="glyphicon" id="symbolYrs"></span> </div>
								</div>
						</td> 		
								 
					</tr> -->
					
					
					<tr valign="top">
					 
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Annual Rental Income 
								</div>
							</td> 
							<td> <a class="btn btn-default addinfoicon" id="popannualrentalincome"> </a></td>
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 <a class="btn btn-default addpropertyicon" id="annualrentalincome"></a><!-- Icons space -->
								</div>
							</td>    
							
							<td>   
								<div class="input-group input-group-sm fld-resp-md" > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text"  name="incsrcSelfNempRentamt" id="incsrcSelfNempRentamt"
								class=" form-control fld-resp-md numbers clsfipaClient applyEvntUsd autoAlt"   
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);"
								
								></input>
								</div>
							</td>
								
								
						<td>
								<div class="input-group input-group-sm fld-resp-md" > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text"  name="incsrcSpsNempRentamt" id="incsrcSpsNempRentamt" 
								class=" form-control fld-resp-md numbers clsfipaSpouse applyEvntUsd autoAlt" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);"
								></input>
								</div>
								</td>		
								
						
						<td>
							<div class="input-group input-group-sm fld-resp-md" >
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolUsd"></span> </div>
							<input type="text"  class=" form-control fld-resp-md numbers clsfipaFamily applyEvntUsd autoAlt"
							name="incsrcJointNempRentamt" id="incsrcJointNempRentamt" 
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);"
							></input>
							</div>
							</td>
													
						
									
					</tr>
							
					<!-- <tr valign="top">
					<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Increment
								</div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							 
						 <td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers clsfipaClient applyEvntpCent" 
							name="incsrcSelfNempRentincr" id="incsrcSelfNempRentincr" 
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SLF);"/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
									
						<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers clsfipaSpouse applyEvntpCent" 
							name="incsrcSpsNempRentincr" id="incsrcSpsNempRentincr"
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SPS);"
							/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
						
						
						<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers clsfipaFamily applyEvntpCent" 
							name="incsrcJointNempRentincr" id="incsrcJointNempRentincr"
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_JOINT);"/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
						</td>	
						
						
								
					</tr>		
						<tr valign="top">
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Period
								</div>
							</td> 
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							
						<td>
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs"
							name="incsrcSelfNempRentperd"
							id="incsrcSelfNempRentperd"
							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SLF);"
							 />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td> 
							
						<td>
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntYrs"
							name="incsrcSpsNempRentperd" id="incsrcSpsNempRentperd" 
							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SPS);"
							  ></input>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td> 	
						
						
						<td>
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control fld-resp-sm numbers clsfipaFamily applyEvntYrs"
							name="incsrcJointNempRentperd" id="incsrcJointNempRentperd"
							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_JOINT);"
							 ></input>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td> 
							
						</tr> -->	
							
							
							
						<!-- 3 -->	
					 <tr valign="top">
					 
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							    Investment Income,dividends, gains  
							</div>
							</td> 
						<td><a class="btn btn-default addinfoicon" id="popincsrcSelfNempDivdamt"> </a></td>
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 <a class="btn btn-default addInflwOutflw" id="popaddInvestment"></a><!-- Icons space -->
								</div>
							</td>    
							
							
							<td>   
								<div class="input-group input-group-sm fld-resp-md"  > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text" name="incsrcSelfNempDivdamt" id="incsrcSelfNempDivdamt"
								class=" form-control fld-resp-md numbers clsfipaClient applyEvntUsd autoAlt" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);"
								
								></input>
								</div>
								</td>
								
								
						<td>
							<div class="input-group input-group-sm fld-resp-md" > 
							<span class="input-group-addon">
							<span class="glyphicon" id="symbolUsd"></span>
							</span>
							<input type="text" name="incsrcSpsNempDivdamt" id="incsrcSpsNempDivdamt" 
							class=" form-control fld-resp-md numbers clsfipaSpouse applyEvntUsd autoAlt" 
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);"
							></input>
							</div>
							</td>
		
								
						
						<td>
							<div class="input-group input-group-sm fld-resp-md" >
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolUsd"></span> </div>
							<input type="text"  class=" form-control fld-resp-md numbers clsfipaFamily applyEvntUsd autoAlt"
							name="incsrcJointNempDivdamt" id="incsrcJointNempDivdamt" 
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);"
							></input>
							</div>
							</td>
													
						
									
					</tr>
							
					<!-- <tr valign="top">
					<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Increment
								</div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							 
						 <td>   
							<div class="input-group input-group-sm fld-resp-sm"  > 
							<input  class="form-control numbers clsfipaClient applyEvntpCent" 
							name="incsrcSelfNempDivdincr" id="incsrcSelfNempDivdincr"
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SLF);"
							/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
									
									
						<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers clsfipaSpouse applyEvntpCent" 
							name="incsrcSpsNempDivdincr" id="incsrcSpsNempDivdincr"
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SPS);"	/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
						
						
						<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers clsfipaFamily applyEvntpCent" 
							name="incsrcJointNempDivdincr" id="incsrcJointNempDivdincr"
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_JOINT);"	/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>	
						
						
								
					</tr>		
						<tr valign="top">
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Period
								</div>
							</td> 
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							
						<td>
							<div class="input-group input-group-sm fld-resp-sm"  > 
							<input class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs"
							name="incsrcSelfNempDivdperd"
							id="incsrcSelfNempDivdperd" onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SLF);"
							 />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td>
							
						<td>
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntYrs"
							name="incsrcSpsNempDivdperd" id="incsrcSpsNempDivdperd"
							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SPS);"
							 />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td> 	
						
						
						<td>
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control fld-resp-sm numbers clsfipaFamily applyEvntYrs"
							name="incsrcJointNempDivdperd" id="incsrcJointNempDivdperd"
							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_JOINT);"
							 />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td>  
							
						</tr>	 -->
						
						<!-- 4 -->
					<tr valign="top">
					 
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Other Income
								</div>
							</td> 
						
						<td>&nbsp;</td>
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;<!-- Icons space -->
								</div>
							</td>    
							
							
							<td>   
								<div class="input-group input-group-sm fld-resp-md" > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text" name="incsrcSelfNempOthamt" id="incsrcSelfNempOthamt"
								class=" form-control fld-resp-md numbers clsfipaClient applyEvntUsd" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SLF);" 
								></input>
								</div>
							</td>
								
								
							<td>
								<div class="input-group input-group-sm fld-resp-md" > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text"  id="incsrcSpsNempOthamt" name="incsrcSpsNempOthamt"
								class=" form-control fld-resp-md numbers clsfipaSpouse applyEvntUsd" 
								onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_SPS);" />
								</div>
								</td>	
								
						
						<td>
							<div class="input-group input-group-sm fld-resp-md" >
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolUsd"></span> </div>
							<input type="text"  class=" form-control fld-resp-md numbers clsfipaFamily applyEvntUsd"
							name="incsrcJointNempOthamt" id="incsrcJointNempOthamt"  
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCM_JOINT);"
							></input>
							</div>
						</td>
													
						
									
					</tr>
							
					<!-- <tr valign="top">
					<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Increment
								</div>
							</td> 
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							
						 <td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers clsfipaClient applyEvntpCent" 
							name="incsrcSelfNempOthincr" id="incsrcSelfNempOthincr" 
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SLF);"/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
									
						<td>   
							<div class="input-group input-group-sm fld-resp-sm"  > 
							<input  class="form-control numbers clsfipaSpouse applyEvntpCent" 
							name="incsrcSpsNempOthincr" id="incsrcSpsNempOthincr"
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_SPS);"
							/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
						
						
						<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers clsfipaFamily applyEvntpCent" 
							name="incsrcJointNempOthincr" id="incsrcJointNempOthincr"
							onchange="calcSum(null,SrcOF_Inc.SRCOFINCRMNT_JOINT);"
							/>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td> 
					</tr>	
						
						<tr valign="top">
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							Period
								</div>
							</td> 
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							
						<td>
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input class="form-control fld-resp-sm numbers clsfipaClient applyEvntYrs"
							name="incsrcSelfNempOthperd"
							id="incsrcSelfNempOthperd" onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SLF);"
							 />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td>  
							
						<td>
							<div class="input-group input-group-sm fld-resp-sm"  > 
							<input  class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntYrs"
							name="incsrcSpsNempOthperd" id="incsrcSpsNempOthperd"
							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_SPS);"
							/></input>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td>  	
						
						
						<td>
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control fld-resp-sm numbers clsfipaFamily applyEvntYrs"
							name="incsrcJointNempOthperd" id="incsrcJointNempOthperd"
							onchange="calcSum(null,SrcOF_Inc.SRCOFPER_JOINT);"
							 />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td> 
							
						</tr> -->
						
							
						<!-- 5 -->
							<tr valign="top">
						 
						<td valign="middle">
							<div class="fipaFldLblTextbold" style="text-align: right;">
							Total Annual Inflow
								</div>
							</td> 
						<td>&nbsp;</td>
						
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;<!-- Icons space -->
								</div>
							</td>    
							
							
							<td>   
								<div class="input-group input-group-sm fld-resp-md"  > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text"  name="insrcSelfTotannl" id="insrcSelfTotannl" 
								class="form-control fld-resp-md numbers readOlyCursor clearfipaClient applyEvntUsd" 
								readonly="true"
								></input>
								</div>
								</td>

								
								
							<td>
								<div class="input-group input-group-sm fld-resp-md"  > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text" name="insrcSpsTotannl"
								id="insrcSpsTotannl" 
								class="form-control numbers readOlyCursor clearfipaSpouse applyEvntUsd" 
								readonly="true"></input>
								</div>
								</td>		
								
						
						<td>
							<div class="input-group input-group-sm fld-resp-md" >
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolUsd"></span> </div>
							<input type="text"  class="form-control numbers readOlyCursor applyEvntUsd"
							name="insrcJointTotannl" id="insrcJointTotannl" 
							readonly="true"  
							></input>
							</div>
							</td>
													
						
									
					</tr>
							
					<!-- <tr valign="top">
					<td valign="middle">
							<div class="fipaFldLblTextbold" style="text-align: right;">
							Total Increment
								</div>
							</td>
							
							
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							
							 
						 <td>   
							<div class="input-group input-group-sm fld-resp-sm"  > 
							<input  class="form-control numbers readOlyCursor clearfipaClient" 
							name="insrcSelfTotannlincr" id="insrcSelfTotannlincr"
							 readonly="true" />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
									
						<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers readOlyCursor clearfipaSpouse" 
							name="insrcSpsTotannlincr" id="insrcSpsTotannlincr" readonly="true"  
							></input>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>

						
						
						<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers readOlyCursor" 
							name="insrcJointTotannlincr" id="insrcJointTotannlincr"
							 readonly="true"  />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>	
						
						
								
					</tr>		
						<tr valign="top">
						<td valign="middle">
							<div class="fipaFldLblTextbold" style="text-align: right;">
							Total Period
								</div>
							</td> 
							
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;Icons space
								</div>
							</td>    
							
							
						<td>
							<div class="input-group input-group-sm fld-resp-sm"  > 
							<input class="form-control numbers readOlyCursor clearfipaClient applyEvntYrs"
							name="insrcSelfTotannlperd" id="insrcSelfTotannlperd" 
							readonly="true"></input>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td> 
							
						<td>
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input  class="form-control numbers readOlyCursor clearfipaSpouse applyEvntYrs"
							name="insrcSpsTotannlperd" id="insrcSpsTotannlperd"
							 readonly="true"  ></input>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td>  	
						
						
						<td>
							<div class="input-group input-group-sm fld-resp-sm"  > 
							<input  class="form-control numbers readOlyCursor applyEvntYrs"
							name="insrcJointTotannlperd" id="insrcJointTotannlperd" 
							readonly="true" 
							></input>
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolYrs"></span> </div>
							</div>
							</td>
							
						</tr>	 -->
						
						<!-- 6 -->
							<tr valign="top"> 
							
						<td valign="middle" >
							<div class="fipaFldLblTextbold" style="text-align: right;">
							Annual Savings Ability
								</div>
							</td> 
						
						<td>&nbsp;</td>
						<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;<!-- Icons space -->
								</div>
							</td>    
							
							
							<td>   
								<div class="input-group input-group-sm fld-resp-md" > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text"  name="incsrcSelfAbility" id="incsrcSelfAbility"
								class=" form-control fld-resp-md numbers clsfipaClient applyEvntUsd" />
								</div>
							</td>
								
								
						<td>
								<div class="input-group input-group-sm fld-resp-md" > 
								<span class="input-group-addon">
								<span class="glyphicon" id="symbolUsd"></span>
								</span>
								<input type="text"  name="incsrcSpsAbility" id="incsrcSpsAbility" 
								class=" form-control fld-resp-md numbers clsfipaSpouse applyEvntUsd" />
								</div>
								</td>		
								
						
						<td>
							<div class="input-group input-group-sm fld-resp-md" >
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolUsd"></span> </div>
							<input type="text"  class=" form-control fld-resp-md numbers clsfipaFamily applyEvntUsd"
							name="incsrcJointAbility" id="incsrcJointAbility" ></input>
							</div>
							</td>
													
						
									
					</tr>
							
					<tr valign="top">
					<td valign="middle">
							<div class="fipaFldLblTextbold" style="text-align: right;">
							Annual Increment
								</div>
							</td> 
							
							<td>&nbsp;</td>
							<td valign="middle">
							<div class="fipaFldLblText" style="text-align: right;">
							 &nbsp;<!-- Icons space -->
								</div>
							</td>    
							
							
						 <td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input type="text"  class="form-control numbers clsfipaClient applyEvntpCent" 
							name="incsrcSelfAbilityincr" id="incsrcSelfAbilityincr" />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
									
						<td>   
							<div class="input-group input-group-sm fld-resp-sm" > 
							<input type="text"  class="form-control numbers clsfipaSpouse applyEvntpCent" 
							name="incsrcSpsAbilityincr" id="incsrcSpsAbilityincr" />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
							</td>
						
						
						<td>   
							<div class="input-group input-group-sm fld-resp-sm"  > 
							<input type="text"  class="form-control numbers clsfipaFamily applyEvntpCent" 
							name="incsrcJointAbilityincr" id="incsrcJointAbilityincr"
							 />
							<div class="input-group-addon" > 
							<span class="glyphicon" id="symbolprCent"></span> </div>
							</div> 
						</td>	
						
						
								
					</tr>		
						 
					</tbody>
					</table>
					
					<label class="fipaFldLblText" style="text-align: left;">
								Remarks</label>
				<textarea name="incsrcRemarks" id="incsrcRemarks" rows="2" class="form-control" 
				style="width: 99%;" maxlength="300"></textarea>
				  
					
					
					</fieldset>
					</div>
				 </div>
				 
				<br>
				
				
				
				<span class="panelHeaderTitle"> Annual Expenditure - Outflow </span>
  	
 <div class="fipaFldLblText" style="text-align: left;">
 	&nbsp; &nbsp; Take a strategic approach to manage your finances by first identifying your annual expenses 
 	before mapping out what you hope to achieve financially over the next couple of years
 </div>
		<div class="panel-body" id="annualexpendiv"> 
		<div class="table-responsive">
<!-- 		table-borderless -->
<fieldset class="fieldsetClsborder">
				<table id="tblannlexpre" class="display nowrap table table-borderless"   > 
					
					
					<col width="5%">
					<col width="30%">
					<col width="5%">
					<col width="5%">
					<col width="20%">
					<col width="20%">
					<col width="20%">
					<thead>
						<tr>
							<td colspan="4">&nbsp;</td>
							<td align="center"><span class="fipaFldLblTextbold">SELF</span>	</td>
							<td align="center"><span class="fipaFldLblTextbold">SPOUSE</span>	</td>
							<td align="center"><span class="fipaFldLblTextbold">JOINT/FAMILY</span>	</td>
						</tr>
					</thead>  
								<tbody>
								<tr>
								<td rowspan="2" style="text-align: center">
						 <div >
						 <img src="images/menuicons/rental.png" height="60" width="60" />
						 </div>
						 </td>
							<td>
								<div class="fipaFldLblText" style="text-align: right" >Rental for Lodgings  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td> 
							<td  style=" ">
							 <div class="input-group input-group-sm"  style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>												
							<input type="text" name="expdSelfRent"  id="expdSelfRent"    
							 class="form-control fld-resp-md numbers clsfipaClient applyEvntUsd"  
							 onchange="calcSum(this,'SUMOF_ANNEXP_SELF')" />
							 </div>
							</td>
							<td style=" ">
					 	<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsRent"   id="expdSpsRent"   
							 class="form-control fld-resp-md numbers clsfipaSpouse applyEvntUsd" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"/> 
							</div>
							</td>
							<td style=" ">
					 <div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyRent"   id="expdFamilyRent" 
							class="form-control fld-resp-md numbers clsfipaFamily applyEvntUsd"
							onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr>
						 
							<td >
							<div class="fipaFldLblText" style="text-align: right" >	Utilities &amp; communication  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td> 
							<td > 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfUtil"   id="expdSelfUtil" 
							  class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd" 
							   onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							 <div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsUtil"   id="expdSpsUtil" 
							class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyUtil"   id="expdFamilyUtil"  
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr>
						<td></td>
							<td >
							<div class="fipaFldLblText" style="text-align: right" >	Grocery&nbsp;household needs  </div>
							</td>	
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
								<input type="text" name="expdSelfGrocery"   id="expdSelfGrocery"   
								class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"
								onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
								<input type="text" name="expdSpsGrocery"   id="expdSpsGrocery"  
								 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd" 
								  onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyGrocery"   id="expdFamilyGrocery"  
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd" 
								onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr>
						<td></td>
							<td >
							<div class="fipaFldLblText" style="text-align: right" > 	Eating out  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfEatingout"   id="expdSelfEatingout" 
							 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"
							 onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsEatingout"   id="expdSpsEatingout" 
							class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyEatingout"   id="expdFamilyEatingout"  
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"   
							  onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td></td>
							<td >
								<div class="fipaFldLblText" style="text-align: right" >	Clothing &amp; apparel  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfClothing"   id="expdSelfClothing"  
							 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"  
                                                     onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsClothing"   id="expdSpsClothing"  
							 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"  
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyClothing"   id="expdFamilyClothing"  
							class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"
							onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td></td>
							<td >
							<div class="fipaFldLblText" style="text-align: right" >Transportation  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfTransport"   id="expdSelfTransport"  
							  class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"
							  onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsTransport"   id="expdSpsTransport" 
							 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"
							  onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyTransport"   id="expdFamilyTransport"   
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"
								onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td rowspan="2" style="text-align: center">
						<div >
						<img src="images/menuicons/med.png" height="60" width="60" />
						</div>
						</td>
							<td >
								<div class="fipaFldLblText" style="text-align: right" >Medical &amp; personal care </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfMedical"   id="expdSelfMedical"  
							 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"   
							 onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							 <div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsMedical"   id="expdSpsMedical"   
							class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"  />
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyMedical"   id="expdFamilyMedical"  
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"
							 onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
						</div>
							</td>
						</tr>
						<tr> 
							<td >
								<div class="fipaFldLblText" style="text-align: right" >Personal Expenses  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
						 <div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfPersonal"   id="expdSelfPersonal" 
							class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"
							onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsPersonal"   id="expdSpsPersonal" 
							class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							 <div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyPersonal"   id="expdFamilyPersonal"
								class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"   
								onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td></td>
							<td >
							<div class="fipaFldLblText" style="text-align: right" >Household maintenance &amp; conservancy  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
								&nbsp;
							</td>
							<td>
								&nbsp;
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyHousehold"   id="expdFamilyHousehold" 
							class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"
							onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							<!-- onchange="calcSum(this,'SUMOF_ANNEXP_FAM')" -->
							</div>
							</td>
						</tr>
						<tr><td></td>
							<td >
						<div class="fipaFldLblText" style="text-align: right" >Domestic Help  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
								&nbsp;
							</td>
							<td>
								&nbsp;
							</td>
							<td><div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<!-- onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"  -->
							<input type="text" name="expdFamilyDomestic"   id="expdFamilyDomestic" 
							class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div></td>
						</tr>
						<tr><td></td>
						 <td >
							<div class="fipaFldLblText" style="text-align: right" >	Children care, education &amp; enhancement program  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
								&nbsp;
							</td>
							<td>
								&nbsp;
							</td>
							<td> <div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyEnhance"   id="expdFamilyEnhance"
							  class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"   
							  onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td rowspan="2" style="text-align: center">
							<div >
							<img src="images/menuicons/text.png" height="60" width="60" />
							</div></td>
							<td >
							<div class="fipaFldLblText" style="text-align: right" >	Dependant contributions  
							 </div>
							</td>
							<td><a class="btn btn-default addinfoicon" id="popexpdSelfDepntcontr"> </a></td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfDepntcontr"   id="expdSelfDepntcontr" 
							  class="form-control fld-resp-sm numbers readOlyCursor clearfipaClient applyEvntUsd" 
							   onchange="calcSum(this,'SUMOF_ANNEXP_SELF')" readonly="true"></input>
							</div>
							</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsDepntcontr"   id="expdSpsDepntcontr"  
							class="form-control fld-resp-sm numbers readOlyCursor clearfipaSpouse applyEvntUsd"
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"  readonly="true"></input>
							</div>
							</td>
							<td>
							  	&nbsp;
							</td>
						</tr>
						<tr> 
							<td >
							<div class="fipaFldLblText" style="text-align: right"  >Taxes  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfTaxes"   id="expdSelfTaxes"    
							class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"  
							onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsTaxes"   id="expdSpsTaxes"  
							 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"  
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyTaxes"   id="expdFamilyTaxes"   
							class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td rowspan="2" style="text-align: center">
							<div >
							<img src="images/menuicons/enternt.png"  height="60" width="60"/>
							</div>
							</td>
							<td >
							<div class="fipaFldLblText" style="text-align: right" >Entertainment  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfEntertain"   id="expdSelfEntertain"   
							class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"   
							onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsEntertain"   id="expdSpsEntertain"   
							class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyEntertain"   id="expdFamilyEntertain"   
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr> 
							<td >
							<div class="fipaFldLblText" style="text-align: right" >Festive Spending </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfFestiv"   id="expdSelfFestiv"  
							class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"   
							onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsFestiv"   id="expdSpsFestiv"   
							class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"
							onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyFestiv"   id="expdFamilyFestiv"   
							class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"
							onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td></td>
							<td >
							<div class="fipaFldLblText" style="text-align: right" >Vacations  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfVacations"   id="expdSelfVacations"    
							class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd" 
							onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsVacations"   id="expdSpsVacations"   
							class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"  
							onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyVacations"   id="expdFamilyVacations" 
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"   
							 onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr valign="top" align="left"><td></td>
							<td >
							<div   class="fipaFldLblText" style="text-align: right" > Charity </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfCharity"   id="expdSelfCharity"
							 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsCharity"   id="expdSpsCharity" 
							class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"
							onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td> 
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyCharity"   id="expdFamilyCharity"  
							class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"
							onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td rowspan="2" style="text-align: center">
							<div >
							<img src="images/menuicons/loan.png" height="60" width="60" />
							</div>
							</td>
							<td >
							<div class="fipaFldLblText" style="text-align: right" >	Loan repayment  </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSelfLoanrepay"   id="expdSelfLoanrepay"   
							 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"
							 onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSpsLoanrepay"   id="expdSpsLoanrepay"   
							 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdFamilyLoanrepay"  id="expdFamilyLoanrepay"   
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd"
							  onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						
						<tr> 
							<td >
							<div class="fipaFldLblText" style="text-align: right" >
							Property loan repayment  
							 
							</div>
							</td>
							<td><a class="btn btn-default addinfoicon" id="popexpdSelfProploan"> </a></td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 <a class="btn btn-default addpropertyicon" id="syncproperty"></a><!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSelfProploan"   id="expdSelfProploan" 
							   class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd autoAlt"  
								onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSpsProploan"   id="expdSpsProploan"  
							  class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd autoAlt" 
							  onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdFamilyProploan"   id="expdFamilyProploan" 
							   class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd autoAlt"
							   onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						<tr><td></td>
							<td >
						<div class="fipaFldLblText" style="text-align: right" >	Vehicle loan repayment  
							 
						</div>
							</td>
							<td><a class="btn btn-default addinfoicon" id="popexpdSelfVehiloan"> </a></td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								<a class="btn btn-default addvehcileicon" id="popaddvehcileicon"></a><!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSelfVehiloan"   id="expdSelfVehiloan"   
							 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd autoAlt" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_SELF')" ></input>
						</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSpsVehiloan"   id="expdSpsVehiloan"  
							 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd autoAlt"   
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')" ></input>
							</div>
							</td>
							<td>
							&nbsp;
							</td>
						</tr>
						<tr><td rowspan="2" style="text-align: center">
							<div >
						<img src="images/menuicons/umbrla.png"  height="60" width="60"/>
						</div>
						</td>
							<td >
						<div class="fipaFldLblText" style="text-align: right" >Life Insurance Premiums  
						 </div>
							</td>
							<td><a class="btn btn-default addinfoicon" id="popexpdSelfInsurance"> </a></td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 <a class="btn btn-default addlifeicon" id="popaddlifeicon"></a><!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSelfInsurance"   id="expdSelfInsurance"  
							  class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd autoAlt"
							  onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSpsInsurance"   id="expdSpsInsurance"    
							 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd autoAlt"  
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdFamilyInsurance"   id="expdFamilyInsurance"    
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd autoAlt" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						
						<tr> 
							<td >
						<div class="fipaFldLblText" style="text-align: right" >General Insurance Premiums </div>
							</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							 
							<td>&nbsp;</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSelfGi"   id="expdSelfGi"   
							 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSpsGi"   id="expdSpsGi"    
							 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdFamilyGi"   id="expdFamilyGi"   
							  class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd" 
							  onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						
						<tr><td></td>
							<td >
							<div class="fipaFldLblText" style="text-align: right"  >  Other expenses   </div>
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSelfOthers"   id="expdSelfOthers"  
							 class="form-control fld-resp-sm numbers clsfipaClient applyEvntUsd"   
							 onchange="calcSum(this,'SUMOF_ANNEXP_SELF')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdSpsOthers"   id="expdSpsOthers" 
							 class="form-control fld-resp-sm numbers clsfipaSpouse applyEvntUsd"  
							 onchange="calcSum(this,'SUMOF_ANNEXP_SPS')"></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							 <input type="text" name="expdFamilyOthers"   id="expdFamilyOthers"  
							 class="form-control fld-resp-sm numbers clsfipaFamily applyEvntUsd" 
							 onchange="calcSum(this,'SUMOF_ANNEXP_FAM')"></input>
							</div>
							</td>
						</tr>
						
						 
						<tr><td></td>
							<td rowspan="2">
								<div class="fipaFldLblTextbold" style="text-align: right" >Annual Expenses</div>
								
							</td>
							<td>&nbsp;</td>
							<td valign="middle">
								<div class="fipaFldLblText" style="text-align: right;">
								 &nbsp;<!-- Icons space -->
									</div>
								</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSelfTotalannl"   id="expdSelfTotalannl"  
							class="form-control fld-resp-sm numbers readOlyCursor clearfipaClient applyEvntUsd"
							   readonly="true"  ></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdSpsTotalannl"   id="expdSpsTotalannl"   
							class="form-control fld-resp-sm readOlyCursor numbers clearfipaSpouse applyEvntUsd"   readonly="true"  ></input>
							</div>
							</td>
							<td>
							<div class="input-group input-group-sm" style="width:200px"> 
							        <span class="input-group-addon">
							                <span class="glyphicon" id="symbolUsd"></span>
							            </span>
							<input type="text" name="expdFamilyTotalannl"   id="expdFamilyTotalannl"   
							class="form-control fld-resp-sm readOlyCursor numbers clearfipaFamily applyEvntUsd"   readonly="true"  ></input>
							</div>
							</td>
						</tr> 
						</tbody>	 
					</table>
					</fieldset>
				</div>	 
			
			
		  </div>
		  </div>
				</div>
				
				
				
				
				
				
				 
	 	
	  
