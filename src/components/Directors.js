import React from "react";
import { directors} from "../data"; // , movies 

function Directors() {

  const renderDirectors = directors.map(director => {
    return(
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return(
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  )
}

export default Directors;
