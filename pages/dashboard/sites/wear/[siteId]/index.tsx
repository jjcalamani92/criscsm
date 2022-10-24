import React, { Fragment, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import { useSiteWear, findSitesWear, findSiteWear, usePages0WearByParentId, findPages0WearByParentId } from '../../../../../src/hooks'

import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../src/layouts'
import { HeadingDashboard, Pages0 } from '../../../../../src/components'



export default function Index() {
  const { asPath } = useRouter()
  const { data: site } = useSiteWear(asPath);
  
  const { data: pages0 } = usePages0WearByParentId(asPath)
  console.log(pages0);
  // console.log(asPath);
  
  const list = useMemo(() => pages0,
    [pages0])
  // console.log(site);
  
  return (
    <Fragment>
      <HeadingDashboard title={site?.data.name!} site={site}/>
      <Pages0 pages0={list!}/>
      
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sites = await findSitesWear()
  return {
    // paths: [{ params: { siteId: "6324d2d5132d462bc1c57b55" } }],
    paths: sites.map(data => ({params: {siteId: data._id}})),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  const siteId = context?.params?.siteId as string
  const parentId = context?.params?.siteId as string
  await queryClient.prefetchQuery(["find-site-wear", siteId], async () => await findSiteWear(siteId))
  await queryClient.prefetchQuery(["find-pages0-wear-by-parent-id", parentId], async () => await findPages0WearByParentId(parentId))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
Index.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

