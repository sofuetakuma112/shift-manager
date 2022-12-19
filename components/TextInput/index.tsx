import React, { ComponentPropsWithoutRef } from 'react'

type Props = {
  label: string
} & ComponentPropsWithoutRef<'input'>

export const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, id, ...rest }, inputRef) => {
    return (
      <div className='form-control w-full'>
        <label htmlFor={id} className='label'>
          <span className='label-text'>{label}</span>
        </label>
        <input className='input input-bordered w-full' id={id} ref={inputRef} {...rest} />
      </div>
    )
  },
)
TextInput.displayName = 'TextInput'
