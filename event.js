                      // log in page start

document.getElementById('btn-submit').addEventListener('click',function()
{
//console.log('click done');
const emailField= document.getElementById('user-email');
const email = emailField.value;
//console.log(email);

const passField=document.getElementById('user-pass');
const pass = passField.value;
//console.log(pass);

if (email === 'bap@gmail.com' && pass==='1' )
{
    
    window.location.href = 'bank.html';
}

else {
   alert('wrong');
}

})

                          // log in page finished 