// "use client";

import PostUser from "@/components/postUser/PostUser";
import styles from "./singlePost.module.scss";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

async function SinglePostPage({ params }) {
  const { slug } = params;

  const post = await getPost(slug); //function of fetching data json placeholder

  return (
    <div className={styles.container}>
      {/* {post.img && ( */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19550510/pexels-photo-19550510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          // src={post.img}
          alt=""
          fill
          className={styles.img}
        />
      </div>

      {/* )} */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<h2>🌀 Loading...</h2>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}
              32452
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
