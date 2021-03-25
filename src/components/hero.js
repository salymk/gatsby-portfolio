import React from 'react'

export const Hero = () => (
  <>
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-teal-800 to-cyan-700"
              style="mix-blend-mode: multiply;"
            />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Hey, I'm Salym Akhmedov</span>
              <span className="block text-cyan-200">A React Developer</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-cyan-200 sm:max-w-3xl">
              I build modern websites with ReactJS by focusing on user
              experience and beautiful design.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                <a
                  href="#"
                  className="uppercase flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-cyan-700 bg-white hover:bg-cyan-50 sm:px-8"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
