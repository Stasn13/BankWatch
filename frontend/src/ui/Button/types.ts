import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex flex-row items-center justify-center gap-2 rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-[0.57] transition-[.2s]',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
        secondary:
          'bg-primary text-primary-text hover:bg-primary-hover active:bg-primary-active',
        tertiary:
          'bg-secondary hover:bg-secondary-hover active:bg-secondary-focus',
        outline:
          'border border-primary hover:bg-primary active:bg-primary',
        ghost: 'hover:bg-ghost active:bg-secondary',
        link: 'text-ui-accent-500 underline-offset-4 hover:text-ui-accent-600 active:text-ui-accent-500',
        destructive:
          'bg-destructive text-destructive-text hover:bg-destructive-hover active:bg-destructive-active',
        'outline-primary':
          'border border-ui-accent-500 bg-background hover:bg-gd-dark-xs hover:text-foreground active:bg-ui-accent-500',
      },
      size: {
        default: 'h-10 px-8 py-2.5',
        dynamic: 'h-auto p-0',
        sm: 'h-10 rounded-md px-4',
        lg: 'h-11 rounded-md px-8',
        // TODO: remove it, when replace in components  with IconButton
        clear: 'px-2 py-0',
        'icon-xxs': 'h-4 w-4 rounded-full',
        'icon-xs': 'h-6 w-6 rounded-full',
        'icon-s': 'h-9 w-9 rounded-full',
        'icon-m': 'h-10 w-10 rounded-full',
        'icon-lg': 'h-11 w-11 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {isLoading?: boolean}
