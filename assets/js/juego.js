// * 2C = Two of Clubs (Treboles) 
// * 2D = Two of Diamonds (Diamantes) 
// * 2H = Two of Hearts (Corazones) 
// * 2S = Two of Spades (Espadas) 


// Lo primero que vamos a hacer es crear la baraja de createAssignmentExpression, crear el deck


let deck=[];
let tiposCartas=["C","D","H","S"]
let figuras=["A","J","Q","K"];

for(let i=2;i<=10;i++){
    for (let tipo of tiposCartas){
        deck.push(i+tipo)
    }
}


for(figura of figuras){
    for(let tipo of tiposCartas) {
        deck.push(figura + tipo)
    }
}


console.log(deck);

deck=_.shuffle(deck);

console.log(deck);