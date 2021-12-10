var array = [1, 3, "jersson", "hola", 5];

function arreglo (array){
var arr2= array.reverse()
// for(let i=array.length-1; i>=0; i--){
// arr2.push(array[i])
// }
console.log(arr2)
}

arreglo(array)


//array.length -> te dira cuantos elementos tiene tu arreglo


// var arr = [1, 2, 3, 4];
//        //  0  1  2  3
// var arr2 = [1, , , 4];


// // > var arr = [1, 2, 3, 4];
// undefined
// // > arr
// [ 1, 2, 3, 4 ]
// // > arr[0]
// 1
// // > arr[3]
// 4
// // > arr[5]
// undefined
// // > var arr2 = [1, , , 4];
// undefined
// // > arr2
// // [ 1, <2 empty items>, 4 ]
// // > arr2[1]= "Hola jersson"
// 'Hola jersson'
// // > arr2
// // [ 1, 'Hola jersson', <1 empty item>, 4 ]
// // > arr2[2]=["Hola",22]
// [ 'Hola', 22 ]
// // > arr2
// [ 1, 'Hola jersson', [ 'Hola', 22 ], 4 ]
// // > arr2[2]
// [ 'Hola', 22 ]
// // > arr2[2][0]
// 'Hola'
// // > arr2.length
// 4
// // > arr[4]="string"
// 'string'
// // > arr
// [ 1, 2, 3, 4, 'string' ]
// // > console.log(arr)
// [ 1, 2, 3, 4, 'string' ]
// undefined
// // > arr.push(5)
// 6
// // > arr
// [ 1, 2, 3, 4, 'string', 5 ]
// // > arr.push([])
// 7
// // > arr
// [ 1, 2, 3, 4, 'string', 5, [] ]
// // > var variable = 442
// undefined
// // > arr.push (variable)
// 8
// // > arr
// [ 1, 2, 3, 4, 'string', 5, [], 442 ]
// // > arr.pop()
// 442
// // > arr
// [ 1, 2, 3, 4, 'string', 5, [] ]
// // > var elem =arr.pop()
// undefined
// // > elem
// // []
// // > arr
// [ 1, 2, 3, 4, 'string', 5 ]
// // > arr.shift()
// 1
// // > arr
// [ 2, 3, 4, 'string', 5 ]
// // > arr.unshift([1,2,3])
// 6
// // > arr
// [ [ 1, 2, 3 ], 2, 3, 4, 'string', 5 ]
// // > arr.push(1,50,"stringgg")
// 9
// // > arr
// [ [ 1, 2, 3 ], 2, 3, 4, 'string', 5, 1, 50, 'stringgg' ]
