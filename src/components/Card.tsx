import Image from 'next/image'
import { Info, X } from 'phosphor-react'

type CardProps = {
  postedDate: string
  companyName: string
  companyLogo: string
  jobUrl: string
  jobDescription: string
  jobTitle: string
  jobLocation: string
  estimatedSalary: string
  expanded: boolean
  handleExpand: () => void
}

export const Card = ({
  companyName,
  jobDescription,
  jobTitle,
  postedDate,
  jobLocation,
  estimatedSalary,
  expanded,
  handleExpand,
  companyLogo,
  jobUrl,
}: CardProps) => {
  return (
    <div
      className={`flex w-full max-w-full flex-col rounded-md border border-black/5 bg-base-100 shadow-xl transition-all lg:card-side ${
        expanded ? 'col-span-full bg-gray-50 xl:w-full' : ''
      }`}
    >
      <div className="card-body text-left">
        <div className="flex items-center justify-between pb-4">
          <a
            className="card-title transition-colors hover:text-blue-600"
            href={jobUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={
                companyLogo ??
                'https://static.zippia.com/ui-router/logo/logo_mobile_white.png'
              }
              alt=""
              width={45}
              height={45}
              className="rounded-full"
            />
            {jobTitle}
          </a>

          <button
            className="btn-ghost btn gap-2 text-blue-600 hover:bg-transparent hover:text-blue-400"
            onClick={handleExpand}
          >
            {expanded ? 'Close' : 'See more'}
            {expanded ? <X size={24} /> : <Info size={24} />}
          </button>
        </div>

        <div>
          <p className="font-medium">{companyName}</p>
          <p className="text-gray-700">{jobLocation}</p>
        </div>

        <p
          className={`line-clamp-3 ${expanded ? 'line-clamp-none' : ''}`}
          dangerouslySetInnerHTML={{ __html: jobDescription }}
        ></p>
        <div className="card-actions items-center justify-between justify-self-end pt-4">
          <div>
            <p>
              {estimatedSalary} <span>{postedDate}</span>
            </p>
          </div>
          <button className="btn-primary btn-sm btn rounded-md normal-case">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
