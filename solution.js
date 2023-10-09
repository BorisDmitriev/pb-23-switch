// write your code here
//1
const color = "blue";

switch(color){
    case "red": 
        console.log("Q1: Red's a great color on you.");
        break;
    case "blue": 
        console.log("Q1: Blue? Great choice.");
        break;
    case "green": 
        console.log("Q1: Ok. Green it is.");
        break;
    case "yellow": 
        console.log("Q1: Not what I would have picked, but yellow is fine.");
        break;
    default:
        console.log("Q1: The aim of the game is to pick a color.");    
}


//2
const grade = "A";
switch(grade) {
    case "A":
        console.log("Q2: A - Well done!");
        break;
    case "B":
        console.log("Q2: B - Good on you!");   
        break;
    case "C":
        console.log("Q2: C - Good effort");
        break;
    case "D":
        console.log("Q2: D - Try harder next time...");   
        break;  
    default:
        console.log("Q2: Yikes...");       
}

//3
const fruit = "apple";
switch(fruit){
    case "apple":
        console.log("Q3: An apple a day keeps the doctor away.");
        break;
    case "banana":
        console.log("Q3: Bananas are full of potassium.");
        break;
    case "orange":
        console.log("Q3: Yep, oranges. Great choice.");
        break;
    case "strawberry":
        console.log("Q3: Mmmm...nothing better than strawberries.");
        break;
    default:
        console.log("Q3: PICK A FRUIT");

}

//4
const percentageComplete = 20;
if( percentageComplete<=30 ) console.log("Q4: Still a long way to go");
if( percentageComplete>30 && percentageComplete<50 ) console.log("Q4: Slowly getting there");
if( percentageComplete>=51 && percentageComplete<=80 ) console.log("Q4: You can do it!");
if( percentageComplete>=81 && percentageComplete<=99 )  console.log("Q4: This is the last push!");
else console.log("Q4: You're there. Well done!");  

//Bei switch wird exact ein Wert abgefragt
//Bei if else kann die bedingung beliebig komplex sein




