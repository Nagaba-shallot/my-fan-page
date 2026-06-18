import Image from "next/image";
import styles from "./card.module.css";
import LikeButton from "./LikeButton";
import Link from "next/link";

export default function Card({ id, name, blurb, rating, emoji, image }) {
  return (
    <article className={styles.card}>
      <Link href={"/faves/" + id}>
        {image ? (
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt={name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className={styles.emoji}>{emoji}</div>
        )}
        <h2>{name}</h2>
        <p>{blurb}</p>
        <p className={styles.stars}>{"★".repeat(rating)}</p>
      </Link>

      <LikeButton />
    </article>
  );
}
