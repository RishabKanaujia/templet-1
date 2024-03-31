import React from 'react'
import Home from './_components/home'
import { getProduct } from './api/product/route'
import { getService } from './api/service/route'

const HomePage = async() => {
  const productList = await getProduct()
  const serviceList = await getService()
  return (
    <Home productList={productList} serviceList={serviceList}/>
  )
}

export default HomePage