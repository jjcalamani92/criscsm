import React, { Fragment, useMemo } from 'react'
import { useRouter } from 'next/router'

import {findPage0Food, findPages0Food, findPages1FoodByParentId, usePage0Food, usePages1FoodByParentId } from '../../../../../../src/hooks'

import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../../src/layouts'
import { HeadingDashboard, Pages1 } from '../../../../../../src/components'

function Page0() {
  const { asPath } = useRouter()
  const { data: page0 } = usePage0Food(asPath)
  
  const { data: pages1 } = usePages1FoodByParentId(asPath)
  const list = useMemo(() => pages1,
    [pages1])
  return (
    <Fragment>
      <HeadingDashboard title={page0?.data.seo.title!} page={page0}/>
      <Pages1 pages1={list!}/>
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages0 = await findPages0Food()
  console.log(pages0);
  
  return {
    paths: pages0.map(data => ({ params: { siteId: data.siteId, page0Id: data._id } })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient()
  const pageId = context?.params?.page0Id as string
  const parentId = context?.params?.page0Id as string
  await queryClient.prefetchQuery(["find-page0-food", pageId], async () => await findPage0Food(pageId))
  await queryClient.prefetchQuery(["find-pages1-food-by-parent-id", parentId], async () => await findPages1FoodByParentId(parentId))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
Page0.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

export default Page0