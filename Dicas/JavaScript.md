# Folha de dicas Javascript
## Como incluir JavaScript em uma pagina HTML
```html
<script type="text/javascript">
    //seu codigo aqui
</script>'
```
## Chamar o JavaScript em um arquivo externo
```html
 <script src="script.js"></script>
```

## Comentando:


```js
para comentar uma linha - //
comentário de bloco /*coloque seu comentario aqui*/


```
# Variaveis em JavaScript
## var,let,const

var - antigamente a forma mais utilizada, ela pode ser sobrescrita. Variaveis definidas como var tem scopo global (mesmo que definida dentro de uma função).

const - Nao pode ser sobrescrita, esta variável respeita o escopo, só pode ser utilizada após declarada ou dentro da função em que foi declarada.

let - parecida com o const, porém, seu valor pode ser sobrescrito mas esta variável nao pode ser re-declarada.

# tipos de dado
## number
aceita números inteiros (sem pontos)
## strings (textos)
devem ser declaradas utilizando aspas (simples ou duplas)
```js
let variavel = "valor";
```
## float 
aceita numeros com pontos flutuantes 
```js
let variavel = 1.61803399;
```
## Resultado em variaveis
uma variavel pode receber o retorno de uma operação.
```js
let soma = 3+5;
```
## Verdadeiro ou Falso
uma variavel pode receber um valor verdadeiro ou falso

```js
let a = true;;//verdadeiro

let b = false; //falso
```
## Objetos
Contém os endereços que se referem a objetos. Você pode atribuir qualquer tipo de referência (string, int, float...)

```js
let pessoa = {
    Nome: "Ana"
    Idade:25
    altura: 1.72
    };
```
### Próximo nível: Listas (array)
## Definição:
No JavaScript você pode criar lista de conteudo, esta lista pode conter qualquer tipo de variável (é comum utilizarmos listas com o mesmo tipo para todos os elementos)
```js
var frutas = ["Pera","Uva","Maçã"];
```
## Metodos da lista
concat() - Junta mais de uma lista em uma só 
```js
let frutas1 = ["Pera", "Uva","Maçã"];
let frutas2 = ["Jaca","Abacate"];
let frutas3 = ["Abacaxi", "limao"];
let todasFrutas = frutas1.concat(frutas2,frutas3)
console.log(todasFrutas);
