import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaRef = React.createRef();
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
const schema = yup
	.object({
		first_name: yup.string().required("First name is required"),
		last_name: yup.string().required("Last name is required"),
		email: yup.string().email("Must be an email").required("Email is required"),
		password: yup
			.string()
			.required("Password is required")
			.min(8, "Password must contain at least 8 characters ")
			.matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
			.matches(/^(?=.*[A-Z])/, "Passowrd must contain at least one uppercase character")
			.matches(/^(?=.*[0-9])/, "Password must contain at least one number"),
		phone: yup
			.string()
			.required("Phone number is required")
			.min(9, "Phone number must contain at least 9 digits")
			.max(10, "Phone number must contain at most 10 digits")
			.transform((value, originalValue) => {
				//if the number starts with 0, remove it
				if (originalValue.startsWith("0")) {
					return originalValue.slice(1);
				}
				return originalValue;
			}),
		referral_type: yup.object().shape({
			value: yup.string().required("Referral is required"),
			label: yup.string().required("Referral is required"),
		}),
		contacted: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
		alignment: yup.object().shape({
			value: yup.string().required("Your educational institution is required"),
			label: yup.string().required("Your educational institution is required"),
			lc_id: yup.string().required("Your educational institution is required"),
		}),
		captcha: yup.string().required("Please complete the captcha", { nullable: false }),
	})
	.required("Data is required");

function GVSignUp({ alignmentData }) {
	const searchParams = useSearchParams();
	const utm_source = searchParams.get("utm_source");
	const utm_medium = searchParams.get("utm_medium");
	const utm_campaign = searchParams.get("utm_campaign");
	const utm_term = searchParams.get("utm_term");
	const utm_content = searchParams.get("utm_content");
	const ley = searchParams.get("ley");
	const [leyId, setLeyId] = useState(undefined);
	const [showPassword, setShowPassword] = useState(false);
	const [referralType, setReferralType] = useState(undefined);

	useEffect(() => {
		console.log(ley);
		if (ley) {
			switch (ley) {
				case "cc":
					setLeyId("7667");
					break;
				case "cn":
					setLeyId("7668");
					break;
				case "cs":
					setLeyId("7669");
					break;
				case "usj":
					setLeyId("7670");
					break;
				case "kandy":
					setLeyId("7671");
					break;
				case "ruhuna":
					setLeyId("7672");
					break;
				case "sliit":
					setLeyId("7673");
					break;
				case "nsbm":
					setLeyId("7674");
					break;
				case "nibm":
					setLeyId("14179");
					break;
				case "apiit":
					setLeyId("8723");
					break;
				case "iit":
					setLeyId("7997");
					break;
				case "jaffna":
					setLeyId("11136");
					break;
				case "kdu":
					setLeyId("10231");
					break;
				case "rajarata":
					setLeyId("13991");
					break;
				case "wayamba":
					setLeyId("13990");
					break;
				case "sltc":
					setLeyId("13106");
					break;
				case "saegis":
					setLeyId("11570");
					break;
				case "uwu":
					setLeyId("11119");
					break;
				case "vavuniya":
					setLeyId("37260");
					break;
				case "icbt":
					setLeyId("38626");
					break;
				case "mc":
					setLeyId("7675");
					break;
				case "eusl":
					setLeyId("39485");
					break;
				default:
					break;
				// return;
			}
		}
	}, [ley]);
	useEffect(() => {
		if (utm_medium) {
			const referralType = referralList.current.find((referral) => referral === utm_medium);
			if (referralType) {
				setReferralType({ value: utm_medium, label: utm_medium });
			}
		}
	}, [utm_medium]);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		const dataToSend = {
			first_name: data.first_name,
			last_name: data.last_name,
			email: data.email,
			password: data.password,
			phone: data.phone,
			alignment_id: data.alignment.value,
			lc: data.alignment.lc_id,
			referral_type: data.referral_type.value,
			selected_programs: [7],
		};
	};

	const referralList = useRef([
		"Classroom presentation",
		"Emails",
		"Event",
		"Facebook",
		"Friend",
		"Information booth on campus",
		"Instagram",
		"LinkedIn",
		"Media (magazine, TV, newspaper or radio)",
		"Search engine",
		"Twitter",
		"WhatsApp",
		"Other social media channel",
		"Other",
	]);
	return (
		<form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="first_name" className="block leading-6 text-gray-900 mt-4">
					Your first name
				</label>
				<div className="mt-2">
					<input
						id="first_name"
						name="first_name"
						type="text"
						{...register("first_name")}
						placeholder="Your first name"
						autoComplete="given-name"
						className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aiesec-blue sm:text-sm sm:leading-6 transition-shadow"
					/>
					<span className="text-red-500 text-sm">{errors.first_name?.message}</span>
				</div>
				<label htmlFor="last_name" className="block leading-6 text-gray-900 mt-4">
					Last name
				</label>
				<div className="mt-2">
					<input
						id="last_name"
						name="last_name"
						type="text"
						{...register("last_name")}
						autoComplete="family-name"
						className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aiesec-blue sm:text-sm sm:leading-6 transition-shadow"
					/>
					<span className="text-red-500 text-sm">{errors.last_name?.message}</span>
				</div>
				<label htmlFor="email" className="block leading-6 text-gray-900 mt-4">
					Email
				</label>
				<div className="mt-2">
					<input
						id="email"
						name="email"
						type="text"
						{...register("email")}
						autoComplete="email"
						className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aiesec-blue sm:text-sm sm:leading-6 transition-shadow"
					/>
					<span className="text-red-500 text-sm">{errors.email?.message}</span>
				</div>
				<label htmlFor="password" className="block leading-6 text-gray-900 mt-4">
					Password
				</label>
				<div className="flex flex-col my-3 relative">
					<input
						id="password"
						name="password"
						{...register("password")}
						type={showPassword ? "text" : "password"}
						autoComplete="email"
						className="w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aiesec-blue sm:text-sm sm:leading-6 transition-shadow"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute end-0 my-2 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
						{showPassword ? (
							<svg
								className="shrink-0 size-3.5"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
								<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
								<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
								<line x1="2" x2="22" y1="2" y2="22"></line>
							</svg>
						) : (
							<svg
								className="shrink-0 size-3.5"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
								<circle cx="12" cy="12" r="3"></circle>{" "}
							</svg>
						)}
					</button>
				</div>
				<span className="text-red-500 text-sm">{errors.password?.message}</span>
				<label htmlFor="phone" className="block leading-6 text-gray-900 mt-4">
					Phone Number
				</label>
				<div className="mt-2">
					<input
						{...register("phone")}
						id="phone"
						name="phone"
						type="number"
						autoComplete="tel-national"
						className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aiesec-blue sm:text-sm sm:leading-6 transition-shadow"
					/>
					<span className="text-red-500 text-sm">{errors.phone?.message}</span>
				</div>
				<label htmlFor="alignment" className={`block leading-6 text-gray-900 mt-4 ${leyId ? `hidden` : ``}`}>
					{`Where did you study? (University / Institute/ School)`}
				</label>
				<div className="mt-2">
					<Controller
						control={control}
						name="alignment"
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<Select
								classNamePrefix="react-select"
								className="!leading-6 sm:text-sm"
								id="alignment"
								onChange={onChange} // send value to hook form
								onBlur={onBlur} // notify when input is touched/blur
								selected={value}
								defaultValue={
									leyId &&
									alignmentData
										.filter((alignment) => alignment.id)
										?.map((alignment) => ({ value: alignment.id, label: alignment.name }))[0]
								}
								// isDisabled={ley ? true : false}
								form="signup-form"
								styles={{
									container: (provided) => ({
										display: leyId ? "none" : "block",
										...provided,
									}),
								}}
								classNames={{
									option: (state) => "sm:text-sm",
									menu: (state) => "!m-0",
									control: (state) =>
										"ring-1 ring-inset ring-gray-300 !border-none !shadow-sm !rounded-md !min-h-[40px] !placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-aiesec-blue !sm:text-sm !sm:leading-6 !transition-shadow",
								}}
								options={alignmentData.map((alignment) => ({
									value: alignment.id,
									label: alignment.name,
									lc_id: alignment.lc,
								}))}
							/>
						)}
					/>
					<span className="text-red-500 text-sm">{errors.alignment?.label?.message}</span>
				</div>
				<label htmlFor="referral_type" className="block leading-6 text-gray-900 mt-4">
					How did you find us?
				</label>
				<div className="mt-2">
					<Controller
						control={control}
						name="referral_type"
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<Select
								x
								classNamePrefix="react-select"
								className="!leading-6 sm:text-sm"
								id="referral_type"
								form="signup-form"
								onChange={onChange} // send value to hook form
								onBlur={onBlur} // notify when input is touched/blur
								selected={value}
								classNames={{
									option: (state) => "sm:text-sm",
									menu: (state) => "!m-0",
									control: (state) =>
										"ring-1 ring-inset ring-gray-300 !border-none !shadow-sm !rounded-md !min-h-[40px] !placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-aiesec-blue !sm:text-sm !sm:leading-6 !transition-shadow",
								}}
								options={referralList.current.map((value) => ({ value, label: value }))}
							/>
						)}
					/>

					<span className="text-red-500 text-sm">{errors.referral_type?.label?.message}</span>
				</div>
			</div>
			<div class="flex mt-4 items-center">
				<input
					id="contacted"
					name="contacted"
					{...register("contacted")}
					type="checkbox"
					className="h-4 w-4 rounded  focus:ring-global-volunteer"
				/>
				<label htmlFor="contacted" className=" leading-6 text-gray-900 px-2 sm:text-sm">
					I may be contacted via Phone or E-mail
				</label>
			</div>
			<span className="text-red-500 text-sm">{errors.contacted?.message}</span>
			<div className="mt-4">
				<Controller
					control={control}
					name="captcha"
					render={({ field: { onChange, onBlur, value, ref } }) => (
						<ReCAPTCHA
							onChange={onChange}
							ref={recaptchaRef}
							sitekey="6LfddL4UAAAAAH5VDHI75ZzDmn3M6hIAiVyOf7gz"
						/>
					)}
				/>
				<span className="text-red-500 text-sm">{errors.captcha?.message}</span>
			</div>
			<button type="submit" className="bg-global-volunteer text-white px-6 py-2 rounded-md mt-4 mr-6">
				Sign Up
			</button>
		</form>
	);
}

export default GVSignUp;
