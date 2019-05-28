# Folha de dicas Javascript
##Como incluir JavaScript em uma pagina HTML
```html
<script type="text/javascript">
    //seu codigo aqui
</script>'
```
## Chamar o JavaScript em um arquivo externo
```html
 <script> src="script.js"</script>
```

## Comentando:


```js
para comentar uma linha - //
comentário de bloco /*coloque seu comentario aqui*/


```
# Variaveis em JavaScript
## var,let,const
var - antigamente a forma mais utilizada, ela pode ser sobrescrita. Variaveis definidas como var tem scopo global (mesmo que definida dentro de uma função).
------------------------------------------------------------------------------------------------------
const - Nao pode ser sobrescrita, esta variável respeita o escopo, só pode ser utilizada após declarada ou dentro da função em que foi declarada.
------------------------------------------------------------------------------------------------------
let - parecida com o const, porém, seu valor pode ser sobrescrito mas esta variável nao pode ser re-declarada.

# tipos de dado
## number
aceita números inteiros (sem pontos)
## strings (textos)
devem ser declaradas utilizando aspas (simples ou duplas)
```js
let variavel = "valor"
```
## float 
aceita numeros com pontos flutuantes 
```js
let variavel = 1.61803399
```
## Resultado em variaveis
uma variavel pode receber o retorno de uma operação.
```js
let soma = 3+5
```
## Verdadeiro ou Falso
uma variavel pode receber um valor verdadeiro ou falso

```js
let a = true //verdadeiro

let b = false //falso
```

