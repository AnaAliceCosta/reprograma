var usuarios = [
  {
    nome: 'Bruna',
    habilidades: ['Javascript', 'ReactJS', 'Redux']
  },
  {
    nome: 'Gabriela',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
  }
];


function imprimeUsuarios(){
   for(usuario of usuarios){
     console.log(`A ${usuario.nome} possui as seguintes habilidades: ${usuario.habilidades.toString()}`)
   }
}
imprimeUsuarios();