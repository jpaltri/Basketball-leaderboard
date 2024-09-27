/*let homeScore = document.getElementById("home-score-el")
let guestScore = document.getElementById("guest-score-el")
let home = 0
let guest = 0

function add1() {
    home += 1
    homeScore.textContent = home
}

function add2() {
    home += 2
    homeScore.textContent = home
}

function add3() {
    home += 3
    homeScore.textContent = home
}

function addGuest1() {
    guest += 1
    guestScore.textContent = guest
}

function addGuest2() {
    guest += 2
    guestScore.textContent = guest
}

function addGuest3() {
    guest += 3
    guestScore.textContent = guest
}*/

let homeScore = document.getElementById("home-score-el");
let guestScore = document.getElementById("guest-score-el");
let home = 0;
let guest = 0;

// HOME Buttons
document.getElementById('home-add1').addEventListener('click', () => {
  home += 1;
  homeScore.textContent = home;
});

document.getElementById('home-add2').addEventListener('click', () => {
  home += 2;
  homeScore.textContent = home;
});

document.getElementById('home-add3').addEventListener('click', () => {
  home += 3;
  homeScore.textContent = home;
});

// GUEST Buttons
document.getElementById('guest-add1').addEventListener('click', () => {
  guest += 1;
  guestScore.textContent = guest;
});

document.getElementById('guest-add2').addEventListener('click', () => {
  guest += 2;
  guestScore.textContent = guest;
});

document.getElementById('guest-add3').addEventListener('click', () => {
  guest += 3;
  guestScore.textContent = guest;
});
