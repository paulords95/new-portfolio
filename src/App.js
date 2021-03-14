import "./App.css";

import Home from "./pages/home/Home";
import StackPage from "./pages/stack/Stack";
import ProjectsPage from "./pages/projects/ProjectsPage";
import InfoPage from "./pages/InfoPage/InfoPage";

function App() {
  return (
    <div className="App">
      <Home />
      <StackPage />
      <ProjectsPage />
      <InfoPage />
    </div>
  );
}

export default App;
