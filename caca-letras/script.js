const letraEmNome = ((letra, nome) => {
    let cont = 0;

   for(let i in nome) {
    if (letra === nome[i]) {
        cont++;
    }
   }
   console.log(letra === 1 ? `Essa letra aparece um total de: ${cont} vez` : `Essa letra aparece um total de: ${cont} vezes`);
});
letraEmNome('s', 'Aryelsson');