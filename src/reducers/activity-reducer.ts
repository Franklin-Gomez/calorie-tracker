
// Actions
type activityActions = { 
    // descripcion ( type ) : informacion ( payload)
    type : 'save-activity' , payload : { newActivity : Activity } 
}

// type del reducer
type ActivityState = { 
    // state  :  type
    activities: Activity[]
}

// valores iniciales del state
export const initialState : ActivityState = {
    activities : []
}

// reducer - conecta el actions con el state
export const activityReducer = (
        state : ActivityState = initialState,
        action : activityActions
    )  => { 

    // ejecutar el codigo que nosotros seleccionamos
    if(action.type === 'save-activity') { 
        // Este codigo maneja la logica para actualizar el state
    }
     
}