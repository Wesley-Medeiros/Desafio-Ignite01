import styles from './task.module.css'
import Trash from '../assets/trash.svg'



function Task({content, onDeleteTask}) {


  function handleDeleteTask() {
    

    onDeleteTask(content)
  }


  return(
    
    <div className={styles.task}>
      <button className={styles.check}>
        <div/>
      </button>

      <p>{content}</p>

      <button onClick={handleDeleteTask} className={styles.delete}>
        <img src={Trash} alt="" />
      
      </button>

    </div>
  )
}

export default Task