import { useState } from "react";

function SearchForm( {getSearchInputValue} ){

    const [input, setInput] = useState('');


    const submitSearch = (e) => {
        e.preventDefault();
        getSearchInputValue(input);
        setInput('');
    }


    return(
        <div className="bg-gray-500 p-2 mt-10">
            <form onSubmit={submitSearch} className="flex">
                <input value={input} onChange={(e)=> {setInput(e.target.value)}} type="search" placeholder="British.." className="w-full rounded-full rounded-r-none focus:outline-none pl-5 pr-2"/>
                <button className="bg-yellow-500 p-3 rounded-full rounded-l-none text-yellow-800">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;