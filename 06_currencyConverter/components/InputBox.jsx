import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex flex-col space-y-4 ${className}`}>
        <div className="w-full">
            <label htmlFor={amountInputId} className="text-black/40 mb-1 block">
                {label}
            </label>
            <input
                id={amountInputId}
                className="outline-none w-full bg-transparent py-1.5 border border-gray-300 rounded-md px-2"
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="w-full">
            <label className="text-black/40 mb-1 block">Currency Type</label>
            <select
                className="w-full rounded-md px-2 py-1 bg-gray-100 cursor-pointer border border-gray-300"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
    
    );
}

export default InputBox;