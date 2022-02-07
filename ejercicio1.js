/*Dado un arreglo de números enteros, Imprimir solamente aquellos que son denominados números primos,
 (usar arreglo denominado como"ejercicio1"). */

const nprimo = n =>
{
    for (let i=2; i<n; i++){
        if (n % i == 0)
        return false
    }
    return true
}
ejercicio1.forEach(n=>{console.log('El número ${n} es un número primo', nprimo(n))})