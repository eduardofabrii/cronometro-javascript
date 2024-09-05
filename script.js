// Seleciona o elemento HTML com a classe 'stopwatch' e atribui à variável timerEl
var timerEl = document.querySelector('.stopwatch');

// Inicializa a variável timer com o valor zero (representa o tempo do cronômetro)
var timer = 0;

// Inicializa a variável intervalId com o valor zero (será usada para armazenar o identificador do intervalo)
var intervalId = 0;

// Inicializa a variável isRunning com o valor false (indica se o cronômetro está em execução)
var isRunning = false;

// Função que formata o tempo em horas, minutos, segundos e centésimos de segundo
function formatTime(time) {
    // Calcula as horas a partir do tempo total (em centésimos de segundo)
    var hours = Math.floor(time / 360000);
    
    // Calcula os minutos restantes após calcular as horas
    var minutes = Math.floor((time % 360000) / 6000);
    
    // Calcula os segundos restantes após calcular os minutos
    var seconds = Math.floor((time % 6000) / 100);
    
    // Calcula os centésimos de segundo restantes
    var hundredths = time % 100;
    
    // Retorna o tempo formatado no formato "HH:MM:SS:HH"
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}

// Função para iniciar o cronômetro
function startTimer() {
    // Verifica se o cronômetro não está em execução
    if (!isRunning) {
        // Inicia um novo intervalo que atualiza o cronômetro a cada 10 milissegundos
        intervalId = setInterval(function increment() {
            // Incrementa o timer em 1 (representando centésimos de segundo)
            timer += 1;
            // Atualiza o texto do elemento timerEl com o tempo formatado
            timerEl.textContent = formatTime(timer);
        }, 10); // 10 milissegundos = 1 centésimo de segundo
        // Marca o cronômetro como em execução
        isRunning = true;
    }
}

// Função para parar o cronômetro
function stopTimer() {
    // Verifica se o cronômetro está em execução
    if (isRunning) {
        // Limpa o intervalo atual, interrompendo o cronômetro
        clearInterval(intervalId);
        // Marca o cronômetro como parado
        isRunning = false;
    }
}

// Função para resetar o cronômetro
function resetTimer() {
    // Limpa o intervalo atual, interrompendo o cronômetro se estiver em execução
    clearInterval(intervalId);
    // Reseta o timer para zero (tempo inicial do cronômetro)
    timer = 0;
    // Atualiza o texto do elemento timerEl com o tempo formatado (zero)
    timerEl.textContent = formatTime(timer);
    // Marca o cronômetro como parado
    isRunning = false;
}

// Adiciona event listeners aos botões no HTML para cada ação (iniciar, parar, resetar)
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
