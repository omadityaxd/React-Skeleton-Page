import Article from "./Components/Article";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <div className="content">
        <Article />
        <User />
      </div>
    </div>
  );
}

export default App;
