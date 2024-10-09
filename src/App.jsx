import { useState } from "react";
import { NavBar } from "./Components/Navbar";
import { NewsBoard } from "./Components/Newsboard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
