import { useMemo } from "react"

type CaloriaTrakerProps = {
    activities : Activity[]
}


export default function CaloriaTraker({ activities } : CaloriaTrakerProps) {

    // Contadores
    const caloriasConsumed = useMemo(() => activities.reduce( (total , activity ) => activity.category === 1 ? total + +activity.calorias : total, 0 ) , [activities])

    const caloriasBurned = useMemo(() => activities.reduce( (total , activity ) => +activity.category === 2 ? total + +activity.calorias : total, 0 ) , [activities])

    console.log( activities )
    return (
        <div>
            <>
                <h2 className="text-4xl font-black text-white text-center"> Resumen de Calorias </h2>

                <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                        <span className="font-black text-6xl text-orange"> { caloriasConsumed }</span>
                        Consumidas
                    </p>

                    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                        <span className="font-black text-6xl text-orange"> { caloriasBurned }</span>
                        Quemadas
                    </p> 
                </div>
            </>
        </div>
    )
}
