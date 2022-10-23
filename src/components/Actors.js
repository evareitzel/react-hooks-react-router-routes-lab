import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)

  const renderActors = actors.map(actor => {
    return(
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map(movie => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    )
  }) 

  return(
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  )
}

export default Actors;
