'usage strict';

//GLobal Time Array
var times = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeList = [];
var cookiesTable = document.getElementById('cookies');

// object constructor for each store
function Store(storeName, minCustPerHour, maxCustPerHour, avgCookPerCust) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookPerCust = avgCookPerCust;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dayTotalCookies = 0;
  storeList.push(this);
  this.calcCustPerHour();
  this.calcCookies(); //
}

// Methods within the constructor
Store.prototype.calcCustPerHour = function() {
  //Create random number generator function, call here to save code in all objects
  for (var i = 0; i < times.length; i++) {
    this.custPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour);
  }
};
Store.prototype.calcCookies = function() { // Calculates cookies sold each day
  for (var i = 0; i < this.custPerHour.length; i++) {
    var hourlyCookies = Math.ceil(this.custPerHour[i] * this.avgCookPerCust);
    this.cookiesPerHour.push(hourlyCookies);
    this.dayTotalCookies += hourlyCookies;
  }
};

// Table Element Render Functions
Store.prototype.render = function() {
  this.calcCookies();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  // Create cell for Name of store
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  // Create cell for each hour of sales
  for (var i = 0; i < times.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  // Create a cell for total cookies sold
  tdEl = document.createElement('td');
  tdEl.textContent = this.dayTotalCookies;
  trEl.appendChild(tdEl);

  // Append to Table
  cookiesTable.append(trEl);
};

function headerRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  // Create Store Location Column Header
  thEl.textContent = 'Store Location';
  trEl.appendChild(thEl);

  // Create Hourly Time Cells
  for (var i = 0; i < times.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
  }
  // Create Total Sales Column Header
  thEl = document.createElement('th');
  thEl.textContent = 'Total Day Sales';
  trEl.appendChild(thEl);

  // Append to Table
  cookiesTable.append(trEl);
}

function cookieRows() {
  headerRow();

  for (var i = 0; i < storeList.length; i++) {
    storeList[i].render();
  }
}

// Instantiate constructor Store() for each set of inputs
new Store('pikePlace', 23, 65, 6.3);
new Store('seaTac', 3, 24, 1.2);
new Store('seaCenter', 11, 38, 3.7);
new Store('capHill', 20, 38, 2.3);
new Store('alki', 3, 24, 1.2);

cookieRows();
console.table(storeList);