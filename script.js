function copy(text){
    text = buscar();
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
function toUpperCase(text){
    text = buscar();

    text.style.textTransform = 'uppercase';
}
function toLowerCase(text){
    text = buscar();

    text.style.textTransform = 'lowercase';
}
function capitalized(text){
    text = buscar();

    text.style.textTransform = 'capitalize';
}

function setColorWell(text){
    text = buscar();
    var colorWell = document.getElementById('colorWell').value;

    text.style.color = colorWell;
    
}
function deleted(text){
    text = buscar().value  = '';
}

function buscar(){
    const text = document.getElementById('text');
    return text;
}