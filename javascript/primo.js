function primo(x){
    dividendo = 1;

    while ( x >= dividendo ){
        if ((x % dividendo) == 0 ){
            return false;
        } 
        dividendo++;
    }
    return true;
}

document.write( primo(1));