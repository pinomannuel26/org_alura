import './Colaborador.css';
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'; /*Importacion de los iconos*/
const Colaborador =(props)=>{
    const {nombre,puesto,foto, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;
    return(
        <div className = 'colaborador'>
            < AiFillCloseCircle onClick={()=>eliminarColaborador(id)} className='eliminar'/>
            <div className = 'encabezado' style={{ backgroundColor: colorPrimario}}>
                <img src = {foto} alt = {nombre}/>
            </div>
            <div className = 'info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav?  <AiFillHeart color='red' onClick={()=> like(id)}/>: <AiOutlineHeart onClick={ ()=> like(id)}/>
                }
               
                
            </div>
        </div>
    )
}
export default Colaborador
/* ()=>eliminarColaborador(id), se le colaca un arrow funtion antes, para qe solo se lame la funcion cuando se de click
porqe si no se hace se hace una llamada a la funcion infinaita  */