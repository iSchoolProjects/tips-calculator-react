import React from 'react';

export default function Display(props) {
  const {state} = props;

  const total = !state.people ? Number(0).toFixed(2) : Number(((state.bill * state.tip) / 100 + state.bill) / state.people || 0).toFixed(2);

  const tips = !state.people ? Number(0).toFixed(2) : Number((state.bill * state.tip) / 100 / state.people || 0).toFixed(2);
  return (
    <>
      <div className="bill"></div>
      <div className="tipAmount">
        <div className="tipAmounts">
          <p className="p">Tip Amount</p>
          <h5>/ person</h5>
        </div>
        <p className="tips">{tips}</p>
      </div>
      <div className="amount">
        <div className="tipAmounts">
          <p className="p">Total</p>
          <h5>/ person</h5>
        </div>
        <p className="tips">{total}</p>
      </div>
    </>
  );
}
