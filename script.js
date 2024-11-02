document.addEventListener("DOMContentLoaded",function(){

    const investmentInput = document.getElementById("investment");

    const interestRateInput = document.getElementById("interest-rate");

    const timePeriodInput = document.getElementById("time-period");

    investmentInput.addEventListener("input",function(){
        updateInvestmentValue(this.value);
        calculateFD();
    });

    interestRateInput.addEventListener("input",function(){
        updateInterestRateValue(this.value);
        calculateFD();
    });

    timePeriodInput.addEventListener("input",function(){
        updateTimePeriodValue(this.value);
        calculateFD();
    });

    updateInvestmentValue(investmentInput.value);
    updateInterestRateValue(interestRateInput.value);
    updateTimePeriodValue(timePeriodInput.value);
});

function updateInvestmentValue(value){
    document.getElementById("investment-value").innerText = `₵${parseFloat(
      value
    ).toLocaleString("en-US")}`;
}

function updateInterestRateValue(value){
    document.getElementById("interest-rate-value").innerText = `${parseFloat(value).toFixed(1)}%`;
}

function updateTimePeriodValue(value){
    document.getElementById("time-period-value").innerText = value;
}

function calculateFD(){

    const principal = parseFloat( document.getElementById("investment").value);

    const rateOfInterest = parseFloat( document.getElementById("interest-rate").value);

    const timePeriod = parseFloat( document.getElementById("time-period").value);

    const n = 4;
    const totalAmount = principal * Math.pow((1 + (rateOfInterest / 100) /n), n * timePeriod);
    const interestEarned = totalAmount - principal;

    document.getElementById(
      "invested-amount"
    ).innerText = ` ₵${principal.toLocaleString("en-US")}`;

    document.getElementById("estimated-returns").innerText = ` ₵${Math.round(
      interestEarned
    ).toLocaleString("en-US")}`;

    document.getElementById("total-value").innerText = ` ₵${Math.round(
      totalAmount
    ).toLocaleString("en-US")}`;

}