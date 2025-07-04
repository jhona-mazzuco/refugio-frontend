import Image from 'next/image';

export default function NotContent() {
  return (
    <section className={'flex justify-center items-center'}>
      <Image
        src={'/no-content.svg'}
        alt={'Conteúdo não encontrado'}
        width={400}
        height={400}
      />
    </section>
  );
}
