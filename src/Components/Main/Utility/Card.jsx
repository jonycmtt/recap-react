import Button from "./Button/Button";

const Card = ({ item }) => {
    const {price,description,service_name} = item;
  // console.log(item);
  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <p>Price : {price}</p>
        <div className="card-actions justify-center">
          <Button title='Contact Now' bgColor={'btn-info'} ></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
