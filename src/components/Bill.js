import React from 'react';

export default function Bill({handleChange, state}) {
  return (
    <>
      <label className="label">Bill</label>
      <div className="billContainer">
        <img className="dollarIcon" src="images/icon-dollar.svg" alt="Dollar" />
        <input onChange={handleChange} value={state.bill} name="bill" type="number" min="0" />
      </div>
    </>
  );
}
