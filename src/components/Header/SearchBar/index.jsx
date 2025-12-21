import SearchIcon from '../../../assets/magnifying-glass.svg'
import { useState } from 'react'
import './index.css'

const Searchbar = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const handleSearchClick = () => {
    if (!searchOpen) {
      setSearchOpen(true);
    } else {
      if (searchQuery.trim() === "") {
        // 如果没写字，再点一下就收起（或者保持不动，看你偏好）
        setSearchOpen(false);
      } else {
        // 【关键】如果有字，执行搜索逻辑
        console.log("正在执行搜索:", searchQuery);
        // window.location.href = `/search?q=${searchQuery}`; 
      }
    }
  };
  return (
    <>
      <div className={`search-container ${searchOpen ? 'active' : ''}`}>
            <input
            type='text'
            className='search-input'
            placeholder='SEARCH'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
            autoFocus={searchOpen}
            />
            <img
            src={SearchIcon}
            className="header-icon"
            alt="search"
            onClick={handleSearchClick}
            />
          </div>
    </>
  )
}

export default Searchbar