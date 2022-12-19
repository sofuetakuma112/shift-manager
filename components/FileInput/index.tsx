import React from 'react'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
  label: string
} & ComponentPropsWithoutRef<'input'>

export const FileInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, id, ...rest }, inputRef) => {
    return (
      <div className='form-control w-full'>
        <label htmlFor={id} className='label'>
          <span className='label-text'>{label}</span>
        </label>
        <input
          type='file'
          className='file-input file-input-bordered w-full'
          id={id}
          ref={inputRef}
          {...rest}
        />
      </div>
    )
  },
)

FileInput.displayName = 'FileInput'
