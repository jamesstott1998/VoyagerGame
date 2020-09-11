    let planet1="mercury"
    let planet2="venus"
    let planet3="mars"
    let planet4="jupiter"
    let planet5="saturn"
    let planet6="uranus"
    let planet7="pluto"
    let Mother="mothership"
    let Name={}


let start = () => {

    
    alert("You set out on a journey into space but little did you realise that you were low on fuel.")
    alert("You found yourself floating in space! When you contact the mothership.")
    NameInput()
}
let NameInput = () => {
    Name = prompt("Enter name")

    if (Name === ""){
        alert("Please enter a name")
        NameInput()
    }else{ 
    alert("Hello " + Name + " glad to see you can make contact!")
    }

    alert("Unfortuntely you ran out of fuel, luckily for you we have set up a system just for this emergency. We have secure fuel canisters located on each planet, access them and solve the riddles to obtain them. However, please do not get the riddles wrong 3 times, you dont want to know how that ends.")
    planetChoice1()
}

 




//planet 1






let planetChoice1 = () =>{
    let choice1 = prompt("You can choose what planet to go to, please input planet name").toLowerCase()
       
        
        if (choice1 === planet1){
            alert("You travel towards " + planet1)
            riddle1Attempt1(Name)
        }else if (choice1 === planet2 || choice1 === planet3 || choice1 === planet4 || choice1 === planet5 || choice1 === planet6 || choice1 === planet7 || choice1 === Mother){
            alert("You ran out of fuel and died")
            start()
        }else {
            alert("Please input valid address")
            planetChoice1()
        }


}


let riddle1Attempt1 = () => {
    alert ("Welcome to " + planet1 + " " + Name + ", we have a fuel point inside the cave")
    alert ("*You enter the cave*")
    alert("There is ancient writing on the wall - 3 attempts")
    let riddle1 = prompt("If an alien blows 18 hydrogen bubbles, then pops 6, eats 7 and then shoots  5 and blows one more. How many are left?").toLowerCase()

        if (riddle1 === "1" || riddle1 === "one"){
            alert("You solved it")
            alert("The writing changes to the letter 'V', please remember this.")
            alert("*You go back to the ship*")
            planetChoice2()                                                       
        }else{
            alert("That is wrong try again")
            riddle1Attempt2()
        }

}

let riddle1Attempt2 = () => {
    let riddle1 = prompt("If an alien blows 18 hydrogen bubbles, then pops 6, eats 7 and then shoots  5 and blows one more. How many are left?").toLowerCase()

        if (riddle1 === "1" || riddle1 === "one"){
            alert("You solved it")
            alert("The writing changes to the letter 'V', please remember this.")
            alert("*You go back to the ship*")
            planetChoice2()                                                         
        }else{
            alert("That is wrong try again")
            riddle1Attempt3()
        }

}

let riddle1Attempt3 = () => {
    let riddle1 = prompt("If an alien blows 18 hydrogen bubbles, then pops 6, eats 7 and then shoots  5 and blows one more. How many are left?").toLowerCase()

        if (riddle1 ==="1" || riddle1 === "one"){
            alert("You solved it")
            alert("The writing changes to the letter 'V', please remember this.")
            alert("*You go back to the ship*")
            planetChoice2()                                                         
        }else{
            alert("You die")
            start()
        }

}

let planetChoice2 = () =>{
    let choice2 = prompt("You can choose what planet to go to, please input planet name").toLowerCase()
       
        
        if (choice2 === planet2){
            alert("You travel towards " + planet2)
            riddle2Attempt1(Name)
        }else if (choice2 === planet3 || choice2 === planet4 || choice2 === planet5 || choice2 === planet6 || choice2 === planet7 || choice2 === Mother){
            alert("You ran out of fuel and died")
            start()
        }else if (choice2 === planet1){
            alert("You have already been there")
            planetChoice2()
        }else {
            alert("Please input valid address")
            planetChoice2()
        }
    }








//planet 2










let riddle2Attempt1 = () => {
        alert ("Welcome to " + planet2 + " " + Name + ", see that crater over there? That's the fuel point")
        alert ("*You go to the crater*")
        alert("There is ancient writing in the sand - 3 attempts")
        let riddle2 = prompt("Zorg has £29. He bought 4 hydro-boosters that cost £3 each, 4 boxes of stellar-dust that cost £2 each. He spent the rest of his money on krypto-power. How much money did he spend on krypto-power?").toLowerCase()
    
            if (riddle2 ==="£9" || riddle2 === "nine" || riddle2 ==="9"){
                alert("You solved it")
                alert("The writing changes to the letter 'O', please remember this.")
                alert("*You go back to the ship*")
                planetChoice3()                                                       
            }else{
                alert("That is wrong try again")
                riddle2Attempt2()
            }
    
    }
let riddle2Attempt2 = () => {
        let riddle2 = prompt("Zorg has £29. He bought 4 hydro-boosters that cost £3 each, 4 boxes of stellar-dust that cost £2 each. He spent the rest of his money on krypto-power. How much money did he spend on krypto-power?").toLowerCase()
    
            if (riddle2 ==="£9" || riddle2 == "nine" || riddle2 =="9"){
                alert("You solved it")
                alert("The writing changes to the letter 'O', please remember this.")
                alert("*You go back to the ship*")
                planetChoice3()                                                         
            }else{
                alert("That is wrong try again")
                riddle2Attempt3()
            }
    
    }
let riddle2Attempt3 = () => {
        let riddle2 = prompt("Zorg has £29. He bought 4 hydro-boosters that cost £3 each, 4 boxes of stellar-dust that cost £2 each. He spent the rest of his money on krypto-power. How much money did he spend on krypto-power?").toLowerCase()
    
            if (riddle2 ==="£9" || riddle2 === "nine" || riddle2 ==="9"){
                alert("You solved it")
                alert("The writing changes to the letter 'O', please remember this.")
                alert("*You go back to the ship*")
                planetChoice3()                                                         
            }else{
                alert("You die")
                start()
            }
    
    }
   
    










//planet 3




let planetChoice3 = () =>{
        let choice3 = prompt("You can choose what planet to go to, please input planet name").toLowerCase()
           
            
            if (choice3 === planet3){
                alert("You travel towards " + planet3)
                riddle3Attempt1(Name)
            }else if (choice3 === planet4 || choice3 === planet5 || choice3 === planet6 || choice3 === planet7 || choice3 === Mother){
                alert("You ran out of fuel and died")
                start()
            }else if (choice3 === planet1 || choice3=== planet2){
                alert("You have already been there")
                planetChoice3()
            }else {
                alert("please input valid address")
                planetChoice3()
            }
}

let riddle3Attempt1 = () => {
    alert ("Welcome to " + planet3 + " " + Name + ", there is a monolith over that hill, check it out.")
    alert ("*You walk to the monolith*")
    alert("At the base of it, there is ancient writing scratched onto the side - 3 attempts")
    let riddle3 = prompt("2, 3, 5, 9, 17, _  What is the next number in the sequence?").toLowerCase()

        if (riddle3 ==="33" || riddle3 ==="thirty three" || riddle3 === "thirty-three"){
            alert("You solved it")
            alert("The writing changes to the letter 'Y', please remember this.")
            alert("*You go back to the ship*")
            planetChoice4()                                                       
        }else{
            alert("That is wrong try again")
            riddle3Attempt2()
        }

}
let riddle3Attempt2 = () => {
    let riddle3 = prompt("2, 3, 5, 9, 17, _  What is the next number in the sequence?").toLowerCase()

        if (riddle3 ==="33" || riddle3 ==="thirty three" || riddle3 === "thirty-three"){
            alert("You solved it")
            alert("The writing changes to the letter 'Y', please remember this.")
            alert("*You go back to the ship*")
            planetChoice4()                                                         
        }else{
            alert("That is wrong try again")
            riddle3Attempt3()
        }

}
let riddle3Attempt3 = () => {
    let riddle3 = prompt("2, 3, 5, 9, 17, _  What is the next number in the sequence?").toLowerCase()

        if (riddle3 ==="33" || riddle3 ==="thirty three" || riddle3 === "thirty-three"){
            alert("You solved it")
            alert("The writing changes to the letter 'Y', please remember this.")
            alert("*You go back to the ship*")
            planetChoice4()                                                         
        }else{
            alert("You die")
            start()
        }

}













//planet 4




let planetChoice4 = () =>{
    let choice4 = prompt("You can choose what planet to go to, please input planet name").toLowerCase()
       
        
        if (choice4 === planet4){
            alert("You travel towards " + planet4)
            riddle4Attempt1(Name)
        }else if (choice4 === planet5 || choice4 === planet6 || choice4 === planet7 || choice4 === Mother){
            alert("You ran out of fuel and died")
            start()
        }else if (choice4 === planet1 || choice4=== planet2 || choice4 === planet3){
            alert("You have already been there")
            planetChoice4()
        }else {
            alert("please input valid address")
            planetChoice4()
        }
}

let riddle4Attempt1 = () => {
alert ("Welcome to " + planet4 + " " + Name + ", we have a crashed spaceship nearby, dont ask. Our sources tell us there is fuel left, have a look.")
alert ("*You enter the wreckage*")
alert("There is a keypad with a question flashing - 3 attempts")
let riddle4 = prompt("When my alien was 31 I was 8. Now he is twice as old as me. How old am I?").toLowerCase()

    if (riddle4 ==="23" || riddle4 === "twenty three" || riddle4 === "twenty-three"){
        alert("You solved it")
        alert("The writing changes to the letter 'A', please remember this.")
        alert("*You go back to the ship*")
        planetChoice5()                                                       
    }else{
        alert("That is wrong try again")
        riddle4Attempt2()
    }

}
let riddle4Attempt2 = () => {
let riddle4 = prompt("When my alien was 31 I was 8. Now he is twice as old as me. How old am I?").toLowerCase()

    if (riddle4 ==="23" || riddle4 === "twenty three" || riddle4 === "twenty-three"){
        alert("You solved it")
        alert("The writing changes to the letter 'A', please remember this.")
        alert("*You go back to the ship*")
        planetChoice5()                                                         
    }else{
        alert("That is wrong try again")
        riddle4Attempt3()
    }

}
let riddle4Attempt3 = () => {
let riddle4 = prompt("When my alien was 31 I was 8. Now he is twice as old as me. How old am I?").toLowerCase()

    if (riddle4 ==="23" || riddle4 === "twenty three" || riddle4 === "twenty-three"){
        alert("You solved it")
        alert("The writing changes to the letter 'A', please remember this.")
        alert("*You go back to the ship*")
        planetChoice5()                                                         
    }else{
        alert("You die")
        start()
    }

}
















//planet 5




let planetChoice5 = () =>{
    let choice5 = prompt("You can choose what planet to go to, please input planet name").toLowerCase()
       
        
        if (choice5 === planet5){
            alert("You travel towards " + planet5)
            riddle5Attempt1(Name)
        }else if (choice5 === planet6 ||choice5 === planet7 || choice5 === Mother){
            alert("You ran out of fuel and died")
            start()
        }else if (choice5 === planet1 || choice5=== planet2 || choice5 === planet3 || choice5 === planet4){
            alert("You have already been there")
            planetChoice5()
        }else {
            alert("please input valid address")
            planetChoice5()
        }
}

let riddle5Attempt1 = () => {
alert ("Welcome to " + planet5 + " " + Name + ", we have a fuel point inside a dried, ancient salt lake")
alert ("*You walk into the dry, dusty void*")
alert("There is ancient writing scribbled onto the salt flat - 3 attempts")
let riddle5 = prompt("If seven spacemen meet each other and each shakes hands only once with each of the remaining others, how many handshakes will there have been?").toLowerCase()

    if (riddle5 ==="21" || riddle5 === "twenty one" || riddle5 === "twenty-one"){
        alert("You solved it")
        alert("The writing changes to the letter 'G', please remember this.")
        alert("*You go back to the ship*")
        planetChoice6()                                                       
    }else{
        alert("That is wrong try again")
        riddle5Attempt2()
    }

}
let riddle5Attempt2 = () => {
let riddle5 = prompt("If seven spacemen meet each other and each shakes hands only once with each of the remaining others, how many handshakes will there have been?").toLowerCase()

    if (riddle5 ==="21" || riddle5 === "twenty one" || riddle5 === "twenty-one"){
        alert("You solved it")
        alert("The writing changes to the letter 'G', please remember this.")
        alert("*You go back to the ship*")
        planetChoice6()                                                         
    }else{
        alert("That is wrong try again")
        riddle5Attempt3()
    }

}
let riddle5Attempt3 = () => {
let riddle5 = prompt("If seven spacemen meet each other and each shakes hands only once with each of the remaining others, how many handshakes will there have been?").toLowerCase()

    if (riddle5 ==="21" || riddle5 === "twenty one" || riddle5 === "twenty-one"){
        alert("You solved it")
        alert("The writing changes to the letter 'G', please remember this.")
        alert("*You go back to the ship*")
        planetChoice6()                                                         
    }else{
        alert("You die")
        start()
    }

}
















//planet 6




let planetChoice6 = () =>{
    let choice6 = prompt("You can choose what planet to go to, please input planet name").toLowerCase()
       
        
        if (choice6 === planet6){
            alert("You travel towards " + planet6)
            riddle6Attempt1(Name)
        }else if (choice6 === planet7 || choice6 === Mother){
            alert("You ran out of fuel and died")
            start()
        }else if (choice6 === planet1 || choice6=== planet2 || choice6 === planet3 || choice6 === planet4 || choice6 === planet5){
            alert("You have already been there")
            planetChoice6()
        }else {
            alert("please input valid address")
            planetChoice6()
        }
}

let riddle6Attempt1 = () => {
alert ("Welcome to " + planet6 + " " + Name + ", there was once a gigantic volcanic eruption, we hid the fuel inside the petrified lava")
alert ("*You chip into the rock*")
alert("There is a lockbox inside with a keypad - 3 attempts")
let riddle6 = prompt("One fourth of the population of a newly discovered planet have 4 legs. The rest have two legs. There are 60 legs total. How big is the population of the newly discovered planet?").toLowerCase()

    if (riddle6 ==="24" || riddle6 === "twenty four" || riddle6 === "twenty-four"){
        alert("You solved it")
        alert("The writing changes to the letter 'E', please remember this.")
        alert("*You go back to the ship*")
        planetChoice7()                                                       
    }else{
        alert("That is wrong try again")
        riddle6Attempt2()
    }

}
let riddle6Attempt2 = () => {
let riddle6 = prompt("One fourth of the population of a newly discovered planet have 4 legs. The rest have two legs. There are 60 legs total. How big is the population of the newly discovered planet?").toLowerCase()

    if (riddle6 ==="24" || riddle6 === "twenty four" || riddle6 === "twenty-four"){
        alert("You solved it")
        alert("The writing changes to the letter 'E', please remember this.")
        alert("*You go back to the ship*")
        planetChoice7()                                                         
    }else{
        alert("That is wrong try again")
        riddle6Attempt3()
    }

}
let riddle6Attempt3 = () => {
let riddle6 = prompt("One fourth of the population of a newly discovered planet have 4 legs. The rest have two legs. There are 60 legs total. How big is the population of the newly discovered planet?").toLowerCase()

    if (riddle6 ==="24" || riddle6 === "twenty four" || riddle6 === "twenty-four"){
        alert("You solved it")
        alert("The writing changes to the letter 'E', please remember this.")
        alert("*You go back to the ship*")
        planetChoice7()                                                         
    }else{
        alert("You die")
        start()
    }

}










//planet 7




let planetChoice7 = () =>{
    let choice7 = prompt("You can choose what planet to go to, please input planet name").toLowerCase()
       
        
        if (choice7 === planet7){
            alert("You travel towards " + planet7)
            riddle7Attempt1(Name)
        }else if (choice7 === Mother){
            alert("You ran out of fuel and died")
            start()
        }else if (choice7 === planet1 || choice7=== planet2 || choice7 === planet3 || choice7 === planet4 || choice7 === planet5 || choice7 === planet6 ){
            alert("You have already been there")
            planetChoice7()
        }else {
            alert("please input valid address")
            planetChoice7()
        }
}

let riddle7Attempt1 = () => {
alert ("Welcome to " + planet7 + " " + Name + ", A comet crashed here and we placed the fuel inside.")
alert ("*You visit the comet*")
alert("There is old writing on the wall - 3 attempts")
let riddle7 = prompt("Two hours ago it was as long after one o'clock in the afternoon as it was before one o'clock in the morning. What time is it now?").toLowerCase()

    if (riddle7 ==="7pm" || riddle7 === "seven o'clock" || riddle7 === "7" || riddle7 === "seven"){
        alert("You solved it")
        alert("The writing changes to the letter 'R', please remember this.")
        alert("*You go back to the ship*")
        planetChoice8()                                                       
    }else{
        alert("That is wrong try again")
        riddle7Attempt2()
    }

}
let riddle7Attempt2 = () => {
let riddle7 = prompt("Two hours ago it was as long after one o'clock in the afternoon as it was before one o'clock in the morning. What time is it now?").toLowerCase()

    if (riddle7 ==="7pm" || riddle7 === "seven o'clock" || riddle7 === "7" || riddle7 === "seven"){
        alert("You solved it")
        alert("The writing changes to the letter 'R', please remember this.")
        alert("*You go back to the ship*")
        planetChoice8()                                                         
    }else{
        alert("That is wrong try again")
        riddle7Attempt3()
    }

}
let riddle7Attempt3 = () => {
let riddle7 = prompt("Two hours ago it was as long after one o'clock in the afternoon as it was before one o'clock in the morning. What time is it now?").toLowerCase()

    if (riddle7 ==="7pm" || riddle7 === "seven o'clock" || riddle7 === "7" || riddle7 === "seven"){
        alert("You solved it")
        alert("The writing changes to the letter 'R', please remember this.")
        alert("*You go back to the ship*")
        planetChoice8()                                                         
    }else{
        alert("You die")
        start()
    }

}











//mothership




let planetChoice8 = () =>{
    let choice8 = prompt("You finally have enough fuel to escape, please input 'mothership' to go home").toLowerCase()
       
        
        if (choice8 === Mother || choice8 === "the mothership"){
            alert("You travel towards " + Mother)
            riddle8Attempt1(Name)
        }else if (choice8 === planet1 || choice8=== planet2 || choice8 === planet3 || choice8 === planet4 || choice8 === planet5 || choice8 === planet6 || choice8 === planet7){
            alert("You have already been there")
            planetChoice8()
        }else {
            alert("please input valid address")
            planetChoice8()
        }
}

let riddle8Attempt1 = () => {
alert ("Welcome to " + Mother + " " + Name + ", please input security code")
alert("there is a keyboard - 3 attempts")
let riddle8 = prompt("Please enter password").toLowerCase()

    if (riddle8 ==="voyager"){
        alert("You solved it!")
        alert("*You go into the mothership*")
        endOfGame()
    }else{
        alert("That is wrong try again")
        riddle8Attempt2()
    }

}
let riddle8Attempt2 = () => {
let riddle8 = prompt("Please enter password").toLowerCase()

    if (riddle8 ==="voyager"){
        alert("You solved it!")
        alert("*You go into the mothership*")
        endOfGame()                                                         
    }else{
        alert("That is wrong try again")
        riddle8Attempt3()
    }

}
let riddle8Attempt3 = () => {
let riddle8 = prompt("Please enter password").toLowerCase()

    if (riddle8 ==="voyager"){
        alert("You solved it!")
        alert("*You go into the mothership*")
        endOfGame()                                                         
    }else{
        alert("You die")
        start()
    }

}




let endOfGame = () => {
    alert("CONGRATULATIONS!!! You connected with the mothership successfully and made it home!!!")
}













