import { BasicAction } from '../actions'
import { BasicState } from '../types/index'
import { CHANGE_LANG } from '../constants/index'

export default function lang(state: BasicState, action: BasicAction): BasicState {
    // console.log('my action is: ', action, state)
    if (state === undefined) {
        return { langIndex: 0 }
    } 
    switch (action.type) {
        case CHANGE_LANG:
            return { ...state, langIndex: 0 }
		default:
			return state
	}
} 