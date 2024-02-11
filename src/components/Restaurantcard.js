
const Restaurantcard = ({imgUrl, name}) => {
    // console.log("props", props);
 return (
        <div className="custom-card " >
            <div className="part-img">
                    <img src={imgUrl} />
            </div>
            {/* <div className="part-description ms-4 mt-4 ml-4">
                <p><b>{data[0].name}</b></p>
                <div className="d-flex justify-content-between ">
                    <p >{data[0].rating}/10</p>
                    <p >{data[0].deliveryTime} min</p>

                </div>
                <p>Cusines</p>
                <p>location</p> */}
            {/* </div> */}
        </div>




    );
}
export default Restaurantcard;