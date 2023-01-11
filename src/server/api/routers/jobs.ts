import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'
import axios from 'axios'

type Job = {
  jobId: string
  unifiedZippiaSalary: string
  estimatedSalary: string
  jobURL: string
  postedDate: string
  OBJcompanyDisplay: string
  OBJdesc: string
  formattedOriginalCompanyName: string
  jobTitle: string
  location: string
  salary: {
    average: number
    high: number
    low: number
  }
}

export const jobsRouter = createTRPCRouter({
  getJobs: publicProcedure.query(async () => {
    const response = await axios.post('https://www.zippia.com/api/jobs/', {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: 'Business Analyst',
      locations: [],
      numJobs: 20,
      previousListingHashes: [],
    })

    return response.data as {
      jobs: Job[]
      remainingJobs: number
      totalJobs: number
    }
  }),
})
