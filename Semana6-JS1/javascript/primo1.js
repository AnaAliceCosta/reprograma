function primo(x){
    dividendo = 2 ;
    primo = true;

    while ( x > dividendo &&  primo ){
        if ((x % dividendo) == 0 ){
            primo = false;
        } 
        dividendo++;
    }
    console.log(primo);
}
