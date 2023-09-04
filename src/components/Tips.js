import React from 'react';

export default function Tips({handleChange, state}) {
  const tipsButtons = [5, 10, 15, 25, 50];
  return (
    <>
      <h5>Select Tip %</h5>
      <div className="tip">
        {tipsButtons.map((tip) => (
          <>
            <input key={`inp-${tip}`} onChange={handleChange} id={tip} type="radio" value={tip} name="tip" checked={state.tip === tip} />
            <label key={`label-${tip}`} className="dark" htmlFor={tip}>
              {tip}%
            </label>
          </>
        ))}
        <input
          onChange={handleChange}
          className="custom"
          name="tip"
          type="number"
          placeholder="Custom"
          min="0"
          value={!tipsButtons.includes(state.tip) ? state.tip : undefined}
        />
      </div>
    </>
  );
}
