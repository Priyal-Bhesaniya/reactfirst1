import { useState } from "react";

function SetExample3() {
  const [color, setColor] = useState("green");
  const [fontStyle, setFontStyle] = useState("normal");
  const [textDecoration, setTextDecoration] = useState("none");
  const [fontWeight, setFontWeight] = useState("normal"); // State for bold style

  return (
    <div>
    
      <input type="radio" name="color" onChange={() => setColor("yellow")} /> Yellow
      <input type="radio" name="color" onChange={() => setColor("blue")} /> Blue
      <input type="radio" name="color" onChange={() => setColor("red")} /> Red
      <br />

     
      <input
        type="checkbox"
        onChange={(e) => setFontStyle(e.target.checked ? "italic" : "normal")}
      />{" "}
      Italic
      <input
        type="checkbox"
        onChange={(e) => setTextDecoration(e.target.checked ? "underline" : "none")}
      />{" "}
      Underline  
      <input
        type="checkbox"
        onChange={(e) => setFontWeight(e.target.checked ? "bold" : "normal")}
      />{" "}
      Bold

      
      <p
        style={{
          color: color,
          fontStyle: fontStyle,
          textDecoration: textDecoration,
          fontWeight: fontWeight,
        }}
      >
        My name is Priyal
      </p>
    </div>
  );
}

export default SetExample3;
