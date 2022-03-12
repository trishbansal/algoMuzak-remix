const ctx = new (window.AudioContext || window.webkitAudioContext)()
const tone = new OscillatorNode(ctx)
const lvl = new GainNode(ctx, { gain: 0.001 })
const fft = new AnalyserNode(ctx)

tone.connect(lvl)
lvl.connect(ctx.destination)
lvl.connect(fft)

function adsr (param, peak, val, time, a, d, s, r) {
  /*
                peak
                /\   val  val
               /| \__|____|
              / |    |    |\
             /  |    |    | \
       init /a  |d   |s   |r \ init

       <----------time------------>
  */
  const initVal = param.value
  param.setValueAtTime(initVal, time)
  param.linearRampToValueAtTime(peak, time+a)
  param.linearRampToValueAtTime(val, time+a+d)
  param.linearRampToValueAtTime(val, time+a+d+s)
  param.linearRampToValueAtTime(initVal, time+a+d+s+r)
}

const p = 0.8 // peak value for all tones
const v = 0.7 // sustained value for all tones

const keys = [
  440.0000, //A
  466.1638, //A#
  493.8833, //B
  523.2511, //C
  554.3653, //C#
  587.3295, //D
  622.2540, //D#
  659.2551, //E
  698.4565, //F
  739.9889, //F#
  783.9909, //G
  830.6094, //G#
]

let speeds = [0.5, 0.7, 0.9, 1.1]
let size = Math.random() * speeds.length
size = Math.floor(size)

//twinkle twinkle little star 
tone.frequency.setValueAtTime(523.2511, ctx.currentTime)
adsr(lvl.gain, p,v, ctx.currentTime, 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(523.2511, ctx.currentTime + speeds[size])
adsr(lvl.gain, p,v, ctx.currentTime + speeds[size], 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(783.9909, ctx.currentTime + (2 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + (2 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(783.9909, ctx.currentTime + (3 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + (3 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(440.0000, ctx.currentTime + (4 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + (4 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(440.0000, ctx.currentTime + (5 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + (5 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(783.9909, ctx.currentTime + (6 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + (6 * speeds[size]), 0.2,0.1,0.4,0.2) 

//how i wonder what you are 
tone.frequency.setValueAtTime(698.4565, ctx.currentTime + 0.5 + (7 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + 0.5 + (7 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(698.4565, ctx.currentTime + 0.5 + (8 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + 0.5 + (8 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(659.2551, ctx.currentTime + 0.5 + (9 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + 0.5 + (9 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(659.2551, ctx.currentTime + 0.5 + (10 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + 0.5 + (10 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(587.3295, ctx.currentTime + 0.5 + (11 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + 0.5 + (11 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(587.3295, ctx.currentTime + 0.5 + (12 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + 0.5 + (12 * speeds[size]), 0.2,0.1,0.4,0.2) 

tone.frequency.setValueAtTime(523.2511, ctx.currentTime + 0.5 + (13 * speeds[size]))
adsr(lvl.gain, p,v, ctx.currentTime + 0.5 + (13 * speeds[size]), 0.2,0.1,0.4,0.2)


tone.start(ctx.currentTime)
tone.stop(ctx.currentTime + 0.5 + (14 * speeds[size]))


createWaveCanvas({ element: 'section', analyser: fft })