const buttons = [
  "Open Account",
  "Deposit 150",
  "Withdraw 50",
  "Request a loan of 5000",
  "Pay Loan",
  "Close Account",
];
function MainComponent({ dispatch, AccountBalance, isAccountOpen, Loan }) {
  return (
    <>
      <div className="MainDiv">
        <div>
          <h1>useReducer Bank Account</h1>
        </div>
        <div>
          <h4>Account Balance: {AccountBalance}</h4>
        </div>
        <div>
          <h4>Loan: {Loan}</h4>
        </div>
        {buttons.map((btn) => (
          <div key={btn}>
            <button
              className="buttondiv"
              onClick={() => dispatch({ type: btn })}
              disabled={btn !== "Open Account" && isAccountOpen}
            >
              {btn}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainComponent;
