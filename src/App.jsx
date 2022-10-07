import AnimatedPages from './AnimatedPages'
import Background from './components/Background'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='w-full text-white'>
      <Background />
      <Navbar />
      <AnimatedPages />
    </div>
  )
}

export default App
