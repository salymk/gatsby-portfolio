import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ClientWork = () => {
  const [readMoreAsquared, setReadMoreAsquared] = useState()
  const [readMoreTint, setReadMoreTint] = useState()

  return (
    <>
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
        />
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2
                    id="portfolio"
                    className="text-3xl font-extrabold tracking-tight text-cyan-500"
                  >
                    The Tint Bros
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    The Tint Bros is a car tinting company out of Aurora,
                    Colorado. We built the website with one goal in mind, and
                    that's to get a visitor to schedule an appointment with the
                    owner. Since the website has gone live, it has consistently
                    produced two new clients a month.
                  </p>
                  <p className="mt-2 text-base text-cyan-500">
                    ReactJS / GatsbyJS / TailwindCSS / Headless Wordpress CMS /
                    Gatsby Cloud / Vercel / Bluehost
                  </p>
                  <div className="mt-6 flex space-x-2">
                    <a
                      href="https://thetintbros.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                    >
                      Live Preview
                    </a>
                    <a
                      href="https://github.com/thetintbros/wp-tintbros"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-cyan-600 bg-cyan-50 hover:bg-cyan-100"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p
                      className={`text-base text-gray-500 ${
                        readMoreTint ? '' : 'truncate'
                      }`}
                    >
                      &ldquo;Working with Salym on my company’s website was a
                      pleasure. He displayed skill and competency in his
                      programming work where I needed specific changes to fit my
                      business. What really took my experience to another level
                      was Salym’s ability to design solutions through every step
                      of the process for problems that could show up down the
                      line. I appreciate his vast knowledge on business domains.
                      He understands where a business owner comes from and has
                      the expertise to translate it to a website that
                      works.&rdquo;
                    </p>
                    <button
                      className={`hover:text-cyan-500 ${
                        readMoreTint ? 'hidden' : ''
                      }`}
                      type="button"
                      onClick={() => setReadMoreTint(true)}
                    >
                      Read more
                    </button>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      {/* <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div> */}
                      <div className="text-base font-medium text-gray-700">
                        - Zaaz, CEO of The Tint Bros
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <StaticImage
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="../images/tintbros2.png"
                  alt="The tint bros homepage"
                  placeholder="blurred"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-cyan-500">
                    Asquared Blog
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Asquared is a blog focused on exploring the challenges of
                    modernity. For my client to easily publish articles, I used
                    Ghost CMS for the backend, and having GatsbyJS for the front
                    end makes the website user-friendly and SEO optimized for
                    the ultimate blog experience.
                  </p>
                  <p className="mt-2 text-base text-cyan-500">
                    ReactJS / GatsbyJS / Bulma CSS / Headless Ghost CMS / Vercel
                    / DigitalOcean
                  </p>
                  <div className="mt-6 flex space-x-2">
                    <a
                      href="https://asquaredblog.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                    >
                      Live Preview
                    </a>
                    <a
                      href="https://github.com/asquared2/asquaredblog"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-cyan-600 bg-cyan-50 hover:bg-cyan-100"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p
                      className={`text-base text-gray-500 ${
                        readMoreAsquared ? '' : 'truncate'
                      }`}
                    >
                      &ldquo;After working with Salym on building my website, I
                      can confidently recommend his services. For anyone looking
                      for a professional, well-built website, Salym is the
                      person for you. What I appreciate about working with Salym
                      is how he is timely, dedicated, and organized. Salym keeps
                      his word, demonstrates very strong initiative, and works
                      diligently to set up specific times to discuss options for
                      the website. When meeting with him, he has a list of
                      things to discuss and go over to be organized in website
                      design.He will, if he says he is going to complete a task,
                      well, he does exactly that. He will tinker with a website
                      until he finds it suitable and isn't afraid to spend extra
                      time investigating alternative ways and learning more to
                      create a product likable by the person. He is a type-A
                      Player, the type of person you would want to work with or
                      hire. &rdquo;
                    </p>
                    <button
                      className={`hover:text-cyan-500 ${
                        readMoreAsquared ? 'hidden' : ''
                      }`}
                      type="button"
                      onClick={() => setReadMoreAsquared(true)}
                    >
                      Read more
                    </button>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      {/* <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div> */}
                      <div className="text-base font-medium text-gray-700">
                        - Abdel Albakri, Creator of Asquared Blog
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <StaticImage
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="../images/asquaredblog2.png"
                  alt="Asquared blog homepage"
                  placeholder="blurred"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientWork
