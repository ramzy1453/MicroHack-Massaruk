import Router from "./routes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
