import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

import "./App.css";

function App() {
  const [editorLanguage, setEditorLanguage] = useState("javascript");

  return (
    <>
      <div className="flex flex-col gap-5 p-4 md:p-8">
        <h1 className="text-[1.4rem] font-bold text-white text-center">
          Bringing Clarity and Color to Your Code
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <p className="text-lg font-bold">Choose your language</p>
            <div>
              <fieldset className="flex gap-2 flex-wrap justify-center">
                <input
                  type="radio"
                  id="javascript"
                  name="language"
                  value="javascript"
                  checked={editorLanguage === "javascript"}
                  onChange={() => setEditorLanguage("javascript")}
                />
                <label htmlFor="javascript">JavaScript</label>
                <input
                  type="radio"
                  id="xml"
                  name="language"
                  value="markup"
                  checked={editorLanguage === "markup"}
                  onChange={() => setEditorLanguage("markup")}
                />
                <label htmlFor="xml">XML</label>
                <input
                  type="radio"
                  id="css"
                  name="language"
                  value="css"
                  checked={editorLanguage === "css"}
                  onChange={() => setEditorLanguage("css")}
                />
                <label htmlFor="css">CSS</label>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="w-full">
          <CodeEditor language={editorLanguage} />
        </div>
      </div>
    </>
  );
}

export default App;
