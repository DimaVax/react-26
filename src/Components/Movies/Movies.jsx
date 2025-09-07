import { useState } from "react";
import { getMovies } from "../../api/GetMovies";

export const Movies = () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([])
  const changeKeyword = (e) => {
    setKeyword(e.currentTarget.elemnts.input.value)
  };
  return (
    <div>
        <h2>Search movies</h2>
      <form onSubmit={changeKeyword} >
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
