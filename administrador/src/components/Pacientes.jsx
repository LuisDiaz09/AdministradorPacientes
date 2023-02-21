const Pacientes = () => {
  return (
    <div className=' bg-white shadow-md rounded-lg py-10 px-5 m-3'>
                <p className="font-bold mb-3">
                    Nombre: {" "}
                    <span className="font-normal">
                        Luis Angel
                    </span>
                </p>

                <p className="font-bold mb-3">
                    Apellidos: {" "}
                    <span className="font-normal">
                        Diaz Ruiz
                    </span>
                </p>

                <p className="font-bold mb-3">
                    Correo electrónico: {" "}
                    <span className="font-normal">
                        ladiaz912@gmail.com
                    </span>
                </p>

                <p className="font-bold mb-3">
                    Alta del paciente: {" "}
                    <span className="font-normal">
                        20 de Febrero del 2023
                    </span>
                </p>

                <p className="font-bold mb-3">
                    Consulta: {" "}
                    <span className="font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atque temporibus quos fuga ullam, distinctio aliquid sit rerum nobis necessitatibus.
                    </span>
                </p>
            </div>
  )
}

export default Pacientes