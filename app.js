//  Creates a new object (the way we built the library 
//  allows us to omit having the 'new' keyword)
var g = G$('John', 'Doe');

//  Example of method chanining
g.greet().setLang('es').greet(true);

//  Add click event to '#Button--Login'
$('#Button--Login').click(function() {
  
  //  Initialise Greetr
  const greetrUser = G$('John', 'Doe');

  // Hides the selections once you click
  $('#LanguageSelection').hide();

  greetrUser.setLang($('#LanguageSelection-list').val()).HTMLGreeting('#Text--Greeting', true).log();
});
