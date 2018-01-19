
let arcBounce, arcBounce1, arcBounceDir, dropWaves, rainDrops

function setup() {
  createCanvas(800, 520)

  
  arcDrift = 0
  arcBounce = 0 
  arcBounce1 = 0
  arcBounceDir = 1
  dropWaves = 50
  rainDrops = 20

}

function draw() {
	
	background(15, 0, 148)
	
	


	noFill(0)
	

	stroke(255, 0, 0)
	arc(-40 + arcBounce, 0, 80, 80, 0, PI)
	arc(40 + arcBounce, 0, 80, 80, 0, PI)
	arc(120 + arcBounce, 0, 80, 80, 0, PI)
	arc(200 + arcBounce, 0, 80, 80, 0, PI)
	arc(280 + arcBounce, 0, 80, 80, 0, PI)
	arc(360 + arcBounce, 0, 80, 80, 0, PI)
	arc(440 + arcBounce, 0, 80, 80, 0, PI)
	arc(520 + arcBounce, 0, 80, 80, 0, PI)
	arc(600 + arcBounce, 0, 80, 80, 0, PI)
	arc(680 + arcBounce, 0, 80, 80, 0, PI)
	arc(760 + arcBounce, 0, 80, 80, 0, PI)
	
	arc(0 + arcBounce, 40, 80, 80, 0, PI)
	arc(80 + arcBounce, 40, 80, 80, 0, PI)
	arc(160 + arcBounce, 40, 80, 80, 0, PI)
	arc(240 + arcBounce, 40, 80, 80, 0, PI)
	arc(320 + arcBounce, 40, 80, 80, 0, PI)
	arc(400 + arcBounce, 40, 80, 80, 0, PI)
	arc(480 + arcBounce, 40, 80, 80, 0, PI)
	arc(560 + arcBounce, 40, 80, 80, 0, PI)
	arc(640 + arcBounce, 40, 80, 80, 0, PI)
	arc(720 + arcBounce, 40, 80, 80, 0, PI)
	arc(800 + arcBounce, 40, 80, 80, 0, PI)
	
	arc(-40 + arcBounce, 80, 80, 80, 0, PI)
	arc(40 + arcBounce, 80, 80, 80, 0, PI)
	arc(120 + arcBounce, 80, 80, 80, 0, PI)
	arc(200 + arcBounce, 80, 80, 80, 0, PI)
	arc(280 + arcBounce, 80, 80, 80, 0, PI)
	arc(360 + arcBounce, 80, 80, 80, 0, PI)
	arc(440 + arcBounce, 80, 80, 80, 0, PI)
	arc(520 + arcBounce, 80, 80, 80, 0, PI)
	arc(600 + arcBounce, 80, 80, 80, 0, PI)
	arc(680 + arcBounce, 80, 80, 80, 0, PI)
	arc(760 + arcBounce, 80, 80, 80, 0, PI)

	

	arcBounce += arcBounceDir
  if(arcBounce == 40) {
    arcBounceDir = -1
  }
  if(arcBounce == 0) {
    arcBounceDir = 1   
  }

  arcBounce1 += arcBounceDir
  if(arcBounce1 == 50) {
    arcBounceDir = -1
  }
  if(arcBounce == 0) {
    arcBounceDir = 1   
  }


for(let i = 0; i < rainDrops; i += 1) {
    
    noFill()
    stroke(0, 255, 8)
 	let angle = map(i, 0, rainDrops, 0, TWO_PI)
    let x = map(i, 0, rainDrops, 0, 800)

    let phase = cos(angle + frameCount * 0.02)
   	 ellipse(x, 100 + phase * 100, 0, 10)

}
//bezier(50, 50, 30, 80, 60, 90, 50, 50)
line(1 + frameCount,
       1 + frameCount,
       1 + frameCount,
       1 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(10 + frameCount,
       10 + frameCount,
       10 + frameCount,
       10 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(20 + frameCount,
       20 + frameCount,
       20 + frameCount,
       20 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(30 + frameCount,
       30 + frameCount,
       30 + frameCount,
       30 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(40 + frameCount,
       40 + frameCount,
       40 + frameCount,
       40 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(50 + frameCount,
       50 + frameCount,
       50 + frameCount,
       50 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(60 + frameCount,
       60 + frameCount,
       60 + frameCount,
       60 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(70 + frameCount,
       70 + frameCount,
       70 + frameCount,
       70 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(80 + frameCount,
       80 + frameCount,
       80 + frameCount,
       80 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(90 + frameCount,
       90 + frameCount,
       90 + frameCount,
       90 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(100 + frameCount,
       100 + frameCount,
       100 + frameCount,
       100 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(110 + frameCount,
       110 + frameCount,
       110 + frameCount,
       110 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(120 + frameCount,
       120 + frameCount,
       120 + frameCount,
       120 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(130 + frameCount,
       130 + frameCount,
       130 + frameCount,
       130 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(140 + frameCount,
       140 + frameCount,
       140 + frameCount,
       140 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(150 + frameCount,
       150 + frameCount,
       150 + frameCount,
       150 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(160 + frameCount,
       160 + frameCount,
       160 + frameCount,
       160 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(170 + frameCount,
       170 + frameCount,
       170 + frameCount,
       170 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(180 + frameCount,
       180 + frameCount,
       180 + frameCount,
       180 + frameCount % 1,
       (frameCount * 0.1) % 20)
line(190 + frameCount,
       190 + frameCount,
       190 + frameCount,
       190 + frameCount % 1,
       (frameCount * 0.1) % 20)

for(let i = 0; i < dropWaves; i += 1) {
    
    noFill()
    
    let angle = map(i, 0, dropWaves, 0, TWO_PI)
    let x = map(i, 0, dropWaves, 0, 800)

    let phase = cos(angle + frameCount * 0.02)
    ellipse(x, 420 + phase * 20, 10, 10)

    stroke(0, 255, 255)
    phase = sin(angle * 2 + frameCount * 0.02)
    ellipse(x, 380 + phase * 20, 10, 10)

    stroke(0, 187, 255)
    phase = cos(angle + frameCount * 0.03)
    ellipse(x, 380 + phase * 20, 10, 10)

    stroke(0, 229, 255)
    phase = sin(sin(frameCount * 0.01) * angle + frameCount * 0.1)
    ellipse(x + 10, 400 + phase * 20, 10, 10)

    stroke(0, 190, 255)
    phase = sin(angle + frameCount * 0.09)
    ellipse(x + 5, 480 + phase * 20, 10, 10)

    stroke(0, 230, 255)
    phase = cos(angle + frameCount * 0.07)
    ellipse(x + 1, 500 + phase * 20, 10, 10)

    stroke(0, 220, 255)
    phase = cos(angle * 2 + frameCount * 0.01)
    ellipse(x + 2, 475 + phase * 20, 10, 10)

    stroke(0, 215, 255)
    phase = cos(sin(frameCount * 0.01) * angle + frameCount * 0.03)
    ellipse(x, 440 + phase * 20, 10, 10)

    stroke(0, 235, 255)
    phase = cos(angle + frameCount * 0.06)
    ellipse(x, 400 + phase * 20, 10, 10)


	}

}

	



	//xPos = sin(i + frameCount * 0.05) * 100 
	//for(let i = 0; i < 10; i += 1) {
		//ellipse(250 + xPos, 25 + i * 50, (i + 1) * 5, (i + 1) * 5)
	//}


 	//if(xPos == width) {
 	//	speed = -1
 	//}	else if( xPos == 0 ) {
 	//	speed = 1
 	//}

 	//xPos += speed



