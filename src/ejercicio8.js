/*



### 8️⃣ Transporte con tarifa reducida  
**Archivo:** `src/ejercicio8.js`  
Declara:  
```js
let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
```
Aplica:  
- 20 % descuento si edad < 18  
- 40 % descuento si edad ≥ 65  
Imprime el precio final redondeado a 2 decimales.


*/



let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;


let tarifaFinal = 0;

if(edad < 18 ){

    tarifaFinal=tarifaBase*0.8


}

else if(edad >= 65 ){
    tarifaFinal=tarifaBase*0.6
}

else{

    tarifaFinal=tarifaBase
}


console.log( tarifaFinal.toFixed(2))