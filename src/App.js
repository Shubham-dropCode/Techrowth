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
// import resourcePage24 from "./pages/BlogPage";

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import IntentPrototype from "./pages/IntentPrototype";
import Content from "./pages/Content";
import DevelopmentPage from "./pages/DevelopmentPage";
import UiUxInterface from "./pages/UiUxInterface";
import IntegrationPage from "./pages/IntegrationPage";
import WhoWeAre from "./pages/WhoWeAre";
import ITMain from "./pages/ITMain"
import QualityTestingPage from "./pages/QualityTestingPage"
import ITManagement from "./pages/ITManagement";
import ResourcePage24 from "./pages/Resource";

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
        {/* <Route path="/Resource" element={<Resource />} /> */}
        <Route path="/Resource" element={<Resource />} />
        <Route path="/Content" element={<Content/>} />
        <Route path="/DevelopmentPage" element={<DevelopmentPage/>} />
        <Route path="/IntegrationPage" element={<IntegrationPage/>} />
        <Route path="/ITMain" element={<ITMain/>} />
        <Route path="/QualityTestingPage" element={<QualityTestingPage/>} />
        <Route path="/UiUxInterface" element={<UiUxInterface/>} />
        <Route path="/WhoWeAre" element={<WhoWeAre/>} />
        <Route path="/ITManagement" element={<ITManagement/>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
