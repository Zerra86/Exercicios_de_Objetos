/*

O que eu tenho? - ATRIBUTOS
Que coisas eu faço? - MÉTODOS - COMPORTAMENTO
Como eu estou agora? - ESTADO - ESTATO

*/

class Player {

//definindo padrão dos atributos

    nome : string;
    vidas : number;
    invencivel: boolean;
    crush: Player;

    //criamdo método

    sinopse(){
        //definição do estdo
    console.log(`O protagonista do jogo é o ${mario.nome}, que tem como objetivo salvar a pricesa ${peach.nome},das mãos do ${donkey.nome}`)
    

    }
}

const mario = new Player();
mario.nome = "Mario";
mario.vidas = 3;
mario.invencivel = true;


const peach = new Player();
peach.nome = "peach";
peach.vidas = 3
peach.invencivel = false

mario.crush = peach



const donkey = new Player();
donkey.nome = "Donkey Kong";
donkey.vidas = 3;
donkey.invencivel = false;

mario.sinopse()

//strictPropertyInitialization - para poder rodar sem inicializar as variáveis, em casos de não utilizar explicitamente o método construtor