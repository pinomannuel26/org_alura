import './Campo.css'
const Campo = (props)=>{
    
    /*Funcion para capturas los valores de los inputs 
    con el onChange={} detecta cada ves que hubo un cambio en los inputs*/
    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value);
    }
    const plcehoderModificado = `${props.placeholder}...`

    //Destructuracion
    const {type = "" } = props;
    /*
    Si type es indefinido, osea no nos mandan el parametro, por defecto lo vamos a inicializar en text
    si no llega un valor diferente, se actualiza */
    return(
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input placeholder={plcehoderModificado} required={props.required} value={props.valor} onChange={manejarCambio} type={type}/>
        </div> 
    )
}
export default Campo