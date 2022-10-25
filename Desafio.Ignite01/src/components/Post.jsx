import styles from './post.module.css'
import Task from '../components/Task'

function Post() {
  return(
    <section className={styles.post}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>3</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>2 de 10</span>
        </div>

         </header>

         <div className={styles.list}>
          <Task/>
          <Task/>
        </div>
    </section>
  )
}

export default Post