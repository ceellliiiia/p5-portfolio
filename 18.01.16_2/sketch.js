let agents, stepSize, agentSize, noiseScale, lifeSpan, brushSize, bristleCount

function setup() {
  createCanvas(800, 600)

  agents = []
  agentSize = 100
  lifeSpan = 10
  brushSize = 10
  bristleCount = 22

  // for(let i = 0; i < numAgents; i += 1) {
  //   agents[i] = {
  //     x: random(width),
  //     y: random(height),
  //     colorR: random(255),
  //     colorG: random(0),
  //     colorB: random(255)
  //   }
  // }

  

  background(0)

  noStroke()
}


function draw() {

  
  background(0, .01)
  translate(width / 2, height / 2)
  update()

  if(mouseIsPressed) {
    for(let i = 0; i < bristleCount; i += 1) {
       agents.push(
        {
          x: (mouseX - width / 2) + random(0 - brushSize),
          y: (mouseY - width / 2) + random(0 - brushSize),
          colorR: random(255),
          colorG: random(100),
          colorB: random(255),
          age: 0
        }
      )
    }
  }

  for(let r = 0; r < 6; r += 1) {
    rotate(radians(360/100))
    for(let i = 0; i < agents.length; i += 1) {
    fill(agents[i].colorR, agents[i].colorG, agents[i].colorB)
    ellipse(agents[i].x, agents[i].y, agentSize, agentSize)
    }
  }
  

  for(let i = agents.length - 1; i >= 0; i -= 1) {
    if(agents[i].age > lifeSpan) {
      agents.splice(i, 1)
    }
  }
}

function update() {

  for(let i = 0; i < agents.length; i += 1) {
    noiseScale = random(0.01, 0.08)
  stepSize = random(0.5, 5)

    let angle = noise(agents[i].x * noiseScale, agents[i].y * noiseScale) * TWO_PI

    agents[i].x += sin(angle) * stepSize
    agents[i].y += cos(angle) * stepSize
    agents[i].age += 1 

  }
}





    // if((agents[i].x > width) || (agents[i].x < 0) || (agents[i].y > height) || (agents[i].y < 0)) {
    //   agents[i].x = random(width)
    //   agents[i].y = random(height)
    
  
