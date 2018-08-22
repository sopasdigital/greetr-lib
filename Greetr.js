//  create an IIFE
//  Self-contained function so that you can reuse 
//  and not affect other libraries or code

//  accept global and jQuery as params
(function( global, $ ) {

  //  Do away with needing to use 'new' when creating
  //  a new object
  const Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  //  Create the prototype object for Greetr
  Greetr.prototype = {};

  Greetr.init = function(firstName, lastName, language) {

    //  Create 'self' variable to wrap 'this'
    //  context to this function
    let self = this;

    //  Set defaults for the supplied parameters
    //  if nothing is supplied
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }

  //  Any objects created with 'Greetr.init'
  //  will have their prototype pointing to
  //  'Greetr.prototype'
  Greetr.init.prototype = Greetr.prototype;

  //  Creates aliases in the 'global' object
  //  for Greetr
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
