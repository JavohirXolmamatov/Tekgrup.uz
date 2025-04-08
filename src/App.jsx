import { Routes, Route, useLocation } from "react-router";
import { About, Contact, Footer, Header, Main, News, Products } from "./pages";

function App() {
  const location = useLocation();

  switch (location.pathname) {
    case "/":
      document.title = "TEKGRUP";
      break;
    case "/news":
      document.title = "News - TEKGRUP";
      break;
    case "/product":
      document.title = "Product - TEKGRUP";
      break;
    case "/about":
      document.title = "About - TEKGRUP";
      break;
    case "/contact":
      document.title = "Contact - TEKGRUP";
      break;
    default:
      document.title = "TEKGRUP";
      break;
  }
  return (
    <div>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/product" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
