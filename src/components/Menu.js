import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Shimmereffect from './Shimmereffect';

const Menu = () => {
    const searchParams = useParams();
    // const navigate=useNavigate();
    console.log("params", searchParams)
    const { resId } = searchParams;
    const MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
    const [menuList, setMenuList] = useState([]);
    const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    const IMG_URL2="https://www.shutterstock.com/image-vector/tray-spoon-fork-plate-icon-600nw-1046695486.jpg";
    const getMenu = async () => {
        try {
            const menuData = await fetch(MENU_URL);
            const json = await menuData.json();
            console.log("menuData", json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
            setMenuList(json?.data?.cards);
            // navigate("/support")
        }
        catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        getMenu();
    }, []);

    if (!menuList || menuList.length === 0) {
        return (
            <div className='container mt-5'>
                <Shimmereffect />
            </div>
        );
    }
    else {
        const { name, cuisines, areaName, feeDetails, avgRating, totalRatingsString } = menuList[0]?.card?.card?.info;
        const filteredData = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter
            (listItem =>
                listItem?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )
        const nestedData = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter
            (listItem =>
                listItem?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
            )
        console.log(filteredData);
        console.log(nestedData);

        return (
            <>
                <div className='container mt-5 part-full-menu border-bottom pb-4 '>
                    <div className='d-flex menu-part'>
                        <h2>{name}</h2>
                        <div className='text-secondary'>{cuisines.join(", ")}</div>
                        <div className='text-secondary'>{areaName}</div>
                        <div className='mt-2 mb-2 text-secondary'>🚴‍♂️{feeDetails?.message} min</div>
                    </div>
                    <div>
                        <div className='rat-menu'>⭐{avgRating}</div>
                        <hr />
                        <div className='dt-menu text-secondary'>{totalRatingsString}</div>
                    </div>
                </div>
                {filteredData.map(filteredItem =>
                    <div key={filteredItem?.card?.card?.title}>
                        <div className='container part-next mt-4'>
                            <h3>{filteredItem?.card?.card?.title}</h3>
                        </div>
                        {filteredItem?.card?.card?.itemCards.map(itemCard =>
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
                                        <img src={IMG_URL + itemCard?.card?.info?.imageId} alt={itemCard?.card?.info?.name} />
                                        <button className='btn btn-light btn-outline-success text-success img-button'>ADD</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {
                    nestedData.map(nestedItem =>
                        <div key={nestedItem?.card?.card?.title}>
                            <div className='container part-next mt-4'>
                                <h3>{nestedItem?.card?.card?.title}</h3>
                            </div>
                            {
                                nestedItem?.card?.card?.categories.map(category =>
                                    <div key={category?.title} className='nested-title'>
                                        <h3 >{category?.title}</h3>
                                        {
                                            category?.itemCards.map(itemCard =>
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
                                                            <img
                                                            src={itemCard?.card?.info ? IMG_URL + itemCard?.card?.info?.imageId: IMG_URL2 + itemCard?.card?.info}
                                                            alt={itemCard?.card?.info?.name}
                                                             />
                                                            <button className='btn btn-light btn-outline-success text-success img-button'>ADD</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        }

                                    </div>

                                )
                            }

                        </div>
                    )

                }
            </>
        );
    }
}
export default Menu;
