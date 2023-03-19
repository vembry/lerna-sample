import { ComponentA } from "web-component";

import Component from "./Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>this is web-a</p>
        <Component />
        <ComponentA />
      </header>
    </div>
  );
}

export default App;
