
class HeroiJornada {
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    arma(){
        let ataque;
        if(this.tipo == "Mago"){
            ataque = "Magia";
        } else if (this.tipo == "Ninja"){
            ataque = "Shurikin"
        } else if (this.tipo == "Guerreiro"){
            ataque = "Espada"
        } else if (this.tipo == "Monge"){
            ataque = "Artes marciais"
        }
        return ataque
    }


    atacar(){
        console.log(`O heroi ${this.nome} que é um ${this.tipo} atacou usando ${this.arma()} `)
    }
}

let reiMago = new HeroiJornada("Asta", 18, "Mago")
let hokague = new HeroiJornada("Naruto", 30, "Ninja")
let shinegami = new HeroiJornada("Ichigo", 30, "Guerreiro")
let heroiPorHobie = new HeroiJornada("Garou", 30, "Monge")

reiMago.atacar();
hokague.atacar();
shinegami.atacar();
heroiPorHobie.atacar();