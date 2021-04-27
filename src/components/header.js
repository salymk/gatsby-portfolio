import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link as LinkScroll } from 'react-scroll'

const Header = () => (
  <header>
    <Menu
      as="div"
      className="fixed w-full z-20 top-0 shadow md:shadow-none md:relative bg-white "
    >
      {({ open }) => (
        <>
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <LinkScroll
                to="home"
                spy
                smooth
                offset={-100}
                duration={1000}
                className="cursor-pointer text-xl font-bold hover:text-gray-700"
              >
                Salym Akhmedov
              </LinkScroll>
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
              {/* 
              <LinkScroll
                to="blog"
                spy
                smooth
                offset={-100}
                duration={1000}
                className="cursor-pointer text-lg font-medium text-gray-900 hover:text-gray-500"
              >
                Blog
              </LinkScroll> */}

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
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <LinkScroll
                to="contact"
                spy
                smooth
                offset={-100}
                duration={1000}
                className="ml-8 cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
              >
                Hire me
              </LinkScroll>
            </div>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
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
                    <LinkScroll
                      to="tools"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="cursor-pointer text-md font-medium text-gray-500 hover:text-gray-900"
                    >
                      <Menu.Item
                        as="a"
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent "
                      >
                        Skills
                      </Menu.Item>
                    </LinkScroll>
                    <LinkScroll
                      to="portfolio"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="cursor-pointer text-md font-medium text-gray-500 hover:text-gray-900"
                    >
                      <Menu.Item
                        as="a"
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent "
                      >
                        Portfolio
                      </Menu.Item>
                    </LinkScroll>

                    <LinkScroll
                      to="about"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="cursor-pointer text-md font-medium text-gray-500 hover:text-gray-900"
                    >
                      <Menu.Item
                        as="a"
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent "
                      >
                        About
                      </Menu.Item>
                    </LinkScroll>
                    {/* <LinkScroll
                      to="blog"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="cursor-pointer text-md font-medium text-gray-500 hover:text-gray-900"
                    >
                      <Menu.Item
                        as="a"
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent "
                      >
                        Blog
                      </Menu.Item>
                    </LinkScroll> */}
                    <LinkScroll
                      to="contact"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="cursor-pointer text-md font-medium text-gray-500 hover:text-gray-900"
                    >
                      <Menu.Item
                        as="a"
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent "
                      >
                        Contact
                      </Menu.Item>
                    </LinkScroll>
                  </div>
                  <div className="mt-6 px-5">
                    <LinkScroll
                      to="contact"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="cursor-pointer text-md font-medium text-gray-500 hover:text-gray-900"
                    >
                      <Menu.Item
                        as="a"
                        href="#"
                        className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-0 focus:border-transparent "
                      >
                        Hire me
                      </Menu.Item>
                    </LinkScroll>
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
