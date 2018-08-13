document.getElementById("button").addEventListener('click', function (e) {
    window.location.replace(url: quiz1.html)
});

questions = 0

document.getElementsByClassName("right").addEventListener('click', function (e) {
    if (questions >= 0){
        questions = +1      
    } else {
        questions = +0
    }
});

document.getElementsByClassName("left").addEventListener('click', function (e) {
    if (questions >= 0) {
        questions = -1
    } else {
        questions = +0
    }
});

q1 = document.getElementById("question1")

if (q1.style.display === "none") {
    q1.style.display = "block";
} else {
    q1.style.display = "none";
}