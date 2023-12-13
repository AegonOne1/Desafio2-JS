function borderImage(){
    let bgImage = document.getElementById('changingBorder')
    const change = bgImage.classList.contains('border')
    if (bgImage.classList.contains('change')){
        bgImage.classList.remove('change')
    } else{
        bgImage.classList.add('change')
    }
}
//si el ID de la imagen contiene la clase 'change', quitale el change o agregale el change.