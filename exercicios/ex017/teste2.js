(function(){
    let random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    console.log(random(5, 10));


})();

(function(){
 let random = (min, max) => Math.floor(Math.random() * (max - min) + min);
 let nomes = ['maria','jose','carla','luiz','tonia']
 console.log(nomes[random(0, nomes.length)])
})();
