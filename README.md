# Preface
TITLE: Treehouse Interactive Form | Project 3 | JS by Quentin Staley
PREFACE:

*This readme will explain the structure of the JavaScript `script.js`*
1. ... using numbered bullets for each `STEP`
**AND**
*Italics for commentary*

------

## STEP 0: The structure of the JS

*Is there a correct way to structure JS? I'm not sure, yet. Here's how I did it.*

1. Universal Variables up-top
    - `dom element constants` *like, a lot them; I apologize LoL*
2. The **Register Activities Functions** directly below the variables *i.e. functions that provide interactivty to the `activities` section*
    - `function tallycost()` *changes the `totalCost` based on which activities are selected*
3. The **Validation Functions** directly below the `activities  functions` *i.e. functions that validate user input and apply the corresponding visual changes*
    - `input.eventListeners` *adds event listeners to each input element*
    - `function validateInput(test)` *passes the listener even through the corresponding `test` argument, where a `testElement` function is passed through the function //I'll explain further below*
    - `testElement(input)` (times five; one for each input) *where the input is the event from the event listener, testing using regex, whether the form input is valid*
    - `showError(input)` *adds the corresponding error/check messages/icons to the corresponding `input` which, again, is still the passed `event` from the eventListener
4. The **Event Listeners** directly below the `validation functions` 
    - `onload.eventListener` *functions on page load* 
    - `otherTitle.eventListener` *functions when 'other' is selected as job title*
    - `shirtColor.eventListener` *functions when a t-shirt type is chosen*
    - `payment.eventListener` *functions when a payment type is selected*
    - `activitySelect.eventListener` *functions when an activity is selected
    - `submitForm.eventListener` *functions when the form is submitted* 

------ 

## STEP 1: Load the form elements 'dynamically' 

1. On load, the `name.input` is focused
2. `other.title` textfield & `shirt.color` input are hidden
3. `creditCard` is selected as payment option & `bitcoin` & `paypal` are hidden

------

## STEP 2: Validate the input fields

1. Add an event listener on each of the form's 5 `text.inputs`
2. Event Listener calls `validateInput(testInput)`
3. `validateInput(test)` passes one of the below (five) functions:
    - `testName(input)`
    - `testEmail(input)`
    - `testCC(input)`
    - `testZip(input)`
    - `testCVV(input)`
    - Each function does the same thing: 
        - Passes the `event.trigger`
        - tests `trigger.value` against a `regex.value`
        - changes the `css: display` on a `<data-set>` *either `hidden` or `inline`*
4. `validateInput(test)` then calls `showError(event.trigger)` passing the event trigger/target
5. `showError` merely reads the `dataset` from the `event.target` and makes that `HTML Element` either `css: hidden` or `css: inline` 
    - It also inserts a [fontawesome](fontawesome.com) icon as `adjacentHTML` within the `input.parentElement` 

## STEP 3: Submit the form

1. Check the `<datasets>` *I used HTML `data:` properties to add validation to each of the inputs. So ... if the `data: true` that input was valid and form would submit. Or, if `data: false1`, the `<p data: false1>This is the first error message</p>` would be visible and the form would not submit. Looked at each `input.dataset` in the `requiredInputs[]` array declared up top*
2. Activities is Valid *You'll notice I've failed to mention the activities section thus far. That's because I considered it separate from the `text.input` fields. There's a `tallyCost()` function that comprehensively checks if activities are selected, while also updating the 'total cost:'*
    - If `totalCost` is > 0, we can assume an activity is selected, meaning, the field is valid.
3. Artificially trigger a `new Event()` on each of the `requiredInputs[]` *this step forces the validation to recheck whatever `input.value` might have been pasted/typed and then later de-selected re-selected*
    - i.e. if you put invalid CreditCard numbers, then seleted PayPal, then reselected Credit Card, this `new Event()` would force any pre-existing Credit Card data to be re-evaluated, despite the 'pre-existing' data not triggering its own `input.event` 
4. Submit Form! Yay! *I added a grimey little alert just in case users thought a `refresh` meant the form wasn't submitted but was instead erased. 

### OVERALL COMMENTARY: 

This program feels like a mess. It's not as succint as I'd like, especially the validation bit with functions passing themselves within other functions. I've added commentary so I don't personally forget, or confuse myself, and even a few days later as I write this, I'm already stupefied as to how/why I derived at the solutions I did. Coding – the true exposure of human logic. 

If there are some obvious ways to refactor, let me know. Otherwise, assuming I haven't violated the common decency of the JavaScript community/ethics/standards, I understand this is a work in progress, and I'm happy to call this project done, and to try for `DRY-er` code in the next. 

Thank you so much for reading till here. It means a lot, not just to me, but to my limited understanding of the `developing community` who – seemingly – cares about the proccess/fine-print in unimagineable earnesty. :smiley:  