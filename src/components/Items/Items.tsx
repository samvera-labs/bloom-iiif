import React, { useEffect, useRef, useState } from "react";
import { CollectionItems, Collection, Manifest } from "@iiif/presentation-3";
import Item from "./Item";
import { ItemsStyled } from "./Items.styled";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface ItemsProps {
  instance: string;
  items: CollectionItems[];
}

const Items: React.FC<ItemsProps> = ({ instance, items }) => {
  const [itemCount, setItemCount] = useState(3);
  const itemsRef = useRef<HTMLDivElement>(null);
  const length = items.length;

  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
          if (entry && itemsRef.current?.clientWidth) {
            let count = Math.ceil(itemsRef.current?.clientWidth / 290);
            count <= length ? setItemCount(count) : setItemCount(length);
          }
        }
      }
    );

    if (itemsRef.current) resizeObserver.observe(itemsRef.current);
  }, [itemsRef.current]);

  return (
    <ItemsStyled ref={itemsRef}>
      <Swiper
        a11y={{
          prevSlideMessage: "previous item",
          nextSlideMessage: "next item",
        }}
        spaceBetween={31}
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: `.bloom-next-${instance}`,
          prevEl: `.bloom-previous-${instance}`,
        }}
        slidesPerGroup={itemCount}
        slidesPerView={itemCount}
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <Item index={index} item={item as Collection | Manifest} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ItemsStyled>
  );
};

export default Items;
