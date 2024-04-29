import { categories } from "../db/categorias"

export default function Form() {
  return (

    <form action="" className='space-y-5 bg-white p-10 rounded-lg'>
      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='category'> Categoria : </label>
        <select className=' border border-slate-300 p-2 rounded-lg w-full bg-white' id='category'>

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
          <label htmlFor="activity" className="font-bold "> Actividad : </label>
          
          <input 
            id="activity"
            type="text"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej. Comida , Jugo de Naranja , Ensadla , Ejercico , Pesas , Bicicleta"
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="activity" className="font-bold "> Calorias : </label>
          
          <input 
            id="calorias"
            type="number"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej. cantidad aproximadas 100 , 200..."
          />
        </div>

        <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"  value={'Guardar Comida o Guardar Ejercicio'}/>
        
      </div>

    </form>
   
  )
}
