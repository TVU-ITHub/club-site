import React, { useEffect, useRef } from "react";  
//use gsap
import { gsap } from "gsap";
import useCharAnimation from "@/hooks/useCharAnimation";
import Image from "next/image";

// images import
import hero_frame from "../../../../public/assets/img/hero/hero-frame.png";
import shape_1 from "../../../../public/assets/img/hero/hero-line-shape.png";
import shape_2 from "../../../../public/assets/img/hero/hero-line-shape-2.png";
import shape_img_1 from "../../../../public/assets/img/hero/hero-shape-1.png";
import shape_img_2 from "../../../../public/assets/img/hero/hero-shape-2.png";
import hero_thumb_1 from "../../../../public/assets/img/hero/hero-sm-1.jpg";
import thumb_1 from "../../../../public/assets/img/hero/hero-sm-3.png";
import thumb_2 from "../../../../public/assets/img/hero/hero-sm-4.jpg";
import hero_thumb_2 from "../../../../public/assets/img/hero/hero-sm-2.jpg";
import HeroForm from "@/forms/hero-form";
import LineShape from "@/svg/line-shape";

// hero content data
const hero_content = {
	hero_shape: [
		{
			id: 1,
			cls: "tp-hero-shape-1",
			img: shape_1,
		},
		{
			id: 2,
			cls: "tp-hero-shape-2",
			img: shape_2,
		},
	],
	hero_title: (
		<>
			<span className="tp_title">
				<span className="child">The Leading Customer</span>
			</span>{" "}
			<br />
			<span>
				<span className="child">Data Platform</span>
			</span>{" "}
		</>
	),
	sub_title: <>We are not going to save your data</>,
	hero_shape_img: [
		{
			id: 1,
			cls: "1",
			img: shape_img_1,
		},
		{
			id: 2,
			cls: "2",
			img: shape_img_2,
		},
	],

	hero_thumbs: [
		{
			id: 1,
			col: "4",
			cls: "tp-hero__sm-img",
			img: thumb_1,
		},
		{
			id: 2,
			col: "8",
			cls: "",
			img: thumb_2,
		},
	],
};
const { hero_shape, hero_title, sub_title, hero_shape_img, hero_thumbs } =
	hero_content;

const HeroSlider = () => {
	let hero_bg = useRef(null);

	useEffect(() => {
		gsap.from(hero_bg.current, {
			opacity: 0,
			scale: 1.2,
			duration: 1.5,
		});
		gsap.to(hero_bg.current, {
			opacity: 1,
			scale: 1,
			duration: 1.5,
		});
	}, []);

	useCharAnimation(".tp-hero__hero-title span.child");

	return (
		<>
			<div className="tp-hero__area tp-hero__pl-pr">
				<div className="tp-hero__bg p-relative">
					<div className="tp-hero-bg tp-hero-bg-single" ref={hero_bg}>
						<Image
							// style={{width: "auto", height: "auto"}}
							src={hero_frame}
							alt="theme-pure"
						/>
					</div>
					<div className="tp-hero-shape">
						{hero_shape.map((item, i) => (
							<Image
								// style={{width: "auto", height: "auto"}}
								key={i}
								className={item.cls}
								src={item.img}
								alt="theme-pure"
							/>
						))}
					</div>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-10">
								<div className="tp-hero__content-box text-center z-index-3">
									<div className="tp-hero__title-box p-relative">
										<h2 className="tp-hero__hero-title tp-title-anim">
											{hero_title}
										</h2>
										<div className="tp-hero__title-shape d-none d-sm-block">
											<LineShape />
										</div>
									</div>
									<div
										className="tp-hero__input p-relative wow tpfadeUp"
										data-wow-duration=".9s"
										data-wow-delay=".5s"
									>
										<HeroForm />
									</div>
									<p
										className="wow tpfadeUp"
										data-wow-duration=".9s"
										data-wow-delay=".7s"
									>
										{sub_title}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="tp-hero__bottom z-index-5">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-10">
								<div className="tp-hero__thumb-wrapper-main p-relative">
									{hero_shape_img.map((item, i) => (
										<div
											key={i}
											className={`tp-hero__shape-img-${item.cls} d-none d-xl-block`}
										>
											<Image src={item.img} alt="theme-pure" />
										</div>
									))}
									<div>
										<div className="tp-hero__thumb-wrapper d-none d-md-block p-relative">
											<div className="row">
												<div className="col-8">
													<div className="tp-hero__thumb-box">
														<div className="row">
															<div className="col-md-12">
																<div className="tp-hero__thumb mb-20">
																	<Image
																		style={{ width: "auto", height: "auto" }}
																		className="w-100"
																		src={hero_thumb_1}
																		alt="theme-pure"
																	/>
																</div>
															</div>
														</div>

														<div className="row">
															{hero_thumbs.map((item, i) => (
																<div key={i} className={`col-md-${item.col}`}>
																	<div className={`tp-hero__thumb ${item.cls}`}>
																		<Image
																			className="w-100"
																			src={item.img}
																			alt="theme-pure"
																		/>
																	</div>
																</div>
															))}
														</div>
													</div>
												</div>
												<div className="col-md-4">
													<div className="tp-hero__thumb-box">
														<div className="tp-hero__thumb">
															<Image
																style={{ width: "auto", height: "auto" }}
																className="w-100"
																src={hero_thumb_2}
																alt="theme-pure"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSlider;
