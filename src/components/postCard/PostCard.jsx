// 'use client'

import styles from "./PostCard.module.scss";
import Link from "next/link";
import Image from "next/image";

function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* {post.img && ( */}
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/19550510/pexels-photo-19550510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
              fill
              className={styles.img}
            />
          </div>
         {/* )} */}
        <span className={styles.date}>
          {/* {post.createdAt?.toString().slice(4, 16)} */}
          01.01.2024
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
