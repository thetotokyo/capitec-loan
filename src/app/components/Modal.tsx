import React, { useEffect } from 'react'
import { ModalProps } from '../types'

export default function Modal({title, subtitle, onClose, color = 'text-green-600'}: ModalProps) {

  return (
    <div className="h-screen bg-gray-500/60 p-5 left-0 bottom-0 fixed z-20 flex flex-col align-center justify-center">
        <div className="bg-white p-10 mt-10 rounded-2xl shadow-xl w-full max-w-3xl text-center">
            <h2 className={"text-3xl font-bold " + color}>
            {title}
            </h2>
            <p className="my-4 text-gray-600">
            {subtitle}
            </p>

            <button
                onClick={onClose}
                type="button"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
            >
                Close
            </button>

        </div>
        
    </div>
  )
}
