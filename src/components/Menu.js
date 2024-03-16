import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Shimmereffect from './Shimmereffect';

const Menu = () => {
    const searchParams = useParams();
    const {resId}= searchParams;
    const MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
    const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"; console.log("params", searchParams)
    const [menuList, setMenuList] = useState([]);

    const getMenu = async () => {
        try {
            const menuData = await fetch(MENU_URL);
            const json = await menuData.json();
            console.log("menuData", json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
            setMenuList(json?.data?.cards);

        }
        catch (err) {
            console.log("Error", err);
        }

    }

    useEffect(() => {
        getMenu();
    }, []);

    if (menuList.length === 0) {
        return (<div className='container mt-5'>
            <Shimmereffect />
        </div>
        )
    }
    else {
        const { name, cuisines, areaName, sla, avgRating, totalRatingsString } = menuList[0]?.card?.card?.info;
        // const { itemCards } = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        const filteredData = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(listItem =>
            listItem?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"


        )
        console.log(filteredData);

        return (
            <>
                <div className='container mt-5 part-full-menu border-bottom pb-4 '>
                    <div className='d-flex menu-part'>
                        <h2>{name}</h2>
                        <div className='text-secondary'>{cuisines.join(", ")}</div>
                        <div className='text-secondary'>{areaName}</div>
                        <div className='mt-2 mb-2 text-secondary'>🚴‍♂️{sla?.deliveryTime} min</div>
                        {/* <div className='mt-2 mb-2'>{menuList[0]?.card?.card?.info?.feeDetails?.message} </div> */}
                    </div>
                    <div>
                        <div className='rat-menu'>⭐{avgRating}</div>
                        <hr ></hr>
                        <div className='dt-menu text-secondary'>{totalRatingsString}</div>
                    </div>
                </div>
                {/* <hr className='hr-2'></hr> */}
                {
                    filteredData.map(filteredItem =>
                        <div>
                            <div className='container part-next mt-4' key={filteredItem?.card?.card?.title} >
                                <h3>{filteredItem?.card?.card?.title}</h3>
                            </div>
                            {
                                filteredItem?.card?.card?.itemCards.map(itemCard =>
                                    <div className='container mt-4 part-full-menu border-bottom pb-4' key={itemCard?.card?.info?.id}>
                                        <div className='container item-cards'>
                                            <div>
                                                <div>{itemCard?.card?.info?.isVeg ? '🟢' : '🔴'}
                                                    <span>{itemCard?.card?.info?.ribbion?.text}</span></div>
                                                <div>{itemCard?.card?.info?.name}</div>
                                                <div><b>Rs. {itemCard?.card?.info?.price / 100}</b></div>
                                                <div className="mt-3 text-secondary">{itemCard?.card?.info?.description}</div>
                                            </div>

                                            <div className='img-menu'>
                                                <img src={IMG_URL + itemCard?.card?.info?.imageId}></img>
                                                <button className='btn btn-light btn-outline-success text-success img-button'>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </>
        )
    }
}
export default Menu;