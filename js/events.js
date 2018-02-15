'usage strict';

// Global variables for DOM access and such
var salesForm = document.getElementById('salesForm');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This function is the event handler for submitting sales data
function handleDataSubmit(event) {
  console.log('log of the event object: ', event);
  console.log('log of the event.target: ', event.target);
  console.log('log of the event.target.where; ', event.target.where);
  console.log('log of the event.target.min; ', event.target.min);
  console.log('log of the event.target.max; ', event.target.max);
  console.log('log of the event.target.avg; ', event.target.avg);

  event.preventDefault();// gotta have it for this purpose. prevents page reload on a 'submit' event

  //Validation to prevent empty form fields ===> I DONT UNDERSTAND THIS YET!!!
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
  var newStore = new Store(submitWhere, submitMin, submitMax, submitAvg);

  newStore.render(); //calling the render function for new row
  console.table(storeList);
}

// Event listener for form "submit yer data" button
salesForm.addEventListener('submit', handleDataSubmit);
