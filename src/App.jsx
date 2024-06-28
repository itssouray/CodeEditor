import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

import "./App.css";

function App() {
  const [editorLanguage, setEditorLanguage] = useState("javascript");

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-[1.4rem] font-bold text-white">
          Bringing Clarity and Color to Your Code
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4">
            <p className="text-lg font-bold">Choose you're language</p>
            <div>
              <fieldset className="flex gap-2">
               
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
        <CodeEditor language={editorLanguage}/>
      </div>
    </>
  );
}

export default App;
