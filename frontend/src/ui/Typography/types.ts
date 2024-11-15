import { HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

export const titleVariants = cva('text-base font-semibold text-primary-text', {
  variants: {
    size: {
      heading1: 'text-5xl' /* 48px */,
      heading2: 'text-3xl' /* 30px */,
      heading3: 'text-2xl' /* 24px */,
      heading4: 'text-xl' /* 20px */,
      heading5: 'text-lg' /* 18px */,
      body1: 'text-base' /* 16px */,
      body2: 'text-sm' /* 14px */,
      body3: 'text-xs' /* 12px */,
      body4: 'text-3xs' /* 10px */,
    },
    color: {
      default: 'text-primary-text',
      secondary: 'text-secondary-text',
      tertiary: 'text-tertiary',
      invert: 'text-invert',
      gradient: 'bg-unicorn-gradient bg-clip-text text-transparent',
      accent: 'text-ui-accent-500',
    },
  },
  defaultVariants: {
    size: 'body1',
    color: 'default',
  },
});

// Defines a type for the possible variants of the Typography component,
// representing different text styles such as headings and body text.
export type TypographyVariantType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';

// Defines a type for the possible color schemes that the Typography component can use.
export type TypographyColorsType =
  | 'default'
  | 'secondary'
  | 'tertiary'
  | 'gradient'
  | 'invert'
  | 'accent';

// Defines a type for the possible HTML elements that the Typography component can render as.
export type TypographyComponentType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
  | 'legend';
// Defines the props interface for the Typography component, extending the standard HTML heading element attributes.
// - `variant`: Optional prop specifying the style variant of the typography.
// - `color`: Optional prop specifying the color scheme of the typography.
// - `component`: Optional prop specifying the underlying HTML element to render.
export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @deprecated
   */
  variant?: TypographyVariantType;

  /**
   * @deprecated
   */
  component?: TypographyComponentType;

  size?: TypographyVariantType;
  color?: TypographyColorsType;
  tag?: TypographyComponentType;
  disableHashtagsHighlighting?: boolean;
}
