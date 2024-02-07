'use client'

/* eslint-disable jsx-a11y/label-has-associated-control */

export default function KeyDialog({ open, setOpen }: any) {
  return (
    <dialog
      open={open}
      className='rounded-xl border-solid border-red-500 bg-inherit text-inherit backdrop-blur'>
      <form method='dialog'>
        <h2 className='text-center'>Edit Button</h2>

        <label>
          Standard
          <br />
          <input type='text' />
        </label>
        <br />
        <br />

        <label>
          Extend
          <br />
          <input type='text' />
        </label>
        <br />
        <br />

        <label>
          Symbol
          <br />
          <input type='text' />
        </label>
        <br />
        <br />

        <input
          className='mx-auto block'
          type='submit'
          value='Save'
          disabled
        />
      </form>

      <button
        type='button'
        className='absolute right-1 top-0 m-0 border-none bg-transparent p-0 text-xl font-bold text-red-500 hover:cursor-pointer hover:text-red-700'
        onClick={() => setOpen(false)}>
        X
      </button>
    </dialog>
  )
}
