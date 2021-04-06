import React from 'react'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDigitalOcean,
  FaGithub,
  FaWordpress,
} from 'react-icons/fa'
import { GrGatsbyjs } from 'react-icons/gr'
import { SiTailwindcss, SiJavascript, SiGraphql } from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'
import { DiGit } from 'react-icons/di'

const SkillLogos = () => (
  <>
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p
          id="tools"
          className="text-center text-lg font-semibold uppercase text-cyan-500 tracking-wide"
        >
          Tools I use
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">HTML</span>
              <FaHtml5 size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">CSS</span>
              <FaCss3Alt size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">JavaScript</span>
              <SiJavascript size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">ReactJS</span>
              <FaReact size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">GraphQL</span>
              <SiGraphql size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">GatsbyJS</span>
              <GrGatsbyjs size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">TailwindCSS</span>
              <SiTailwindcss size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">Wordpress</span>
              <FaWordpress size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">Github</span>
              <FaGithub size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">Git</span>
              <DiGit size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">Vercel</span>
              <IoLogoVercel size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-900">DigitalOcean</span>
              <FaDigitalOcean size="4em" color="#dfdfdf" className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SkillLogos
