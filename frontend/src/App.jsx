import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ToolDetailPage from "./pages/ToolDetailPage";
import HomePage from "./pages/HomePage";
import ToolsPage from "./pages/ToolsPage";
import GuidePage from "./pages/GuidePage";
import ContactPage from "./pages/ContactPage";
import SiteMapPage from "./pages/SiteMapPage";
import FeaturesPage from "./pages/FeaturesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/:id" element={<ToolDetailPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="sitemap" element={<SiteMapPage />} />
          <Route path="features" element={<FeaturesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
