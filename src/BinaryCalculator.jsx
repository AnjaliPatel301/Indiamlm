import React, { useState, useMemo } from "react";

/**
 * Free Binary MLM Calculator
 * Single-file React + Tailwind component.
 * Supports Percentage and Flat commission types.
 * Fully responsive: mobile, tablet, desktop.
 */

function formatNumber(num) {
  if (num === null || num === undefined || isNaN(num)) return "0";
  const abs = Math.abs(num);
  if (abs >= 1e12) return (num / 1e12).toFixed(1) + "T";
  if (abs >= 1e9) return (num / 1e9).toFixed(1) + "B";
  if (abs >= 1e6) return (num / 1e6).toFixed(1) + "M";
  if (abs >= 1e3) return (num / 1e3).toFixed(1) + "K";
  return num.toFixed(0);
}

function formatFull(num) {
  if (num === null || num === undefined || isNaN(num)) return "0";
  return Math.round(num).toLocaleString("en-IN");
}

const PAIR_TYPES = [
  { label: "1:1", left: 1, right: 1 },
  { label: "1:2", left: 1, right: 2 },
  { label: "2:1", left: 2, right: 1 },
  { label: "2:2", left: 2, right: 2 },
  { label: "2:3", left: 2, right: 3 },
  { label: "3:2", left: 3, right: 2 },
];

function InfoDot({ text }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-flex items-center ml-1"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={(e) => {
        e.preventDefault();
        setOpen((o) => !o);
      }}
    >
      <span className="w-4 h-4 rounded-full bg-slate-300 text-white text-[10px] font-bold flex items-center justify-center cursor-help select-none shrink-0">
        i
      </span>
      {open && (
        <span className="absolute z-20 left-1/2 -translate-x-1/2 bottom-6 w-48 sm:w-56 max-w-[80vw] bg-slate-800 text-white text-xs rounded-lg px-3 py-2 shadow-lg leading-snug">
          {text}
        </span>
      )}
    </span>
  );
}

function Field({ label, info, required, children }) {
  return (
    <div className="min-w-0">
      <label className="flex items-center text-sm font-semibold text-slate-700 mb-2 flex-wrap">
        <span>{label}</span>
        {info && <InfoDot text={info} />}
        {required && <span className="text-rose-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

const numberInputClasses =
  "w-full bg-slate-50 border border-slate-200 rounded-lg px-3 sm:px-4 py-2.5 text-slate-700 text-sm outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition";

export default function BinaryMLMCalculator() {
  const [commissionType, setCommissionType] = useState("percentage"); // "percentage" | "flat"

  const [joiningFee, setJoiningFee] = useState("100044");
  const [productExpense, setProductExpense] = useState("10");
  const [capping, setCapping] = useState("10000000");
  const [binaryCommissionPct, setBinaryCommissionPct] = useState("10");
  const [flatCommission, setFlatCommission] = useState("500");
  const [numLevels, setNumLevels] = useState("25");
  const [adminCharges, setAdminCharges] = useState("2");
  const [taxDeduction, setTaxDeduction] = useState("2");
  const [pairType, setPairType] = useState("1:1");

  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const pair = PAIR_TYPES.find((p) => p.label === pairType) || PAIR_TYPES[0];

  function validate() {
    const errs = {};
    const req = {
      joiningFee,
      productExpense,
      capping,
      numLevels,
      adminCharges,
      taxDeduction,
    };
    if (commissionType === "percentage") req.binaryCommissionPct = binaryCommissionPct;
    else req.flatCommission = flatCommission;

    Object.entries(req).forEach(([key, val]) => {
      if (val === "" || val === null || isNaN(Number(val)) || Number(val) < 0) {
        errs[key] = true;
      }
    });
    if (Number(numLevels) <= 0) errs.numLevels = true;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function calculate() {
    if (!validate()) {
      setResult(null);
      return;
    }

    const fee = Number(joiningFee);
    const expense = Number(productExpense);
    const cap = Number(capping);
    const pct = Number(binaryCommissionPct);
    const flat = Number(flatCommission);
    const levels = Math.max(1, Math.floor(Number(numLevels)));
    const admin = Number(adminCharges);
    const tax = Number(taxDeduction);

    // Binary tree: level 0 = root (1 member), each subsequent level doubles
    // the number of members directly in that level (full binary tree).
    const levelRows = [];
    let totalMembers = 0;
    const membersAtLevel = [];

    for (let lvl = 0; lvl <= levels; lvl++) {
      const members = Math.pow(2, lvl);
      membersAtLevel.push(members);
      totalMembers += members;
    }

    // Downline members below (and including) each level, counted top-down:
    let runningAbove = 0;
    const downlineAtLevel = [];
    for (let lvl = 0; lvl <= levels; lvl++) {
      const downline = totalMembers - runningAbove;
      downlineAtLevel.push(downline);
      runningAbove += membersAtLevel[lvl];
    }

    // Commission per level (uncapped), based on commission type:
    const baseLevelCommission = (lvl) => {
      const pairsAtLevel = membersAtLevel[lvl] / (pair.left + pair.right === 0 ? 1 : 1);
      if (commissionType === "percentage") {
        return pairsAtLevel * fee * (pct / 100);
      }
      return pairsAtLevel * flat;
    };

    const rawCommissions = [];
    let totalRawCommission = 0;
    for (let lvl = 0; lvl <= levels; lvl++) {
      const c = baseLevelCommission(lvl);
      rawCommissions.push(c);
      totalRawCommission += c;
    }

    // Capping pool: depletes top-down as commission is paid.
    let cappingPool = downlineAtLevel[0] * cap;
    const cappingPossible = [];
    const payable = [];
    let totalPayable = 0;

    for (let lvl = 0; lvl <= levels; lvl++) {
      cappingPossible.push(Math.max(cappingPool, 0));
      const finalPay = cappingPool > 0 ? Math.min(rawCommissions[lvl], cappingPool) : rawCommissions[lvl];
      payable.push(finalPay);
      totalPayable += finalPay;
      cappingPool -= rawCommissions[lvl];
    }

    for (let lvl = 0; lvl <= levels; lvl++) {
      levelRows.push({
        level: lvl,
        membersInLevel: membersAtLevel[lvl],
        downlineMembers: downlineAtLevel[lvl],
        commission: rawCommissions[lvl],
        cappingPossible: cappingPossible[lvl],
        payable: payable[lvl],
      });
    }

    const totalJoiningFee = totalMembers * fee;
    const totalProductInvestment = totalMembers * expense;
    const totalCommission = totalRawCommission;
    const totalTaxDeduction = totalPayable * (tax / 100);
    const totalAdminDeduction = totalPayable * (admin / 100);
    const totalNetCommission = totalPayable - totalTaxDeduction - totalAdminDeduction;
    const totalExpense = totalJoiningFee + totalCommission;
    const totalProfit = totalJoiningFee + totalProductInvestment - totalNetCommission;

    setResult({
      totalMembers,
      totalProfit,
      totalExpense,
      totalJoiningFee,
      totalProductInvestment,
      totalCommission,
      totalTaxDeduction,
      totalAdminDeduction,
      totalNetCommission,
      totalPayable,
      levelRows,
    });
  }

  const chartData = useMemo(() => {
    if (!result) return [];
    return [
      { label: "Total Members", value: result.totalMembers, color: "#0f172a" },
      { label: "Total Joining Fee", value: result.totalJoiningFee, color: "#1d4ed8" },
      { label: "Total Product Investment", value: result.totalProductInvestment, color: "#3b82f6" },
      { label: "Total Commission", value: result.totalCommission, color: "#0ea5e9" },
      { label: "Total Tax Deduction", value: result.totalTaxDeduction, color: "#38bdf8" },
      { label: "Admin Charges Deduction", value: result.totalAdminDeduction, color: "#7dd3fc" },
      { label: "Total Net Commission", value: result.totalNetCommission, color: "#94a3b8" },
    ];
  }, [result]);

  const maxChartValue = useMemo(() => {
    if (!chartData.length) return 1;
    return Math.max(...chartData.map((d) => d.value), 1);
  }, [chartData]);

  function inputErrClass(key) {
    return errors[key] ? "ring-2 ring-rose-400 border-rose-400" : "";
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12 md:py-20 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-4 font-extrabold text-center text-blue-950 mb-3 sm:mb-4 px-1">
          Free Binary MLM Calculator
        </h1>
        <p className="text-center text-sm sm:text-base text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1">
          A Binary MLM Calculator is a tool used to calculate commissions and earnings in a
          binary MLM structure, where distributors have two teams (left and right legs). It
          takes into account sales volume, team structure, and commission rates to estimate
          earnings, simplifying the complex commission calculations. This tool ensures accuracy
          and helps both distributors and managers easily track and understand their earnings
          within a{" "}
          <span className="text-orange-500">binary compensation plan</span>.
        </p>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-center text-blue-950 mb-1">
            Binary MLM Calculator
          </h2>
          <p className="text-center text-slate-500 text-xs sm:text-sm mb-5 sm:mb-6 px-1">
            Easily calculate your binary MLM earnings with our free calculator. Just enter the
            details below for instant results!
          </p>

          {/* Commission type toggle */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
            <span className="text-sm font-semibold text-slate-700 w-full sm:w-auto">
              Commission Type :
            </span>
            <label className="flex items-center gap-2 cursor-pointer">
              <span
                onClick={() => setCommissionType("percentage")}
                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition shrink-0 ${
                  commissionType === "percentage"
                    ? "bg-emerald-500 border-emerald-500"
                    : "border-slate-300"
                }`}
              >
                {commissionType === "percentage" && (
                  <svg viewBox="0 0 20 20" className="w-3 h-3 text-white" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0L4.3 10.5a1 1 0 1 1 1.4-1.4l2.9 2.9 6.7-6.7a1 1 0 0 1 1.4 0z" />
                  </svg>
                )}
              </span>
              <span
                className="text-sm text-slate-700"
                onClick={() => setCommissionType("percentage")}
              >
                Percentage
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <span
                onClick={() => setCommissionType("flat")}
                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition shrink-0 ${
                  commissionType === "flat" ? "bg-emerald-500 border-emerald-500" : "border-slate-300"
                }`}
              >
                {commissionType === "flat" && (
                  <svg viewBox="0 0 20 20" className="w-3 h-3 text-white" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0L4.3 10.5a1 1 0 1 1 1.4-1.4l2.9 2.9 6.7-6.7a1 1 0 0 1 1.4 0z" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-slate-700" onClick={() => setCommissionType("flat")}>
                Flat
              </span>
            </label>
          </div>

          {/* Fields grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            <Field label="Joining Fee" info="One-time fee paid by a new member at signup." required>
              <input
                type="number"
                value={joiningFee}
                onChange={(e) => setJoiningFee(e.target.value)}
                className={`${numberInputClasses} ${inputErrClass("joiningFee")}`}
                placeholder="e.g. 100044"
              />
            </Field>

            <Field
              label="Product/Service Expense"
              info="Cost of product or service bundled with joining."
              required
            >
              <input
                type="number"
                value={productExpense}
                onChange={(e) => setProductExpense(e.target.value)}
                className={`${numberInputClasses} ${inputErrClass("productExpense")}`}
                placeholder="e.g. 10"
              />
            </Field>

            <Field
              label="Capping / Ceiling"
              info="Maximum commission payable per member across the plan."
              required
            >
              <input
                type="number"
                value={capping}
                onChange={(e) => setCapping(e.target.value)}
                className={`${numberInputClasses} ${inputErrClass("capping")}`}
                placeholder="e.g. 10000000"
              />
            </Field>

            {commissionType === "percentage" ? (
              <Field
                label="Binary Commission (%)"
                info="Percentage of joining fee paid as commission per matched pair."
                required
              >
                <input
                  type="number"
                  value={binaryCommissionPct}
                  onChange={(e) => setBinaryCommissionPct(e.target.value)}
                  className={`${numberInputClasses} ${inputErrClass("binaryCommissionPct")}`}
                  placeholder="e.g. 10"
                />
              </Field>
            ) : (
              <Field
                label="Flat Commission"
                info="Fixed commission amount paid per matched pair."
                required
              >
                <input
                  type="number"
                  value={flatCommission}
                  onChange={(e) => setFlatCommission(e.target.value)}
                  className={`${numberInputClasses} ${inputErrClass("flatCommission")}`}
                  placeholder="e.g. 500"
                />
              </Field>
            )}

            <Field label="Number of Levels" info="Total depth of the binary tree to calculate." required>
              <input
                type="number"
                value={numLevels}
                onChange={(e) => setNumLevels(e.target.value)}
                className={`${numberInputClasses} ${inputErrClass("numLevels")}`}
                placeholder="e.g. 25"
              />
            </Field>

            <Field label="Admin Charges (%)" info="Percentage deducted by the company as admin fee." required>
              <input
                type="number"
                value={adminCharges}
                onChange={(e) => setAdminCharges(e.target.value)}
                className={`${numberInputClasses} ${inputErrClass("adminCharges")}`}
                placeholder="e.g. 2"
              />
            </Field>

            <Field label="Tax Deduction (%)" info="Percentage deducted as tax (e.g. TDS) before payout." required>
              <input
                type="number"
                value={taxDeduction}
                onChange={(e) => setTaxDeduction(e.target.value)}
                className={`${numberInputClasses} ${inputErrClass("taxDeduction")}`}
                placeholder="e.g. 2"
              />
            </Field>

            <Field label="Pair Type" info="Ratio of left-leg to right-leg members required to form one matched pair." required>
              <select
                value={pairType}
                onChange={(e) => setPairType(e.target.value)}
                className={`${numberInputClasses} appearance-none cursor-pointer`}
              >
                {PAIR_TYPES.map((p) => (
                  <option key={p.label} value={p.label}>
                    {p.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="flex justify-center mt-6 sm:mt-7">
            <button
              onClick={calculate}
              className="w-full sm:w-auto bg-orange-500 text-sm sm:text-base hover:bg-orange-600 active:scale-[0.98] text-white font-semibold px-8 sm:px-10 py-3 rounded-md shadow-md shadow-orange-200 transition"
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 sm:mt-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-center text-slate-800 mb-5 sm:mb-6">
              Results
            </h2>

            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 sm:p-6 md:p-8">
              {/* Summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
                <div className="rounded-xl border border-slate-200 px-4 sm:px-6 py-4 sm:py-5 text-center bg-gradient-to-br from-slate-100 to-slate-50">
                  <div className="text-slate-500 text-xs sm:text-sm mb-1">Total Members</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-900 break-words">
                    {formatNumber(result.totalMembers)}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 px-4 sm:px-6 py-4 sm:py-5 text-center bg-gradient-to-br from-emerald-50 to-white">
                  <div className="text-slate-500 text-xs sm:text-sm mb-1">Total Profit</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-900 break-words">
                    {formatNumber(result.totalProfit)}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 px-4 sm:px-6 py-4 sm:py-5 text-center bg-gradient-to-br from-violet-50 to-white">
                  <div className="text-slate-500 text-xs sm:text-sm mb-1">Total Expense</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-900 break-words">
                    {formatNumber(result.totalExpense)}
                  </div>
                </div>
              </div>

              {/* Chart + legend */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div className="overflow-x-auto">
                  <div className="flex items-end gap-2 sm:gap-3 h-56 sm:h-64 pl-2 pb-6 border-b border-slate-200 relative min-w-[420px] md:min-w-0">
                    {/* Y axis gridlines */}
                    <div className="absolute inset-0 flex flex-col justify-between pb-6 pointer-events-none">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="border-t border-slate-100 w-full" />
                      ))}
                    </div>
                    {chartData.map((d) => (
                      <div key={d.label} className="flex flex-col items-center justify-end h-full flex-1 z-10">
                        <div
                          className="w-7 sm:w-8 md:w-10 rounded-t-sm transition-all"
                          style={{
                            height: `${Math.max((d.value / maxChartValue) * 100, 1.5)}%`,
                            backgroundColor: d.color,
                          }}
                          title={`${d.label}: ${formatNumber(d.value)}`}
                        />
                        <span className="text-[9px] sm:text-[10px] text-slate-500 mt-2 text-center -rotate-45 origin-top-left whitespace-nowrap w-0">
                          {d.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-center">
                  {[
                    { label: "Total Members", value: result.totalMembers, color: "bg-slate-900" },
                    { label: "Total Joining Fee", value: result.totalJoiningFee, color: "bg-blue-800" },
                    {
                      label: "Total Product Investment",
                      value: result.totalProductInvestment,
                      color: "bg-blue-600",
                    },
                    { label: "Total Commission", value: result.totalCommission, color: "bg-sky-600" },
                    { label: "Total Tax Deduction", value: result.totalTaxDeduction, color: "bg-sky-400" },
                    {
                      label: "Admin Charges Deduction",
                      value: result.totalAdminDeduction,
                      color: "bg-sky-300",
                    },
                    { label: "Total Net Commission", value: result.totalNetCommission, color: "bg-slate-400" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 flex-wrap">
                      <span
                        className={`${row.color} text-white text-xs font-semibold rounded-md px-3 py-1.5 min-w-[68px] text-center shrink-0`}
                      >
                        {formatNumber(row.value)}
                      </span>
                      <span className="text-slate-600 text-xs sm:text-sm">- {row.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Level-wise table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 -mx-1 sm:mx-0">
                <table className="w-full text-xs sm:text-sm min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 text-left">
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold whitespace-nowrap">Level</th>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold whitespace-nowrap">Members in Level</th>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold whitespace-nowrap">Downline Members</th>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold whitespace-nowrap">Commission</th>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold whitespace-nowrap">Capping (Possible)</th>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold whitespace-nowrap">Commission Payable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.levelRows.map((row, idx) => (
                      <tr
                        key={row.level}
                        className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                      >
                        <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-sky-600 font-medium">{row.level}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-sky-600">{formatNumber(row.membersInLevel)}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-slate-700">{formatNumber(row.downlineMembers)}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-amber-600">{formatNumber(row.commission)}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-slate-700">{formatNumber(row.cappingPossible)}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-blue-600 font-medium">{formatNumber(row.payable)}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-100 font-bold text-slate-800">
                      <td className="px-3 sm:px-4 py-2.5 sm:py-3" colSpan={3}>
                        Total
                      </td>
                      <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-amber-700">
                        {formatNumber(result.levelRows.reduce((s, r) => s + r.commission, 0))}
                      </td>
                      <td className="px-3 sm:px-4 py-2.5 sm:py-3">
                        {formatNumber(result.levelRows.reduce((s, r) => s + r.cappingPossible, 0))}
                      </td>
                      <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-blue-700">
                        {formatNumber(result.levelRows.reduce((s, r) => s + r.payable, 0))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 sm:hidden text-center">
                Scroll the table sideways to see all columns &rarr;
              </p>

              <p className="text-xs text-slate-400 mt-4 text-center px-1">
                Figures are abbreviated (K / M / B / T). Hover a bar in the chart for the exact
                amount. All values are illustrative estimates based on the inputs provided.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}