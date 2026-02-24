    const porta = document.querySelector('.porta');
    const intro = document.querySelector('.intro');
    const landing = document.querySelector('#landing');
    const voltarBtn = document.querySelector('#voltar-btn');

    porta.addEventListener('click', () => {
        porta.classList.add('animar-porta');
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";

            landing.style.display = "block";
            setTimeout(() => {
                landing.style.opacity = "1";    
        }, 50);
    }, 1200);    
});

    voltarBtn.addEventListener('click', () => {
        landing.style.opacity = "0";

        setTimeout(() => {
            landing.style.display = "none";

        intro.style.display = "block";
        setTimeout(() => {
            intro.style.opacity = "1";    
        }, 50);

        porta.classList.remove('animar-porta');
    }, 1000); 
});

const botoes = document.querySelectorAll('.saiba-btn');

botoes.forEach(botao => {
    botao.addEventListener('click', function () {

        const personagemAtual = this.parentElement;

        document.querySelectorAll('.personagem').forEach(p => {
            if (p !== personagemAtual) {
                p.classList.remove('ativo');
                p.querySelector('.saiba-btn').textContent = "Saiba mais";
            }
        });

        personagemAtual.classList.toggle('ativo');
        if (personagemAtual.classList.contains('ativo')) {
            this.textContent = "Fechar";
        } else {
            this.textContent = "Saiba mais";
        }

    });
});