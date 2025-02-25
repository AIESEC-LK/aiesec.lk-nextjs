// Global Volunteer
import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import GVData from "./data.json";

import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from "@components/products/VideoTestimonials";
import Projects from "@components/products/projects";
import ProjectDestinations from "@components/products/projects2";
import Whyvolunteer from "@components/products/whyvolunteer";
import Signupbanner from "@components/products/signupbanner";
import Footer from "@components/Footer";
import ContactFrom from "@components/form";
import Intro from "@components/products/Intro";
import SplashScreen from "@components/SplashScreen";
import Process from "@components/products/Process";
import FnQ from "@components/FnQ";
import WhyProducts from "@components/products/WhyProducts";
import GVSignUp from "@components/products/GVSignup";

function Volunteer({ alignmentData }) {
	// console.log(data);
	const volunteerColor = "global-volunteer";
	const pathname = usePathname();
	//change the path here
	const isHome = pathname === "/products/global-volunteer";
	const [isLoading, setIsLoading] = useState(isHome);

	useEffect(() => {
		if (isLoading) return;
	}, [isLoading]);

	return (
		<>
			<HtmlHead
				title={"Global Volunteer - AIESEC in Sri Lanka"}
				description={
					"Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world."
				}
			/>
			{isLoading && isHome ? (
				<SplashScreen finishLoading={() => setIsLoading(false)} />
			) : (
				<div className=" overflow-hidden">
					<Nav />

					{/* <GVSignUp></GVSignUp> */}
					{/* Product Intro */}
					<div className="mt-[100px]">
						{GVData.map(
							(data) =>
								data.basicdetails &&
								data.basicdetails.map((pdata) => (
									<Intro
										key={pdata.id}
										title={pdata.title}
										color={pdata.color}
										logo={pdata.logo}
										description={pdata.content}
										duration={pdata.duration}
										organization={pdata.organization}
										url={pdata.url}
									/>
								))
						)}
					</div>
					{/* Why Products */}
					<div className="flex flex-col justify-around items-center md:flex-row pb-10">
						{GVData.map(
							(data) =>
								data.whyproducts &&
								data.whyproducts.map((pdata) => (
									<WhyProducts key={pdata.id} subtitle={pdata.title} image={pdata.image} />
								))
						)}
					</div>
					{/* Video Testimonials */}
					<div className="bg-global-volunteer">
						{GVData.map(
							(data) =>
								data.basicdetails &&
								data.basicdetails.map((pdata) => (
									<VideoTestimonials key={pdata.id} color={pdata.color} />
								))
						)}
					</div>
					{/* Our Projects */}
					<h2 className={`text-global-volunteer flex justify-center text-3xl font-bold pb-14 p-8`}>
						Our Projects
					</h2>
					<div className="flex flex-wrap justify-center">
						{GVData.map(
							(info) =>
								info.ourprojects &&
								info.ourprojects.map((project) => (
									<Projects key={project.id} title={project.title} img={project.path} />
								))
						)}
					</div>
					{/* Our Destinations */}
					<h2 className={`text-global-volunteer flex justify-center text-3xl font-bold pb-14 p-8`}>
						Our Destinations
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{GVData.map(
							(info) =>
								info.ourdestination &&
								info.ourdestination.map((destination) => (
									<ProjectDestinations
										key={destination.id}
										countryname={destination.countryname}
										projecttype={destination.projecttype}
										path={destination.path}
									/>
								))
						)}
					</div>
					<br />
					<Whyvolunteer />
					<h2 className={`text-global-volunteer flex justify-center text-3xl font-bold pb-14 p-8`}>
						Process
					</h2>
					<div className="flex flex-col justify-around md:flex-row">
						{GVData.map(
							(info) =>
								info.process &&
								info.process.map((process) => (
									<Process
										key={process.id}
										title={process.title}
										image={process.image}
										description={process.description}
									/>
								))
						)}
					</div>
					{/* Sign Up Banner */}
					<div id="signup" className="sm:container m-4 sm:mx-auto md:px-28 py-8 px-4 rounded-md">
						<h3 className="text-global-volunteer text-3xl font-bold"> Sign Up Now!</h3>
						<GVSignUp alignmentData={alignmentData}></GVSignUp>
					</div>
					{/* <div>
						{GVData.map(
							(info) =>
								info.signupbanner &&
								info.signupbanner.map((banner) => (
									<Signupbanner
										key={banner.id}
										content={banner.content}
										img={banner.path}
										url={banner.url}
										color={banner.color}
									/>
								))
						)}
					</div> */}
					<FnQ />
					<ContactFrom />
					<Footer />
				</div>
			)}
		</>
	);
}

export default Volunteer;
export async function getServerSideProps(context) {
	const fetchLCAlignments = await fetch("https://gis-api.aiesec.org/graphql", {
		headers: {
			accept: "application/json, text/plain, */*, application/json",
			"accept-language": "en-US,en;q=0.9",
			authorization: "ArA7-7UZV6QGhqnouAfwZSA49g4pxNxmRxt0giHjBxA",
			"content-type": "application/json",
			credentials: "include",
		},
		body: '{"operationName":"LeadQuery","variables":{"id":"1623","renderAgain":false,"alignmentType":"exchange"},"query":"query LeadQuery($id: ID!, $alignmentType: AlignmentTypes) {\\n  lcAlignments(id: $id, alignment_type: $alignmentType) {\\n    id\\n   keywords\\n    lc {\\n      id\\n     }\\n  }\\n}\\n"}',
		method: "POST",
	});
	//pushign other to bottom
	let otherAlignment;
	const alignmentData = (await fetchLCAlignments.json()).data.lcAlignments
		.sort((a, b) => a.id - b.id)

		.map((alignment) => ({
			name: alignment.keywords,
			id: alignment.id,
			lc: alignment.lc.id,
		}))
		.filter((alignment) => {
			if (alignment.name === "Other") {
				otherAlignment = alignment;
				return false;
			}
			return true;
		});
	alignmentData.push(otherAlignment);
	console.log(alignmentData);
	return { props: { alignmentData } };
}
