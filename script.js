function stringCompare(){
    var string1 = "Justin";
    var string2 = "Dormitzer";
    if (string1 == string2){
        alert("These strings are identical!");
    }
    else{
        alert("These strings are not identical");
    }
}

function numberCompare(){
    var number1 = 4;
    var number2 = 6;
    if (number1 == number2){
        alert("These numbers are identical");
    }
    else if(number1 > number2){
        alert("Number 1 is greater than Number 2");
    }
    else{
        alert("Number 2 is greater than Number 1");
    }
}

function functionCombine(){
    var str1 = "Justin";
    var str2 = "Dormitzer";
    console.log(str1 + str2)
}

function functionConditions(num){
    if (num == 1){
      return "Justin";
    }
    else if (num == 2){
      return "Dormitzer";
    }
    else{
      return "Thats my whole name :(";
  }
}

function randomWords(){
    var Array = ["Justin", "Dormitzer", "Paul", "Frank", "Spring", "Debbie"];
    var randomIndex = Math.floor( Math.random() * secondArray.length );
    console.log(randomIndex);
}