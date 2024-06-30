import './App.css'
import {routerConfig} from "./routes/navigation.ts";
import {Navigate, Route, Routes} from "react-router-dom";
import {useRoutes} from "./routes/useRoutes.tsx";
import {Layout} from "./layout/layout.tsx";

export function App() {
  const routes = useRoutes(routerConfig);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App
