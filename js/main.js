const icono_img_anterior = document.querySelector('.main_icono_img_anterior');
const icono_img_siguiente = document.querySelector('.main_icono_img_siguiente');
const img1 = document.querySelector('.main_img1_mostrar');
const img2 = document.querySelector('.main_img2_ocultar');
const img3 = document.querySelector('.main_img3_ocultar');
const img4 = document.querySelector('.main_img4_ocultar');
const img5 = document.querySelector('.main_img5_ocultar');
const pt1 = document.querySelector('.main_punto1');
const pt2 = document.querySelector('.main_punto2');
const pt3 = document.querySelector('.main_punto3');
const pt4 = document.querySelector('.main_punto4');
const pt5 = document.querySelector('.main_punto5');

let numImg_Siguiente = parseInt(1);

pt1.addEventListener('click', () =>{
   numImg_Siguiente = 1

   if (numImg_Siguiente == 1){
      img1.removeAttribute('class','main_img1_ocultar')
      img1.setAttribute('class','main_img1_mostrar')
      img2.removeAttribute('class','main_img2_mostrar')
      img2.setAttribute('class','main_img2_ocultar')
      img3.removeAttribute('class','main_img3_mostrar')
      img3.setAttribute('class','main_img3_ocultar')
      img4.removeAttribute('class','main_img4_mostrar')
      img4.setAttribute('class','main_img4_ocultar')
      img5.removeAttribute('class','main_img5_mostrar')
      img5.setAttribute('class','main_img5_ocultar')
   
      pt1.removeAttribute('id', 'ocultar');
      pt1.setAttribute('id','mostrar');
      pt2.removeAttribute('id', 'mostrar');
      pt2.setAttribute('id', 'ocultar');
      pt3.removeAttribute('id', 'mostrar');
      pt3.setAttribute('id','ocultar');
      pt4.removeAttribute('id', 'mostrar');
      pt4.setAttribute('id','ocultar');
      pt5.removeAttribute('id', 'mostrar');
      pt5.setAttribute('id','ocultar');
   }

});

pt2.addEventListener('click', () =>{
   numImg_Siguiente = 2

   if (numImg_Siguiente == 2){
      img1.removeAttribute('class','main_img1_mostrar')
      img1.setAttribute('class','main_img1_ocultar')
      img2.removeAttribute('class','main_img2_ocultar')
      img2.setAttribute('class','main_img2_mostrar')
      img3.removeAttribute('class','main_img3_mostrar')
      img3.setAttribute('class','main_img3_ocultar')
      img4.removeAttribute('class','main_img4_mostrar')
      img4.setAttribute('class','main_img4_ocultar')
      img5.removeAttribute('class','main_img5_mostrar')
      img5.setAttribute('class','main_img5_ocultar')
   
      pt1.removeAttribute('id', 'mostrar');
      pt1.setAttribute('id','ocultar');
      pt2.removeAttribute('id', 'ocultar');
      pt2.setAttribute('id', 'mostrar');
      pt3.removeAttribute('id', 'mostrar');
      pt3.setAttribute('id','ocultar');
      pt4.removeAttribute('id', 'mostrar');
      pt4.setAttribute('id','ocultar');
      pt5.removeAttribute('id', 'mostrar');
      pt5.setAttribute('id','ocultar');
   }

});

pt3.addEventListener('click', () =>{
   numImg_Siguiente = 3

   if (numImg_Siguiente == 3){
      img1.removeAttribute('class','main_img1_mostrar')
      img1.setAttribute('class','main_img1_ocultar')
      img2.removeAttribute('class','main_img2_mostrar')
      img2.setAttribute('class','main_img2_ocultar')
      img3.removeAttribute('class','main_img3_ocultar')
      img3.setAttribute('class','main_img3_mostrar')
      img4.removeAttribute('class','main_img4_mostrar')
      img4.setAttribute('class','main_img4_ocultar')
      img5.removeAttribute('class','main_img5_mostrar')
      img5.setAttribute('class','main_img5_ocultar')
   
      pt1.removeAttribute('id', 'mostrar');
      pt1.setAttribute('id','ocultar');
      pt2.removeAttribute('id', 'mostrar');
      pt2.setAttribute('id', 'ocultar');
      pt3.removeAttribute('id', 'ocultar');
      pt3.setAttribute('id','mostrar');
      pt4.removeAttribute('id', 'mostrar');
      pt4.setAttribute('id','ocultar');
      pt5.removeAttribute('id', 'mostrar');
      pt5.setAttribute('id','ocultar');
   }

});

pt4.addEventListener('click', () =>{
      numImg_Siguiente = 4
   
      if (numImg_Siguiente == 4){
         img1.removeAttribute('class','main_img1_mostrar')
         img1.setAttribute('class','main_img1_ocultar')
         img2.removeAttribute('class','main_img2_mostrar')
         img2.setAttribute('class','main_img2_ocultar')
         img3.removeAttribute('class','main_img3_mostrar')
         img3.setAttribute('class','main_img3_ocultar')
         img4.removeAttribute('class','main_img4_ocultar')
         img4.setAttribute('class','main_img4_mostrar')
         img5.removeAttribute('class','main_img5_mostrar')
         img5.setAttribute('class','main_img5_ocultar')
      
         pt1.removeAttribute('id', 'mostrar');
         pt1.setAttribute('id','ocultar');
         pt2.removeAttribute('id', 'mostrar');
         pt2.setAttribute('id', 'ocultar');
         pt3.removeAttribute('id', 'mostrar');
         pt3.setAttribute('id','ocultar');
         pt4.removeAttribute('id', 'ocultar');
         pt4.setAttribute('id','mostrar');
         pt5.removeAttribute('id', 'mostrar');
         pt5.setAttribute('id','ocultar');
      }
   
   });

pt5.addEventListener('click', () =>{
   numImg_Siguiente = 5

   if (numImg_Siguiente == 5){
      img1.removeAttribute('class','main_img1_mostrar')
      img1.setAttribute('class','main_img1_ocultar')
      img2.removeAttribute('class','main_img2_mostrar')
      img2.setAttribute('class','main_img2_ocultar')
      img3.removeAttribute('class','main_img3_mostrar')
      img3.setAttribute('class','main_img3_ocultar')
      img4.removeAttribute('class','main_img4_mostrar')
      img4.setAttribute('class','main_img4_ocultar')
      img5.removeAttribute('class','main_img5_ocultar')
      img5.setAttribute('class','main_img5_mostrar')
   
      pt1.removeAttribute('id', 'mostrar');
      pt1.setAttribute('id','ocultar');
      pt2.removeAttribute('id', 'mostrar');
      pt2.setAttribute('id', 'ocultar');
      pt3.removeAttribute('id', 'mostrar');
      pt3.setAttribute('id','ocultar');
      pt4.removeAttribute('id', 'mostrar');
      pt4.setAttribute('id','ocultar');
      pt5.removeAttribute('id', 'ocultar');
      pt5.setAttribute('id','mostrar');
   }

});

icono_img_siguiente.addEventListener('click',() => {
   numImg_Siguiente++

   if (numImg_Siguiente == 2){
      img1.removeAttribute('class','main_img1_mostrar')
      img1.setAttribute('class','main_img1_ocultar')
      img2.removeAttribute('class','main_img2_ocultar')
      img2.setAttribute('class','main_img2_mostrar')
   
      pt1.removeAttribute('id', 'mostrar');
      pt1.setAttribute('id','ocultar');
      pt2.removeAttribute('id', 'ocultar');
      pt2.setAttribute('id', 'mostrar');
   }

   if (numImg_Siguiente == 3){
      img2.removeAttribute('class','main_img2_mostrar')
      img2.setAttribute('class','main_img2_ocultar')
      img3.removeAttribute('class','main_img3_ocultar')
      img3.setAttribute('class','main_img3_mostrar')

      pt2.removeAttribute('id', 'mostrar');
      pt2.setAttribute('id','ocultar');
      pt3.removeAttribute('id', 'ocultar');
      pt3.setAttribute('id', 'mostrar');
   }

   if (numImg_Siguiente == 4){
      img3.removeAttribute('class','main_img3_mostrar')
      img3.setAttribute('class','main_img3_ocultar')
      img4.removeAttribute('class','main_img4_ocultar')
      img4.setAttribute('class','main_img4_mostrar')

      pt3.removeAttribute('id', 'mostrar');
      pt3.setAttribute('id','ocultar');
      pt4.removeAttribute('id', 'ocultar');
      pt4.setAttribute('id', 'mostrar');
   }

   if (numImg_Siguiente == 5){
      img4.removeAttribute('class','main_img4_mostrar')
      img4.setAttribute('class','main_img4_ocultar')
      img5.removeAttribute('class','main_img5_ocultar')
      img5.setAttribute('class','main_img5_mostrar')

      pt4.removeAttribute('id', 'mostrar');
      pt4.setAttribute('id','ocultar');
      pt5.removeAttribute('id', 'ocultar');
      pt5.setAttribute('id', 'mostrar');
   }

   if (numImg_Siguiente > 5) {
      numImg_Siguiente--
   }
});

icono_img_anterior.addEventListener('click',() => {
   numImg_Siguiente--

   if (numImg_Siguiente == 4){
      img5.removeAttribute('class','main_img5_mostrar')
      img5.setAttribute('class','main_img5_ocultar')
      img4.removeAttribute('class','main_img4_ocultar')
      img4.setAttribute('class','main_img4_mostrar')

      pt5.removeAttribute('id', 'mostrar');
      pt5.setAttribute('id','ocultar');
      pt4.removeAttribute('id', 'ocultar');
      pt4.setAttribute('id', 'mostrar');
   }

   if (numImg_Siguiente == 3){
      img4.removeAttribute('class','main_img4_mostrar')
      img4.setAttribute('class','main_img4_ocultar')
      img3.removeAttribute('class','main_img3_ocultar')
      img3.setAttribute('class','main_img3_mostrar')

      pt4.removeAttribute('id', 'mostrar');
      pt4.setAttribute('id','ocultar');
      pt3.removeAttribute('id', 'ocultar');
      pt3.setAttribute('id', 'mostrar');
   }

   if (numImg_Siguiente == 2){
      img3.removeAttribute('class','main_img3_mostrar')
      img3.setAttribute('class','main_img3_ocultar')
      img2.removeAttribute('class','main_img2_ocultar')
      img2.setAttribute('class','main_img2_mostrar')

      pt3.removeAttribute('id', 'mostrar');
      pt3.setAttribute('id','ocultar');
      pt2.removeAttribute('id', 'ocultar');
      pt2.setAttribute('id', 'mostrar');
   }

   if (numImg_Siguiente == 1){
      img2.removeAttribute('class','main_img2_mostrar')
      img2.setAttribute('class','main_img2_ocultar')
      img1.removeAttribute('class','main_img1_ocultar')
      img1.setAttribute('class','main_img1_mostrar')

      pt2.removeAttribute('id', 'mostrar');
      pt2.setAttribute('id','ocultar');
      pt1.removeAttribute('id', 'ocultar');
      pt1.setAttribute('id', 'mostrar');
   }

   if (numImg_Siguiente < 1) {
      numImg_Siguiente++
   }
});



