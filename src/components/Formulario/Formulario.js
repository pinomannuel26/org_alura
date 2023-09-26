import { useState } from 'react'
import './Formulario.css'
import Campo from '../campo'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'
const Formulario =(props)=>{
    /**Estados para el control de los inputs del formulario
     * Estado para controlar los inputus 
      Siempre que trabajemos con formularios vamos a trabajar con estados y el value
      para controlor los inputs
    
    */
    const [nombre, actualizarNomre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');
    /* Funcionqe se va a encargar de enviar los datos, paraqe no se recarge toda la pag
      cuando se presiona el boton enviar del formulario se manda a llamar a esta funcion
    */

    /*Estado para los componentes del formulario de crear un equipo */
    const [titulo, actualizarTitulo] = useState('');
    const [color, actualizarColor] = useState('');
    
      //Destructuracion
      const { registrarColaborador, crearEquipo } = props

    const manejarEnvio =(e)=>{
        /*Metodo de los form para que no se recarge la pag, porqe le estoy quitando la 
        responsabilidad al navegador de como se debe comportar ese evento
        ES MUY UTILIZADO CUANDO SE TRABAJA CON FORMULARIOS 
        el evento onSubmit para poder tener acceso a los datos
        
        EL REQUIRED CON EL TRUE O SIN EL TRUO ES LO MISMO, AMBOS CAMPOS LOS TOMA COMO TRU,
        PERO SI NO SE LE PASA UN VALOR, UN REQUIRED, LO TOMA COMO FALSE, OSEA QUE NO ES OBLIGATORIO
        */
        e.preventDefault()
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
        /**Eviamos los datos q el usuario digito a lña funcion q esta en el app.jsx */
    }

    /*captramos los datos del nuevo equipo */
    const manejarNuevoEquipo =(e)=>{
        e.preventDefault()
        
        crearEquipo({titulo, colorPrimario: color})
    }

    return(
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo titulo='Nombre' placeholder='Ingresar nombre' required={true} valor={nombre} actualizarValor={actualizarNomre}/>    
                <Campo titulo='Puesto' placeholder='Ingresar puesto' required={true} valor={puesto} actualizarValor={actualizarPuesto}/>
                <Campo titulo='Foto' placeholder='Ingresar enlace de foto' required valor={foto} actualizarValor={actualizarFoto}/>
                <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
                <Boton >
                    Crear 
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo titulo='Titulo' placeholder='Ingresar titulo' required={true} valor={titulo} actualizarValor={actualizarTitulo}/>    
                <Campo titulo='Color' placeholder='Ingresar color' required={true} valor={color} actualizarValor={actualizarColor} type="color"/>
                <Boton >
                    Registrar equipo 
                </Boton>
            </form>
        </section>
    )
}
export default Formulario
