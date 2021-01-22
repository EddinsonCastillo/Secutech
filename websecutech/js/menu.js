const inicio= document.querySelector('.menu');
const menu= document.querySelector('.menu-navegacion');

//  console.log(menu)
//  console.log(inicio)

//icono menu
 inicio.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
 })

 window.addEventListener('click', e=>{
   if(menu.classList.contains('spread')
      && e.target != menu && e.target != inicio){
         menu.classList.toggle("spread")
   }
})
