import { use, useState } from 'react'
import { Avatar } from './Avatar'
import { Comentarios } from './Comentarios'
import styles from './Post.module.css'

import {format, formatDistanceToNow, set} from 'date-fns'
import { ptBR, se } from 'date-fns/locale'



export function Post(props) {
    const [comentarios, setComentarios] = useState([
 'Post Bacana'
    ])

    const dateFormatada = format(props.publicacao,"d 'de' LLLL 'às' HH:mm'h'",{locale: ptBR})
    const dataPublicacaoRelativaComAgora = formatDistanceToNow(props.publicacao,{
        locale: ptBR,
        addSuffix: true
    })

   function handleNovoComentarioInserido(){
        setNovoComentario(event.target.value)
   }

    const [novoComentario, setNovoComentario] = useState('')
    
    const handleCreateNewComment = () => {
        event.preventDefault()
       setComentarios([...comentarios,novoComentario])
       setNovoComentario('')
     
    }
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
                        return <p key={linha.conteudo}>{linha.conteudo}</p>
                    }else if(linha.type == 'link'){
                        return <p key={linha.conteudo}><a href='#'>{linha.conteudo}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.comentarioForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    onChange={handleNovoComentarioInserido}
                    name='comentario' 
                    value={novoComentario}
                    placeholder='Deixe um comentário'
                ></textarea>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.ListaComentarios}>
                {comentarios.map(comentarios =>{
                    return( <Comentarios key={comentarios} content={comentarios}
                   
                    
                    />)

            })}


            </div>
        </article>
        
          
    
    </>
 )
}