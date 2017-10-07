function Shot(a, b) {
	this.a = a;
	this.b = b;
	this.x = ship.x;
	this.y = ship.y;
	this.r = 8;
	this.show = function() {
		noStroke();
		fill(255,0,0);
		ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.move = function() {
		this.x += this.a;
		this.y += this.b;
	}
	/*this.hits = function(asteroid) {
		var d2 = dist(this.x, this.y, asteroid.x, asteroid.y);
		if(d2 < (this.r + asteroid.r){
			return true;
		}
		else{
			return false;
		}
    */
}
