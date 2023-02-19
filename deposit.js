

document.getElementById('btn-submit').addEventListener('click',function(){

const depositField= document.getElementById('deposit-field');

const newDepositAmountString= depositField.value;

const  newDepositAmount =parseFloat(newDepositAmountString);

depositField.value='';
if (isNaN(newDepositAmount))
{
    alert("Provide valid number");
    return;
}




const depositTotalElement = document.getElementById('deposit-total');

const previousDepositTotalString = depositTotalElement.innerText;

const previousDepositTotal=parseFloat(previousDepositTotalString);//  string ke int korrci 




const currentDepositTotal= previousDepositTotal+newDepositAmount;



depositTotalElement.innerText=currentDepositTotal;


// work with balance 


const balanceTotalElement = document.getElementById('balance-total');

const previousTotalBalanceString = balanceTotalElement.innerText;

const previousTotalBalance= parseFloat(previousTotalBalanceString);





const currentBalanceTotal= previousTotalBalance + currentDepositTotal;

balanceTotalElement.innerText=currentBalanceTotal;



// input hole value input na hole inner text 





})
