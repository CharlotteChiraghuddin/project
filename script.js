

let quotes = ['Believe you can and you’re halfway there. - Teddy Roosevelt','Life is 10% what happens to us and 90% how we react to it. - Dennis P. Kimbro','An obstacle is often a stepping stone. - William Prescott','Whether you think you can or think you can’t, you’re right. - Henry Ford','Don’t wait, the time will never be just right. - Napoleon Hill','Everything you can imagine is real. - Pablo Picasso','Live each day as if your life had just begun. - Johann Wolfgang Von Goethe','Eighty percent of success is showing up. - Woody Allen','Those at the top of the mountain didn’t fall there. - Marcus Washling','I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey', 'You must be the change you wish to see in the world. - Mahatma Gandhi','Many of life’s failures are experienced by people who did not realize how close they were to success when they gave up. - Thomas Edison','When ordinary people decide to step out and be part of something big, that’s when they become extraordinary. - Brett Harris',' A hero is someone who has given his or her life to something bigger than oneself. - Joseph Campbell','Impossible is for the unwilling. - John Keats',' You can never cross the ocean until you have the courage to lose sight of the shore. - André Gide',"Don’t judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",'If I cannot do great things, I can do small things in a great way. - Martin Luther King, Jr.','It is never too late to be what you might have been. - George Eliot','There are no shortcuts to any place worth going. - Beverly Sills']
let words = ['Aurora -The dawn in the early morning','Chatoyant - Light reflecting in a gemstone','Demure - Reserved, modest, shy','Effervescent - Lively, full of energy, bubbly','Eloquence - Ability to beautifully express oneself','Mellifluous - Beautifully sounding','Serendipity - A chain of events that occurs in a favorable way','Wherewithal - Strength and tenacity','Zenith - The highest, most successful point of a situation','Quintessence - The most perfect example','Lithe - Slim and full of grace','Ineffable - Difficult to accurately describe','Incendiary - Very hot or inflammatory','Sanguine - Optimistic and positive','Sonorous - A deep and full sound','Syzgy - An alignment of 3 celestial bodies','Wanderlust - A strong desire to travel','Idyllic - Picturesque, beautiful, almost fairytale-like','Euphoria - A state of extreme happiness','Eudaemonia - The state of being lucky']
let funFact = ['American flags left on the moon will eventually get bleached white by the sun','While they are hibernating, bears do not urinate. Their bodies convert waste into protein.','White-faced capuchin monkeys greet each other by sticking their fingers up each others’ noses','The hagfish is the only animal that has a skull but no spine.','People weigh less if they stand at the equator than if they stand at the North or South poles.','The yo-yo was originally a weapon used in the Philippine jungle','The sun weighs 2,000 million million million million tons','Shoes that were specific to left and right were not made until the Civil War.','The Turks call the turkey an “American bird.”','At an average of 15 breaths per minute, we take about 400 million breaths during a lifetime. This is equivalent to about 53 million gallons of air','The shiniest living thing on earth is the Pollia Condensata, an African fruit','The bee hummingbird drinks from up to 1,500 flowers a day.','We throw away enough ribbon each year to tie a bow around the entire Earth.','African lions catch about 20% of the prey they chase. Dragonflies catch 95%','A human loses about a million skin cells per 24 hours.','Rabbits can see behind them without moving their heads.',"Even though the blue whale is the largest animal on earth, it can’t swallow anything bigger than a beach ball",'A moonbow is a rainbow produced by moonlight rather than direct sunlight.','A group of stingrays is called a fever','The plural of cul-de-sac is culs-de-sac']
const counters = [[],[],[]];
const histories = [[],[],[]];

const updateHistory = (history, elementPrefix) =>{
    const historyContainer = document.getElementById(`${elementPrefix}History`);
    historyContainer.innerHTML = '';
    history.forEach((item,index) => {
        const p = document.createElement('p');
        p.id = `${elementPrefix}${index}`;
        p.innerHTML = item;
        historyContainer.appendChild(p);
    });
    }


const message = () =>{
    const randValues = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
    const dataSources = [quotes ,words ,funFact];
    const elementPrefixes = ['quote','word','funFact'];

    randValues.forEach((rand,index) =>{
        while(counters[index].includes(rand)){
            rand = Math.floor(Math.random() * 20);
            if(counters[index].length > 19) {
                counters[index].splice(0, counters[index].length);
            }
        }
        counters[index].push(rand);
        const dailyItem = dataSources[index][rand];
        histories[index].push(dailyItem);
        if(histories[index].length > 19){
            histories[index].splice(0, histories[index].length);
        }
        document.getElementById(elementPrefixes[index]).innerHTML = `${elementPrefixes[index].charAt(0).toUpperCase() + elementPrefixes[index].slice(1)} of the day: ${dailyItem}`;
        updateHistory(histories[index],elementPrefixes[index]);
    })
};