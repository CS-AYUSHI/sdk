interface TextProps {
  tag?: "p" | "span" | "div" | "label" | "caption" | "small" | "strong" | "em";
  url?: string;
  target?: string;
  onNavigate?: (url: string, target?: string) => void;
  value?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
