import { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
}

export default function Button({
  children,
  className,
  onClick,
  size = 'sm',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'font-heading bg-primary-400 rounded-full',
        className,
        {
          'text-sm px-3 py-1 font-semibold': size === 'sm',
          'text-md px-4 py-2 font-semibold': size === 'md',
          'text-lg px-5 py-3 font-bold': size === 'lg',
        },
      )}
    >
      {children}
    </button>
  );
}
