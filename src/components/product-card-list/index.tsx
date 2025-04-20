'use client';

import products from "@/app/data";
import ProductCard from "../product-card";
import styles from './product-card.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef, useState, useEffect } from "react";
import { NavigationOptions } from "swiper/types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductCardList = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const updateNavigation = () => {
        if (swiperInstance) {
            swiperInstance.navigation.update();
        }
    };

    useEffect(() => {
        if (prevRef.current) {
            prevRef.current.style.display = 'none';
        }
    }, []); 

    return (
        <div className={styles.carouselWrapper}>
            <button 
                ref={prevRef} 
                className={styles.prevButton} 
            >
                <FiChevronLeft size={24} />
            </button>

            <Swiper
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={5}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    220: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1236: { slidesPerView: 5 },
                }}
                onSwiper={setSwiperInstance}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                } as NavigationOptions}
                onSlideChange={(swiper) => {
                    if (swiper.isBeginning) {
                        prevRef.current!.style.display = 'none'; 
                    } else {
                        prevRef.current!.style.display = 'flex'; 
                    }

                    if (swiper.isEnd) {
                        nextRef.current!.style.display = 'none';
                    } else {
                        nextRef.current!.style.display = 'flex';
                    }
                }}
                onBeforeInit={updateNavigation}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button 
                ref={nextRef} 
                className={styles.nextButton} 
            >
                <FiChevronRight size={24} />
            </button>
        </div>
    );
};

export default ProductCardList;
