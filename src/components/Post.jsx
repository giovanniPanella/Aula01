import styles from './Post.module.css'
export function Post(props) {
 return(
    <>

        <article className={styles.post}>
            <header>
                <div className={styles.autor}>
                     <img src="https://avatars.githubusercontent.com/u/88341211?v=4" className={styles.avatar} />
                     <div className={styles.autorInfo}>
                            <strong>Giovanni Gilles Panella</strong>
                            <span>Desenvolvedor Full Stack</span>
                     </div>
                </div>
                <time title='26-fev-2025 as 14h' dateTime='2025-02-26 14:13:30'>Publicado a 1 hora</time>
            </header>
            <div className={styles.conteudo}>
                <p>Fala Galera 👋</p>
                <p>Acabei de Fazer este post para mostar como fazer a div de conteudo</p>
                <p>👉 {' '}
                    <a href="#">gio.desing/fullStack</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#"> #tag</a>{' '}
                </p>
            </div>
            <form className={styles.comentarioForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

        </article>
        
          
    
    </>
 )
}