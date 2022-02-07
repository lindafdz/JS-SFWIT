/* Ramón quiere hacer una fiesta privada en donde solo entre un número
exclusivo de personas, ayudale al portero a solo dejar pasar a
aquellas personas mayores de edad que sean familiares de Ramón. (con imprimir 
los usuarios que se admitirán basta, usar el arreglo denominado como "ejercicio2").*/
const entrada = (ejercicio2)=>{
    if (ejercicio2.edad>=18 && ejercicio2.familiar==true){
        console.log('Puedes pasar ${ejercicio2.nombre} de ${ejercicio2.edad} años');
    }else
    {
        console.log('No puedes pasar ${ejercicio2.nombre} de ${ejercicio2.edad} años');
    }
}
ejercicio2.forEach(ejercicio2=>{entrada(ejercicio2)})