// for (int i = 1; i <= n; i++) {
//     for (int j = 1; j <= n; j++) {
//         System.out.print("*");
//     }
//     System.out.println();  
// }
// System.out.println("woff");

// const fun=()=>{
//     let n=10;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         process.stdout.write("*");
//     }
//     console.log();  
// }
// }

// fun()
// pa = parameters
// ag = arguments

//  Map , find , filter , concat , slice , splice , reduce 

// console.log(name1.length);
// console.log(numb.length);

// splice
// name1.splice(3,1,"parker")
// console.log(name1);

//  slice
// let slicing = name1.slice(2,7)
// console.log(slicing);

// // concat
// let concatinate = name1.concat(numb)
// console.log(concatinate);
// // 
// // filter//
// let filtered =name1.filter((pa)=>{
    
// //     return pa.length > 5
// // })
// // console.log(filtered);
// // let filtnum = numb.filter((par)=>par>200)
// // console.log(filtnum);
// // // map
// // let maping = name1.map((p)=>{
// //     console.log(p);
// // })
// // // find
// // let finding = name1.find((pa)=>pa.length>3)
// // console.log(finding);

// // let findnum= numb.find((pa)=>pa<200)

// // console.log(findnum);

// let name1 = ['aaron','brenden','charles','darran','erik',"parker",'fred','george','huge','ipkis','jefry','karan','luis']
// let numb = [110,125,105,665,745,254,485,216,348]

// let fun =name1.find((ag)=>{
//   return  ag.indexOf("parker")
     
// })

// //console.log(fun);
// let mark =80;
// let grade;

// switch (mark) {
//     case 90:
//         grade ="A"
//         break;
//     case 80:
//          grade ="B"
//         break;
//     case 70:
//          grade ="C"
//         break;
//     case 60:
//          grade ="D"
//         break;
//     case 50:
//          grade ="E"
//         break;
//     case 40:
//          grade ="F"
//         break;
//     default:
//         grade ="Fail"
//         break;
//     }
// console.log(grade);

// let day = 3;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log(dayName); // Output: Wednesday

// console.log(1);
// setTimeout(() => {
//     console.log(3);
// }, 1000);
// console.log(2);
// console.log(2);
// console.log(2);
// console.log(setTimeout(() => {
//     console.log(3);
// }, 500));
// console.log(2);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 200);
// console.log(2);

// setInterval(() => {
    
// }, interval);

// let array =[{

//     name : "parker",
//     age : 26
// },{
//     name : "lourdez",
//     age : 24
// },{
//     name : "rubun",
//     age : 25
// }]

// let api = fetch("https://fakestoreapi.com/products/")
// .then((data)=>{
//    return data.json()    
// })
// .then((da)=>{
//     console.log(da)
    
// })
// .catch((Exception)=>{
//     console.log(Exception);
    
// })  

// const ap = async ()=>  {
//     let re = await fetch("https://fakestoreapi.com/products/")

//     let data = await re.json

//     console.log(data);
    
// }

// ap()



// var a ={
//     name : "parker",
//     age:25
// } 
// // non primitive data type will be stored in heap memory 

// //var b = a // js engine won't create a  new object with same value in the heap memory , will be referd with reference (call by reference)
// var b={...a}
// b.age= 20 // replace the value of a age in the object  value

// console.log(a); 
// console.log(b);


var aa = {
    name: "parker",
    age: 25,
    address: {
        street: "street1",
        city: "city1",
    }
}
 
let bb = JSON.parse(JSON.stringify(aa))

bb.age = 24
bb.address.street = "main street"
bb.address.city = "chennai"

console.log(aa);
console.log(bb);

