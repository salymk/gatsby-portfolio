import React from 'react'

const About = () => (
  <>
    <div id="about" className="pb-16 mt-12 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img
                className="object-cover lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixqx=afu5d1WeD7&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <h4 className="text-white text-3xl font-medium">Who Am I?</h4>
                <p className="mt-6 text-2xl text-white">
                  A fast learner and highly motivated frontend web developer
                  with almost two years of experience. Passionate about learning
                  and coding, with a desire to apply his skills on larger
                  development teams. Eager to tackle more complex projects and
                  continue to find ways to maximize user experience. Let's
                  create something great together!
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default About
