var ship;
var shot;
var shots = [];
var obj;
var objs = [];
var i, j;

function setup () {
	createCanvas(1900,1050);
	ship = new Ship();
}

function draw () {
	background(0);
    ship.show();
    if (keyIsDown(87)){
		ship.move(1);
	}
    if (keyIsDown(83)){
		ship.move(2);
	}
    if (keyIsDown(65)){
		ship.move(3);
	}
    if (keyIsDown(68)){
		ship.move(4);
    }
    for(i=0; i<shots.length ; i++){
		shots[i].show();
        shots[i].move();
        /*for(j=0; j<asteroids.length; j++){
			if(shots[i].hits(asteroids[j])){
				shots[i].remove;
				asteroids[j].remove;
			}
		}
		* */
    }
	obj = new Obj();
	objs.push(obj);
	
    for(i=0; i<objs.length ; i++){
		objs[i].show();
		objs[i].move();
	}
}
function mouseClicked(){
	var d1, dx1, dy1, n1, a1, b1;
	d1 = dist(ship.x, ship.y, mouseX, mouseY);
	n1 = d1/10;
	dx1 = mouseX - ship.x;
	dy1 = mouseY - ship.y;
	a1 = dx1/n1;
	b1 = dy1/n1;
	var shot = new Shot(a1, b1);
	shots.push(shot);
}
