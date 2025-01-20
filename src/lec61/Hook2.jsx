import { useState } from "react";
function HookExmp2() {
    const [name] = useState("Priyal");
    return <div> {name}</div>
};

export default HookExmp2;