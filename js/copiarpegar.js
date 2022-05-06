
const elemento = document.querySelector(".frase *")

document.querySelector('#btn').addEventListener('click',()=>{

    document.querySelector('.mensaje-copy').classList.add('active');
    copyToClipBoard(elemento);

    setTimeout(()=>{
        document.querySelector('.mensaje-copy').classList.remove('active');
    },1000);
})

function copyToClipBoard(elemento){
    const inputOculto = document.createElement('input');

    inputOculto.setAttribute('value', elemento.innerText);

    document.body.appendChild(inputOculto);

    inputOculto.select();

    document.execCommand('copy');

    document.body.removeChild(inputOculto);

   
}