import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link as LinkScroll } from 'react-scroll'
import CoMountains from '../images/comountains.jpg'

export const Hero = () => (
  <>
    <div className="relative mt-20 md:mt-0" id="home">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <StaticImage
              className="h-full w-full object-cover"
              src="../images/comountains.jpg"
              alt="Colorado mountains"
              placeholder="blurred"
              loading="eager"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-teal-900 to-cyan-900"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Hey, I'm Salym Akhmedov</span>
              <span className="block text-cyan-200">A React Developer</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-cyan-50 sm:max-w-3xl">
              I build modern websites with ReactJS by focusing on user
              experience and beautiful design.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                <LinkScroll
                  to="tools"
                  spy
                  smooth
                  offset={-100}
                  duration={1000}
                  className="cursor-pointer uppercase flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-cyan-700 bg-white hover:bg-cyan-50 sm:px-8"
                >
                  Find out more
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-3 -mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </LinkScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hero
