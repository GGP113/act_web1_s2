/*### 4️⃣ Calculadora básica con switch  
**Archivo:** `src/ejercicio4.js`  
Declara:  
```js
let a = 10;
let b = 3;
let operador = '*';   // puede ser + - * /
```
Imprime el resultado o `"operador no válido"`.  
Si `b === 0` y `operador === '/'` imprime `"indeterminado"`.*/

let a = 10;
let b = 3;
let operador = "*";

switch (operador) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":

    if(b==0){
        console.log("indeterminado")
    }

    else{console.log(a / b);}
    
    break;

  default:
    console.log("Operador no válido");
    break;
}
