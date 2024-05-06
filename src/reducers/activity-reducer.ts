// Actions
export type activityActions = 
    // descripcion ( type ) : informacion ( payload)
    { type : 'save-activity' , payload : { newActivity : Activity } }  |
    { type : 'set-activeId' , payload : { id : Activity['id'] } }


// type del reducer
export type ActivityState = { 
    // state  :  type
    activities: Activity[],
    activeId : Activity['id']
}

// valores iniciales del state
export const initialState : ActivityState = {
    activities : [],
    activeId : ''
}

// reducer - conecta el actions con el state
export const activityReducer = (
        state : ActivityState = initialState,
        action : activityActions
    )  => { 

    // Dispatch  - ejecutar el codigo que nosotros seleccionamos
    if(action.type === 'save-activity') { 
        // Este codigo maneja la logica para actualizar el state
        
        let updateActivities : Activity[] = []

        if( state.activeId){

            // actualizar
            updateActivities = state.activities.map( ( activity ) => activity.id == state.activeId ? action.payload.newActivity : activity )
            
        } else { 
            // aguardar
            updateActivities = [...state.activities , action.payload.newActivity]

        }

        // return para devolver el estado actualizado
        return { 
            ...state,
            activities : updateActivities,
            activeId: ''
            
        }

    }

    if( action.type == 'set-activeId') {

        return { 
            ...state,
            activeId : action.payload.id
        }
    }

    return state
     
}