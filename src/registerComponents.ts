import Button from "./components/button/button";
import Header from "./components/header/header";
import { registerComponent } from "./registry";

registerComponent("Button", Button, {
  label: "Click me!",
  props: {
    onClick: () => console.log("Button clicked"),
    disabled: false,
  },
});

registerComponent("Header", Header, {
  displayName: "App Header",
});
