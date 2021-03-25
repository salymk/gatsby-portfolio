/* eslint-disable react/prop-types */
import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="md:py-6">{children}</div>
      <Footer />
    </>
  )
}
