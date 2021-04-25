/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import ContactForm from './contact-form'

const Contact = () => (
  <>
    <div className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 rounded-lg">
        <div className="relative bg-white shadow-xl rounded-lg">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* <!-- Contact information --> */}
            <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-r from-teal-500 to-cyan-600 sm:px-10 xl:p-12 rounded-l-lg">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width="343"
                  height="388"
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width="359"
                  height="339"
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 id="contact" className="text-xl font-medium text-white">
                Contact information
              </h3>
              <p className="mt-6 text-base text-white max-w-3xl">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-white">
                  {/* <!-- Heroicon name: outline/phone --> */}
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="ml-3">
                    <a href="tel:720-226-1054" className="hover:text-gray-200">
                      720-226-1054
                    </a>
                  </span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-white">
                  {/* <!-- Heroicon name: outline/mail --> */}
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3">
                    <a
                      href="mailto:khokumdarakhmedov@gmail.com"
                      className="hover:text-gray-200"
                    >
                      khokumdarakhmedov@gmail.com
                    </a>
                  </span>
                </dd>
              </dl>
              <ul className="mt-8 flex space-x-12">
                <li>
                  <a
                    className="text-white text-gray-100"
                    href="https://github.com/salymk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub size="2em" className="hover:text-gray-300" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-gray-100"
                    href="https://www.linkedin.com/in/salym-akhmedov/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin size="2em" className="hover:text-gray-300" />
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Contact
