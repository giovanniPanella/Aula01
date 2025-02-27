import { Avatar } from './Avatar'
import { Comentarios } from './Comentarios'
import styles from './Post.module.css'

import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'


export function Post(props) {
    const dateFormatada = format(props.publicacao,"d 'de' LLLL 'às' HH:mm'h'",{locale: ptBR})
    const dataPublicacaoRelativaComAgora = formatDistanceToNow(props.publicacao,{
        locale: ptBR,
        addSuffix: true
    })
 return(
    <>

        <article className={styles.post}>
            <header>
                <div className={styles.autor}>
                     <Avatar src={props.autor.avatarUrl} className={styles.avatar} />
                     <div className={styles.autorInfo}>
                            <strong>{props.autor.name}</strong>
                            <span>{props.autor.cargo}</span>
                     </div>
                </div>
                <time title={dateFormatada} dateTime={props.publicacao.toISOString()}>
                    {dataPublicacaoRelativaComAgora}
                </time>
            </header>
            <div className={styles.conteudo}>
                {props.conteudo.map(linha=>{
                    if(linha.type =='paragrafo'){
                        return <p>{linha.conteudo}</p>
                    }else if(linha.type == 'link'){
                        return <p><a href='#'>{linha.conteudo}</a></p>
                    }
                })}
            </div>
            <form className={styles.comentarioForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.ListaComentarios}>
                <Comentarios/>
                <Comentarios/>
                <Comentarios/>

            </div>
        </article>
        
          
    
    </>
 )
}