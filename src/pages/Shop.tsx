import {
  Item_clock,
  Item_double,
  Item_heart,
  Item_fire,
  Item_light,
  Item_secret,
} from "@/assets/imgs";
import { Drawer } from "@/components/custom/drawer";
import { CatBtn } from "@/components/custom/catBtn";
import { ShopItem } from "@/components/custom/shop_item";
import { useState } from "react";

const items = [
  {
    img: Item_double,
    title: "x2 Coins",
    cost: 200,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat ex, sit",
  },
  {
    img: Item_heart,
    title: "Heart",
    cost: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat ex, sit",
  },
  {
    img: Item_secret,
    title: "Bomb Shield",
    cost: 300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat ex, sit",
  },
  {
    img: Item_fire,
    title: "Fire Boost",
    cost: 400,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat ex, sit",
  },
  {
    img: Item_light,
    title: "Lightning Boost",
    cost: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat ex, sit",
  },
  {
    img: Item_clock,
    title: "Time Extension",
    cost: 600,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat ex, sit",
  },
];

export default function Shop() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [index, setIndex] = useState<number | null>(null);

  const handleDrawerOpen = (idx: number) => {
    setIndex(idx);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setTimeout(() => {
      setIndex(null);
    }, 200);
  };

  return (
    <>
      <div className="bg-[#282c34] relative overflow-y-hidden h-screen pt-[30px] px-5">
        {/* Bottom Gradient Overlay */}
        {/* <div className="absolute top-0 left-0 w-full  h-[161px] blur-lg bg-[radial-gradient(ellipse_at_center,_rgba(243,_153,_50,_0.5),_rgba(243,_153,_50,_0.1))]"></div> */}
        {/* Bottom Gradient Overlay */}
        {/* <div className="absolute bottom-[-67px] left-0 w-full h-[161px] blur-lg bg-[radial-gradient(ellipse_at_center,_rgba(243,_153,_50,_0.5),_rgba(243,_153,_50,_0.1))]"></div> */}
        {/* Main Content */}
        <div className="flex h-full flex-col w-full gap-[30px] overflow-y-auto">
          {/* Navigation Toggle */}
          <CatBtn firstTitle="Boosters" lastTitle="Currency" />

          {/* Shop Items */}
          <div className="flex justify-center items-start gap-5 flex-wrap z-20">
            {items.map((item, idx) => (
              <ShopItem
                img={item.img}
                title={item.title}
                key={idx}
                onClick={() => handleDrawerOpen(idx)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="h-[84px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
      </div>

      {/* Drawer Component */}
      {index !== null && (
        <div className="absolute bottom-0 w-full z-20">
          <Drawer
            img={items[index]?.img}
            title={items[index]?.title}
            description={items[index]?.description}
            cost={items[index]?.cost}
            isOpen={drawerOpen}
            onClose={handleDrawerClose}
          />
        </div>
      )}
    </>
  );
}
