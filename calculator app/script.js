function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function addToDisplay(value) {
    document.querySelector('.display').value += value;
}

function calculate() {
    var expression = document.querySelector('.display').value;
    var result = eval(expression);
    document.querySelector('.display').value = result;

    // Add the calculated result to history
    var historyItem = document.createElement('li');
    historyItem.textContent = expression + ' = ' + result;
    historyItem.classList.add('history-item');
    historyItem.addEventListener('click', function() {
        // Set the expression to the display when clicked
        document.querySelector('.display').value = expression;
        // Switch to the home tab when a history item is clicked
        openTab(event, 'home');
    });

    document.querySelector('.history-list').appendChild(historyItem);
}

function customFunction1() {
    // Perform custom functionality for button 1
    var value = document.querySelector('.display').value;
    // Example: Calculate the square root of the input value
    var result = Math.sqrt(eval(value));
    document.querySelector('.display').value = result;
}

function customFunction2() {
    // Perform custom functionality for button 2
    var value = document.querySelector('.display').value;
    // Example: Calculate the cube root of the input value
    var result = Math.cbrt(eval(value));
    document.querySelector('.display').value = result;
}


// Initialize memory variable
let memory = 0;

// Function to add a number or operator to the display
function addToDisplay(value) {
    document.querySelector('.display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.querySelector('.display').value = '';
}

// Function to clear the last entry in the display
function clearEntry() {
    let displayValue = document.querySelector('.display').value;
    document.querySelector('.display').value = displayValue.slice(0, -1);
}

// Function to change sign
function changeSign() {
    let displayValue = document.querySelector('.display').value;
    if (displayValue.startsWith('-')) {
        document.querySelector('.display').value = displayValue.substring(1);
    } else {
        document.querySelector('.display').value = '-' + displayValue;
    }
}

// Function to calculate result
function calculateResult() {
    let expression = document.querySelector('.display').value;
    let result = eval(expression);
    document.querySelector('.display').value = result;
}

// Function to perform square root
function squareRoot() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.sqrt(value);
    document.querySelector('.display').value = result;
}

// Function to perform reciprocal
function reciprocal() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = 1 / value;
    document.querySelector('.display').value = result;
}

// Function to perform percentage calculation
function percentage() {
    let expression = document.querySelector('.display').value;
    let result = eval(expression) / 100;
    document.querySelector('.display').value = result;
}

// Function to perform Pi calculation
function pi() {
    document.querySelector('.display').value += Math.PI;
}

// Function to perform sine calculation
function sine() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.sin(value);
    document.querySelector('.display').value = result;
}

// Function to perform cosine calculation
function cosine() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.cos(value);
    document.querySelector('.display').value = result;
}

// Function to perform tangent calculation
function tangent() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.tan(value);
    document.querySelector('.display').value = result;
}

// Function to perform natural logarithm calculation
function naturalLogarithm() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.log(value);
    document.querySelector('.display').value = result;
}

// Function to perform exponential calculation
function exponential() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.exp(value);
    document.querySelector('.display').value = result;
}

// Function to perform memory store
function memoryStore() {
    let value = parseFloat(document.querySelector('.display').value);
    memory += value;
}

// Function to perform memory recall
function memoryRecall() {
    document.querySelector('.display').value = memory;
}

// Function to perform memory clear
function memoryClear() {
    memory = 0;
}

// Function to perform backspace/delete
function backspace() {
    let displayValue = document.querySelector('.display').value;
    document.querySelector('.display').value = displayValue.substring(0, displayValue.length - 1);
}


// Function to add a number or operator to the display
function addToDisplay(value) {
    document.querySelector('.display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.querySelector('.display').value = '';
}

// Function to clear the last entry in the display
function clearEntry() {
    let displayValue = document.querySelector('.display').value;
    document.querySelector('.display').value = displayValue.slice(0, -1);
}

// Function to change sign
function changeSign() {
    let displayValue = document.querySelector('.display').value;
    if (displayValue.startsWith('-')) {
        document.querySelector('.display').value = displayValue.substring(1);
    } else {
        document.querySelector('.display').value = '-' + displayValue;
    }
}

// Function to calculate result
function calculateResult() {
    let expression = document.querySelector('.display').value;
    let result = eval(expression);
    document.querySelector('.display').value = result;
}

// Function to perform square root
function squareRoot() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.sqrt(value);
    document.querySelector('.display').value = result;
}

// Function to perform reciprocal
function reciprocal() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = 1 / value;
    document.querySelector('.display').value = result;
}

// Function to perform percentage calculation
function percentage() {
    let expression = document.querySelector('.display').value;
    let result = eval(expression) / 100;
    document.querySelector('.display').value = result;
}

// Function to perform Pi calculation
function pi() {
    document.querySelector('.display').value += Math.PI;
}

// Function to perform sine calculation
function sine() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.sin(value);
    document.querySelector('.display').value = result;
}

// Function to perform cosine calculation
function cosine() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.cos(value);
    document.querySelector('.display').value = result;
}

// Function to perform tangent calculation
function tangent() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.tan(value);
    document.querySelector('.display').value = result;
}

// Function to perform arcsine calculation
function arcsine() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.asin(value);
    document.querySelector('.display').value = result;
}

// Function to perform arccosine calculation
function arccosine() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.acos(value);
    document.querySelector('.display').value = result;
}

// Function to perform arctangent calculation
function arctangent() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.atan(value);
    document.querySelector('.display').value = result;
}

// Function to perform logarithm calculation
function logarithm() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.log10(value);
    document.querySelector('.display').value = result;
}

// Function to perform natural logarithm calculation
function naturalLogarithm() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.log(value);
    document.querySelector('.display').value = result;
}

// Function to perform exponential calculation
function exponential() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.exp(value);
    document.querySelector('.display').value = result;
}

// Function to perform 10 raised to the power of calculation
function tenToPower() {
    let value = parseFloat(document.querySelector('.display').value);
    let result = Math.pow(10, value);
    document.querySelector('.display').value = result;
}

// Function to perform memory store
function memoryStore() {
    let value = parseFloat(document.querySelector('.display').value);
    memory += value;
}

// Function to perform memory recall
function memoryRecall() {
    document.querySelector('.display').value = memory;
}

// Function to perform memory clear
function memoryClear() {
    memory = 0;
}

// Function to perform backspace/delete
function backspace() {
    let displayValue = document.querySelector('.display').value;
    document.querySelector('.display').value = displayValue.substring(0, displayValue.length - 1);
}


document.addEventListener("DOMContentLoaded", function() {
    // When the document is fully loaded
    const calculator = document.getElementById("calculator");
    calculator.classList.add("fade-in"); // Add fade-in class to display the calculator with animation

    // Add "Scientific Calculator" text just before the animation finishes
    setTimeout(function() {
        const introText = document.createElement('div');
        introText.textContent = 'Scientific Calculator';
        introText.classList.add('intro-text');
        calculator.appendChild(introText);
    }, 1000); // Adjust timing (milliseconds) as needed
});


document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("openButton");

    openButton.addEventListener("click", function() {
        // Hide the instructions
        document.querySelector('.instructions').style.display = 'none';
        
        // Show the calculator with animation
        const calculator = document.getElementById("calculator");
        calculator.classList.add("fade-in");

        // Add "Scientific Calculator" text just before the animation finishes
        setTimeout(function() {
            const introText = document.createElement('div');
            introText.textContent = 'Scientific Calculator';
            introText.classList.add('intro-text');
            calculator.appendChild(introText);
        }, 1000); // Adjust timing (milliseconds) as needed
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = ["image/image1.jpg", "image/image2.jpg", "image/image3.jpg"]; // Replace with your image URLs
    let currentIndex = 0;

    // Function to change the background image
    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const nextImage = images[currentIndex];
        document.body.style.backgroundImage = `url('${nextImage}')`;
    }

    // Initial change to the first image
    changeBackgroundImage();

    // Automatically change the background image every few seconds
    setInterval(changeBackgroundImage, 5000); // Adjust the interval (in milliseconds) to change the background image
});



