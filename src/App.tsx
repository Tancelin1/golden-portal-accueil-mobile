
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import GeolocationPage from "./pages/GeolocationPage";
import CitySelectionPage from "./pages/CitySelectionPage";
import NoPointsPage from "./pages/NoPointsPage";
import ARScenePage from "./pages/ARScenePage";
import InfoPointPage from "./pages/InfoPointPage";
import GuidancePage from "./pages/GuidancePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/geolocation" element={<GeolocationPage />} />
          <Route path="/city-selection" element={<CitySelectionPage />} />
          <Route path="/no-points" element={<NoPointsPage />} />
          <Route path="/ar-scene" element={<ARScenePage />} />
          <Route path="/info-point" element={<InfoPointPage />} />
          <Route path="/guidance" element={<GuidancePage />} />
          <Route path="/city-details/:cityName" element={<GuidancePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
