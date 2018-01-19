let sound, fft, mic, synth, currentNote, notes

function preload() {
	//sound = loadSound('BoutiqueJoy.mp3')
}

function setup() {
	createCanvas(800, 800)
	
	mic = new p5.AudioIn()
	mic.start()
	
	//sound.play()
	
	fft = new p5.FFT()
	fft.setInput(mic)

	//notes = [ 65, 70, 68, 65, 63, 65, 58, 61, 63, 61, 63, 65, 63, 70, 68]
	//currentNote = 0
	
	//synth = new p5.Oscillator()
	//synth.setType('sine')
	
	//synth.freq(midiToFreq(65))
	//synth.start()
	
	//fft.setInput(synth)
	
}

function draw() {
	background(255, 25)
	let spectrum = fft.analyze()
	
	beginShape()
	for(let i = 0; i < spectrum.length; i += 1) {
		let freqValue = spectrum[i]
		let r = freqValue / 1
		vertex(400 + cos(i * 800) * r, 300 + sin(i * 800) * r)
	}
	endShape()
	
	// if ( frameCount % 20 == 0 ) {
	// 	currentNote = (currentNote + 1) % notes.length
	// 	synth.freq(midiToFreq(notes[currentNote]))
	// } 
	
	//for(let i = 0; i < spectrum.length; i += 1) {
		//let freqValue = spectrum[i]
		//let angle = map(i, 0, spectrum.length, 0, TWO_PI)
		
		//let r = freqValue / 1.5
		
		//let x = map(i, 0, spectrum.length, 0, width)
		
		//ellipse(250 + sin(angle) * r, 250 + cos(angle) * r, 10, 10)
	
	//if( frameCount % 10 == 0) //every 10 frames
	//if ( random() > 0.5) {
		//sound.pan(random(-1)
	//} else {
	//	sound.pan(1)
	//}
	
	//sound.rate(sin(frameCount * 0.01) +3)


function mouseClicked() {
	sound.pause()
}

}



