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

  //  Language support options
  const supportedLangs = ['en', 'es'];

  //  Greetings object
  const greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  //  Formal greetings object
  const formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  //  Log In messages object
  const logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  }

  //  Create the prototype object for Greetr
  //  This is where we place all the methods we
  //  want to attach to Greetr
  Greetr.prototype = {

    // Full Name method
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },

    // Validate if language chosen in available
    validate: function() {
      if ( supportedLangs.indexOf(this.language) === -1 ) {
        throw "This language is not supported";
      }
    },

    // Regular greeting method
    greeting: function() {
      return `${greetings[this.language]} ${this.firstName}!`;
    },

    // Formal greeting method
    formalGreeting: function() {
      return `${formalGreetings[this.language]} ${this.fullName()}.`;
    },

    // Greet method
    greet: function(formal) {
      let msg;

      //  If undefined or null, this will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      // if this is invoked via console, log it
      if (console) {
        console.log(msg);
      }

      // 'this' being the Greetr object
      // makes this method chainable
      return this;
    },

    // Log method
    log: function() {
      if (console) {
        console.log(`${logMessages[this.language]} : ${this.fullName()}`);
      }

      // 'this' being the Greetr object
      // makes this method chainable
      return this;
    },

    // Set language on the fly via methods
    setLang: function(lang) {
      //  Set lang to 'this''s language
      this.language = lang;

      // Call our validate method
      this.validate();

      // 'this' being the Greetr object
      // makes this method chainable
      return this;
    },

    //  Connect jQuery selector to be used by
    //  our library
    HTMLGreeting: function(selector, formal) {
      
      //  Checks if jQuery is active
      if (!$) {
        throw 'jQuery is not loaded';
      }

      // Checks if there is a supplied selector
      if (!selector) {
        throw 'Please provide a jQuery selector'
      }

      //  Invoke 'greet' method
      this.greet();

      //  Update HTML to show changes
      $(selector).html(msg);

      // 'this' being the Greetr object
      // makes this method chainable
      return this;
    }
  };

  Greetr.init = function(firstName, lastName, language) {

    //  Create 'self' variable to wrap 'this'
    //  context to this function
    let self = this;

    //  Set defaults for the supplied parameters
    //  if nothing is supplied
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    // Do a validation check upon initialisation
    self.validate();
  }

  //  Any objects created with 'Greetr.init'
  //  will have their prototype pointing to
  //  'Greetr.prototype'
  Greetr.init.prototype = Greetr.prototype;

  //  Creates aliases in the 'global' object
  //  for Greetr
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
