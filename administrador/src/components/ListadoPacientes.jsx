import Pacientes from "./pacientes"

export const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
        <h2 className='font-black text-center text-3xl'>Listado de Pacientes</h2>
        <p className="text-center mt-8 text-lg mb-5">
            Administra tus {" "}
            <span className="text-indigo-600 font-bold">
                Pacientes y Citas
            </span>
        </p>

        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
    </div>
  )
}
