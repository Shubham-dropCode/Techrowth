import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NewHomepage from "./pages/NewHomepage";
import DigitalMarketing from "./pages/DigitalMarketing";
import GraphicDesign from "./pages/GraphicDesign";
import SocialMediaServices from "./pages/SocialMediaServices";
import Ecommerce from "./pages/Ecommerce";
import Header from "./components/Header";
import Footer from "./components/Footer1";
import Resource from "./pages/Resource";
import Blog from "./pages/Blog";

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import IntentPrototype from "./pages/IntentPrototype";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Techrowth";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NewHomepage />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/SocialMediaServices" element={<SocialMediaServices />} />
        <Route path="/IntentPrototype" element={<IntentPrototype />} />
        <Route path="/Resource" element={<Resource />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
