"use client";

import { useState } from "react";
import styles from './likebutton.module.css';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button 
      onClick={() => setLiked(!liked)}
      className={`${styles.likeBtn} ${liked ? styles.liked : ""}`}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}