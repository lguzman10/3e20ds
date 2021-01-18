let anillos = 15;

function torresHanoi(n, o, d, aux){
    if (n > 0)
    {
        torresHanoi(n-1, o, aux, d);
        console.log("El anillo se mueve desde la torre: " + o + " hasta la torre " + d);
        torresHanoi(n-1, aux, d, o);
    }
}

torresHanoi(anillos, 1, 3, 2);