import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ThemeSetuppreviewPage from "./pages/ThemeSetuppreviewPage";
import AdminPanelclientMasterclie from "./pages/AdminPanelclientMasterclie";
import { useEffect } from "react";
import AdminPanelclientMasteradd from "./pages/AdminPanelclientMasteradd";

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
        title = "";
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
    <Routes>
      <Route path="/" element={<ThemeSetuppreviewPage />} />
      <Route path="/admin" element={<AdminPanelclientMasterclie />} />
      <Route path="/client" element={<AdminPanelclientMasteradd />} />
    </Routes>
  );
}
export default App;
