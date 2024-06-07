import React from 'react';
import styles from './text.module.scss';

export const Text: React.FC<TextProps> = ({
  tag = 'p',
  children,
  className,
  value,
  url,
  target,
  onNavigate,
  onClick,
  ...props
}) => {
  const handleTextClick = (event: React.MouseEvent<HTMLElement>) => {
    if (onNavigate && url) {
      event.preventDefault();
      onNavigate(url, target);
    }
    onClick && onClick(event);
  };

  const Element = tag;

  const textAsHtmlElement = (
    <Element
      className={`${styles.text} ${className}`}
      onClick={handleTextClick}
      data-url={url}
      {...(target ? { 'data-target': target } : {})}
      {...props}>
      {value ? value : children}
    </Element>
  );

  if (!url) {
    return textAsHtmlElement;
  }

  return (
    <a href={url} {...(target ? { target } : {})}>
      {textAsHtmlElement}
    </a>
  );
};