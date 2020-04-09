<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>



<div class="inner-bg" style="background-image: url('images/AvallisCorpLeftCornerImage.png'); background-repeat: no-repeat; min-height: 96vh">

	<div class="col-sm-5 ">
		<div class="form-box">
			<div>
				<blockquote class="blockquote bs-callout-info">
					<c:if test="${not empty LOGIN_MSG_DETS}">
						<c:forEach var="loginmsg" items="${LOGIN_MSG_DETS}">
							<p class="mb-0">${loginmsg[0]}</p>
						</c:forEach>
					</c:if>
					<br />
					<br />
					<c:if test="${not empty LOGIN_MSG_DETS}">
						<c:forEach var="loginmsg" items="${LOGIN_MSG_DETS}">
							<footer class="blockquote-footer">${loginmsg[1]}
								<cite title="Source Title"></cite>
							</footer>
						</c:forEach>
					</c:if>
				</blockquote>

			</div>
		</div>
	</div>

	<div class="col-sm-1 middle-border"></div>

	<div class="col-sm-6 ">
		<!-- <section id="content"> -->
		<form action="FipaHome.do" name="fipaLogin" method="post">
			<table style="border-collapse: separate; border-spacing: 1.02em; height: 50%;">
				<tbody>
					<tr>
						<td><c:if test="${not empty message}">
								<div id="loginmsgdiv"
									class="alert alert-danger alert-dismissible fade in"
									role="alert" style="z-index: 1000;position:absolute;">
									<button type="button" class="close" data-dismiss="alert"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									${message}
								</div>
							</c:if></td>
					</tr>
					<tr>
						<td><img src="images/AvallisCorpLogo.png"
							style="    max-width: 46%; margin-top: 52px;  margin-left: 6px;">
							</td>
					</tr>
					<tr style="text-indent: 6px;">
						<td><label for="txtFldUserId">&nbsp; </label></td>
					</tr>
					<tr style="text-indent: 12px;">
						<td>
						<div class="input-container">
					    <i class="fa fa-user icon" style="font-size:16px;color: #378aa2;"></i>&nbsp;&nbsp;
					    <input class="textfilds" id="txtFldUserId"
												name="txtFldUserId" required="required" data-toggle="popover" title="Login"  autocomplete="off" data-content="Key-in User Id"
												type="text" style="font-size:150%"/>
  					</div>
						
							
							</td>
					</tr>
					<tr style="text-indent: 6px;">
						<td><label for="txtFldUserPassword">&nbsp;</label></td>
					</tr>
					<tr style="text-indent: 12px;">
						<td>
					<div class="input-container">
						    <i class="fa fa-key icon" style="font-size:16px;color: #378aa2;"></i>&nbsp;&nbsp;
						   <input class="textfilds" id="txtFldUserPassword"	name="txtFldUserPassword" required="required" type="password"  data-toggle="popover" title="Login" data-content="Key-in Password">
													
						  </div>
						
							
							</td>
					</tr>

					<tr style="text-indent: 2px;display:none">

						<td><span style="margin-left: 175px;"> 
						<a style="cursor: help;">Forgot&nbsp;Password?</a></span>
							<!--                                 <input type="checkbox"/> &nbsp; Remember Me -->
						</td>

					</tr> 
					<tr style="text-indent: 6px;">
						<td> 
						<button type="button" id="btnloginId"  class="button button-4 button-4a icon-arrow-right" onclick="submitLogin()">
						<i class="fa fa-arrow-right"></i>Log in</button>
						 <img src="images/loginload.gif" id="loadit" width="15%" class="hidden"> 
						 
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</form>
		<!--  </section> -->
	</div>

</div>





