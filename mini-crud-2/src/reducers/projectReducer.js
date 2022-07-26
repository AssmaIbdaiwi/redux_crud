
// const initialState=[]
export const projectReducer = (state={ user: [] },action) => {
 switch (action.type) {
    case "FETCH_DATA":
       console.log(action)

       return  action.payload;
    case "ADD_USER"  :
        return{
        user:[...state.user,action.payload]
    }
    case "UPDATE_USER":
      return state 
     case "DELETE_USER"  :
    //    return  action.payload;
    console.log(action)
    
            console.log(state)
            return {
                
                ...state,
                state:state.filter(users=>{
                    return users.id !== action.payload.id
            })
        }
        case "CHECK_USER":
            console.log(action.payload)
        return action.payload
        
    default:
       return state;
 }
}


