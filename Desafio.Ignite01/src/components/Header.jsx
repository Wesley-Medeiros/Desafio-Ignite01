import styles from './header.module.css'
import Rocket from '../assets/rocket.svg'
import TODO from '../assets/todo.svg'
import plus from '../assets/plus.svg'
import Task from '../components/Task'
import  Clipboard  from '../assets/Clipboard.svg'
import { useState } from 'react'





function Header() {

  const [task, setTask] = useState([ 
    
    

  ])

  const taskQuantity = task.length
  
  



  const [newTask, setNewTask] = useState("")


  function handleCreateNewTask() {
    event.preventDefault()  
  
    setTask([...task, newTask])
    setNewTask('');

    
  }

  function handleNewTaskChange() {
    setNewTask(event.target.value)
  }

  function deleteTask(taskToDelete) {
    const taskWithoutDeleteOne = task.filter(task => {
      return task !== taskToDelete;


    })

    setTask(taskWithoutDeleteOne);

  }

  



  return (
    <div>
      
      <header className={styles.header}>
      <img src={Rocket} alt="Foguete" />

      <span className={styles.span}>
        <img src={TODO} alt="Logotipo TOdo" />
        </span>

      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input 
        name='typeTask' 
        placeholder='Adicione um uma tarefa'
        value={newTask}
        onChange={handleNewTaskChange}
        autoComplete='off'
         />

        <button type='submit'>
          Criar
          <img src={plus} alt="sinal de +" />
          </button>
      </form>

      </header>


      <div className={styles.task}>
      <section className={styles.post}>
      <header className={styles.header1}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>0 de {taskQuantity}</span>
        </div>

         </header>

         <div className={styles.todolistoff}>
          <img src={Clipboard}  />
          <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
          <p className={styles.p2}>Crie tarefas e organize seus itens a fazer</p>
        </div>

         <div className={styles.list}>
          {task.map(task => {
            return (<Task 
              key={task} 
              content={task} 
              onDeleteTask={deleteTask}
              />)
          })}
          
          
        </div>
    </section>
      </div>

      
    </div>
  )
}

export default Header 

