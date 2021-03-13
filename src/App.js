import "./App.css";

import Home from "./pages/home/Home";
import StackPage from "./pages/stack/Stack";
import ProjectsPage from "./pages/projects/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Home />
      <StackPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
