var array1 = [12, 34, 56, 12, 67]
var array2 = ['js', 'java', 'c#', 'python']

// Todas as funções devem ser implementadas sem efeitos colaterais, isto é,
// elas não devem modificar o array de entrada (não são in-place).

function first(array1, size) {
    
    var arrayresp = []
    if (size === undefined){
        arrayresp += array1[0]
        return arrayresp
    }
    if (array1[0] === undefined){
        return []
    }
    if (typeof(size) === 'number' && size > 0){
        for(var i = 0; i < size; i++){
            arrayresp[i] = array1[i]
        }
        return arrayresp
    }
    else{
        return "Entrada invalida"
    }
}

function last(array1, size) {
    
    var arrayresp = []
    if (size === undefined){
        var i = array1.length - 1
        arrayresp = array1[i]
        return arrayresp
    }
    if (typeof(size) === 'number' && size > 0){
        var j = (array1.length) - size
        for (i = 0; i < size; i++){
            arrayresp[i] = array1[j]
            j++
        }
        return arrayresp
    }
    else{
        return "Entrada invalida"
    }
}

function tail(array1) {
    
    var arrayresp = []
    if (array1[0] === undefined){
        return []
    }
    else{
        for (i = 1; i < array1.length; i++){
            arrayresp[i-1] = array1[i]
        }
        return arrayresp
    }
}

function without(array1, param) {
    
    var arrayresp = []
    if (array1[0] === undefined){
        return []
    }
    else{
        var j = 0
        for (i = 0; i < array1.length; i++){
            if (array1[i] !== param){
                arrayresp[j] = array1[i]
                j++
            }
        }
        return arrayresp
    }
}

function union(array1, array2, array3) {
    
    //testar repetição
    var arrayresp = []
    for (i = 0; i < array1.length; i++){
        arrayresp[i] = array1[i]
    }
    j = arrayresp.length
    
    for (i = 0; i < array2.length; i++){
        arrayresp[j] = array2[i]
        j++
    }
    if (array3 !== undefined){
        j = arrayresp.length
        for(i = 0; i < array3.length; i++){
            arrayresp[j] = array3[i]
            j++
        }
    }
    var arrayresp2 = []
    for (i = 0; i < arrayresp.length; i++) {
        if (arrayresp2.indexOf(arrayresp[i]) === -1) {
            arrayresp2.push(arrayresp[i]);
            //usei push aqui porque ja tinha apanhado de mais nessa
        }
    }
    return arrayresp2
}

function unique(arrayresp) {
    
    var arrayresp2 = []
    for (i = 0; i < arrayresp.length; i++) {
        if (arrayresp2.indexOf(arrayresp[i]) === -1) {
            arrayresp2.push(arrayresp[i]);
        }//faltou caso para todos elementos iguais ?\_0_/?
    }
    return arrayresp2
}

function intersection(array1, array2) {
    
    var arrayresp = []
    for (i = 0; i < array1.length; i++){
        if (array1[i] in array2){
            arrayresp.push(array1[i])
        }
    }
    return arrayresp
}
function difference() {}
function zip() {}
function compact() {}
function flatten() {}
function equals() {}

console.log(first(array1)) // 12
console.log(first(array1, 3)) // [12, 34, 56]
console.log(first([], 3)) // []

console.log(last(array1)) // 67
console.log(last(array1, 3)) // [56, 12, 67]

console.log(tail(array1)) // [34, 56, 12, 67]
console.log(tail([])) // []

console.log(without(array1, 34)) // [12, 56, 12, 67]
console.log(without(array1, 12)) // [34, 56, 67]

console.log(union(array1, array2)) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python']
console.log(union(array1, array2, [89, 34, 'ruby', 'js'])) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python', 89, 'ruby']

console.log(unique(array1)) // [12, 34, 56, 67]
console.log(unique(['a', 'a', 'a'])) // []
console.log(unique(['a', 'b', 'a', 'b'])) // ['a', 'b']

console.log(intersection(['a', 4, 'c', 8], [8, 'b', 'c', 34])) // ['c', 8]
console.log(intersection([8, 'a', 4, 'c', 8], [8, 'b', 'c', 34])) // [8, 'c']

console.log(difference(['a', 4, 'c', 8], [8, 'b', 'c', 34])) // ['a', 4, 'b', 34]
console.log(difference([], array1)) // []
console.log(difference(array1, [])) // [12, 34, 56, 12, 67]
console.log(difference(array1, array2)) // [12, 34, 56, 12, 67]
console.log(difference(array1, [56, 67])) // [12, 34, 12]

console.log(zip([12, 45], [67, 90])) // [[12, 67], [45, 90]]
console.log(zip(array2, [67, 90, 52, 56])) // [['js', 67], ['java', 90], ['c#', 52], ['python', 56]]
console.log(zip(array1, [67, 90, 52, 56], ['brendan eich', 'james gosling', 'anders hejlsberg', 'guido van rossum']))
// [['js', 67, 'brendan eich'], ['java', 90, 'james gosling'], ['c#', 52, 'anders hejlsberg'], ['python', 56, 'guido van rossum']]
console.log(zip([12, 45, 89], [67, 90])) // [[12, 67], [45, 90], [89, undefined]]
console.log(zip([12, 45])) // [[12], [45]]

console.log(compact([45, 23])) // [45, 23]
console.log(compact([45, 23, null])) // [45, 23]
console.log(compact([NaN, 23, null, 12])) // [23, 12]
console.log(compact([NaN, 23, null, 12, undefined, 78])) // [23, 12, 78]
console.log(compact([NaN, 23, null, 12, undefined, 78, 0, false, ''])) // [23, 12, 78, 0, false, '']
console.log(compact(array1)) // [12, 34, 56, 12, 67]

var depth = 2 // profundidade
var nested = [34, 54, [45, 23, [78, 90, [65]]], 12]
console.log(flatten([34, 54, [45, 23], 12])) // [34, 54, 45, 23, 12]
console.log(flatten([34, 54, [45, 23], 12, [78, 90]])) // [34, 54, 45, 23, 12, 78, 90]
console.log(flatten([34, 54, [45, 23, [78, 90]], 12])) // [34, 54, 45, 23, [78, 90], 12]
console.log(flatten([34, 54, [45, 23, [78, 90]], 12], depth)) // [34, 54, 45, 23, 78, 90, 12]
console.log(flatten(nested, depth)) // [34, 54, 45, 23, 78, 90, [65], 12]
console.log(flatten(nested, 3)) // [34, 54, 45, 23, 78, 90, 65, 12]
console.log(flatten(array1)) // [12, 34, 56, 12, 67]

console.log(equals([1, 2, 3], [1, 2, 3])) // true
console.log(equals([1, 2, 3], [1, 3, 2])) // false
console.log(equals(array1, array2)) // false
console.log(equals([1, [2, 3], 4], [1, [2, 3], 4])) // true
console.log(equals([1, [2, 3], 4], [1, [3, 2], 4])) // false
console.log(equals(nested, nested)) // true
console.log(equals(nested, [34, 54, [45, 23, [78, 90, [65]]], 12])) // true
console.log(equals([34, 54, [45, 23, [78, 90, [65]]], 12], nested)) // true

console.log(array1) // [12, 34, 56, 12, 67]
console.log(array2) // ['js', 'java', 'c#', 'python']