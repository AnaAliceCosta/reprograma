class Biblioteca{
    constructor(livros){
        this.livros = livros;
    }
    get quantidade() {
        return this.livros.length;
    }


    criaTabela(listaLivros,titulo){
        return (`<table>
            ${this.criaCabecalho(titulo)}
            ${this.criaCorpo(listaLivros)}

        </table>`)

    }
    criaCabecalho(titulo){
        return (
`       <thead>
            <tr>
                <th>
                   ${titulo}
                </th>
            </tr>
        </thead>`
        )

    }

    criaCorpo(listaLivros){
        return listaLivros.map((livro)=>{
            return(
                `<tbody>
                <tr>
                    <td>
                    ${livro}
                    </td>
                </tr>
            </tbody>`
            )

        })
    }
    ordenaPorAutor(){
       return this.criaTabela(this.livros.map(livro=>livro.autor).sort(),'Autor')
    }
    ordenaPorTitulo(){
        return this.criaTabela(this.livros.map(livro=>livro.livro).sort(),'Titulo')
     }
     ordenaPorGenero(){
        return this.criaTabela(this.livros.map(livro=>livro.genero).sort(),'Gênero')
     }


}