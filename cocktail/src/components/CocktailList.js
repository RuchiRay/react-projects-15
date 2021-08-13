import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,cocktails} = useGlobalContext();
  console.log('from cocktaillist ', cocktails);
  if(loading)
  {
    return(
      <Loading/>
    )
  }
  if(cocktails.length<1)
  {
    return (
      <div className='no-match'>
     <h2>No cocktails matched your searched text</h2>
    </div>
    )
  }
 
  return (
    <div className='cocktail-list'>
      <h2>Cocktails</h2>
      <div className="cocktail-center">
        {
          cocktails.map((cocktail)=>{
            return <Cocktail cocktail = {cocktail} key={cocktail.id}/>
          })
        }
      </div>
    </div>
  )
}

export default CocktailList
