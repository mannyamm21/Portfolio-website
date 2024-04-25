var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("activelink");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwfueCag75x-LirBMyF0XG6kPlZeWwevK9k_5LxjM0TJWAsGFniHAKjKPOPseX4TcPSEg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }
                , 3000)
            form.reset()

        })
        .catch(error => console.error('Error!', error.message))
})
function toggleOptions(button) {
    var hiddenOptions = button.nextElementSibling;
    hiddenOptions.classList.toggle("show-options");
}