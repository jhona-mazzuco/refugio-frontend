import Image from 'next/image';

export default function Index() {
  const now = new Date();
  return (
    <section className={ 'flex flex-col h-80 items-center justify-center' }>
      <Image src={ '/work-in-progress.webp' } alt={ 'Site em construção...' } width={ 300 } height={ 240 } />
      <p className={'text-white'}>
        { now.toISOString() }
      </p>
    </section>
  );
}
