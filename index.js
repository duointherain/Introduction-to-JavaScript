/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


const votingAge = 18;

if(votingAge > 18){
  console.log(true);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

const vOne = 1;
const vTwo = 2;

if (vOne < vTwo){
    vOne = "Heero";
    console.log (vOne);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let vThree = parseInt("1900", 10);
console.log (vThree);



//Task d: Write a function to multiply a*b 

function multi(factor1, factor2) {
    return factor1*factor2;
    
    
    
  }
  let total = (multi(1, 2));
  console.log (total);
  



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let yourAge = 54;


function dogYears() {
  return yourAge*7;
  
}
let age = (dogYears());
console.log (age);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
//Two percent of 15, is .3, so I'm right. The dog would need to be a little under 25 pounds for 2% to be .49

let petAge = 0;
let petPounds = 0;
let petFood = 0;
let petMonth = 0;




function perDay(petAge, petPounds) {
  if (petAge >= 1 && petPounds < 5){
    petFood = petPounds*.05;
    return petFood;
  }
  
    else if (petAge >= 1 && petPounds > 6 && petPounds < 10){
       petFood = petPounds*.04;
       return petFood;
    }
  
    else if (petAge >= 1 && petPounds >11 && petPounds < 15){
       petFood = petPounds*.03;
       return petFood;
    }
  
    else if(petAge => 1 && petPounds >= 15){
       petFood = petPounds*.02;
       return petFood;
    }
    else if(petAge => 0.167 && petAge < 0.333){
       petFood = petPounds*.1;
       return petFood;
    }
   else if(petAge => 0.333 && petAge < 0.583){
       petFood = petPounds*.05;
       return petFood;
     }
   else if(petAge => 0.583 && petAge < 1){
       petFood = petPounds*.04;
       return petFood;
     }
    else 
      return 'please re-enter your numbers';
}

 console.log(perDay(1, 25));




//************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function kakashi(kakashi) {
 
  
    //get random comp selection
     let guy = Math.random();
     if (guy < 0.34) {
       guy = "rock";
     } else if (guy <= 0.67) {
       guy = "paper";
     } else {
       guy = "scissors";
     }
     
     //compare user to computer
     if (kakashi === guy) {
       return "It's a tie!";
     } else if (kakashi === "rock") {
       if (guy === "paper") {
         return "Guy Sensie wins!";
       } else {
         return "Kakashi Sensei wins!";
       }
     } else if (kakashi === "paper") {
       if (guy === "scissors") {
         return "Guy Sensei wins!";
       } else {
         return "Kakashi Sensei wins!";
       }
     } else if (kakashi === "scissors") {
       if (guy === "rock") {
         return "Guy Sensei wins!";
       } else {
         return "Kakashi Sensei wins!";
       }
     }
     console.log(guy);
     console.log(kakashi);
     
   }
     
   kakashi("paper")
   console.log(kakashi("paper"))
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


function kmToMiles(k){
    let kM = k/1.609344
    console.log ("You have " + kM + " miles.")
  
  
}


kmToMiles(10);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function feetToCM(f){
    let cM = f*30.48
    console.log ("You have " + cM + " cm.")
  
  
}


feetToCM(10);


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
let bot = 0;

function annoyingSong(bot){
  for (i = 99; i > 0; i--) {
   console.log(`There are  ${i}   bottles on the wall wall, take one down and pass it around and there are ${i-1}   left on the wall.`)
 }
 }
 annoyingSong(5);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





