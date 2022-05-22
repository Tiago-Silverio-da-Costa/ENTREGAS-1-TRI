function iniciarContador(){
    var btnS = document.querySelector('.start')
    var row = document.querySelector('.row')
    var t_segundos = document.getElementById("timer_segundos");
    var s = 3;

    t_segundos.innerHTML = '3';
    row.style.visibility = 'hidden';

    btnS.addEventListener('click', function(){
    var contador = setInterval(function() {

        t_segundos.innerHTML = '' + s;

        if(s > 0) {s-= 1; row.style.visibility = 'visible';btnS.style.display='none'}
        else if(s == 0){
            row.style.visibility = 'hidden';
        }
        }, 1000);    
   });        
}
iniciarContador(3);


const divPontuacao = document.querySelector("div.pontuacao")
const divMain = document.querySelector("main")
const divs = Array.from(divMain.querySelectorAll("div"))

let sequencia = []
let animatingColors = false
let currentColorPosition = 0


divMain.addEventListener("click", ev => {
    if (animatingColors) {
        console.log("espere acabar a animação")
    }
    
    const idxClickedElement = divs.indexOf(ev.target)
    var perdeu = document.querySelector('.Perdeu')
    
    if (idxClickedElement !== sequencia[currentColorPosition]) {
        perdeu.style.visibility = 'visible'
        return
    }

    currentColorPosition++
    ev.target.classList.add("animate")
    
    if (currentColorPosition >= sequencia.length) {
        currentColorPosition = 0
        setTimeout(() => turno(), 3000)
    }
})

divs.forEach(div => {
    div.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })
})

function playAnimationColors() {
    sequencia.forEach((current, index) => {
        setTimeout(() => {
            divs[current].classList.add("animate");
            animatingColors = index < sequencia.length - 1
        }, 1000 * index);
    })
}
function inicio() {
     var loseG = document.querySelector('.Perdeu')
    let cnt = 3
    sequencia = []
    currentColorPosition = 0
    let idx = setInterval(() => {
        loseG.style.pointerEvents.none;
        console.log(cnt--)
        if(cnt <= 0) {
            turno()
            clearInterval(idx)
        }
    }, 1500)
}

function turno() {
    divPontuacao.innerHTML = sequencia.length
    const rnd = Math.round(Math.random() * 3)
    sequencia.push(rnd)
    playAnimationColors()
}
