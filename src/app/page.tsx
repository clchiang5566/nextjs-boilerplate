import Todo from '@/components/Todo';
import { getHomePage } from '@/lib/api/homePage';

export default async function Page() {
  const homePageData = await getHomePage();

  return (
    <main className='main-content' id='main-content'>
      <Todo />
      <section style={{ marginTop: 24 }}>
        <h2>Home data</h2>
        <ul>
          {homePageData.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <div>{item.body}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}