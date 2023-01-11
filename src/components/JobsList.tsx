import Image from 'next/image'
import type { Job } from '../@types'
import { useState } from 'react'
import { Info, X } from 'phosphor-react'

type JobListProps = {
  jobs: Job[]
}

export const JobsList = ({ jobs }: JobListProps) => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<
    number | undefined
  >()

  const isExpanded = (currentItemIndex: number) =>
    currentItemIndex === expandedItemIndex

  return (
    <div>
      <ul className="flex flex-col gap-8">
        {jobs.map((job, index) => (
          <li
            key={job.jobId}
            className={`h-30 w-full rounded-md border border-black/5 shadow-xl ${
              isExpanded(index) ? 'bg-gray-50' : ''
            }`}
          >
            <div className="p-4 text-left">
              <div className="flex items-center justify-between pb-4">
                <a
                  className="flex items-center gap-4 text-xl font-medium hover:text-blue-600"
                  href={job.jobURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={job.companyLogo}
                    alt=""
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                  {job.jobTitle}
                </a>
                <button
                  className="btn-ghost btn gap-2 text-blue-600 hover:bg-transparent hover:text-blue-400"
                  onClick={() =>
                    setExpandedItemIndex(
                      expandedItemIndex === index ? undefined : index,
                    )
                  }
                >
                  {isExpanded(index) ? 'Close' : 'See more'}
                  {isExpanded(index) ? <X size={24} /> : <Info size={24} />}
                </button>
              </div>
              <div className="pb-2">
                <p className="text-base font-medium">{job.OBJcompanyDisplay}</p>
                <p>{job.location}</p>
              </div>

              <p
                className={`transition-all line-clamp-3 ${
                  isExpanded(index) ? 'line-clamp-none' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: job.OBJdesc }}
              ></p>

              <p className="pt-4">
                {job.estimatedSalary} <span>{job.postedDate}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
