import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import('./pages/Home'));
const Editor = lazy(() => import('./pages/editor/Index'));
const Header = lazy(() => import('./pages/Header'));
const Footer = lazy(() => import('./pages/Footer'));

const App: React.FC = () => {
  
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Editor />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
};

export default App;

