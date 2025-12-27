import Chanel from '../assets/xnr-hero.webp'
import Lv from '../assets/lv-hero.webp'
import Ysl from '../assets/ysl-hero.png'
import Gucci from '../assets/gucci-hero.webp'
import Dior from '../assets/dior-hero.webp'
import Prada from '../assets/parda-hero.jpg'
import Moncler from '../assets/mk-hero.webp'



export const BRANDS = [
  {
    id: 'chanel',
    name: 'CHANEL',
    description: <>A tribute to craftsmanship,<br />where heritage meets the present.<br />Timeless elegance, reimagined.</>,
    image: Chanel,
    loading: "eager",
    btnText: '→To Chanel',
    
  },
  {
    id: 'lv',
    name: 'LOUIS VUITTON',
    description: <>Travel becomes an attitude.<br />Freedom, movement, and modern luxury<br />shaped by a new generation.<br />Pharrell Williams</>,
    image: Lv,
    loading: "eager",
    btnText: '→To Louis Vuitton'
  },
  {
    id: 'dior',
    name: 'DIOR',
    description: <>A delicate balance between structure and emotion.<br />Classic codes, softened by modern femininity.</>,
    image: Dior,
    loading: "lazy",
    btnText: '→To Dior'
  },
  {
    id: 'gucci',
    name: 'GUCCI',
    description: <>Baroque nostalgia meets contemporary elegance.<br />A bold expression of individuality and romance.</>,
    image: Gucci,
    loading: "lazy",
    btnText: '→To GUCCI'
  },
  {
    id: 'prada',
    name: 'PRADA',
    description: <>Minimal form, radical spirit.<br />Function redefined as modern luxury.</>,
    image: Prada,
    loading: "lazy",
    btnText: '→To PRADA'
  },
  {
    id: 'ysl',
    name: 'YVES SAINT LAURENT',
    description: <>Sharp silhouettes.<br />Pure attitude.<br />Black, as a statement of power.</>,
    image: Ysl,
    loading: "lazy",
    btnText: '→To YVES SAINT LAURENT'
  },
  {
    id: 'moncler',
    name: 'MONCLER',
    description: <>Technical elegance.<br />Alpine heritage.<br />Luxury shaped by performance.</>,
    image: Moncler,
    loading: "lazy",
    btnText: '→To MONCLER'
  },
  
];