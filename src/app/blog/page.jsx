import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.scss";

function BlogPage() {
  return (
    <section className={styles.container}>
      <PostCard />
    </section>
  );
}

export default BlogPage;
