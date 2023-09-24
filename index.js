const PrimExercitiu = "camel case";
const EX_PRIM_EXERCITIU ="uper snake";
const uppercase = PrimExercitiu.toUpperCase();

console.log(uppercase);

const str1 = "Exercitiu"
const str2 = "numarul 2"
const str3 = "string interpoltion"

console.log(`${str1} ${str2} ${str3}`)

const exercitiu3 = 50;
const exercitiu4_str = "100";
console.log(String(exercitiu3));
console.log(typeof exercitiu3.toString());
console.log(`${exercitiu3}`);
console.log("" + exercitiu3);

console.log(Boolean(exercitiu3));
console.log(Boolean (10 > exercitiu3));
console.log(Boolean(10 < exercitiu3));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));


console.log(typeof +exercitiu4_str);
console.log(typeof Number(exercitiu4_str));
console.log(Number("100"));
console.log(+exercitiu4_str);

console.log(Boolean(exercitiu4_str));
console.log(Boolean(10 > exercitiu4_str));
console.log(Boolean(NaN));
console.log(Boolean(undefined));


 const obj = {
    first_name: 'Exercitiu5',
    nickname: 'EX5',
    surname: undefined
 }
console.log(obj, 1);

 if(!obj.surname) {
    obj.surname = 'surname'
 }
 console.log(obj, '2');

 console.log(exercitiu3 === exercitiu3 && exercitiu3 == exercitiu4_str);
 console.log(exercitiu3 === exercitiu3 || exercitiu3 == exercitiu4_str);

 const conditie_ex5 = true;
 const conditie_ex5_falsy = 0

 if (conditie_ex5_falsy) {
    console.log('executat');

 } else {
    console.log('nu executat');
 }

 