import React,{useId} from 'react'

function InputBox({
  label, 
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable= false,
  currencyDisable = false,
  className= "",
}){
const amountInputId = useId()//useId is a hook that will generate a unique id for us

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex
    ${className}
    `}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        <input 
        id={amountInputId}
        className='outline-none w-full bg-transparent ppy-1.5'
        type='number'
        placeholder='Amount'
        disabled={amountDisable}
        value={amount}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        //onAmountChange is a function that will be passed as a prop and wo chechk krne ke liye ki usme  value  hai  ya nhi isliye yaha  pe && use kiya hai
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/60 mb-2 w-full'>Currency Type</p>
        <select
        className='rounded -lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectCurrency}
        disabled={currencyDisable}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
          //to bring performance in loop we use key
        </select>
      </div>
    </div>
  )
}

export default InputBox;