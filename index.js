let wynik=0;
let liczba1=document.querySelector(".liczba1");
let liczba2 = document.querySelector('.liczba2 span');
let liczby=document.querySelectorAll('.liczba');
let operatory=document.querySelectorAll('.operator');
let rowna=document.getElementById('rowna');
let wlacz=document.getElementById('wlacz');
let dod=document.getElementById('dod');
let pot=document.getElementById('pot');
let pier=document.getElementById('pier');
let op=document.getElementById('op');
let rezultat=document.getElementById('rezultat');

function wyswietlN() {
    if(liczba1.innerHTML.startsWith('0')){
        liczba1.innerHTML='';
    }
    liczba1.innerHTML+=this.textContent;
}
function potegowanie(){
        if(liczba2.innerHTML===''){
        wynik=Math.pow(parseFloat(liczba1.innerHTML),2);
        liczba1.innerHTML='';
        liczba1.innerHTML+=wynik;
        }
}
function pierwiastkowanie(){
        if(liczba2.innerHTML===''){
        wynik=Math.sqrt(parseFloat(liczba1.innerHTML));
        liczba1.innerHTML='';
        liczba1.innerHTML+=wynik;
        }
}
var o=0;
function dzialanie(){
        if(op.innerHTML===''){
        liczba2.innerHTML=liczba1.innerHTML;
        op.innerHTML=this.textContent;
        liczba1.innerHTML='';
        }
        else if(op.innerHTML=this.textContent){
        op.innerHTML=this.textContent;
        liczba1.innerHTML='';
        }
}

function wyniki(){
    function czyszczenie(){
        liczba1.innerHTML='';
        rezultat.innerHTML='';
        op.innerHTML='';
    }
    function wyswietlW(){
        liczba1.innerHTML+=wynik;
    }
    if(op.innerHTML==='x'){
        wynik=parseFloat(liczba2.innerHTML)*parseFloat(liczba1.innerHTML);
        czyszczenie();
        wyswietlW();
    }

    else if(op.innerHTML==='÷'){
        wynik=parseFloat(liczba2.innerHTML)/parseFloat(liczba1.innerHTML);
        czyszczenie();
        wyswietlW();
    }

    else if(op.innerHTML==='%'){
        wynik=parseFloat((liczba2.innerHTML)/100)*parseFloat(liczba1.innerHTML);
        czyszczenie();
        wyswietlW();
    }
    else if(op.innerHTML==='+'){
        wynik=parseFloat(liczba2.innerHTML)+parseFloat(liczba1.innerHTML);
        czyszczenie();
        wyswietlW();
    }
    else if(op.innerHTML==='-'){
        wynik=parseFloat(liczba2.innerHTML)-parseFloat(liczba1.innerHTML);
        czyszczenie();
        wyswietlW();
    }
    }
    

pot.addEventListener("click",potegowanie);
pier.addEventListener("click",pierwiastkowanie);
rowna.addEventListener("click",wyniki);

wlacz.addEventListener("click",()=>{
    rezultat.innerHTML='';
    op.innerHTML='';
    liczba1.innerHTML='0';
})

liczby.forEach((button)=> {
    button.addEventListener('click',wyswietlN);
});
operatory.forEach((button)=> {
    button.addEventListener('click',dzialanie);
});


