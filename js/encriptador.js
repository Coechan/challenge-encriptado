
let text = document.getElementById("textinput");
let buttonEncrypt = document.getElementById("encrypt");
let buttonDecrypt = document.getElementById("decrypt");
let mesaje = document.getElementById("mesaje");
let help = document.getElementById("help");
let girl = document.getElementById("girl");
let scrollBox =document.getElementById("scrollBox");
let copyButton = document.getElementById("copyButton");
let result = "";
const characters = [
    ";","`","~","!","@","#","$","%","^","&","8","(",")","-","_","=","+","[","{","]","}","\\", "|",":", ";" ,"'", "\"","<",",",".",">","?","/","á","é","í","ó","ú"
]

function decryptText(event){
    let encryptString = text.value.toLowerCase();

    if(encryptString.includes("enter")){
        encryptString = encryptString.replaceAll("enter" , "e");
    } 
  
    if (encryptString.includes("imes")) {
        encryptString = encryptString.replaceAll("imes" , "i");
    }

    if (encryptString.includes("ai")) {
        encryptString = encryptString.replaceAll("ai" , "a");
    }

    if (encryptString.includes("ober")) {
        encryptString = encryptString.replaceAll("ober" , "o");
    }

    if (encryptString.includes("ufat")) {
        encryptString = encryptString.replaceAll("ufat" , "u");
    }
    result = encryptString;
    remove()
}

function encryptText (event){
    let oldString = text.value.toLowerCase();
    let newString = " ";
    if(text.value.includes("e")){
        newString = oldString.replaceAll("e" , "enter");
    } 
    else {
        newString = oldString;
    }

    if (newString.includes("i")) {
        newString = newString.replaceAll("i" , "imes");
    }

    if (newString.includes("a")) {
        newString = newString.replaceAll("a" , "ai");
    }

    if (newString.includes("o")) {
        newString = newString.replaceAll("o" , "ober");
    }

    if (newString.includes("u")) {
        newString = newString.replaceAll("u" , "ufat");
    }

    result = newString;

    remove()
}

// funcion para esconder la imagen y el texto y mostrar el boton y el resultado de la incriptacion y desencriptacion
function remove(){
    if (text.value !== " "){
        mesaje.innerHTML = result;
        help.innerHTML = " ";
        girl.hidden = true;
        copyButton.hidden = false;
    } 
    if (text.value == "") {
        mesaje.innerHTML = "Ningun mensaje fue encontrado";
        help.innerHTML = "Ingresa el texto que quieres encriptar o desencriptar";
        girl.hidden = false;
        copyButton.hidden = true;

    }
}

//funcion para esconder el boton de copiar
function show(){
    if (text.value == ""){
        copyButton.hidden = true;
    }
}

//funcion para copiar texto con boton de copiar
function copyAll(){
    let copyString = result;
     navigator.clipboard
    .writeText(copyString)  
}

function keyPressText(event) {
    for (let i=0 ; i < characters.length ; i++){
        if (event.key == characters[i]){
                event.preventDefault()
        }
    }
}

// text.value = "";
show()

copyButton.onclick = copyAll;
buttonEncrypt.onclick = encryptText;
buttonDecrypt.onclick = decryptText;
text.onkeydown = keyPressText






// Las "llaves" de encriptación que utilizaremos son las siguientes:

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

// **Requisitos:**
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

// Por ejemplo:
// `"gato" => "gaitober"`
// `gaitober" => "gato"`

// - La página debe tener campos para 
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// - El resultado debe ser mostrado en la pantalla.

// **Extras:**
// - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del `ctrl+C` o de la opción "copiar" del menú de las aplicaciones.
