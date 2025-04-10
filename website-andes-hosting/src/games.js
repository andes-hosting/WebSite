import minecraft from "../src/img/minecraft_logo.png";
import ark from "../src/img/ark_logo.png";
import palworld from "../src/img/palworld_logo.png";

const games = {
    minecraft: {
        logo: <img src={minecraft} alt="Minecraft logo" />,
        plans: [
            { name: 'BEDROCK', ram: "1", price: { CLP: 2000, USD: 2 }, storage: 4, recomendedPlyers: 6, prominent: false, game: 'Minecraft' },
            { name: 'JAVA VANILLA', ram: "2", price: { CLP: 4000, USD: 4 }, storage: 4, recomendedPlyers: 5, prominent: true, game: 'Minecraft' },
            { name: 'CON MODS', ram: "5", price: { CLP: 9450, USD: 10 }, storage: 6, recomendedPlyers: 4, prominent: false, game: 'Minecraft' },
            { name: 'PERSONALIZADO', ram: '', price: { CLP: '', USD: '' }, storage: '∞', recomendedPlyers: '∞', prominent: false, game: 'Minecraft' },
        ]
    },

    ark: {
        logo: <img src={ark} alt="Ark logo" />,
        plans: [
            { name: 'BRONCE', ram: "13", price: { CLP: 19500, USD: 20 }, storage: 4, recomendedPlyers: 4, prominent: false, game: 'ARK' },
            { name: 'PLATA', ram: "15", price: { CLP: 22900, USD: 24 }, storage: 8, recomendedPlyers: 10, prominent: true, game: 'ARK' },
            { name: 'ORO', ram: "20", price: { CLP: 29100, USD: 30 }, storage: 10, recomendedPlyers: 19, prominent: false, game: 'ARK' },
            { name: 'PERSONALIZADO', ram: '', price: { CLP: '', USD: '' }, storage: '∞', recomendedPlyers: '∞', prominent: false, game: 'ARK' },
        ]
    },

    palworld: {
        logo: <img src={palworld} alt="Palworld logo" />,
        plans: [
            { name: 'BRONCE', ram: "3", price: { CLP: 4000, USD: 4 }, storage: 4, recomendedPlyers: 4, prominent: false, game: 'Palworld' },
            { name: 'PLATA', ram: "4", price: { CLP: 6000, USD: 6 }, storage: 8, recomendedPlyers: 6, prominent: true, game: 'Palworld' },
            { name: 'ORO', ram: "8", price: { CLP: 13000, USD: 13 }, storage: 12, recomendedPlyers: 10, prominent: false, game: 'Palworld' },
            { name: 'PERSONALIZADO', ram: '', price: { CLP: '', USD: '' }, storage: '∞', recomendedPlyers: '∞', prominent: false, game: 'Palworld' },
        ]
    },
};

export default games;