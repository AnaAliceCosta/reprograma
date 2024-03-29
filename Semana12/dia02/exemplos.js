<!DOCTYPE html>
<html>

<head>
    <title>02 - Template Literal para Html Fragments</title>
</head>

<body>
    <li>es6</li>
    <li>js</li>
</body>

<script>
    const article = {
        title: 'Aprendendo Template Strings',
        intro: 'Uma breve explicação de como se utilizar template strings do ES6 em seu código hoje!',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, officia, perspiciatis? Architecto, molestias autem. Repellat, laborum deserunt soluta necessitatibus. Tenetur illo, id magnam numquam neque illum temporibus, in qui eos.',
        tags: ['es6', 'js', 'template-literal'],
        author: 'Bruna'
        
    };
    function renderAuthor(name) {
    //    if (name) {
    //        return name
    //    }
    //    else {
    //        return 'unknown'
    //    }
    //    let num = 1
    //     return (num > 1) ? 'maior' : 'menor';
    //    return (name) ? name : 'unknown'
    }

    const element = (article) => {

        return (
            ` 
        <article>
            <header>
                <h1>${article.title}</h1>
            </header>
            <section>
                <p>${article.body}</p>
            </section>
            <footer>
                <ul>
                    ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
                </ul>
                <p>Author: ${(article.author) ? article.author : 'desconhecido'}</p>
            </footer>
        </article>
    `)
    }

   document.body.innerHTML = element(article);

   function
</script>

</html>