package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaLoginpageMsg generated by hbm2java
 */
public class FnaLoginpageMsg implements java.io.Serializable {

	private String id;
	private String loginMsg;
	private String msgAuthor;
	private Date dispDateFrom;
	private Date dispDateTo;
	private String thisWeekQuote;

	public FnaLoginpageMsg() {
	}

	public FnaLoginpageMsg(String id, String loginMsg) {
		this.id = id;
		this.loginMsg = loginMsg;
	}

	public FnaLoginpageMsg(String id, String loginMsg, String msgAuthor,
			Date dispDateFrom, Date dispDateTo, String thisWeekQuote) {
		this.id = id;
		this.loginMsg = loginMsg;
		this.msgAuthor = msgAuthor;
		this.dispDateFrom = dispDateFrom;
		this.dispDateTo = dispDateTo;
		this.thisWeekQuote = thisWeekQuote;
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getLoginMsg() {
		return this.loginMsg;
	}

	public void setLoginMsg(String loginMsg) {
		this.loginMsg = loginMsg;
	}

	public String getMsgAuthor() {
		return this.msgAuthor;
	}

	public void setMsgAuthor(String msgAuthor) {
		this.msgAuthor = msgAuthor;
	}

	public Date getDispDateFrom() {
		return this.dispDateFrom;
	}

	public void setDispDateFrom(Date dispDateFrom) {
		this.dispDateFrom = dispDateFrom;
	}

	public Date getDispDateTo() {
		return this.dispDateTo;
	}

	public void setDispDateTo(Date dispDateTo) {
		this.dispDateTo = dispDateTo;
	}

	public String getThisWeekQuote() {
		return this.thisWeekQuote;
	}

	public void setThisWeekQuote(String thisWeekQuote) {
		this.thisWeekQuote = thisWeekQuote;
	}

}
