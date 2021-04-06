import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => (
  <>
    <footer className="">
      <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <LinkScroll
              to="tools"
              spy
              smooth
              offset={-100}
              duration={1000}
              className="cursor-pointer text-lg font-medium text-gray-900 hover:text-gray-500"
            >
              Skills
            </LinkScroll>
          </div>
          <div className="px-5 py-2">
            <LinkScroll
              to="portfolio"
              spy
              smooth
              offset={-100}
              duration={1000}
              className="cursor-pointer text-lg font-medium text-gray-900 hover:text-gray-500"
            >
              Portfolio
            </LinkScroll>
          </div>
          <div className="px-5 py-2">
            <LinkScroll
              to="about"
              spy
              smooth
              offset={-100}
              duration={1000}
              className="cursor-pointer text-lg font-medium text-gray-900 hover:text-gray-500"
            >
              About
            </LinkScroll>
          </div>
          <div className="px-5 py-2">
            <LinkScroll
              to="contact"
              spy
              smooth
              offset={-100}
              duration={1000}
              className="cursor-pointer text-lg font-medium text-gray-900 hover:text-gray-500"
            >
              Contact
            </LinkScroll>
          </div>
        </nav>
        <ul className="mt-8 flex justify-center space-x-6">
          <li>
            <a
              className="text-white text-gray-300"
              href="https://github.com/salymk"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub size="2em" className="hover:text-gray-400" />
            </a>
          </li>
          <li>
            <a
              className="text-white text-gray-300"
              href="https://www.linkedin.com/in/salym-akhmedov/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size="2em" className="hover:text-gray-400" />
            </a>
          </li>
        </ul>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2021 Salym Akhmedov. All rights reserved.
        </p>
      </div>
    </footer>
  </>
)

export default Footer
