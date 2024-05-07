import { useMemo } from "react"
import CaloriesDisplay from "./CaloriesDisplay"

type CaloriaTrakerProps = {
    activities : Activity[]
}


export default function CaloriaTraker({ activities } : CaloriaTrakerProps) {

    // Contadores
    const caloriasConsumed = useMemo(() => activities.reduce( (total , activity ) => activity.category === 1 ? total + +activity.calorias : total, 0 ) , [activities])

    const caloriasBurned = useMemo(() => activities.reduce( (total , activity ) => +activity.category === 2 ? total + +activity.calorias : total, 0 ) , [activities])

    const total = caloriasConsumed - caloriasBurned

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center"> Resumen de Calorias </h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">

                <CaloriesDisplay
                    calorias={caloriasConsumed}
                    text="Consumidas"
                />

                <CaloriesDisplay
                    calorias={caloriasBurned}
                    text="Quemadas"
                />

                <CaloriesDisplay
                    calorias={total}
                    text="Total"
                />

            </div>


        </>

    )
}
