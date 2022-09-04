import {POST} from './core.js'

export const getEndpointWithPrefix = (endpoint) => {
    return `auth/${endpoint}`
}

export const signIn = (token, body) => {
    const endpoint =  getEndpointWithPrefix(`signin`)
    return POST(endpoint, body, token)
}

export const signUp = (token, body) => {
    const endpoint =  getEndpointWithPrefix(`signup`)
    return POST(endpoint, body, token)
}