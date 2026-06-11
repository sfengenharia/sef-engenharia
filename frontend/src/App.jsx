import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { Servicos } from "./pages/Servicos";
import { ProjetoArquitetonico } from "./pages/ProjetoArquitetonico";
import { ProjetoHidrossanitario } from "./pages/ProjetoHidrossanitario";
import { ProjetoEletrico } from "./pages/ProjetoEletrico";
import { ProjetoCombateIncendio } from "./pages/ProjetoCombateIncendio";
import { ProjetoInfraestrutura } from "./pages/ProjetoInfraestrutura";
import { ProjetoEstruturaMetalica } from "./pages/ProjetoEstruturaMetalica";
import { ProjetoEstruturalConcreto } from "./pages/ProjetoEstruturalConcreto";
import { ProjetoBIM } from "./pages/ProjetoBIM";
import { ProjetoEnsaios } from "./pages/ProjetoEnsaios";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { PoliticaPrivacidade } from "./pages/PoliticaPrivacidade";
import { TermosUso } from "./pages/TermosUso";
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
        <Route path="servicos" element={<Servicos />} />
        <Route path="servicos/projeto-arquitetonico" element={<ProjetoArquitetonico />} />
        <Route path="servicos/projeto-hidrossanitario" element={<ProjetoHidrossanitario />} />
        <Route path="servicos/projeto-eletrico" element={<ProjetoEletrico />} />
        <Route path="servicos/projeto-combate-incendio" element={<ProjetoCombateIncendio />} />
        <Route path="servicos/projeto-infraestrutura" element={<ProjetoInfraestrutura />} />
        <Route path="servicos/projeto-estrutura-metalica" element={<ProjetoEstruturaMetalica />} />
        <Route path="servicos/projeto-estrutural-concreto" element={<ProjetoEstruturalConcreto />} />
        <Route path="servicos/bim" element={<ProjetoBIM />} />
        <Route path="servicos/ensaios-nao-destrutivos" element={<ProjetoEnsaios />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="termos-de-uso" element={<TermosUso />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}
