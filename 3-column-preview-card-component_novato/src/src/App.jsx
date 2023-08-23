import { useState } from "react";
import { Footer, MainContent, Popup } from "./components";

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal === true && (
        <Popup value={modal} setModal={(value) => setModal(value)} />
      )}

      <MainContent value={modal} setModal={(value) => setModal(value)} />
      <Footer />
    </>
  );
}
