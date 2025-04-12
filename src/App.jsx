import { Routes, Route, useLocation } from "react-router";
import {
  About,
  Contact,
  Footer,
  Header,
  ItemNews,
  ItemProduct,
  Main,
  News,
  Products,
} from "./pages";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

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
        <Route path="/news/item/:id" element={<ItemNews />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/item/:id" element={<ItemProduct />} />
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
