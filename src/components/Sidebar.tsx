type SidebarProps = {
  toggleSevenDays: () => void
  toggleSort: () => void
}

export const Sidebar = ({ toggleSevenDays, toggleSort }: SidebarProps) => {
  return (
    <>
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <div className="menu w-80 gap-4 bg-base-100 text-base-content">
        <h2 className="pl-4 text-2xl font-medium">Filters</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <div className="form-control items-start justify-start rounded-lg p-0 active:bg-gray-400">
              <label className="label flex w-full cursor-pointer justify-between gap-4 p-4">
                <span className="label-text text-base font-medium">
                  Posted within 7 days.
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={toggleSevenDays}
                />
              </label>
            </div>
          </li>
          <li>
            <div className="form-control items-start justify-start rounded-lg p-0  active:bg-gray-400">
              <label className="label w-full cursor-pointer justify-between gap-4 p-4">
                <span className="label-text text-base font-medium">
                  Sort alphabetically.
                </span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={toggleSort}
                />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
