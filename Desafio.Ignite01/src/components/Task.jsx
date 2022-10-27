import styles from './task.module.css'
import Trash from '../assets/trash.svg'



function Task() {
  return(
    <div className={styles.task}>
      <button className={styles.check}>
        <div/>
      </button>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ad? Ducimus, vel.</p>

      <button className={styles.delete}>
        <img src={Trash} alt="" />
      
      </button>

    </div>
  )
}

export default Task