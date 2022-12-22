import { GlobalStyles } from "./styles/Global";
import { RoutesMain } from "./routes";
import { CardProvider } from "./context/CardContext";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <UserProvider>
        <CardProvider>
          <RoutesMain />
        </CardProvider>
      </UserProvider>
    </>
  );
}

export default App;
