
//Solicitar un ENTERO entre el 100 y 200 y determina si es multiplo de 3   (con residuo)
const option = prompt('Elija una opción: \n 1) Múltiplo de 3    2) Uno es la suma de otros dos     3) Par o impar?')
switch (option) {
    case null:
        break;
    case '1':
        multiploDeTres();
        break;
    case '2':
        sumaDeOtrosDos();
        break;
    case '3':
        parOImpar();
        break;
    case '4':
        cualEsMayor();
        break;
    case '5':
        cualEsMenor();
    default:
        alert('Elija una opción válida');
        window.location.reload()
        break;
}


//Ingresa dos numeros (entre 1 y 100) y definir cual es mayor

function multiploDeTres(){
    const numberField = parseFloat(prompt('Ingrese un número entre 100 y 200'));
    if(!isValid(numberField)) return;
    if(!isIntegerAndRange(numberField)) return;
    const mensaje = numberField % 3 === 0 ? 'El número ' + numberField + ' es múltiplo de 3' : 'El número ' + numberField + ' no es múltiplo de 3'
    alert(mensaje);
}

//Ingresa 3 numeros (entre 1 y 100) y definir cual es menor

function cualEsMenor(){

const primero = parseInt(prompt('Ingrese el primer numero'), 10)

const segundo = prompt('Ingrese el segundo numero')

const tercero = prompt('Ingrese el tercer numero')

let message;
if(primero < segundo){
    if(primero < tercero){
        alert('El primer numero es el menor de todos')
    } else{
        alert('El tercer numero es el menor de todos')
    }
} else {
    if(segundo < tercero){
        alert('El segundo numero es el menor de todos')
    } else{
        alert('El tercer numero es el menor de todos')
    }
}

}


//Elaborar un algoritmo para leer 3 numeros y determinar si uno es la suma de los otros dos

function sumaDeOtrosDos(){
    const firstNumber = parseFloat(prompt('Ingrese un número'));
    if(!isValid(firstNumber)) return;
    
    const secondNumber = parseFloat(prompt('Ingrese un número'));
    if(!isValid(secondNumber)) return;
    
    const thirdNumber = parseFloat(prompt('Ingrese un número'));
    if(!isValid(thirdNumber)) return;

    if( firstNumber == 0 && secondNumber == 0 && thirdNumber == 0 ){
        return alert('Todos los números son 0 y cada uno es la suma de los otros dos');
    }else if( firstNumber == secondNumber + thirdNumber ){
        return alert(`El número ${firstNumber} es la suma de ${secondNumber} y ${thirdNumber}`);      
    }else if ( secondNumber == firstNumber + thirdNumber ){
        return alert(`El número ${secondNumber} es la suma de ${firstNumber} y ${thirdNumber}`);     
    }else if ( thirdNumber == firstNumber + secondNumber ){
        return alert(`El número ${thirdNumber} es la suma de ${firstNumber} y ${secondNumber}`);       
    }else{
        return alert('Ningun número es la suma de otros dos')
    }
}


//Elaborar un algoritmo para leer un numero y determinar si es par o impar    (validar decimal)

function parOImpar(){
    const numberField = parseFloat(prompt('Ingrese un número'));
    if(!isValid(numberField)) return;
    if(numberField == 0){
        alert('El numero es indeterminado');
        return
    }
    const mensaje = numberField % 2 == 0 ? 'El número ' + numberField + ' es par' : 'El número ' + numberField + ' no es par';
    alert(mensaje);
}





function isValid(value){
    if(isNaN(value)){
        alert('Ingrese un número válido');
        window.location.reload();
    } else{
        return true;
    }
}

function isIntegerAndRange(value){
    let isValidate = false;
    if( value % 1 != 0 ){
        alert('Ingrese un número ENTERO');
        !isValidate;
    } 
    if( value < 100 || value > 200 ){
        alert('Ingrese un número entre 100 y 200');
        isValidate || !isValidate;
    }
     isValidate ? true : window.location.reload()
}