import Button from "./components/button/button";
import Header from "./components/header/header";
import Heading from "./components/heading/heading";
import { Text } from "./components/text/text";
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

registerComponent("Text", Text, {
  tag: "p",
  url: "https://www.w3schools.com/css/default.asp",
  target: "_blank",
  value: "This is a link",
});

registerComponent("Heading", Heading, {
  text: "This is a heading",
  type: "h1",
});

export const registeredComponents = ["Header", "Button", "Text", "Heading"];
