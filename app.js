var price=document.querySelectorAll('.i1')
var check=document.querySelector('.check')
var op=document.querySelector('.output')
console.log("i am here"+  Number(price[0].value) + "i am here" +check+"i am here" +op);
check.addEventListener('click',function(){
    console.log("i am here2"+  Number(price[0].value) )
    var a=Number(price[0].value)
    var b=Number(price[1].value)
    var c=Number(price[2].value)
    console.log("i am here");
if(a!=0 ||b!=0 ||c!=0 ){
    sum(a,b,c);
}else{
    op.innerText="Enter a valid input";
}


})

function sum(initial,actual,quantity){
    var message;
    var percent;
    var pl;
    if(initial<actual){
 pl=(actual-initial)*quantity;
percent=pl/initial*100;
message="profit of "+pl+"rs. profit percent is :"+percent;

   op.innerText=message;


    }else if(initial>actual){
     
        pl=(initial-actual)*quantity;
        percent=pl/initial*100;
        message="your in loss "+"loss amount"+pl+"loss percent"+percent+"%";
        op.innerText=message;
    }else{

        message="your in no loss-profit";
        op.innerText=message;
    }

}