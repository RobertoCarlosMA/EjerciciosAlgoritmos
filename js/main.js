
run();

function run(){
    const option = prompt('Elige una opción: \n 1) Ingresar dos números (entre 1 y 100) diferentes y obtenga el mayor \n 2) Ingresar tres números (entre 1 y 100) diferentes y obtenga el menor \n 3) Ingresar un número entero (entre 100 y 200) y obtiene si es múltiplo de 3 \n 4) Ingresar tres números y obtiene si uno es la suma de los otros dos \n 5) Ingresar un número y obtenga si es par o impar')
    switch (option) {
        case null:
            if(confirm('¿Está seguro que desea salir del programa?')) return;
            break;
        case '1':
            cualEsMayor();
            break;
        case '2':
            cualEsMenor();
            break;
        case '3':
            multiploDeTres();
            break;
        case '4':
            sumaDeOtrosDos();
            break;
        case '5':
            parOImpar();
            break;
        default:
            alert('Elige una opción válida');
            window.location.reload();
            return;
    }
    confirm('¿Volver al menú?') ? run() : null;
}


function cualEsMayor(){
    const firstNumber = parseFloat(prompt('Ingrese un número entre 1 y 100'));
    if(!isValid(firstNumber)) return;
    if(!isBetweenInRange(firstNumber, 1, 100)) return;
    const secondNumber = parseFloat(prompt('Ingrese otro número entre 1 y 100 \nNota: Debe ser diferente al anterior'))
    if(!isValid(firstNumber)) return;
    if(!isBetweenInRange(secondNumber, 1, 100)) return;
    if(!isSame(firstNumber, secondNumber)) return;
    let mensaje = firstNumber > secondNumber ? `El número ${firstNumber} es mayor que ${secondNumber}` : `El número ${secondNumber} es mayor que ${firstNumber}`
    alert(mensaje)
}


function cualEsMenor(){
    const firstNumber = parseInt(prompt('Ingrese un número entre 1 y 100'))
    if(!isValid(firstNumber)) return;
    if(!isBetweenInRange(firstNumber, 1, 100)) return;
    const secondNumber = prompt('Ingrese otro número entre 1 y 100 \nNota: Debe ser diferente al anterior');
    if(!isValid(secondNumber)) return;
    if(!isBetweenInRange(secondNumber, 1, 100)) return;
    if(!isSame(firstNumber, secondNumber)) return;
    const thirdNumber = prompt('Ingrese otro número entre 1 y 100 \nNota: Debe ser diferente al anterior');
    if(!isValid(thirdNumber)) return;
    if(!isBetweenInRange(thirdNumber, 1, 100)) return;
    if(!isSame(firstNumber, secondNumber, thirdNumber)) return;
    let mensaje = firstNumber < secondNumber ?
        firstNumber < thirdNumber ? 'El número ' + firstNumber : 'El número ' + thirdNumber :
        secondNumber < thirdNumber ? 'El número ' + secondNumber : 'El número ' + thirdNumber;
    alert(mensaje + ' es el menor de todos');
    window.location.reload();
}


function multiploDeTres(){
    const numberField = parseFloat(prompt('Ingrese un número entre 100 y 200'));
    if(!isValid(numberField)) return;
    if(!isInteger(numberField)) return;
    if(!isBetweenInRange(numberField, 100, 200)) return;
    const mensaje = numberField % 3 === 0 ? 'El número ' + numberField + ' es múltiplo de 3' : 'El número ' + numberField + ' no es múltiplo de 3'
    alert(mensaje);
}


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


function parOImpar(){
    const numberField = parseFloat(prompt('Ingrese un número'));
    if(!isValid(numberField)) return;
    if(numberField == 0){
        alert('El número 0 es indeterminado');
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

function isInteger(value){
    if( value % 1 != 0 ){
        alert('Ingrese un número entero');
        window.location.reload();
    } else{
        return true;
    }
}

function isBetweenInRange(value, min, max){
    if( value < min || value > max ){
        alert('Ingrese un número entre ' + min + ' y ' + max);
        window.location.reload()
    } else{
        return true
    }
}

function isSame(num1, num2, num3 = 0){
    if( num3 == 0){
        if(num1 == num2){
            alert('Ingrese números diferentes');
            window.location.reload();
        } else{
            return true
        }
    } else{
        if(num1 == num2 || num1 == num3 || num2 == num3){
            alert('Ingrese números diferentes');
            window.location.reload();
        } else{
            return true
        }
    }
}