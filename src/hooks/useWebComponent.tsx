import { useEffect } from "react";
import ReactDOM from "react-dom/client";

// Custom hook to render React component inside a web component
export const useWebComponent = (Component, element, props) => {
  useEffect(() => {
    const mountPoint = document.createElement("div");
    element.appendChild(mountPoint);

    ReactDOM.createRoot(mountPoint).render(<Component {...props} />);

    return () => {
      ReactDOM.createRoot(mountPoint).unmount();
      element.removeChild(mountPoint);
    };
  }, [Component, element, props]);
};
