import './ListaOpciones.css'
const ListaOpciones =(props)=>{
    /*SE DEBE RECORRER ARREGLOS CON EL METODO MAP
      arreglo.map((eqipo, index)=>{
        return <option></option>
      })
    */
    
    /**
     * <select value={props.valor}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        Esto se hace para que la primera opcion sea un tecto, pero este no sea seleccionable
    */

    const manejarCambio = (e)=>{
        props.actualizarEquipo( e.target.value);
    }

    return(
        <div className='lista-opciones'>
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {props.equipos.map((equipo,index)=>
                     <option key={index} value={equipo}>{equipo}</option> )};
                
                    
            </select>
        </div>
    )
                 /**
                     * Cuando solo se desea retornar una sola linea
                     * otro opcion es asi, ambas son validas
                     * equipos.map((equipo,index)=><option key={index}>{equipo}</option>)
                     */
                
}
export default ListaOpciones