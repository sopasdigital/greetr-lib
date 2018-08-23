//  Creates a new object (the way we built the library 
//  allows us to omit having the 'new' keyword)
const g = G$('John', 'Doe');

//  Example of method chanining
g.greet().setLang('es').greet(true);

//  Add click event to '#Button--Login'
$('#Button--Login').click(function() {

  //  Initialise Greetr
  const greetr = G$('John', 'Doe'),
        chosenLang = $('#LanguageSelection-list').val(),        //  Define where to get the value for language choice
        targetElem = '#Text--Greeting',                         //  Define where to put the resulting message
        greetType = true;                                       // Define if greeting type is formal or not (Boolean)

  //  Hides the selections once you click
  //  Optional
  $('#LanguageSelection').hide();

  //  Invokes greetrUser
  //  Code has been updated so that user's don't need
  //  to change anything here unless they want to chain
  //  other methods
  greetr.setLang(chosenLang).HTMLGreeting(targetElem, greetType).log();
});
