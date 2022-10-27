import React, { Fragment, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import { findSitesWear, findSiteWear, findPages0WearByParentId, useSiteFood, findSitesFood, findSiteFood, usePages0WearByParentId } from '../../../../../src/hooks'

import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../src/layouts'
import { HeadingDashboard, Pages0 } from '../../../../../src/components'
import { findPages0FoodByParentId, usePages0FoodByParentId } from '../../../../../src/hooks/page/food'



export default function Index() {
  const { asPath } = useRouter()
  const { data: site } = useSiteFood(asPath);
  const { data: pages0 } = usePages0FoodByParentId(asPath)
  const list = useMemo(() => pages0,
    [pages0])
  // console.log(list);
  
  return (
    <Fragment>
      <HeadingDashboard title={site?.data.name!} site={site}/>
      <Pages0 pages0={list!}/>
      {/* <h1>Hola</h1> */}
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sites = await findSitesFood()
  return {
    paths: sites.map(data => ({params: {siteId: data._id}})),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  const siteId = context?.params?.siteId as string
  const parentId = context?.params?.siteId as string
  await queryClient.prefetchQuery(["find-site-food", siteId], async () => await findSiteFood(siteId))
  await queryClient.prefetchQuery(["find-pages0-food-by-parent-id", parentId], async () => await findPages0FoodByParentId(parentId))
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

