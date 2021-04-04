import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Menu, Transition } from '@headlessui/react'

const Header = () => (
  <header>
    <Menu as="div" className="relative bg-white">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="text-xl font-bold">
                Salym Akhmedov
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Menu.Button
                as="button"
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-cyan-400 hover:text-cyan-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                {/* <!-- Heroicon name: outline/menu --> */}
                <svg
                  className="h-6 w-6"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Menu.Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a
                href="#"
                className="text-md font-medium text-gray-500 hover:text-gray-900"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Partners
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Company
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
              >
                Sign up
              </a>
            </div>
          </div>
          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <a href="#" className="text-xl font-bold">
                      Salym Akhmedov
                    </a>
                  </div>
                  <div className="-mr-2">
                    <Menu.Button
                      as="button"
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-cyan-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
                    >
                      <span className="sr-only">Close menu</span>
                      {/* <!-- Heroicon name: outline/x --> */}
                      <svg
                        className="h-6 w-6"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    <Menu.Item
                      as="a"
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 ring-2"
                    >
                      Product
                    </Menu.Item>
                    <Menu.Item
                      as="a"
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Product
                    </Menu.Item>
                    <Menu.Item
                      as="a"
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Product
                    </Menu.Item>
                  </div>
                  <div className="mt-6 px-5">
                    <Menu.Item
                      as="a"
                      href="#"
                      className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
                    >
                      Start free trial
                    </Menu.Item>
                  </div>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  </header>
)

export default Header

/* <header>
<div className="relative bg-white">
  <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <a href="#" className="text-xl font-bold">
        Salym Akhmedov
      </a>
    </div>
    <div className="-mr-2 -my-2 md:hidden">
      <button
        type="button"
        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-cyan-400 hover:text-cyan-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
        aria-expanded="false"
      >
        <span className="sr-only">Open menu</span>
        <!-- Heroicon name: outline/menu -->
        <svg
          className="h-6 w-6"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <nav className="hidden md:flex space-x-10">
      <a
        href="#"
        className="text-md font-medium text-gray-500 hover:text-gray-900"
      >
        Solutions
      </a>
      <a
        href="#"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Pricing
      </a>
      <a
        href="#"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Partners
      </a>
      <a
        href="#"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
      >
        Company
      </a>
    </nav>
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <a
        href="#"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
      >
        Sign up
      </a>
    </div>
  </div>
  
  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div className="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="px-5 pt-4 flex items-center justify-between">
        <div>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
            alt=""
          />
        </div>
        <div className="-mr-2">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-cyan-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
          >
            <span className="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x -->
            <svg
              className="h-6 w-6"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="pt-5 pb-6">
        <div className="px-2 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          >
            Product
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          >
            Features
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          >
            Marketplace
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          >
            Company
          </a>
        </div>
        <div className="mt-6 px-5">
          <a
            href="#"
            className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
          >
            Start free trial
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</header> */
