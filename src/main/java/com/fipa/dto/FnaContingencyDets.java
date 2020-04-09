package com.fipa.dto;

// Generated May 17, 2018 11:20:36 AM by Hibernate Tools 4.0.0

import java.util.Date;

/**
 * FnaContingencyDets generated by hbm2java
 */
public class FnaContingencyDets implements java.io.Serializable {

	private String conId;//
	private FnaSelfspouseDets fnaSelfspouseDets;
	private Double tpdSelfAmt;//
	private Double tpdSpsAmt;//
	private Double tpdChildAmt;//
	private Double tpdFamilyAmt;//
	private Double sdLivingneedSpsPrcnt;//
	private Double sdLivingneedChildPrcnt;//
	private Double sdLivingneedFamilyPrcnt;//
	private String sdIntendSpsYrs;//
	private String sdIntendChildYrs;//
	private String sdIntendFamilyYrs;//
	private Double sdSpsAnnlIncome;//
	private String sdSpsAnnlIncomeYrs;//
	private String sdLivingneedSelfRemark;//
	private Double spdLivingneedSpsPrcnt;//
	private Double spdLivingneedChildPrcnt;//
	private Double spdLivingneedFamilyPrcnt;//
	private String spdIntendSelfYrs;//
	private String spdIntendChildYrs;//
	private String spdIntendFamilyYrs;//
	private Double spdSelfAnnlIncome;//
	private String spdSelfAnnlIncomeYrs;//
	private String sdLivingneedSpsRemark;//
	private Double tpdSelfLivingneedPrcnt;//
	private Double tpdSpsLivingneedPrcnt;//
	private Double tpdChildLivingneedPrcnt;//
	private Double tpdFamilyLivingneedPrcnt;//
	private String tpdSelfIntendYrs;//
	private String tpdSpsIntendYrs;//
	private String tpdChildIntendYrs;//
	private String tpdFamilyIntendYrs;//
	private Double tpdSelfAnnlincome;//
	private String tpdSelfAnnlincomeYr;//
	private Double tpdSelfMedicalexpannl;//
	private String tpdSelfMedicalexpannlYr;//
	private String tpdSelfRemark;//
	private Double tpdsSelfLivingneedPrcnt;//
	private Double tpdsSpsLivingneedPrcnt;//
	private Double tpdsChildLivingneedPrcnt;//
	private Double tpdsFamilyLivingneedPrcnt;//
	private String tpdsSelfIntendYrs;//
	private String tpdsSpsIntendYrs;//
	private String tpdsChildIntendYrs;//
	private String tpdsFamilyIntendYrs;//
	private Double tpdsSpsAnnlincome;//
	private String tpdsSpsAnnlincomeYr;//
	private Double tpdsSpsMedicalexpannl;//
	private String tpdsSpsMedicalexpannlYr;//
	private String tpdSpsRemark;//
	private Double ciSelfLivingneedPrcnt;//
	private Double ciSpsLivingneedPrcnt;//
	private Double ciChildLivingneedPrcnt;//
	private Double ciFamilyLivingneedPrcnt;//
	private String ciSelfIntendYrs;//
	private String ciSpsIntendYrs;//
	private String ciChildIntendYrs;//
	private String ciFamilyIntendYrs;//
	private Double ciSelfAnnlincome;//
	private Short ciSelfAnnlincomeYr;//
	private Double ciSelfOthannlexp;//
	private String ciSelfOthannlexpYr;//
	private Double ciSelfLumpsummc;//
	private String ciSelfRemark;//
	private Double cisSelfLivingneedPrcnt;//
	private Double cisSpsLivingneedPrcnt;//
	private Double cisChildLivingneedPrcnt;//
	private Double cisFamilyLivingneedPrcnt;//
	private String cisSelfIntendYrs;//
	private String cisSpsIntendYrs;//
	private String cisChildIntendYrs;//
	private String cisFamilyIntendYrs;//
	private Double cisSpsAnnlincome;//
	private Double cisSpsAnnlincomeYr;//
	private Double cisSpsOthannlexp;//
	private String cisSpsOthannlexpYr;//
	private Double cisSpsLumpsummc;//
	private String ciSpsRemark;//
	private Double eduFund;//
	private Double liaboffsetSelfPrcnt;//
	private Double liaboffsetSpsPrcnt;//
	private Double lastexpSelfAmt;//
	private Double lastexpSpsAmt;//
	private String contCrtdBy;//
	private Date contCrtdDate;//
	private String contModBy;
	private Date contModDate;

	public FnaContingencyDets() {
	}

	public FnaContingencyDets(String conId) {
		this.conId = conId;
	}

	public FnaContingencyDets(String conId,
			FnaSelfspouseDets fnaSelfspouseDets, Double tpdSelfAmt,
			Double tpdSpsAmt, Double tpdChildAmt, Double tpdFamilyAmt,
			Double sdLivingneedSpsPrcnt, Double sdLivingneedChildPrcnt,
			Double sdLivingneedFamilyPrcnt, String sdIntendSpsYrs,
			String sdIntendChildYrs, String sdIntendFamilyYrs,
			Double sdSpsAnnlIncome, String sdSpsAnnlIncomeYrs,
			String sdLivingneedSelfRemark, Double spdLivingneedSpsPrcnt,
			Double spdLivingneedChildPrcnt, Double spdLivingneedFamilyPrcnt,
			String spdIntendSelfYrs, String spdIntendChildYrs,
			String spdIntendFamilyYrs, Double spdSelfAnnlIncome,
			String spdSelfAnnlIncomeYrs, String sdLivingneedSpsRemark,
			Double tpdSelfLivingneedPrcnt, Double tpdSpsLivingneedPrcnt,
			Double tpdChildLivingneedPrcnt, Double tpdFamilyLivingneedPrcnt,
			String tpdSelfIntendYrs, String tpdSpsIntendYrs,
			String tpdChildIntendYrs, String tpdFamilyIntendYrs,
			Double tpdSelfAnnlincome, String tpdSelfAnnlincomeYr,
			Double tpdSelfMedicalexpannl, String tpdSelfMedicalexpannlYr,
			String tpdSelfRemark, Double tpdsSelfLivingneedPrcnt,
			Double tpdsSpsLivingneedPrcnt, Double tpdsChildLivingneedPrcnt,
			Double tpdsFamilyLivingneedPrcnt, String tpdsSelfIntendYrs,
			String tpdsSpsIntendYrs, String tpdsChildIntendYrs,
			String tpdsFamilyIntendYrs, Double tpdsSpsAnnlincome,
			String tpdsSpsAnnlincomeYr, Double tpdsSpsMedicalexpannl,
			String tpdsSpsMedicalexpannlYr, String tpdSpsRemark,
			Double ciSelfLivingneedPrcnt, Double ciSpsLivingneedPrcnt,
			Double ciChildLivingneedPrcnt, Double ciFamilyLivingneedPrcnt,
			String ciSelfIntendYrs, String ciSpsIntendYrs,
			String ciChildIntendYrs, String ciFamilyIntendYrs,
			Double ciSelfAnnlincome, Short ciSelfAnnlincomeYr,
			Double ciSelfOthannlexp, String ciSelfOthannlexpYr,
			Double ciSelfLumpsummc, String ciSelfRemark,
			Double cisSelfLivingneedPrcnt, Double cisSpsLivingneedPrcnt,
			Double cisChildLivingneedPrcnt, Double cisFamilyLivingneedPrcnt,
			String cisSelfIntendYrs, String cisSpsIntendYrs,
			String cisChildIntendYrs, String cisFamilyIntendYrs,
			Double cisSpsAnnlincome, Double cisSpsAnnlincomeYr,
			Double cisSpsOthannlexp, String cisSpsOthannlexpYr,
			Double cisSpsLumpsummc, String ciSpsRemark, Double eduFund,
			Double liaboffsetSelfPrcnt, Double liaboffsetSpsPrcnt,
			Double lastexpSelfAmt, Double lastexpSpsAmt, String contCrtdBy,
			Date contCrtdDate, String contModBy, Date contModDate) {
		this.conId = conId;
		this.fnaSelfspouseDets = fnaSelfspouseDets;
		this.tpdSelfAmt = tpdSelfAmt;
		this.tpdSpsAmt = tpdSpsAmt;
		this.tpdChildAmt = tpdChildAmt;
		this.tpdFamilyAmt = tpdFamilyAmt;
		this.sdLivingneedSpsPrcnt = sdLivingneedSpsPrcnt;
		this.sdLivingneedChildPrcnt = sdLivingneedChildPrcnt;
		this.sdLivingneedFamilyPrcnt = sdLivingneedFamilyPrcnt;
		this.sdIntendSpsYrs = sdIntendSpsYrs;
		this.sdIntendChildYrs = sdIntendChildYrs;
		this.sdIntendFamilyYrs = sdIntendFamilyYrs;
		this.sdSpsAnnlIncome = sdSpsAnnlIncome;
		this.sdSpsAnnlIncomeYrs = sdSpsAnnlIncomeYrs;
		this.sdLivingneedSelfRemark = sdLivingneedSelfRemark;
		this.spdLivingneedSpsPrcnt = spdLivingneedSpsPrcnt;
		this.spdLivingneedChildPrcnt = spdLivingneedChildPrcnt;
		this.spdLivingneedFamilyPrcnt = spdLivingneedFamilyPrcnt;
		this.spdIntendSelfYrs = spdIntendSelfYrs;
		this.spdIntendChildYrs = spdIntendChildYrs;
		this.spdIntendFamilyYrs = spdIntendFamilyYrs;
		this.spdSelfAnnlIncome = spdSelfAnnlIncome;
		this.spdSelfAnnlIncomeYrs = spdSelfAnnlIncomeYrs;
		this.sdLivingneedSpsRemark = sdLivingneedSpsRemark;
		this.tpdSelfLivingneedPrcnt = tpdSelfLivingneedPrcnt;
		this.tpdSpsLivingneedPrcnt = tpdSpsLivingneedPrcnt;
		this.tpdChildLivingneedPrcnt = tpdChildLivingneedPrcnt;
		this.tpdFamilyLivingneedPrcnt = tpdFamilyLivingneedPrcnt;
		this.tpdSelfIntendYrs = tpdSelfIntendYrs;
		this.tpdSpsIntendYrs = tpdSpsIntendYrs;
		this.tpdChildIntendYrs = tpdChildIntendYrs;
		this.tpdFamilyIntendYrs = tpdFamilyIntendYrs;
		this.tpdSelfAnnlincome = tpdSelfAnnlincome;
		this.tpdSelfAnnlincomeYr = tpdSelfAnnlincomeYr;
		this.tpdSelfMedicalexpannl = tpdSelfMedicalexpannl;
		this.tpdSelfMedicalexpannlYr = tpdSelfMedicalexpannlYr;
		this.tpdSelfRemark = tpdSelfRemark;
		this.tpdsSelfLivingneedPrcnt = tpdsSelfLivingneedPrcnt;
		this.tpdsSpsLivingneedPrcnt = tpdsSpsLivingneedPrcnt;
		this.tpdsChildLivingneedPrcnt = tpdsChildLivingneedPrcnt;
		this.tpdsFamilyLivingneedPrcnt = tpdsFamilyLivingneedPrcnt;
		this.tpdsSelfIntendYrs = tpdsSelfIntendYrs;
		this.tpdsSpsIntendYrs = tpdsSpsIntendYrs;
		this.tpdsChildIntendYrs = tpdsChildIntendYrs;
		this.tpdsFamilyIntendYrs = tpdsFamilyIntendYrs;
		this.tpdsSpsAnnlincome = tpdsSpsAnnlincome;
		this.tpdsSpsAnnlincomeYr = tpdsSpsAnnlincomeYr;
		this.tpdsSpsMedicalexpannl = tpdsSpsMedicalexpannl;
		this.tpdsSpsMedicalexpannlYr = tpdsSpsMedicalexpannlYr;
		this.tpdSpsRemark = tpdSpsRemark;
		this.ciSelfLivingneedPrcnt = ciSelfLivingneedPrcnt;
		this.ciSpsLivingneedPrcnt = ciSpsLivingneedPrcnt;
		this.ciChildLivingneedPrcnt = ciChildLivingneedPrcnt;
		this.ciFamilyLivingneedPrcnt = ciFamilyLivingneedPrcnt;
		this.ciSelfIntendYrs = ciSelfIntendYrs;
		this.ciSpsIntendYrs = ciSpsIntendYrs;
		this.ciChildIntendYrs = ciChildIntendYrs;
		this.ciFamilyIntendYrs = ciFamilyIntendYrs;
		this.ciSelfAnnlincome = ciSelfAnnlincome;
		this.ciSelfAnnlincomeYr = ciSelfAnnlincomeYr;
		this.ciSelfOthannlexp = ciSelfOthannlexp;
		this.ciSelfOthannlexpYr = ciSelfOthannlexpYr;
		this.ciSelfLumpsummc = ciSelfLumpsummc;
		this.ciSelfRemark = ciSelfRemark;
		this.cisSelfLivingneedPrcnt = cisSelfLivingneedPrcnt;
		this.cisSpsLivingneedPrcnt = cisSpsLivingneedPrcnt;
		this.cisChildLivingneedPrcnt = cisChildLivingneedPrcnt;
		this.cisFamilyLivingneedPrcnt = cisFamilyLivingneedPrcnt;
		this.cisSelfIntendYrs = cisSelfIntendYrs;
		this.cisSpsIntendYrs = cisSpsIntendYrs;
		this.cisChildIntendYrs = cisChildIntendYrs;
		this.cisFamilyIntendYrs = cisFamilyIntendYrs;
		this.cisSpsAnnlincome = cisSpsAnnlincome;
		this.cisSpsAnnlincomeYr = cisSpsAnnlincomeYr;
		this.cisSpsOthannlexp = cisSpsOthannlexp;
		this.cisSpsOthannlexpYr = cisSpsOthannlexpYr;
		this.cisSpsLumpsummc = cisSpsLumpsummc;
		this.ciSpsRemark = ciSpsRemark;
		this.eduFund = eduFund;
		this.liaboffsetSelfPrcnt = liaboffsetSelfPrcnt;
		this.liaboffsetSpsPrcnt = liaboffsetSpsPrcnt;
		this.lastexpSelfAmt = lastexpSelfAmt;
		this.lastexpSpsAmt = lastexpSpsAmt;
		this.contCrtdBy = contCrtdBy;
		this.contCrtdDate = contCrtdDate;
		this.contModBy = contModBy;
		this.contModDate = contModDate;
	}

	public String getConId() {
		return this.conId;
	}

	public void setConId(String conId) {
		this.conId = conId;
	}

	public FnaSelfspouseDets getFnaSelfspouseDets() {
		return this.fnaSelfspouseDets;
	}

	public void setFnaSelfspouseDets(FnaSelfspouseDets fnaSelfspouseDets) {
		this.fnaSelfspouseDets = fnaSelfspouseDets;
	}

	public Double getTpdSelfAmt() {
		return this.tpdSelfAmt;
	}

	public void setTpdSelfAmt(Double tpdSelfAmt) {
		this.tpdSelfAmt = tpdSelfAmt;
	}

	public Double getTpdSpsAmt() {
		return this.tpdSpsAmt;
	}

	public void setTpdSpsAmt(Double tpdSpsAmt) {
		this.tpdSpsAmt = tpdSpsAmt;
	}

	public Double getTpdChildAmt() {
		return this.tpdChildAmt;
	}

	public void setTpdChildAmt(Double tpdChildAmt) {
		this.tpdChildAmt = tpdChildAmt;
	}

	public Double getTpdFamilyAmt() {
		return this.tpdFamilyAmt;
	}

	public void setTpdFamilyAmt(Double tpdFamilyAmt) {
		this.tpdFamilyAmt = tpdFamilyAmt;
	}

	public Double getSdLivingneedSpsPrcnt() {
		return this.sdLivingneedSpsPrcnt;
	}

	public void setSdLivingneedSpsPrcnt(Double sdLivingneedSpsPrcnt) {
		this.sdLivingneedSpsPrcnt = sdLivingneedSpsPrcnt;
	}

	public Double getSdLivingneedChildPrcnt() {
		return this.sdLivingneedChildPrcnt;
	}

	public void setSdLivingneedChildPrcnt(Double sdLivingneedChildPrcnt) {
		this.sdLivingneedChildPrcnt = sdLivingneedChildPrcnt;
	}

	public Double getSdLivingneedFamilyPrcnt() {
		return this.sdLivingneedFamilyPrcnt;
	}

	public void setSdLivingneedFamilyPrcnt(Double sdLivingneedFamilyPrcnt) {
		this.sdLivingneedFamilyPrcnt = sdLivingneedFamilyPrcnt;
	}

	public String getSdIntendSpsYrs() {
		return this.sdIntendSpsYrs;
	}

	public void setSdIntendSpsYrs(String sdIntendSpsYrs) {
		this.sdIntendSpsYrs = sdIntendSpsYrs;
	}

	public String getSdIntendChildYrs() {
		return this.sdIntendChildYrs;
	}

	public void setSdIntendChildYrs(String sdIntendChildYrs) {
		this.sdIntendChildYrs = sdIntendChildYrs;
	}

	public String getSdIntendFamilyYrs() {
		return this.sdIntendFamilyYrs;
	}

	public void setSdIntendFamilyYrs(String sdIntendFamilyYrs) {
		this.sdIntendFamilyYrs = sdIntendFamilyYrs;
	}

	public Double getSdSpsAnnlIncome() {
		return this.sdSpsAnnlIncome;
	}

	public void setSdSpsAnnlIncome(Double sdSpsAnnlIncome) {
		this.sdSpsAnnlIncome = sdSpsAnnlIncome;
	}

	public String getSdSpsAnnlIncomeYrs() {
		return this.sdSpsAnnlIncomeYrs;
	}

	public void setSdSpsAnnlIncomeYrs(String sdSpsAnnlIncomeYrs) {
		this.sdSpsAnnlIncomeYrs = sdSpsAnnlIncomeYrs;
	}

	public String getSdLivingneedSelfRemark() {
		return this.sdLivingneedSelfRemark;
	}

	public void setSdLivingneedSelfRemark(String sdLivingneedSelfRemark) {
		this.sdLivingneedSelfRemark = sdLivingneedSelfRemark;
	}

	public Double getSpdLivingneedSpsPrcnt() {
		return this.spdLivingneedSpsPrcnt;
	}

	public void setSpdLivingneedSpsPrcnt(Double spdLivingneedSpsPrcnt) {
		this.spdLivingneedSpsPrcnt = spdLivingneedSpsPrcnt;
	}

	public Double getSpdLivingneedChildPrcnt() {
		return this.spdLivingneedChildPrcnt;
	}

	public void setSpdLivingneedChildPrcnt(Double spdLivingneedChildPrcnt) {
		this.spdLivingneedChildPrcnt = spdLivingneedChildPrcnt;
	}

	public Double getSpdLivingneedFamilyPrcnt() {
		return this.spdLivingneedFamilyPrcnt;
	}

	public void setSpdLivingneedFamilyPrcnt(Double spdLivingneedFamilyPrcnt) {
		this.spdLivingneedFamilyPrcnt = spdLivingneedFamilyPrcnt;
	}

	public String getSpdIntendSelfYrs() {
		return this.spdIntendSelfYrs;
	}

	public void setSpdIntendSelfYrs(String spdIntendSelfYrs) {
		this.spdIntendSelfYrs = spdIntendSelfYrs;
	}

	public String getSpdIntendChildYrs() {
		return this.spdIntendChildYrs;
	}

	public void setSpdIntendChildYrs(String spdIntendChildYrs) {
		this.spdIntendChildYrs = spdIntendChildYrs;
	}

	public String getSpdIntendFamilyYrs() {
		return this.spdIntendFamilyYrs;
	}

	public void setSpdIntendFamilyYrs(String spdIntendFamilyYrs) {
		this.spdIntendFamilyYrs = spdIntendFamilyYrs;
	}

	public Double getSpdSelfAnnlIncome() {
		return this.spdSelfAnnlIncome;
	}

	public void setSpdSelfAnnlIncome(Double spdSelfAnnlIncome) {
		this.spdSelfAnnlIncome = spdSelfAnnlIncome;
	}

	public String getSpdSelfAnnlIncomeYrs() {
		return this.spdSelfAnnlIncomeYrs;
	}

	public void setSpdSelfAnnlIncomeYrs(String spdSelfAnnlIncomeYrs) {
		this.spdSelfAnnlIncomeYrs = spdSelfAnnlIncomeYrs;
	}

	public String getSdLivingneedSpsRemark() {
		return this.sdLivingneedSpsRemark;
	}

	public void setSdLivingneedSpsRemark(String sdLivingneedSpsRemark) {
		this.sdLivingneedSpsRemark = sdLivingneedSpsRemark;
	}

	public Double getTpdSelfLivingneedPrcnt() {
		return this.tpdSelfLivingneedPrcnt;
	}

	public void setTpdSelfLivingneedPrcnt(Double tpdSelfLivingneedPrcnt) {
		this.tpdSelfLivingneedPrcnt = tpdSelfLivingneedPrcnt;
	}

	public Double getTpdSpsLivingneedPrcnt() {
		return this.tpdSpsLivingneedPrcnt;
	}

	public void setTpdSpsLivingneedPrcnt(Double tpdSpsLivingneedPrcnt) {
		this.tpdSpsLivingneedPrcnt = tpdSpsLivingneedPrcnt;
	}

	public Double getTpdChildLivingneedPrcnt() {
		return this.tpdChildLivingneedPrcnt;
	}

	public void setTpdChildLivingneedPrcnt(Double tpdChildLivingneedPrcnt) {
		this.tpdChildLivingneedPrcnt = tpdChildLivingneedPrcnt;
	}

	public Double getTpdFamilyLivingneedPrcnt() {
		return this.tpdFamilyLivingneedPrcnt;
	}

	public void setTpdFamilyLivingneedPrcnt(Double tpdFamilyLivingneedPrcnt) {
		this.tpdFamilyLivingneedPrcnt = tpdFamilyLivingneedPrcnt;
	}

	public String getTpdSelfIntendYrs() {
		return this.tpdSelfIntendYrs;
	}

	public void setTpdSelfIntendYrs(String tpdSelfIntendYrs) {
		this.tpdSelfIntendYrs = tpdSelfIntendYrs;
	}

	public String getTpdSpsIntendYrs() {
		return this.tpdSpsIntendYrs;
	}

	public void setTpdSpsIntendYrs(String tpdSpsIntendYrs) {
		this.tpdSpsIntendYrs = tpdSpsIntendYrs;
	}

	public String getTpdChildIntendYrs() {
		return this.tpdChildIntendYrs;
	}

	public void setTpdChildIntendYrs(String tpdChildIntendYrs) {
		this.tpdChildIntendYrs = tpdChildIntendYrs;
	}

	public String getTpdFamilyIntendYrs() {
		return this.tpdFamilyIntendYrs;
	}

	public void setTpdFamilyIntendYrs(String tpdFamilyIntendYrs) {
		this.tpdFamilyIntendYrs = tpdFamilyIntendYrs;
	}

	public Double getTpdSelfAnnlincome() {
		return this.tpdSelfAnnlincome;
	}

	public void setTpdSelfAnnlincome(Double tpdSelfAnnlincome) {
		this.tpdSelfAnnlincome = tpdSelfAnnlincome;
	}

	public String getTpdSelfAnnlincomeYr() {
		return this.tpdSelfAnnlincomeYr;
	}

	public void setTpdSelfAnnlincomeYr(String tpdSelfAnnlincomeYr) {
		this.tpdSelfAnnlincomeYr = tpdSelfAnnlincomeYr;
	}

	public Double getTpdSelfMedicalexpannl() {
		return this.tpdSelfMedicalexpannl;
	}

	public void setTpdSelfMedicalexpannl(Double tpdSelfMedicalexpannl) {
		this.tpdSelfMedicalexpannl = tpdSelfMedicalexpannl;
	}

	public String getTpdSelfMedicalexpannlYr() {
		return this.tpdSelfMedicalexpannlYr;
	}

	public void setTpdSelfMedicalexpannlYr(String tpdSelfMedicalexpannlYr) {
		this.tpdSelfMedicalexpannlYr = tpdSelfMedicalexpannlYr;
	}

	public String getTpdSelfRemark() {
		return this.tpdSelfRemark;
	}

	public void setTpdSelfRemark(String tpdSelfRemark) {
		this.tpdSelfRemark = tpdSelfRemark;
	}

	public Double getTpdsSelfLivingneedPrcnt() {
		return this.tpdsSelfLivingneedPrcnt;
	}

	public void setTpdsSelfLivingneedPrcnt(Double tpdsSelfLivingneedPrcnt) {
		this.tpdsSelfLivingneedPrcnt = tpdsSelfLivingneedPrcnt;
	}

	public Double getTpdsSpsLivingneedPrcnt() {
		return this.tpdsSpsLivingneedPrcnt;
	}

	public void setTpdsSpsLivingneedPrcnt(Double tpdsSpsLivingneedPrcnt) {
		this.tpdsSpsLivingneedPrcnt = tpdsSpsLivingneedPrcnt;
	}

	public Double getTpdsChildLivingneedPrcnt() {
		return this.tpdsChildLivingneedPrcnt;
	}

	public void setTpdsChildLivingneedPrcnt(Double tpdsChildLivingneedPrcnt) {
		this.tpdsChildLivingneedPrcnt = tpdsChildLivingneedPrcnt;
	}

	public Double getTpdsFamilyLivingneedPrcnt() {
		return this.tpdsFamilyLivingneedPrcnt;
	}

	public void setTpdsFamilyLivingneedPrcnt(Double tpdsFamilyLivingneedPrcnt) {
		this.tpdsFamilyLivingneedPrcnt = tpdsFamilyLivingneedPrcnt;
	}

	public String getTpdsSelfIntendYrs() {
		return this.tpdsSelfIntendYrs;
	}

	public void setTpdsSelfIntendYrs(String tpdsSelfIntendYrs) {
		this.tpdsSelfIntendYrs = tpdsSelfIntendYrs;
	}

	public String getTpdsSpsIntendYrs() {
		return this.tpdsSpsIntendYrs;
	}

	public void setTpdsSpsIntendYrs(String tpdsSpsIntendYrs) {
		this.tpdsSpsIntendYrs = tpdsSpsIntendYrs;
	}

	public String getTpdsChildIntendYrs() {
		return this.tpdsChildIntendYrs;
	}

	public void setTpdsChildIntendYrs(String tpdsChildIntendYrs) {
		this.tpdsChildIntendYrs = tpdsChildIntendYrs;
	}

	public String getTpdsFamilyIntendYrs() {
		return this.tpdsFamilyIntendYrs;
	}

	public void setTpdsFamilyIntendYrs(String tpdsFamilyIntendYrs) {
		this.tpdsFamilyIntendYrs = tpdsFamilyIntendYrs;
	}

	public Double getTpdsSpsAnnlincome() {
		return this.tpdsSpsAnnlincome;
	}

	public void setTpdsSpsAnnlincome(Double tpdsSpsAnnlincome) {
		this.tpdsSpsAnnlincome = tpdsSpsAnnlincome;
	}

	public String getTpdsSpsAnnlincomeYr() {
		return this.tpdsSpsAnnlincomeYr;
	}

	public void setTpdsSpsAnnlincomeYr(String tpdsSpsAnnlincomeYr) {
		this.tpdsSpsAnnlincomeYr = tpdsSpsAnnlincomeYr;
	}

	public Double getTpdsSpsMedicalexpannl() {
		return this.tpdsSpsMedicalexpannl;
	}

	public void setTpdsSpsMedicalexpannl(Double tpdsSpsMedicalexpannl) {
		this.tpdsSpsMedicalexpannl = tpdsSpsMedicalexpannl;
	}

	public String getTpdsSpsMedicalexpannlYr() {
		return this.tpdsSpsMedicalexpannlYr;
	}

	public void setTpdsSpsMedicalexpannlYr(String tpdsSpsMedicalexpannlYr) {
		this.tpdsSpsMedicalexpannlYr = tpdsSpsMedicalexpannlYr;
	}

	public String getTpdSpsRemark() {
		return this.tpdSpsRemark;
	}

	public void setTpdSpsRemark(String tpdSpsRemark) {
		this.tpdSpsRemark = tpdSpsRemark;
	}

	public Double getCiSelfLivingneedPrcnt() {
		return this.ciSelfLivingneedPrcnt;
	}

	public void setCiSelfLivingneedPrcnt(Double ciSelfLivingneedPrcnt) {
		this.ciSelfLivingneedPrcnt = ciSelfLivingneedPrcnt;
	}

	public Double getCiSpsLivingneedPrcnt() {
		return this.ciSpsLivingneedPrcnt;
	}

	public void setCiSpsLivingneedPrcnt(Double ciSpsLivingneedPrcnt) {
		this.ciSpsLivingneedPrcnt = ciSpsLivingneedPrcnt;
	}

	public Double getCiChildLivingneedPrcnt() {
		return this.ciChildLivingneedPrcnt;
	}

	public void setCiChildLivingneedPrcnt(Double ciChildLivingneedPrcnt) {
		this.ciChildLivingneedPrcnt = ciChildLivingneedPrcnt;
	}

	public Double getCiFamilyLivingneedPrcnt() {
		return this.ciFamilyLivingneedPrcnt;
	}

	public void setCiFamilyLivingneedPrcnt(Double ciFamilyLivingneedPrcnt) {
		this.ciFamilyLivingneedPrcnt = ciFamilyLivingneedPrcnt;
	}

	public String getCiSelfIntendYrs() {
		return this.ciSelfIntendYrs;
	}

	public void setCiSelfIntendYrs(String ciSelfIntendYrs) {
		this.ciSelfIntendYrs = ciSelfIntendYrs;
	}

	public String getCiSpsIntendYrs() {
		return this.ciSpsIntendYrs;
	}

	public void setCiSpsIntendYrs(String ciSpsIntendYrs) {
		this.ciSpsIntendYrs = ciSpsIntendYrs;
	}

	public String getCiChildIntendYrs() {
		return this.ciChildIntendYrs;
	}

	public void setCiChildIntendYrs(String ciChildIntendYrs) {
		this.ciChildIntendYrs = ciChildIntendYrs;
	}

	public String getCiFamilyIntendYrs() {
		return this.ciFamilyIntendYrs;
	}

	public void setCiFamilyIntendYrs(String ciFamilyIntendYrs) {
		this.ciFamilyIntendYrs = ciFamilyIntendYrs;
	}

	public Double getCiSelfAnnlincome() {
		return this.ciSelfAnnlincome;
	}

	public void setCiSelfAnnlincome(Double ciSelfAnnlincome) {
		this.ciSelfAnnlincome = ciSelfAnnlincome;
	}

	public Short getCiSelfAnnlincomeYr() {
		return this.ciSelfAnnlincomeYr;
	}

	public void setCiSelfAnnlincomeYr(Short ciSelfAnnlincomeYr) {
		this.ciSelfAnnlincomeYr = ciSelfAnnlincomeYr;
	}

	public Double getCiSelfOthannlexp() {
		return this.ciSelfOthannlexp;
	}

	public void setCiSelfOthannlexp(Double ciSelfOthannlexp) {
		this.ciSelfOthannlexp = ciSelfOthannlexp;
	}

	public String getCiSelfOthannlexpYr() {
		return this.ciSelfOthannlexpYr;
	}

	public void setCiSelfOthannlexpYr(String ciSelfOthannlexpYr) {
		this.ciSelfOthannlexpYr = ciSelfOthannlexpYr;
	}

	public Double getCiSelfLumpsummc() {
		return this.ciSelfLumpsummc;
	}

	public void setCiSelfLumpsummc(Double ciSelfLumpsummc) {
		this.ciSelfLumpsummc = ciSelfLumpsummc;
	}

	public String getCiSelfRemark() {
		return this.ciSelfRemark;
	}

	public void setCiSelfRemark(String ciSelfRemark) {
		this.ciSelfRemark = ciSelfRemark;
	}

	public Double getCisSelfLivingneedPrcnt() {
		return this.cisSelfLivingneedPrcnt;
	}

	public void setCisSelfLivingneedPrcnt(Double cisSelfLivingneedPrcnt) {
		this.cisSelfLivingneedPrcnt = cisSelfLivingneedPrcnt;
	}

	public Double getCisSpsLivingneedPrcnt() {
		return this.cisSpsLivingneedPrcnt;
	}

	public void setCisSpsLivingneedPrcnt(Double cisSpsLivingneedPrcnt) {
		this.cisSpsLivingneedPrcnt = cisSpsLivingneedPrcnt;
	}

	public Double getCisChildLivingneedPrcnt() {
		return this.cisChildLivingneedPrcnt;
	}

	public void setCisChildLivingneedPrcnt(Double cisChildLivingneedPrcnt) {
		this.cisChildLivingneedPrcnt = cisChildLivingneedPrcnt;
	}

	public Double getCisFamilyLivingneedPrcnt() {
		return this.cisFamilyLivingneedPrcnt;
	}

	public void setCisFamilyLivingneedPrcnt(Double cisFamilyLivingneedPrcnt) {
		this.cisFamilyLivingneedPrcnt = cisFamilyLivingneedPrcnt;
	}

	public String getCisSelfIntendYrs() {
		return this.cisSelfIntendYrs;
	}

	public void setCisSelfIntendYrs(String cisSelfIntendYrs) {
		this.cisSelfIntendYrs = cisSelfIntendYrs;
	}

	public String getCisSpsIntendYrs() {
		return this.cisSpsIntendYrs;
	}

	public void setCisSpsIntendYrs(String cisSpsIntendYrs) {
		this.cisSpsIntendYrs = cisSpsIntendYrs;
	}

	public String getCisChildIntendYrs() {
		return this.cisChildIntendYrs;
	}

	public void setCisChildIntendYrs(String cisChildIntendYrs) {
		this.cisChildIntendYrs = cisChildIntendYrs;
	}

	public String getCisFamilyIntendYrs() {
		return this.cisFamilyIntendYrs;
	}

	public void setCisFamilyIntendYrs(String cisFamilyIntendYrs) {
		this.cisFamilyIntendYrs = cisFamilyIntendYrs;
	}

	public Double getCisSpsAnnlincome() {
		return this.cisSpsAnnlincome;
	}

	public void setCisSpsAnnlincome(Double cisSpsAnnlincome) {
		this.cisSpsAnnlincome = cisSpsAnnlincome;
	}

	public Double getCisSpsAnnlincomeYr() {
		return this.cisSpsAnnlincomeYr;
	}

	public void setCisSpsAnnlincomeYr(Double cisSpsAnnlincomeYr) {
		this.cisSpsAnnlincomeYr = cisSpsAnnlincomeYr;
	}

	public Double getCisSpsOthannlexp() {
		return this.cisSpsOthannlexp;
	}

	public void setCisSpsOthannlexp(Double cisSpsOthannlexp) {
		this.cisSpsOthannlexp = cisSpsOthannlexp;
	}

	public String getCisSpsOthannlexpYr() {
		return this.cisSpsOthannlexpYr;
	}

	public void setCisSpsOthannlexpYr(String cisSpsOthannlexpYr) {
		this.cisSpsOthannlexpYr = cisSpsOthannlexpYr;
	}

	public Double getCisSpsLumpsummc() {
		return this.cisSpsLumpsummc;
	}

	public void setCisSpsLumpsummc(Double cisSpsLumpsummc) {
		this.cisSpsLumpsummc = cisSpsLumpsummc;
	}

	public String getCiSpsRemark() {
		return this.ciSpsRemark;
	}

	public void setCiSpsRemark(String ciSpsRemark) {
		this.ciSpsRemark = ciSpsRemark;
	}

	public Double getEduFund() {
		return this.eduFund;
	}

	public void setEduFund(Double eduFund) {
		this.eduFund = eduFund;
	}

	public Double getLiaboffsetSelfPrcnt() {
		return this.liaboffsetSelfPrcnt;
	}

	public void setLiaboffsetSelfPrcnt(Double liaboffsetSelfPrcnt) {
		this.liaboffsetSelfPrcnt = liaboffsetSelfPrcnt;
	}

	public Double getLiaboffsetSpsPrcnt() {
		return this.liaboffsetSpsPrcnt;
	}

	public void setLiaboffsetSpsPrcnt(Double liaboffsetSpsPrcnt) {
		this.liaboffsetSpsPrcnt = liaboffsetSpsPrcnt;
	}

	public Double getLastexpSelfAmt() {
		return this.lastexpSelfAmt;
	}

	public void setLastexpSelfAmt(Double lastexpSelfAmt) {
		this.lastexpSelfAmt = lastexpSelfAmt;
	}

	public Double getLastexpSpsAmt() {
		return this.lastexpSpsAmt;
	}

	public void setLastexpSpsAmt(Double lastexpSpsAmt) {
		this.lastexpSpsAmt = lastexpSpsAmt;
	}

	public String getContCrtdBy() {
		return this.contCrtdBy;
	}

	public void setContCrtdBy(String contCrtdBy) {
		this.contCrtdBy = contCrtdBy;
	}

	public Date getContCrtdDate() {
		return this.contCrtdDate;
	}

	public void setContCrtdDate(Date contCrtdDate) {
		this.contCrtdDate = contCrtdDate;
	}

	public String getContModBy() {
		return this.contModBy;
	}

	public void setContModBy(String contModBy) {
		this.contModBy = contModBy;
	}

	public Date getContModDate() {
		return this.contModDate;
	}

	public void setContModDate(Date contModDate) {
		this.contModDate = contModDate;
	}

}