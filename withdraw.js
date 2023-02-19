// event handler 

document.getElementById('btn-withdraw').addEventListener('click',function(){

const withdrawField = document.getElementById("withdraw-field");

const newWithdrawAmountString = withdrawField.value;

const newWithdrawAmount = parseFloat(newWithdrawAmountString);

withdrawField.value='';
if (isNaN(newWithdrawAmount))
{
    alert("Provide valid number");
    return;
}



const withdrawTotalElement = document.getElementById("withdraw-total");

const previousTotalString = withdrawTotalElement.innerText;

const previousTotal = parseFloat(previousTotalString);





// balance minus 


const balanceTotalElement = document.getElementById('balance-total');
const previousTotalBalanceString = balanceTotalElement.innerText;

const previousTotalBalance = parseFloat(previousTotalBalanceString);


if(newWithdrawAmount>previousTotalBalance)
{
    alert('taka nai ');
    return;
}
const currentWithdrawTotal = newWithdrawAmount+ previousTotal;

withdrawTotalElement.innerText = currentWithdrawTotal ;



const currentBalanceTotal =   previousTotalBalance-newWithdrawAmount;

balanceTotalElement.innerText = currentBalanceTotal ;










})
