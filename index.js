const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

// Password configuration elements
const passwordLengthEl = document.querySelector("#password-length")
const yesUpppercaseEl = document.querySelector("#toggle-uppercase")
const yesNumbersEl = document.querySelector("#toggle-numbers")
const yesSymbolsEl = document.querySelector("#toggle-symbols")

// Password generating elements
const buttonEl = document.querySelector("#generate-btn")
const password1El = document.querySelector("#password-1")
const password2El = document.querySelector("#password-2")

// Array of possible password characters is set to only lowercase by default
let characters = lowercase

function updatePasswordConditions() {
    characters = lowercase
    let yesUpppercase = yesUpppercaseEl.checked;
    let yesNumbers = yesNumbersEl.checked;
    let yesSymbols = yesSymbolsEl.checked;
    
    console.log(yesUpppercase)
    console.log(yesNumbers)
    console.log(yesSymbols)
    
    if (yesUpppercase) {
    characters = characters.concat(uppercase)
    }
    if (yesNumbers) {
        characters = characters.concat(numbers)
    }
    if (yesSymbols) {
        characters = characters.concat(symbols)
    }
}

function getRandomIndex(range) {
    let randomIndex = Math.floor(Math.random() * range)
    return randomIndex
}

function generatePassword(length) {
    let password = ""
    for (let i=0; i<length; i++) {
        let randomIndex = getRandomIndex(characters.length)
        let char = characters[randomIndex]
        password += char
    }
    return password
}

buttonEl.addEventListener("click", function() {
    console.log("clicked!")
    
    // Update password variables based on user config input
    updatePasswordConditions()
    let passwordLength = passwordLengthEl.value;
    console.log(passwordLength)
    
    // Generate passwords
    let password1 = generatePassword(passwordLength)
    let password2 = generatePassword(passwordLength)
    
    // Populate HTML with generated passwords
    password1El.textContent = password1
    password2El.textContent = password2
})


console.log(characters)
console.log(getRandomIndex(5))