function removeVazio(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_,v]) => v != null));
}

const usuario = {
    nome: 'Aryelsson',
    sobrenome: null,
    profissao: undefined,
    idade: 20,
}

const usuarioAtualizado = removeVazio(usuario);
console.log(usuarioAtualizado);