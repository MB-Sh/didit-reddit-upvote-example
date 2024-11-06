import { db } from "@/db";

export default async function ProfilePage({ params }) {
  const userId = params.userId;
  const { rows: [user] } = await db.query(
    "SELECT * FROM users WHERE id = $1",
    [userId]
  );
  const { rows: posts } = await db.query(
    "SELECT id, title FROM posts WHERE user_id = $1",
    [userId]
  );

  if (!user) return <p>User not found</p>;

  return (
    <div >
      <h1>{user.name}'s Profile</h1>
      <h2 >Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}><a href={`/post/${post.id}`}>{post.title}</a></li>
        ))}
      </ul>
    </div>
  );
}
