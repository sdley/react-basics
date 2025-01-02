import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({counterName="Counter Name"}) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        
        setCount(count + 1);
        // count++;
        // console.log(count);
    }
    // console.log(count);
    return (
        <div className="flex justify-between items-center m-2 bg-slate-300 p-2 rounded-lg">
          <p className="text-2xl">{counterName}: {count}</p>
          <button 
            className="bg-blue-500 
            hover:bg-blue-700 
            text-white 
            text-2xl
            font-bold py-2 px-4 rounded" onClick={handleClick}
            >+</button>
        </div>
    );
}

Counter.propTypes = {
    counterName: PropTypes.string.isRequired,
};
