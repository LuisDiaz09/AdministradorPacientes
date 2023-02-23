const Pacientes = ({paciente}) => {

    const {nombre, apellido, correo, fecha, consulta} = paciente

  return (
    <div className=' bg-white shadow-md rounded-lg py-10 px-5 m-3'>
                <p className="font-bold mb-3">
                    Nombre: {" "}
                    <span className="font-normal">
                        {nombre}
                    </span>
                </p>

                <p className="font-bold mb-3">
                    Apellidos: {" "}
                    <span className="font-normal">
                        {apellido}
                    </span>
                </p>

                <p className="font-bold mb-3">
                    Correo electrónico: {" "}
                    <span className="font-normal">
                        {correo}
                    </span>
                </p>

                <p className="font-bold mb-3">
                    Alta del paciente: {" "}
                    <span className="font-normal">
                        {fecha}
                    </span>
                </p>

                <p className="font-bold mb-3">
                    Consulta: {" "}
                    <span className="font-normal">
                        {consulta}
                    </span>
                </p>

                <div>
                    <button type="button">
                        Editar
                    </button>

                    <button type="button">
                        Eliminar
                    </button>
                </div>

            </div>
  )
}

export default Pacientes