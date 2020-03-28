
function carregar(){
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem')
   var msgdia = document.getElementById('msgdia')
   var fundo = document.getElementById('fundo')
   var bigHora = document.getElementsByTagName('h1')[1]
   var firstData = document.getElementsByTagName('h1')[0]

   var data = new Date()
   var hora = data.getHours()
   var minutos = data.getMinutes()
   var segundos = data.getSeconds()
   var dia = data.getDate()
   var mes = data.getMonth()
   var ano = data.getFullYear()
  

   firstData.innerHTML = ` ${dia} de ${mes} de ${ano}`

   switch (mes){
     case 0:
        msg.innerHTML = ` ${dia} de Janeiro de ${ano}` 
        break
     case 1:
        msg.innerHTML = ` ${dia} de Fevereiro de ${ano}` 
        break   
     case 2:
        firstData.innerHTML = ` ${dia} de Março de ${ano}` 
        break
     case 3:
        msg.innerHTML = `${dia} de Abril de ${ano}` 
        break   
     case 4:
        msg.innerHTML = `${dia} de Maio de ${ano}` 
        break
     case 5:
        msg.innerHTML = `${dia} de Junho de ${ano}` 
        break   
     case 6:
        msg.innerHTML = `${dia} de Julho de ${ano}` 
        break
     case 7:
        msg.innerHTML = `${dia} de Agosto de ${ano}` 
        break   
     case 8:
        msg.innerHTML = `${dia} de Setembro de ${ano}` 
        break
     case 9:
         msg.innerHTML = `${dia} de Outubro de ${ano}` 
        break   
     case 10:
        msg.innerHTML = `${dia} de Novembro de ${ano}` 
        break
     case 11:
         msg.innerHTML = `${dia} de Dezembro de ${ano}` 
        break   
}
    

   if (hora >= 00 && hora < 12){
        //BOM DIA
        img.src = "manha.png";
        fundo.src = "fundomanha.jpg"
        bigHora.innerHTML = `${hora}:${minutos}`
        msg.innerHTML = 'Bom dia'

        
   }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.png'
        fundo.src = "fundotarde.jpg"
        bigHora.innerHTML = `${hora}:${minutos}`
        msg.innerHTML = 'Boa Tarde'
        

   }else{
       //BOA NOITE
        img.src = 'noite.png'
        fundo.src = "fundonoite.jpg"
        bigHora.innerHTML = `${hora}:${minutos}`
        msg.innerHTML = 'Boa Noite'
        

   }
}