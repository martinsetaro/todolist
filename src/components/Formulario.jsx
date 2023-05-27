import React , { useState } from 'react'
import  { generarId }  from '../helpers/GeneradorId.js'




const Formulario = () => {

    const [ nota , guardarNota] = useState('')


    const objeto = {
        id:generarId(),
        name:nota
    }

    
    const handlerAgregar = async ()=>{

        if(nota === ''){
            alert("Nota vacia")
        }else {
            try {
                await fetch('http://localhost:3001/client', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(objeto),
                  
                });
                guardarNota('')
                
              } catch (error) {
                console.log("Error al agregar nota");
              }
        }
        

    }

    

  return (
    <div className="w-full h-auto flex justify-center">
         
          <div className="w-96 h-8 flex mt-6">
            <input
            value={nota}
            onChange={(e)=> guardarNota(e.target.value)}
            className='w-full pl-1 border border-1 border-slate-400'
            type="text" placeholder="Ingresa nota"/>
            <button
            onClick={()=> handlerAgregar()}
            className="p-1 bg-blue-600 text-white font-bold w-10 rounded-sm ">+</button>
          </div>
       
    </div>
  )
}

export default Formulario