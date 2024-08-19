import React from "react";
import { useWebComponent } from "../hooks/useWebComponent";
import { Subscription } from "./Subscription";

const MyComponentElement = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const props = {
    name: ref.current?.getAttribute("name") || "Hello World",
    count: parseInt(ref.current?.getAttribute("count") || "0", 10),
    decrease: () => alert("Button clicked!"),
  };

  useWebComponent(Subscription, ref.current, props);

  return <div ref={ref} />;
};

export default MyComponentElement;
