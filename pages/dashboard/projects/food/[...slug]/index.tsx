/* eslint-disable react/no-children-prop */
import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Custom404 from '../../../../404'

import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
// import { findSiteByLayout, findSites, usePages0, usePages1, useSite, useSiteByLayout, useSites } from '../../../../src/hooks'
import { getPathByProject } from '../../../../../utils'
import { CategoryPreview0, HomeFood, MarkdownComponentSection } from '../../../../../src/components'
import { LayoutPagesProyects } from '../../../../../src/layouts'
import { findSiteFoodByLayout } from '../../../../../src/hooks'



function Page() { 
  const { asPath } = useRouter()
  // const { data: sites } = useSites();
  // const { data: pages0 } = usePages0();
  // const { data: pages1 } = usePages1();
  
  
  // console.log(getPathByProjects(sites!));
  
  switch (asPath) {
    case '/dashboard/projects/food/635aa2a5fcc9d46c412859a9': return (
    <Fragment>
      {
        MarkdownComponentSection(HomeFood)
        }
    </Fragment>)
    case '/dashboard/projects/6324d2d5132d462bc1c57b55/woman/tops': return (
    <Fragment>
      <CategoryPreview0 />
    </Fragment>)
    default:
      return <Custom404 />
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [{ params: { slug: ["63567b0bbc3a8f273d230727"] } }],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const siteId = context?.params?.slug![0] as string
  // console.log(context?.params);
  
  const queryClient = new QueryClient()
  // await queryClient.prefetchQuery(["find-sites"], findSites)
  await queryClient.prefetchQuery(["find-site-food-by-layout", siteId], async () => await findSiteFoodByLayout(siteId))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
Page.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutPagesProyects>
      {children}
    </LayoutPagesProyects>
  )
}

export default Page