

function Calculo(){
    const sticker1 = parseInt(document.getElementById('sticker1').value)
    const sticker2 = parseInt(document.getElementById('sticker2').value)
    const sticker3 = parseInt(document.getElementById('sticker3').value)

    const totalStickers = (sticker1 + sticker2 + sticker3)
    const resultado = document.getElementById('resultado')

    if(totalStickers <= 10){
        resultado.textContent = `Llevas ${totalStickers} stickers.`
    }else{
        resultado.textContent = 'llevas demasiados stickers.'
    }
}