import OpptnBox from "./Micro_components/opptnbox";
import image1 from "@public/Rectangle 9.png";
import image2 from "@public/Rectangle 10.png";
import image3 from "@public/Rectangle 11.png";
import igt from "@public/product_GTe-top-white.png";
import igte from "@public/product_GTe-top-white.png";
import igv from "@public/product_GV-horizontal-white.png";


const Opportunities = () => {
  return (
    <section className="">
      <h2 className="text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-10">
        Our Opportunities
      </h2>
      <div className=" flex justify-center align-middle">
        <div className=" grid grid-cols-3 px-56 gap-x-10">
          <OpptnBox image={image1} fnimage={igv} details="Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy. Lorem Ipsum has been the industry's standard dummy"/>
          <OpptnBox image={image2} fnimage={igv} details="Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy. Lorem Ipsum has been the industry's standard dummy"/>
          <OpptnBox image={image3} fnimage={igv} details="Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy. Lorem Ipsum has been the industry's standard dummy"/>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
