import * as constants from '../constants'

export interface ChangeLang { type: constants.CHANGE_LANG }

export type BasicAction = ChangeLang

export function changeLang(): ChangeLang {
    return {
        type: constants.CHANGE_LANG
    }
}
