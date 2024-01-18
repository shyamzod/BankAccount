import { useReducer } from "react";
import MainComponent from "./components/MainComponent";
const initialstate = { AccountBalance: 0, Loan: 0, isAccountOpen: true };
function reducer(state, action) {
  debugger;
  switch (action.type) {
    case "Open Account": {
      return { AccountBalance: 500, Loan: 0, isAccountOpen: false };
    }
    case "Deposit 150": {
      return {
        ...state,
        AccountBalance: state.AccountBalance + 150,
      };
    }
    case "Withdraw 50": {
      return {
        ...state,
        AccountBalance: state.AccountBalance - 50,
      };
    }
    case "Request a loan of 5000": {
      return {
        ...state,
        Loan: state.Loan + 5000,
      };
    }
    case "Pay Loan": {
      return {
        ...state,
        Loan: 0,
      };
    }
    case "Close Account": {
      return {
        ...state,
        ...initialstate,
      };
    }
    default: {
      return {};
    }
  }
}

function App() {
  const [{ AccountBalance, Loan, isAccountOpen }, dispatch] = useReducer(
    reducer,
    initialstate
  );
  return (
    <>
      <MainComponent
        AccountBalance={AccountBalance}
        dispatch={dispatch}
        isAccountOpen={isAccountOpen}
        Loan={Loan}
      />
    </>
  );
}

export default App;
