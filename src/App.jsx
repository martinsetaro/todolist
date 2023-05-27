import React , { useState , useEffect } from 'react';
import Formulario from './components/Formulario';


const App = () => {

  
  const [ load, guardarLoad ] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const [ cliente, guardarCliente ] = useState([]);

    useEffect(()=>{

        const datosDb = async ()=>{
  
          try {
            const result = await fetch("http://localhost:3001/client");
            const data = await result.json();
            guardarCliente(data);
          
            
          } catch (error) {
            console.log("No hay datos");
          }
        };
  
        datosDb();
  
        const seleccionadoLs = localStorage.getItem("seleccionados");
        setSelectedIds(JSON.parse(seleccionadoLs) || []);
  
      },[cliente])
  

    //agregar nota

    const  handlerAgregar = ()=>{
       guardarLoad(true)


    }

//eliminar

const handlerEliminar = async (id)=>{

try {
  await fetch(`http://localhost:3001/client/${id}`,{
    method:"DELETE",
    
  });
  
} catch (error) {
  console.log("Error al eliminar")
}
}

const handleCheckboxChange = (id) => {
  if (selectedIds.includes(id)) {
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id)); // Deseleccionar el checkbox si ya estaba seleccionado
  } else {
    setSelectedIds([...selectedIds, id]); // Seleccionar el checkbox
  }

  

};

useEffect(() => {
  localStorage.setItem("seleccionados", JSON.stringify(selectedIds));
}, [selectedIds]);

    
  return (
    <div className="flex flex-col items-center">
       <h2 className="text-5xl text-center mt-3 uppercase font-custom">Todo List</h2>
       <p className="text-xl text-center mt-3 uppercase">Agregar tu nota</p>
       <button
       onClick={()=> handlerAgregar()}
       className="bg-blue-700 text-white w-10 h-10 rounded-full mt-4 text-2xl font-bold">+</button>
       {load && <Formulario/>}
       {cliente.length == 0 && <h2 className='text-xl mt-4'>No hay notas</h2>}
       <div className="w-w400  h-auto flex flex-col mt-12">
        {cliente.map((user,index) => {
        return (
            <div key={index} 
            className={`w-w400 h-auto mt-2 border border-1 border-slate-400 rounded-lg p-1 flex justify-between ${
              selectedIds.includes(user.id) && 'bg-slate-600'}`}
          >
            <h2 className={selectedIds.includes(user.id) ? "text-white ml-3 font-semibold" : "font-semibold ml-3"}>{user.name}</h2>
            <h2 className={selectedIds.includes(user.id) ? "text-green-600 font-bold text-right" : "text-white"}>Completado</h2>
            <div className="w-14 flex justify-between">
            <input type="checkbox" checked={selectedIds.includes(user.id)} onChange={()=> handleCheckboxChange(user.id)}/>
            <button
            onClick={()=> handlerEliminar(user.id)}
            className="bg-red-500 p-1 w-6 h-7 text-white font-bold">X</button>
            </div>
          
          </div>
          
        )
      })}
    </div>
    </div>
  )
}

export default App