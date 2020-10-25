



// let timer
// function mostrarImg() {
//     timer = setInterval(exibirHora, 9000)

//     if(timer == 9000 ){
//         document.getElementById('mostrarImgPost').classList.add('imgDog')

//         document.


function limpar() {
    document.getElementById('imgPost')
    .classList.remove('imgDog')
    document.getElementById('imgPost')
    .classList.remove('imgMar')
    document.getElementById('imgPost')
    .classList.remove('imgTech')
    document.getElementById('receberComents').innerHTML = ''
}

function pets() {
    limpar()
    document.getElementById('imgPost').classList.add('imgDog')
}

function natureza() {
    limpar()
    document.getElementById('imgPost').classList.add('imgMar')
}

function tecnologia() {
    limpar()
    document.getElementById('imgPost').classList.add('imgTech')
}




let post = []
let resultado
function postar() {

    let comentario = document.getElementById('texto').value

    post.push(comentario)

    for( let contador in post){
        resultado = document.getElementById('receberComents').innerHTML += post[contador]  + '<br>'
        post.pop()
    }
}






