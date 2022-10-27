import React, { Fragment, useMemo, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../../../src/layouts'
import { findAllProductsFood, findProductFood, useProductFood } from '../../../../../../../src/hooks'
import { MealFood } from '../../../../../../../src/components'



function FoodId() {
  const { asPath } = useRouter()
  const { data: food } = useProductFood(asPath)
  
  return (
    <Fragment>
      <MealFood meal={food!} />
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const foods = await findAllProductsFood()
  console.log('foods', foods);
  // console.log(foods);
  
  return {    
    // paths: [{ params: { siteId: "6345a688dfbf75036f6e66d1", type: "clothing", productId: "634610809b19974e0a031e24" } }],
    paths: foods.map(data => ({ params: { siteId: data.siteId, type: data.data.type, foodId: data._id } })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  // console.log(context?.params);
  
  const id = context?.params?.foodId as string
  const type = context?.params?.type as string
  // console.log(context?.params);
  await queryClient.prefetchQuery(["find-product-food", id, type], async () => await findProductFood(id, type))

  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
FoodId.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

export default FoodId