const container = document.querySelector('.container');
const btn_sing_in = document.getElementById('btn-sing-in');
const btn_sing_up = document.getElementById('btn-sing-up');

btn_sing_in.addEventListener('click', () => {
    container.classList.remove('toggle');
});

btn_sing_up.addEventListener('click', () => {
    container.classList.add('toggle');
});

