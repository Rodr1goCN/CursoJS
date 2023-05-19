function maiorNumero(num1,num2){
    if(num1 > num2){
        return num1
    } else{
        return num2
    }
}

const maiorNumeros = maiorNumero(100,50)
console.log(maiorNumeros)


/* 
Se o if tiver somente uma linha podemos encurtar ele, ficando


function maiorNumero(num1, num2){
if (num1 > num2) return num1;
return num2
}



ou podemos encurtar mais



function maiorNumero(num1, num2){
return num1 > num2 ? num1 : num2;
}



ou podemos encurtar mais



const maiorNumero = (num1, num2) =>{
    return num1 > num2 ? num1 : num2;
};
console.log(maiorNumero(1,50))




ou podemos encurtar mais




const maiorNumero = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(maiorNumero(1,50))


*/