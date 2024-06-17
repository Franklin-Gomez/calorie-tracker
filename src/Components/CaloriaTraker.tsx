import CaloriesDisplay from "./CaloriesDisplay"
import { useActivity } from "../Hooks/useActivity"

export default function CaloriaTraker() {

    const { caloriasBurned , caloriasConsumed , total} = useActivity()

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
