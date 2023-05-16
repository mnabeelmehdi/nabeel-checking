let basicSalary = Number(prompt("Enter Your Home Expenses"))
const tex=basicSalary * 3/100
const interest=basicSalary * 5/100
const paint=basicSalary* 10/100
const goodwill=basicSalary * 2/100

let sum=basicSalary + tex + interest + paint - goodwill
console.log(sum);


if(sum=>10000  || sum<20000){
    let a  = sum*10/100
    console.log("Your Eidi For this season is Rs." + a);
} 
else if(sum=>20001 || sum<40000){
    console.log("Your Eidi For This Season Is  Rs." + a);

}

else if(sum=>40001 || sum>60000){
    console.log("Your Eidi For This Season Is  Rs." + a);
}
else if(sum=>60001 || sum>80000){
    console.log("Your Eidi For This Season Is  Rs." + a);
}
else if(sum=>80001 || sum>100000){
    console.log("Your Eidi For This Season Is  Rs." + a);
}




// console.log(window);