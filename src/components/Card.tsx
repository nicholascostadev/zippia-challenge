import Image from 'next/image'

type CardProps = {
  postedDate: string
  companyName: string
  companyLogo: string
  stars: string
  jobUrl: string
  jobDescription: string
  jobTitle: string
  jobLocation: string
  estimatedSalary: string
  salary: {
    average: 92000
    high: 113000
    low: 71000
  }
  expanded: boolean
  handleExpand: () => void
  index: number
}

export const Card = ({
  companyLogo,
  companyName,
  jobDescription,
  jobTitle,
  jobUrl,
  postedDate,
  stars,
  jobLocation,
  estimatedSalary,
  salary,
  expanded,
  handleExpand,
  index,
}: Partial<CardProps>) => {
  return (
    <button
      tabIndex={index}
      className={`w-full rounded-md border border-black/5 bg-base-100 shadow-xl transition-all hover:bg-gray-100 lg:card-side ${
        expanded ? 'col-span-full hover:bg-gray-50 xl:w-full' : ''
      }`}
      onClick={handleExpand}
    >
      <div className="card-body text-left">
        <a className="card-title pb-4 hover:text-blue-600" href="#">
          <Image
            src="https://logo.clearbit.com/pginvestor.com"
            alt=""
            width={45}
            height={45}
            className="rounded-full"
          />
          {jobTitle}
        </a>

        <div>
          <p className="font-medium">{companyName}</p>
          <p className="text-gray-700">{jobLocation}</p>
        </div>

        <p
          className={`line-clamp-3 ${expanded ? 'line-clamp-none' : ''}`}
          dangerouslySetInnerHTML={{ __html: jobDescription }}
        ></p>
        <div className="card-actions items-center justify-between pt-4">
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
    </button>
  )
}
