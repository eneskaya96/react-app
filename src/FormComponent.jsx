import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FirstConatiner from "./FirstContainer";
import { Link } from "react-router-dom";
import fetchSearch from "./fetchSearch"

const FormComponent = () => {
  const [_input, updateInput] = useState(" ");
  const [searchResult, setSearchResult] = useState();


  const results = useQuery(["search", _input], fetchSearch);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  console.log(results)

  return (
    <div>
      <FirstConatiner text="First Container" />
      <div className="search-params">
        <form onSubmit={ (e) => {
            _searchResult();
          }}
          >
          <label htmlFor="location">
            Input :
            <br/>
            <input 
              id="input"
              value={_input}
              placeholder="Enter Input"
              onChange={(e) => updateInput(e.target.value)} />
          </label>
          <button>Submit</button>
        </form>
        <div>
          <Link to={`/details/${results.data.pets[0].id}`}>
            {results.data.pets[0].name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;