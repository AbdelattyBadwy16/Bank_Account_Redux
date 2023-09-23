import CreateCustomer from "./featuers/customers/CreateCustomer";
import Customer from "./featuers/customers/Customer";
import AccountOperations from "./featuers/accounts/AccountOperations";
import BalanceDisplay from "./featuers/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {
        name === "" ?
          <CreateCustomer />
          :
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
      }
    </div>
  );
}

export default App;
