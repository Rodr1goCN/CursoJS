function teste(){
    console.log('Testando o teste')
}
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste(); //chamando a função teste()
    }
    //Método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    //Método de instância
    diminuirVolume(){
        this.volume -= 2;
    }
    //Método estático (não tem acesso aos dados da instância)
    static trocaPilha(){
        console.log('OK, trocando agora');
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
ControleRemoto.trocaPilha(); //Só vai conseguir acessar o troca pilha usando o ControleRemoto.trocaPilha()
console.log(controle1);