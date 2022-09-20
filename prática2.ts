class aviao {
    name: string
    age : number
    apto: boolean
    
    sinopse(){
        console.log(`Aeroclassic ${fusca.name},a ${fusca.age} anos preparado para todas as estradas aéreas!`);
    }
}

const fusca = new aviao();
fusca.name = "Fuscão preto";
fusca.age = 21;
fusca.apto = false;

fusca.sinopse();

