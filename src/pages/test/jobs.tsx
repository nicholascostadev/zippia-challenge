import Head from 'next/head'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { api } from '../../utils/api'
import { JobsList } from '../../components/JobsList'
import { useState } from 'react'
import { Layout } from '../../components/Layout'

export default function JobsPage() {
  const { data } = api.jobs.getJobs.useQuery()
  const [expanded, setExpanded] = useState<number | undefined>()

  const cardJobs = data?.jobs?.slice(0, 10)
  const listJobs = data?.jobs?.slice(10, 20)

  return (
    <>
      <Head>
        <title>Jobs listing</title>
      </Head>
      <Header />
      <main className="relative">
        <Layout>
          <div className="flex flex-col gap-10 p-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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
                    expanded={expanded === index}
                    handleExpand={() =>
                      setExpanded(expanded === index ? undefined : index)
                    }
                    index={index + 1}
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
