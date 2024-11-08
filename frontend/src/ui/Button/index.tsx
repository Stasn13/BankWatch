import { forwardRef } from 'react';
import clsx from "clsx";

import { ButtonProps, buttonVariants } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        type="button"
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
