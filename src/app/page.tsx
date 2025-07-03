import HomeList from '@/app/ui/HomeList';
import ReviewList from '@/app/ui/ReviewList';
import ReleaseList from '@/app/ui/ReleaseList';

interface HomePageIndex {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function Index({ searchParams }: HomePageIndex) {
  const page = (await searchParams).page;

  return (
    <section className={'flex flex-col items-center justify-center'}>
      <div className={'grid sm:grid-cols-4 gap-8 px-1'}>
        <div className={'sm:col-span-3'}>
          <HomeList page={page ? Number.parseInt(page) : undefined} />
        </div>
        {!page && (
          <aside className={`flex flex-col sm:grid-cols-1 gap-4`}>
            <ReviewList />
            <ReleaseList />
          </aside>
        )}
      </div>
    </section>
  );
}
