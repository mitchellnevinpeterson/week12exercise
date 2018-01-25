// an array of 5 numbers with at least 2 decimals
var arrayNumDecimal = [6.09, 5.28, 20.99, 47.85, 89.34]
// adding a new array to add the rounded numbers into after the for loop
var arrayRoundedNum = []
// looping though the array to round each number to the nearest integer
for(var i = 0; i < arrayNumDecimal.length; i++) {
	var roundedNum = Math.round(arrayNumDecimal[i])
	arrayRoundedNum.push(roundedNum)
}
console.log(arrayRoundedNum)

// creating a fuction that produces 10 random numbers
var arrayRandomNums = []
var length = 10

for(var i = 0; i < length; i++) {
var randomNum = Math.floor((Math.random() * 100) + 1)
arrayRandomNums.push(randomNum)
}

console.log(arrayRandomNums)

// // creating a function to display some dates and time
// var current = new Date()


// var currentHour = current.getHours()
// var currentMinutes = current.getMinutes()
// var currentSeconds = current.getSeconds()
// // making the hour into non military time and two digit format
// function hour() {
// 	if(currentHour > 12) {
// 		return currentHour = currentHour - 12
// 		}
// 	if(currentHour == 0) {
// 		return currentHour = currentHour + 12
// 		}
// 	else if(currentHour <= 12) {
// 		return currentHour
// 		}
// }
// // making the minutes two digit format when less than 10
// function minute() {
// 	if(currentMinutes < 10) {
// 		return currentMinutes = "0" + currentMinutes
// 	}
// 	else if(currentMinutes >= 10) {
// 		return currentMinutes
// 	}
// }
// // making the seconds two digit format when less than 10
// function second() {
// 	if(currentSeconds < 10) {
// 		return currentSeconds = "0" + currentSeconds
// 	}
// 	else if(currentSeconds >= 10) {
// 		return currentSeconds
// 	}
// }


// var currentTime = hour() + ":" + minute() + ":" + second()

// a function the add a zero in front of numbers less than 10
function addZero(i) {
	// check if the number is less than 10
	if(i < 10) {
		// add a zero in front if less than 10
		i = "0" + i
	}
	// send back the new value of i
	return i
}
// creating the funtion for the full time
function time() {
	// storing the variable of the Date() function to call on to get hours, minutes, seconds
	var current = new Date()
	// Storing the variables of hours, minutes, seconds
	var currentHour = current.getHours()
	var currentMinutes = current.getMinutes()
	var currentSeconds = current.getSeconds()
	// changing the hours to to standard time instead of military time
	if(currentHour > 12) {
		// removing 12 hours from clock to make standard time
		currentHour = currentHour - 12
	}
	// at hour 00 in military aka midnight
	if(currentHour == 0) {
		// adding 12 hours so the clock reads 12 instead of 00
		currentHour = currentHour + 12
	}
	minutes = addZero(currentMinutes)
	seconds = addZero(currentSeconds)
	// adding the information to the div in my html
	document.getElementById("time").textContent = currentHour + ":" + minutes + ":" + seconds
	// making the fuction time run every second
	setTimeout(function() {
		time()
	}, 1000)
}
// adding the event listener so that the function runs when the page loads
document.getElementById("time").addEventListener("onload", time())





// var currentMonth = current.getMonth() + 1
// var currentDay = current.getDate()
// var currentYear = current.getYear() - 100
// // making the month into two digit format when less than 10
// function month() {
// 	if(currentMonth < 10) {
// 		return currentMonth = "0" + currentMonth
// 	}
// 	else if(currentMonth >= 10) {
// 		return currentMonth
// 	}
// }
// // making the day into two digit format when less than 10
// function day() {
// 	if(currentDay < 10) {
// 		return currentDay = "0" + currentDay
// 	}
// 	else if(currentDay >= 10) {
// 		return currentDay
// 	}
// }
// // making the month into two digit format when less than 10
// function year() {
// 	if(currentYear < 10) {
// 		return currentYear = "0" + currentYear
// 	}
// 	else if(currentYear >= 10) {
// 		return currentYear
// 	}
// }

// var currentFullDate = day() + "/" + month() + "/" + year()
// console.log(currentFullDate)
// a function the add a zero in front of numbers less than 10
function addZero(i) {
	// check if the number is less than 10
	if(i < 10) {
		// add a zero in front if less than 10
		i = "0" + i
	}
	// send back the new value of i
	return i
}
// a function to create the date updating every hour
function date() {
	// storing the variable for the current Date() function
	var current = new Date()
	// storing the variables for the month, day, and year
	var currentMonth = current.getMonth() + 1
	var currentDay = current.getDate()
	var currentYear = current.getYear() - 100
	// addig a zero to keep the dates in two digit format
	month = addZero(currentMonth)
	day = addZero(currentDay)
	year = addZero(currentYear)
	document.getElementById("date").textContent = month + "/" + day  + "/" + year
	// setting a a timout fuction so the date is refreshed every hour
	setTimeout(function(){
		date()
	}, 3600000)
}
// setting an event listener to start the function when the page is loaded
document.getElementById("date").addEventListener("onload", date())