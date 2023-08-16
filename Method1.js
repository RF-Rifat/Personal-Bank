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
    currentElement.value = '';
    return currentAmount;
}

function setCurrentAmountById(previousAmountId, newAmount){
    const currentElement = document.getElementById(previousAmountId);
    const currentAmountStr = currentElement.innerText;
    const currentAmount = parseFloat(currentAmountStr);
    const totalAmount = currentElement.innerText = currentAmount + newAmount;
    return totalAmount;
}



// deposit section
document.getElementById('deposit-btn').addEventListener('click',()=>{
    
    const depositValue = getValueById('deposit-amount');
    const depositAmount = getCurrentAmountById("previous-Amount");
    
    if(depositValue === 0){
        alert('Input Correct Number')
        return;
    }else if(depositValue > 10000){
        alert('You Can not add more than 10000 $ at once')
        return;
    }

    const newDepositAmount = depositValue + depositAmount;
    if(isNaN(newDepositAmount)){
        alert('Input Correct Number')
        return;
    }
    setCurrentAmountById("previous-Amount",depositValue);
    setCurrentAmountById("previous-Balance",depositValue);
})



// Withdraw section
function setCurrentBalanceById(previousAmountId, newAmount){
    const currentElement = document.getElementById(previousAmountId);
    const currentAmountStr = currentElement.innerText;
    const currentAmount = parseFloat(currentAmountStr);
    const totalAmount = currentElement.innerText = currentAmount - newAmount;
    return totalAmount;
}


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
    }else if(withdrawValue > 10000){
        alert('You Can not withdraw more than 10000 $ at once')
        return;
    }


    const newDepositAmount = withdrawValue + withdrawAmount;
    if(isNaN(newDepositAmount)){
        alert('Input Correct Number')
        return;
    }
    // setCurrentWithdrawAmountById("previous-Amount",withdrawValue);
    setCurrentAmountById("previous-withdraw",withdrawValue);
    setCurrentBalanceById("previous-Balance",withdrawValue);
})
