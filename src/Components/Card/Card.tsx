import styles from "./Card.module.css";

function Card(Props: any) {
  return (
    <>
      <div className={styles.card}>
        <img
          src={Props.img_src}
          alt={Props.img_alt}
          className={styles.podcast_image}
        ></img>
        <h2 className={styles.podcast_name}>{Props.name}</h2>
        <p className={styles.podcaster_names}>{Props.podcaster}</p>
        <hr />
        <p className={styles.episodes}>
          Episodes I listened: {Props.listened_episodes}/{Props.all_episodes}
        </p>
      </div>
    </>
  );
}

export default Card;
