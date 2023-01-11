import type { ReactNode } from 'react'
import FilterIcon from '../icons/FilterIcon.svg'
import Image from 'next/image'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="drawer-mobile drawer mx-auto h-[calc(100vh-5rem)] w-[1400px] max-w-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-600">
        <label
          htmlFor="my-drawer-2"
          className="btn-ghost drawer-button btn m-4 rounded-md lg:hidden"
        >
          <Image src={FilterIcon as string} alt="" width={24} height={24} />
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-base-100 p-4 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
