import {useState} from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"


function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header 

      />
      <div className="md:flex mt-12">
        <Formulario 
          pacientes ={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
