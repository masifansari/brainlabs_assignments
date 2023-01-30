let clearBtn = document.querySelector("#reset-form");
let inputs = document.querySelectorAll("input");
let selects = document.querySelectorAll("select");
clearBtn.addEventListener("click",()=>{
    inputs.forEach((input)=>(input.value = ""));
    selects.forEach((select)=>(select.value = "Select Team"));
    localStorage.clear();
    sessionStorage.clear();
});

//submit button
const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("mouseover", function handleMouseOver(){
   submitBtn.style.color = "#fff"; 
});

submitBtn.addEventListener("mouseout",function handleMouseOut(){
    submitBtn.style.color = "#000";
})

//Reset button
const reset = document.getElementById("reset-form");
reset.addEventListener("mouseover", function handleMouseOver(){
    reset.style.color = "#fff"; 
});

reset.addEventListener("mouseout",function handleMouseOut(){
    reset.style.color = "#000";
});

const form = document.querySelector("form");
const successMsg = document.querySelector("#success-msg");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    successMsg.classList.add("show");
    setTimeout(()=>form.submit(),10000)
});

//enroll button
const enrollBtn = document.getElementById('enroll');
enrollBtn.addEventListener("click", function onClick(){
    enrollBtn.innerHTML = "ENROLL NOW";
    enrollBtn.style.backgroundColor = "#a22b06";
});

function localStore() {

    var inputSelectOpt = document.getElementById("selectOpt");
    localStorage.setItem("Selected Team",inputSelectOpt.value);

    var inputFirstName = document.getElementById("firstName");
    localStorage.setItem("First Name",inputFirstName.value);

    var inputLastName = document.getElementById("lastName");
    localStorage.setItem("Last Name",inputLastName.value);

    var inputPhone = document.getElementById("phone");
    localStorage.setItem("Phone",inputPhone.value);

    var inputEmail = document.getElementById("email");
    var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    hashObj.update(inputEmail.value);
    var hash = hashObj.getHash("HEX");
    localStorage.setItem("Email", hash);

    window.scrollTo({ top:0, behavior: 'smooth' });
}


