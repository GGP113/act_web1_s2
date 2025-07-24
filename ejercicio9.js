/*

### 9️⃣ Conversor de notas musicales (switch)  
**Archivo:** `src/ejercicio9.js`  
Declara `nota = 'LA';`.  
Imprime el número MIDI correspondiente:  
- DO → 60  
- RE → 62  
- MI → 64  
- FA → 65  
- SOL → 67  
- LA → 69  
- SI → 71  
Cualquier otro valor → `"nota desconocida"`


*/

let nota = "LA";

switch (nota) {
  case "DO":
    console.log(60);
    break;
  case "RE":
    console.log(62);
    break;

  case "MI":
    console.log(64);
    break;

  case "FA":
    console.log(65);
    break;

  case "SOL":
    console.log(67);
    break;

  case "LA":
    console.log(69);
    break;

  case "SI":
    console.log(71);
    break;

  default:
    console.log("nota desconocida");
    break;
}
