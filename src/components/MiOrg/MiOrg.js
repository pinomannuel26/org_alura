import './MiOrg.css'
const MiOrg = (props) =>{

    /*ESTADO - HOOKS
        useState() ->Nos retorna 2 elementos, 1er un valor y 2do un elemento
        SINTAXIS, asi react sabe cuando hubo un cambi y reacciona a el :
        const [nomVariable, FuncionQueActualiza] = useState(valorInicial)

    */
   
    return( 
        <section className="orgSection">
            <h3 className='title'>Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
        </section>
    )
}
export default MiOrg