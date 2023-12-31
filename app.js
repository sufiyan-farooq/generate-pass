



    
function generatePassword(length){
    var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var small = "abcdefghijklmnopqrstuvwxyz"
    var num = "0123456789"
    var symbol = "!@#$%^&*(){}?><>//|+=-_.;:"
    var input = document.getElementById('pass-box')
    var allCharacter = capital+small+num+symbol;
    var password = "";
    for (var i = 0 ; i < length ; i++){
         var randomNumber = Math.floor ( Math.random() * allCharacter.length )
         password += allCharacter.substring(randomNumber,randomNumber + 1)
        
    }
     input.value = password
    
    }
    
