//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

//პასუხი

// function retirementCal(currentAge, retirementAge, lifeExpectancy)  {
//     if(currentAge == retirementAge) {
//         console.log('თქვენ უკვე პენსიონერი ბრძანდებით');
//     }else if(currentAge <= retirementAge) {
//         const yearsUntillRetirement = retirementAge - currentAge;
//         console.log('პენსიამდე დარჩენილი გაქვთ ' +  yearsUntillRetirement + ' წელი');
//     }else {
//         const yearsInRetirement = lifeExpectancy - retirementAge;
//         console.log('პენსიაზე ხართ უკვე ' + yearsInRetirement + ' წელია');
//     }
// };

// const currentAge = '26';
// const retirementAge = '65';
// const lifeExpectancy = '85';

// retirementCal(currentAge, retirementAge, lifeExpectancy);

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

//პასუხი

// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if(num2 !== 0) {
//                 return num1 / num2;
//             }else {
//                 console.log('შეუძლებელია გაიყოს ნულზე');
//             };
//         default:
//             console.log('ოპერატორი ვერ მოიძებნა');
//     }
// }

// const result = calculator(26, 18, '+');
// console.log('შედეგი: ' + result);

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

//პასუხი

// function checkPasswordStrength(password) {
//     if(password.length < 8) {
//         return 'გაფრთხილება: პაროლი ძალიან მოკლეა, ის უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს';
//     }else if(password.length > 16) {
//         return 'გაფრთხილება: პაროლი ძალიან გრძელია, ის უნდა შეიცავდეს მაქსიმუმ 16 სიმბოლოს';
//     }else if(password === '') {
//         return 'გართხილება: პაროლის ველი ცარიელია';
//     }else {
//         return 'შეყვანილი პაროლი აკმაყოფილებს პირობებს';
//     }
// }

// const password1 = 'giorgi';
// console.log(checkPasswordStrength(password1));

// const password2 = 'giorgitskhovrebashvili';
// console.log(checkPasswordStrength(password2));

// const password3 = '';
// console.log(checkPasswordStrength(password3));

// const password4 = 'giorgi123';
// console.log(checkPasswordStrength(password4));

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

//პასუხი

// function findFlower(floverType) {
//     switch (floverType) {
//         case 'ვარდი':
//             console.log('ეს ყვავილი ნაპოვნია');
//             break;
//         case 'გვირილა':
//             console.log('ეს ყვავილი ნაპოვნია');
//             break;
//         case 'ქრიზანთემა':
//             console.log('ეს ყვავილი ნაპოვნია');
//             break;
//         case 'იასამანი':
//             console.log('ეს ყვავილი ნაპოვნია');
//             break;
//         case 'მიხაკი':
//             console.log('ეს ყვავილი ნაპოვნია');
//             break;
//         case 'ზამბახი':
//             console.log('ეს ყვავილი ნაპოვნია');
//             break;
//         default:
//             console.log('ეს ყვავილი არ მოიძებნა');
//             break;
//     }
// }

// findFlower('იასამანი');

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

//პასუხი

// function findLargestNumber() {
//     const num1 = parseFloat(prompt('შეიყვანეთ პირველი რიცხვი'));
//     const num2 = parseFloat(prompt('შეიყვანეთ მეორე რიცხვი'));
//     const num3 = parseFloat(prompt('შეიყვანეთ მესამე რიცხვი'));

//     if(num1 >= num2 && num1 >= num3) {
//         console.log('ეს რიცხვი არის უდიდესი ' + num1);
//     }else if (num2 >= num1 && num2 >= num3) {
//         console.log('ეს რიცხვი არის უდიდესი ' + num2);
//     }else {
//         console.log('ეს რიცხვი არის უდიდესი ' + num3);
//     }
// }

// findLargestNumber();