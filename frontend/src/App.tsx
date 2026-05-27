import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/health")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center text-3xl font-bold">
      {message}
    </div>
  );
}

export default App;