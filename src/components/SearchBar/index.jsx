import SearchIcon from '../../assets/magnifying-glass.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Searchbar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  //默认是收起来的
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()


  const handleSearchClick = () => {
    if (searchOpen === false) {
      setSearchOpen(true);
    } else {

      if (searchQuery === "") {
        setSearchOpen(false);
      } else {

        navigate(`/brand/search?q=${searchQuery}`);
      }
    }
  };

  return (
    <div className={`search-container ${searchOpen ? 'active' : ''}`}>
      <input
        type='text'
        id="header-search-input"
        name="search"
        autoComplete="off"
        className='search-input'
        placeholder='SEARCH'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}

        onKeyDown={(e) => {
          if (e.key === 'Enter' && searchQuery !== "") {
            navigate(`/brand/search?q=${searchQuery}`);
          }
        }}
      />
      <img
        src={SearchIcon}
        className="header-icon"
        alt="search"
        onClick={handleSearchClick}
      />
    </div>
  )
}

export default Searchbar