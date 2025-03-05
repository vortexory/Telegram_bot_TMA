import BigCoin from '@/assets/icons/items/bcoin.png' // 5%     score  10
import SmallCoin from '@/assets/icons/items/scoin.png' // 65%  score  1
import Cat from '@/assets/icons/items/cat.png' // 15%          score  3
import Dog from '@/assets/icons/items/dog.png' // 15%          score  3

const items = [Cat, Dog, BigCoin, SmallCoin]
const appearanceRates = [15, 15, 5, 65];
const itemScore = [3, 3, 10, 1];


const coin = () => {
    let type = 0;

    const random = Math.random() * 100
    let cumulativeRate = 0
    for (let i = 0; i < appearanceRates.length; i++) {
        cumulativeRate += appearanceRates[i]
        if (random < cumulativeRate) {
            type = i;
            break
        }
    }

    return { item: items[type], score: itemScore[type] }
};

export default coin;