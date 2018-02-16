'usage strict';

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