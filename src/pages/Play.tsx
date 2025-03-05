import React, { useContext, useEffect, useState } from "react";
import { Image } from "@/components/custom/image";
import { Button } from "@/components/custom/button";
import { ClaimModal } from "@/components/custom/claimModal";
import { TelegramContext, TelegramUser } from '../contexts/TelegramContext';

import {
  VectorLeftIcon,
  VectorRightIcon,
  HeartEmptyIcon,
  HeartIcon,
} from "@/assets/icons";

import { FootPrint, Boxlion_left, Boxlion_right } from "@/assets/imgs";
import coin from "@/components/items/Coin";
import booster from "@/components/items/Booster";

const Play = () => {
  const fianllyScore = 1000;

  interface BoosterIcon {
    url: string;
    wid: number;
    score: string;
  }

  const [time, setTime] = useState(0);
  const [boosterIcons, setBoosterIcons] = useState<BoosterIcon[]>([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [speed, setSpeed] = useState(3000);
  const [previousLocation, setPreviousLocation] = useState(1000);

  const [showingItems, setShowingItems] = useState<{ id: string, item: React.ReactNode, wid: number, top: number, pos: number, location: number, score: any, url: any }[]>([]);
  const [health, setHealth] = useState([1, 1, 1, 1]);
  const [showModal, setShowModal] = useState({ win: false, lose: false });

  const [pos, setPos] = useState({ direction: Boxlion_left });
  const [boosterScore2x, setBoosterScore2x] = useState(false);
  const [boosterShield, setBoosterShield] = useState(false);

  const currentUser = useContext<TelegramUser | null>(TelegramContext);
  const displayName = currentUser?.username || currentUser?.first_name || 'Guest';
  const avatarUrl = currentUser?.photo_url || "https://i.postimg.cc/YSm0rKS7/User-35.png";

  const winOrFailModal = (str: string) => {
    if (str === 'win') {
      setShowModal({ win: true, lose: false });
      return
    } else if (str === 'lose') {
      setShowModal({ win: false, lose: true });
      return
    }
  };  


  const changePos = (direction: string, count: number, position: number) => {
    // 1 : 1 = 1
    // 1 : -1 = 0
    // -1 : 1 = 3
    // -1 : -1 = 2
    setPos({ direction });
    [...showingItems].forEach((item) => {
      if (((count === 1 && position === 1) && item.location === 1) ||
        ((count === 1 && position === -1) && item.location === 0) ||
        ((count === -1 && position === 1) && item.location === 3) ||
        ((count === -1 && position === -1) && item.location === 2)
      ) {
        if (item.wid > 70 && item.wid < 90) {
          setShowingItems((prevItems) =>
            prevItems.filter(it => it !== item) // Remove this coin
          );

          if (typeof item.score == `number`) {   // coin
            if (currentScore + item.score >= fianllyScore) {
              winOrFailModal('win');
              setCurrentScore(preScore => boosterScore2x ? preScore + item.score * 2 : preScore + item.score); // add the coin's score
            }
            else {
              setCurrentScore(preScore => boosterScore2x ? preScore + item.score * 2 : preScore + item.score); // add the coin's score
            }
          }
          else {                            // booster coin
            if (item.score === 'x2') {
              console.log('x2 =====> 🚀', `x2`);
              setBoosterScore2x(true);
              setTimeout(() => {
                let width = item.wid;
                setBoosterIcons(prevItem => {
                  return [...prevItem].filter(it => it.url !== item.url || it.wid !== width);
                });
              }, 10000);
            }

            if (item.score === 'bomb') {
              console.log('bomb =====> 🚀', `bomb`);
              if (!boosterShield) {
                setHealth(preHealth => preHealth.map((item) => 0))
                winOrFailModal('lose');
              }
            }

            if (item.score === 'speedup') {
              console.log('speedup =====> 🚀', `speedup`);
              setSpeed(speed - 1 -1000);
              setTimeout(() => {
                let width = item.wid;
                setBoosterIcons(prevItem => [...prevItem].filter(it => it.url !== item.url || it.wid !== width))
              }, 10000)
            }

            if (item.score === 'slow') {
              console.log('slow =====> 🚀', `slow`);
              setSpeed(speed - 1 + 1000);
              setTimeout(() => {
                let width = item.wid;
                setBoosterIcons(prevItem => [...prevItem].filter(it => it.url !== item.url || it.wid !== width))
              }, 10000)
            }

            if (item.score === 'fullhealth') {
              console.log('fullhealth =====> 🚀', `fullhealth`);
              setHealth(preHealth => preHealth.map((it) => 1))
            }

            if (item.score === 'health') {
              setHealth((preHealth) => {
                let boosterHealth = true;
                const newHealth = preHealth.map((it) => {
                  if (it === 0 && boosterHealth === true) {
                    boosterHealth = false
                    return 1;
                  }
                  return it;
                }
                )
                return newHealth
              })
            }

            if (item.score === 'shield') {
              console.log('shield =====> 🚀', `shield`);
              setBoosterShield(true);
              setTimeout(() => {
                let width = item.wid;
                setBoosterIcons(prevItem => [...prevItem].filter(it => it.url !== item.url || it.wid !== width))
              }, 10000)
            }

            if (item.score !== 'fullhealth' && item.score !== 'health' && item.score !== `bomb`) {
              setBoosterIcons(prevItems => {
                let flage = true;
                let result = [...prevItems].map((it) => {
                  if (it.url === item.url) {
                    it.wid = item.wid;
                    flage = false;
                  }
                  return it;
                })
                return (flage) ? [...result, { url: item.url, wid: item.wid, score: item.score }] : [...result]
              })
            }
          }

          setShowingItems(prevItem => prevItem.filter(it => it !== item))

        }
      }
    })

    // setSpeed(prevSpeed => prevSpeed + 1);
  };

  useEffect(() => {
    const x2result = boosterIcons.filter((item) => item.score === 'x2');
    if (x2result.length <= 0) {
      setBoosterScore2x(false)
    }

    const speedupResult = boosterIcons.filter(item => item.score === 'speedup')
    if (speedupResult.length <= 0) {
      setSpeed(speed + 1);
    }

    const slowResult = boosterIcons.filter(item => item.score === 'slow')
    if (slowResult.length <= 0) {
      setSpeed(speed + 1);
    }

    const shieldResult = boosterIcons.filter(item => item.score === 'shield')
    if (shieldResult.length <= 0) {
      setBoosterShield(false);
    }
  }, [time]);

  useEffect(() => {
    setTimeout(() => {
      setTime((pre) => pre + 1)
    }, speed);

    const choose = Math.random();
    const id = Date.now().toString();
    const coins = coin();
    const boosterCoins = booster();
    const item = choose < 0.2 ?
      <div className='w-[40px] h-[40px]'>
        <img src={boosterCoins.item} alt="boost itme" className='w-full h-full object-cover' />
      </div>
      :
      <div className="w-[40px] h-[40px]">
        <img src={coins.item} alt="item" className="w-full h-full object-cover w-[40px] h-[40px]" />
      </div>;

    const location = Math.floor(Math.random() * 4);
    if (previousLocation !== location) {
      setShowingItems((prevItems) => [...prevItems, { id, item, top: location % 2 ? 10 : 160, wid: 0, pos: location < 2 ? 0 : 1, location: location, score: choose < 0.2 ? boosterCoins.score : coins.score, url: choose < 0.2 ? boosterCoins.item : coins.item }]);
      setSpeed(speed + 1);
    }
    setPreviousLocation(location)
  }, [time]);

  useEffect(() => {
    const dieResult = health.every((item) => item === 0);
    if (dieResult) {
      winOrFailModal('lose');
    }
  }, [health]);

  useEffect(() => {
    const interval = setInterval(() => {
      let flage = true;
      setShowingItems((prevItems) =>
        prevItems
          .map(({ id, item, top, wid, pos, location, score, url }) => ({ id, item, top: top + 0.7, wid: wid + 1, pos, location, score, url })) // Move items down
          .filter(({ wid, score }) => {
            if (wid < 95) return wid;
            if (wid > 90) {
              if (typeof score == 'number' && flage === true) {
                setHealth((preHealth) => {
                  let newD = [...preHealth];
                  newD.shift()
                  newD.push(0);
                  return newD
                });
                flage = false
              }
            }
          }) // Remove if off-screen
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-between pt-4 px-3 pb-3">
        <div className="flex items-center space-x-2">
          <Image className="w-8 h-8 rounded" src={avatarUrl} alt={avatarUrl} />
          <p className="text-[16px] text-white">{displayName}</p>
        </div>
        <div className="text-right text-sm font-medium">
          <h6 className="text-white">Общая прибыль</h6>
          <p className="text-[#F39932]">1000 $King</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex-grow">

        {/* Background and blur elements */}
        <div className="absolute w-full border-t-2 border-[#F39932] h-full rounded-t-[15px] opacity-50 bg-[#F39932]"></div>
        <div className="absolute w-full h-full rounded-t-[15px] opacity-50 bg-[#F39932] blur-[25px]"></div>
        <div className="absolute w-full h-full top-[-3px] rounded-t-[15px] rounded-br-none rounded-bl-none bg-[#F39932] opacity-50"></div>

        {/* Main Effect */}
        <div className="absolute top-0 h-full w-full rounded-t-[15px] bg-[#0F0902]">
          <div className="relative flex w-full h-full">
            <div className="absolute z-[10] top-[101px] left-1/2 transform -translate-x-1/2 w-[270px] h-[804px] bg-[#F39932] blur-[200px] opacity-30"></div>
          </div>
        </div>

        {/* Down Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[84px] bg-gradient-to-b from-transparent via-black/60 to-black/60"></div>

        {/* Content */}
        <div className="relative w-full h-full z-10 bg-cover bg-center">
          <div>
            <p className="text-white text-center pt-[2%] text-[40px] font-semibold flex justify-center">
              {health.map((item, index) => (
                <Image
                  key={index}
                  src={item === 1 ? HeartIcon : HeartEmptyIcon}
                  alt="heart"
                ></Image>
              ))}
            </p>
            <h5 className="text-[24px] font-medium">
              {currentScore}/<span className="text-[#767676]">{fianllyScore}</span>
            </h5>
            <div className="flex justify-center w-full h-[30px] gap-1">
              {boosterIcons.map((item) => (
                <Image key={item.wid} className="bg-white w-[30px] h-[30px] rounded-full" src={item.url} alt="booster Items" />
              ))}
            </div>
          </div>
          <div className="relative flex justify-center pt-[10vh]">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 mt-[5vh] -translate-x-1/2 -translate-y-1/2 z-[1] w-[165px] h-[165px] bg-[#F39932] rounded-full blur-[59px]"></div>

            {/* Boxlions */}
            <div className="relative flex items-center space-x-4">
              <Image
                src={pos.direction}
                className="z-[50]"
                alt="Boxlion Left"
              />
            </div>
          </div>

          {/* Overlay with Footprint and Icons */}
          <div
            className="absolute top-0 w-full h-full"
            style={{
              backgroundImage: `url(${FootPrint})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative w-full h-full mt-[15vh]">
              {/* Left Icons */}
              <div className="absolute left-0 flex flex-col space-y-2">
                <Image src={VectorLeftIcon} alt="Vector Left Icon 1" />
                <Image src={VectorLeftIcon} alt="Vector Left Icon 2" />
              </div>

              {/* Right Icons */}
              <div className="absolute right-0 flex flex-col space-y-2">
                <Image src={VectorRightIcon} alt="Vector Right Icon 1" />
                <Image src={VectorRightIcon} alt="Vector Right Icon 2" />
              </div>
              {showingItems.map(({ id, item, top, wid, pos }) =>
              (
                pos ?
                  <div key={id} className={`absolute transform `} style={{ top: `${top}px`, right: `${wid}px` }}>
                    {item}
                  </div>
                  :
                  <div key={id} className={`absolute transform `} style={{ top: `${top}px`, left: `${wid}px` }}>
                    {item}
                  </div>

              )
              )}

            </div>

          </div>

          {/* Button Section */}
          <div className="fixed bottom-0 w-full px-[20px] pb-[20px] z-[51]">
            <div className="flex justify-around">
              <Button
                className="w-[70px] h-[70px] bg-[#F39932] rounded-full"
                onClick={() => changePos(Boxlion_left, 1, 1)}
                aria-label="Move Left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <path
                    d="M27.5771 20.761C28.1984 20.761 28.7021 20.2573 28.7021 19.636C28.7021 19.0147 28.1984 18.511 27.5771 18.511L19.0918 18.511C18.4705 18.511 17.9668 19.0147 17.9668 19.636L17.9668 28.1213C17.9668 28.7426 18.4705 29.2463 19.0918 29.2463C19.7132 29.2463 20.2168 28.7426 20.2168 28.1213L20.2168 22.352L30.4939 32.6291C30.9333 33.0684 31.6456 33.0684 32.0849 32.6291C32.5243 32.1897 32.5243 31.4774 32.0849 31.0381L21.8078 20.761H27.5771Z"
                    fill="black"
                  />
                </svg>
              </Button>
              <Button
                className="w-[70px] h-[70px] bg-[#F39932] rounded-full"
                onClick={() => changePos(Boxlion_right, -1, 1)}
                aria-label="Move Right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <path
                    d="M23.4229 20.761C22.8016 20.761 22.2979 20.2573 22.2979 19.636C22.2979 19.0147 22.8016 18.511 23.4229 18.511L31.9082 18.511C32.5295 18.511 33.0332 19.0147 33.0332 19.636L33.0332 28.1213C33.0332 28.7426 32.5295 29.2463 31.9082 29.2463C31.2868 29.2463 30.7832 28.7426 30.7832 28.1213L30.7832 22.352L20.5061 32.6291C20.0667 33.0684 19.3544 33.0684 18.9151 32.6291C18.4757 32.1897 18.4757 31.4774 18.9151 31.0381L29.1922 20.761H23.4229Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex justify-between">
              <Button
                className="w-[70px] h-[70px] bg-[#F39932] rounded-full"
                onClick={() => changePos(Boxlion_left, 1, -1)}
                aria-label="Move Left Again"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <path
                    d="M20.2169 23.8787C20.2169 23.2574 19.7132 22.7537 19.0919 22.7537C18.4706 22.7537 17.9669 23.2574 17.9669 23.8787L17.9669 32.364C17.9669 32.9853 18.4706 33.489 19.0919 33.489L27.5772 33.489C28.1985 33.489 28.7022 32.9853 28.7022 32.364C28.7022 31.7427 28.1985 31.239 27.5772 31.239L21.8079 31.239L32.085 20.9619C32.5243 20.5225 32.5243 19.8102 32.085 19.3709C31.6456 18.9316 30.9333 18.9316 30.494 19.3709L20.2169 29.648V23.8787Z"
                    fill="black"
                  />
                </svg>
              </Button>
              <Button
                className="w-[70px] h-[70px] bg-[#F39932] rounded-full"
                onClick={() => changePos(Boxlion_right, -1, -1)}
                aria-label="Move Right Again"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <path
                    d="M30.7831 23.8787C30.7831 23.2574 31.2867 22.7537 31.9081 22.7537C32.5294 22.7537 33.0331 23.2574 33.0331 23.8787L33.0331 32.364C33.0331 32.9853 32.5294 33.489 31.9081 33.489L23.4228 33.489C22.8015 33.489 22.2978 32.9853 22.2978 32.364C22.2978 31.7427 22.8015 31.239 23.4228 31.239L29.1921 31.239L18.915 20.9619C18.4756 20.5225 18.4756 19.8102 18.915 19.3709C19.3543 18.9316 20.0666 18.9316 20.506 19.3709L30.7831 29.648V23.8787Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Win Modal */}
      <ClaimModal isOpen={showModal} />
    </div >
  );
};

export default Play;
