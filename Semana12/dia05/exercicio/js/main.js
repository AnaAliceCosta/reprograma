let fotografias = [
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic01.jpg',
        titulo: 'Skate',
        descricao: 'Interdum amet accumsan placerat ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic02.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic03.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic04.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic05.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://youtu.be/s6zR2T9vn2c',
        imagem: 'images/pic06.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },

]
document.querySelector(".search").innerHTML=createNavbar();
const btnPesquisar = document.getElementById("pesquisa");
const listaCards = document.querySelector(".thumbnails");
let itemPesquisado =document.querySelector(".input__search");
let valorPesquisado;
listaCards.innerHTML += fotografias.map(createCard).join("")



const filtrarImagem = (figura)=>{
    if(figura.titulo.toUpperCase().includes(valorPesquisado.toUpperCase()) || figura.descricao.toUpperCase().includes(valorPesquisado.toUpperCase())){
        return createCard(figura);
    }
}
const filtra = ()=>{
    valorPesquisado = itemPesquisado.value;
    listaCards.innerHTML="";
    listaCards.innerHTML += fotografias.filter(filtrarImagem).map(createCard).join("")  ;

}

btnPesquisar.addEventListener("click",filtra);
document.addEventListener('keypress',(event)=>{
    if(event.keyCode==13) filtra();
})

itemPesquisado.addEventListener('onchange',()=>{
    if (itemPesquisado.value=""){
        listaCards.innerHTML += fotografias.map(createCard).join("");
    }
});

