import styles from './task.module.css'

function Task() {
  return(
    <div className={styles.task}>
      <button>
        check
      </button>

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

      <button>apagar</button>

    </div>
  )
}

export default Task