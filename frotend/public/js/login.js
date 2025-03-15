// Varaibles

const container = document.querySelector('.container');
const btn_sing_in = document.getElementById('btn-sing-in');
const btn_sing_up = document.getElementById('btn-sing-up');
const Form_login = document.getElementById('Form--Login');
const Form_register = document.getElementById('Form--Register');

// Event listeners
btn_sing_in.addEventListener('click', () => {
    container.classList.remove('toggle');
});

btn_sing_up.addEventListener('click', () => {
    container.classList.add('toggle');
});

// Form submit
Form_login.addEventListener('submit', (e) => {
    try{
        e.preventDefault();
        const email = document.getElementById('Email--login').value;
        const password = document.getElementById('password--login').value;
        const respuesta = fetch('http://localhost:7575/Users/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password})
            }
        )
        respuesta.then(res => {
            if(res.ok){
                alert('Login successful');
                window.location.href = '../views/index.html';
            }
            else{
                alert('Login failed');
            }
        })
    }
    catch (error){
        console.error(`Error: ${error}`);
    }
})

Form_register.addEventListener('submit', (e) => {
    try{
        e.preventDefault();
        const first_name = document.getElementById('first-name').value;
        const last_name = document.getElementById('last-name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email--register').value;
        const password = document.getElementById('password--register').value;

        const respuesta = fetch('http://localhost:7575/Users/register', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ first_name, last_name, username,email, password})
            }
        )
        respuesta.then(res => {
            if(res.ok){
                alert('User created successfully');
            }
            else{
                alert('User creation failed');
            }
        })
    }
    catch (error){
        console.error(`Error: ${error}`);
    }
})






