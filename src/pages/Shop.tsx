import { useState, useEffect } from "react";
import { FootPrint } from "@/assets/imgs";
import { Drawer } from "@/components/custom/drawer";
import { CatBtn } from "@/components/custom/catBtn";
import { ShopItem } from "@/components/custom/shop_item";
import axios from "axios";

interface ShopCard {
  itemname: string;
  id: number;
  imageurl: string;
}

interface CardDetail {
  itemname: string;
  description: string;
  price: number;
  imageurl: string;
}

const Shop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const [shopCards, setShopCards] = useState<ShopCard[]>([]);
  const [cardDetail, setCardDetail] = useState<CardDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchShopCards = async () => {
      try {
        const response = await axios.get(
          "https://simon.billtears76.workers.dev/item/info"
        );
        setShopCards(response.data.items);
      } catch (err) {
        setError("Failed to fetch users.");
      } 
    };

    fetchShopCards();
  }, []);

  useEffect(() => {
    setIndex(index);
  }, [index]);

  useEffect(() => {
    if (index !== null) {
      const fetchCardDetail = async () => {
        try {
          const response = await axios.post(
            "https://simon.billtears76.workers.dev/item/item-info",
            { itemId: index }
          );
          setCardDetail(response.data.item);
        } catch (err) {
          setError("Failed to fetch card details.");
        }
      };

      fetchCardDetail();
    }
  }, [index]);

  if (error) return <p>{error}</p>;

  const handleDrawerOpen = (idx: number) => {
    setCardDetail(null);
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
  };

  return (
    <>
      <div className="bg-[#0F0902] relative h-screen pt-[30px] overflow-hidden">
        {/* Main Content */}
        <div className="flex h-full flex-col w-full px-5 gap-[30px] overflow-y-auto">
          {/* Navigation Toggle */}
          <CatBtn
            firstTitle="Boosters"
            lastTitle="Currency"
            className="sticky top-[0] z-[1000]"
          />
          {/* Shop Items */}
          <div className="relative flex justify-center items-start gap-5 flex-wrap pb-[80px] z-20">
            {shopCards.map((item, idx) => (
              <ShopItem
                img={item.imageurl}
                title={item.itemname}
                key={idx}
                onClick={() => handleDrawerOpen(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Top Effect Overlay */}
        <div className="absolute top-0 left-0 w-full  h-[161px] rounded-[390px] bg-[rgba(243,153,50,0.7)] blur-[100px]"></div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-[-67px] left-0 w-full h-[161px] rounded-[390px] blur-[100px] bg-[rgba(243,153,50,0.7)]"></div>

        {/* FootPrint Effect */}
        <div
          className="absolute top-0 w-full z-[1] h-full"
          style={{
            backgroundImage: `url(${FootPrint})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Bottom Gradient-1 Overlay */}
        <div className="h-[84px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
      </div>

      {/* Drawer Component */}
      {index !== null && cardDetail && (
        <div className="absolute bottom-0 w-full z-[9999] rounded-t-[15px]">
          <Drawer
            img={cardDetail.imageurl}
            title={cardDetail.itemname}
            description={cardDetail.description}
            cost={cardDetail.price}
            isOpen={drawerOpen}
            onClose={handleDrawerClose}
            onSubmit={handleBuy}
          />
        </div>
      )}
    </>
  );
};

export default Shop;
