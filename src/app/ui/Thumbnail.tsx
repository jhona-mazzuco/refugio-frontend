interface ThumbnailProps {
  thumbnail: string;
  title: string;
  description: string;
}

export function Thumbnail({ thumbnail, title, description }: ThumbnailProps) {
  return (
    <div
      className={`w-full h-[260px] sm:h-[360px] bg-cover bg-center bg-no-repeat rounded-2xl`}
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <div className="backdrop-blur-sm h-full w-full bg-dark relative p-4 sm:p-10 rounded-2xl flex flex-col items-start justify-end text-shadow-md text-shadow-black">
        <h1 className="font-heading text-lg sm:text-4xl text-neutral-50 font-bold mb-4">
          {title}
        </h1>
        <p className="text-xs md:text-lg text-neutral-100 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
