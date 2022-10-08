import './assets/css/App.css'
import AUDIO from './assets/audio/electricity.wav'

function App() {
  return (
    <>
      {/* circle */}
      <div className='circle-container'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>

      {/* neon text */}
      <div className='sign'>
        <span className='fast-flicker'>E</span>lec<span className='flicker'>t</span>ro
      </div>
    </>
  )
}

export default App
