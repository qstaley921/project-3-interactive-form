


/*******************************************
* DOM ELEMENTS GO BELOW: 
******************************************/
 // FORM ELEMENTS (BELOW)
 const pageContainer = document.querySelector('.container');
 const form = document.querySelector('form');
 const submitBtn = document.querySelector('button[type="submit"]');
 const btnHint = document.querySelector('#btn-hint');

 // BASIC INFO ELEMENTS (BELOW)
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const titleSelect = document.querySelector('#title');
 const otherInput = document.querySelector('#other-job-role');

 // T-SHIRT INFO ELEMENTS (BELOW)
 const designSelect = document.querySelector('#design');
 const colorSelect = document.querySelector('#color');
 const colorOptions = colorSelect.querySelectorAll('option');

 // ACTIVITIES ELEMENTS (BELOW)
 const activitiesDiv = document.querySelector('#activities-box');
 const activityHint = document.querySelector('#activity-hint');
 const activityInputs = activitiesDiv.querySelectorAll('input');
 const totalP = document.querySelector('#activities-cost');
 const activityList = activitiesDiv.querySelectorAll('label');

 // PAYMENT ELEMENTS (BELOW)
 const paymentSelect = document.querySelector('#payment');
 const paymentOptions = paymentSelect.querySelectorAll('option');
 const paypalDiv = document.querySelector('#paypal');
 const bitcoinDiv = document.querySelector('#bitcoin');
 const creditcardDiv = document.querySelector('.credit-card-box');
 const expDiv = document.querySelector('.expiration-box');
 const ccInput = document.querySelector('#cc-num');
 const zipInput = document.querySelector('#zip');
 const cvvInput = document.querySelector('#cvv');
 
 // OTHER 
 const requiredInputs = [
   nameInput, emailInput, activitiesDiv, ccInput, zipInput, cvvInput
 ];

/*******************************************
* REGISTER ACTIVITIES FUNCTION GOES BELOW: 
******************************************/

function tallyCost() { 
  let totalCost = 0;
  if (activityInputs[1].checked) { // REGISTER ACTIVITES - DISABLES MORNING EVENTS OF SAME TIME
    activityInputs[3].disabled = 'disabled';
    activityInputs[3].parentElement.classList.add('disabled');
  } else if (activityInputs[3].checked) {
    activityInputs[1].disabled = 'disabled';
    activityInputs[1].parentElement.classList.add('disabled');
  } else {
    activityInputs[1].disabled = '';
    activityInputs[3].disabled = '';
    activityInputs[1].parentElement.classList.remove('disabled');
    activityInputs[3].parentElement.classList.remove('disabled');
  }
  if (activityInputs[2].checked) { // REGISTER ACTIVITIES - DISABLES AFTERNOON EVENTS OF SAME TIME
    activityInputs[4].disabled = 'disabled';
    activityInputs[4].parentElement.classList.add('disabled')
  } else if (activityInputs[4].checked) {
    activityInputs[2].disabled = 'disabled';
    activityInputs[2].parentElement.classList.add('disabled');
  } else {
    activityInputs[2].disabled = '';
    activityInputs[4].disabled = '';
    activityInputs[2].parentElement.classList.remove('disabled');
    activityInputs[4].parentElement.classList.remove('disabled');
  }

  for (let i = 0; i < activityInputs.length; i++) { // REGISTER ACTIVITIES - TALLIES TOTAL COST 
    const input = activityInputs[i]; 
    if (input.checked) {
      totalCost += parseInt(input.dataset.cost);
    } 
  }

  if (totalCost > 0) { // validates that at least one event is selected
    activitiesDiv.dataset.valid = 'true';
    activityHint.style.display = 'none';
  } else if (totalCost <= 0) {
    activitiesDiv.dataset.valid = 'false';
  }

  totalP.innerText = `Total: $${totalCost}`; // reprints total cost after calculation
}

 /*******************************************
* VALIDATION FUNCTIONS GO BELOW: 
******************************************/

// INPUT LISTENERS (BELOW)

nameInput.addEventListener('input', validateInput(testName)); 
emailInput.addEventListener('input', validateInput(testEmail)); 
ccInput.addEventListener('input', validateInput(testCC));
zipInput.addEventListener('input', validateInput(testZip));
cvvInput.addEventListener('input', validateInput(testCVV));

function validateInput(test) {
  return e => {
    const input = e.target; 
    test(input);
    showError(e.target);
  };
}

function testName(input) {
  if (/^$/.test(input.value) && !/^[a-z]+\s?[a-z]*\s*$/i.test(input.value)) {
    input.dataset.valid = 'false1';
  } else if (/\d+/.test(input.value) && !/^[a-z]+\s?[a-z]*\s*$/i.test(input.value)) {
    input.dataset.valid = 'false2';
  } else if (/\w+/.test(input.value) && !/^[a-z]+\s?[a-z]*\s*$/i.test(input.value)) {
    input.dataset.valid = 'false3';
  } else if (/^[a-z]+\s?[a-z]*\s*$/i.test(input.value)) {
    input.dataset.valid = 'true';
  } 
}

function testEmail(input) {
  if (!/^[\S]+$/.test(input.value)) {
    input.dataset.valid = 'false1';
  } else if (/^[a-zA-Z0-9]+$/.test(input.value) && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(input.value)) {
    input.dataset.valid = 'false2';
  } else if (/^[a-zA-Z0-9]+@$/.test(input.value) && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(input.value)) {
    input.dataset.valid = 'false3';
  } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(input.value)) {
    input.dataset.valid = 'true';
  }
}

function testCC(input) {
  if (!/^[\S]+$/.test(input.value)) {
    input.dataset.valid = 'false1';
  } else if (!/^[0-9]+$/.test(input.value) && !/^[0-9]{13,16}$/.test(input.value)) {
    input.dataset.valid = 'false2';
  } else if (/^[0-9]+$/.test(input.value) && !/^[0-9]{13,16}$/.test(input.value)) {
    input.dataset.valid = 'false3';
  } else if (/^[0-9]{13,16}$/.test(input.value)) {
    input.dataset.valid = 'true';
  } 
}

function testZip(input) {
  if (!/^[\S]+$/.test(input.value)) {
    input.dataset.valid = 'false1';
  } else if (!/^[0-9]+$/.test(input.value) && !/^[0-9]{5}$/.test(input.value)) {
    input.dataset.valid = 'false2';
  } else if (/^[0-9]+$/.test(input.value) && !/^[0-9]{5}$/.test(input.value)) {
    input.dataset.valid = 'false3';
  } else if (/^[0-9]{5}$/.test(input.value)) {
    input.dataset.valid = 'true';
  } 
}

function testCVV(input) {
  if (!/^[\S]+$/.test(input.value)) {
    input.dataset.valid = 'false1';
  } else if (!/^[0-9]+$/.test(input.value) && !/^[0-9]{3}$/.test(input.value)) {
    input.dataset.valid = 'false2';
  } else if (/^[0-9]+$/.test(input.value) && !/^[0-9]{3}$/.test(input.value)) {
    input.dataset.valid = 'false3';
  } else if (/^[0-9]{3}$/.test(input.value)) {
    input.dataset.valid = 'true';
  } 
}

function showError(input) {
  const label = input.parentElement;
  const dataset = input.dataset.valid;
  const false1 = label.querySelector('.false1');
  const false2 = label.querySelector('.false2');
  const false3 = label.querySelector('.false3');
  if (dataset === 'true') { // Show check sign 
    if (label.querySelector('i') !== null) {
      const icon = label.querySelector('i');
      icon.remove();
    }
    input.insertAdjacentHTML('beforebegin', '<i class="fas fa-check-circle"></i>');
    false1.style.display = 'none';
    false2.style.display = 'none';
    false3.style.display = 'none';
  } else if (dataset === 'false1') { // Shows false 1 Hint
    if (label.querySelector('i') !== null) {
      const icon = label.querySelector('i');
      icon.remove();
    }
    input.insertAdjacentHTML('beforebegin', '<i class="fas fa-times-circle"></i>');
    false1.style.display = 'inline-block';
    false2.style.display = 'none';
    false3.style.display = 'none';
  } else if (dataset === 'false2') { // Shows false 2 Hint
    if (label.querySelector('i') !== null) {
      const icon = label.querySelector('i');
      icon.remove();
    }
    input.insertAdjacentHTML('beforebegin', '<i class="fas fa-times-circle"></i>');
    false1.style.display = 'none';
    false2.style.display = 'inline-block';
    false3.style.display = 'none';
  } else if (dataset === 'false3') { // Shows false 3 Hint
    if (label.querySelector('i') !== null) {
      const icon = label.querySelector('i');
      icon.remove();
    }
    input.insertAdjacentHTML('beforebegin', '<i class="fas fa-times-circle"></i>');
    false1.style.display = 'none';
    false2.style.display = 'none';
    false3.style.display = 'inline-block';
  } 
}

/*******************************************
* EVENT LISTENERS GO BELOW: 
******************************************/

window.addEventListener('load', () => {
  nameInput.focus(); // NAME FIELD SECTION 
  otherInput.style.display = 'none'; // JOB ROLE SECTION (other is hidden on load)
  colorSelect.parentElement.style.display = 'none'; // T-SHIRT (t-shirt color is hidden on load)
  paymentOptions[1].selected = 'selected'; // PAYMENT INFO 
  bitcoinDiv.style.display = 'none'; // PAYMENT INFO
  paypalDiv.style.display = 'none'; // PAYMENT INFO 
});

// SELECT LISTENERS (BELOW)

titleSelect.addEventListener('change', (e) => { // JOB-ROLE SECTION (other input displays when selected)
  if (e.target.value === 'other') {
    otherInput.style.display = '';
  } else {
    otherInput.style.display = 'none';
  }
});

designSelect.addEventListener('change', (e) => { // T-SHIRT SECTION 
  colorSelect.parentElement.style.display = ''; // color field is enabled 
  colorOptions[0].selected = 'selected'; // resets the selection on change 
  if (e.target.value === 'js puns') { // dropdown updates with pun colors  
    for(let i = 0; i < colorOptions.length; i++) {
      if(colorOptions[i].dataset.theme === 'heart js') {
        colorOptions[i].style.display = 'none';
      } else {
        colorOptions[i].style.display = '';
      }
    }
  }
  if (e.target.value === 'heart js') { // dropdown updates with heart colors
    for (let i = 0; i < colorOptions.length; i++) {
      if (colorOptions[i].dataset.theme === 'js puns') {
        colorOptions[i].style.display = 'none';
      } else {
        colorOptions[i].style.display = '';
      }
    }
  }
});

paymentSelect.addEventListener('change', (e) => { // PAYMENT INFO 
  paypalDiv.style.display = 'none';
  bitcoinDiv.style.display = 'none';
  creditcardDiv.style.display = 'none';
  expDiv.style.display = 'none';
  if (e.target.value === 'paypal') { // hides non-selected payments
    paypalDiv.style.display = '';
    ccInput.dataset.valid = 'true';
    zipInput.dataset.valid = 'true';
    cvvInput.dataset.valid = 'true';
  } else if (e.target.value === 'bitcoin') {
    bitcoinDiv.style.display = '';
    ccInput.dataset.valid = 'true';
    zipInput.dataset.valid = 'true';
    cvvInput.dataset.valid = 'true';
  } else {
    creditcardDiv.style.display = '';
    expDiv.style.display = '';
    const event = new Event('input');
    ccInput.value = '';
    ccInput.dispatchEvent(event); // runs a new 'input' event, in case the field was formerly validated 'true' 
    zipInput.value = '';
    zipInput.dispatchEvent(event);
    cvvInput.value = '';
    cvvInput.dispatchEvent(event);
  }
});

// CHECKBOX LISTENER (BELOW)

activitiesDiv.addEventListener('click', tallyCost); // REGISTER FOR ACTIVITIES SECTION (event trigger)

// FOCUS LISTENER (BELOW) // adds focus states for activity events

document.addEventListener('focusin', (e) => {
  if(e.target.type === 'checkbox') {
    activityList.forEach(function(label){ // resets all the activity labels focus styles
      label.classList.remove('focus');
    });
    e.target.parentElement.classList.add('focus');
  } else {
    activityList.forEach(function(label){ // resets all the activity labels focus styles
      label.classList.remove('focus');
    });
  }
});

/*******************************************
* SUBMIT FORM COMPONENTS GO BELOW: 
******************************************/

form.addEventListener('submit', submitForm); // SUBMIT EVENT LISTENER

function submitForm(event) {
  for (let i = 0; i < requiredInputs.length; i++) {
    if (requiredInputs[i].dataset.valid !== 'true') {
      event.preventDefault();
      if (requiredInputs[i] === activitiesDiv) {
        activityHint.style.display = 'inline-block';
        activityHint.scrollIntoView();
        return;
      } else {
        const event = new Event('input');
        requiredInputs[i].focus();
        requiredInputs[i].dispatchEvent(event);
        return;
      }
    }
  }
  alert('Yay! Your form was submitted');
}