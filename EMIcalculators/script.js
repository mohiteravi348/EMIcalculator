function calculateEMI() {
    // Get input values
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTenure = parseFloat(document.getElementById('loanTenure').value);
  
    // Validate input
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
      alert('Please enter valid numeric values.');
      return;
    }
  
    // Monthly interest rate
    var monthlyInterestRate = interestRate / 100 / 12;
  
    // Number of monthly payments
    var numberOfPayments = loanTenure;
  
    // Calculate EMI
    var emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
    // Calculate total payable amount and total interest
    var totalPayable = emi * numberOfPayments;
    var totalInterest = totalPayable - loanAmount;
  
    // Display results
    document.getElementById('emiValue').innerText = emi.toFixed(2);
    document.getElementById('totalInterest').innerText = totalInterest.toFixed(2);
    document.getElementById('totalPayable').innerText = totalPayable.toFixed(2);
  }
  