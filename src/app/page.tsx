import HomeList from '@/components/HomeList';
import ReviewList from '@/components/ReviewList';
import ReleaseList from '@/components/ReleaseList';

export default async function Index() {
  return (
    <section className={'flex flex-col items-center justify-center'}>
      <div className={'grid sm:grid-cols-4 gap-8 px-1'}>
        <div className={'sm:col-span-3'}>
          <HomeList />
        </div>
        <aside className={`flex flex-col sm:grid-cols-1 gap-4`}>
          <ReviewList />
          <ReleaseList />
        </aside>
      </div>
    </section>
  );
}
