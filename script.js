// Inputs
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const annualSalaryInput = document.getElementById('annualSalary');
const superAnnuation = document.getElementById('super');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const button = document.getElementById('submit-btn')
const form = document.getElementById('form');
const errorElement = document.getElementById('error');





// Get and Display Firstname and last name
function renderUserdetails (){
    let firstnameResult = document.getElementById('output-firstname');
    let surnameResult = document.getElementById('output-surname');

    firstnameResult.innerHTML = firstname.value;
    surnameResult.innerHTML = surname.value;
}
//Get and Display Dates
function formatDate() {
    let start = document.getElementById('output-startDate');
    let end = document.getElementById('output-endDate');

    start.innerHTML = startDate.value;
    end.innerHTML = endDate.value;

  }

//Get and Display monthly gross Salary
let getMonthlyGross = () => {
let grossOutput = document.getElementById('output-groosSalary');
let y = annualSalaryInput.value;
x = y / 12
grossOutput.innerHTML = Math.floor(x);
}

// Get and Display Superannuation rate
let getSuperRate = () => {
let superAmountOutput = document.getElementById('output-superAmount');
getMonthlyGross(x);
let z = superAnnuation.value;
let y = (z/100) * x; 
superAmountOutput.innerHTML = Math.floor(y);
}



//Gross Income and super

let getNetIncome = () => {
const intervals = [
    [0, 18200, 0],
    [18200, 37000, 0.19],
    [37000, 87000, 0.325],
    [87000, 180000, 0.37]
]
const income = annualSalaryInput.value;
let totalTaxes = 0;
let netIncome = income - totalTaxes;

for(const interval of intervals){
if(income < interval[1]){
    totalTaxes += (income - interval[0]) * interval[2];
    break;
    
} else {
    totalTaxes += (interval[1] - interval[0])* interval[2];
}

};
console.log(totalTaxes)
console.log(netIncome)
}

// Handle Submit
button.addEventListener('click', () => {
    formatDate();
    renderUserdetails();
    getMonthlyGross()
    getSuperRate()
    getNetIncome()
});