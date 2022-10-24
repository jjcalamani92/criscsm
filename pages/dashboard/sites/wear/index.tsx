
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { Fragment, useMemo } from 'react'
import { HeadingDashboard, Sites } from '../../../../src/components'
import { findSitesWear, useSitesWear,findSitesFood, useSitesFood } from '../../../../src/hooks'
import { LayoutDashboard } from '../../../../src/layouts'


export default function Index() {
  const { data:sitesWear } = useSitesWear()
  const listWear = useMemo(() => sitesWear,
    [sitesWear])


  return (
    <Fragment>
      <HeadingDashboard title={"Wear"} />
      <Sites sites={listWear!} />


    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["find-sites-wear"], findSitesWear)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}


Index.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}
