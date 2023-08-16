function getValueById(inputId) {
    const inputText = document.getElementById(inputId);
    const inputValue = parseFloat(inputText.value);
    inputText.value = '';
    return inputValue;
}

function getCurrentAmountById(elementId) {
    const currentElement = document.getElementById(elementId);
    return parseFloat(currentElement.innerText);
}

function setCurrentAmountById(elementId, newAmount, isWithdraw) {
    const currentElement = document.getElementById(elementId);
    const currentAmount = getCurrentAmountById(elementId);

    if (isWithdraw) {
        currentElement.innerText = currentAmount - newAmount;
    } else {
        currentElement.innerText = currentAmount + newAmount;
    }

    return currentElement.innerText;
}

const MAX_AMOUNT = 1000;

document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositValue = getValueById('deposit-amount');
    if (depositValue === 0 || isNaN(depositValue) || depositValue > MAX_AMOUNT) {
        alert('Input Correct Number');
        return;
    }
    
    setCurrentAmountById('previous-Amount', depositValue);
    setCurrentAmountById('previous-Balance', depositValue);
});

document.getElementById('withdraw-btn').addEventListener('click', () => {
    const withdrawValue = getValueById('withdraw-amount');
    if (withdrawValue === 0 || isNaN(withdrawValue) || withdrawValue > MAX_AMOUNT) {
        alert('Input Correct Number');
        return;
    }
    
    setCurrentAmountById('previous-withdraw', withdrawValue, true);
    setCurrentAmountById('previous-Balance', withdrawValue, true);
});
