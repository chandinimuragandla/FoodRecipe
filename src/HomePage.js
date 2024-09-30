{/*import React,{useState,useEffect} from 'react'
;

const categories = ['All', 'Vegetarian', 'Pizza & Burgers', 'Non-Vegetarian', 'Desserts'];

// HomePage component
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };



    

  return (
    <div className='main'>
       <nav className="navbar">
        <ul className="nav-links">
          <img src='https://img.freepik.com/free-photo/top-view-tasty-soup-cooked-bean-soup-with-seasonings-white-desk-vegetables-meal-food-soup-bean_140725-74816.jpg?ga=GA1.1.856551589.1715144960&semt=ais_hybrid'/>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#categories">Recipe Detail page</a></li>
          <li className="nav-item"><a href="#favorites">Recipe Search page</a></li>
          <li className="nav-item"><a href="#profile">Recipe creation page</a></li>
          <li className="nav-item"><a href="#settings">favourites</a></li>
          <li className="nav-item"><a href="#settings">Profile page</a></li>
          <li className="nav-item"><a href="#settings">Settings Page</a></li>
          <img src='https://img.freepik.com/free-photo/top-view-fresh-tomato-branch-garlic-turmeric-bowl-wood-serving-board_140725-144907.jpg?t=st=1727697568~exp=1727701168~hmac=90ad33b9cb1630cffe8105fe8ecd6db4c799960e6cb2a8b120c8474a96e74440&w=740'></img>
        </ul>
        </nav>

        <div className='search-bar'>
            <input 
            type='search'
            placeholder='Search your favourite Food here...'
            value={searchQuery}
          onChange={handleSearchChange}></input>
        </div>
        <div className='category-filter'>
            <button > All</button>
            <button>vegitarian</button>
            <button>Pizza $ Burgers</button>
            <button>Non-vegetarian</button>
            <button>Desserts</button>

        </div>
        <div className="recipe-highlights">
        <h2>Featured Recipes</h2>
        <div className="recipe-grid">
          {/* Mock Recipe Cards */}
         {/*} <div className="recipe-card">
            <img src="https://as1.ftcdn.net/v2/jpg/01/68/30/90/1000_F_168309033_7AwxJsLto8Wk0W15aarxk8gaCIqr1pGz.jpg" alt="Recipe 1" />
            <h3>Pizza</h3>
            <p>Delicious Italian pasta with meat sauce.</p>
            <button>View Recipe</button>
          </div>
          <div className="recipe-card">
            <img src="https://as1.ftcdn.net/v2/jpg/08/04/74/12/1000_F_804741285_DOIJQaDVjvjzFOGMYkqAVd2oblgU4Up1.jpg" alt="Recipe 2" />
            <h3>Chicken Biryani</h3>
            <p>Rich and moist chocolate cake.</p>
            <button>View Recipe</button>
          </div>
          <div className="recipe-card">
            <img src="https://as2.ftcdn.net/v2/jpg/04/73/67/19/1000_F_473671912_MqrBNFHQs1dARRMF3xa0IAUlvi42qddo.jpg" alt="Recipe 3" />
            <h3>Meals</h3>
            <p>Fresh salad with Caesar dressing and croutons.</p>
            <button>View Recipe</button>
          </div>
        </div>
      </div>
      <div className="recipe-highlights">
       
        <div className="recipe-grid2">
          {/* Mock Recipe Cards */}
        {/*}  <div className="recipe-card">
            <img src="https://as1.ftcdn.net/v2/jpg/06/15/88/02/1000_F_615880274_sWwXJm3Y7UgcFyNBTxFq6YX5b0nFhUqx.jpg" alt="Recipe 1" />
            <h3>Spaghetti Bolognese</h3>
            <p>Delicious Italian pasta with meat sauce.</p>
            <button>View Recipe</button>
          </div>
          <div className="recipe-card">
            <img src="https://as2.ftcdn.net/v2/jpg/08/02/57/97/1000_F_802579780_2acNIe0z4pqlf9aTeQ26ywgO1Wc70RDw.jpg" alt="Recipe 2" />
            <h3>Chocolate Cake</h3>
            <p>Rich and moist chocolate cake.</p>
            <button>View Recipe</button>
          </div>
          <div className="recipe-card">
            <img src="https://as2.ftcdn.net/v2/jpg/08/94/85/31/1000_F_894853170_NrWtkqbRdC9YyE0kpsKowBAas1476Xbx.jpg" alt="Recipe 3" />
            <h3>Caesar Salad</h3>
            <p>Fresh salad with Caesar dressing and croutons.</p>
            <button>View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage*/}
