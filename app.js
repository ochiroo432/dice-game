//  toglogchiin eeljiig  hadgalah huvisagch, negdvgeer toglogch 0,hoerdugaar toglogchiig 1 gej tendegley,

var activPlayer = 1;






// toglogchiin tsugluulsan onoog hadgalah huvsagch 
var scors = [0, 0,];


// toglochiin eeljendee tsugluulj baigaa onooog hadgalah huwisagch 
var roundScore = 0;




// shoo ali talaaraa buusaniig hadgalah huvisagch heregtei , 1-6 gesen utagiig ene huvisagchid sanamsarguigeer vvsgej ogno 


var diceNumber = Math.floor(Math.random() * 6) + 1;


//  <div class="player-score" id="score-0">43</div>

// window.document.querySelector('#score-0').textContent = dice;

// window.document.querySelector('#score-1').textContent = dice;





window.document.getElementById('score-0').textContent = '0';
window.document.getElementById('score-1').textContent = '0';

window.document.getElementById('current-0').textContent = '0';
window.document.getElementById('current-1').textContent = '0';


// document.querySelector('.dice').style.dicplay = 'none';
var diceDom = document.querySelector('.dice');

diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function shooShid() {

    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + '.png';


});

// function shooShid() {

//     var diceNumber = Math.floor(Math.random() * 6) + 1;
//     alert("shoo buulaa : " + diceNumber);
// }