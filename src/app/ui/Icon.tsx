'use client'

interface IconProps {
  name: string;
}

export default function Icon({ name }: IconProps) {
  return <span className={ `material-symbols-rounded` }>{ name }</span>;
}
