import styles from './header.module.css'
import Rocket from '../assets/rocket.svg'
import TODO from '../assets/todo.svg'
import plus from '../assets/plus.svg'

function Header() {
  return (
    <div>
      <header className={styles.header}>
      <img src={Rocket} alt="Foguete" />

      <span className={styles.span}>
        <img src={TODO} alt="Logotipo TOdo" />
        </span>

      <form className={styles.form}>
        <input placeholder='Adicione um uma tarefa' />

        <button type='submit'>
          Criar
          <img src={plus} alt="sinal de +" />
          </button>
      </form>


      </header>
    </div>
  )
}

export default Header 

