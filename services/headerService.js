Daily
.service('headerService', function() {
	var service = {
		headerApp: "",
  		headers: "",
  		header: "",

  		init: function (currentlyHeader){
  			this.headerApp = document.getElementById('header-app');
  			this.headers = this.headerApp.getElementsByClassName('header-in');
  			if(currentlyHeader) this.header = document.getElementById(currentlyHeader);
  		},

	    clean: function(){
	      for(var index = 0; index < this.headers.length; index++) {
	  	    this.headers[index].classList.add('close');
	  	  }
	    },

	    out: function(){
  			this.init(false);
	    	this.clean();
	    	this.headerApp.setAttribute('hidden', 'true');
  		},

	    login: function(){
  			this.init('header-login-register');
	    	this.clean();
	    	this.headerApp.classList.add('transparent');
  			this.header.classList.remove('close');
  			this.headerApp.removeAttribute('hidden');
  			this.headerApp.getElementsByTagName('h1')[0].innerHTML = 'Login';
  		},

  		register: function(){
  			this.init('header-login-register');
	    	this.clean();
	    	this.headerApp.classList.add('transparent');
  			this.header.classList.remove('close');
  			this.headerApp.removeAttribute('hidden');
  			this.headerApp.getElementsByTagName('h1')[0].innerHTML = 'Register';
  		},

  		home: function(){
  			this.init('header-home');
	    	this.clean();
	    	this.headerApp.classList.remove('transparent');
  			this.header.classList.remove('close');
  			this.headerApp.removeAttribute('hidden');
  		},

	    daily: function(){
	    	this.init('header-daily');
	    	this.clean();
	    	this.headerApp.classList.add('transparent');
  			this.header.classList.remove('close');
  			this.headerApp.removeAttribute('hidden');
	    },

	    practice: function(){
	    	this.init('header-practice');
	    	this.clean();
	    	this.headerApp.classList.add('transparent');
  			this.header.classList.remove('close');
  			this.headerApp.removeAttribute('hidden');
	    },

	    review: function(){
	    	this.init('header-review');
	    	this.clean();
	    	this.headerApp.classList.remove('transparent');
  			this.header.classList.remove('close');
  			this.headerApp.removeAttribute('hidden');
	    }
  		
		
	};
	return service;
})