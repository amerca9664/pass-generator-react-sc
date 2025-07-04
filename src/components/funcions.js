const funcShowText = ()=>{
    let listCharacters = '';
    let passOptConcat = ''
    if(chkMayusElement.checked){
        passOptConcat += passwordOptions.uppercase
    }
    if(chkLowerElement.checked){
        passOptConcat += passwordOptions.lowercase
    }
    if(chkNumbersElement.checked){
        passOptConcat += passwordOptions.numbers
    }
    if(chkSymElement.checked){
        passOptConcat += passwordOptions.symbols
    }

    for(let i = 0; i < inpRange.value; i++){
        listCharacters += passOptConcat.charAt(numeroAleatorio(passOptConcat.length-1, 0));
    }
    inpShowPass.value = listCharacters;
}