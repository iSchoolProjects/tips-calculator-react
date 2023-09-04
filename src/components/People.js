import React from 'react';

export default function People({state, handleChange}) {
  return (
    <>
      <div className="peopleNum">
        <label className="label">Number of people</label>
        <h4>Can't be zero</h4>
      </div>
      <div className="billContainer">
        <img className="dollarIcon" src="images/icon-person.svg" alt="Person" />
        <input onChange={handleChange} name="people" type="number" min="0" value={state.people} />
      </div>
    </>
  );
}
