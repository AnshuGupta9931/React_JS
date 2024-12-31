import { useState } from 'react';
import InputBox from '../components/InputBox';
import useCurrencyInfo from '../Hooks/useCurrencyInfo';
import Photo from '../components/Photo'; // Ensure this path is correct

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTO] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setTO(from);
        setFrom(to);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/28283869/pexels-photo-28283869/free-photo-of-a-mountain-with-clouds-and-fog-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <div className="flex">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert();
                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    selectCurrency={from}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    onAmountChange={(amount) => setAmount(amount)}
                                />
                            </div>
                            <div className="relative w-full flex justify-center my-4">
                                <button
                                    type="button"
                                    className="border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1"
                                    onClick={swap}
                                >
                                    Swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    selectCurrency={to}
                                    onCurrencyChange={(currency) => setTO(currency)}
                                    amountDisable={true}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                            >
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                        <Photo url="https://images.pexels.com/photos/5150054/pexels-photo-5150054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
