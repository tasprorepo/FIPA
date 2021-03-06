package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaFinLiability generated by hbm2java
 */
public class FnaFinLiability implements java.io.Serializable {

	private String liabId;//
	private FnaSelfspouseDets fnaSelfspouseDets;
	private Double liabSelfOverdraft;//
	private Double liabSpsOverdraft;//
	private Double liabSelfShortloan;//
	private Double liabSpsShortloan;//
	private Double liabSelfTaxes;//
	private Double liabSpsTaxes;//
	private Double liabSelfOthers;//
	private Double liabSpsOthers;//
	private String liabCreatedBy;//
	private Date liabCreatedDate;//
	private String liabModifiedBy;
	private Date liabModifiedDate;
	private Double liabSelfCcLoan;//
	private Double liabSpsCcLoan;//
	private Double liabSelfShortmort;//
	private Double liabSpsShortmort;//
	private Double liabSelfContigent;//
	private Double liabSpsContigent;//
	private Double liabFamOverdraft;
	private Double liabFamShortloan;
	private Double liabFamTaxes;
	private Double liabFamOthers;
	private Double liabFamCCLoan;
	private Double liabFamShortmort;
	private Double liabFamContigent; 
	
	public FnaFinLiability() {
	}

	public FnaFinLiability(String liabId) {
		this.liabId = liabId;
	}
 
	public FnaFinLiability(String liabId, FnaSelfspouseDets fnaSelfspouseDets,
			Double liabSelfOverdraft, Double liabSpsOverdraft,
			Double liabSelfShortloan, Double liabSpsShortloan,
			Double liabSelfTaxes, Double liabSpsTaxes, Double liabSelfOthers,
			Double liabSpsOthers, String liabCreatedBy, Date liabCreatedDate,
			String liabModifiedBy, Date liabModifiedDate,
			Double liabSelfCcLoan, Double liabSpsCcLoan,
			Double liabSelfShortmort, Double liabSpsShortmort,
			Double liabSelfContigent, Double liabSpsContigent,
			Double liabFamOverdraft, Double liabFamShortloan,
			Double liabFamTaxes, Double liabFamOthers, Double liabFamCCLoan,
			Double liabFamShortmort, Double liabFamContigent) {
		 
		this.liabId = liabId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.liabSelfOverdraft = liabSelfOverdraft;
		this.liabSpsOverdraft = liabSpsOverdraft;
		this.liabSelfShortloan = liabSelfShortloan;
		this.liabSpsShortloan = liabSpsShortloan;
		this.liabSelfTaxes = liabSelfTaxes;
		this.liabSpsTaxes = liabSpsTaxes;
		this.liabSelfOthers = liabSelfOthers;
		this.liabSpsOthers = liabSpsOthers;
		this.liabCreatedBy = liabCreatedBy;
		this.liabCreatedDate = liabCreatedDate;
		this.liabModifiedBy = liabModifiedBy;
		this.liabModifiedDate = liabModifiedDate;
		this.liabSelfCcLoan = liabSelfCcLoan;
		this.liabSpsCcLoan = liabSpsCcLoan;
		this.liabSelfShortmort = liabSelfShortmort;
		this.liabSpsShortmort = liabSpsShortmort;
		this.liabSelfContigent = liabSelfContigent;
		this.liabSpsContigent = liabSpsContigent;
		this.liabFamOverdraft = liabFamOverdraft;
		this.liabFamShortloan = liabFamShortloan;
		this.liabFamTaxes = liabFamTaxes;
		this.liabFamOthers = liabFamOthers;
		this.liabFamCCLoan = liabFamCCLoan;
		this.liabFamShortmort = liabFamShortmort;
		this.liabFamContigent = liabFamContigent;
	}

	public Double getLiabFamOverdraft() {
		return this.liabFamOverdraft;
	}

	public void setLiabFamOverdraft(Double liabFamOverdraft) {
		this.liabFamOverdraft = liabFamOverdraft;
	}

	public Double getLiabFamShortloan() {
		return this.liabFamShortloan;
	}

	public void setLiabFamShortloan(Double liabFamShortloan) {
		this.liabFamShortloan = liabFamShortloan;
	}

	public Double getLiabFamTaxes() {
		return this.liabFamTaxes;
	}

	public void setLiabFamTaxes(Double liabFamTaxes) {
		this.liabFamTaxes = liabFamTaxes;
	}

	public Double getLiabFamOthers() {
		return this.liabFamOthers;
	}

	public void setLiabFamOthers(Double liabFamOthers) {
		this.liabFamOthers = liabFamOthers;
	}

	public Double getLiabFamCCLoan() {
		return this.liabFamCCLoan;
	}

	public void setLiabFamCCLoan(Double liabFamCCLoan) {
		this.liabFamCCLoan = liabFamCCLoan;
	}

	public Double getLiabFamShortmort() {
		return this.liabFamShortmort;
	}

	public void setLiabFamShortmort(Double liabFamShortmort) {
		this.liabFamShortmort = liabFamShortmort;
	}

	public Double getLiabFamContigent() {
		return this.liabFamContigent;
	}

	public void setLiabFamContigent(Double liabFamContigent) {
		this.liabFamContigent = liabFamContigent;
	}

	public String getLiabId() {
		return this.liabId;
	}

	public void setLiabId(String liabId) {
		this.liabId = liabId;
	}

	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return this.fnaSelfspouseDets;
	}

	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}

	public Double getLiabSelfOverdraft() {
		return this.liabSelfOverdraft;
	}

	public void setLiabSelfOverdraft(Double liabSelfOverdraft) {
		this.liabSelfOverdraft = liabSelfOverdraft;
	}

	public Double getLiabSpsOverdraft() {
		return this.liabSpsOverdraft;
	}

	public void setLiabSpsOverdraft(Double liabSpsOverdraft) {
		this.liabSpsOverdraft = liabSpsOverdraft;
	}

	public Double getLiabSelfShortloan() {
		return this.liabSelfShortloan;
	}

	public void setLiabSelfShortloan(Double liabSelfShortloan) {
		this.liabSelfShortloan = liabSelfShortloan;
	}

	public Double getLiabSpsShortloan() {
		return this.liabSpsShortloan;
	}

	public void setLiabSpsShortloan(Double liabSpsShortloan) {
		this.liabSpsShortloan = liabSpsShortloan;
	}

	public Double getLiabSelfTaxes() {
		return this.liabSelfTaxes;
	}

	public void setLiabSelfTaxes(Double liabSelfTaxes) {
		this.liabSelfTaxes = liabSelfTaxes;
	}

	public Double getLiabSpsTaxes() {
		return this.liabSpsTaxes;
	}

	public void setLiabSpsTaxes(Double liabSpsTaxes) {
		this.liabSpsTaxes = liabSpsTaxes;
	}

	public Double getLiabSelfOthers() {
		return this.liabSelfOthers;
	}

	public void setLiabSelfOthers(Double liabSelfOthers) {
		this.liabSelfOthers = liabSelfOthers;
	}

	public Double getLiabSpsOthers() {
		return this.liabSpsOthers;
	}

	public void setLiabSpsOthers(Double liabSpsOthers) {
		this.liabSpsOthers = liabSpsOthers;
	}

	public String getLiabCreatedBy() {
		return this.liabCreatedBy;
	}

	public void setLiabCreatedBy(String liabCreatedBy) {
		this.liabCreatedBy = liabCreatedBy;
	}

	public Date getLiabCreatedDate() {
		return this.liabCreatedDate;
	}

	public void setLiabCreatedDate(Date liabCreatedDate) {
		this.liabCreatedDate = liabCreatedDate;
	}

	public String getLiabModifiedBy() {
		return this.liabModifiedBy;
	}

	public void setLiabModifiedBy(String liabModifiedBy) {
		this.liabModifiedBy = liabModifiedBy;
	}

	public Date getLiabModifiedDate() {
		return this.liabModifiedDate;
	}

	public void setLiabModifiedDate(Date liabModifiedDate) {
		this.liabModifiedDate = liabModifiedDate;
	}

	public Double getLiabSelfCcLoan() {
		return this.liabSelfCcLoan;
	}

	public void setLiabSelfCcLoan(Double liabSelfCcLoan) {
		this.liabSelfCcLoan = liabSelfCcLoan;
	}

	public Double getLiabSpsCcLoan() {
		return this.liabSpsCcLoan;
	}

	public void setLiabSpsCcLoan(Double liabSpsCcLoan) {
		this.liabSpsCcLoan = liabSpsCcLoan;
	}

	public Double getLiabSelfShortmort() {
		return this.liabSelfShortmort;
	}

	public void setLiabSelfShortmort(Double liabSelfShortmort) {
		this.liabSelfShortmort = liabSelfShortmort;
	}

	public Double getLiabSpsShortmort() {
		return this.liabSpsShortmort;
	}

	public void setLiabSpsShortmort(Double liabSpsShortmort) {
		this.liabSpsShortmort = liabSpsShortmort;
	}

	public Double getLiabSelfContigent() {
		return this.liabSelfContigent;
	}

	public void setLiabSelfContigent(Double liabSelfContigent) {
		this.liabSelfContigent = liabSelfContigent;
	}

	public Double getLiabSpsContigent() {
		return this.liabSpsContigent;
	}

	public void setLiabSpsContigent(Double liabSpsContigent) {
		this.liabSpsContigent = liabSpsContigent;
	}

}
