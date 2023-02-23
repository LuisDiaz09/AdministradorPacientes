import Pacientes from "./pacientes"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
    return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
        {pacientes && pacientes.length ? (
            <>
                <h2 className='font-black text-center text-3xl'>Listado de Pacientes</h2>
                <p className="text-center mt-8 text-lg mb-5">
                    Administra tus {" "}
                    <span className="text-indigo-600 font-bold">
                        Pacientes y Citas
                    </span>
                </p>
        
                {pacientes.map ( paciente => (
                    <Pacientes
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                ))}
            </>
        ) : (
            <>
                <h2 className='font-black text-center text-3xl'>Aún no hay pacientes</h2>
                <p className="text-center mt-8 text-lg mb-5">
                    Empieza a capturar y los pacientes {" "}
                    <span className="text-indigo-600 font-bold">
                        se mostrarán aquí
                    </span>
                </p>
            </>
        )}
        
    </div>
  )
}

export default ListadoPacientes
