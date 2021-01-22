const imagenes= document.querySelectorAll('.img-galeria')
const imagenesLight= document.querySelector('.agregar-imagen')
const contenedorLigth= document.querySelector('.imagen-light')
const inicio1= document.querySelector('.menu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLigth.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLigth.classList.toggle('show')
        imagenesLight.classList.toggle('show')
        inicio1.style.opacity= '1'
    }
})

const aparecerImagen= (imagen)=>{
    imagenesLight.src= imagen;
    contenedorLigth.classList.toggle('show')
    imagenesLight.classList.toggle('show')
    inicio1.style.opacity= '0'
}
