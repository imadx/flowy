import { Stage } from "./components/diagram/stage";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-mono">Flowy</h1>
      <p>
        Flowy is a JavaScript library that allows you to create a flowchart with
        ease.
      </p>
      <Stage />
    </div>
  );
}

export default App;
