import React, { useEffect, useState } from "react";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import Item from "./Item";
import { ItemsStyled } from "./Items.styled";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { media } from "../../stitches";

interface ItemsProps {
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  const [slidesPerView, setslidesPerView] = useState(5);

  let mediaQuery = new Map();
  mediaQuery.set("xs", useMediaQuery(media.xs));
  mediaQuery.set("sm", useMediaQuery(media.sm));
  mediaQuery.set("md", useMediaQuery(media.md));
  mediaQuery.set("lg", useMediaQuery(media.lg));
  mediaQuery.set("xl", useMediaQuery(media.xl));

  useEffect(() => {
    if (mediaQuery.get("xs")) {
      setslidesPerView(1);
      return;
    }
    if (mediaQuery.get("sm")) {
      setslidesPerView(2);
      return;
    }
    if (mediaQuery.get("md")) {
      setslidesPerView(3);
      return;
    }
    if (mediaQuery.get("lg")) {
      setslidesPerView(4);
      return;
    }
    if (mediaQuery.get("xl")) {
      setslidesPerView(5);
      return;
    }
  }, [mediaQuery]);

  return (
    <ItemsStyled>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={slidesPerView}
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
