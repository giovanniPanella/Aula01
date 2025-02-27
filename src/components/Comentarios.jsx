import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comentarios.module.css';
import { Avatar } from './Avatar';


export function Comentarios() {
  return (
    <div className={styles.comentarios}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/88341211?v=4" />

        <div className={styles.caixaComentario}>
            <div className={styles.Textocomentarios}>
                <header>
                    <div className={styles.usuarioEData}>
                        <h3>Nome do Usuário</h3>
                        <time title='26-fev-2025 as 14h' dateTime='2025-02-26 14:13:30'>Publicado a cerca de 1h Atrás</time>
                    </div>
                    <button title='Deletar comentario'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>Comentário</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp size={20} />
                    Like <span>20</span>
                </button>
            </footer>
        </div>

    </div>
  );
}