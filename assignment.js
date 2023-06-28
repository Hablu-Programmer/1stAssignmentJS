// 1. Variable কি?
উত্তরঃ প্রোগ্রামিং লেঙ্গুয়েজে কোনো ভেলু কে নেওয়ার জন্য যে শব্দের সাহায্যে নিতে হয় এবং যে ওয়ার্ড টা লিখতে হয় তাকে Varialbe বলা হয়।
পরিবর্তনশীল একটি মৌলিক ধারণা যাকে প্রোগ্রামিং ভাষায় নাম কন্টেইনার বলা হয়

2. Variable কিভাবে লিখতে হয়ে।
উত্তর ঃ সংক্ষিপত্ ভাবে var লিখে।
যেমনঃ 
var name = 'Md. Alamin';
var num = 100;


3. string type variable কি ও কিভাবে লিখতে হয়?
উত্তর ঃ text type অর্থাৎ letter type কোন Value কে লেখা বোঝায় যে number বিহিন হবে। আর এইটা "" / '' / `` এসকল সিম্বল এর ভিতরে sting type var লিখতে হয়। যেমন
var names = "amin";
console.log(names)
4. number type variable কি ও কিভাবে লিখতে হয়?
উত্তর ঃ নাম্বার টাইপ ভেরিএবল শুধু মাত্র নাম্বার বা ডিজিট লিতে হয় কোটেশন ছাড়া। কোটেশন দিয়ে লিখলে সেটা number type var হবে না। আর এটার number/ digit কোটেশন বিহীন লিখেতে হয়। 
যেমন
var nums = 20;
console.log(  nums)

5. কোনো Value এর সত্য মিথ্যা ডাটা নির্নয় করার জন্য এই Boolean type var use করতে হয়। true and false দুইটা এলিমেন্টস।
var BuleanType = false;
console.log(typeof BuleanType);
6. toUpperCase এবং toLowerCase এর ব্যাবহার।
উত্তর ঃ
var apurbs = `i am a fan of hablu programer specally eshan and harun vai. i am also students of web programing of their school. i want to learn how to become a web developer`;

console.log(apurbs.toUpperCase());

var apurbs =`I AM A FAN OF HABLU PROGRAMER SPECALLY ESHAN AND HARUN VAI. I AM ALSO 
// STUDENTS OF WEB PROGRAMING OF THEIR SCHOOL. I WANT TO LEARN HOW TO BECOME A WEB DEVELOPER`
console.log(apurbs.toLowerCase());

7. javascript মোট কয়টি অপারেটর আছে?
উত্তর ঃ 05 টি অপারেটর আছে।
 ১। অ্যারিথমেটিক অপারেটর
২। কম্পারিজম অপারেটর
৩। লজিক্যাল/রিলেশনাল অপারেটর
৪। অ্যাসাইনমেন্ট অপারেটর
৫। কন্ডিশনাল/টার্নারি অপারেটর

7.1 includes এর ব্যাবহার লিখো?
উত্তর ঃ rue and false

var freids = ' abc cde fgj okl mon';
console.log(freids.includes('okl'));

7.2 spilt এর ব্যাবহার লিখো?
 উত্তর ঃ আলাদা করতে ব্যবহার করতে হয়।

var freids = ' abc cde fgj okl mon';
console.log(freids.spilt('okl'));

7.3 indexof এর ব্যাবহার লিখো?
 উত্তরঃ অবস্থান বের করার জ্ন্য ব্যবহার করতে হয়ে।

var freids = ' abc cde fgj okl mon';
console.log(freids.indexof('okl'));
7.4 parseFloat কি ও কিভাবে ব্যবহার করতে হয়ে।
উত্তর ঃ number type var বের করার জন্য ব্যবহার করতে হয়। যেমন
 var num1 = 50;
 var num2 = '70'; // এখানে 70 টি কটেশনের ভিতরে তাই এটি এখন ‍string type var এটাকে number type var করার জন্য parseFloat use করবো।
 যেমন
num2 = parseFloat(num2)

var total = num1 + num2;
console.log(total)
8. Math.abs কি ও কিভাবে ব্যবহার করতে হয়ে।
উত্তর ঃ ঋৃনাত্তক nuber tyep var কে ধনাত্তক করা হয়। যেমন
var numa = -30;
var sum = Math.abs(numa)
console.log(sum)

9. Math.ceil কি এবং এর ব্যবহার লিখো?
উত্তরঃ প্রদত্ত ডেসিমেল সহ যেই সংখ্যা থাকুক উক্তর Number উপরে উঠে। যেমন।

var numr = 0.6;
var sum = Math.ceil(numr)
console.log(sum) //output হলো 1
var numr = 0.4;
var sum = Math.ceil(numr)
console.log(sum) //output হলো 1

10. Math.floor এর ব্যবহার কি?উত্তর
ডেসিমল সহ ডিজিটকে নিচের দিকে নামিয়ে পূর্ণ ডিজিট পেশ করতে এটি ব্যবহার হয়।
var numr = 2.6; //যদি 1.5
var sum = Math.floor(numr)
console.log(sum) //output হলো 2 এবং 1

11. Math.round কি ও এর ব্যবহার লিখো?
উত্তর ঃ .5 বা তার উপরের কো সংখ্যা থাকলে তাকে উপরের দিকে নিয়ে পুর্ণ সংখ্যা 1 আউটপুট দিবে এবং .4 ও তার নিচের কোন সংখ্যা থাকলে নিচের দিকে নামিয়ে পূর্ণ সংখ্যা দিবে না বরং 0 হিসেবে আউটপুট দিবে।
যেমন।
var numr = 2.6;
var numrr = 1.4; //যদি 1.4
var sum = Math.round(numr)
var sumr = Math.round(numrr)
console.log(sum)
console.log(sumr) //output হলো 3 এবং 1 (.4 কে নিচের দিকে নামিয়ে 0 কাউন্ট হয়েছে।) 

12. Math.random কি ও ব্যবহার লিখেন?
উতর 0-9 এর ভিতরে যে কোন একটি ডিজিট পেশ করা এবং এক এক সময় এক একটি ডিজিট আউটপুট হিসেবে পেশ করা। নিদিষ্ট কোন ডিজিট বারবার না দিয়ে ভিন্ন ভিন্ন number output দেওয়া। যেমন।

var numr = 7;

var sum = Math.random(numr)

 console.log(sum)
var numr = 7;
 var lottery = Math.random(numr)
   console.log( lottery)
// ১. Variable কি ?

// ২. Variable কিভাবে লিখতে হয় ?

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?

// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?

// ৮. Math.abs() এর ব্যাবহার লিখুন । 

// ৯. Math.celi()  এর ব্যাবহার লিখুন । 

// ১০. Math.Floor() এর ব্যাবহার লিখুন । 

// ১১. Math.round() এর ব্যাবহার লিখুন ।

// ১২. Math.random() এর ব্যাবহার লিখুন ।
 
// asignment.js - GitHub Link 
