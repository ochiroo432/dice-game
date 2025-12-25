// ========================================
// TOGLOMGIIN STATE: ЕЭЛЖ, ОНОО, ШОО
// ========================================

// Тоглогчийн ээлжийг хадгалах хувьсагч
// 0 = Нэгдүгээр тоглогч, 1 = Хоёрдугаар тоглогч
var activePlayer = 0;

// Тоглогчдын нийт оноог хадгалах массив
var scores = [0, 0];

// Тоглогч ээлжиндээ цуглуулж байгаа оноо
var roundScore = 0;

// Тоглоом эхлэхэд бүх оноог 0 болгож дэлгэцэнд харуулна
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Шооны элемент DOM-аас олж авах
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none"; // Эхэндээ шоо нуух

// ========================================
// ШОО ШИДЭХ EVENT LISTENER
// ========================================
document.querySelector(".btn-roll").addEventListener("click", function () {

    // 1-6 хүртэл санамсаргүй тоо гаргах
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шоо вэб дээр гаргах
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    // ========================================
    // 1 буусан эсэхийг шалгах
    // ========================================
    if (diceNumber !== 1) {
        // 1-ээс ялгаатай тоо буувал ээлжийн оноонд нэмэх
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг солих
        roundScore = 0; // ээлжийн оноог reset хийх
        document.getElementById("current-" + activePlayer).textContent = "0";

        // Идэвхтэй тоглогчийг солих: 0 -> 1, 1 -> 0
        activePlayer = activePlayer === 0 ? 1 : 0;

        // Шооны дүрсийг нуух
        diceDom.style.display = "none";

        // UI дээрх идэвхтэй тоглогчийн өнгийг солих
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }
});
