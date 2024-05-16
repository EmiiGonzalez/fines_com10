import { Titulo } from './components/titulo/Titulo'
import {Antecedentes} from './components/antecedentes/Antecedentes'
import './assets/styles/global.css'
import { Reflexion } from './components/reflexion/Reflexion'
import { Biografia } from './components/Biografia/Biografia'

function App() {

  return (
    <main>
      <Titulo />
      <Antecedentes />
      <Biografia />
      <Reflexion />
    </main>
  )
}

export default App
