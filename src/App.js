import BlogPosts from "./components/BlogPosts";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [showAlert, setShowAlert] = useState(false);
  function ShowAlertHandler() {
    setShowAlert((isShowing) => !isShowing);
  }
  return (
    <>
      <button onClick={ShowAlertHandler}>
        {showAlert ? "ukryj" : "Wyświetl"} informacje
      </button>
      {showAlert && Alert}
    </>
  );
}

export default App;
