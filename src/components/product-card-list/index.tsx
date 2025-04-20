'use client';

import products from "@/app/data";
import ProductCard from "../product-card";
import styles from './product-card.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductCardList = () => {
    return (
        <div className={styles.carouselWrapper}>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                    1536: { slidesPerView: 5 },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCardList;
