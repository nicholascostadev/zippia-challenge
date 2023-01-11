import Head from 'next/head'
import { Header } from '../../components/Header'
import { ContentWithDrawer } from '../../components/ContentWithDrawer'
import Image from 'next/image'
import filterIcon from '../../icons/FilterIcon.svg'

export default function JobsPage() {
  return (
    <>
      <Head>
        <title>Jobs listing</title>
      </Head>
      <Header />
      <ContentWithDrawer>
        <div>
          <label htmlFor="drawer" className="btn-ghost drawer-button btn gap-2">
            Filtros
            <Image src={filterIcon as string} alt="" width={24} height={24} />
          </label>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          </div>
        </div>
      </ContentWithDrawer>
    </>
  )
}
