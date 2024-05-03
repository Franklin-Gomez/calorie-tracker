import { Dispatch, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { categories } from "../db/categorias"
import { activityActions } from "../reducers/activity-reducer"
import { ActivityState } from "../reducers/activity-reducer"

type FormProps = { 
  dispatch : Dispatch<activityActions>
  state : ActivityState
}

// valores y type para generar el objeto con la informacion
const initialState : Activity = { 
  id : uuidv4() ,
  category : 1,
  name : '',
  calorias : 0
}

export default function Form( { dispatch  , state} : FormProps) {

  const [ activity , setActivity ] = useState<Activity>( initialState )

  useEffect(() => { 

    // validamos que ya exista un id seleccionados 
    if( state.activeId) { 
      
      // comparamos ambos state del reducer
      const selecActivity = state.activities.filter(( stateActivity ) => stateActivity.id === state.activeId)[0];

      setActivity( selecActivity )
    }

  } , [ state.activeId])

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>  | React.ChangeEvent<HTMLSelectElement> ) => { 

    // nos retorna true o false
    //const isNumberfields = ['category' , 'calorias'].includes(e.target.id)
    setActivity( { 
      ...activity,
      //[ e.target.id ] : isNumberfields ? +e.target.value : e.target.value
      [ e.target.id ] : e.target.value
    })
  }

  const isValidActivity = () => { 
    const { name , calorias } = activity
    return name.trim() !== '' && calorias > 0 
  }

  const handleSubmit = ( e  : React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();

    dispatch({ type: "save-activity" , payload : { newActivity : activity} })

    setActivity({
      ...initialState,
      id : uuidv4()
    }) 
  } 

  return (

    <form action="" className='space-y-5 bg-white p-10 rounded-lg' onSubmit={ handleSubmit }>
      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='category'> Categoria : </label>
        <select className=' border border-slate-300 p-2 rounded-lg w-full bg-white' id='category' value={activity.category} onChange={ handleChange }>

          { categories.map( ( categoria ) => (
            <option
              key={categoria.id}
              value={categoria.id}
            >
              { categoria.name }
            </option>
            
          ))}

        </select>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-bold "> Actividad : </label>
          
          <input 
            id="name"
            type="text"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej. Comida , Jugo de Naranja , Ensadla , Ejercico , Pesas , Bicicleta"
            value={activity.name}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calorias" className="font-bold "> Calorias : </label>
          
          <input 
            id="calorias"
            type="number"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej. cantidad aproximadas 100 , 200..."
            value={activity.calorias}
            onChange={handleChange}
          />
        </div>

        <input 
          type="submit" 
          className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"  
          value={activity.category == 1 ? 'Guardar Comida' : 'Guardar Ejercicio' } 
          disabled = {!isValidActivity()}
        />
        
      </div>

    </form>
   
  )
}
