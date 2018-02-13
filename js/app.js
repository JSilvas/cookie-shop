'usage strict';

//GLobal Time Array
var times = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var firstAndPike = {
	// min and max customers per hour
	minCustPerHour: 23,
	maxCustPerHour: 65,	
	avgCookPerCust: 6.3,
  
  // methodToGenerateRandomCustomers		
	calcCustPerHour: function() {
		//Create random number generator function, call here to save code in all objects
		for (var i = 0; i < times.length; i++) {
			this.custPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour);
		}
	},
	// Array customers each Hour
	custPerHour: [],
	
	// Calculate cookies sold each hour and Total for Day
  calcCookies: function() {
		for (var i = 0; i < this.custPerHour.length; i++) {
			var hourlyCookies = (this.custPerHour[i] * this.avgCookPerCust);
			this.cookiesPerHour.push(hourlyCookies);
			this.dayTotalCookies += hourlyCookies;
    }
  },
  // Array cookies sold per hour and Total for day
  cookiesPerHour: [],
  dayTotalCookies: 0,
  
	// renderMethod
	render: function() {
		this.calcCustPerHour();
		this.calcCookies();
		var ulEl = document.getElementById('firstAndPike');		
		for (var i = 0; i < this.cookiesPerHour.length; i++) {
			// create an element
			var liEl = document.createElement('li');
			// give it content
			liEl.textContent = times[i] + ': ' + Math.round(this.cookiesPerHour[i]);
			// append it to the DOM
			// parent.appendChild(child);
			ulEl.appendChild(liEl);
		}
		// create an element
		var liEl = document.createElement('li');
		// render dayTotalCookies
		liEl.className = ('total');
		liEl.textContent = 'Total: ' + Math.round(this.dayTotalCookies) + ' cookies';
		// Append to DOM
		ulEl.appendChild(liEl);
	}
};


var seaTac = {
	// min and max customers per hour
	minCustPerHour: 3,
	maxCustPerHour: 24,	
	avgCookPerCust: 1.2,
	
	// methodToGenerateRandomCustomers		
	calcCustPerHour: function() {
		for (var i = 0; i < times.length; i++) {
			this.custPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour);
		}
	},
	// Array customersEachHour
	custPerHour: [],
	
	// cookiesSoldEachHour = []methodToCalc
	calCookiesPerHour: function() {
		this.calcCustPerHour();
		for (var i = 0; i < this.custPerHour.length; i++) {
			this.cookiesPerHour.push(this.custPerHour[i] * this.avgCookPerCust);
		}
	},
	// Array cookies sold per hour
	cookiesPerHour: [],
	
	// TotalCookiesForTheDay = methodToCalc
	totalCookies: function() {
		this.calCookiesPerHour();
		for (var x = 0; x < this.cookiesPerHour.length; x++) {
			this.dayTotalCookies += this.cookiesPerHour[x];
		}
	},
	dayTotalCookies: 0,
	
	// renderMethod
	render: function() {
		this.totalCookies();
		var ulEl = document.getElementById('seaTac');
		for (var i = 0; i < this.cookiesPerHour.length; i++) {
			// create an element
			var liEl = document.createElement('li');
			// give it content
			liEl.textContent = times[i] + ': ' + Math.round(this.cookiesPerHour[i]);
			// append it to the DOM
			// parent.appendChild(child);
			ulEl.appendChild(liEl);
		}
		// create an element
		var liEl = document.createElement('li');
		// render dayTotalCookies
		liEl.className = ('total');
		liEl.textContent = 'Total: ' + Math.round(this.dayTotalCookies) + ' cookies';
		// Append to DOM
		ulEl.appendChild(liEl);	
	}
};


var seaCenter = {
	// min and max customers per hour
	minCustPerHour: 11,
	maxCustPerHour: 38,	
	avgCookPerCust: 3.7,
	
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
		for (var i = 0; i < this.custPerHour.length; i++) {
			this.cookiesPerHour.push(this.custPerHour[i] * this.avgCookPerCust);
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
	
	// renderMethod
	render: function() {
		this.totalCookies();
		var ulEl = document.getElementById('seaCenter');
		for (var i = 0; i < this.cookiesPerHour.length; i++) {
			// create an element
			var liEl = document.createElement('li');
			// give it content
			liEl.textContent = times[i] + ': ' + Math.round(this.cookiesPerHour[i]);
			// append it to the DOM
			// parent.appendChild(child);
			ulEl.appendChild(liEl);
		}
		// create an element
		var liEl = document.createElement('li');
		// render dayTotalCookies
		liEl.className = ('total');
		liEl.textContent = 'Total: ' + Math.round(this.dayTotalCookies) + ' cookies';
		// Append to DOM
		ulEl.appendChild(liEl);	
	}
};


var capHill = {
	// min and max customers per hour
	minCustPerHour: 20,
	maxCustPerHour: 38,	
	avgCookPerCust: 2.3,
	
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
		for (var i = 0; i < this.custPerHour.length; i++) {
			this.cookiesPerHour.push(this.custPerHour[i] * this.avgCookPerCust);
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
	
	// renderMethod
	render: function() {
		this.totalCookies();
		var ulEl = document.getElementById('capHill');
		for (var i = 0; i < this.cookiesPerHour.length; i++) {
			// create an element
			var liEl = document.createElement('li');
			// give it content
			liEl.textContent = times[i] + ': ' + Math.round(this.cookiesPerHour[i]);
			// append it to the DOM
			// parent.appendChild(child);
			ulEl.appendChild(liEl);
		}
		// create an element
		var liEl = document.createElement('li');
		// render dayTotalCookies
		liEl.className = ('total');
		liEl.textContent = 'Total: ' + Math.round(this.dayTotalCookies) + ' cookies';
		// Append to DOM
		ulEl.appendChild(liEl);
	}
};


var alki = {
	// min and max customers per hour
	minCustPerHour: 2,
	maxCustPerHour: 16,	
	avgCookPerCust: 4.6,
	
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
		for (var i = 0; i < this.custPerHour.length; i++) {
			this.cookiesPerHour.push(this.custPerHour[i] * this.avgCookPerCust);
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
	
	// renderMethod
	render: function() {
		this.totalCookies();
		var ulEl = document.getElementById('alki');
		for (var i = 0; i < this.cookiesPerHour.length; i++) {
			// create an element
			var liEl = document.createElement('li');
			// give it content
			liEl.textContent = times[i] + ': ' + Math.round(this.cookiesPerHour[i]);
			// append it to the DOM
			// parent.appendChild(child);
			ulEl.appendChild(liEl);
		}
		// create an element
		var liEl = document.createElement('li');
		// render dayTotalCookies
		liEl.className = ('total');
		liEl.textContent = 'Total: ' + Math.round(this.dayTotalCookies) + ' cookies';
		// Append to DOM
		ulEl.appendChild(liEl);
	}
};


firstAndPike.render();
seaTac.render();
seaCenter.render();
capHill.render();
alki.render();


//console.log(firstAndPike.custPerHour);
//console.log(firstAndPike.cookiesPerHour);
//console.log(firstAndPike.dayTotalCookies);
