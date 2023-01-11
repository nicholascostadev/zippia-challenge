export type Job = {
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
