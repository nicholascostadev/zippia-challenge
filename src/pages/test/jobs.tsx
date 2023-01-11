import Head from 'next/head'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { api } from '../../utils/api'
import { JobsList } from '../../components/JobsList'
import { useState } from 'react'
import { Layout } from '../../components/Layout'
import { SpinnerGap } from 'phosphor-react'
import { filterJobs } from '../../utils/filterJobs'

export default function JobsPage() {
  // keep the state of the switch, checking if user wants only jobs posted
  // from within 7 days
  const [sevenDays, setSevenDays] = useState(false)
  const [sortAlphabetically, setSortAlphabetically] = useState(false)

  // getting job posts from api
  const { data, isFetching } = api.jobs.getJobs.useQuery(undefined, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  })
  // variable to keep the state of the card that is expanded(saving it's index)
  const [expandedIndex, setExpandedIndex] = useState<number | undefined>()

  const filteredJobs = filterJobs(data?.jobs, { sevenDays, sortAlphabetically })

  // since we want to show 10 cards and 10 list items,
  // we split the data so that it's more organized
  const cardJobs = filteredJobs?.slice(0, 10)
  const listJobs = filteredJobs?.slice(10, 20)

  // toggling the state of the switch
  const toggleSevenDays = () => {
    setSevenDays((prev) => !prev)
  }

  const handleToggleSort = () => {
    setSortAlphabetically((prev) => !prev)
  }

  return (
    <>
      <Head>
        <title>Jobs listing</title>
      </Head>
      <Header />
      <main className="relative pt-10">
        <Layout toggleSevenDays={toggleSevenDays} toggleSort={handleToggleSort}>
          <div
            className={`flex flex-col gap-10 p-4 pt-0 ${
              isFetching ? 'h-screen w-full items-center justify-center' : ''
            }`}
          >
            <div className={`grid grid-cols-1 gap-4 lg:grid-cols-2`}>
              {isFetching && <SpinnerGap className="animate-spin" size={48} />}
              {cardJobs &&
                cardJobs.map((job, index) => (
                  <Card
                    key={job.jobId}
                    jobTitle={job.jobTitle}
                    companyName={job.OBJcompanyDisplay}
                    jobDescription={job.OBJdesc}
                    postedDate={job.postedDate}
                    jobLocation={job.location}
                    estimatedSalary={job.estimatedSalary}
                    expanded={expandedIndex === index}
                    handleExpand={() =>
                      setExpandedIndex(
                        expandedIndex === index ? undefined : index,
                      )
                    }
                    companyLogo={job.companyLogo}
                    jobUrl={job.OBJurl}
                  />
                ))}
            </div>
            {listJobs && <JobsList jobs={listJobs} />}
          </div>
        </Layout>
      </main>
    </>
  )
}
