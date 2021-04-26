/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  Name: yup.string().required(),
  Message: yup.string().required(),
  Email: yup.string().email().required(),
})

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = data => console.log(data)

  return (
    <>
      {/* <!-- Contact form --> */}
      <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
        <h3 className="text-lg font-medium text-gray-900">Send a message</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                name="Name"
                placeholder="Name"
                type="text"
                id="name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 
                  errors.Name focus:border-cyan-500
                border-gray-300 rounded-md"
                {...register('Name')}
              />
              <span className="text-red-500">{errors.Name?.message}</span>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:border-cyan-500
                border-gray-300 rounded-md"
                {...register('Email')}
              />
              <span className="text-red-500">{errors.Email?.message}</span>
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <span id="message-max" className="text-sm text-gray-500">
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="Message"
                rows="4"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:border-cyan-500
                border-gray-300 rounded-md"
                aria-describedby="message-max"
                {...register('Message')}
              />
              <span className="text-red-500">{errors.Message?.message}</span>
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
