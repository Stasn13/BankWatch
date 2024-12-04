import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

export const cardVariants = cva('bg-background', {
  variants: {
    size: {
      default: 'p-4 md:p-6',
      md: 'p-4',
      sm: 'p-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface CardComponentProps {
  onClick?: () => void;
  onBlur?: () => void;
  size?: 'default' | 's' | 'm' | 'lg' | 'xl' | 'xxl';
  cardSize?: 'md' | 'default' | 'sm';
  isBackground?: boolean;
  isHovered?: boolean;
  children?: ReactNode;
  bgImg?: string;
  bgImgAlt?: string;
  bgImgComponent?: ReactNode; // The single prop for any image component
  // classes
  className?: string;
  wrapperClassName?: string;
  bgImgClassName?: string;
}


export interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {
  isHovered?: boolean;
}

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  isBackground?: boolean;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  isCol?: boolean;
}
