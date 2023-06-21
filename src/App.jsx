import { useState, useEffect } from "react";
import SearchForm from "./components/searchform"
import Content from "./components/content"


function App() {

  const [ searchValue, setSearchVaule ] = useState('');
  const [ data, setData] = useState('');

  const getSearchInputValue = (input) => {
    setSearchVaule(input);
  }

  useEffect( () => {
    fetch(`https://api.api-ninjas.com/v1/cats?name=${searchValue}`, {
        headers: { 'X-Api-Key': '/3LlhNWfmtv9PIK+3T0j5g==oV2YMswSMazoS1II'}
    }).then((respons) => { if(respons.ok) { return respons.json()} throw new Error('Something went wrong'); })
    .then((data) => { setData(data)})
    .catch((error) => {
      console.log(error)
    });

  }, [searchValue]);

  return (
    <>
     <SearchForm getSearchInputValue={getSearchInputValue} />
     {
      data && <Content data={data} />
     }
    </>
  )
}

export default App
