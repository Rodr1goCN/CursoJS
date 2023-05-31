function recursiva(max){

    if (max >= 20) return;
    max++
    console.log(max) //se quiser ver o zero, coloca na linha 2
    recursiva(max)
}

recursiva(00);