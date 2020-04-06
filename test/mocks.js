/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import data from '../src/data/lol/lol';

const championList = data.data;

export const calcInfo = {
    attack: '6.8',
    defense: '3.7',
    magic: '4.9',
    difficulty: '6.4',
};

export const calcStats = {
    mp: '256.6',
    hp: '560.1',
    armor: '24.4',
};

export const array = [
    championList.Ahri,
    championList.Aatrox,
    championList.Xerath,
];

export const sortedArray = [...array];

export const reversedArray = [
    championList.Xerath,
    championList.Aatrox,
    championList.Ahri,
];

export const dataAsObject = {
    Ahri: championList.Ahri,
    Aatrox: championList.Aatrox,
    Xerath: championList.Xerath,
};

export const championsFilteredByEasy = [
    championList.Amumu,
    championList.Braum,
    championList.Darius,
    championList.Fiora,
    championList.Galio,
    championList.Graves,
    championList.Malphite,
    championList.Maokai,
    championList.MissFortune,
    championList.MonkeyKing,
    championList.Morgana,
    championList.Olaf,
    championList.RekSai,
    championList.Renekton,
    championList.Soraka,
    championList.Taric,
    championList.Varus,
    championList.Volibear,
    championList.Warwick,
    championList.XinZhao,
];

export const championsFilteredByMedium = [
    championList.Aatrox,
    championList.Ahri,
    championList.Annie,
    championList.Ashe,
    championList.Blitzcrank,
    championList.Brand,
    championList.Caitlyn,
    championList.Camille,
    championList.Chogath,
    championList.Corki,
    championList.Diana,
    championList.DrMundo,
    championList.Fizz,
    championList.Garen,
    championList.Gragas,
    championList.Hecarim,
    championList.Illaoi,
    championList.Irelia,
    championList.JarvanIV,
    championList.Jax,
    championList.Jhin,
    championList.Jinx,
    championList.Karma,
    championList.Kennen,
    championList.Khazix,
    championList.Kindred,
    championList.KogMaw,
    championList.LeeSin,
    championList.Leona,
    championList.Lissandra,
    championList.Lucian,
    championList.Lulu,
    championList.Lux,
    championList.Malzahar,
    championList.MasterYi,
    championList.Mordekaiser,
    championList.Nami,
    championList.Nasus,
    championList.Nautilus,
    championList.Nocturne,
    championList.Nunu,
    championList.Pantheon,
    championList.Poppy,
    championList.Quinn,
    championList.Rammus,
    championList.Sejuani,
    championList.Shen,
    championList.Shyvana,
    championList.Singed,
    championList.Sion,
    championList.Sivir,
    championList.Skarner,
    championList.Sona,
    championList.TahmKench,
    championList.Taliyah,
    championList.Teemo,
    championList.Tristana,
    championList.Trundle,
    championList.Tryndamere,
    championList.Twitch,
    championList.Vi,
    championList.Yorick,
    championList.Ziggs,
    championList.Zilean,
];

export const championsFilteredByHard = [
    championList.Akali,
    championList.Alistar,
    championList.Anivia,
    championList.AurelionSol,
    championList.Azir,
    championList.Bard,
    championList.Cassiopeia,
    championList.Draven,
    championList.Ekko,
    championList.Elise,
    championList.Evelynn,
    championList.Ezreal,
    championList.FiddleSticks,
    championList.Gangplank,
    championList.Gnar,
    championList.Heimerdinger,
    championList.Ivern,
    championList.Janna,
    championList.Jayce,
    championList.Kalista,
    championList.Karthus,
    championList.Kassadin,
    championList.Katarina,
    championList.Kayle,
    championList.Kled,
    championList.Leblanc,
    championList.Nidalee,
    championList.Orianna,
    championList.Rengar,
    championList.Riven,
    championList.Rumble,
    championList.Ryze,
    championList.Shaco,
    championList.Swain,
    championList.Syndra,
    championList.Talon,
    championList.Thresh,
    championList.TwistedFate,
    championList.Udyr,
    championList.Urgot,
    championList.Vayne,
    championList.Veigar,
    championList.Velkoz,
    championList.Viktor,
    championList.Vladimir,
    championList.Xerath,
    championList.Yasuo,
    championList.Zac,
    championList.Zed,
    championList.Zyra,
];

export const championsFilteredAssasins = [
    championList.Ahri,
    championList.Akali,
    championList.Ekko,
    championList.Evelynn,
    championList.Fiora,
    championList.Fizz,
    championList.Irelia,
    championList.Jax,
    championList.Jhin,
    championList.Kassadin,
    championList.Katarina,
    championList.Khazix,
    championList.Leblanc,
    championList.LeeSin,
    championList.Malzahar,
    championList.MasterYi,
    championList.Nidalee,
    championList.Nocturne,
    championList.Pantheon,
    championList.Rengar,
    championList.Riven,
    championList.Shaco,
    championList.Talon,
    championList.Teemo,
    championList.Tristana,
    championList.Tryndamere,
    championList.Twitch,
    championList.Vayne,
    championList.Vi,
    championList.Xerath,
    championList.XinZhao,
    championList.Yasuo,
    championList.Zed,
];
export const championsFilteredMages = [
    championList.Ahri,
    championList.Amumu,
    championList.Anivia,
    championList.Annie,
    championList.AurelionSol,
    championList.Azir,
    championList.Bard,
    championList.Brand,
    championList.Cassiopeia,
    championList.Chogath,
    championList.Diana,
    championList.Elise,
    championList.Evelynn,
    championList.Ezreal,
    championList.FiddleSticks,
    championList.Galio,
    championList.Gragas,
    championList.Heimerdinger,
    championList.Ivern,
    championList.Janna,
    championList.Karma,
    championList.Karthus,
    championList.Kassadin,
    championList.Katarina,
    championList.Kennen,
    championList.KogMaw,
    championList.Leblanc,
    championList.Lissandra,
    championList.Lulu,
    championList.Lux,
    championList.Malzahar,
    championList.Maokai,
    championList.Morgana,
    championList.Nami,
    championList.Orianna,
    championList.Rumble,
    championList.Ryze,
    championList.Sona,
    championList.Soraka,
    championList.Swain,
    championList.Syndra,
    championList.Taliyah,
    championList.TwistedFate,
    championList.Varus,
    championList.Veigar,
    championList.Velkoz,
    championList.Viktor,
    championList.Vladimir,
    championList.Xerath,
    championList.Ziggs,
    championList.Zilean,
    championList.Zyra,
];

export const championsFilteredFighters = [
    championList.Aatrox,
    championList.AurelionSol,
    championList.Blitzcrank,
    championList.Camille,
    championList.Darius,
    championList.Diana,
    championList.DrMundo,
    championList.Ekko,
    championList.Elise,
    championList.Fiora,
    championList.Fizz,
    championList.Gangplank,
    championList.Garen,
    championList.Gnar,
    championList.Gragas,
    championList.Hecarim,
    championList.Illaoi,
    championList.Irelia,
    championList.JarvanIV,
    championList.Jax,
    championList.Jayce,
    championList.Kayle,
    championList.Khazix,
    championList.Kled,
    championList.LeeSin,
    championList.Malphite,
    championList.MasterYi,
    championList.MonkeyKing,
    championList.Mordekaiser,
    championList.Nasus,
    championList.Nautilus,
    championList.Nidalee,
    championList.Nocturne,
    championList.Nunu,
    championList.Olaf,
    championList.Pantheon,
    championList.Poppy,
    championList.Quinn,
    championList.Rammus,
    championList.RekSai,
    championList.Renekton,
    championList.Rengar,
    championList.Riven,
    championList.Rumble,
    championList.Ryze,
    championList.Sejuani,
    championList.Shyvana,
    championList.Singed,
    championList.Sion,
    championList.Skarner,
    championList.Swain,
    championList.Talon,
    championList.Taric,
    championList.Thresh,
    championList.Trundle,
    championList.Tryndamere,
    championList.Udyr,
    championList.Urgot,
    championList.Vi,
    championList.Volibear,
    championList.Warwick,
    championList.XinZhao,
    championList.Yasuo,
    championList.Yorick,
    championList.Zac,
    championList.Zed,
];

export const championsFilteredTank = [
    championList.Aatrox,
    championList.Alistar,
    championList.Amumu,
    championList.Blitzcrank,
    championList.Braum,
    championList.Camille,
    championList.Chogath,
    championList.Darius,
    championList.DrMundo,
    championList.Galio,
    championList.Garen,
    championList.Gnar,
    championList.Hecarim,
    championList.Illaoi,
    championList.JarvanIV,
    championList.Kled,
    championList.Leona,
    championList.Malphite,
    championList.Maokai,
    championList.MonkeyKing,
    championList.Nasus,
    championList.Nautilus,
    championList.Olaf,
    championList.Poppy,
    championList.Rammus,
    championList.Renekton,
    championList.Sejuani,
    championList.Shen,
    championList.Shyvana,
    championList.Singed,
    championList.Sion,
    championList.Skarner,
    championList.TahmKench,
    championList.Trundle,
    championList.Udyr,
    championList.Vladimir,
    championList.Volibear,
    championList.Warwick,
    championList.Yorick,
    championList.Zac,
];
export const championsFilteredSupport = [
    championList.Alistar,
    championList.Anivia,
    championList.Ashe,
    championList.Bard,
    championList.Braum,
    championList.FiddleSticks,
    championList.Heimerdinger,
    championList.Ivern,
    championList.Janna,
    championList.Karma,
    championList.Kayle,
    championList.Leona,
    championList.Lulu,
    championList.Lux,
    championList.Morgana,
    championList.Nami,
    championList.Nunu,
    championList.Orianna,
    championList.Sona,
    championList.Soraka,
    championList.Syndra,
    championList.TahmKench,
    championList.Taliyah,
    championList.Taric,
    championList.Thresh,
    championList.Zilean,
    championList.Zyra,
];

export const championsFilteredMarskman = [
    championList.Ashe,
    championList.Azir,
    championList.Caitlyn,
    championList.Corki,
    championList.Draven,
    championList.Ezreal,
    championList.Graves,
    championList.Jayce,
    championList.Jhin,
    championList.Jinx,
    championList.Kalista,
    championList.Kennen,
    championList.Kindred,
    championList.KogMaw,
    championList.Lucian,
    championList.MissFortune,
    championList.Quinn,
    championList.Sivir,
    championList.Teemo,
    championList.Tristana,
    championList.Twitch,
    championList.Urgot,
    championList.Varus,
    championList.Vayne,
];