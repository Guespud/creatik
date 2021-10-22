import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
export default function Redirections() {
    return (
      <div className="my-12 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Sigues Con Dudas?</span>
            <span className="block text-pink-400">Puedes Dejar tu inquietud en este formulario.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600"
              >
               Formulario
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pink-400 bg-white hover:bg-indigo-50"
              >
                CREATIK
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
