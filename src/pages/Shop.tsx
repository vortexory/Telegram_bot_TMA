import { useState } from "react";
import {
  Item_clock,
  Item_double,
  Item_heart,
  Item_fire,
  Item_light,
  Item_secret,
  FootPrint,
} from "@/assets/imgs";
import { Drawer } from "@/components/custom/drawer";
import { CatBtn } from "@/components/custom/catBtn";
import { ShopItem } from "@/components/custom/shop_item";

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

  const handleBuy = () => {
    setDrawerOpen(false);
    setTimeout(() => {
      setIndex(null);
    }, 200);
  }

  return (
    <>
      <div className="relative overflow-y-hidden h-screen pt-[30px] px-5 pb-[50px]">
        {/* Bottom Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full  h-[161px] blur-lg bg-[radial-gradient(ellipse_at_center,_rgba(243,_153,_50,_0.5),_rgba(243,_153,_50,_0.1))]"></div>
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-[-67px] left-0 w-full h-[161px] blur-lg bg-[radial-gradient(ellipse_at_center,_rgba(243,_153,_50,_0.5),_rgba(243,_153,_50,_0.1))]"></div>
        {/* Main Content */}
        <div className="flex h-full flex-col w-full gap-[30px] overflow-y-auto">
          {/* Navigation Toggle */}
          <CatBtn
            firstTitle="Boosters"
            lastTitle="Currency"
            className="sticky top-[0] z-[1000]"
          />

          {/* Shop Items */}
          <div className="flex justify-center items-start gap-5 flex-wrap pb-[50px] z-20">
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

        {/* FootPrint Effect */}
        <div
          className="absolute top-0 w-full h-full"
          style={{
            backgroundImage: `url(${FootPrint})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute z-[10] top-[101px] left-1/2 transform -translate-x-1/2 w-[270px] h-[804px] bg-[#F39932] blur-[200px] opacity-30"></div>

        {/* Bottom Gradient Overlay */}
        <div className="h-[30px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
      </div>

      {/* Drawer Component */}
      {index !== null && (
        <div className="absolute bottom-0 w-full z-[9999] rounded-t-[15px]">
          <Drawer
            img={items[index]?.img}
            title={items[index]?.title}
            description={items[index]?.description}
            cost={items[index]?.cost}
            isOpen={drawerOpen}
            onClose={handleDrawerClose}
            onSubmit={handleBuy}
          />
        </div>
      )}
    </>
  );
}
