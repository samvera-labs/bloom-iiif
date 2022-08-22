import React from "react";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import Item from "components/Items/Item";
import { ItemsStyled } from "./Items.styled";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <ItemsStyled>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
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
