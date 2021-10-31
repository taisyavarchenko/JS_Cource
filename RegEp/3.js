/*
//3. Проверка пароля

const checkPass = pass => {
    let res = pass.match(/^.*(?=.{9,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!#$%&? "]).*$/);
    return res ? res : 'Bad Pass'
}

console.log(checkPass('SetFiln123%'))
*/

const checkPass = pass => {
    let res = pass.match(/^.*(?=.{9,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!#$%&? "]).*$/);
    return res ? res : 'Bad Pass'
}

console.log(checkPass('SetFiln123%'))