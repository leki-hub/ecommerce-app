import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf} from "react-icons/bi";
const storeProducts = [
  {
    image: "https://m.media-amazon.com/images/I/51YBW9gwB+L._AC_UX569_.jpg",
    title: "Men's Casual Blazer",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(842 reviews)",
    oldPrice: "$140,00",
    newPrice: "200",
    company: "Suits",
    color: "white",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/917rA6JbA2L._AC_UX679_.jpg",
    title: "Men's 2 Piece Velvet",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(859 reviews)",
    oldPrice: "$240,00",
    newPrice: "200",
    company: "Suits",
    color: "red",
    category: "wool",
  },

  {
    image: "https://m.media-amazon.com/images/I/91PNupT78eL._AC_UX522_.jpg",
    title: "Urban Coco Women's Jacket",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(875 reviews)",
    oldPrice: "$180,00",
    newPrice: "200",
    company: "Suits",
    color: "green",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/81XcCw8rTSL._AC_UY675_.jpg",
    title: " Legacy East West Tote",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(725 reviews)",
    oldPrice: "$175,00",
    newPrice: "200",
    company: "Bags",
    color: "black",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/71DKRSQgSXL._AC_UX679_.jpg",
    title: "Genuine Leather Cap",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(532 reviews)",
    oldPrice: "$140,00",
    newPrice: "200",
    company: "Caps",
    color: "green",
    category: "leather",
  },
  {
    image: "https://m.media-amazon.com/images/I/810HKcvO9oL._AC_UX679_.jpg",
    title: "Oak Leather Bag",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(734 reviews)",
    oldPrice: "$140,00",
    newPrice: "60",
    company: "Bags",
    color: "black",
    category: "leather",
  },

  {
    image: "https://m.media-amazon.com/images/I/71A65evzvML._AC_UX679_.jpg",
    title: "Suede Leather  Cap",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(576 reviews)",
    oldPrice: "$140,00",
    newPrice: "60",
    company: "Caps",
    color: "white",
    category: "leather",
  },

  {
    image: "https://m.media-amazon.com/images/I/61A+tHbO99L._AC_UX569_.jpg",
    title: "Belle Poque Waistcoat",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(812 reviews)",
    oldPrice: "$140,00",
    newPrice: "200",
    company: "Suits",
    color: "green",
    category: "wool",
  },

  {
    image: "https://m.media-amazon.com/images/I/61R3ojYjJ7L._AC_UY675_.jpg",
    title: "Mucros Weavers Celtic",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(762 reviews)",
    oldPrice: "$140,00",
    newPrice: "200",
    company: "Bags",
    color: "blue",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/715k+y6BcFL._AC_SX300_SY300_.jpg",
    title: "Messenger Bag Satchel",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(762 reviews)",
    oldPrice: "$140,00",
    newPrice: "200",
    company: "Bags",
    color: "red",
    category: "leather",
  },

  {
    image: "https://m.media-amazon.com/images/I/71AApGWoVhL._AC_UX675_.jpg",
    title: "Women's Neumel Fashion Boot",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(680 reviews)",
    oldPrice: "$140,00",
    newPrice: "150",
    company: "Shoes",
    color: "green",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/81jKIqg6ZcL._AC_UX675_.jpg",
    title: "Emboss Wool Boots",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(687 reviews)",
    oldPrice: "$140,00",
    newPrice: "150",
    company: "Shoes",
    color: "red",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/61hnzigIBFL._AC_UX675_.jpg",
    title: " Mens Laight Shoes",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(675 reviews)",
    oldPrice: "$140,00",
    newPrice: "150",
    company: "Shoes",
    color: "black",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/61o9nUeF9RL._AC_UY675_.jpg",
    title: "Casual Running Shoes",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(693 reviews)",
    oldPrice: "$140,00",
    newPrice: "150",
    company: "Shoes",
    color: "white",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/613EpMRrrPL._AC_UY675_.jpg",
    title: "La Milano Mens Leather",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(667 reviews)",
    oldPrice: "$140,00",
    newPrice: "150",
    company: "Shoes",
    color: "black",
    category: "leather",
  },

  {
    image: "https://m.media-amazon.com/images/I/51y+O+ukp1L._AC_UX675_.jpg",
    title: "Vivobarefoot Magna",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(698 reviews)",
    oldPrice: "$140,00",
    newPrice: "100",
    company: "Shoes",
    color: "green",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/71HINHRVxNL._AC_UX679_.jpg",
    title: "Real Nappa Leather Cap",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(537 reviews)",
    oldPrice: "$140,00",
    newPrice: "100",
    company: "Caps",
    color: "red",
    category: "wool",
  },
  {
    image: "https://m.media-amazon.com/images/I/71PephpkG9L._AC_UX679_.jpg",
    title: "Falari Classic Baseball Cap",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(552 reviews)",
    oldPrice: "$140,00",
    newPrice: "100",
    company: "Caps",
    color: "white",
    category: "cotton",
  },
  {
    image: "https://m.media-amazon.com/images/I/810aZ3dL0-L._AC_UX679_.jpg",
    title: "Vintage Cotton Cap",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(588 reviews)",
    oldPrice: "$140,00",
    newPrice: "100",
    company: "Caps",
    color: "blue",
    category: "cotton",
  },
  {
    image: "https://m.media-amazon.com/images/I/51qgVpxH92L._AC_UX569_.jpg",
    title: "Mens Cotton Blazer",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(892 reviews)",
    oldPrice:"$100,00",
    newPrice: "60",
    company: "Suits",
    color: "black",
    category: "cotton",
  },
  {
    image: "https://m.media-amazon.com/images/I/419EVLPnObL._AC_.jpg",
    title: "Print Baseball Cap Men",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(561 reviews)",
    oldPrice: "$140,00",
    newPrice: "60",
    company: "Caps",
    color: "black",
    category: "silk",
  },
  {
    image: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(650 reviews)",
    oldPrice: "$140,00",
    newPrice: "100",
    company: "Shoes",
    color: "black",
    category: "silk",
  },
  {
    image: "https://m.media-amazon.com/images/I/81cwQVpzPmL._AC_UX679_.jpg",
    title: "Tailored Collar Suit",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(894 reviews)",
    oldPrice: "$140,00",
    newPrice: "150",
    company: "Suits",
    color: "red",
    category: "silk",
  },
  {
    image: "https://m.media-amazon.com/images/I/71Ll3HDB1NL._AC_SX522._SX._UX._SY._UY_.jpg",
    title: "Faux Suede Leather",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(883 reviews)",
    oldPrice: "$140,00",
    newPrice: "200",
    company: "Suits",
    color: "red",
    category: "leather",
  },

  {
    image: "https://m.media-amazon.com/images/I/518LuN6CF9L._AC_UX522_.jpg",
    title: "Belle Poque Vintage",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(871 reviews)",
    oldPrice:"$140,00",
    newPrice: "200",
    company: "Suits",
    color: "green",
    category: "silk",
  },
  {
    image: "https://m.media-amazon.com/images/I/61M-xgingxL._AC_SX679_.jpg",
    title: "Canvas Tote Bag",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(740 reviews)",
    oldPrice: "$140,00",
    newPrice: "60",
    company: "Bags",
    color: "black",
    category: "silk",
  },
  {
    image: "https://m.media-amazon.com/images/I/51-mWOvgl0L._AC_SX679_.jpg",
    title: "Silk travel bags",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(730 reviews)",
    oldPrice: "$140,00",
    newPrice: "150",
    company: "Bags",
    color: "white",
    category: "silk",
  },
  {
    image: "https://m.media-amazon.com/images/I/319i3YKkHrL._AC_.jpg",
    title: "Black Velvet Bag",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(763 reviews)",
    oldPrice: "$140,00",
    newPrice: "60",
    company: "Bags",
    color: "black",
    category: "silk",
  },
  {
    image: "https://m.media-amazon.com/images/I/61mEW4-o9kL._AC_SX679_.jpg",
    title: "Velvet Gift Bags",
    star: <AiFillStar className="rating" />,
    starHalf:<BiSolidStarHalf />,
    reviews: "(734 reviews)",
    oldPrice: "$140,00",
    newPrice: "60",
    company: "Bags",
    color: "green",
    category: "silk",
  },
];

export default storeProducts;