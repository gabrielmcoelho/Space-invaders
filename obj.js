function Obj(){
	this.r = 15;
	escolha = random(4);
	if(escolha>=0 && escolha<1){
		this.x = 0;
		this.y = random(height);
	}
	else if(escolha>=1 && escolha <2){
		this.x = random(width);
		this.y = 0;
	}
	else if(escolha>=2 && escolha <3){
		this.x = width;
		this.y = random(height);
	}
	else{
		this.x = random(width);
		this.y = height;
	}
	this.show = function() {
		fill(128,128,128);
		ellipse(this.x,this.y,2*this.r,2*this.r);
    }
    this.move = function() {
		this.x += random(-30,30);
		this.y += random(-30,30);
	}
}
