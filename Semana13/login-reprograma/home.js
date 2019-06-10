fetch('https://randomuser.me/api/')
.then(res =>res.json())
.then(res=>{
    console.log(res.results[0])
})


const testarAppi = ()=>{
    fetch("https://lais-api-reprograma.herokuapp.com/resource",{
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res=>res.json())
    .then(res => console.log(res))
    .catch(erro => console.log('erro'))
}

const signOut = ()=>{
    localStorage.clear();
    window.location.href = 'index.html'
}

if (!localStorage.getItem('token')){
    window.location.href = 'index.html'
}