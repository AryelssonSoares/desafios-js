let pessoas = [
    {eu: false, adm: false, nome: 'Nicolly'},
    {eu: false, adm: true, nome: 'Kleiton'},
    {eu: false, adm: false, nome: 'Sasuke'},
    {eu: true, adm: true, nome: 'Leonardo'},
    {eu: false, adm: true, nome: 'Jucelino'},
]

const organizar = (listaPessoas => {
    listaPessoas.sort((a, b) => {
        if (a.eu === true && b.eu === false) {
            return -1;
        }
    });
    console.log(listaPessoas);

    listaPessoas.sort((a, b) => {
        if (a.adm === true && b.adm === false) {
            return -1;
        }
    });
    console.log(listaPessoas);
});
organizar(pessoas);