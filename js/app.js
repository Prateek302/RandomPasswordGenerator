const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefgijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*()_+/*-"


//selectors
const totalChar = document.getElementById("total-char")
const passBox = document.getElementById("pass-box")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {
    return dataSet [Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }
    if(password.length < totalChar.value){
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value)
}



document.getElementById("btn").addEventListener(
    "click",
    function (){
        generatePassword()
    }
)


function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  }

// generatePassword();