package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaInputinvestmentsDets generated by hbm2java
 */
public class FnaInputinvestmentsDets implements java.io.Serializable {

	private String owninvstId;
	private FnaSelfspouseDets fnaSelfspouseDets;
	private String invOwner;
	private String invType;
	private String invFa;
	private String invAnlysByPtflio;  
	private String invInstname;
	private String invDesc;
	private Double invEstrate;
	private Double invAmount;
	private String invPaymethod;
	private Date invDate;
	private Double invCurrbid;
	private Double invUnitsalloc;
	private Double invCurrentNAV;
	private String invAnyregplan;
	private Double invRegplanAmount;
	private String invRegplanFreq;
	private Double invRegplanFromyrs;
	private Double invRegplanToyrs;
	private String invObjective;
	private Double invYrstoret;
	private String invChildname;
	private Double invAccprcnt;
	private String invRemarks; 
	private Double invAnnlDividPrct; 
	private String invDividPaymode;
	private String invCreatedBy;
	private Date invCreatedDate;
	private String invModifiedBy;
	private Date invModifiedDate;
	private String invReferenceId;
	private Double invDividendAmt; 
	private String invDividendBasdOn;
	private String invDividendReInv;
	private Double invDivPeriod; 
	private Double invDivPARAmt; 
	private String invBasisOfDisbursement;
	private Double invDisburseAmount;
	private Double invDisburseYears;
	
	public FnaInputinvestmentsDets() {
	}

	public FnaInputinvestmentsDets(String owninvstId) {
		this.owninvstId = owninvstId;
	}
 
	
	
	public FnaInputinvestmentsDets(String owninvstId,
			FnaSelfspouseDets fnaSelfspouseDets, String invOwner,
			String invType, String invFa, String invAnlysByPtflio,
			String invInstname, String invDesc, Double invEstrate,
			Double invAmount, String invPaymethod, Date invDate,
			Double invCurrbid, Double invUnitsalloc, Double invCurrentNAV,
			String invAnyregplan, Double invRegplanAmount,
			String invRegplanFreq, Double invRegplanFromyrs,
			Double invRegplanToyrs, String invObjective, Double invYrstoret,
			String invChildname, Double invAccprcnt, String invRemarks,
			Double invAnnlDividPrct, String invDividPaymode,
			String invCreatedBy, Date invCreatedDate, String invModifiedBy,
			Date invModifiedDate, String invReferenceId, Double invDividendAmt,
			String invDividendBasdOn, String invDividendReInv,
			Double invDivPeriod,Double invDivPARAmt,
			String invBasisOfDisbursement,Double invDisburseAmount,Double invDisburseYears) { 
		this.owninvstId = owninvstId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.invOwner = invOwner;
		this.invType = invType;
		this.invFa = invFa;
		this.invAnlysByPtflio = invAnlysByPtflio;
		this.invInstname = invInstname;
		this.invDesc = invDesc;
		this.invEstrate = invEstrate;
		this.invAmount = invAmount;
		this.invPaymethod = invPaymethod;
		this.invDate = invDate;
		this.invCurrbid = invCurrbid;
		this.invUnitsalloc = invUnitsalloc;
		this.invCurrentNAV = invCurrentNAV;
		this.invAnyregplan = invAnyregplan;
		this.invRegplanAmount = invRegplanAmount;
		this.invRegplanFreq = invRegplanFreq;
		this.invRegplanFromyrs = invRegplanFromyrs;
		this.invRegplanToyrs = invRegplanToyrs;
		this.invObjective = invObjective;
		this.invYrstoret = invYrstoret;
		this.invChildname = invChildname;
		this.invAccprcnt = invAccprcnt;
		this.invRemarks = invRemarks;
		this.invAnnlDividPrct = invAnnlDividPrct;
		this.invDividPaymode = invDividPaymode;
		this.invCreatedBy = invCreatedBy;
		this.invCreatedDate = invCreatedDate;
		this.invModifiedBy = invModifiedBy;
		this.invModifiedDate = invModifiedDate;
		this.invReferenceId = invReferenceId;
		this.invDividendAmt = invDividendAmt;
		this.invDividendBasdOn = invDividendBasdOn;
		this.invDividendReInv = invDividendReInv;
		this.invDivPeriod = invDivPeriod;
		this.invDivPARAmt = invDivPARAmt;
		this.invBasisOfDisbursement = invBasisOfDisbursement;
		this.invDisburseAmount = invDisburseAmount;
		this.invDisburseYears = invDisburseYears;
	}

	public String getInvReferenceId() {
		return this.invReferenceId;
	}


	public String getInvBasisOfDisbursement() {
		return this.invBasisOfDisbursement;
	}

	public void setInvBasisOfDisbursement(String invBasisOfDisbursement) {
		this.invBasisOfDisbursement = invBasisOfDisbursement;
	}

	public Double getInvDisburseAmount() {
		return this.invDisburseAmount;
	}

	public void setInvDisburseAmount(Double invDisburseAmount) {
		this.invDisburseAmount = invDisburseAmount;
	}

	public Double getInvDisburseYears() {
		return this.invDisburseYears;
	}

	public void setInvDisburseYears(Double invDisburseYears) {
		this.invDisburseYears = invDisburseYears;
	}

	public Double getInvDivPARAmt() {
		return this.invDivPARAmt;
	}

	public void setInvDivPARAmt(Double invDivPARAmt) {
		this.invDivPARAmt = invDivPARAmt;
	}

	public Double getInvDividendAmt() {
		return this.invDividendAmt;
	}

	public void setInvDividendAmt(Double invDividendAmt) {
		this.invDividendAmt = invDividendAmt;
	}

	public String getInvDividendBasdOn() {
		return this.invDividendBasdOn;
	}

	public void setInvDividendBasdOn(String invDividendBasdOn) {
		this.invDividendBasdOn = invDividendBasdOn;
	}

	public String getInvDividendReInv() {
		return this.invDividendReInv;
	}

	public void setInvDividendReInv(String invDividendReInv) {
		this.invDividendReInv = invDividendReInv;
	}

	public Double getInvDivPeriod() {
		return this.invDivPeriod;
	}

	public void setInvDivPeriod(Double invDivPeriod) {
		this.invDivPeriod = invDivPeriod;
	}

	public void setInvReferenceId(String invReferenceId) {
		this.invReferenceId = invReferenceId;
	}

	public String getInvDividPaymode() {
		return invDividPaymode;
	}

	public void setInvDividPaymode(String invDividPaymode) {
		this.invDividPaymode = invDividPaymode;
	}

	public String getOwninvstId() {
		return this.owninvstId;
	}

	public void setOwninvstId(String owninvstId) {
		this.owninvstId = owninvstId;
	}

	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return this.fnaSelfspouseDets;
	}

	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}

	public String getInvOwner() {
		return this.invOwner;
	}

	public void setInvOwner(String invOwner) {
		this.invOwner = invOwner;
	}

	public String getInvType() {
		return this.invType;
	}

	public void setInvType(String invType) {
		this.invType = invType;
	}

	public String getInvFa() {
		return this.invFa;
	}

	public void setInvFa(String invFa) {
		this.invFa = invFa;
	}

	public String getInvAnlysByPtflio() {
		return this.invAnlysByPtflio;
	}

	public void setInvAnlysByPtflio(String invAnlysByPtflio) {
		this.invAnlysByPtflio = invAnlysByPtflio;
	}

	public String getInvInstname() {
		return this.invInstname;
	}

	public void setInvInstname(String invInstname) {
		this.invInstname = invInstname;
	}

	public String getInvDesc() {
		return this.invDesc;
	}

	public void setInvDesc(String invDesc) {
		this.invDesc = invDesc;
	}

	public Double getInvEstrate() {
		return this.invEstrate;
	}

	public void setInvEstrate(Double invEstrate) {
		this.invEstrate = invEstrate;
	}

	public Double getInvAmount() {
		return this.invAmount;
	}

	public void setInvAmount(Double invAmount) {
		this.invAmount = invAmount;
	}

	public String getInvPaymethod() {
		return this.invPaymethod;
	}

	public void setInvPaymethod(String invPaymethod) {
		this.invPaymethod = invPaymethod;
	}

	public Date getInvDate() {
		return this.invDate;
	}

	public void setInvDate(Date invDate) {
		this.invDate = invDate;
	}

	public Double getInvCurrbid() {
		return this.invCurrbid;
	}

	public void setInvCurrbid(Double invCurrbid) {
		this.invCurrbid = invCurrbid;
	}

	public Double getInvUnitsalloc() {
		return this.invUnitsalloc;
	}

	public void setInvUnitsalloc(Double invUnitsalloc) {
		this.invUnitsalloc = invUnitsalloc;
	}

	public Double getInvCurrentNAV() {
		return this.invCurrentNAV;
	}

	public void setInvCurrentNAV(Double invCurrentNAV) {
		this.invCurrentNAV = invCurrentNAV;
	}

	public String getInvAnyregplan() {
		return this.invAnyregplan;
	}

	public void setInvAnyregplan(String invAnyregplan) {
		this.invAnyregplan = invAnyregplan;
	}

	public Double getInvRegplanAmount() {
		return this.invRegplanAmount;
	}

	public void setInvRegplanAmount(Double invRegplanAmount) {
		this.invRegplanAmount = invRegplanAmount;
	}

	public String getInvRegplanFreq() {
		return this.invRegplanFreq;
	}

	public void setInvRegplanFreq(String invRegplanFreq) {
		this.invRegplanFreq = invRegplanFreq;
	}

	public Double getInvRegplanFromyrs() {
		return this.invRegplanFromyrs;
	}

	public void setInvRegplanFromyrs(Double invRegplanFromyrs) {
		this.invRegplanFromyrs = invRegplanFromyrs;
	}

	public Double getInvRegplanToyrs() {
		return this.invRegplanToyrs;
	}

	public void setInvRegplanToyrs(Double invRegplanToyrs) {
		this.invRegplanToyrs = invRegplanToyrs;
	}

	public String getInvObjective() {
		return this.invObjective;
	}

	public void setInvObjective(String invObjective) {
		this.invObjective = invObjective;
	}

	public Double getInvYrstoret() {
		return this.invYrstoret;
	}

	public void setInvYrstoret(Double invYrstoret) {
		this.invYrstoret = invYrstoret;
	}

	public String getInvChildname() {
		return this.invChildname;
	}

	public void setInvChildname(String invChildname) {
		this.invChildname = invChildname;
	}

	public Double getInvAccprcnt() {
		return this.invAccprcnt;
	}

	public void setInvAccprcnt(Double invAccprcnt) {
		this.invAccprcnt = invAccprcnt;
	}

	public String getInvRemarks() {
		return this.invRemarks;
	}

	public void setInvRemarks(String invRemarks) {
		this.invRemarks = invRemarks;
	}

	public Double getInvAnnlDividPrct() {
		return this.invAnnlDividPrct;
	}

	public void setInvAnnlDividPrct(Double invAnnlDividPrct) {
		this.invAnnlDividPrct = invAnnlDividPrct;
	}

	public String getInvCreatedBy() {
		return this.invCreatedBy;
	}

	public void setInvCreatedBy(String invCreatedBy) {
		this.invCreatedBy = invCreatedBy;
	}

	public Date getInvCreatedDate() {
		return this.invCreatedDate;
	}

	public void setInvCreatedDate(Date invCreatedDate) {
		this.invCreatedDate = invCreatedDate;
	}

	public String getInvModifiedBy() {
		return this.invModifiedBy;
	}

	public void setInvModifiedBy(String invModifiedBy) {
		this.invModifiedBy = invModifiedBy;
	}

	public Date getInvModifiedDate() {
		return this.invModifiedDate;
	}

	public void setInvModifiedDate(Date invModifiedDate) {
		this.invModifiedDate = invModifiedDate;
	}

	 

}
