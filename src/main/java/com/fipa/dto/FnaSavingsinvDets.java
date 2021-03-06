package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaSavingsinvDets generated by hbm2java
 */
public class FnaSavingsinvDets implements java.io.Serializable {

	private String sainvId;
	private FnaSelfspouseDets fnaSelfspouseDets;
	private String sainvPurpose;
	private Double sainvWhen;
	private Double sainvAmount;
	private String saivnPriority;
	private String savinvRisklvl;
	private String sainvCreatedBy;
	private Date sainvCreatedDate;
	private String sainvModifiedBy;
	private Date sainvModifiedDate;

	public FnaSavingsinvDets() {
	}

	public FnaSavingsinvDets(String sainvId) {
		this.sainvId = sainvId;
	}

	public FnaSavingsinvDets(String sainvId,
			FnaSelfspouseDets fnaSelfspouseDets, String sainvPurpose,
			Double sainvWhen, Double sainvAmount, String saivnPriority,
			String savinvRisklvl, String sainvCreatedBy, Date sainvCreatedDate,
			String sainvModifiedBy, Date sainvModifiedDate) {
		this.sainvId = sainvId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.sainvPurpose = sainvPurpose;
		this.sainvWhen = sainvWhen;
		this.sainvAmount = sainvAmount;
		this.saivnPriority = saivnPriority;
		this.savinvRisklvl = savinvRisklvl;
		this.sainvCreatedBy = sainvCreatedBy;
		this.sainvCreatedDate = sainvCreatedDate;
		this.sainvModifiedBy = sainvModifiedBy;
		this.sainvModifiedDate = sainvModifiedDate;
	}

	public String getSainvId() {
		return this.sainvId;
	}

	public void setSainvId(String sainvId) {
		this.sainvId = sainvId;
	}

	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return this.fnaSelfspouseDets;
	}

	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}

	public String getSainvPurpose() {
		return this.sainvPurpose;
	}

	public void setSainvPurpose(String sainvPurpose) {
		this.sainvPurpose = sainvPurpose;
	}

	public Double getSainvWhen() {
		return this.sainvWhen;
	}

	public void setSainvWhen(Double sainvWhen) {
		this.sainvWhen = sainvWhen;
	}

	public Double getSainvAmount() {
		return this.sainvAmount;
	}

	public void setSainvAmount(Double sainvAmount) {
		this.sainvAmount = sainvAmount;
	}

	public String getSaivnPriority() {
		return this.saivnPriority;
	}

	public void setSaivnPriority(String saivnPriority) {
		this.saivnPriority = saivnPriority;
	}

	public String getSavinvRisklvl() {
		return this.savinvRisklvl;
	}

	public void setSavinvRisklvl(String savinvRisklvl) {
		this.savinvRisklvl = savinvRisklvl;
	}

	public String getSainvCreatedBy() {
		return this.sainvCreatedBy;
	}

	public void setSainvCreatedBy(String sainvCreatedBy) {
		this.sainvCreatedBy = sainvCreatedBy;
	}

	public Date getSainvCreatedDate() {
		return this.sainvCreatedDate;
	}

	public void setSainvCreatedDate(Date sainvCreatedDate) {
		this.sainvCreatedDate = sainvCreatedDate;
	}

	public String getSainvModifiedBy() {
		return this.sainvModifiedBy;
	}

	public void setSainvModifiedBy(String sainvModifiedBy) {
		this.sainvModifiedBy = sainvModifiedBy;
	}

	public Date getSainvModifiedDate() {
		return this.sainvModifiedDate;
	}

	public void setSainvModifiedDate(Date sainvModifiedDate) {
		this.sainvModifiedDate = sainvModifiedDate;
	}

}
