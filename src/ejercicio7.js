/*


### 7️⃣ Descuento por volumen  
**Archivo:** `src/ejercicio7.js`  
Declara:  
```js
let precioUnitario = 25;
let cantidad = 60;
let precioFinal;
```
Aplica descuento sobre el total:  
- 0 % si cantidad < 10  
- 10 % si 10 ≤ cantidad < 50  
- 20 % si cantidad ≥ 50  
Imprime `precioFinal` redondeado a 2 decimales.

*/


let precioUnitario = 25;
let cantidad = 60;
let precioFinal;


if(10 <= cantidad && cantidad< 50){
    precioFinal=precioUnitario*cantidad*0.9
}

else if(cantidad >= 50){
    precioFinal=precioUnitario*cantidad*0.8


}

else{
    precioFinal=precioUnitario*cantidad
}

console.log( precioFinal.toFixed(2))