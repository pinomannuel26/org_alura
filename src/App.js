import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';


function App() {

  /*Estado */
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  /**Ternario -> condicion ? SeMuestra : noSeMuestra
   * {mostrarFormulariuo ? <Formulario/> : <></>}
   * es un operador termario que si el estado de formulario es true se muestre y si es false
   * se muestre un espacio bacio
   *{mostrarFormulariuo == true? <Formulario/> : <></>}
   Otra forma de poner con condicionales ternarios
     condicional && seMuestra  ___>>>>OTRA FORMA, SI ES BVERDADERO SE MUESTRA ALGO, SINO NO PASA NADA
     {mostrarFormulario && <Formulario/>}
     si se cumple se muestra eñl formulario sino no pasa nada, no se muestra nada y queda vacio
   */
  /*estado */
  const cambiarMostrar =()=>{
    actualizarMostrar(!mostrarFormulario);
  }

  /*Estado equipos 
  uuid es una libreria de react que gen era identificadores unicos*/
  const [equipos, actualizarEquipos] = useState([
      {id: uuid(),titulo:"Programación",colorPrimario:"#57C278",colorSecundario:"#D9F7E9"},
      {id: uuid(),titulo:"Front End",colorPrimario:"#82CFFA",colorSecundario:"#E8F8FF"},
      {id: uuid(),titulo:"Data Science",colorPrimario:"#A6D157",colorSecundario:"#F0F8E2"},
      {id: uuid(),titulo:"Devops",colorPrimario:"#E06B69",colorSecundario:"#FDE7E8"},
      {id: uuid(),titulo:"UX y Diseño",colorPrimario:"#DB6EBF",colorSecundario:"#FAE9F5"},
      {id: uuid(),titulo:"Móvil",colorPrimario:"#FFBA05",colorSecundario:"#FFF5D9"},
      {id: uuid(),titulo:"Innovación y Gestión",colorPrimario:"#FF8A29",colorSecundario:"#FFEEDF"}
    ])

  /*ESTADO PARA COLABORADOES, puede inicaiar en una lista vacia [] o en un colaborador por defecto */
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://res.cloudinary.com/dbktnqag9/image/upload/v1693585398/sprint1-profundizaci%C3%B3n/5ab125773d782_40394724_20220731180456_ccdlf7.jpg",
    nombre: "Mark Zuckerberg",
    puesto: "CEO de Meta",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/pinomannuel26.png",
    nombre: "Mannuel Granoble",
    puesto: "Desarrollador de software e instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://res.cloudinary.com/dbktnqag9/image/upload/v1693585198/sprint1-profundizaci%C3%B3n/bill_bgyfig.jpg",
    nombre: "Bill Gates",
    puesto: "Instructor ",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://res.cloudinary.com/dbktnqag9/image/upload/v1693717084/sprint1-profundizaci%C3%B3n/ronaldo_ljeujp.webp",
    nombre: "Cristiano Ronaldo",
    puesto: "Futbolista",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://res.cloudinary.com/dbktnqag9/image/upload/v1693585597/sprint1-profundizaci%C3%B3n/Elon_Musk_Royal_Society__crop2_ipmfjr.jpg",
    nombre: "Elon Musk",
    puesto: "CEO de Tesla Motors",
    fav: false
  }])

 

  //ELIMINAR COLABORADOR
  const eliminarColaborador = (id )=>
  {
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }


  //ACTUALIZAR COLOR DE EQUIPSO

  const actualizarColor = (color, id) => {
    const equposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) 
      {
        equipo.colorPrimario = color;
      }
      return  equipo;
    })

    actualizarEquipos(equposActualizados);
  }

  //REGISTRAR COLABORADOR
  const registrarColaborador = (colaborador) => {
      
      /*Spread operator
      ...N, copia los valores que hay en el arreglo y agrega el nuevo valor que le llega, como un acumulador */
      actualizarColaboradores([...colaboradores, colaborador]);
  }

  //REGISTRAR EQUIPO
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
    /* {...nuevoEquipo, id:uuid()} le decimos haga una copa de lo que viene en nuevo equipo y  le agrege
    a esos datos el id

     actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}]); le decimos que haga una copia de los
     equipos que hay y le agrege el que le estamos pasando
    */
  }
  /*Funcion para el like del colaborador */
  const like =(id) =>{
    const colaboresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id)
      {
          colaborador.fav = !colaborador.fav; /**l easignas a colaboradores.fav su negacion */
      }
      return colaborador;
    })
    actualizarColaboradores(colaboresActualizados)
 }
  return (
    <div >
   
      <Header/>
      
      {mostrarFormulario ? <Formulario equipos ={equipos.map((equipo)=> equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/> : <></>}
      {/*mostrarFormulario && <Formulario/>*/}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo)=> <Equipo datos={equipo} key={equipo.titulo}  colaboradores ={colaboradores.filter(colaborador => colaborador.equipo ===equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor ={actualizarColor} like={like}/> )
        /**Se l manda como parametro el obj con toda la info de cada equipo 
       * Ycomo es una sola linea, se puede omitir el retur y las llaves
       * en colaboradoes se le esta enviando todo el arreglo de colaboradores
      */
      }
      <Footer/>
    </div>
  );
}

export default App;
