function getValueById(inputId){
    const inputText = document.getElementById(inputId);
    const inputValue = inputText.value;
    const inputAmount = parseFloat(inputValue);
    inputText.value = '';
    return inputAmount;
}

function getCurrentAmountById(defaultAmount){
    const currentElement = document.getElementById(defaultAmount);
    const currentAmountStr = currentElement.innerText;
    const currentAmount = parseFloat(currentAmountStr);
    return currentAmount;
}

function setCurrentAmountById(previousAmountId, newAmount){
    const currentElement = document.getElementById(previousAmountId);
    currentElement.innerText = newAmount;
}



// deposit section
document.getElementById('deposit-btn').addEventListener('click',()=>{
    
    const depositValue = getValueById('deposit-amount');
    const depositAmount = getCurrentAmountById("previous-Amount");
    const balanceAmount = getCurrentAmountById("previous-Balance");
    console.log(balanceAmount)
    if(depositValue === 0){
        alert('Input Correct Number')
        return;
    }else if(depositValue > 10000){
        alert('You Can not add more than 10000 $ at once')
        return;
    }

    const newDepositAmount = depositValue + depositAmount;
    const newBalanceAmount = balanceAmount + depositValue;
    console.log(balanceAmount)
    console.log(newBalanceAmount)
    if(isNaN(newDepositAmount)){
        alert('Input Correct Number')
        return;
    }

    setCurrentAmountById("previous-Amount",newDepositAmount);
    setCurrentAmountById("previous-Balance",newBalanceAmount);
})


// Withdraw section


document.getElementById('withdraw-btn').addEventListener('click',()=>{
    
    const withdrawValue = getValueById('withdraw-amount');
    console.log(withdrawValue)
    const withdrawAmount = getCurrentAmountById("previous-withdraw");
    console.log(withdrawAmount)
    const balanceAmount = getCurrentAmountById('previous-Balance');
    console.log(balanceAmount)
    
    if(withdrawValue === 0){
        alert('Input Correct Number')
        return;
    }else if(withdrawValue > balanceAmount){
        alert(`'You Can not withdraw more than $ ${balanceAmount}'`)
        return;
    }


    const newWithdrawAmount = withdrawAmount + withdrawValue;
    const newBalanceAmount = balanceAmount - withdrawValue;
    console.log(balanceAmount)
    console.log(newBalanceAmount)
    if(isNaN(newWithdrawAmount)){
        alert('Input Correct Number')
        return;
    }

    setCurrentAmountById("previous-withdraw",newWithdrawAmount);
    setCurrentAmountById("previous-Balance",newBalanceAmount);
})
