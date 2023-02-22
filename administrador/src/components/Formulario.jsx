import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes ,setPacientes}) => {

    const[nombre, setNombre] = useState('');
    const[apellido, setApellido] = useState('');
    const[correo, setCorreo] = useState('');
    const[fecha, setFecha] = useState('');
    const[consulta, setConsulta] = useState('');
    const[error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre, apellido, correo, fecha, consulta].includes('')){
            console.log("Todos los campos son necesarios")
            setError(true)
            return;
        }

        setError(false)
        
        //Creando objeto de pacientes
        const objetoPacientes = {
            nombre, 
            apellido, 
            correo, 
            fecha, 
            consulta
        }
        setPacientes([...pacientes, objetoPacientes])

        //Reiniciando Formulario
        setNombre ("")
        setApellido ("")
        setCorreo ("")
        setFecha ("")
        setConsulta ("")
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-center text-3xl'>Seguimiento pacientes</h2>
            <p className='mt-8 text-center text-lg mb-5'>
                Agrega pacientes y {" "}
                <span className="font-bold text-indigo-600">
                    Administralos 
                </span>
            </p>
            <form
            onSubmit={handleSubmit} 
            className="bg-white shadow-md rounded-lg py-10 px-5 m-3">
                {error &&  <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor='paciente' className='block text-gray-800 font-bold'>
                        Nombre(s) del Paciente
                    </label>
                    <input 
                    id='paciente'
                    type="text" 
                    placeholder='Nombre(s)'
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor='apellidos' className='block text-gray-800 font-bold'>
                        Apellidos del Paciente
                    </label>
                    <input 
                    id='apellidos'
                    type="text" 
                    placeholder='Apellidos'
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor='email' className='block text-gray-800 font-bold'>
                        Correo electrónico
                    </label>
                    <input 
                    id='email'
                    type="email" 
                    placeholder='ejemplo@fisio.com'
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor='alta' className='block text-gray-800 font-bold'>
                        Alta del Paciente
                    </label>
                    <input 
                    id='alta'
                    type="date" 
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor='alta' className='block text-gray-800 font-bold'>
                        Mi Consulta
                    </label>
                    <textarea
                    id='alta'
                    placeholder='Escribe tu consulta'
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                    />
                </div>
                <input 
                type="submit"
                value="Agregar Paciente"
                className="bg-indigo-600 w-full text-white p-2  font-bold cursor-pointer
                hover:bg-indigo-700 transition-all hover:shadow-md" 
                />
            </form>
        </div>
    )
}

export default Formulario