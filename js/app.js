'usage strict';

//Time Array to 
var times = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//var locations = {
//
//}

var firstAndPike = {
	// min and max customers per hour
	minCustPerHour: 23,
	maxCustPerHour: 65,	
	avgCookPerCust: 6.3,
  
  // methodToGenerateRandomCustomers		
	calcCustPerHour: function() {
		for (var i = 0; i < times.length; i++) {
			this.custPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour);
		}
	},
	// Array customersEachHour
	custPerHour: [],
	
	// cookiesSoldEachHour = []methodToCalc
  multiplyCookies: function() {
    this.calcCustPerHour();
    for (var j = 0; j < this.custPerHour.length; j++) {
      this.cookiesPerHour.push(this.custPerHour[j] * this.avgCookPerCust);
    }
  },
  // Array cookies sold per hour
  cookiesPerHour: [],
	
	// TotalCookiesForTheDay = methodToCalc
	totalCookies: function() {
	  this.multiplyCookies();
		for (var x = 0; x < this.cookiesPerHour.length; x++) {
		  this.dayTotalCookies += this.cookiesPerHour[x];
		}
	},
  dayTotalCookies: 0,
  
	// name
  
	// renderMethod
};

// generate random customer numbers and place in custPerHour array

firstAndPike.totalCookies();
//console.log(firstAndPike.custPerHour);
//console.log(firstAndPike.cookiesPerHour);
console.log(firstAndPike.dayTotalCookies);
