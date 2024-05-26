const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click',() =>{
  container.classList.add("active");
});


function auth(){
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;

  if(email.indexOf("gitam.in")>0 && pass == 'admin'){
    window.location.assign("home.html");
    alert("login successfully");
  }else{
    alert("Invalid Information");
    return;
  }
}
