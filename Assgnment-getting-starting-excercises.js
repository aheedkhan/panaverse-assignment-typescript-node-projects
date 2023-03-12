


// /////////////////////////////////////----------Assgnment-getting-starting-excercises------//////////////////////////////////////////////////////////////////////


////////////-------------------------------------------------Aheed Tahir Khan-------------------------------------------///////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.Personal Message: Store a person’s name in a variable, and print a message 
// to that person. Your message should be simple, such as, “Hello Eric, would you 
// like to learn some Python today?”

let personName = 'aheed'
console.log("Hello" + personName + ", would you like to learn some js today?" )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name 
// in lowercase, uppercase, and titlecase

let personN = prompt('Enter your name:')
let uppercasing = personN.toUpperCase()
let lowercasing = personN.toLowerCase()

let firstChar = (personN.charAt(0)).toUpperCase()
let remainingName = (personN.slice(1,personN.length)).toLocaleLowerCase()

console.log('In lowercase:' + lowercasing)
console.log('In uppercase:' + uppercasing)
console.log('In titlecase:' + firstChar+remainingName)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.Famous Quote: Find a quote from a famous person you admire. Print the quote and 
// the name of its author. Your output should look something like the following, 
// including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log('Itachi Uchiha once said: "Where should i go, to the left where nothing is right or to the right where nothing is left?"')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s 
// name in a variable called famous_person. Then compose your message and store it in 
// a new variable called message. Print your message.

let famous_person = 'Itachi Uchiha'
let message = '"Where should i go, to the left where nothing is right or to the right where nothing is left?"'
console.log(famous_person + ' once said: ' + message)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6.Stripping Names: Store a person’s name, and include some whitespace characters at the 
// beginning and end of the name. Make sure you use each character combination, "\t" and "\n", 
// at least once. Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.


let whitespaceName = '    Aheed  .....................  Tahir    .................    Khan    ......'
let whitespaceNameRemoved = whitespaceName.replace(/\s/g,'')
console.log(whitespaceNameRemoved)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
// 8. You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.


console.log(4+4)
console.log(8-4)
console.log(2*2)
console.log(16/4)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9.Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.

let favNumber = 420
console.log('my fav number is: '+ favNumber)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence 
// describing what the program does.

let personNameq = 'aheed'                 //assigning 'aheed' which is a string to a variable called personNameq which.//
console.log("Greetings" + personName )    //printing greeting message to personName variable

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11.Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

var nameOfFriends = ['aheed','aurad','lubaiad','abdulwahab','qasim']
console.log(nameOfFriends[0])
console.log(nameOfFriends[1])
console.log(nameOfFriends[2])
console.log(nameOfFriends[3])
console.log(nameOfFriends[4])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be personalized 
// with the person’s name.

var nameOfFriends = ['aheed','aurad','lubaiad','abdulwahab','qasim']
console.log('Greetings ' + nameOfFriends[0])
console.log('Greetings ' + nameOfFriends[1])
console.log('Greetings ' + nameOfFriends[2])
console.log('Greetings ' + nameOfFriends[3])
console.log('Greetings ' + nameOfFriends[4])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements 
// about these items, such as “I would like to own a Honda motorcycle.”


let statementsAboutMotorcycle = [ 'you should wear a helmet while riding on ' ,'its so fun to ride on ' , 'i enjoy a rainny day while riding my'   ]
let favTransport = 'motorcycle'

for (let i = 0; i < statementsAboutMotorcycle.length; i++) {
    console.log(statementsAboutMotorcycle[i]+ ' ' + favTransport)
    
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list 
// that includes at least three people you’d like to invite to dinner. Then use your list to print a message 
// to each person, inviting them to dinner.


let guestList = ['aheed', 'lubaid','aurad','abdulwahab','qasim']



for (let i = 0; i < guestList.length; i++) {
 
   console.log(guestList[i]+ ' ' + ',Your are invited at party!!!!')

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList1 = ['aheed', 'lubaid','aurad','abdulwahab','qasim']



for (let i = 0; i < guestList1.length; i++) {
 
   console.log(guestList1[i]+ ' ' + ',Your are invited at party!!!!')

}

var golibazGuest = Math.floor(Math.random() * guestList1.length)


console.log('the following guest ' + guestList1[golibazGuest] +' cant come to party due to work reasons')



guestList1.splice(golibazGuest,1,'saad')

console.log('new list')
for (let i = 0; i < guestList1.length; i++) {
 
    console.log(guestList1[i])
 
 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
//  • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//  • Add one new guest to the beginning of your array.
//  • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list. 
//  • Print a new set of invitation messages, one for each person in your list.

let guestList11 = ['aheed', 'lubaid','aurad','abdulwahab','qasim']



 console.log('As we have found a bigger table, We are inviting some additional guests to party!!!')
guestList11.unshift('abraz')
guestList11.push('saad')
var middleOfArray = (guestList11.length)/2
guestList11.splice(middleOfArray,0,'hasaan')

console.log('new guest list')

for (let i = 0; i < guestList11.length; i++) {
 
    console.log(guestList11[i]+ ' ' + ',Your are welcome at party!!!!')
 
 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. 
//  • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//  • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//    print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//  • Print a message to each of the two people still on your list, letting them know they’re still invited.
//  • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of 
//your program.

let guestList12 = ['aheed', 'lubaid','aurad','abdulwahab','qasim']



 console.log('As we have found a bigger table, We are inviting some additional guests to party!!!')
guestList12.unshift('abraz')
guestList12.push('saad')
var middleOfArray = (guestList12.length)/2
guestList12.splice(middleOfArray,0,'hasaan')

console.log('new guest list')

for (let i = 0; i < guestList12.length; i++) {
 
    console.log(guestList12[i]+ ' ' + ',Your are welcome at party!!!!')
 
 }


 console.log('We are sorry to say, there is a mismanagement at party and some of guest will pop out of guest list. Kindly check new guest list below')

 for (let i = guestList12.length ; i > 2; i--) {
   
   console.log(guestList12['pop'](i)+ ' ' + ',sorry to say your name has been poped out of guest list')
   
}
console.log('New list')
for (let i = 0; i < guestList12.length; i++) {
 
   console.log(guestList12[i]+ ' ' + ',Your are still welcome at party!!!!')

}

for (let i = guestList12.length ; i > 0 ; i--) {
   
   console.log(guestList12['pop'](i)+ ' ' + ',sorry to say your name has been poped out of guest list')
   
}

console.log(guestList12)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18. Seeing the World: Think of at least five places in the world you’d like to visit. 
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit =  ['Madina','jurresalam','Makkah']

console.log('Original order : ' + placesToVisit )

console.log('alphabetical order : ' + placesToVisit.slice(0).sort() )   //temporarily changed to alphabetical order

console.log('Again Original order : ' + placesToVisit )


console.log('reverse order : ' + placesToVisit.slice(0).reverse())   //temporarily changed to revese order

console.log('Again Original order : ' + placesToVisit )


console.log('Original has been changed to alphabetical order ' + placesToVisit.sort())    // permanently changed to alphabetical order
console.log('Original has been changed to reverse order ' + placesToVisit.reverse())     // permanently changed to reverse order

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

console.log('Number of guests invited to party originally' + guestList1.length)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, 
// cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let listOfthings = [];


while (true) {

  let input = prompt("Enter values to add to the array (enter 'done' to finish):");


  if (input === "done") {
    break;
  }


  listOfthings.push(input);
}



console.log("List " + listOfthings);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 21.hey think of something you could store in a TypeScript Object. Write a program that 
// creates Objects containing these items.

let obj = {};


let input = prompt("Enter a comma-separated list of values:");


let arr = input.split(",");


obj.list = arr;


console.log(obj);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.

let arry = ['sdsd','sdsd']
console.log(arry[2]) //undefined index error

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';


//true statements

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

console.log("Is car === 'subaru'? I predict True.")

console.log(car ==='subaru')

console.log("Is car != 'subau'? I predict True.")

console.log( car != 'subau' )

console.log("Is car >= 'subaru'? I predict True.")

console.log(car >='subaru')


//false statements

console.log("Is car == 'Subaru'? I predict False.")
console.log(car == 'Subaru')
console.log("Is car ==='Subaru'? I predict False.")
console.log(car ==='Subaru')
console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')
console.log("Is car !== 'subaru'? I predict False.")
console.log(car !== 'subaru')
console.log("Is car === 'SUBARU'? I predict False.")
console.log(car === 'SUBARU')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let testingArray = ['aheed' ,'aUrad' ,1,2,3,4]

// • Tests for equality and inequality with strings

console.log(testingArray[0]=='aheed')
console.log(testingArray[0]!='aheed')

// // • Tests using the lower case function

let lowerCasing1 = testingArray[1].toLocaleLowerCase()
let lowerCasing2 = testingArray[0].toLocaleLowerCase()
console.log(testingArray[1]==lowerCasing1)
console.log(testingArray[0]==lowerCasing2)

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(testingArray[2]<testingArray[3])
console.log(testingArray[2]>testingArray[4])
console.log(testingArray[5]==testingArray[3])
console.log(testingArray[4]!=testingArray[3])

// • Tests using "and" and "or" operators

console.log(testingArray[0]==lowerCasing2 && testingArray[3]<testingArray[2])
console.log(testingArray[0]==lowerCasing1 || testingArray[3]>testingArray[2])

// • Test whether an item is in a array

let item = prompt('enter item name:')

let checkingitem = (testingArray.includes(item))? 'yes item is there':'no item is not there'
console.log(checkingitem)

// • Test whether an item is not in a array

let item1 = prompt('enter item name:')

let checkingitem1 = (testingArray.includes(item1))? 'yes item is there':'no item is not there'
console.log(checkingitem1)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value 
// of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

let alien_color = ['red','yellow','green']


if (alien_color.includes('green') ) {
   console.log('you just earned 5 points')
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.

let alien_color1 = ['red','yellow','green']

let shotDownColor1 = Math.floor(Math.random() * 1)

if (shotDownColor1 == 2 ) {
   console.log('you just earned 5 points')
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

let alien_color2 = ['red','yellow','green']

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

let shotDownColor = Math.floor(Math.random() * alien_color2.length)


if (shotDownColor == 2 ) {
   console.log('you just earned 5 points')
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

let checkingColor = (alien_color2.includes('yellow') || alien_color2.includes('red'))? 'player just earned 10 points.':'.'
console.log(checkingColor)

// • Write one version of this program that runs the if block and another that runs the else block.

if (shotDownColor == 2 ) {
   console.log('you just earned 5 points')
}

else{
   console.log('you just earned 10 points')
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color21 = ['red','yellow','green']

let shotDownColor21 = Math.floor(Math.random() * alien_color21.length)


if (shotDownColor21 == 2 ) {
   console.log('you shotdown a '+ alien_color21[2]+' alien,so  you just earned 5 points')
}

else if (shotDownColor21 == 1 ) {
   console.log('you shotdown a '+ alien_color21[1]+' alien,so  you just earned 5 points')
}

else{

   console.log('you shotdown a '+ alien_color21[0]+' alien,so  you just earned 5 points')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

let age =prompt('Enter your Age:')


if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 
// the if block should print a statement, such as You really like bananas!

let favorite_fruits = ['mango','garpe','banana','gava']
let fruit = prompt('enter ur fav fruit name in singular:')

if (fruit == 'banana') {
   console.log('You really like bananas!')
} else if (fruit == 'mango') {
   console.log('You really like mangos!')
} else if (fruit =='grape') {
   console.log('You really like grapes!')
} else if (fruit == 'gava') {
   console.log('You really like gavas!')
}else{
   console.log('there are no '+ fruit + 'in list')

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will 
// print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames = ['admin' , 'user1', 'user2', 'user3','user4','user5','user6']

for (let i = 0; i < userNames.length; i++) {

   if (i == 0) {
      console.log('Hello ' + userNames[0] + ', would you like to see a status report?')
   } else {
      console.log('Hello ' + userNames[i] + ' thankyou for loging in again')
   
   }
 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames1 = ['admin' , 'user1', 'user2', 'user3','user4','user5','user6']

while (userNames1.length > 0 ) {
   userNames1.pop()
}
if (userNames1==0) {
   console.log('We need to find some users!')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. 
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need 
//   to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
    
let current_users = ['user1','user2','user3','user4','user5']
let new_users = ['user4','user5','user6','user7','user8']

for (let i = 0; i < new_users.length; i++) {
               

   if (new_users.includes(current_users[i])){
      console.log('You need a new username ' + new_users[i] + ' already in use')
   }
   else{
      console.log('username is availabe')
   }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3. 
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//   Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    
let ordinal_number = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < ordinal_number.length; i++) {
   if (ordinal_number[i]==1) {
      console.log(ordinal_number[i] + 'st')
   }else if (ordinal_number[i]==2) {
      console.log(ordinal_number[i] + 'nd')  
}else if (ordinal_number[i]==3) {
   console.log(ordinal_number[i] + 'rd')

}else {
   console.log(ordinal_number[i] + 'th')
}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to 
//     print the name of each pizza. 
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should 
//   have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or
//   more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
   
let pizzas = ['chicken tikka' , 'pepperoni' , 'fajhita']
var i = 0;
for (let i = 0; i < pizzas.length; i++) {
   console.log('i like ' + pizzas[i] + ' flavour. in pizzas')
   
}

console.log('Yummy and spiecy '+ pizzas[0] + ' pizza')
console.log('i love the smell of meat in '+ pizzas[1] + ' pizza')
console.log('i like'+ pizzas[2]+' pizza , big fan')
console.log('i really love pizza')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
// and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!
    
let animals_list = ['cat','dog','raccon']

for (let i = 0; i < animals_list.length; i++) {
   console.log(animals_list[i])
}

let randomAnimal = Math.floor(Math.random() * animals_list.length)

console.log(animals_list[randomAnimal]+' would make a great pet!')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
    
var size = prompt('Enter shirt size i.e S,M,L,XL,XXL')
var printedOnShirt = prompt('what you want to print on shirt')


function make_shirt(size,printedOnShirt) {
   
   console.log('The size of shirt you choose is ' + size)
   console.log('Print on shirt will be ' + printedOnShirt)
}

make_shirt(size,printedOnShirt)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

var size1 = prompt('Enter shirt size i.e S,M,L,XL,XXL').toLowerCase()
console.log(size1)
function make_shirt(size1) {
   
   console.log('The size of shirt you choose is ' + size1)

   if (size1=='l' || size1=='large' || size1 =='L') {
      console.log('I love TypeScript')
   }else{
      var printedOnShirt1 = prompt('what you want to print on shirt')
      console.log(printedOnShirt1)
   }
   
}

make_shirt(size1)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, 
// such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at 
// least one of which is not in the default country.

let city = ['karachi','Islamabad','New York']
let country = 'Pakistan'

function describe_city(city) {
   
   console.log(city + ' is in ' + country)

}

describe_city(city[0])
describe_city(city[1])
describe_city(city[2])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a 
// string formatted like this:
// "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.
    
 let city1 = 'Lahore'
 let country1 = 'Pakistan'
 let city2 = 'Paris'
 let country2 = 'France'
 let city3 = 'New York'
 let country3 = 'USA'


function city_country(city1,country1,city2,country2,city3,country3) {
   
  return [ city1 +','+country1 ,city2 +','+country2, city3 +','+country3]
  

}

 city_country(city1,country1,city2,country2,city3,country3)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an 
// artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make
//  three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value 
//  for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name, album_title, num_tracks) {
  const album = {
    artist: artist_name,
    title: album_title
  };
  if (num_tracks) {
    album.tracks = num_tracks;
  }
  return album;
}

make_album('atif aslam','love story', 12)
make_album('Aurora','sad songs')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

let magicians = ['dark','joker','black hat','ruby','romba']

let numberOfMagicians = magicians.length
function show_magicians() {
   
     for (let i = 0; i <numberOfMagicians; i++) {
       
        console.log(magicians[i])
      
     }

}

show_magicians()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies 
// the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians1 = ['dark','joker','black hat','ruby','romba']


function make_great() {
     let greatPhrase = [' great ']
     newArray = []
   for (let i = 0; i < magicians1.length; i++) {
    
      newArray.push(greatPhrase[0] + magicians1[i])
    
   }
   
   console.log(newArray)

}

make_great()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original 
// array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one 
// array of the original names and one array with the Great added to each magician’s name.

let magicians12 = ['dark','joker','black hat','ruby','romba']


function make_great() {
    
   let copiedArray = magicians12.slice(0)
   let greatPhrase1 = [' great ']
     newArray1 = []
   for (let i = 0; i < magicians12.length; i++) {
    
     
      newArray.push(greatPhrase1[0] + copiedArray[i])
    
   }
   
   console.log(newArray1)

}

make_great()
console.log('original array:')
magicians12

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many 
// items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different
// number of arguments each time.

  let input1 = prompt('what you want on your sandwich. (separate your entry with ",") ')

function sandwich(input1) {
   
   
   let input1Array =[]
   
   input1Array.push(input1.slice(','))
 return input1Array

   
}

sandwich(input1)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should 
// then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an 
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car_entry(manufacturerName ,  modelName , coLor , optionalFeature) {
   
 let car = new Object()
 
 car.manufacturer_name = manufacturerName
 car. model_name = modelName
 if (coLor) {
   car.color = coLor
 }
if (optionalFeature) {
   car.optional_feature = optionalFeature
}
 
return car
}

car_entry('honda','civic')
car_entry('suzuki','mehran','red')
car_entry('toyota','crown','white','ye to extra hy')

///////////////////////////////////////////////////////------------THE END-----------/////////////////////////////////////////////////////////////////////////////////////












