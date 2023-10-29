import Hero from "./components/Hero";
import Companies from "./components/Companies";
import EarlyLife from "./components/EarlyLife";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Hero />
        <EarlyLife />
        <Companies />
        <Awards />
      </main>
      <Footer />
    </>
  );
}

export default App;
