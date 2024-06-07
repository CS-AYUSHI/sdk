import React from "react";
import { getComponent } from "./registry";
import { registeredComponents } from "./registerComponents";

const App: React.FC = () => {
  return (
    <div className="App">
      {registeredComponents?.map((componentName) => {
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
