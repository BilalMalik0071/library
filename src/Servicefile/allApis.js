import { base_Url } from "./baseUrl"
import { commonRequest } from "./commonStructure"

export const addSignup = async (body) => {
  return await commonRequest('POST', `${base_Url}/signupdata`, body)
}

export const getSignup = async () => {
  return await commonRequest('GET', `${base_Url}/signupdata`, {})
}


export const addBook = async (body) => {
  return await commonRequest('POST', `${base_Url}/allbook`, body)
}

export const getBooks = async () => {
  return await commonRequest('GET', `${base_Url}/allbook`, {})
}

export const getSingleBook = async (id) => {
  return await commonRequest('GET', `${base_Url}/allbook/${id}`, {})
}

export const deleteData = async (id) => {
  return await commonRequest('DELETE', `${base_Url}/allbook/${id}`, {})
}

export const getUpdateBook = async (id) => {
  return await commonRequest('GET', `${base_Url}/allbook/${id}`, {})
}

export const postUpdatedBook = async (body, id) => {
  return await commonRequest('PUT', `${base_Url}/allbook/${id}`, body)
}