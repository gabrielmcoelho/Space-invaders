function Ship() {
	this.x = width/2;
	this.y = height/2;
	this.show = function() {
		fill(255);
		ellipse(this.x,this.y,30,60);
    }
    this.move = function(dir) {
		if(dir==1){
			this.y -= 5;
	    }
	    else if(dir==2){
			this.y += 5;
	    }
	    else if(dir==3){
			this.x -= 5;
	    }
	    else{
			this.x += 5;
		}
	}
	this.remove = function(){
		this.x = -100;
		this.y = -100;
	}
}
