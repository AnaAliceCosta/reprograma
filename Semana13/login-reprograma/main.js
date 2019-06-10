const requisicao = (evt)=>{
    usuario = usr.value;
    senha = pass.value;
    evt.preventDefault();
    fetch('https://lais-api-reprograma.herokuapp.com/login',{
        method:'POST',
        body:JSON.stringify({
            user: usuario,
            pass: senha
        }),
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        }
    })
    .then(res=> res.json())
    .then(res=>{
        localStorage.clear();
        localStorage.setItem('token', res.token)
        window.location.href="home.html"
    })
    .catch(error=> console.log(error))
}

form = document.getElementById("login-form");
usr = document.getElementById("username");
pass= document.getElementById("password");

form.addEventListener("submit",evt =>requisicao(evt));