import { clsx } from 'clsx';

import { titleVariants, TypographyProps } from './types';

export function Typography({
  size,
  variant,
  color = 'default',
  tag = 'h6',
  component,
  disableHashtagsHighlighting = false,
  className,
  children,
  ...rest
}: TypographyProps) {
  const TitleComponent = tag || component || 'h6';

  return (
    <TitleComponent
      className={clsx(titleVariants({ size: size || variant, color, className }))}
      {...rest}
    >
      {children}
    </TitleComponent>
  );
}
