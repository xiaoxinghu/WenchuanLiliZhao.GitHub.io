import axios from 'axios'
import { API_BASE_URL, APP_NAME } from '../utils/config'
import { Release } from '../utils/types'

let api = axios.create({
  baseURL: API_BASE_URL,
})

export async function listReleases() {
  const response = await api.get(`/releases/${APP_NAME}`)
  // TODO: type validation?
  return response.data as Release[]
}

export async function getReleaseDetail(version: string) {
  const response = await api.get(`/release/${APP_NAME}/${version}`)
  // TODO: type validation?
  return response.data as Release
}
