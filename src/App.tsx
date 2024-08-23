import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { LatestArticles } from "./Components/LatestArticles";

function App() {
  return (
    <div>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <LatestArticles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
