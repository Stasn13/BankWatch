import {
  ChangeEvent,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  start?: ReactNode;
  end?: ReactNode;
  label?: ReactNode | string;
  placeholder?: string;
  isErrors?: boolean;
  helperText?: string;
  type?: string;
  value?: string | number; // readonly string[] have to include in feature for type='file'
  className?: string;
  inputClassName?: string;
  inputWrapperClassName?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // TODO: Remove this code after @Ruslan approves
  error?: string;
}

export interface InputSearchProps extends InputProps {
  onClear: MouseEventHandler<HTMLButtonElement>;
}

export interface InputUploadedPictureProps extends InputProps {
  fileName?: string;
  maxSize?: number;
  maxNumberImg?: number;
}

export type InputArgs = {
  disabled: boolean;
  maxSize: number;
  maxNumberImg: number;
};
