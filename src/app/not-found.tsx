import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import Button from '@/app/ui/Button';

function UnoptimizedImage(props: ImageProps) {
  return <Image {...props} unoptimized />;
}

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 h-[600px]">
      <UnoptimizedImage
        src={'/404.gif'}
        width={240}
        height={160}
        alt={'Animação de página não encontrada'}
      />
      <p className="font-bold font-title text-lg mb-4 text-neutral-700 text-center">
        Página não encontrada!
      </p>

      <Button size={'md'}>
        <Link href="/">Clique aqui para voltar ao ínicio</Link>
      </Button>
    </section>
  );
}
