const express = require("express");
const app = express();
const port = 5000;

app.use(express.json())

let counter=58
let  arr = [
  {
    id: 1,
    image:
      "https://bravomarket.online/upload/iblock/699/699c4a879b8548930aba2aed03da68ba.jpg",
    type: "un",
    name: "bismak",
    rating: "10/2",
    color: "redred",
    weight: "100q",
    price: 22,
  },
  {
    id: 2,
    image:
      "https://bazarstore.az/cdn/shop/files/23b5bfc1e852e3bda18010ab77a7a7b1_550x550.jpg?v=1698232680",
    type: "yag",
    name: "final",
    rating: "10/2",
    color: "red",
    weight: "100q",
    price: 16,
  },
  {
    id: 3,
    image: "https://beta.az/wp-content/uploads/2017/01/11.png",
    type: "cay",
    name: "beta",
    rating: "10/2",
    color: "red",
    weight: "100q",
    price: 12,
  },
  {
    id: 4,
    image:
      "https://bazarstore.az/cdn/shop/products/30007588_b14fcc9a-3a5a-46ac-be6a-a6114b332c0e.jpg?v=1693467843",
    type: "konfer",
    name: "roshen",
    rating: "10/2",
    color: "red",
    weight: "100q",
    price: 9,
  },
  {
    id: 5,
    image:
      "https://www.bama.no/siteassets/fotoware/2023/9/bendit_bananklase-2_bama.jpg",
    type: "banan",
    name: "bendit",
    rating: "10/2",
    color: "red",
    weight: "100q",
    price: 17,
  },
  {
    id: 6,
    image:
      "https://static.insales-cdn.com/images/products/1/6733/447576653/201.jpg",
    type: "qazlı içki",
    name: "pepsi",
    rating: "10/2",
    color: "red",
    weight: "100q",
    price: 15,
  },
  {
    id: 7,
    image: "https://www.driply.sk/assets/images/2022/orbit-spearmint.png",
    type: "sakqız",
    name: "orbit",
    rating: "10/2",
    color: "red",
    weight: "40q",
    price: 5,
  },
  {
    id: 8,
    image:
      "https://bazarstore.az/cdn/shop/products/f57435377c4146fc8f5a6af809fc0e36.jpg?v=1693609182",
    type: "cips",
    name: "lays",
    rating: "10/2",
    color: "red",
    weight: "40q",
    price: 10,
  },
  {
    id: 9,
    image:
      "https://mygoodness.com.au/wp-content/uploads/2021/05/MG_Coca-cola-1-25lt.jpg",
    type: "qazlı içki",
    name: "cola",
    rating: "10/2",
    color: "red",
    weight: "40q",
    price: 12,
  },
  {
    id: 10,
    image:
      "https://static.insales-cdn.com/images/products/1/970/447570890/unnamed-1.jpg",
    type: "qazlı içki",
    name: "fanta",
    rating: "10/2",
    color: "red",
    weight: "40q",
    price: 10,
  },
  {
    id: 11,
    image:
      "https://marsoverseas.az/wp-content/uploads/2022/02/Doritos-Taco-edviyyatli.jpg",
    type: "cips",
    name: "doritos",
    rating: "10/2",
    color: "blue",
    weight: "40q",
    price: 15,
  },
  {
    id: 12,
    image:
      "https://bazarstore.az/cdn/shop/products/30107836_e5afc63b-eaa8-45d7-9118-70579300257c.png?v=1693900588",
    type: "toyuq",
    name: "mərcan",
    rating: "10/2",
    color: "blue",
    weight: "40q",
    price: 11,
  },
  {
    id: 13,
    image: "https://bazarstore.az/cdn/shop/products/30105192.png?v=1693396375",
    type: "kolbasa",
    name: "payım ",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 10,
  },
  {
    id: 14,
    image:
      "https://bazarstore.az/cdn/shop/products/f57435377c4146fc8f5a6af809fc0e36.jpg?v=1693609182",
    type: "cips",
    name: "lays",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 10,
  },
  {
    id: 15,
    image:
      "https://ibox.ams3.digitaloceanspaces.com/products/8/2022/Avqust/630bb4f9d5ff9002b459a3310a45ecf7692caeda22585.png",
    type: "makaron",
    name: "ankara",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 10,
  },
  {
    id: 16,
    image:
      "https://www.antaris.az/wp-content/uploads/2020/04/AN-00-00000819-S%C3%BCd-1lt-1.5-Az%C9%99r-S%C3%BCd.jpg",
    type: "süd",
    name: "azərsüd",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 14,
  },
  {
    id: 17,
    image:
      "https://www.antaris.az/wp-content/uploads/2020/04/AN-00-00000819-S%C3%BCd-1lt-1.5-Az%C9%99r-S%C3%BCd.jpg",
    type: "qatıq",
    name: "atena",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 10,
  },
  {
    id: 18,
    image:
      "https://ibox.ams3.digitaloceanspaces.com/products/1/2022/Aprel/4760144900012.jpg",
    type: "çörək",
    name: "binə",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 4,
  },
  {
    id: 19,
    image: "https://uk.foodplus.eu/userdata/public/gfx/21387/6038.png",
    type: "kofe",
    name: "nescafe",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 12,
  },
  {
    id: 20,
    image:
      "https://static.insales-cdn.com/images/products/1/4859/515658491/medium_merci_4014400917956_images_9233465465-772x529.jpg",
    type: "şokolat",
    name: "merci",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 100,
  },
  {
    id: 21,
    image:
      "https://bazarstore.az/cdn/shop/files/6babace8dcbe154b25acbe8637709d1b.jpg?v=1697532228",
    type: "mürəbbə",
    name: "bizim tarla",
    rating: "10/7",
    color: "blue",
    weight: "100kq",
    price: 10,
  },
  {
    id: 22,
    image:
      "https://bazarstore.az/cdn/shop/products/f57435377c4146fc8f5a6af809fc0e36.jpg?v=1693609182",
    type: "cips",
    name: "lays",
    rating: "10/7",
    color: "blue",
    weight: "140q",
    price: 10,
  },
  {
    id: 23,
    image:
      "https://www.coca-cola.com/content/dam/onexp/az/az/product-images/bonaqua-still_product_image.png",
    type: "su",
    name: "bonaqua",
    rating: "10/7",
    color: "blue",
    weight: "140q",
    price: 10,
  },
  {
    id: 24,
    image:
      "https://bazarstore.az/cdn/shop/products/30005516_550x550.jpg?v=1693743139",
    type: "uşaq yemeyi",
    name: "cicbebe",
    rating: "10/7",
    color: "blue",
    weight: "140q",
    price: 12,
  },
  {
    id: 25,
    image:
      "https://bazarstore.az/cdn/shop/products/f57435377c4146fc8f5a6af809fc0e36.jpg?v=1693609182",
    type: "cips",
    name: "lays",
    rating: "10/3",
    color: "blue",
    weight: "140q",
    price: 10,
  },
  {
    id: 26,
    image:
      "https://bazarstore.az/cdn/shop/files/550f7c76bce252b14810e3ff18e7fc96.jpg?v=1698218141",
    type: "yumurta",
    name: "kənd",
    rating: "10/3",
    color: "blue",
    weight: "140q",
    price: 2,
  },
  {
    id: 27,
    image:
      "https://milla.az/uploads/posts/2021-10/medium/1635318908_pendir-250-ml.png",
    type: "pendir",
    name: "milla",
    rating: "10/3",
    color: "blue",
    weight: "140q",
    price: 12,
  },
  {
    id: 28,
    image:
      "https://percdn.com/f/493779/cG96WmFtNG0vcUp3ZUdFOVU1NG5hQT09/p/segmen-suzme-cicek-bali-kavanoz-220g-142725042-sw900sh1200.webp",
    type: "bal",
    name: "seğmen",
    rating: "10/3",
    color: "blue",
    weight: "140q",
    price: 10,
  },
  {
    id: 29,
    image:
      "https://www.iceland.az/sites/default/files/2018-10/icelandvafliVan_0.png",
    type: "dondurma",
    name: "iceland",
    rating: "10/3",
    color: "blue",
    weight: "140q",
    price: 4,
  },
  {
    id: 30,
    image:
      "https://static.wixstatic.com/media/129c2d_61d1b3d5cc7d47d0b537dcf478fb8438~mv2.png/v1/fill/w_480,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/129c2d_61d1b3d5cc7d47d0b537dcf478fb8438~mv2.png",
    type: "yoqurt",
    name: "danino",
    rating: "10/3",
    color: "blue",
    weight: "140q",
    price: 12,
  },
  {
    id: 31,
    image:
      "https://bazarstore.az/cdn/shop/products/30106255_69e8f0dd-22fd-4d80-a617-99c35b5b8869.jpg?v=1693629989",
    type: "meyvə",
    name: "alma",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 11,
  },
  {
    id: 32,
    image: "https://img.milli.az/2018/03/29/637287.jpg",
    type: "meyvə",
    name: "naringi",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 10,
  },
  {
    id: 33,
    image:
      "https://bazarstore.az/cdn/shop/products/30073486_6dac4c3a-596b-418d-8d9f-2f54c0847fcd.jpg?v=1693483085",
    type: "meyvə",
    name: "armud",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 6,
  },
  {
    id: 34,
    image:
      "https://strgimgr.umico.az/sized/1680/124210-8b11652c57cbb29d1c9ca84f71d3d990.jpg",
    type: "qarabaşaq",
    name: "richmond",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 12,
  },
  {
    id: 35,
    image: "https://bazarstore.az/cdn/shop/products/30119136.jpg?v=1693811690",
    type: "bulgur",
    name: "reis",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 14,
  },
  {
    id: 36,
    image:
      "https://ibox.ams3.digitaloceanspaces.com/products/1/2022/Sentyabr/631c732bec6f0d99d4454cf8a0779de5e24969e58f895.png",
    type: "meyvə suyu",
    name: " bahar",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 15,
  },
  {
    id: 37,
    image:
      "https://strgimgr.umico.az/sized/840/142722-a2ef2c68380d6a53cc00cb41cb7ba3cf.jpg",
    type: "duz",
    name: "azərduz",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 3,
  },
  {
    id: 38,
    image:
      "https://ibox.ams3.digitaloceanspaces.com/products/1/2022/Sentyabr/632990b2730681f87769ea1b9f26f656cafda86964313.jpg",
    type: "vafli",
    name: "hoşbeş",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 12,
  },
  {
    id: 39,
    image:
      "https://bravomarket.online/upload/iblock/c65/c658442b3a9d30cccdc1ebad1289ff82.jpg",
    type: "keks",
    name: "popkek",
    rating: "10/3",
    color: "gold",
    weight: "243q",
    price: 12,
  },
  {
    id: 40,
    image:
      "https://iis-akakce.akamaized.net/p.z?%2F%2Fkapida%2Eakinoncdn%2Ecom%2Fproducts%2F2020%2F04%2F12%2F14360%2F45762ae6%2D7fba%2D4e51%2Dbd85%2D9f45878b1cd1%2Ejpg",
    type: "lavaş",
    name: "nimet",
    rating: "10/9",
    color: "gold",
    weight: "243q",
    price: 12,
  },
  {
    id: 41,
    image:
      "https://bravomarket.online/upload/iblock/888/8882c8692333aec9e3b43a600e0011e7.jpg",
    type: "keks",
    name: "adikto",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 14,
  },
  {
    id: 42,
    image:
      "https://bravomarket.online/upload/iblock/739/739ea469ee1ecc46e91800dfa4f57e36.jpg",
    type: "qazlı içki",
    name: "nataktari",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 16,
  },
  {
    id: 43,
    image:
      "https://avrora.az/upload/Image/brands/brands_gallery/e4f9659ec5b34cf89967350e18ba17f71665038271-photo.png",
    type: "enerji içki",
    name: "bizon",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 12,
  },
  {
    id: 44,
    image:
      "https://bazarstore.az/cdn/shop/products/30002615_b9445af8-6d26-4d79-8e42-5e171456d7b9.jpg?v=1693551954",
    type: "kukuruz",
    name: "kuzya",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 14,
  },
  {
    id: 45,
    image:
      "https://bravomarket.online/upload/iblock/180/1808d89f5717e08ab38727b66479400f.jpg",
    type: "semiçqa",
    name: "çiko",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 12,
  },
  {
    id: 46,
    image:
      "https://neptun.az/image/cache/catalog/Brands/54534534534534534534354-1000x1000.jpg?v=9",
    type: "salfet",
    name: "sun",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 15,
  },
  {
    id: 47,
    image:
      "https://strgimgr.umico.az/sized/840/540821-b786157fb6eab94c30f3dafdf977227f.jpg",
    type: "pendir",
    name: " 1000bereket",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 12,
  },
  {
    id: 48,
    image:
      "https://bazarstore.az/cdn/shop/products/30033599_ab6b7c15-8e9f-415a-80d8-59c51f072002.jpg?v=1693295718",
    type: "şirniyyat",
    name: "tutqu",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 12,
  },
  {
    id: 49,
    image:
      "https://eurofoodhub.com/cdn/shop/products/LokumRosePetals10_1800x2700.jpg?v=1644097657",
    type: "lokum",
    name: "zahari",
    rating: "10/9",
    color: "gold",
    weight: "1kq",
    price: 11,
  },
  {
    id: 50,
    image:
      "https://bazarstore.az/cdn/shop/products/30125915_ceec8faf-d5bd-44eb-a2fb-65686944707d_767x1000.jpg?v=1693583839",
    type: "şirniyyat",
    name: "qaraca",
    rating: "10/10",
    color: "green",
    weight: "1kq",
    price: 17,
  },
  {
    id: 51,
    image:
      "https://images.ctfassets.net/toytjhguj5jr/6EeeBlSWqKKrMJdyDpyvDO/617e56d8cf3976c160a81e15f6bef1fc/file.png?fm=webp&q=75",
    type: "diş fırçası",
    name: "oral-b",
    rating: "10/10",
    color: "green",
    weight: "1kq",
    price: 140,
  },
  {
    id: 52,
    image:
      "https://strgimgr.umico.az/sized/840/549946-25ed597bfa131b90f7916c3731648c7d.jpg",
    type: "ketçub",
    name: "bizim süfrə",
    rating: "10/10",
    color: "green",
    weight: "1kq",
    price: 16,
  },
  {
    id: 53,
    image: "https://bizimtarla.az/file/product/a8a4ff1b3d8f452.png",
    type: "turşu",
    name: "bizim tarla",
    rating: "10/10",
    color: "green",
    weight: "1kq",
    price: 11,
  },
  {
    id: 54,
    image: "https://unimall.az/images/detailed/182/64_6vmb-lx.jpg",
    type: "konserva",
    name: "mal əti",
    rating: "10/10",
    color: "green",
    weight: "1kq",
    price: 16,
  },
  {
    id: 55,
    image:
      "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/en-my/product-detail-pages/toothpaste/colgate-mcp-fresh-cool-thumb.jpg",
    type: "diş məcunu",
    name: "kolgate",
    rating: "10/10",
    color: "green",
    weight: "1kq",
    price: 130,
  },
  {
    id: 56,
    image:
      "https://assets.wakefern.com/is/image/wakefern/980089220-009?$Mi9Product_detail$",
    type: "şaqalat yağı",
    name: "nutella",
    rating: "10/10",
    color: "green",
    weight: "1kq",
    price: 12,
  },
  {
    id: 56,
    image: "https://bazarstore.az/cdn/shop/products/30184953.png?v=1693742462",
    type: "moyanez",
    name: "meçta",
    rating: "10/10",
    color: "green",
    weight: "2kq",
    price: 15,
  },
  {
    id: 57,
    image:
      "https://bravomarket.online/upload/iblock/110/110c77c37977d53f0dd9d6fcb0c73f85.jpg",
    type: "pendir",
    name: "yantar",
    rating: "10/10",
    color: "green",
    weight: "2kq",
    price: 15,
  },
];

// ---------------get-------------------

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const item = arr.find((x) => x.id === +id);
  res.send(item);
});

// ---------------delete-------------------

app.delete("/:id", (req, res) => {
    const { id } = req.params;
    const userId = arr.find((x) => x.id === +id);
    if (userId) {
        const deleteUser=arr.filter(x=>x.id !== +id)
        res.send(deleteUser);
    }
});

// ---------------post-------------------
app.post("/", (req, res) => {
    const newObj={
        id:counter++,
        type:req.body.type,
        name:req.body.name,
        color:req.body.color
    }
    console.log(req.body);
    arr.push(newObj)
    res.send(arr)
});   


// ---------------put-------------------
app.put("/:id", (req, res) => {
    const { id } = req.params;
     arr = arr.filter((x) => x.id !== +id);
    const updateObj={
        id:+id,
        type:req.body.type,
        name:req.body.name,
        color:req.body.color
    }
    arr.push(updateObj)
    arr.sort((a,b)=>a.id-b.id)
    res.send(arr);
  });






app.get("/", (req, res) => {
  res.send(arr);
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
