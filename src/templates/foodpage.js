import React from 'react'
import Layout from '../components/Layout'

import menu from './menu.pdf'

export const FoodPageTemplate = ({
  pdf
}) => (
    <Layout>
      <embed src={menu} title="menu" style={{width:"100%", height:1024}} />
    </Layout>
)

export default FoodPageTemplate