const btn = document.getElementById('btn-change');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
    container.classList.toggle('toggle');
});
