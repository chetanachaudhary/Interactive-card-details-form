const cardNumber=document.getElementById("Number");
const inputNum=document.getElementById('cardholder_cardNumber');

const cardholderName=document.getElementById('name');
const inputName=document.getElementById("CardName");

const dateMonth=document.getElementById("month");
const inputMonth=document.getElementById("Date-month");

const dateYear=document.getElementById("year");
const inputYear=document.getElementById("Date-year");

const CVC=document.getElementById("symbolNumber");
const inputCVC=document.getElementById("CVC");

const submitBtn=document.getElementById("submitBtn");
const completedMsg=document.querySelector(".thanks");
const form=document.querySelector("form");

function setCardNumber(e){
    cardNumber.innerText=format(e.target.value);
}

function setCardholderName(e){
    cardholderName.innerText=e.target.value;
}

function setdateMonth(e){
    dateMonth.innerText=e.target.value;
}
function setdateYear(e){
    dateYear.innerText=e.target.value;
}
function setcardCVC(e){
    CVC.innerText=e.target.value;
}

function format(s){
    return s.toString().replace(/d{4}(?=.)/g,"$&");
}

function Submit(e){
    e.preventDefault();
    if(!inputName.value){
        inputName.classList.add("error");
        inputName.parentElement.classList.add("error_msg");
    }
    else{
        inputName.classList.remove("error");
        inputName.parentElement.classList.remove("error_msg");
    }
    if(!inputNum.value){
        inputNum.classList.add("error");
        inputNum.parentElement.classList.add("error_msg");
    }
    else{
        inputNum.classList.remove("error");
        inputNum.parentElement.classList.remove("error_msg");
    }
    if(!inputMonth.value){
        inputMonth.classList.add("error");
        inputMonth.parentElement.classList.add("error_msg");
    }
    else{
        inputMonth.classList.remove("error");
        inputMonth.parentElement.classList.remove("error_msg");
    }
    if(!inputYear.value){
        inputYear.classList.add("error");
        inputYear.parentElement.classList.add("error_msg");
    }
    else{
        inputYear.classList.remove("error");
        inputYear.parentElement.classList.remove("error_msg");
    }
    if(!inputCVC.value){
        inputCVC.classList.add("error");
        inputCVC.parentElement.classList.add("error_msg");
    }
    else{
        inputCVC.classList.remove("error");
        inputCVC.parentElement.classList.remove("error_msg");
    }
    if(inputNum.value&& inputNum.value&&inputMonth.value&&inputYear.value&&inputCVC.value){
        completedMsg.classList.remove('Hidden');
        form.classList.add("Hidden");
    }
}

inputNum.addEventListener("keyup",setCardNumber);
inputName.addEventListener("keyup",setCardholderName);
inputMonth.addEventListener("keyup",setdateMonth);
inputYear.addEventListener("keyup",setdateYear);
inputCVC.addEventListener("keyup",setcardCVC);
submitBtn.addEventListener("click",Submit);
