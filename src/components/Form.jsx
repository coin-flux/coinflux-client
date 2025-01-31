import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form() {
  // States for handling data
  const [currDate, setCurrDate] = useState(null);
  const [sourceCurr, setSourceCurr] = useState("");
  const [targetCurr, setTargetCurr] = useState("");
  const [sourceAmount, setSourceAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);

  const [currencyList, setCurrencyList] = useState({});

  // Handles Submit fn
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Date: ${currDate}`);
    console.log(`Source Currency: ${sourceCurr}`);
    console.log(`Target Currency: ${targetCurr}`);
    console.log(`Source Amount: ${sourceAmount}`);
  }

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getAllCurrencies');
        setCurrencyList(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCurrencies();
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <form className="flex flex-col" onSubmit={handleSubmit}>

        {/* For Date */}
        <div className='w-full mt-10'>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pick Date
          </label>
          <input
            onChange={(e) => { setCurrDate(e.target.value) }}
            type="date"
            id="date"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* For Source Currency */}
        <div className='w-full mt-10'>
          <label
            htmlFor="source-curr"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Source Currency
          </label>
          <select
            onChange={(e) => { setSourceCurr(e.target.value) }}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            name=""
            id="">
            <option value="">Select Source Currency</option>
            {Object.entries(currencyList).map(([code, name]) => (
              <option key={code} value={code}>{name} - {code}</option>
            ))}
          </select>
        </div>

        {/* For Target Currency */}
        <div className='w-full mt-10'>
          <label
            htmlFor="targetCurr"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Target Currency
          </label>
          <select
            onChange={(e) => { setTargetCurr(e.target.value) }}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            name=""
            id="">
            <option value="">Select Target Currency</option>
            {Object.entries(currencyList).map(([code, name]) => (
              <option key={code} value={code}>{name} - {code}</option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div className='w-full mt-10'>
          <label
            htmlFor="source-amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Amount
          </label>
          <input
            onChange={(e) => { setSourceAmount(e.target.value) }}
            type="text"
            id="source-amount"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
            placeholder="Amount in Source Currency"
            required
          />
        </div>

        <button className="cursor-pointer my-10 focus:outline-none text-white  bg-button-primary hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-3 dark:hover:bg-button-primary dark:bg-green-700 dark:focus:ring-green-800">Get Target Currency</button>

      </form>
    </div>



  )
}

export default Form