import React from "react";

interface Registry {
  [key: string]: {
    component: React.FC<any>;
    props: Record<string, any>;
  };
}

const componentRegistry: Registry = {};

export const registerComponent = (
  name: string,
  component: React.FC<any>,
  props: Record<string, any> = {}
) => {
  componentRegistry[name] = { component, props };
};

export const getComponent = (
  name: string
): { component: React.FC<any>; props: Record<string, any> } | null => {
  return componentRegistry[name] || null;
};
