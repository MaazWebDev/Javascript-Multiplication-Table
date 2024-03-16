let table = +prompt("Enter a number for multiplication ");
let tablelength = +prompt("Enter the length for table ");

let flag = false;

document.write("<h1>The lenght of the table is ", tablelength ,"</h1>")

if(isNaN(table) || isNaN(tablelength)){
    document.write("<h2>Please enter a valid number</h2>")
}
else{
    for(let i = 1; i<=tablelength; i++){
        document.write("<h2>", table , "x" , i , "=" , table * i ,"</h2>");
    }
}