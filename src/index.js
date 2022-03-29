/**
 * const let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let変数は上書き可能　再宣言不可

// const変数は上書き不可　再宣言不可
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "imo",
//   age: 21,
// };
// val4.name = "imoco";
// val4.address = "Tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "imoco";

// const age = 21;
// //  [My name is imoco.  I'm 21 years old.]

// // before
// const message1 = "My name is" + name + ". I'm " + age + "years old.";
// console.log(message1);

// // use template
// const message2 = `My name is ${name}. I'm ${age} years old.`;
// console.log(message2);

/**
 * アロー関数
 */

//  before
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("This is func1."));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("This is func2."));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "imoco",
//   age: 21

// };
// const message1 = `My name is ${myProfile.name}. I'm ${myProfile.age}.`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `My name is ${name}. I'm ${age}.`;
// console.log(message2);

// 配列でも同じ事が出来る
// const myProfile = ["imoco", 21];
// const [name, age] = myProfile;
// const message4 = `My name is ${name}. I'm ${age} years old.`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "guest") => console.log(`Hello!${name}!`);

// sayHello("imoco");

// sayHello();

/**
 * スプレッド構文　...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる ..arr3を使用することで残りの3つの数値をまとめて受け取っている
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// ＝でコピーすると参照渡しになってしまう
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * 三項演算子
 */
// ある条件 ？ 条件がtrueの時 : 条件がtrueの時
// const val1 = 1 > 0 ? "It's true." : "It's false.";
// console.log(val1);

// 実装サンプル1
// const num = '1300';

// const formattedNum  = typeof num === 'number' ? num.toLocaleString() : 'Please number';
// console.log(formattedNum);

// 実装サンプル2
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? 'over 100' : 'OK';
// }
// console.log(checkSum(50, 40));
