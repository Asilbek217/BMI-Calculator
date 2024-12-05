// // @@ -1,599 +0,0 @@
// // // // const favorite = (prompt('My favourite fruit?'));

// // // // if (favorite === apple) {
// // // //   console.log('apple is my favorite favourite');
// // // // } else if (favorite === 327) {
// // // //   console.log('pineapple is also my favorite number');
// // // // } else {
// // // //   console.log(
// // // //     `Bu meva mening yoqtirgan mevam emas. Kiritgan mevangiz: ${favorite}
// // // //   `);
// // // // }

// // // // const uzoqYolgaAvtomobileKerak = true;
// // // // const avtomobilegaYonolgiKerak = false;
// // // // // console.log (uzoqYolgaAvtomobileKerak && avtomobilegaYonolgiKerak);
// // // // // console.log (uzoqYolgaAvtomobileKerak || avtomobilegaYonolgiKerak);
// // // // const

// // // // let dolphinsScore1 = 96;

// // // // let dolphinsScore2 = 108;

// // // // let dolphinsScore3 = 88;

// // // // let koalasScore1 = 88;

// // // // let koalasScore2 = 91;

// // // // let koalasScore3 = 110;

// // // // const dolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

// // // // const koalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// // // // // console.log(dolphins)

// // // // // console.log(koalas)

// // // // // console.log (Math.floor(dolphins))

// // // // // console.log (Math.floor(koalas))

// // // // // if(koalas>dolphins){
// // // // //     console.log(`koalas win`)
// // // // // }

// // // // // else {
// // // // //     console.log(`dolphins win`)
// // // // // }

// // // // // else if (dolphins===koalas) {
// // // // //     console.log(`draw`);
// // // // // }

// // // // const day = "monday";

// // // // switch (day) {
// // // //   case "monday": // day === 'monday'
// // // //     console.log("Vazifalarni tekshirish");
// // // //     console.log("Katta uyga borib kelish");
// // // //     break;
// // // //   case "tuesday":
// // // //     console.log("Wifi ornatish");
// // // //     break;
// // // //   case "wednestday":
// // // //     break;
// // // //   case "thursday":
// // // //     console.log("Proyektni tugatish");
// // // //      break;
// // // //   case "friday":
// // // //     console.log("Jumaga borish");
// // // //     break;
// // // //   case "sturday":
// // // //     console.log("Dars otish");
// // // //     console.log("Uylarni remont qilish");
// // // //     break;
// // // //   case "sunday":
// // // //     console.log("Uy ishlari");
// // // //   default:
// // // //     console.log("You entered wrong day!");
// // // // }

// // // // if ( day=='monday' ){
// // // //   console.log('Vazifalarni tekshirish');
// // // // }
// // // // else if(day=='tuesday'){
// // // //   console.log('Wifi ornatish');
// // // // }
// // // // else if( day=='wednestday'){
// // // //    console.log('Katta uyga borib kelish');
// // // // }
// // // // else if(day=='thursday'){
// // // //   console.log('Proyektni tugatish');
// // // // }
// // // // else if(day=='friday'){
// // // //   console.log('Jumaga borish');
// // // // }
// // // // else if(day=='sturday'){
// // // //   console.log('Dars otish');
// // // //     console.log('Uylarni remont qilish');
// // // // }
// // // // else if(day=='sunday'){
// // // //   console.log('Uy ishlari');
// // // // }
// // // // else
// // // // console.log('notogri kunni kiritdingiz');

// // // // const dokon = "Telefon dokoni";

// // // // switch (dokon) {
// // // //   case "Samsung S1":
// // // //     console.log("Hajmi kichikroq va arzon");
// // // //     console.log("Narxi 70$");
// // // //     break;
// // // //   case "Samsung S2":
// // // //     console.log("Samsung S1ga qaraganda yaxshiroq");
// // // //     console.log("ammo biroz qimmat");
// // // //     console.log("Narxi 90$");
// // // //     break;
// // // //   case "Samsung S3":
// // // //     console.log("Kamera tiniq va yaxshi ishlaydi");
// // // //     console.log("Narxi 110$");
// // // //     break;
// // // //   case "Samsung S22 Ultra":
// // // //     console.log("Samsung telefonlari orasida eng yaxshisi");
// // // //     console.log("Kamerasi 108mp va juda tiniq");
// // // //     console.log("Suvdaham ishlay oladi");
// // // //     console.log("Narxi 1400$");
// // // //     break;
// // // //   case "Iphone X":
// // // //     console.log("Samsung ga qaraganda farq qiladi");
// // // //     console.log("Narxi qimmat ammo yaxshi ishlaydi");
// // // //     console.log("Narxi 200$");
// // // //     break;
// // // //   case "Iphone 14 Pro Max":
// // // //     console.log("Iphone telefonlari orasida eng yaxshisi");
// // // //     console.log("Kamerasi 108mp va juda tiniq");
// // // //     console.log("Suvdaham ishlay oladi");
// // // //     console.log("Narxi 1500$");
// // // //     break;
// // // //   case "Redmi S10":
// // // //     console.log("Samsung va Iphonedan juda arzon va yaxshi ishlaydi");
// // // //     console.log("Narxi 80$");
// // // //     break;
// // // //   case "Redmi 10 Pro":
// // // //     console.log("S10 ga qaraganda yaxshiroq va narxi qimmatroq");
// // // //     console.log("Narxi 120$");
// // // //     break;
// // // // }

// // // // if (dokon === "Samsumg S1") {
// // // //   console.log("Hajmi kichikroq va arzon");
// // // //   console.log("Narxi 70$");
// // // // } else if (dokon === "Samsung S2") {
// // // //   console.log("Samsung S1ga qaraganda yaxshiroq");
// // // //   console.log("ammo biroz qimmat");
// // // //   console.log("Narxi 90$");
// // // // } else if (dokon === "Samsung S3") {
// // // //   console.log("Kamera tiniq va yaxshi ishlaydi");
// // // //   console.log("Narxi 110$");
// // // // } else if (dokon === "Samsung S22 Ultra") {
// // // //   console.log("Samsung telefonlari orasida eng yaxshisi");
// // // //   console.log("Kamerasi 108mp va juda tiniq");
// // // //   console.log("Suvdaham ishlay oladi");
// // // //   console.log("Narxi 1400$");
// // // // } else if (dokon === "Iphone X") {
// // // //   console.log("Samsung ga qaraganda farq qiladi");
// // // //   console.log("Narxi qimmat ammo yaxshi ishlaydi");
// // // //   console.log("Narxi 200$");
// // // // } else if (dokon === "Iphone 14 Pro Max") {
// // // //   console.log("Iphone telefonlari orasida eng yaxshisi");
// // // //   console.log("Kamerasi 108mp va juda tiniq");
// // // //   console.log("Suvdaham ishlay oladi");
// // // //   console.log("Narxi 1500$");
// // // // } else if (dokon === "Redmi S10") {
// // // //   console.log("Samsung va Iphonedan juda arzon va yaxshi ishlaydi");
// // // //   console.log("Narxi 80$");
// // // // } else if (dokon === "Redmi 10 Pro") {
// // // //   console.log("S10 ga qaraganda yaxshiroq va narxi qimmatroq");
// // // //   console.log("Narxi 120$");
// // // // } else {
// // // //   console.log(`Sizda telefon xarid qilish uchun mablag' yetarli emas.`);
// // // // }

// // // "use strict";

// // // ///////////////////////////////////////
// // // // Activating Strict Mode

// // // // let hasDriverLicense = false;
// // // // const passTest = true;
// // // // // const private = 0;

// // // // if (passTest) hasDriverLicense = true;
// // // // if (hasDriverLicense) console.log("I can drive ;)");

// // // ///////////////////////////////////////
// // // // Functions
// // // // function logger() {
// // // //   console.log("Log to the console");
// // // // }

// // // // logger();
// // // // logger();
// // // // logger();

// // // // 🍎 apples 🍊 oranges
// // // // 3ta olma va 2ta apelsin

// // // // function makeMeAJuice(olmalar, apelsinlar) {
// // // //   const juice = `${olmalar} ta olmali va ${apelsinlar}ta olchali sharbat!`;
// // // //   console.log("working");
// // // //   return juice;
// // // // }

// // // // console.log(makeMeAJuice(3, 4));

// // // ///////////////////////////////////////
// // // // Function Declarations vs. Expressions

// // // // Decloration
// // // // function meningYoshim(tugilganYil) {
// // // //   return 2022 - tugilganYil;
// // // // }
// // // // console.log(meningYoshim(1800));

// // // // // Expressions
// // // // const meningYoshim2 = function (tugilganYil) {
// // // //   return 2022 - tugilganYil;
// // // // };
// // // // console.log(meningYoshim2(2000));

// // // ///////////////////////////////////////
// // // // Arrow functions
// // // // const meningYoshim3 = (tugilganYil) => {
// // // //   a + b;
// // // //   console.log('sdfds');
// // // //   2022 - tugilganYil;
// // // // };
// // // // const meningYoshim3 = (tugilganYil) => 2022 - tugilganYil;
// // // // console.log(meningYoshim2(2018));

// // // // nafaqaga chiqish 👴🏻
// // // // const nafaqa = function (tugilganYil, firstName) {
// // // //   const age = 2022 - tugilganYil;
// // // //   const nafaqagacha = 65 - age;

// // // //   if (age >= 65) return `Siz nafaqaga chiqgansiz 💰!`;

// // // //   return `Siz ${firstName} ${nafaqagacha} yil ichida nafaqaga chiqasiz 👴🏻`;
// // // // };

// // // // console.log(nafaqa(1973, "Tom 😸"));
// // // // console.log(nafaqa(1954, "Jerry 🐁"));

// // // ///////////////////////////////////////
// // // // Coding Challenge #1

// // // /*
// // // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// // // Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// // // A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// // // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// // // 2. Use the function to calculate the average for both teams
// // // 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// // // 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// // // 5. Ignore draws this time.

// // // TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// // // TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// // // HINT: To calculate average of 3 values, add them all together and divide by 3
// // // HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// // // GOOD LUCK 😀
// // // */

// // // const qoshishFunc = (brinchi, ikkinchi, uchinchi) => {};

// // // console.log(qoshishFunc(3, 7, 2));

// // // const competition = (dolphin1, dolphin2, dolphin3, koala1, koala2, koala3) => {
// // //   const dolphin = (dolphin1 + dolphin2 + dolphin3) / 3;
// // //   console.log(dolphin);
// // //   const koala = (koala1 + koala2 + koala3) / 3;
// // //   console.log(koala);

// // //   if (dolphin < 2 * koala) {
// // //     console.log(" Koalas team won");
// // //   } else if (dolphin > 2 * koala) {
// // //     console.log("Dolphins team won");
// // //   } else {
// // //     console.log("Draw");
// // //   }

// // //   console.log(competition(65, 54, 49, 44, 23, 71));
// // // };

// // // const calcAverage = (match1, match2, match3) => {
// // //   return (match1 + match2 + match3) / 3; // 47
// // // };

// // // const dolphin = calcAverage(44, 23, 71);
// // // const koala = calcAverage(65, 54, 27);

// // // console.log(dolphin, koala);

// // // const checkWinner = ('dolphin and koala')

// // // if (dolphin == koala)
// // // {console.log ('draw')}

// // // else if (dolphin<koala)
// // // {console.log ('Dolphin won')}

// // // else {
// // //   console.log ('koala won')
// // // }

// // // // const month = (Yanvar, Fevral, Mart, Aprel, May, Iyun, Iyul, Avgust, Sentyabr, Oktyabr, Noyabr, Dekabr) => {
// // // //     if(Yanvar){
// // // //      return`Yanvar oyida 31 kun bor`;
// // // //     } else  if(Fevral){
// // // //      return Fevral oyida 28 kun bor;
// // // //     } else  if(Mart){
// // // //      return Mart oyida 31 kun bor;
// // // //     } else  if(Aprel){
// // // //      return Aprel oyida 30 kun bor;
// // // //     } else  if(May){
// // // //      return May oyida 31 kun bor;
// // // //     } else  if(Iyun){
// // // //      return Iyun oyida 30 kun bor;
// // // //     } else  if(Iyul){
// // // //      return Iyul oyida 31 kun bor;
// // // //     } else  if(Avgust){
// // // //      return Avgust oyida 31 kun bor;
// // // //     } else  if(Sentyabr){
// // // //      return Sentyabr oyida 30 kun bor;
// // // //     } else  if(Oktyabr){
// // // //      return Oktyabr oyida 30 kun bor;
// // // //     } else  if(Noyabr){
// // // //      return Noyabr oyida 30 kun bor;
// // // //     } else  if(Dekabr){
// // // //      return Dekabr oyida 31 kun bor;
// // // //     } else return Oy nomini hato kiritdingiz;
// // // //  }

// // // //  console.log(month(Yanvar, Fevral, Mart, Aprel, May, Iyun, Iyul, Avgust, Sentyabr, Oktyabr, Noyabr, Dekabr));

// // // // const year = ("year") {
// // // //   if(year){
// // // //   `Yanvar oyida 31 kun bor.
// // // //    Fevral oyida 28 kun bor.
// // // //    Mart oyida 31 kun bor.
// // // //    Aprel oyida 30 kun bor.
// // // //    May oyida 31 kun bor.
// // // //    Iyun oyida 30 kun bor.
// // // //    Iyul oyida 31 kun bor.
// // // //    Avgust oyida 31 kun bor.
// // // //    Sentyabr oyida 30 kun bor.
// // // //    Oktyabr oyida 30 kun bor.
// // // //    Noyabr oyida 30 kun bor.
// // // //    Dekabr oyida 31 kun bor.
// // // //    `;
// // // //   } else return `Oy nomini hato kiritdingiz`;
// // // // }

// // // // console.log (month)

// // // ///////////////////////////////////////
// // // // Introduction to Arrays
// // // // const firstName = 'Rustamjon';
// // // // const lastName = 'Tolipov';

// // // // const array = ['Rustamjon', 'Tolipov', 123, 321, 'Test'];

// // // // // length of array
// // // // const arrayLength = array.length;

// // // // // console.log(array);
// // // // // console.log(arrayLength);

// // // // // get element from array
// // // // // const myFirstName = array[2];
// // // // // console.log(myFirstName);

// // // // // methods:  add element, and remove elementto the array
// // // // // push = arrayning oxiriga element qo'shib beradi va returnda yangi arrayning lengthini chiqarib beradi

// // // // const addElement1 = array.push(2022 - 2001);
// // // // const addElement2 = array.push('javaScript');

// // // // console.log(addElement1);
// // // // console.log(addElement2);

// // // // // unshift = arrayning boshiga element qo'shib beradi va returnda yangi arrayning lengthini chiqarib beradi

// // // // const addElement3 = array.unshift('Programer');
// // // // console.log(addElement3);
// // // // console.log(array);

// // // // // pop = arrayning oxiridan element olib tashlaydi va returnda bizga o'sha olib tashlagan elementimizni qaytarib beradi
// // // // const removeElement = array.pop();
// // // // console.log(array);
// // // // console.log(removeElement);

// // // // // shift = arrayning boshidan element olib tashlaydi va returnda bizga o'sha olib tashlagan elementimizni qaytarib beradi

// // // // const removeElemen1 = array.shift();
// // // // console.log(array);
// // // // console.log(removeElemen1);

// // // ///////////////////////////////////////
// // // // Basic Array Operations (Methods)

// // // // const month = (oy) => {
// // // //   if ('Yanvar' === oy) {
// // // //     return `${oy} oyida 31 kun bor`;
// // // //   } else if ('Fevral' === oy) {
// // // //     return `${oy} oyida 28 kun bor`;
// // // //   } else if ('Mart' === oy) {
// // // //     return `${oy} oyida 31 kun bor`;
// // // //   } else if ('Aprel' === oy) {
// // // //     return `${oy} oyida 30 kun bor`;
// // // //   } else if ('May' === oy) {
// // // //     return `${oy} oyida 31 kun bor`;
// // // // //   } else if ('Iyun' === oy) {
// // // // //     return `${oy} oyida 30 kun bor`;
// // // // //   } else if ('Iyul' === oy) {
// // // // //     return `${oy} oyida 31 kun bor`;
// // // // //   } else if ('Avgust' === oy) {
// // // // //     return `${oy} oyida 31 kun bor`;
// // // // //   } else if ('Sentyabr' === oy) {
// // // // //     return `${oy} oyida 30 kun bor`;
// // // // //   } else if ('Oktyabr' === oy) {
// // // // //     return `${oy} oyida 30 kun bor`;
// // // // //   } else if ('Noyabr' === oy) {
// // // // //     return `${oy} oyida 30 kun bor`;
// // // // //   } else if ('Dekabr' === oy) {
// // // // //     return `${oy} oyida 31 kun bor`;
// // // // //   } else return `Oy nomini xato kiritdingiz, kiritgan parametringzi ${oy}`;
// // // // // };

// // // // // console.log(month('Noyab'));

// // // // // // 1. oy nomlariga (oylarNomi) array yasaladi
// // // // // // IXTIYORIY: 2. returnga qo'yiladigan elementlarga alohida array yasaysizlar
// // // // // // month('Noyab') => month(oylarNomi[11])

// // // // // const year = 'month'

// // // // // const year = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Augst','Sentabr','Oktabr','Noyabr','Dekabr']

// // // // // const arrayLength = array.length;

// // // // // console.log (year)

// // // // // console.log (month(year[0]))

// // // // // const shop = ["Samsung S1","Samsung S2","Samsung S3","Samsung S22 Ultra", "Iphone X","Iphone 14 Pro Max","Redmi S10","Redmi 10 Pro"]
// // // // // console.log (shop)

// // // // // console.log (shop[0])

// // // // // const dokon = shop[1];

// // // // // switch (dokon) {
// // // // //   case "Samsung S1":
// // // // //     console.log("Hajmi kichikroq va arzon");
// // // // //     console.log("Narxi 70$");
// // // // //     break;
// // // // //   case "Samsung S2":
// // // // //     console.log("Samsung S1ga qaraganda yaxshiroq");
// // // // //     console.log("ammo biroz qimmat");
// // // // //     console.log("Narxi 90$");
// // // // //     break;
// // // // //   case "Samsung S3":
// // // // //     console.log("Kamera tiniq va yaxshi ishlaydi");
// // // // //     console.log("Narxi 110$");
// // // // //     break;
// // // // //   case "Samsung S22 Ultra":
// // // // //     console.log("Samsung telefonlari orasida eng yaxshisi");
// // // // //     console.log("Kamerasi 108mp va juda tiniq");
// // // // //     console.log("Suvdaham ishlay oladi");
// // // // //     console.log("Narxi 1400$");
// // // // //     break;
// // // // //   case "Iphone X":
// // // // //     console.log("Samsung ga qaraganda farq qiladi");
// // // // //     console.log("Narxi qimmat ammo yaxshi ishlaydi");
// // // // //     console.log("Narxi 200$");
// // // // //     break;
// // // // //   case "Iphone 14 Pro Max":
// // // // //     console.log("Iphone telefonlari orasida eng yaxshisi");
// // // // //     console.log("Kamerasi 108mp va juda tiniq");
// // // // //     console.log("Suvdaham ishlay oladi");
// // // // //     console.log("Narxi 1500$");
// // // // //     break;
// // // // //   case "Redmi S10":
// // // // //     console.log("Samsung va Iphonedan juda arzon va yaxshi ishlaydi");
// // // // //     console.log("Narxi 80$");
// // // // //     break;
// // // // //   case "Redmi 10 Pro":
// // // // //     console.log("S10 ga qaraganda yaxshiroq va narxi qimmatroq");
// // // // //     console.log("Narxi 120$");
// // // // //     break;
// // // // // }

// // // // //  const phones = [
// // // // //   'Samsung S1',
// // // // //   'Samsung S2',
// // // // //   'Samsung S3',
// // // // //   'Samsung S22 Ultra',
// // // // //   'Iphone X',
// // // // //   'Iphone 14 Pro Max',
// // // // //   'Redmi S10',
// // // // //   'Redmi 10 Pro',
// // // // // ];
// // // // // console.log(phones);

// // // // // console.log(phones[0]);
// // // // // const infoOfPhones = (nameOfPhone) => {
// // // // //   switch (nameOfPhone) {

// // // // //       case 'Samsung S1':
// // // // //           return 'Hajmi kichikroq va arzon, narxki 70$';

// // // // //       case 'Samsung S2':
// // // // //           return 'Samsung S1ga qaraganda yaxhsiroq, ammo biroz qimmat, narxi 90$';

// // // // //       case 'Samsung S3':
// // // // //          return 'Kamera tiniq va yaxshi ishlaydi Narxi 110$';

// // // // //       case 'Samsung S22 Ultra':
// // // // //          return 'Samsung telefonlari orasida eng yaxshisi Kamerasi 108mp va juda tiniq. Suvdaham ishlay oladi. Narxi 1400$';

// // // // //       case 'Iphone X':
// // // // //       return    'Samsung ga qaraganda farq qiladi Narxi qimmat ammo yaxshi ishlaydi Narxi 200$';

// // // // //       case 'Iphone 14 Pro Max':
// // // // //         return  'Iphone telefonlari orasida eng yaxshisi Kamerasi 108mp va juda tiniq Suvdaham ishlay oladi   Narxi 1500$';
// // // // //       case 'Redmi S10':
// // // // //       return  'Samsung va Iphonedan juda arzon va yaxshi ishlaydi Narxi 80$';

// // // // //       case 'Redmi 10 Pro':
// // // // //       return 'S10 ga qaraganda yaxshiroq va narxi qimmatroq Narxi 120$';
// // // // //   }
// // // // // };

// // // // // console.log(infoOfPhones('Redmi 10 S'));

// // // // const friends = ['Rowan', 'Bob', 'Tom'];

// // // // const displayMyFriends = (friend) => {

// // // // console.log (friends[1])

// // // //   }

// // // // if (friend == Rowan) {
// // // // return 'Rowan sizning dostingiz'
// // // // }
// // // // else if (Bob) {
// // // //   return  'Bob sizning dpostingiz'
// // // // }

// // // // else if (Tom) {
// // // //   return 'Tom sizning dostingiz'
// // // // }
// // // // else {
// // // // return 'sizning dostingiz emas'
// // // // }

// // // // const Mark = ["Mark"];
// // // // const Markinfo = [1.69, 78];
// // // // const John = ["John"];
// // // // const Johninfo = [1.95, 92];

// // // // const MarkBMI = Markinfo[1] / Markinfo[0] ** 2;
// // // // const JohnBMI = Johninfo[1] / Johninfo[0] ** 2;

// // // // const calcBMI = (calc) => {
// // // //   if (calc === "Mark") {
// // // //     return `${Mark}ning BMI = ${MarkBMI}`;
// // // //   } else if (calc === "John") return `${John}ning BMI = ${JohnBMI}`;
// // // //   else return `Bu malumot mavjud emas. Siz kiritgan ism ${calc} `;
// // // // };



// // // // const compareBMI = () => {
// // // //   if (MarkBMI > JohnBMI) {
// // // //     return `${Mark}ning BMI katta`;
// // // //   } else if (MarkBMI < JohnBMI) {
// // // //     return `${John}ning BMI katta`;
// // // //   } else return `BMIlar teng.`;
// // // // };
// // // // console.log(calcBMI("John"));
// // // // console.log (compareBMI())

// // // ///////////////////////////////////////
// // // // Basic Array Operations (Methods)

// // // const displayMyFriends = (friend, friendsArray) => {
// // //     // agar men kiritgan ism freidns listida bo'lsa menga tog'ri javobni qaytar bolmasa xato javobni qaytar
  
// // //     //friend == 'Rowan' || friend == 'Bob' || friend == 'Tom'
  
// // //     if (friendsArray.includes(friend)) {
// // //       return `Siz kiritgan isim (${friend}) do'starlingiz qatorida bor va u sizning do'stingiz 😁`;
// // //     } else {
// // //       return `Afsuski siz kiritgan ism (${friend}) do'starlaringiz qatorida yo'q 😞`;
// // //     }
// // //   };
  
// // //   const friends = ['Rowan', 'Bob', 'Tom'];
// // //   const friend2 = ['Rowan', 'Bob', 'Tom'];
// // //   friends.push('Maksim');
  
// // //   friends.shift();
// // //   console.log(friends);
  
// // //   console.log(displayMyFriends('Rowan', friends));
  
// // //   // console.log(displayMyFriends('Nodir'));
// // //   // console.log(displayMyFriends('Rowan'));
  
// // //   // Coding Challenge #1
// // //   // 1. TestDatalarga hammasiga alohida array yarating.
// // //   // 2. calcBMI degan funksita yaratasizlar.
// // //   // 3. compareBMI degan funksita yaratib ikkalar shaxsning chiqqan javobini solishtirasizlar.
  
// // //   // TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
  
// // //   // TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
  
// // //   // calcBMI(boyi, ogirligi) // javob!
  
// // //   // compareBMI(shaxs1, shaxs2) // Shaxs1ning BMIyi Shaxs2ning BMIyidan og'ir.
  
  
  
// // //   ////////////////////////////////////
// // //   // Introduction to Objects
  
// // //   'rustam';
// // //   const firstName = 'rustam';
  
// // //   const rustamArray = [
// // //     'Rustam',
// // //     'Tolipov',
// // //     2022 - 2001,
// // //     'programmer',
// // //     'part-time teacher',
// // //     ['Bob', 'Max', 'Steven'],
// // //   ];
  
  
// // //   const rustamObject = {
// // //     firstName: 'Rustam',
// // //     lastName: 'Tolipov',
// // //     age: 2022 - 2001,
// // //     job: 'programmer',
// // //     partTimeJob: 'teacher',
// // //     firends: ['Bob', 'Max', 'Steven'],
// // //   };
  
// // //   ///////////////////////////////////////
// // //   // Dot vs. Bracket Notation
  
// // //   console.log(rustamArray[2]);
// // //   console.log(rustamArray[5]);
  
// // //   console.log(rustamObject);
// // //   console.log(rustamObject.job);
// // //   console.log(rustamObject.firends);
  
// // //   console.log(rustamObject['partTimeJob']);
// // //   console.log(rustamObject['age']);
  
// // //   const nameKey = 'Name';
  
// // //   console.log(rustamObject['first' + nameKey])
// // //   console.log(rustamObject['last' + nameKey])
  
// // //   const insterestedIn = prompt(
// // //     'What do you want to know about Rustam? Choose between firstName, lastName, age, job, partTimeJob, firends'
// // //   );
  
// // //   console.log(insterestedIn);
  
// // //   if (rustamObject[insterestedIn]) {
// // //     console.log(rustamObject[insterestedIn]);
// // //   } else {
// // //     console.log(
// // //       'Wrong request! Choose between firstName, lastName, age, job, partTimeJob, firends'
// // //     );
// // //   }
  
// // //   rustamObject.location = 'Kokand';
// // //   rustamObject['telegram'] = 'RustambekTolipovDev';
  
// // //   console.log(rustamObject)
  
  
// // //   // Challenge
  
// // //   const rustamObject = {
// // //     firstName: 'Rustam',
// // //     lastName: 'Tolipov',
// // //     age: 2022 - 2001,
// // //     job: 'programmer',
// // //     partTimeJob: 'teacher',
// // //     firends: ['Bob', 'Max', 'Steven'],
// // //   };
  
// // //   // "Rustam has 3 friends, and his best friend is called Max"
// // //   console.log(
// // //     `${rustamObject.firstName} has ${rustamObject.firends.length} friends, and his best friend is called ${rustamObject.firends[1]}`
// // //   );
// // //   */
  
// // //   ////////////////////////////////////
// //   // Object Methods
  
//   const rustamObject = {
//     firstName: 'Rustam',
//     lastName: 'Tolipov',
//     birthYear: 2001,
//     job: 'programmer',
//     partTimeJob: 'teacher',
//     firends: ['Bob', 'Max', 'Steven'],
//     hasDriverLicense: false,
  
//     // calcAge: function (birthYear) {
//     //   return 2022 - birthYear;
//     // },
  
//     // calcAge: function () {
//     //   // this
//     //   // console.log(this.birthYear);
//     //   return 2022 - this.birthYear;
//     // },
  
//     calcAge: function () {
//       this.age = 2022 - this.birthYear;
//       return this.age;
//     },
  
//     getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${
//         this.job
//       }, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
//     },
//   };
//   console.log(rustamObject.calcAge());
  
//   console.log(rustamObject.age);
//   console.log(rustamObject.age);
//   console.log(rustamObject.age);
  
//   // Rustam is a 21-year old programmer, and he has no driver's license.
  
//   console.log(rustamObject.getSummary());
  
//   ///////////////////////////////////////
//   // Coding Challenge #3
  
//   /*
//   Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
  
//   1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
//   2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
//   3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
//   TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
  
//   GOOD LUCK 😀
//   */
  
//   // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// //   const markMiller = {
// //     fullName: 'Mark Miller',
// //    height: 1.69,
// //    mass: 78
// // }  

// // const johnSmith = {
// //  fullName: 'John Smith',
// //  height: 1.95,
// //  mass: 92
// // }
// // const mBMI = markMiller.mass/markMiller.height**2; 
// // const jBMI = johnSmith.mass/johnSmith.height**2
// // const calcBMI = (calc) =>{
// //  if(calc==`${markMiller.fullName}`){
   
// //    return `${markMiller.fullName}ning BMI ${mBMI}`;
// //  }
// //  else
// //  if(calc==`${johnSmith.fullName}`){
  
// //    return `${johnSmith.fullName}ning BMI ${jBMI} `;
// //  }
// //  else
// //  return `ERROR`
// // }

// // const compareBMI = () =>{
// //     if(mBMI>jBMI){
// //       return`${markMiller.fullName}ning BMI${mBMI} ${johnSmith.fullName}ning BMI(${jBMI})dan kattaroq`;
// //     }
// //     else if(mBMI<jBMI){
// //       return`${johnSmith.fullName}ning BMI(${jBMI}) ${markMiller.fullName}ning BMI(${mBMI})dan kattaroq`;
// //     }
// //     else return`BMIlar teng`;
// //  }

// //  console.log(calcBMI('Mark Miller'));
// // console.log(calcBMI('Mark'));
// // console.log (calcBMI('John Smith'))
// // console.log(compareBMI())