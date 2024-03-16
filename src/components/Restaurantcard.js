import { IMG_URL } from "../utils/config";
import { Link } from "react-router-dom";

const Restaurantcard = ({
    cloudinaryImageId, name,avgRating,sla,cuisines,areaName,id}) => {
    // console.log("props", props);
 return (
 
        <Link to={`/menu/${id}`} className="custom-card" >
            <div className="part-img">
                    <img src={IMG_URL+cloudinaryImageId} />
            </div>
             <div className="part-description mt-4 ">
                <h6><b>{name}</b></h6>
                <div className="d-flex justify-content-between  ">
                    <div className="mt-2">⭐{avgRating}/10</div>
                    <div className="cui mt-2" >{sla?.deliveryTime} min</div>

                </div>
                <div className="cuisines text-secondary mt-2">{cuisines.join(", ")}</div>
                <div className="mt-3"><b>📍{areaName}</b></div>
            </div>
        </Link>

    );
}
export default Restaurantcard;