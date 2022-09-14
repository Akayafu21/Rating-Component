
var rate = 0;
var score = ["one","two","three","four","five"]; 
var real;

function ChangeState() {
    if(rate < 1){
        alert("please rate before submit");
    }else{
        document.getElementById("rating").style.display="none"
        document.getElementById("thank").style.display="flex"
        console.log(rate);
    }
}

function Rate(x){
    rate = x;
    document.getElementById("yourrate").innerHTML = "You selected "+rate+" out of 5"
    real = rate;
    --real;
}

function Clear() {
    for(var i = 0; i < 5 ;i++){
        document.getElementById(score[i]).style.backgroundColor="var(--Tran-Medium-Grey)"
        document.getElementById(score[i]).style.color="var(--Medium-Grey)"
    }
}

function Set(){
    document.getElementById(score[real]).style.backgroundColor="var(--Orange)"
    document.getElementById(score[real]).style.color="var(--White)"
}
