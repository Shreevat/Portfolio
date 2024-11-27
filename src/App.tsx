// src/App.tsx
import ScrollToTop from "./components/UI/ScrollToTop";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="bg-background">
      <Home />
      <ScrollToTop />
    </div>
  );
}

export default App;
