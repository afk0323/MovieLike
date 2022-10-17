import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/**
 * router 사용법: url과 보여줄 페이지를 매칭하는 역할
 * router된 화면에서 다른 화면으로 route 하고 싶다. : Link - 새로고침 없이 다른 페이지 연결
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
