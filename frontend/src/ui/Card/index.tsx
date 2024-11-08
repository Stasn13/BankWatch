import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { CardComponentProps } from './types';

import {
  CardHeaderProps,
  CardProps,
  cardVariants,
  CardWrapperProps,
} from './types';

export const CardWrapper = forwardRef<HTMLDivElement, CardWrapperProps>(
  ({ className, isHovered = false, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'rounded-lg bg-ring text-background shadow-sm transition delay-150 ease-in-out',
        isHovered && 'cursor-pointer p-[1px] hover:bg-hover-stroke',
        className,
      )}
      {...props}
    />
  ),
);
/**
 * @deprecated use just Card (card from atoms will be removed soon)
 */
export const CardInner = forwardRef<HTMLDivElement, CardProps>(
  ({ className, size, isBackground, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'h-full rounded-lg',
        cardVariants({ size, className }),
        isBackground && 'cursor-pointer hover:bg-banner-stroke',
      )}
      {...props}
    />
  ),
);

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'mb-4 flex flex-row items-center justify-between',
        className,
      )}
      {...props}
    />
  ),
);

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('pt-0', className)}
    {...props}
  />
));

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('flex items-center', className)}
    {...props}
  />
));

export const Card = forwardRef<HTMLDivElement, CardComponentProps>(
  (
    {
      onClick,
      onBlur,
      cardSize,
      isBackground,
      isHovered = false,
      bgImg,
      bgImgAlt,
      bgImgComponent,
      children,
      className,
      wrapperClassName,
      bgImgClassName,
    },
    ref,
  ) => {
    return (
      <CardWrapper
        className={clsx(
          'p-[1px]',
          {
            'group cursor-pointer': isHovered,
            relative: bgImgComponent || bgImg,
          },
          wrapperClassName,
        )}
        onClick={onClick}
        onBlur={onBlur}
        ref={ref}
        isHovered={isHovered}
      >
        {bgImg && !bgImgComponent && (
          <img
            src={bgImg}
            alt={bgImgAlt || 'image'}
            className={clsx(
              'absolute inset-0 h-full w-full object-cover',
              bgImgClassName,
            )}
          />
        )}
        {bgImgComponent && !bgImg && (
          <div className={clsx('absolute inset-0 h-full w-full', bgImgClassName)}>
            {bgImgComponent}
          </div>
        )}
        <CardInner
          size={cardSize}
          isBackground={isBackground}
          className={clsx(
            'rounded-lg',
            (bgImg || bgImgComponent) && 'relative bg-transparent',
            className,
          )}
        >
          {children}
        </CardInner>
      </CardWrapper>
    );
  },
);
