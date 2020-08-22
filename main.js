
var userObj = {
    firstName: 'James',
    lastName: 'Bond',
    age: 35
    }
    console.log(userObj.firstName);
    console.log(userObj.lastName);
    userObj.age = 35;


    var userObj = {
        age: 35,
        firstName: 'James',
        lastName: 'Bond',
        fullName() {
          return `${userObj.firstName} ${userObj.lastName}`;
        }
      };
      
      console.log(userObj);


function defUpperStr(str) {
    return (str || 'default text').toUpperCase();
  }
  console.log(defUpperStr('Пора уже сделать все домашние задания')); 
console.log(defUpperStr()); 


function evenFn(n) {
    var arr = [];
  
    for (var i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  
    return arr;
  }
  
  console.log(evenFn(14)); 
  console.log(evenFn(19)); 
  console.log(evenFn(24)); 
  
//   5
function weekFn (d){
var str = '';

switch (d) {
case 1:
    str='Понедельник';
break;
case 2:
    str='Вторник';
break;
case 3:
    str='Среда';
break;
case 4:
    str='Четверг';
break;
case 5:
    str='Пятница';
break;
case 6:
    str='Суббота';
break;
case 7:
    str='Воскресенье';
break;
default:
    str= null;

}
return str;
}


console.log(weekFn(1)); 
console.log(weekFn(3)); 
console.log(weekFn(5)); 
console.log(weekFn(7)); 
console.log(weekFn(9)); 
console.log(weekFn(1.5)); 
console.log(weekFn('2')); 
console.log(weekFn('4')); 
console.log(weekFn('6')); 
console.log(weekFn('8')); 




function ageClassification(n) {
    return n > 0
      ? n > 24
        ? n > 44
          ? n > 65
            ? n > 75
              ? n > 90
                ? n > 122
                  ? null
                  : 'долгожители'
                : 'старческий возраст'
              : 'пожилой возраст'
            : 'средний возраст'
          : 'молодой возраст'
        : 'детский возраст'
      : null;
  }
  
  console.log('-1 :', ageClassification(-1)); 
  console.log('24 :', ageClassification(24)); 
  console.log('24.01 :', ageClassification(24.01)); 
  console.log('44.01 :', ageClassification(44.01)); 
  console.log('65.01 :', ageClassification(65.01)); 
  console.log('75.01 :', ageClassification(75.01)); 
  console.log('90.01 :', ageClassification(90.01)); 
  console.log('122 :', ageClassification(123)); 



  function oddFn(n){
    var arr = [];
    var i = 0;
  
    while (i++ < n) if (i % 2 !== 0) arr.push(i);
  
    return arr;
  }
  
  console.log(oddFn(10)); // [1, 3, 5, 7, 9]
  console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
  console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]






  function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
  
    return false;
  }
  function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function cbPow(num, pow) {
    return Math.pow(num, pow);
  }
  function cbAdd(a, b) {
    return a + b;
  }
  console.log(mainFunc(2, 5, cbRandom)); 
  console.log(mainFunc(10, 30, cbRandom)); 
  console.log(mainFunc(2, 5, cbPow)); 
  console.log(mainFunc(2, 5, cbAdd)); 
  console.log(mainFunc(2, 5, 'not a func'));  