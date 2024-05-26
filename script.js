
// Home

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

var lastScrollTop = 0;
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function(){
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
      navbar.style.top = "-80px";
    } else {
      navbar.style.top = "0px";
    }
    lastScrollTop = scrollTop;
  });

  var typingEffect = new Typed(".animate",{
    strings : ['"Wanna look at past placement Experiences?"','"Stuck before Examinations?"','"Dont know what to prepare?"','"Lost Someting in university Premises?"'],
    loop : true,
    typeSpeed : 35,
    backSpeed : 30,
    backDelay : 2000
  })


// past papers

  const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',() =>{
  container.classList.add("active");
});
loginBtn.addEventListener('click',() =>{
  container.classList.remove("active");
});


// chat

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;

    appendMessage('user-message', message);
    userInput.value = '';
  
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        appendMessage('bot-message', botResponse);
    }, 1000);
}

function appendMessage(className, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    // Here you can implement your logic to get a response from a bot or server.
    // For demonstration, we'll use a simple echo response.
    alert(`Your query is visble to all Youll be notified by given contact if found`)
    return;
}

