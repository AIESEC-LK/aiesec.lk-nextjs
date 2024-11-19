import React from "react";
import Image from "next/image";
import bgimage from "@public/assets/images/landing/nlds2019large-min.png";
import icon1 from "@public/carbon_location-filled.png";
import icon2 from "@public/bxs_phone-call.png";
import icon3 from "@public/ic_sharp-email.png";
import logo from "@public/aiesecwhite.png";

const ContactFrom = () => {
	return (
		<section id="contact" className=" relative mt-20 sm:mb-72 lg:mb-0">
			<h2 className=" text-3xl font-semibold text-aiesec-blue text-center">{/* Contact Us */}</h2>
			<div className=" top-0 mt-52 hidden md:block">
				<Image src={bgimage} />
			</div>
			<div className=" sm:absolute flex justify-center flex-wrap xl:top-[-35px] lg:top-[-140px] md:top-[-150px] z-10">
				<div className=" w-3/4 grid sm:grid-cols-3 sm:grid-flow-row bg-white p-3 rounded-lg shadow-lg shadow-aiesec-medium-grey ">
					<div className=" bg-aiesec-blue text-white rounded-xl col-span-full lg:col-span-1 sm:w-full w-4/5">
						<h2 className=" text-2xl font-semibold float-left px-10 pt-5">Contact Us</h2>
						<br></br>
						<p className=" float-left px-10">Say something to start live chat!</p>
						<br></br>
						<div className=" float-left flex px-10 mt-5 mb-5">
							<Image src={icon2} />
							<p>+94 112 746 190</p>
						</div>
						<div className=" float-left flex px-10 mb-5">
							<Image src={icon3} />
							<p>info@aiesec.lk</p>
						</div>
						<div className=" float-left flex px-10">
							<Image src={icon1} />
							<p>102/2</p>
							<br />
						</div>
						<div className=" float-left flex px-[65px] mb-5">
							<p>
								Nagahawatta Road,<br></br> Maharagama, 10280
							</p>
						</div>
					</div>
					<div className=" col-span-full lg:col-span-2">
						<form class=" bottom-input">
							<div className=" grid sm:grid-cols-2 sm:grid-flow-row grid-rows-1">
								<div className=" p-4">
									<label>First Name</label>
									<br></br>
									<input
										type="text"
										name="fame"
										className=" sm:w-full border-b-2 border-0 mb-5 h-8 w-4/5"
									/>
									<br />
									<label>Email</label>
									<br></br>
									<input
										type="email"
										name="email"
										className=" sm:w-full border-b-2 border-0 mb-5 h-8 w-4/5"
									/>
								</div>
								<div className=" p-4">
									<label>Last Name</label>
									<br></br>
									<input
										type="text"
										name="lame"
										className=" sm:w-full border-b-2 border-0 mb-5 h-8 w-4/5"
									/>
									<br />
									<label>Phone Number</label>
									<br></br>
									<input
										type="text"
										name="pnumber"
										className=" sm:w-full border-b-2 border-0 mb-5 h-8 w-4/5"
									/>
								</div>
							</div>
							<div className=" pl-4"></div>
							<div className=" px-3 pt-5">
								<label className=" px-2">Message</label>
								<input
									type="text"
									name="message"
									className=" px-2 sm:w-full border-b-2 border-0 mb-5 h-8 w-4/5"
								/>
							</div>
							<button className=" bg-aiesec-blue text-white float-right px-5 py-2 rounded-lg sm:mr-0 mr-10">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFrom;
