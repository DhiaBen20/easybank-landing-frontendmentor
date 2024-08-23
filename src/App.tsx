import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <div>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
      </main>
    </div>
  );
}

export default App;
