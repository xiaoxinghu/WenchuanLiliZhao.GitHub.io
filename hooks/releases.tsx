import { useQuery } from "react-query"
import { getReleaseDetail, listReleases } from '../utils/api'

export function useReleases() {
  return useQuery('releases', listReleases)
}

export function useRelease(version: string) {
  return useQuery(`release/${version}`, () => getReleaseDetail(version))
}
