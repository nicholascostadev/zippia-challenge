import Image from 'next/image'
import type { Job } from '../@types'
import { useState } from 'react'

type JobListProps = {
  jobs: Job[]
}

export const JobsList = ({ jobs }: JobListProps) => {
  const [expanded, setExpanded] = useState<number | undefined>()

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {jobs.map((job, index) => (
          <li
            key={job.jobId}
            className="h-30 w-full rounded-md border border-black/5 shadow-xl"
          >
            <button
              className="p-4 text-left hover:bg-gray-100"
              onClick={() =>
                setExpanded(expanded === index ? undefined : index)
              }
            >
              <a
                className="flex items-center gap-4 pb-4 text-2xl font-medium hover:text-blue-600"
                href="#"
              >
                <Image
                  src="https://logo.clearbit.com/pginvestor.com"
                  alt=""
                  width={45}
                  height={45}
                  className="rounded-full"
                />
                {job.jobTitle}
              </a>
              <div className="pb-2">
                <p className="text-base font-medium">{job.OBJcompanyDisplay}</p>
                <p>{job.location}</p>
              </div>

              <p
                className={`transition-all line-clamp-3 ${
                  expanded === index ? 'line-clamp-none' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: job.OBJdesc }}
              ></p>

              <p className="pt-4">
                {job.estimatedSalary} <span>{job.postedDate}</span>
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
