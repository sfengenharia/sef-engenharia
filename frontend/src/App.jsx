import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { ComponentLibrary } from "./pages/ComponentLibrary";

export default function App() {
  return (
    <Routes>
      {/* Rota isolada para a biblioteca (sem Navbar/Footer globais) */}
      <Route path="/library" element={<ComponentLibrary />} />

      {/* Rotas principais da aplicação (com Navbar e Footer) */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="sobre-nos" element={<Sobre />} />
      </Route>
    </Routes>
  );
}
