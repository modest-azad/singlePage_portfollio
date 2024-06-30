import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";

export default function Path() {
  return (
    <Routes>
      {/* default home page  */}
      <Route path="/" element={<Layout />} />

    </Routes>
  );
}
