import { ADD_FLASH_MESSGAE } from "../actions/flashMessagesAction";
  
let aId = 0;
export default (state=[], action={}) => {

    switch(action.type){
        case ADD_FLASH_MESSGAE:
            aId++;
            return [
                ...state,
                {
                    id: aId,
                    type: action.message.type,
                    text: action.message.text
                }
            ];
        default: return state
    }
}