let pronoun = ['el', 'nuestro'];
let adj = ['malvado', 'bonito', 'inservible'];
let noun = ['pulpo', 'calcetin', 'geek', 'ordenador'];
let dom = ['.com', '.es'];

for (let p = 0;  p < pronoun.length; p++) {
   for (let a = 0; a < adj.length; a++){
    for (let n = 0; n < noun.length; n++){
        for (let d = 0; d< dom.length; d++ ){
console.log(pronoun[p] + adj[a]+ noun[n] + dom[d]);
        }
    }
   }
}
   


 
