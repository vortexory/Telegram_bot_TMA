import bumb from '@/assets/icons/items/bumb.png' // 4%
import health from '@/assets/icons/items/health.png' // 6%
import speedup from '@/assets/icons/items/fire.png' // 15%
import fullhealth from '@/assets/icons/items/fullhealth.png' // 15%
import shield from '@/assets/icons/items/shield.png' // 15%
import slow from '@/assets/icons/items/slow.png' // 15%
import x2 from '@/assets/icons/items/x2.png' // 15%

const items = [bumb, speedup, fullhealth, health, shield, slow, x2];
const itemScore = [`bomb`, `speedup`, `fullhealth`, `health`, `shield`, `slow`, `x2`];

const booster = () => {
    let type = 0;

    const random_num = Math.random();
    if (random_num < 0.04) type = 0; // 4% for bumb
    else if (random_num < 0.25) type = 1; // 15% for speedup
    else if (random_num < 0.40) type = 2; // 15% for fullhealth
    else if (random_num < 0.10) type = 3; // 6% for health
    else if (random_num < 0.55) type = 4; // 15% for shield
    else if (random_num < 0.70) type = 5; // 15% for slow
    else type = 6; // 15% for x2

    return { item: items[type], score: itemScore[type] }
};

export default booster;