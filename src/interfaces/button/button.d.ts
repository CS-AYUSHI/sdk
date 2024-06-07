interface PropsList {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

interface ButtonProps {
  label: string;
  props?: PropsList;
}

export { ButtonProps };
