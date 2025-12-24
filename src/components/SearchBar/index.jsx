import SearchIcon from '../../assets/magnifying-glass.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Searchbar = () => {
  const [searchOpen, setSearchOpen] = useState(false) // 控制输入框长短
  const [searchQuery, setSearchQuery] = useState("") // 记录你输入的字
  const navigate = useNavigate()

  // 点击图标的逻辑：要么展开，要么去搜索
  const handleSearchClick = () => {
    if (searchOpen === false) {
      setSearchOpen(true); // 1. 如果是关着的，就打开
    } else {
      // 2. 如果是开着的
      if (searchQuery === "") {
        setSearchOpen(false); // 没写字，就把它关了
      } else {
        // 有字，就带着字跳到搜索页
        navigate(`/brand/search?q=${searchQuery}`);
      }
    }
  };

  return (
    <div className={`search-container ${searchOpen ? 'active' : ''}`}>
      <input
        type='text'
        className='search-input'
        placeholder='SEARCH'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        // 按回车键也能搜
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
        onClick={handleSearchClick} // 点击图标触发上面的 handleSearchClick
      />
    </div>
  )
}

export default Searchbar