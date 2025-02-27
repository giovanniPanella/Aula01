import { Header } from './components/Header'
import { Post } from './components/Post'
import sytles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

const posts = [
    {
      id: 1,
      autor:{
         avatarUrl: 'https://github.com/giovanniPanella.png',
         name: 'Giovanni Gilles Panella',
         cargo: 'Desenvolvedor Full Stack'
      },
      conteudo:[
        {type: 'paragrafo',conteudo: 'Fala Galera,'},
        {type: 'paragrafo',conteudo: 'Hoje vamos abordar um Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {type: 'link',conteudo: 'gio.desing/fullStack'},
      ],
      publicacao: new Date('2025-02-03 20:00:00')
    },
    {
      id: 2,
      autor:{
         avatarUrl: 'https://scontent.fgpb3-1.fna.fbcdn.net/v/t39.30808-1/268336547_4641730392606756_6537603143481061395_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEdUsmnew1l4kLYEVPbPsnVgFeW9r-a2rqAV5b2v5raurkPVMad1TQW6iJvdt2SuRgGIuA9KWcjCa8zTu6FFHhd&_nc_ohc=t-YB5CX4r1MQ7kNvgGsHooC&_nc_oc=Adh8ZuXCKhRIhVay57H0JJSHki1IbH5foEPHGV-hfnTI_Ga-SpGeYx_s2BGeYHyRjsA&_nc_zt=24&_nc_ht=scontent.fgpb3-1.fna&_nc_gid=A696gF1gMhciMXNr4yqPOw3&oh=00_AYDzAOlovzX4Zn76kijcCgR7VOo_CFx2Rr4-z1cGjkdwug&oe=67C66686',
         name: 'Tatiane Vogler',
         cargo: 'Mae da Aline'
      },
      conteudo:[
        {type: 'paragrafo',conteudo: 'Olá Amiguinhos e Amiguinhas,'},
        {type: 'paragrafo',conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor unde praesentium ipsa odit quia quam, eligendi nihil quo vel quaerat ab deleniti eum exercitationem perferendis vero earum quis aperiam!'},
        {type: 'link',conteudo: 'tati./fullStack'},
      ],
      publicacao: new Date('2025-02-27 20:00:00')
    },

];
export function App() {
  return (
    <div>
      <Header />
      <div className={sytles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post=>{
            return(
              <Post
                autor={post.autor}
                conteudo={post.conteudo}
                publicacao={post.publicacao}

              />
            )
          })}
        
        </main>

      </div>


    </div>
  )
}
