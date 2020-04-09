<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div class="panel-group">  
 <div id="typesofappsec" class="accord-content"  >  
      <div class="panel-body" > 
      <div class="table-responsive"> 
      <div class="col-md-6">   
			
			<div class="row"> 
		<div class="col-md-5">  
		<div class="panel panel-default" id="divAnalysisFor">
					<div class="panel-heading"><span class="panelHeaderTitle"><small>Analysis For</small></span>  </div>
					<div class="panel-body">
					<div class="checkbox checkbox-primary">
                       <input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForClient"  class="analysischkbox" data-attr="ANALYS_SLF"  disabled="true" data-class="clsfipaClient"
                   onclick="setChkBoxValue(this);"  />
                        <label class="control-label" for="txtFldAnalyisForClient">Client</label>
                    </div>
                     
                     <div class="checkbox checkbox-primary">
                     <input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForSpouse"  class="analysischkbox" data-attr="ANALYS_SPS" data-class="clsfipaSpouse"
                   onclick="setChkBoxValue(this);"  />
                        <label class="control-label" for="txtFldAnalyisForSpouse">Spouse</label>
                    </div>
                    
                    <div class="checkbox checkbox-primary">
                     <input type="checkbox" name="txtFldAnalyisFor" id="txtFldAnalyisForFamily"   class="analysischkbox" data-attr="ANALYS_FAM" data-class="clsfipaFamily"
                   onclick="setChkBoxValue(this);"  />
                        <label class="control-label" for="txtFldAnalyisForFamily">Family</label>
                    </div>
                     
				  <input type="hidden" name="appAnalysisFor" id="appAnalysisFor" value="{&quot;ANALYS_SLF&quot;:&quot;Y&quot;,&quot;ANALYS_SPS&quot;:&quot;Y&quot;,&quot;ANALYS_FAM&quot;:&quot;Y&quot;}">
            </div>  
            </div>
           
        </div> 
			<div class="col-md-7"> 
			<div class="panel panel-default">
					<div class="panel-heading"><span class="panelHeaderTitle"><small>Purpose</small></span> </div>
					<div class="panel-body">
					
					<div class="checkbox checkbox-primary">
                    <input type="checkbox" name="txtFldPurpose" id="txtFldPurposeRpt" data-attr="FIN_PLN_RPT"  onclick="setChkBoxValue(this)"/>
					 <label class="control-label" for="txtFldPurposeRpt"> Financial Planning Reports</label>
                    </div>
                    
                    <div class="checkbox checkbox-primary">
                    <input type="checkbox" name="txtFldPurpose" id="txtFldPurposeAvy"  data-attr="FIN_ADVSRY" onclick="setChkBoxValue(this)" />
					 <label class="control-label" for="txtFldPurposeAvy">Financial Advisory</label>
                    </div>
                     
				  <input type="hidden" name="appPurpose" id="appPurpose" value="{&quot;FIN_PLN_RPT&quot;:&quot;N&quot;,&quot;FIN_ADVSRY&quot;:&quot;N&quot;}">
               <div class="clearspace20"></div> 
              </div> 
            </div> 
			</div>
			
		</div>
		 <div class="clearspace20"></div>
		<div class="row">
		
		<div class="panel panel-default">
			<div class="panel-body">
			
			<label class="control-label">Is this application intended to replace in part of in full any existing designated
										investment/ A&H product?</label>
										
										<div class="radio radio-primary">
											<div class="col-md-2">
											<input type="radio" name="appReplacePrdt" id="appReplacePrdtY" value="Y"></input>
		                                <label  class="control-label" for="appReplacePrdtY">
		                                    Yes
		                                </label>
											</div>
											<div class="col-md-2">
											<input type="radio" name="appReplacePrdt" id="appReplacePrdtN" value="N">
		                                <label  class="control-label" for="appReplacePrdtN">
		                                    No
		                                </label>
											</div>
											<div class="col-md-8"></div>
		                                
		                            </div>
		                            
		                            
		                            
										
			</div>
		</div>
		
		</div> 
		 <div class="clearspace20"></div>
		 
		</div>
		
<div class="col-md-6">
<div class="panel panel-default">
					<div class="panel-heading"><span class="panelHeaderTitle">
					<small>Application Type&nbsp;(Client's Choice) </small></span></div>
					<div class="panel-body"> 
					<div class="table-responsive">
					<table class="table table-striped table-hover table-bordered">
					<tr>
					<td align="center">&nbsp;</td>
					<td align="center"><label class="control-label">Simplified</label></td>
<!-- 					<td align="center"><label class="control-label">Fact Find</label></td> -->
					</tr>
					<tr>
					<td><label class="control-label">Life & Non-Insurance Products</label></td>
					<td align="center"><div class="checkbox checkbox-primary">
                   				<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice"  data-attr="LS"  onclick="setFNAType(this,'SIMPLIFIED')" disabled="true" onchange="fillLifeInsUtIlpProdt(this);"/>
							 <label>&nbsp;</label>
							  </div></td>
<!-- 					<td align="center"><div class="checkbox checkbox-primary"> -->
<!--                    				<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice"   data-attr="LF" onclick="setFNAType(this,'FULLFACT')"  onchange="fillLifeInsUtIlpProdt(this);"/> -->
<!-- 							 <label>&nbsp;</label> -->
<!-- 							  </div></td> -->
					</tr> 
					<tr>
					<td><label class="control-label">Accident and Health (A&H) Products</label></td>
					<td align="center"><div class="checkbox checkbox-primary">
                   				<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice"   data-attr="AS" onclick="setFNAType(this,'SIMPLIFIED')"   disabled="true"  onchange="fillLifeInsUtIlpProdt(this);"/> 
							 <label>&nbsp;</label>
							  </div></td>
<!-- 					<td align="center"><div class="checkbox checkbox-primary"> -->
<!--                    			<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice"   data-attr="AF"  onclick="setFNAType(this,'FULLFACT')"  onchange="fillLifeInsUtIlpProdt(this);"/> -->
<!-- 							 <label>&nbsp;</label> -->
<!-- 							  </div> -->
							    
							  </td>
					</tr> 
					<tr>
					<td><label class="control-label">Investments</label></td>
					<td align="center"><div class="checkbox checkbox-primary">
                   				<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice"  data-attr="IS"  onclick="setFNAType(this,'SIMPLIFIED')" disabled="true" /> 
							 <label>&nbsp;</label>
							  </div>
							  	<input type="hidden" name="appClientChoice" id="appClientChoice"   value="{&quot;LF&quot;:&quot;Y&quot;,&quot;AF&quot;:&quot;Y&quot;,&quot;IF&quot;:&quot;Y&quot;}">
						
							  </td>
<!-- 					<td align="center"><div class="checkbox checkbox-primary"> -->
<!--                    			<input type="checkbox" name="txtFldClientChoice" id="txtFldClientChoice" data-attr="IF" onclick="setFNAType(this,'FULLFACT')"   /> -->
<!-- 							 <label>&nbsp;</label> -->
<!-- 							  </div> -->
							 
<!-- 							  </td> -->
					</tr> 
					</table>
					</div> 
        </div>
        </div> 
  </div>
        <div class="col-md-12">  
						<div class="panel panel-default" id="divAnalysisTypes">
					<div class="panel-heading"><small><span class="panelHeaderTitle">
  					       Analysis Type <span class="mandFldastrks">*</span></span></small></div>
					<div class="panel-body">
					
							
								<table
									style="border-collapse: collapse; empty-cell show; width: 70%;table-layout: fixed;">
									<c:if test="${not empty ALL_ANALYSIS_TYPES}">
									<tr valign="top" align="left">

											<td class="fipaFldLblText">
											<div>
											<div class="checkbox checkbox-primary">
					                   			<input
														type="checkbox" name="txtFldAnalysisSelAll" id="txtFldAnalysisSelAllid"
														value="Select All"
														onclick="analysisCheckEvent(this,'evt')" />
												 <label class="control-label" for="txtFldAnalysisSelAllid">Select All</label>
											 </div> 
												</div>
											<c:forEach
													var="anatype" items="${ALL_ANALYSIS_TYPES}" varStatus="inc">
													<c:if test="${inc.index<4}">

														<div>
														<div class="checkbox checkbox-primary">
										                   			
										                   			<input
																type="checkbox" name="analysis"
																id="analysis${inc.index}"
																value="${anatype.anaPkid}" class="analyTypeChkbox"
																onclick="analysisCheckEvent(this,'All')" /> 
										                   			 <label class="control-label" for="analysis${inc.index}">${anatype.analysis}</label>
										                   			 
														 </div>
														 <input type="hidden" name="txtFldAppTypeIds" id="txtFldAppTypeIds"/>
														</div>
													</c:if>
												</c:forEach></td>


											<td class="fipaFldLblText"><c:forEach
													var="anatype" items="${ALL_ANALYSIS_TYPES}" varStatus="inc">
													<c:if test="${inc.index>=4}">

														<div>
														
														<div class="checkbox checkbox-primary"> 
										                   			<input
																type="checkbox" name="analysis"
																id="analysis${inc.index}"
																value="${anatype.anaPkid}" class="analyTypeChkbox"
																onclick="analysisCheckEvent(this,'All')" />
										                   			 <label class="control-label" for="analysis${inc.index}">${anatype.analysis}</label>
										                   			 
														 </div>
														 <input type="hidden" name="txtFldAppTypeIds" id="txtFldAppTypeIds" /> 
														</div>

													</c:if>
												</c:forEach></td>
										</tr>

									</c:if>
								</table>
								
								
								 
 	  
	  
							</div>
				 </div>
				 
				 </div> 
					</div>
					
				 
	 </div>
	 </div>
	 </div>