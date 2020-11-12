
 let galerija = document.querySelector('.galerija');
 let btnSh = document.querySelector('.rodyti');
 let btnMix = document.querySelector ('.maisyti');
 let nuotraukos =['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];
 let nuotraukosUL = document.querySelector ('.galerija ul');
 const path = 'img/';

 btnSh.addEventListener('click',show)
 btnMix.addEventListener('click',mix)

 function show (){
     for (i=0; i<nuotraukos.length;i++){
         let li =document.createElement('li');
         nuotraukosUL.appendChild(li);
         let imgElement =document.createElement('img');
         li.appendChild(imgElement);
         imgElement.src=path+nuotraukos[i];
         btnSh.style.display="none";

     }
     let imgElement = document.querySelectorAll('.galerija ul li img');
     for(p=0;p<imgElement.length;p++){
         imgElement[p].ondblclick =function (e){
             e.target.src = path + '6.jpg';
         }
     }
 }
 function mix(){
     nuotraukos.sort(function (){return 0.5 - Math.random()});
     console.log(nuotraukos)
     let imgE = document.querySelectorAll('.galerija img');
     for (i=0; i<nuotraukos.length; i++){
         imgE[i].src=path+nuotraukos[i];
     }
 }