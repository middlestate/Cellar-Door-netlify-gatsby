import React from 'react'
import Layout from '../components/Layout'

const FoodPage = () => {
  return (
    <Layout>
      <main>
        <iframe src="menu.pdf" title="menu" width="100%" height="80%"></iframe>
      </main>
    </Layout>
  )
}

export default FoodPage