
import Card from "./Card";
import Header from "./Header";
import "./index.css"; 

import data from "./data";

function App() {
  return (
    <div>
      <Header />
      {data.map((destination, index) => (
        <Card key={index} {...destination} />
      ))}
    </div>
  );
}

export default App;
