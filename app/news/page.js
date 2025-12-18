//Hybrid Page ISR
export const revalidate = 60;

export default async function News() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  const news = await res.json();

  return (
    <div>
      <h1>Breaking News</h1>
      {news.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
