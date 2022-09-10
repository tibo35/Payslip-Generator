// Inputs
const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const annualSalaryInput = document.getElementById("annualSalary");
const superAnnuation = document.getElementById("super");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const button = document.getElementById("submit-btn");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Get and Display Firstname and last name
const renderUserdetails = () => {
  let firstnameResult = document.getElementById("output-firstname");
  let surnameResult = document.getElementById("output-surname");

  firstnameResult.innerHTML = firstname.value;
  surnameResult.innerHTML = surname.value;
};

//Get and Display Dates
const formatDate = () => {
  let start = document.getElementById("output-startDate");
  let end = document.getElementById("output-endDate");

  start.innerHTML = startDate.value;
  end.innerHTML = endDate.value;
};

//Get and Display monthly gross Salary
const getMonthlyGross = () => {
  let grossOutput = document.getElementById("output-groosSalary");
  let y = annualSalaryInput.value;
  x = y / 12;
  grossOutput.innerHTML = Math.round(x);
};

// Get and Display Superannuation rate
const getSuperRate = () => {
  let superAmountOutput = document.getElementById("output-superAmount");
  getMonthlyGross(x);
  let z = superAnnuation.value;
  let y = (z / 100) * x;
  superAmountOutput.innerHTML = Math.round(y);
};

//Gross Income and super
const getNetIncome = () => {
  let incomeTaxes = document.getElementById("output-incomeTaxes");
  let netIncome = document.getElementById("output-netIncome");
  const intervals = [
    [0, 18200, 0],
    [18200, 37000, 0.19],
    [37000, 87000, 0.325],
    [87000, 180000, 0.37],
  ];
  const income = annualSalaryInput.value;
  let totalTaxes = 0;
  let IncomeAfterTaxes = 0;

  for (const interval of intervals) {
    if (income < interval[1]) {
      totalTaxes += (income - interval[0]) * interval[2];
      break;
    } else {
      totalTaxes += (interval[1] - interval[0]) * interval[2];
    }
    IncomeAfterTaxes = (income - totalTaxes) / 12;
  }
  console.log(totalTaxes);
  incomeTaxes.innerHTML = Math.ceil(totalTaxes / 12);
  netIncome.innerHTML = IncomeAfterTaxes;
};

// Handle Submit
button.addEventListener("click", () => {
  modal.style.display = "block";
  formatDate();
  renderUserdetails();
  getMonthlyGross();
  getSuperRate();
  getNetIncome();
});
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
