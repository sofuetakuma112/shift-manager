import React from 'react'

type Props = {
  label: string
  id: string
  placeholder?: string
  required?: boolean
  type?: string
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, id, placeholder, required = false, type = 'text' }, inputRef) => {
    return (
      <div>
        <label htmlFor={id} className='block text-sm font-medium text-gray-900 dark:text-white'>
          {label}
        </label>
        <input
          type={type}
          id={id}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder={placeholder}
          required={required}
          ref={inputRef}
        />
      </div>
    )
  },
)
TextInput.displayName = 'TextInput'
