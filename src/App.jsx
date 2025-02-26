import { Header } from './components/Header'
import { Post } from './components/Post'
import sytles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={sytles.wrapper}>
        <Sidebar/>
        <main>
          <Post autor="Giovanni Gilles Panella"conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
          <Post autor="Aline Vogler Panella"conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
        </main>

      </div>


    </div>
  )
}
