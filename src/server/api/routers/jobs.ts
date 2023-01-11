import { createTRPCRouter, publicProcedure } from '../trpc'
import axios from 'axios'

type Job = {
  jobId: string
  unifiedZippiaSalary: string
  estimatedSalary: string
  companyLogo: string
  jobURL: string
  postedDate: string
  OBJcompanyDisplay: string
  OBJdesc: string
  OBJurl: string
  formattedOriginalCompanyName: string
  jobTitle: string
  location: string
  postingDate: string
  salary: {
    average: number
    high: number
    low: number
  }
}

type ZippiaResponse = {
  jobs: Job[]
  remainingJobs: number
  totalJobs: number
}

export const jobsRouter = createTRPCRouter({
  getJobs: publicProcedure.query(async () => {
    const response = await axios.post<ZippiaResponse>(
      'https://www.zippia.com/api/jobs/',
      {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: 'Business Analyst',
        locations: [],
        numJobs: 20,
        previousListingHashes: [],
      },
    )

    const jobs = response.data.jobs

    // replace jobs with the filteredJobs
    return {
      ...response.data,
      jobs,
    }
  }),
})
