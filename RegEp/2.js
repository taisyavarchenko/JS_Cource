/*
2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
*/

const dubleChar = (str, sym) => {
    let re = new RegExp(sym, 'g');
    return str.replace(re, sym+sym);
}

console.log('dubleChar: ' + dubleChar('abababababab', 'b'));