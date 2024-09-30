import React, { useState } from 'react';
import './App.css'
const mockRecipes = [
  { id: 1, title: 'Pizza', category: 'Pizza & Burgers', description: 'Delicious Italian pizza with cheese and sauce.', image: 'https://as1.ftcdn.net/v2/jpg/01/68/30/90/1000_F_168309033_7AwxJsLto8Wk0W15aarxk8gaCIqr1pGz.jpg' },
  { id: 2, title: 'Chicken Biryani', category: 'Non-Vegetarian', description: 'Rich and flavorful chicken biryani.', image: 'https://as1.ftcdn.net/v2/jpg/08/04/74/12/1000_F_804741285_DOIJQaDVjvjzFOGMYkqAVd2oblgU4Up1.jpg' },
  { id: 3, title: 'meals', category: 'Vegetarian', description: 'Fresh Caesar salad with croutons.', image: 'https://as2.ftcdn.net/v2/jpg/04/73/67/19/1000_F_473671912_MqrBNFHQs1dARRMF3xa0IAUlvi42qddo.jpg' },
  { id: 4, title: 'Chocolate Cake', category: 'Desserts', description: 'Rich and moist chocolate cake.', image: 'https://as2.ftcdn.net/v2/jpg/08/02/57/97/1000_F_802579780_2acNIe0z4pqlf9aTeQ26ywgO1Wc70RDw.jpg' },
  { id: 5, title: 'fastfood', category: 'Vegetarian', description: 'fastfood', image: 'https://as2.ftcdn.net/v2/jpg/02/40/99/19/1000_F_240991913_c22j6WvLgpqiUvjaLiLc5rh14WO8jShB.jpg'},
  { id: 6, title: 'mockktails', category: 'cool drinks', description: 'cooldrinks', image:'https://as2.ftcdn.net/v2/jpg/04/99/55/45/1000_F_499554570_B17SKUXPVWAOhLdqjgMHoqgu5qHW6ooJ.jpg'},
 
 
];

const categories = ['All', 'Vegetarian', 'Pizza & Burgers', 'Non-Vegetarian', 'Desserts'];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');  
  const [categoryFilter, setCategoryFilter] = useState('All');  

 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  
  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  
  const filteredRecipes = mockRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryFilter === 'All' || recipe.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="main">
      <nav className="navbar">
        <ul className="nav-links">
          <img src='https://img.freepik.com/free-photo/top-view-tasty-soup-cooked-bean-soup-with-seasonings-white-desk-vegetables-meal-food-soup-bean_140725-74816.jpg?ga=GA1.1.856551589.1715144960&semt=ais_hybrid'/>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#categories">About Us </a></li>
          <li className="nav-item"><a href="#favorites">Recipe page</a></li>
          <li className="nav-item"><a href="#profile">Contact Us </a></li>
          <li className="nav-item"><a href="#settings">Login</a></li>
          <li>
          <div className="search-bar">
        <input
          type="search"
          placeholder="Search your favorite food here..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
          </li>
          
          <img src='https://img.freepik.com/free-photo/top-view-fresh-tomato-branch-garlic-turmeric-bowl-wood-serving-board_140725-144907.jpg?t=st=1727697568~exp=1727701168~hmac=90ad33b9cb1630cffe8105fe8ecd6db4c799960e6cb2a8b120c8474a96e74440&w=740'></img>
        </ul>
        </nav>
      <div className='hero-section'>
          <div className='banner'>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-discount-voucher-design-template-dd5a75c8490522f1c6bbd94efab763db_screen.jpg?ts=1638976276'></img>
          </div>
      </div>
     

    
      <div className="category-filter">
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>

      
      <div className="recipe-highlights">
        <h2>Our Top Most  Recipes</h2>
        <div className="recipe-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button>View Recipe</button>
              </div>
            ))
          ) : (
            <p>No recipes found for your search.</p>
          )}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Recipe Book App. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
