
 function verificar(){

    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let resultado = document.getElementById('verifica');

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Insira um ano válido')
    } else{
        let radsex = window.document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto')

            if(radsex[0].checked){
                genero = 'Homem'

                if(idade >= 0 && idade <= 7){
                    img.setAttribute('src', 'bebeMasc.png')
                } else if (idade <= 17){
                    img.setAttribute('src', 'jovemMasc.png')
                } else if (idade <= 60){
                    img.setAttribute('src', 'adultoMasc.png')
                } else if (idade > 60){
                    img.setAttribute('src', 'idosoMasc.png')
                }

            } else if(radsex[1].checked){
                genero = 'Mulher'

                if(idade >= 0 && idade <= 7){
                    img.setAttribute('src', 'bebeFem.png')
                } else if (idade <= 17){
                    img.setAttribute('src', 'jovemFem.png')
                } else if (idade <= 60){
                    img.setAttribute('src', 'adultoFem.png')
                } else if (idade > 60){
                    img.setAttribute('src', 'idosaFem.png')
                }
            }
            resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
            resultado.appendChild(img)
    }
}