
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { Fragment, useMemo } from 'react'
import { CategoryPreviewProjects } from '../../../src/components'
import { LayoutDashboard } from '../../../src/layouts'


export default function Index() {


  return (
    <Fragment>
      <CategoryPreviewProjects />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const queryClient = new QueryClient()
  // await queryClient.prefetchQuery(["find-sites-wear"], findSitesWear)
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
