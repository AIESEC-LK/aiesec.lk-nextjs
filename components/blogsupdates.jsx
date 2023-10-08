import blogimage1 from "@public/blogimg1.png";
import blogimage2 from "@public/blogimg2.png";
import blogimage3 from "@public/blogimg3.png";
import blogimage4 from "@public/blogimg4.png";
import BlogSlide from "./Micro_components/blogslide";

const BlogsSection = () =>{
    return(
        <section>
            <div className="">
                <h2 className="text-center text-3xl text-aiesec-blue font-semibold mb-5 mt-10">News & Updates</h2>
                <div className="flex justify-center">
                    <div className=" w-4/5">
                        <p className=" text-xl font-semibold"><span className=" h-1 w-1 bg-aiesec-blue text-aiesec-blue rounded-xl mr-2" content=" ">.</span>Blogs</p>
                        <div className=" sm:grid sm:grid-cols-4 sm:gap-x-5 sm:visible hidden">
                            <BlogSlide image={blogimage1} headphrase="The Demand For Leadership in IT Industry." entity={"NSBM"}/>
                            <BlogSlide image={blogimage2} headphrase="The Demand For Leadership in IT Industry." entity={"USJ"}/>
                            <BlogSlide image={blogimage3} headphrase="The Demand For Leadership in IT Industry." entity={"Ruhuna"}/>
                            <BlogSlide image={blogimage4} headphrase="The Demand For Leadership in IT Industry." entity={"CC"}/>
                        </div>
                        <div className=" sm:hidden">
                            <BlogSlide image={blogimage1} headphrase="The Demand For Leadership in IT Industry." entity={"NSBM"}/>
                        </div>
                    </div>    
                </div>
                <div className=" flex justify-center mt-5">
                    <button className=" text-aiesec-blue border-2 border-aiesec-blue px-10 py-1 font-semibold rounded-3xl">View All</button>
                </div>
            </div>
        </section>
    )
};

export default BlogsSection;