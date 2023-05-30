import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Controlled = lazy(() => import("../pages/Controlled"));
const Uncontrolled = lazy(() => import("../pages/Uncontrolled"));

export default function App(): JSX.Element {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Controlled" element={<Controlled />} />
        <Route path="/Uncontrolled" element={<Uncontrolled />} />
      </Routes>
    </Suspense>
  );
}
