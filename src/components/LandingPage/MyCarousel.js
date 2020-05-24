import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import styled from 'styled-components';
const items = [
	{
		src     : 'img/all.jpg',
		altText : 'Slide 1',
		caption : 'Get Help from Our Online Services',
		header  : 'Online Services'
	},
	{
		src     : 'img/books.jpg',
		altText : 'Slide 2',
		caption : 'Buy Your Favourites',
		header  : 'Books'
	},
	{
		src     : 'img/fashion.jpg',
		altText : 'Slide 3',
		caption : 'Show your Passion For Fashion',
		header  : 'Fashion'
	},
	{
		src     : 'img/laptop.jpg',
		altText : 'Slide 3',
		caption : 'Make Your office Work easy',
		header  : 'Laptops and Accessories'
	},
	{
		src     : 'img/special-offer.jpg',
		altText : 'Slide 3',
		caption : '',
		header  : ''
	}
];

const MyCarousel = (props) => {
	const [
		activeIndex,
		setActiveIndex
	] = useState(0);
	const [
		animating,
		setAnimating
	] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex =

				activeIndex === items.length - 1 ? 0 :
				activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex =

				activeIndex === 0 ? items.length - 1 :
				activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
				<img style={{ opacity: '0.7' }} src={item.src} alt={item.altText} className="img-fluid" />
				<CarouselCaption
					captionText={<h4 className="text-heading2">{item.caption}</h4>}
					captionHeader={<h1 className="text-heading1">{item.header}</h1>}
				/>
			</CarouselItem>
		);
	});

	return (
		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
			<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
			{slides}
			<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
			<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
		</Carousel>
	);
};

export default MyCarousel;
