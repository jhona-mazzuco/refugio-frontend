interface IconProps {
  name: string;
}

export function Icon({ name }: IconProps) {
  return <span className={`material-symbols-rounded`}>{name}</span>;
}

export default Icon;
