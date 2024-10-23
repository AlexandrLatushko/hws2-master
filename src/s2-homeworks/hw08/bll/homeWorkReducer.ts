import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type)  {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return state.slice().sort((a, b) => a.name.localeCompare(b.name)); // sort ascending
            }
            if (action.payload === 'down') {
                return state.slice().sort((a, b) => b.name.localeCompare(a.name)); // sort descending
            }
            break;
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload); // filter by age
        }
        default:
            return state;
    }
    return state; // need to fix
    }

