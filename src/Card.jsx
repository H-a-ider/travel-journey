import "./index.css"

function Header(){
    <div>
          <h1>my travel journal</h1>
    </div>

}
 

const Card = ({ title, location, startDate, endDate, description, image }) => {
  return (
    <div>
        <Header />

    <div className="card">
        <div>
            <img src={image} alt={title} />
        </div>

        <div className="context">
                <p><i className="fa-solid fa-location-pin"></i> <span className="location" ></span>{location}</p>
                <h2>{title}</h2>
                <h5 className="data">
                    {startDate} - {endDate}
                </h5>
                <p className="desc">{description}</p>
        </div>
    </div>

    </div>

  );
};

export default Card;
