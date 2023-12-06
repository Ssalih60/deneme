let word = 'JavaScipt';
word = 'sali';
word[0] = 'y';

let userOne = {
    ad: 'Salih',
    soyad: 'Yürek',
    yas: '24',
    ogrenimSeviyesi: 'Lisans'
}

const PI = Math.PI;

console.log(PI);

console.log(Math.round(PI));

console.log(Math.round(9.81)) // hangisine en yakınsa ona yuvarlar 

console.log(Math.floor(PI)) // her zaman yukarı yuvarlar 

console.log(Math.ceil(PI)) // her zaman aşşağıya yuvarlar 

console.log(Math.min(-5, 3, 20, 4, 5, 10))

console.log(Math.max(3, 4, 324))

const randNum = Math.floor(Math.random() * 500)
console.log(randNum) 

console.log('\n\n\n');


let salih = -54;
salih = Math.abs(salih)
console.log(salih)
// console.log(Math.abs(salih))


let num1 = 4;
console.log(Math.log(10))

console.log(Math.sin(10))
console.log(Math.cos(-80))

console.log(Math.round(12.499999999999999999))

const paragraph = "My nameisAsabeneh Yetayeh. I live in Finland, Helsinki. \
I am a teacher and I love teaching. dfs I teach HTML, CSS, JavaScript, React, Redux,"

console.log(paragraph.substr(4,7))