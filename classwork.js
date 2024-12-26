//wap to add two numbers using function

function add(num1, num2) {
    num1=10;
    num2=5;
    let num3=num1+num2;

    console.log(num3);

}

add();

//wap to print a table of any number using function

function printTab(num) {
    num=2;
    for(let i=1;i<=10;i++) {
        console.log(num + " * " + i + " = " + num*i);
    }
}
printTab();

//wap to take a number from user and print its table using function

function printTable() {
    let numb=parseInt(prompt("Enter a number:"));
    for(let i=1;i<=10;i++) {
        console.log(numb + " * " + i + " = " + numb*i);
    }
}
printTable();

// wap to take a input from the user 
//if number is between 11-20 then print
//1 to of that given number
//if number is between 1-10 then print 15 to 1

function inputuser(){
    let num=parseInt(prompt("Enter a number:"));
    if(num>=11 && num<=20){
        for(let i=1;i<=num;i++){
            console.log(i);
        }
    }
    else if(num>=1 && num<=10){
        for(let i=15;i>=1;i--){
            console.log(i);
        }
    }
    else{
        console.log("Number is not between 1 and 20");
    }
}

inputuser();

////wap to print sum of all numbers between 1-12