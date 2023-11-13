/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/aula059-namespaces.ts" />

console.log(MeuNamespace.nomeDoNamespace);

// Só funciona no javascript,pois esta buscando de outro lugar
// Para compilar para Javascript, usa no terminal o comando: npx tsc index.ts --outfile index.js   (Só funciona se o caminho estiver na pasta certa)
console.log(constDoNamespace);
