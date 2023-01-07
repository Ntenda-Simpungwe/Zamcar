//parseInt(document.getElementById('quantity').value)
var btn = document.getElementById('hamm');
var joinv = document.getElementById('pops1');
var joinv2 = document.getElementById('pops2');
var shopv = document.getElementsByClassName('shopp');
var trynv = document.getElementById('tryn');
let num = document.querySelector('.quan');
let bs = document.querySelector("#switch");

const spane = document.querySelectorAll('.spane');
const buts = document.querySelectorAll('.shopp');
tryn.addEventListener('change', summ);
var prices = new Array(3800,4200,3000,3500,4000,3850,2775,3950);

bs.addEventListener("click", function () {
  window.location.href = "Checkout.html";
});


buts.forEach((but, index) => {
  but.addEventListener("click", function() {
    joinv2.style.display = '';
    const spec = spane[9].querySelector('p');
    const pec = document.querySelector('#tryn');
    spec.innerHTML = spane[index].querySelector('p').innerText;
   pec.innerHTML = "R "+prices[index];
   num.addEventListener('input', function () {
	
    // As a number
    let val = num.valueAsNumber;
  
    if (isNaN(prices[index]*val)){
      
    document.getElementById('tryn').innerHTML = "R 0";
    }
    else
    {document.getElementById('tryn').innerHTML = "R "+(prices[index]*val);}
  
  });

  })
})

num.addEventListener('input', function () {
	
	// As a number
	let val = num.valueAsNumber;

  if (isNaN(prices[2]*val)){
    
  document.getElementById('tryn').innerHTML = "R 0";
  }
  else
  {document.getElementById('tryn').innerHTML = "R "+(prices[2]*val);}

});


 
function menufun (){
 btn.style.display = '';
 
 
}
function joinfunc (){
    joinv.style.display = '';
    
    
   }

function disapH (){
    btn.style.display = 'none';
    return false;
    
   }

   function thank(){
   
   }

   function summ(){
     document.getElementById('tryn').innerHTML = calc;
   }


   var myApp = {};

   myApp.heat = 50;
   myApp.glitch = 'high';
   