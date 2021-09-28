/***
 * Tax Calculating.
 *
 * Minor error checking.
 * */
function TaxCalc(conf) {
  this.TAX = conf.TAX;

  this.SUPER_RATE = conf.superAnnRate / 100;
  this.SUPER_TAX = conf.superAnnTax / 100;

  if (this.TAX[0].from !== 0)
    throw new Error(
      "Tax bracket has to start from zero. Currently at " + this.TAX[0].from
    );
}

/***
 * Calculate superannuation amount.
 * */
TaxCalc.prototype.superAnnuation = function (incomeTotal) {
  if (incomeTotal < 1) return 0;
  return incomeTotal * this.SUPER_RATE;
};

/***
 * Calculate tax amount from superannuation amount.
 * */
TaxCalc.prototype.taxSuperAnnuation = function (amountSuper) {
  if (amountSuper < 1) return 0;
  return amountSuper * this.SUPER_TAX;
};

/***
 * Calculate gross income.
 * */
TaxCalc.prototype.incomeGross = function (incomeTotal) {
  if (incomeTotal < 1) return 0;
  return incomeTotal - this.superAnnuation(incomeTotal);
};

/***
 * Helper function for brackets search.
 *
 * Find object in array of objects where obj[x].from is within
 * range of lim. Starting at end of array; highest from-amount.
 * */
TaxCalc.prototype._getFromBracket = function (arr, lim) {
  var i;

  for (i = arr.length - 1; i >= 0; --i) {
    if (lim >= arr[i].from) break;
  }
  /* If no bracket found return null, which denotes error. */
  if (i < 0) return null;
  return arr[i];
};

/***


/***
 * Calculate base income tax.
 *
 * @incomeGross Amount after deducting superannuation amount.
 * */
TaxCalc.prototype.taxGross = function (incomeGross) {
  var tax = this._getFromBracket(this.TAX, incomeGross);
  /* !tax aka null/error. This should likely be reported somehow. */
  if (!tax) return 0;
  var amountOver = incomeGross - (tax.from - 1);
  return tax.base + amountOver * tax.rate;
};

/***
 * Debug; log report to console.
 * */
TaxCalc.prototype.log = function (report) {
  console.log(
    "================================",
    "\nIncome Total: ",
    report.incomeTotal,
    "\nIncome Gross: ",
    report.incomeGross,
    "\nAmount Super: ",
    report.amountSuper,

    "\nTax Gross   : ",
    report.taxGross,
    "\nTax Super   : ",
    report.taxSuper,

    "\n--------------------------------",
    "\nTax Total   : ",
    report.taxTotal,
    "\n================================\n"
  );
};

/***
 * Generate tax report object.
 * */
TaxCalc.prototype.genReport = function (incomeTotal) {
  var report = {
    incomeTotal: incomeTotal,
    amountSuper: this.superAnnuation(incomeTotal),
    incomeGross: this.incomeGross(incomeTotal),
  };

  report.taxGross = this.taxGross(report.incomeGross);
  report.taxSuper = this.taxSuperAnnuation(report.amountSuper);

  report.taxTotal = report.taxGross + report.taxSuper;
  return report;
};

/* ***************************************************************
 *
 *     APPLICATION / TEST CODE
 *
 * ************************************************************* */

function test() {
  /***
   * Individual income tax rates for residents.

   *
   * */
  var TAX_RATES = [
    { from: 0, rate: 0.0, base: 0 },
    { from: 18201, rate: 0.19, base: 0 },
    { from: 37001, rate: 0.325, base: 3572 },
    { from: 80001, rate: 0.37, base: 17547 },
    { from: 180001, rate: 0.45, base: 54547 },
  ];
  /***
   * (HECS) Higher Education Contribution Scheme
   * (HELP) Higher Education Loan Program

 
   *
   * Percentage = 3.5 + Index * 0.5, but not always in history,
   * thus (likely) better to hardcode.
   * */

  /* Create a tax object. */
  var tax = new TaxCalc({
    TAX: TAX_RATES,

    superAnnRate: 9.25,
    superAnnTax: 15,
  });
  /* Sample income array. Change amount here to test and see reult. */
  var income = [110000];

  var i, rep;

  for (i = 0; i < income.length; ++i) {
    rep = tax.genReport(income[i]);
    tax.log(rep);
  }

  /* If you want to continue to use it elsewhere. E.g. add a event driven
   * calculator in HTML. */
  return tax;
}

// Execute test.

test();
