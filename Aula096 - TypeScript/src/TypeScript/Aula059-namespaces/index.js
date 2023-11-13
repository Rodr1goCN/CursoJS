/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Rodrigo';
    // export para usar o PessoaDoNamespace fora do escopo
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoa = new PessoaDoNamespace('Rodrigo');
    console.log(pessoa);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Nome do outro namespace';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Rodrigo');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/aula059-namespaces.ts" />
console.log(MeuNamespace.nomeDoNamespace);
