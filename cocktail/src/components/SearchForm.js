import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');
  React.useEffect(()=>{
   searchValue.current.focus();
  },[])
  const handleSubmit = (e)=>{
    console.log('prevent');
  e.preventDefault();
  }
  return (
    <div className='search'>
      <form className='form'onSubmit={handleSubmit}>
        <div className="form-control" >
          <label htmlFor="name">Search your favourite cocktail</label>
          <input type="text" id='name' ref={searchValue} onChange={()=>setSearchTerm(searchValue.current.value)}/>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
