class cliente {
    name: string
    age : number
    saude: boolean
    
    sinopse(){
        console.log(`Seja bem vindo ${bernardo.name}, ${bernardo.age} anos de saúde`);


        
    }
}

const bernardo = new cliente();
bernardo.name = "bernardo";
bernardo.age = 21;
bernardo.saude = false;

bernardo.sinopse();

