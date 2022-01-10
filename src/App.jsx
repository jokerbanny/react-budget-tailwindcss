function App() {
  return (
    <div className=' bg-gray-100 min-h-screen'>
      <div className='container p-10 mx-auto'>
        <h1 className='text-4xl font-bold text-gray-700 mb-6'>Budget</h1>
        <div>
          <h3 className='text-lg font-semibold'>YOUR BALANCE:</h3>
          <p className='text-5xl mb-6'>2,550.53</p>
          <div className='grid grid-cols-2 bg-white mb-6 border-2 p-6 rounded-md'>
            <div className='flex flex-col items-center'>
              <p className='text-lg font-semibold'>ICOMING:</p>
              <p className='text-5xl font-semibold text-green-500'>1,045.50</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-lg font-semibold'>EXPENSES:</p>
              <p className='text-5xl font-semibold text-red-500'>623,50</p>
            </div>
          </div>
          <div>
            <h2 className='text-xl font-semibold text-gray-700 mb-2'>
              History
            </h2>
            <div className='flex justify-between border-2 p-10 bg-white rounded-md'>
              <p className='text-md'>Somthing</p>
              <div className='flex space-x-4'>
                <p className='text-lg'>$10.00</p>
                <div className='flex space-x-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </div>
              </div>
            </div>

            <form className='my-6'>
              <h2 className='text-xl font-semibold text-gray-700 mb-2'>
                Add new transaction
              </h2>
              <div className=' flex justify-between bg-white items-center'>
                <div className=' md:p-10 py-2 px-4 w-2/3'>
                  <p className='text-md '>Description</p>
                  <div className='flex items-center'>
                    <input
                      type='text'
                      placeholder='New shinny thing'
                      className='p-2 w-full border-2 rounded-md outline-none'
                    />
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10 ml-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  </div>
                </div>
                <div className=' md:p-10 py-2 px-4'>
                  <p className='text-md '>Value</p>
                  <div className='flex items-center'>
                    <input
                      type='text'
                      placeholder='100.00'
                      className='p-2 border-2 w-full rounded-md outline-none'
                    />
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10 ml-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='mt-4 p-2 space-x-2'>
                <button className='text-md bg-red-500 px-5 py-2 rounded-md text-white'>
                  Cancle
                </button>
                <span className='text-lg font-semibold'>Or</span>
                <button className='text-md bg-green-500 px-8 py-2 rounded-md text-white'>
                  Ok
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
