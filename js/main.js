const iniciar = document.querySelector('#start');
const stop = document.querySelector('#stop');
const numero = document.querySelector('#number');
const audio = document.querySelector('audio');
let timer;
let stoped = false;
let count = 1;
let xy;
let init = false; // permitir o uso do stop

iniciar.addEventListener('click', () => {
    if(stoped == true) {
        alert('A contagem está sendo iniciada');
        const startingMinutes = xy;
        let time = startingMinutes * 60;

        xy = time;
        init = true;        
        const countdownEl = document.querySelector('#countdown');
        
        timer = setInterval(function updatCountdown() {
            if(count > xy) {
                audio.play();
                count = 1;
                stoped = false;
                init = false;
                clearInterval(timer);
            }

            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            countdownEl.innerHTML = `${minutes}:${seconds}`;
            time--;

            count++;

        }, 1000);
    } else {
        alert('É preciso clicar em contagem primeiro e escolher os minutos');
    }
});

numero.addEventListener('click', () => {
    xy = prompt('Escolha os minutos (0.2 seria 2 sgundos): ');
    stoped = true;
    alert('A contagem já pode ser iniciada. Por favor não clique no botão iniciar em quanto estiver sendo feito a contagem. :Este bug ainda não foi corrigido (caso clique recarregue a página)');
});

stop.addEventListener('click', () => {
    if(stoped == true && init == true){
        count = 1;
        clearInterval(timer);
        alert('A contagem foi parada');
        const countdownEl = document.querySelector('#countdown');
        countdownEl.innerHTML = '00:00';
        stoped = false;
        init = false;
    }
});