import React, { useState } from 'react'
import bootcampProjects from '../data/bootcampProjects'

const LearningProjects = () => {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  console.log(bootcampProjects)
  return (
    <>
      <div className="relative bg-white sm:py-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-cyan-500 tracking-tight sm:text-4xl">
            Learning Projects
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {bootcampProjects.map(project => (
                <div className="pt-6" key={project.id}>
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="relative h-40 mb-6">
                        <img
                          className="w-full h-full object-cover rounded-lg shadow-xl"
                          src={project.image.src}
                          alt={project.title}
                        />
                      </div>
                      <h3 className="mt-2 text-xl font-medium text-gray-900 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-base text-cyan-500">
                        {project.skills}
                      </p>

                      <div className="mt-6 flex flex-row justify-center space-x-2">
                        <a
                          href={project.preview.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-1/2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.github.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-1/2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-cyan-600 bg-cyan-50 hover:bg-cyan-100"
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LearningProjects
