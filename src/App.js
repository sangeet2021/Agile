import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form/Form";


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Form />
      </BrowserRouter>
      
    </>
  );
}

export default App;