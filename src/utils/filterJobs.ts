import type { Job } from '../@types'

type Sort = {
  sortAlphabetically: boolean
  sevenDays: boolean
}

export const filterJobs = (
  jobs: Job[] | undefined,
  { sortAlphabetically, sevenDays }: Sort,
) => {
  if (!jobs) return []

  const filteredJobs = jobs
    .filter((job) => {
      if (!sevenDays) return true

      // filter out jobs that are older than 7 days if requested
      if (
        new Date(job.postingDate).getTime() <
        new Date().getTime() - 1000 * 60 * 60 * 24 * 7 // 7 days ago
      ) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      // don't sort if not requested
      if (!sortAlphabetically) return 0

      // compare strings and sort alphabetically
      return a.OBJcompanyDisplay.localeCompare(b.OBJcompanyDisplay)
    })

  return filteredJobs
}
