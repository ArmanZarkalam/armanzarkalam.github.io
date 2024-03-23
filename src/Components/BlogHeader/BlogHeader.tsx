import styles from "./BlogHeader.module.css";

function BlogHeader() {
  return (
    <>
      <div className={styles.the_header}>
        <div>
          <h1 className={styles.BlogName}>Arman's World</h1>
          <h3 className={styles.description}>
            Here I blog about my observable world...
          </h3>
        </div>
        <hr className={styles.hr} />
      </div>
    </>
  );
}

export default BlogHeader;
