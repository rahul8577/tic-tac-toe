let first = document.getElementById("p0");
let second = document.getElementById("p1");
let third = document.getElementById("p2");
let fourth = document.getElementById("p3");
let fifth = document.getElementById("p4");
let sixth = document.getElementById("p5");
let seventh = document.getElementById("p6");
let eight = document.getElementById("p7");
let nine = document.getElementById("p8");

let rbtn=document.getElementById("reset-btn");
let res =document.getElementById("res");

rbtn.addEventListener('click',(e)=>{
    location.reload();
})

let temp="0";

function toggle(){
    if(temp=="0"){
        temp="X";
    }else{
        temp="0";
    }
}

let firstclicked = false;
let secondclicked = false;
let thirdclicked = false;
let fourthclicked = false;
let fifthclicked = false;
let sixthclicked = false;
let seventclicked = false;
let eightclicked = false;
let nineclicked = false;

let times=1;

function resultcheck(){
    let first = document.getElementById("p0").textContent;
    let second = document.getElementById("p1").textContent;
    let third = document.getElementById("p2").textContent;
    let fourth = document.getElementById("p3").textContent;
    let fifth = document.getElementById("p4").textContent;
    let sixth = document.getElementById("p5").textContent;
    let seventh = document.getElementById("p6").textContent;
    let eight = document.getElementById("p7").textContent;
    let nine = document.getElementById("p8").textContent;

    if(times>=9){
        return
    }else{
        times++;
    }

    
    // if(first){
    //     return 0;
    // }
    // console.log(first,second,third,"")
    var winner="not now"
    if(first==second && first==third && second==third){
        if(first=="")
            return
        
        winner=first;

    }else if(first==fifth && fifth==nine && first==nine){
        if(first=="")
            return
        winner=first;
        
    }else if(second==fifth && fifth==eight && second==eight){
        if(second=="")
            return
        winner=second;
        
    }else if(first==fourth && fourth==seventh && first==seventh){
        if(first=="")
            return
        winner=first;

    }else if(first==fourth && fourth==seventh && first==seventh){
        if(first=="")
            return
        winner=first;

    }else if(third==sixth && sixth==nine && third==nine){
        if(third=="")
            return
        winner=third;

    }else if(third==fifth && fifth==seventh && third==seventh){
        if(third=="")
            return
        winner=third;
    }
    // console.log(winner)
    return winner;
}

var result="";

first.addEventListener('click', (e) => {
    if (!firstclicked) {
        first.textContent = temp;
        toggle();
        firstclicked = true;
        result=resultcheck();
        printResult(result);
        // console.log(result)
    } else {
        console.log("already clicked")
    }
})

second.addEventListener('click', (e) => {
    if (!secondclicked) {
        second.textContent = temp;
        toggle();
        secondclicked = true;
        result=resultcheck();
        printResult(result);
        // console.log(result)

    } else {
        console.log("already clicked")
    }
})

third.addEventListener('click', (e) => {
    if (!thirdclicked) {
        third.textContent = temp;
        toggle();
        thirdclicked = true;
        result=resultcheck();
        printResult(result);
        // console.log(result)
    } else {
        console.log("already clicked")
    }
})

fourth.addEventListener('click', (e) => {
    if (!fourthclicked) {
        fourth.textContent = temp;
        toggle();
        fourthclicked = true;
        result=resultcheck();
        printResult(result);
        // console.log(result)
        
    } else {
        console.log("already clicked")
    }
})

fifth.addEventListener('click', (e) => {
    if (!fifthclicked) {
        fifth.textContent = temp;
        toggle();
        fifthclicked = true;
        result=resultcheck();
        printResult(result);
        // console.log(result)
        
    } else {
        console.log("already clicked")
    }
})

sixth.addEventListener('click', (e) => {
    if (!sixthclicked) {
        sixth.textContent = temp;
        toggle();
        sixthclicked = true;
        result=resultcheck();
        printResult(result);
        // console.log(result)
        
    } else {
        console.log("already clicked")
    }
})

seventh.addEventListener('click', (e) => {
    if (!seventclicked) {
        seventh.textContent = temp;
        toggle();
        seventclicked = true;
        result=resultcheck();
        printResult(result);
        // console.log(result)

    } else {
        console.log("already clicked")
    }
})

eight.addEventListener('click', (e) => {
    if (!eightclicked) {
        eight.textContent = temp;
        toggle();
        eightclicked = true;
        result=resultcheck();
        printResult(result);
        // console.log(result)

    } else {
        console.log("already clicked")
    }
})

nine.addEventListener('click', (e) => {
    if (!nineclicked) {
        nine.textContent = temp;
        toggle();
        nineclicked = true;
       result=resultcheck();
       printResult(result);
        // console.log(result)

    } else {
        console.log("already clicked")
    }
})

function printResult(resu){
    console.log(resu);
    if(resu=="0"){
        res.textContent="winner is "+ resu;
    }else if(resu=="X"){
        res.textContent="winner is "+ resu;        
    }else{       
        res.textContent="No one is winner";
    }
}