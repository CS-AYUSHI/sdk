import { HeadingProps } from "../../interfaces/heading/heading";

const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  text,
  type = 'h1',
  ...props
}) => {
  const HeadingTag = type;
  return (
    <HeadingTag className={className} {...props}>
      {text ?? children}
    </HeadingTag>
  );
};

export default Heading;