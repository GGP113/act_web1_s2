/*


### 6️⃣ Nota a letra  
**Archivo:** `src/ejercicio6.js`  
Declara `nota = 83`.  
Convierte la nota numérica (0-100) a letra e imprímela:  
- 90-100 → `"A"`  
- 80-89  → `"B"`  
- 70-79  → `"C"`  
- 60-69  → `"D"`  
- < 60   → `"F"`


*/


let nota = 83;

if(nota>=90){
    console.log("A")
}

else if(nota>79 && nota<90){
    console.log("B")

}

else if(nota>69 && nota<80){
    console.log("C")

}

else if(nota>59 && nota<70){
    console.log("D")

}

else if(nota <60){

    console.log("F")
}