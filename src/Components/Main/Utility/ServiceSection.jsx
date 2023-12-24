import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const ServiceSection = () => {
  const [loadData, setLoadData] = useState([]);
  const [count,setCount] = useState(0)

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setLoadData(data);
        // const totalPrice = data.reduce((price,cr) => price.price + cr,0)
        // console.log(totalPrice);
      });
  }, []);

  // console.log(loadData);
  return (
    <div className="my-20 ">
      <h1 className="text-center font-bold text-4xl">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {loadData.map((item, index) => (
          <Card key={item.service_id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;



