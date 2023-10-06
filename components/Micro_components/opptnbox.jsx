import Image from "next/image";

const OpptnBox = (props) => {
  return (
    <div className="relative w-72">
      <div className=" relative z-0">
        <Image src={props.image} />
      </div>
      <div className=" absolute z-10 top-0 left-0">
        <div className=" flex justify-center mt-10"><Image src={props.fnimage} width={200}/></div>
        <p className=" text-white px-5 text-center mt-8">{props.details}</p>
        <div className=" flex justify-center">
            <button className=" border-2 border-white px-10 py-1 text-white rounded-full mt-4">Learn More</button>
        </div>
      </div>
      
    </div>
  );
};

export default OpptnBox;
