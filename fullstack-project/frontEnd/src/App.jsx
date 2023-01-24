import { Flex } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CarsProvider } from "./providers";
import AllRoutes from "./routes";

function App() {
  return (
    <Flex flexDirection="column" fontFamily={"Inter"}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        limit={1}
        pauseOnHover
        theme="light"
      />
      <CarsProvider>
        <AllRoutes />
      </CarsProvider>
    </Flex>
  );
}

export default App;
