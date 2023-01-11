import type { ReactNode } from 'react'

type ContentWithDrawerProps = {
  children: ReactNode
}

export const ContentWithDrawer = ({ children }: ContentWithDrawerProps) => {
  return (
    <main className="drawer-start drawer mx-auto">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto w-[1400px]">{children}</div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-base-100 p-4 text-base-content">
          <li>
            <a>Filtro 1</a>
          </li>
          <li>
            <a>Filtro 2</a>
          </li>
        </ul>
      </div>
    </main>
  )
}
