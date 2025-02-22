import _, { fromPairs } from 'lodash'
import { REHYDRATE } from 'redux-persist/constants'
import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case REHYDRATE:
            return action.payload.likedJobs || []
        case CLEAR_LIKED_JOBS:
            return []
        case LIKE_JOB:
            return _.unionBy([
                action.payload, ...state
            ], 'jobkey')
        default:
            return state
    }
}