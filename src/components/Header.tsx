import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="navbar mx-auto w-[1400px] bg-base-100">
      <div className="flex-1">
        <Link
          href="/test/jobs"
          className="text-xl font-bold normal-case hover:text-gray-600"
        >
          TESTE
        </Link>
      </div>
      <div className="flex-none gap-4">
        <div>
          <Link href="/test/jobs" className="text-lg hover:text-gray-400">
            Jobs
          </Link>
        </div>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <Image
                src="https://placeimg.com/80/80/people"
                alt=""
                fill
                className="rounded-full"
              />
            </div>
          </label>
        </div>
      </div>
    </header>
  )
}
