class produtoEletronico {
    name: string
    litros : number
    nova: boolean
    
    sinopse(){
        console.log(`Sua nova geladeira ${geladeira.name},Frost Free ${geladeira.litros} Litros, a venda na Generation Eletro!`);


        
    }
}

const geladeira = new produtoEletronico();
geladeira.name = "Brastemp";
geladeira.litros = 375;
geladeira.nova = false;

geladeira.sinopse();

