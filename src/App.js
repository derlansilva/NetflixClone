import React , {useEffect , useState} from 'react'
import tmdb from './tmdb'

import './App.css'
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/featureMovie';
import Header from './components/header';

export default function App(){
  const [movieList , setMovieList ] = useState([]);
  const [featureData , setFeatureData] = useState(null)
  const [blackHeader , setBlackHeader] = useState(false)

  useEffect(() => {
    
    const loadAll = async () => {
      let list = await tmdb.getHomeList()


      setMovieList(list)
      //pegando o filme em destaque
      let originals = list.filter(i=>  i.slug === 'originals')

      let randomChosen = Math.floor(Math.random()* (originals[0].items.results.length -1))

      let chosen = originals[0].items.results[randomChosen];
      
      let chosenInfo = await tmdb.getMovieInfo(chosen.id , 'tv')
      setFeatureData(chosenInfo)
    }

    loadAll()
  } , [])

  //monitorar o scroll da pagina
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 500){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll' ,scrollListener)

    return () => {
      window.removeEventListener('scroll' , scrollListener)
    }
  } , [])


  return(
    <>
    <div className='page'>
      <Header black={blackHeader}/>
      {featureData && 
        <FeatureMovie item={featureData}/>
      }    
      <section className='lists'>
        {movieList.map((item , key) => (   
              <MovieRow key={key} title = {item.title} items={item.items} />
        ))}
      </section>

      <footer className='page--footer'>
        desenvolvido por <span>derlansilva</span>
        gitHub <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>
      </footer>
    </div>
    </>
  )
}