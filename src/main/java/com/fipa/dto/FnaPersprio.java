package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaPersprio generated by hbm2java
 */
public class FnaPersprio implements java.io.Serializable {

	private String persprioId;
	private FnaSelfspouseDets fnaSelfspouseDets;
	private String ppHospexp;
	private String ppOutpexp;
	private String ppMajorill;
	private String ppDentalexp;
	private String ppOldagedisable;
	private String ppLossincome;
	private String ppInspolicyflg;
	private String ppInspolicydets;
	private String ppCreatedBy;
	private Date ppCreatedDate;
	private String ppModifiedBy;
	private Date ppModifiedDate;

	public FnaPersprio() {
	}

	public FnaPersprio(String persprioId) {
		this.persprioId = persprioId;
	}

	public FnaPersprio(String persprioId, FnaSelfspouseDets fnaSelfspouseDets,
			String ppHospexp, String ppOutpexp, String ppMajorill,
			String ppDentalexp, String ppOldagedisable, String ppLossincome,
			String ppInspolicyflg, String ppInspolicydets, String ppCreatedBy,
			Date ppCreatedDate, String ppModifiedBy, Date ppModifiedDate) {
		this.persprioId = persprioId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.ppHospexp = ppHospexp;
		this.ppOutpexp = ppOutpexp;
		this.ppMajorill = ppMajorill;
		this.ppDentalexp = ppDentalexp;
		this.ppOldagedisable = ppOldagedisable;
		this.ppLossincome = ppLossincome;
		this.ppInspolicyflg = ppInspolicyflg;
		this.ppInspolicydets = ppInspolicydets;
		this.ppCreatedBy = ppCreatedBy;
		this.ppCreatedDate = ppCreatedDate;
		this.ppModifiedBy = ppModifiedBy;
		this.ppModifiedDate = ppModifiedDate;
	}

	public String getPersprioId() {
		return this.persprioId;
	}

	public void setPersprioId(String persprioId) {
		this.persprioId = persprioId;
	}

	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return this.fnaSelfspouseDets;
	}

	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}

	public String getPpHospexp() {
		return this.ppHospexp;
	}

	public void setPpHospexp(String ppHospexp) {
		this.ppHospexp = ppHospexp;
	}

	public String getPpOutpexp() {
		return this.ppOutpexp;
	}

	public void setPpOutpexp(String ppOutpexp) {
		this.ppOutpexp = ppOutpexp;
	}

	public String getPpMajorill() {
		return this.ppMajorill;
	}

	public void setPpMajorill(String ppMajorill) {
		this.ppMajorill = ppMajorill;
	}

	public String getPpDentalexp() {
		return this.ppDentalexp;
	}

	public void setPpDentalexp(String ppDentalexp) {
		this.ppDentalexp = ppDentalexp;
	}

	public String getPpOldagedisable() {
		return this.ppOldagedisable;
	}

	public void setPpOldagedisable(String ppOldagedisable) {
		this.ppOldagedisable = ppOldagedisable;
	}

	public String getPpLossincome() {
		return this.ppLossincome;
	}

	public void setPpLossincome(String ppLossincome) {
		this.ppLossincome = ppLossincome;
	}

	public String getPpInspolicyflg() {
		return this.ppInspolicyflg;
	}

	public void setPpInspolicyflg(String ppInspolicyflg) {
		this.ppInspolicyflg = ppInspolicyflg;
	}

	public String getPpInspolicydets() {
		return this.ppInspolicydets;
	}

	public void setPpInspolicydets(String ppInspolicydets) {
		this.ppInspolicydets = ppInspolicydets;
	}

	public String getPpCreatedBy() {
		return this.ppCreatedBy;
	}

	public void setPpCreatedBy(String ppCreatedBy) {
		this.ppCreatedBy = ppCreatedBy;
	}

	public Date getPpCreatedDate() {
		return this.ppCreatedDate;
	}

	public void setPpCreatedDate(Date ppCreatedDate) {
		this.ppCreatedDate = ppCreatedDate;
	}

	public String getPpModifiedBy() {
		return this.ppModifiedBy;
	}

	public void setPpModifiedBy(String ppModifiedBy) {
		this.ppModifiedBy = ppModifiedBy;
	}

	public Date getPpModifiedDate() {
		return this.ppModifiedDate;
	}

	public void setPpModifiedDate(Date ppModifiedDate) {
		this.ppModifiedDate = ppModifiedDate;
	}

}
