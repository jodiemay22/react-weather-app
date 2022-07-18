import "./App.css";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="Weather-app">
          <Weather defaultCity="London" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
