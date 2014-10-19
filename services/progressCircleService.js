Daily
.service('progressCircleService', function() {
	var service = {
		canvas: '',
		wrapper: '',
		context: '',
		centerX: 0,
		centerY: 0,
		radius: 0,
		w: 8,
		a: 0,
		err: 10,
		max: 70,
		
		init: function(){
			this.canvas = document.getElementById('home-progress-canvas');
			this.wrapper = this.canvas.parentNode;
			this.canvas.width = this.wrapper.clientWidth;
			this.canvas.height = this.wrapper.clientHeight;
			this.context = this.canvas.getContext('2d');
			this.centerX = this.canvas.width / 2;
			this.centerY = this.canvas.height / 2;
			this.radius = this.centerX - this.w/2;
		},

		drawCircle: function(progress, color, lineWidth){
		  var circ = Math.PI * 2;
	      var quart = Math.PI / 2;
	      
	      this.context.beginPath();
	      this.context.arc(this.centerX, this.centerY, this.radius, -(quart), ((circ) * progress/100) - quart, false);
	      this.context.lineWidth = lineWidth;
	      this.context.strokeStyle = color;
	      this.context.lineCap = 'round';
	      this.context.stroke();
		},

		requestAnimationFrame: function (){
			window.requestAnimationFrame=(function(){
			    return window.requestAnimationFrame || 
			        window.webkitRequestAnimationFrame || 
			        window.mozRequestAnimationFrame || 
			        function(callback){window.setTimeout(callback,17);};
			})();
		},

		animate: function(){
			
		  //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		  this.a++;

		  this.drawCircle(100, '#eee', this.w);
		  if(this.a <= (this.max+this.err) && this.a > this.max) {
		    this.drawCircle((this.a+this.err), '#ea694e', this.w-1);
		  }
		  if(this.a < this.max){
		    this.drawCircle(this.a, '#6fce7e', this.w);
		  }
		  else {
		    this.drawCircle(this.max, '#6fce7e', this.w);
		  }

		  if(this.a < (this.max+this.err)) {
		    window.requestAnimationFrame(this.animate);
		  }
		}
		
	}
	return service;

});