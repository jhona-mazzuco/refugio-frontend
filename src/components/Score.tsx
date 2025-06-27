import { ScoreSize } from "@/models/ScoreSize";
import cn from 'classnames';


interface ScoreProps {
  score: number;
  size: ScoreSize;
}

export default function Score({ score, size = ScoreSize.larger }: ScoreProps) {
  const sizeClasses = {
    [ScoreSize.small]: 'w-[36px] h-[36px] text-lg',
    [ScoreSize.medium]: 'w-[54px] h-[54px] text-2xl',
    [ScoreSize.larger]: 'w-[76px] h-[76px] text-3xl',
  };

  const backgroundClass = cn({
    'bg-success-400': score >= 7,
    'bg-warning-400': score < 7 && score > 4,
    'bg-error-400': score <= 4,
  });

  return (
    <div
      className={ `flex justify-center items-center font-bold rounded-lg ${ sizeClasses[size] } ${ backgroundClass }` }>
      { score }
    </div>
  )
}
