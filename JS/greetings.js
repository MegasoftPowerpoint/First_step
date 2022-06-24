const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const Greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const username = "username";

function loginSubmit(event){
    event.preventDefault();
    const value = loginInput.value;
    console.log(value);
    localStorage.setItem("username", value);
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    paintGreeting(value);
}

function paintGreeting(username){
    Greeting.innerText = `Welcome back, ${username}`;
    Greeting.classList.remove(HIDDEN_CLASS_NAME);
}

const SavedUsername = localStorage.getItem(username);

if(SavedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", loginSubmit);
}else{
    paintGreeting(SavedUsername);
}//로컬 스토리지에 저장된 유저정보의 유무에 따라 다른 함수를 사용한다.
