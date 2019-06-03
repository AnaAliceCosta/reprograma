const createCard = (figura)=>{
    return (
    `
    <div class="box">
    <img src="${figura.imagem}" alt="" class="image fit" />
    <div class="inner">
        <h3>${figura.titulo}</h3>
        <p>${figura.descricao}
        </p>
        <a href="${figura.url}" class="button fit" data-poptrox="youtube,800x400">Watch</a>
    </div>
    </div>
    `
    )
}