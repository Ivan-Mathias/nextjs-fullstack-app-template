import Image from 'next/image'
import styles from './CatCard.module.css'

export interface ICatCard {
  tag: string
  title: string
  body: string
  author: string
  time: string
}

export default function CatCard({ tag, title, body, author, time }: ICatCard) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="/time-cat.jpg"
            alt="card__image"
            className={styles.card__image}
            width="400"
            height="300"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
