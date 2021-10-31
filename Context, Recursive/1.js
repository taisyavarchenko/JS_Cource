/*
1. Реализовать функцию foo:
let a = {
name: 'static',
count: 0
}
console.log(foo(a, 'count', 10));
В консоль выведет:
[{name:'static', count:0}, {name:'static', count:1}, ...,
{name:'static', count:9}] 
*/

let a = {
    name: 'static',
    count: 0
};

let foo = (obj, key, num) => {
    let objects = [];
    for (let index = 0; index < num; index++) {
        let newObj = {
            ...obj
        };
        newObj[key]=index;
        objects.push(newObj);
    }
    return objects;
}

console.log(foo(a, 'count', 10));