import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.scss";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API:

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 }, // every hour will refresh data
//     // cache: "no-store", //not will store the cache
//     // without adding this object - it will be default (cache-forced)
//   });

//   if (!res.ok) throw new Error("Failed to fetch data");

//   return res.json();
// }

async function BlogPage() {
  // const posts = await getData();
  const posts = await getPosts();

  if (!posts) return "Loading...";

  return (
    <section className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </section>
  );
}

export default BlogPage;
