let pole_login = document.querySelector("#login");
let pole_passoword = document.querySelector("#password-orig");
let pole_passoword_proverki = document.querySelector("#password-verif");


let array_err_log = document.querySelectorAll(".error-log");
let array_err_pass = document.querySelectorAll(".error-p");
let array_err_pss_ver = document.querySelectorAll(".error-ver")

pole_login.onkeyup = function(){

    if(pole_login.value.match(/[a-zA-Z@+-_]+/)){
        error_check (array_err_log, 0, "ok");
    }else{
        error_check (array_err_log, 0, "no");
    }

    if(pole_login.length <= 150){
        error_check (array_err_log, 1, "no");
    }else{
        error_check (array_err_log, 1, "ok");
    }
}

pole_passoword.onkeyup = function(){
    if(pole_passoword.value.length >= 7){
        error_check (array_err_pass, 0, "ok");
    }else{
        error_check (array_err_pass, 0, "no");
    };

    if(pole_passoword.value.match(/^[\d]+$/)){
        error_check (array_err_pass, 1, "no");
    }else{
        error_check (array_err_pass, 1, "ok");
    };

    if(pole_passoword.value != pole_login.value){
        error_check (array_err_pass, 2, "ok");
    }else{
        error_check (array_err_pass, 2, "no");
    };
        
};

pole_passoword_proverki.onkeyup = function(){
    if(pole_passoword.value == pole_passoword_proverki.value){
        error_check (array_err_pss_ver, 0, "ok");
        pole_passoword_proverki.style.color = "#3CA255";
        pole_passoword_proverki.style.border = "1px solid #3CA255"
    }else{
        error_check (array_err_pss_ver, 0, "no");
        pole_passoword_proverki.style.color = "#EE2222";
        pole_passoword_proverki.style.border = "1px solid #EE2222"
    }
};
array_err_log[0].children[0].classList.replace;
console.log(array_err_log[0].children[0].className)
function error_check (array, parentID, status){
    if(status == "ok"){
        array[parentID].children[0].className = "open";
        array[parentID].children[1].className = "cl";
        array[parentID].children[2].style.color = "#3CA255";
    }else{
        array[parentID].children[0].className = "cl";
        array[parentID].children[1].className = "open";
        array[parentID].children[2].style.color = "#EE2222";
    }
};