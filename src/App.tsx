import { Suspense } from "react";
import { MsalProvider } from "@azure/msal-react";
import { pca } from "@configs/msal.config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationRoutes } from "@routes/index";
import { MainLayout } from "@layouts/index";

function App() {
  return (
    <MsalProvider instance={pca}>
      <MainLayout>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {NavigationRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Suspense>
        </Router>
      </MainLayout>
    </MsalProvider>
  );
}

export default App;
