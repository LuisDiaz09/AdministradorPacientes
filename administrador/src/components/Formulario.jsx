import {useState, useEffect} from 'react';

const Formulario = () => {

    const[nombre, setNombre] = useState('');

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-center text-3xl'>Seguimiento pacientes</h2>
            <p className='mt-8 text-center text-lg mb-5'>
                Agrega pacientes y {" "}
                <span className="font-bold text-indigo-600">
                    Administralos 
                </span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 m-3">
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