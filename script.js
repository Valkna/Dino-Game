const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")


function jump(){
    if(dispatchEvent.classList!="jump") //primeiro verifica se o dino está no meio do salto. Se não, faz saltar.
    {
       dino.classList.add("jump");

        setTimeout (function(){
            dino.classList.remove("jump"); //remove a class de salto do dino para que ele possa saltar novamente
        },300)
    }
}

let checkAlive = setInterval(function(){
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")); //retorna os valores de todas as propriedades CSS de um elemento

    //colisão e mensagem de erro
    if(cactusLeft>0 && cactusLeft<70 && dinoTop>=143){ //dimensões dos elementos que geram a colisão entre o dino e o cactus
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert("HEY VOCÊ MORREU! :("); //mensagem
        window.location.reload(); //recarrega a page
    }
},10);

document.addEventListener("keydown", function(event){
    jump();
})