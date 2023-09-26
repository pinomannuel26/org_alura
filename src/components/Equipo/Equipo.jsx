import Colaborador from '../Colaboradpr/Colaborador';
import hexToRgba from 'hex-to-rgba'; /*Paquete q un numero hexadecinal lo transforma en rgba y le da opacidad */
import './Equipo.css'

const Equipo =(props)=>{

    /*Destructiracion */
    const{ titulo, colorPrimario, id  } = props.datos;
    const{colaboradores, eliminarColaborador, like} = props;

    /*Nesesit sacar el color primario y secundario de propps.datos
    saca los valores de los colores y crea esas variables */

    /*stilos en linea cuando hay un gion de aplica camelCase*/
    const estuloTitulo= 
    {
        borderColor: colorPrimario
    };
    /*Ambas manera para mandarle estilos es valida, pero el de estilo titulo es mas limpio el codigo */
    return <>
            { /*Si tiene colaboradores muestre el equio, sino no lo muestre*/
                colaboradores.length > 0 && 
                <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
                    {/* input type color para cambiar el color de los equipos, en rgba se le pasa color y opacidad como 2do arametro*/}
                    <input type="color"
                    className='input_color'
                    value={colorPrimario}
                    onChange={(e)=>props.actualizarColor(e.target.value, id)}
                    />
                    <h3 style={estuloTitulo}> {titulo}</h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} like={like}/>)
                            /*Le enviamos colaborador por colaborador para q vaya pintando la targete por cada uno de ellos */
                        }
                        
                    </div>
                </section>    
            }
        </>
}
export default Equipo;