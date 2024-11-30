function dropdownMenu() {
    var x = document.getElementById("dropdownclick");
    if (x.className === "topnav") {
        x.className += " responsive";
        // change topnav to topnav.responsive 
    } else {
        x.className = "topnav";
    }
}




var accountbalance = 50;
var iphone = 600;
var coupon = 200;

if (iphone <= accountbalance) {
    console.log("Transaction successful");
    accountbalance = accountbalance - iphone;
    console.log("Account balance: " + accountbalance);
} 
else if (iphone <= accountbalance + coupon) {
    console.log("Transaction successful with coupon");
    accountbalance = (accountbalance + coupon) - iphone;
    console.log("Account balance: " + accountbalance);
} 
else {
    console.log("Insufficient funds");
}



var cat2 = 5;
var cat3 = 9;
var cat4 = 7
var HandiCap = 20;

if (cat2 > cat3 && cat2 > cat3 && !HandiCap) {
    console.log("Cat 2 is the cutest");
} else if (cat3 > cat2 && cat3 > cat4 && !HandiCap){
    console.log("Cat 3 is the cutest");
} else if (cat4 > cat2 && cat4 > cat3 || HandiCap){
    console.log("Cat 4 is the cutest")
}


// var students = ["Ayo","Gbenga","David"];
// var naughtyList = [];
// naughtyList.push(students[0]);
// console.log(naughtyList);

// var index = naughtyList.indexOf("Ayo");
// console.log(naughtyList)
// if (index > -1) {
//     naughtyList.splice(index, 1);
// }
// console.log(naughtyList)















// var users = ["iOS", "Android", "Mac"];
// var best = [];
// best.push(users[0]);
// console.log(best);
// var predex = best.indexOf("iOS");
// if (predex > -1) {
//     best.splice(predex, 1);
// }
// console.log(best);



// var dogs = ["rack", "bam", "track"];
// var baddogs = [];
// baddogs.push(dogs[0]);
// console.log(baddogs);
// var pindex = baddogs.indexOf("rack");
// if (pindex > -1) {
//     baddogs.splice(pindex, 1);
// }
// console.log(baddogs);

// var total = 10;
// for (var x = 0; x < total; x++) {
//     console.log(x);
// }


// function area(length, width) {
//     return length * width;
// }
// var rectangle = [];
// rectangle.push(area(5,4));
// rectangle.push(area(25,24));
// rectangle.push(area(55,84));
// rectangle.push(area(65,4));
// console.log(rectangle);





// var bankBalance = 500;
// function maketransaction(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Transaction successful");
//     } else {
//         console.log("Insufficient funds");
//     }
// }

// console.log(bankBalance);
// maketransaction(5.20);

// console.log(bankBalance);
// maketransaction(20);

// console.log(bankBalance);
// maketransaction(480);


// var Transaction = function(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Transaction successful");
//     } else {
//         console.log("Insufficient funds");
//     }
// };

// var printcustomername = function(first, last) {
//     console.log("First name: " + first + " Last name: " + last)
// }
// var applyforcreditcard = function(creditscore, soul) {
//     // call some function here
// }


// var bankoperations = []
// bankoperations.push(Transaction);
// bankoperations.push(printcustomername);
// bankoperations.push(applyforcreditcard);

// var students = [];

// function Student0(first, last, age) {
//     this.firstname= first,
//     this.lastname= last,
//     this.age= age,
//     this.greeting= function() {
//         return "Hi, I'm " + this.firstname + " and I'm " + this.age + " years old";
//     }
// };

// students.push(new Student0("ack", "bark", 7));
// students.push(new Student0("dade", "carl", 8));
// students.push(new Student0("henry", "park", 7));

// var student0 = students[0];
// for (var key in student0) {
//     console.log(student0[key]);
// }

// for (var redex = 0; redex < students.length; redex++) {
//     var student0 = students[redex];
//     console.log(student0.greeting());
//     console.log(student0);
// }





// var s1 = new student0("Park", "Jack", 9);
// console.log(s1);
// console.log(s1.greeting());

// console.log(student.lastname);

// var student1 = new Object();
// student1.firstname = "Zack";
// student1.lastname = "Bobo";
// student1.age = 8;

// var student2 = {};
// student2.firstname = "Black";
// student2.lastname = "Occlae";
// student2.age = 5;


// var pupils = [];
// pupils.push(student0);
// pupils.push(student1);
// pupils.push(student2);


// this.car = "Honda civic";

// var Mycar = {
//     car: "Aston matin",
//     garage: function() {
//         return this.car;
//     }
// }
// console.log(Mycar.garage());

// var storemycar = Mycar.garage();
// console.log(storemycar);
















