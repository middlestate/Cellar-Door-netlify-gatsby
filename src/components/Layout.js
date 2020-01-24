import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import './fonts.css'
import GilroyLight from '../components/fonts/Gilroy-Light.otf'
import GilroySemiBold from '../components/fonts/Gilroy-SemiBold.otf'

import useSiteMetadata from './SiteMetadata'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFacebookF, faTwitter, faYoutube, faInstagram)

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <link rel="preload" href="../components/fonts.css" as="style" type="text/css" crossOrigin="anonymous" />
        <link rel="preload" href={GilroyLight} as="style" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href={GilroySemiBold} as="style" type="font/otf" crossOrigin="anonymous" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
