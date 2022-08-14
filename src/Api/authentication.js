import {POST} from './core.js'

export const getEndpointWithPrefix = (endpoint) => {
    return `auth/${endpoint}`
}

export const signin = (token, body) => {
    const endpoint =  getEndpointWithPrefix(`signin`)
    return POST(endpoint, body, token)
}

export const signup = (token, body) => {
    const endpoint =  getEndpointWithPrefix(`signup`)
    return POST(endpoint, body, token)
}