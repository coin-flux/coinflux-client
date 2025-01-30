import React from 'react'

function Form() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <form className="flex flex-col">

        {/* For Date */}
        <div className='w-full mt-10'>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pick Date
          </label>
          <input
            type="date"
            id=""
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* For Source Currency */}
        <div className='w-full mt-10'>
          <label
            htmlFor="sourceCurr"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Source Currency
          </label>
          <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" name="" id="">
            <option value="">Select Source Currency</option>
          </select>
        </div>

        {/* For Target Currency */}
        <div className='w-full mt-10'>
          <label
            htmlFor="targetCurr"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Target Currency
          </label>
          <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" name="" id="">
            <option value="">Select Target Currency</option>
          </select>
        </div>

        {/* Amount */}
        <div className='w-full mt-10'>
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Amount
          </label>
          <input
            type="text"
            id=""
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            placeholder="Amount in Source Currency"
            required
          />
        </div>

        <button type="button" className=" cursor-pointer my-10 focus:outline-none text-white  bg-button-primary hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-3 dark:hover:bg-button-primary dark:bg-green-700 dark:focus:ring-green-800">Get Target Currency</button>


      </form>
    </div>



  )
}

export default Form