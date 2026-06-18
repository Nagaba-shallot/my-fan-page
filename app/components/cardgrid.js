import styles from "./cardgrid.module.css";
import Card from "./card";

export default function CardGrid({items}){
    return(
        <div className={styles.grid}>
            {items.map((item) => (
                <Card 
                    key={item.id}
                    id={item.id} 
                    name={item.name} 
                    blurb={item.blurb} 
                    rating={item.rating} 
                    emoji={item.emoji} 
                    image={item.image} 
                />
            ))}
        </div>
    );
}
