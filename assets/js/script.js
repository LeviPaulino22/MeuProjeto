const imgsDestaque = ["./assets/img/R.png", "./assets/img/3917695.jpg", "./assets/img/drDomm.jpg"]

let imagemAtual = 1;

const imagem = document.querySelector("#imagemDestaque")

setInterval(function (){
   imagemAtual++;
   if(imagemAtual >= imgsDestaque.length){
    imagemAtual = 0;
   }

   imagem.src = imgsDestaque[imagemAtual]
}, 5000)