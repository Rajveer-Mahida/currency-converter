import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmoutChange,
  onCurrncyChange,
  selectCurrency = "usd",
  currencyOption = [],
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const inputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className='w-1/2'>
        <label htmlFor={inputId} className='text-black/40 mb-2 inline-block '>
          {label}
        </label>
        <input

          id={inputId}
          className='outline-none w-full bg-transparent py-1.5 font-bold'
          type='number'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmoutChange && onAmoutChange(Number(e.target.value));
          }}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e) => {
            onCurrncyChange && onCurrncyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
