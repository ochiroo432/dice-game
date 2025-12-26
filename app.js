// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагч
// Тоглоом дууссан эсэхийг эндээр тэмдэглэнэ
var isNewGame;

// Аль тоглогч шидэх вэ гэдгийг энд хадгална.
var activePlayer;

// Хоёр тоглогчийн цуглуулсан оноонууд
var scores;

// Идэвхтэй тоглогчийн энэ тойрогт нэмэгдсэн оноо
var roundScore;

// Шооны зургийг илэрхийлэх элементийг DOM-оос хайж олно
var diceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлэх
initGame();

// Тоглоомыг шинэчлэх, эхлэх үед бэлтгэх
function initGame() {
    // Тоглоом эхэллээ гэж тэмдэглэнэ
    isNewGame = true;

    // Идэвхтэй тоглогчийг 0 буюу эхний тоглогчоор тохируулна
    activePlayer = 0;

    // Тоглогчдын оноог 0-ээр эхлүүлнэ
    scores = [0, 0];

    // Идэвхтэй тоглогчийн ээлжийн оноог 0-ээр эхлүүлнэ
    roundScore = 0;

    // Програм эхлэхэд дэлгэцэн дээр оноонуудыг 0 болгоно
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // Тоглогчдын нэрийг анхныхаар сэргээх
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
}

// Шоог шидэх event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (isNewGame) {
        // 1-6 хүртэл санамсаргүй тоо үүсгэнэ
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        // Шоог дэлгэцэнд харуулна
        diceDom.style.display = "block";

        // Шооны зургийг тохируулна
        diceDom.src = "dice-" + diceNumber + ".png";

        // Хэрвээ шооны тоо 1 биш бол оноог нэмнэ
        if (diceNumber !== 1) {
            // Энэ тоглогчийн ээлжийн оноог нэмнэ
            roundScore = roundScore + diceNumber;
            document.getElementById(
                "current-" + activePlayer
            ).textContent = roundScore;
        } else {
            // Хэрвээ шооны тоо 1 бол тоглогчийн ээлж дуусна
            switchToNextPlayer();
        }
    } else {
        alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинэчлэх хэрэгтэй.");
    }
});

// HOLD товчийг дарсан event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (isNewGame) {
        // Энэ тоглогчийн нийт оноог шинэчилнэ
        scores[activePlayer] = scores[activePlayer] + roundScore;

        // Дэлгэц дээр шинэ оноог харуулна
        document.getElementById("score-" + activePlayer).textContent =
            scores[activePlayer];

        // Хэрвээ тоглогч 10 буюу түүнээс дээш оноо авсан бол ялалт зарлана
        if (scores[activePlayer] >= 10) {
            // Тоглоом дууссан гэж тэмдэглэнэ
            isNewGame = false;

            // Ялагч тоглогчийн нэрийг өөрчилнө
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
        } else {
            // Тоглоом үргэлжилнэ
            switchToNextPlayer();
        }
    } else {
        alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинэчлэх хэрэгтэй.");
    }
});

// Дараагийн тоглогч руу шилжүүлэх функц
function switchToNextPlayer() {
    // Одоогийн тоглогчийн ээлжийн оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчийг солино
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Active class-ыг шилжүүлнэ
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог далдлана
    diceDom.style.display = "none";
}

// New Game товчийг дарсан үед тоглоомыг дахин эхлүүлнэ
document.querySelector(".btn-new").addEventListener("click", initGame);
