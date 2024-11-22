import { forwardRef } from 'react';
import clsx from "clsx";

import { ButtonProps, buttonVariants } from './types';
import { WheelIcon } from '../../assets/icons/Wheel';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, ...props }, ref) => {
    return (
      <button
        type="button"
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? <WheelIcon className="animate-spin-loader" /> : props.children}
      </button>
    );
  },
);
