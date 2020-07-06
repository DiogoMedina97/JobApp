import jobs from '../mocks/_mockJobs'
// import axios from 'axios'
// import reverseGeocode from 'latlng-to-zip'
// import qs from 'qs'
// import { INDEED_API_KEY, INDEED_ROOT_URL, GOOGLE_API_KEY } from '../config'

import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from './types'

// const JOB_QUERY_PARAMS = {
//     publisher: INDEED_API_KEY,
//     format: 'json',
//     v: '2',
//     latlong: 1,
//     radius: 10,
//     q: 'javascript'
// }

// const buildJobsUrl = zip => {
//     const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip })
//     return `${INDEED_ROOT_URL}${query}`
// }

export const fetchJobs = (region, callback) => async dispatch => {
    try {
        // let zip = await reverseGeocode(region, GOOGLE_API_KEY)
        // const url = buildJobsUrl(zip)
        // let { data } = await axios.get(url)
        dispatch({ type: FETCH_JOBS, payload: jobs })
        callback()
    } catch(err) {
        console.log(err)
    }
}

export const likeJob = job => {
    return { type: LIKE_JOB, payload: job }
}

export const clearLikedJobs = () => {
    return { type: CLEAR_LIKED_JOBS }
}