function particle(width, height) {
	this.x = Math.floor(Math.random() * width);
	this.y = Math.floor(Math.random() * height);
	this.xSpeed = 1;
	this.ySpeed = 0;
	
	this.element = $('<div class="particle" />')
		.appendTo('#particle-container')
		.css({ top: this.y, left: this.x });

	this.width = this.element.width();
	this.height = this.element.height();

	this.move = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if(this.x > width)
			this.x = 0 - this.width;
		if(this.y > height)
			this.y = 0 - this.height;
		this.element.css({ top:this.y, left:this.x });
	}
}

var particles = [];
function moveParticles() {
	for(var i=0; i<particles.length; i++)
		particles[i].move();
}

$(function() {
	var width = $('#particle-container').width();
	var height = $('#particle-container').height();
	for(var i=0; i<100; i++)
		particles.push(new particle(width, height));
	setInterval(moveParticles, 50);
});