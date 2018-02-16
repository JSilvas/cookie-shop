'usage strict';
// Global variables for DOM access and such
var times = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeList = [];
var cookiesTable = document.getElementById('cookies');
var hourlyTotals = [];

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
  this.calcCookies();
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

  // Append row to Table
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
  cookiesTable.appendChild(trEl);
}

function renderData() {
  for (var i = 0; i < storeList.length; i++) {
    storeList[i].render();
  }
}

function calcHourlyTotals() {
  hourlyTotals = [];
  for(var i = 0; i < times.length; i++) {
    var total = 0;
    for(var j = 0; j < storeList.length; j++) {
      total += storeList[j].cookiesPerHour[i];
      console.log(total, 'inner loop');
    }
    hourlyTotals.push(total);
    console.log('outer for loop total: ' + total);
  }
  console.log('hourlyTotals: ' + hourlyTotals);
}

function calcTotalSum() {
  var totalSum = 0;
  for (var i = 0; i < times.length; i++) {
    totalSum += hourlyTotals[i];
  }
  console.log('totalSum: ' + totalSum);
  return totalSum;
}

function footerRow() {
  calcHourlyTotals();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);

  for (var i = 0; i < times.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotals[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = calcTotalSum();
  trEl.appendChild(tdEl);

  cookiesTable.appendChild(trEl);
}

function resetTable() {
  cookiesTable.innerHTML = '';
  headerRow();
  renderData();
  footerRow();
}

// Instantiate constructor Store() for each set of inputs
new Store('First & Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 3, 24, 1.2);

headerRow();
renderData();
footerRow();

console.table(storeList);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables for DOM access and such
var salesForm = document.getElementById('salesForm');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This function is the event handler for submitting sales data
function handleDataSubmit(event) {
  console.log('log of the event object: ', event);
  console.log('log of the event.target: ', event.target);

  event.preventDefault();// gotta have it for this purpose. prevents page reload on a 'submit' event

  if (!event.target.where.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
    return alert('Fields cannot be empty!');
  }
  var submitWhere = event.target.where.value;
  var submitMin = parseInt(event.target.min.value);
  var submitMax = parseInt(event.target.max.value);
  var submitAvg = parseFloat(event.target.avg.value);
  // This empties the form fields after the data has been grabbed
  event.target.reset();
  // instantiate user input array in Store constructor
  new Store(submitWhere, submitMin, submitMax, submitAvg);
  //Recalculate and re-render table
  resetTable();
  console.table(storeList);
}

// Event listener for form "submit yer data" button
salesForm.addEventListener('submit', handleDataSubmit);