biblioteca = new Biblioteca(autores.livros);
document.getElementById('quantidade_livos').innerHTML= biblioteca.quantidade;


document.getElementById('autor').addEventListener('click',()=>{
    document.getElementById('items').innerHTML = biblioteca.ordenaPorAutor();
})
document.getElementById('titulo').addEventListener('click',()=>{
    document.getElementById('items').innerHTML = biblioteca.ordenaPorTitulo();
})
document.getElementById('genero').addEventListener('click',()=>{
    document.getElementById('items').innerHTML = biblioteca.ordenaPorGenero();
})