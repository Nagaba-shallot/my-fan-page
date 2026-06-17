import styles from "./cardgrid.module.css";
import Card from "./card";
import Link from "next/link";

export default function CardGrid({items}){
    return(
        <div className={styles.grid}>
            {items.map((item) => (
                <Link href={"/faves/" + item.id} key={item.id}>
                    <Card name={item.name} blurb={item.blurb} rating={item.rating} emoji={item.emoji} />
                </Link>
                
            ))}
        </div>
    );
}