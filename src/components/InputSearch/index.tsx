import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function InputSearch() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handlerSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(search !== ''){
          return navigate(`/items?search=${search}`)
        }
    }
    return (
      <form onSubmit={handlerSearch}>
        <div className="input-group">
            <input value={search}  onChange={(e) => setSearch(e.target.value)} />
            <button type="submit">
                <FontAwesomeIcon  icon={faSearch}/>
            </button>
        </div>
      </form>
    )
  }
  
  export default InputSearch
  