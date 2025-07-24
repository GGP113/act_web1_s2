/*

### 🔟 Autenticación simple  
**Archivo:** `src/ejercicio10.js`  
Declara:  
```js
let usuario = "admin";
let contrasena = "1234";
```
Imprime:  
- `"acceso concedido"` si coincide exactamente  
- `"acceso denegado"` en cualquier otro caso

*/


let usuario = "admi";
let contrasena = "1234";


if(usuario==="admin" && contrasena === "1234"){

    console.log("acceso concedido")
}

else{console.log("acceso denegado")}