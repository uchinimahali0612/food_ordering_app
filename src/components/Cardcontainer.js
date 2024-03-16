// ALL THE IMPORTS
import Restaurantcard from './Restaurantcard.js';
import Carousel from './Carousel.js';
import Title from './Title.js';
import { useState, useEffect } from 'react';
import { IMG_URL } from '../utils/config.js';
import { RES_URL } from '../utils/config.js';
import Shimmereffect from './Shimmereffect.js';

const Cardcontainer = () => {
//USESTATE
      const [restaurant, setRestaurant] = useState([]);
      const [mstData, setMasterData] = useState([]);
      const [title, setTitle] = useState([]);
      const [title1, setTitle1] = useState([]);
      const [carousel, setCarousel] = useState([]);
      const [searchText, setSearch] = useState("");
      const [category, setCategory] = useState("");
      const [errorMessage, setErrorMessage] = useState("");
      const [errorSearch, setSearchError] = useState("");

// API CALL STEP
      const getData = async () => {
            try {
                  const data = await fetch(RES_URL);
                  const json = await data.json();
                  console.log("responseData", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                  setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
                  setTitle(json?.data.cards[0]?.card?.card?.header.title);
                  setTitle1(json?.data.cards[1]?.card?.card?.header.title);
                  setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                  setMasterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
            catch (err) {
                  console.log("Error", err);
                  setErrorMessage("There is some error. Please try in a while!")
                  setSearchError("No Matches Found :(")
            }
      }

      const handleSearchText = (e) => {
            setSearch(e.target.value);
      }

      const handleSearchClick = () => {
            const filterData = mstData.filter(resItem => resItem?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
            setRestaurant(filterData);

      }

      const handleFilter = (filterType) => {
            let filterData;
            switch (filterType) {
                  case 'rating':
                        filterData = mstData.filter(resItem => resItem?.info?.avgRating > 4.3);
                        break;
                  case 'deliveryTime':
                        filterData = mstData.filter(resItem => resItem?.info?.sla?.deliveryTime < 45);
                        break;
                  case 'veg':
                        filterData = mstData.filter(resItem => resItem?.info?.veg);
                        break;
                  case 'cost':
                        filterData = mstData.filter(item => parseInt(item?.info?.costForTwo.replace(/\D/g, "")) < 300);
                        break;
                  case 'highCost':
                        filterData = mstData.filter(item => {
                              const cost = parseInt(item?.info?.costForTwo.replace(/\D/g, ""));
                              return cost >= 300 && cost <= 600;
                        });
                        break;
                  default:
                        setCategory("");
                        setRestaurant(mstData);
                        return;
            }

            if (restaurant !== mstData && category === filterType) {
                  handleReset();
            } else {
                  setRestaurant(filterData);
                  setCategory(filterType);
            }
      }

      const handleReset = () => {
            setCategory("");
            setRestaurant(mstData);
      }

      useEffect(() => {
            getData();
      }, []);

      return (
            <>
                  <div className='container search-bar'>
                        {
                              errorMessage ?
                                    <div>{errorSearch}</div> :
                                    <input type="text" value={searchText} placeholder="Search for delicious food" className="search-input" onChange={handleSearchText} />}
                        <button className='btn-search' onClick={handleSearchClick}><img src="https://www.pngitem.com/pimgs/b/280-2800687_search-icon-transparent-gif-hd-png-download.png" ></img></button>
                  </div>

                  <div className="container pt-4">
                        <Title title={title} />

                        <div className="d-flex carousel-part">
                              {
                                    carousel.map((imgData) => {
                                          return (
                                                <Carousel img={IMG_URL + imgData?.imageId}
                                                />
                                          )
                                    })
                              }
                        </div>
                  </div>

                  <div className='container '>
                        <Title title={title1} />
                        <div className='button-part mt-5'>
                              <button className='btn-rating btn-block btn-outline-dark' style={{ backgroundColor: category === "rating" ? "aliceblue" : "" }} onClick={() => handleFilter('rating')}>Rating 4.3+</button>
                              <button className='btn-dev btn-block btn-outline-dark' style={{ backgroundColor: category === "deliveryTime" ? "aliceblue" : "" }} onClick={() => handleFilter('deliveryTime')}>FastDelivery</button>
                              <button className='btn-veg  btn-block btn-outline-dark' style={{ backgroundColor: category === "veg" ? "aliceblue" : "" }} onClick={() => handleFilter('veg')}>Pure Veg</button>
                              <button className='btn-veg btn-outline-dark' style={{ backgroundColor: category === "cost" ? "aliceblue" : "" }} onClick={() => handleFilter('cost')}>Less than Rs.300</button>
                              <button className='btn-veg btn-outline-dark' style={{ backgroundColor: category === "highCost" ? "aliceblue" : "" }} onClick={() => handleFilter('highCost')}>Rs.300 - Rs.600</button>
                              {category && <button className='btn-veg btn-outline-dark' onClick={handleReset}>Reset</button>}
                        </div>

                        <div className='container mt-5 d-flex flex-wrap justify-content-between'>
                              {
                                    errorMessage ?
                                          <div className="alert alert-danger alert">
                                                <strong>{errorMessage}</strong>
                                          </div>
                                          :
                                          restaurant.length !== 0 ?
                                                restaurant.map((card, index) => {
                                                      return (
                                                            <Restaurantcard
                                                                  key={card?.info}
                                                                  {...card?.info}
                                                            />
                                                      )
                                                }) : <Shimmereffect />
                              }
                        </div>
                  </div>
            </>
      )
}
export default Cardcontainer;