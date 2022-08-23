import React, { useEffect, useRef, useState } from "react";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import Item from "./Item";
import { ItemsStyled } from "./Items.styled";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const [slidesPerView, setSlidesPerView] = useState(6);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemsRef.current?.clientWidth)
      setSlidesPerView(Math.ceil(itemsRef.current?.clientWidth / 300));
  }, [itemsRef.current?.clientWidth]);

  return (
    <ItemsStyled ref={itemsRef}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={slidesPerView}
        navigation
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <Item
              index={index}
              item={item as Collection | Manifest}
              key={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ItemsStyled>
  );
};

export default Items;
