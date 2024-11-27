import { forwardRef, useId, useState } from 'react';

import {
  InputProps,
  InputSearchProps,
  InputUploadedPictureProps,
} from './types';
import clsx from 'clsx';
import { XIcon } from '../../assets/icons/X';
import { SearchLightIcon } from '../../assets/icons/SearchLight';

const InputField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      start,
      end,
      label,
      className,
      inputWrapperClassName,
      inputClassName,
      isErrors,
      error,
      helperText,
      id,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const generatedId = useId();
    const inputId = id || generatedId;
    return (
      <div className={clsx('relative', className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 block truncate"
          >
            {label}
          </label>
        )}
        <div
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(
            'relative flex h-10 w-full items-center rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-text disabled:opacity-50',
            focused && 'text-secondary-text outline outline-2 outline-offset-1',
            isErrors || error
              ? 'text-destructive outline outline-2 outline-offset-1'
              : '',
            inputWrapperClassName,
          )}
        >
          {start}
          <input
            ref={ref}
            className={clsx(
              'w-full !bg-transparent text-foreground focus:outline-none focus-visible:outline-none active:bg-transparent disabled:cursor-not-allowed',
              inputClassName,
            )}
            type={type}
            id={inputId}
            {...props}
          />
          {end}
          {isErrors && (<div>alert icon</div>)}
        </div>
        <div className="mt-1 text-sm">
          <span className={error ? 'text-destructive' : 'text-secondary-text'}>
            {error ? error : helperText}
          </span>
        </div>
      </div>
    );
  },
);

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ value, onClear, ...props }, ref) => {
    return (
      <InputField
        value={value}
        start={
          <SearchLightIcon
            className="mr-2 h-[18px] w-[18px] text-black"
          />
        }
        end={
          value ? (
            <XIcon
              className="ml-2 h-[18px] w-[18px] text-black"
              onClick={onClear as unknown as React.MouseEventHandler<SVGSVGElement>}
            />
          ) : null
        }
        ref={ref}
        {...props}
      />
    );
  },
);

const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputClassName, type, ...props }, ref) => {
    const [showPassword, _] = useState(false);
    return (
      <div className={clsx('relative', className)}>
        <InputField
          type={showPassword ? 'text' : type}
          inputClassName={clsx('hide-password-toggle pr-5', inputClassName)}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

export const Input = forwardRef<
  HTMLInputElement,
  InputProps | InputSearchProps | InputUploadedPictureProps
>(({ ...props }, ref) => {
  switch (props.type) {
    case 'search':
      return (
        <InputSearch
          {...(props as InputSearchProps)}
          ref={ref}
        />
      );
    case 'password':
      return (
        <InputPassword
          {...props}
          ref={ref}
        />
      );
    default:
      return (
        <InputField
          {...props}
          ref={ref}
        />
      );
  }
});

InputField.displayName = 'InputField';
InputSearch.displayName = 'InputSearch';
InputPassword.displayName = 'InputPassword';
Input.displayName = 'Input';
