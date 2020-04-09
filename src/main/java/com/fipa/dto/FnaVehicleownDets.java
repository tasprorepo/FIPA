package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaVehicleownDets generated by hbm2java
 */
public class FnaVehicleownDets implements java.io.Serializable {

	private String vehiId;
	private FnaSelfspouseDets fnaSelfspouseDets;
	private String vehiOwner;
	private Double vehiMktvalue;
	private Double vehiLoanval;
	private String vehiLoanbank;
	private Double vehiPeriod;
	private Double vehiMonthInstall;
	private String vehiSoldOnDeath;
	private String vehiRemark;
	private String createdBy;
	private Date createdDate;

	public FnaVehicleownDets() {
	}

	public FnaVehicleownDets(String vehiId) {
		this.vehiId = vehiId;
	}

	public FnaVehicleownDets(String vehiId,
			FnaSelfspouseDets fnaSelfspouseDets, String vehiOwner,
			Double vehiMktvalue, Double vehiLoanval, String vehiLoanbank,
			Double vehiPeriod, Double vehiMonthInstall, String vehiSoldOnDeath,
			String vehiRemark, String createdBy, Date createdDate) {
		this.vehiId = vehiId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.vehiOwner = vehiOwner;
		this.vehiMktvalue = vehiMktvalue;
		this.vehiLoanval = vehiLoanval;
		this.vehiLoanbank = vehiLoanbank;
		this.vehiPeriod = vehiPeriod;
		this.vehiMonthInstall = vehiMonthInstall;
		this.vehiSoldOnDeath = vehiSoldOnDeath;
		this.vehiRemark = vehiRemark;
		this.createdBy = createdBy;
		this.createdDate = createdDate;
	}

	public String getVehiId() {
		return this.vehiId;
	}

	public void setVehiId(String vehiId) {
		this.vehiId = vehiId;
	}

	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return this.fnaSelfspouseDets;
	}

	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}

	public String getVehiOwner() {
		return this.vehiOwner;
	}

	public void setVehiOwner(String vehiOwner) {
		this.vehiOwner = vehiOwner;
	}

	public Double getVehiMktvalue() {
		return this.vehiMktvalue;
	}

	public void setVehiMktvalue(Double vehiMktvalue) {
		this.vehiMktvalue = vehiMktvalue;
	}

	public Double getVehiLoanval() {
		return this.vehiLoanval;
	}

	public void setVehiLoanval(Double vehiLoanval) {
		this.vehiLoanval = vehiLoanval;
	}

	public String getVehiLoanbank() {
		return this.vehiLoanbank;
	}

	public void setVehiLoanbank(String vehiLoanbank) {
		this.vehiLoanbank = vehiLoanbank;
	}

	public Double getVehiPeriod() {
		return this.vehiPeriod;
	}

	public void setVehiPeriod(Double vehiPeriod) {
		this.vehiPeriod = vehiPeriod;
	}

	public Double getVehiMonthInstall() {
		return this.vehiMonthInstall;
	}

	public void setVehiMonthInstall(Double vehiMonthInstall) {
		this.vehiMonthInstall = vehiMonthInstall;
	}

	public String getVehiSoldOnDeath() {
		return this.vehiSoldOnDeath;
	}

	public void setVehiSoldOnDeath(String vehiSoldOnDeath) {
		this.vehiSoldOnDeath = vehiSoldOnDeath;
	}

	public String getVehiRemark() {
		return this.vehiRemark;
	}

	public void setVehiRemark(String vehiRemark) {
		this.vehiRemark = vehiRemark;
	}

	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

}