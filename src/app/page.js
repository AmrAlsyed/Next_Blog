import CardList from '../components/CardList';
import CategoryList from '../components/CategoryList';
import Featured from '../components/Featured';
import Menu from '../components/Menu';

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="grid min-h-screen grid-cols-1 gap-24 lg:grid-cols-[1fr_350px]">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
