import React from "react";
import { getComponent } from "./registry";
import './registerComponents';

const App: React.FC = () => {
  const components = ["Header", "Button"];

  return (
    <div className="App">
      {components?.map((componentName) => {
        const componentData = getComponent(componentName);
        return componentData ? (
          <div className="button-container" key={componentName}>
            <componentData.component {...componentData.props} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default App;
