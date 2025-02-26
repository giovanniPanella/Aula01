import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3" />
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/88341211?v=4" className={styles.avatar} />
        <strong>Giovanni Gilles Panella</strong>
        <span>Desenvolvedor Full Stack</span>
        <footer>
            <a href="#">
            <PencilLine size={20}/>
              Editar Seu Perfil</a>
        </footer>

      </div>
    </aside>
  )
}