import faker from "faker";

import CarBg from "stories/assets/bg-car.jpg";

//TODO: check why this is not working
// import products from "./fixtures/products.json";

const products = [
  {
    id: 1,
    image: "",
    title: "Rustic Steel Car",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "nisi-id-temporibus",
  },
  {
    id: 2,
    image: "",
    title: "Practical Fresh Car",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "atque-quam-repellat",
  },
  {
    id: 3,
    image: "",
    title: "Gorgeous Concrete Computer",
    summary:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    slang: "qui-perspiciatis-perspiciatis",
  },
  {
    id: 4,
    image: "",
    title: "Tasty Frozen Hat",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "ut-maxime-sint",
  },
  {
    id: 5,
    image: "",
    title: "Ergonomic Fresh Mouse",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "sed-dolores-ratione",
  },
  {
    id: 6,
    image: "",
    title: "Awesome Metal Cheese",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "nobis-et-perspiciatis",
  },
  {
    id: 7,
    image: "",
    title: "Intelligent Wooden Soap",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "optio-qui-explicabo",
  },
  {
    id: 8,
    image: "",
    title: "Unbranded Rubber Shirt",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "beatae-sit-sequi",
  },
  {
    id: 9,
    image: "",
    title: "Handcrafted Plastic Car",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "dolore-veniam-beatae",
  },
  {
    id: 10,
    image: "",
    title: "Rustic Rubber Bike",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "est-blanditiis-saepe",
  },
  {
    id: 11,
    image: "",
    title: "Unbranded Frozen Soap",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "voluptatum-ut-et",
  },
  {
    id: 12,
    image: "",
    title: "Handcrafted Metal Computer",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "tempore-dolor-dicta",
  },
  {
    id: 13,
    image: "",
    title: "Generic Plastic Sausages",
    summary:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    slang: "molestiae-natus-temporibus",
  },
  {
    id: 14,
    image: "",
    title: "Rustic Soft Computer",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "ullam-occaecati-voluptatum",
  },
  {
    id: 15,
    image: "",
    title: "Ergonomic Wooden Tuna",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "optio-cumque-qui",
  },
  {
    id: 16,
    image: "",
    title: "Unbranded Plastic Chicken",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "quae-velit-voluptate",
  },
  {
    id: 17,
    image: "",
    title: "Refined Granite Chair",
    summary:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    slang: "cum-unde-reprehenderit",
  },
  {
    id: 18,
    image: "",
    title: "Gorgeous Rubber Car",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "et-aliquid-sapiente",
  },
  {
    id: 19,
    image: "",
    title: "Tasty Fresh Hat",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "est-numquam-dolor",
  },
  {
    id: 20,
    image: "",
    title: "Tasty Wooden Hat",
    summary:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    slang: "dolores-veniam-alias",
  },
  {
    id: 21,
    image: "",
    title: "Intelligent Granite Soap",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "facere-corrupti-aut",
  },
  {
    id: 22,
    image: "",
    title: "Handcrafted Rubber Bacon",
    summary:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    slang: "dolorem-perferendis-in",
  },
  {
    id: 23,
    image: "",
    title: "Sleek Plastic Shoes",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "sunt-similique-ipsam",
  },
  {
    id: 24,
    image: "",
    title: "Refined Concrete Fish",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "et-odio-non",
  },
  {
    id: 25,
    image: "",
    title: "Tasty Granite Cheese",
    summary:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    slang: "quis-fuga-quam",
  },
  {
    id: 26,
    image: "",
    title: "Practical Metal Chicken",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "error-repudiandae-voluptatem",
  },
  {
    id: 27,
    image: "",
    title: "Intelligent Plastic Bike",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "odio-blanditiis-illo",
  },
  {
    id: 28,
    image: "",
    title: "Handmade Cotton Shoes",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "temporibus-enim-minus",
  },
  {
    id: 29,
    image: "",
    title: "Awesome Fresh Fish",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "modi-delectus-quasi",
  },
  {
    id: 30,
    image: "",
    title: "Rustic Wooden Gloves",
    summary:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    slang: "cum-aut-expedita",
  },
  {
    id: 31,
    image: "",
    title: "Rustic Metal Sausages",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "itaque-sed-itaque",
  },
  {
    id: 32,
    image: "",
    title: "Incredible Steel Bike",
    summary:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    slang: "quia-est-dolor",
  },
  {
    id: 33,
    image: "",
    title: "Practical Rubber Gloves",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "voluptatem-rerum-dignissimos",
  },
  {
    id: 34,
    image: "",
    title: "Ergonomic Granite Salad",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "ea-ratione-et",
  },
  {
    id: 35,
    image: "",
    title: "Handmade Plastic Soap",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "sed-voluptatem-velit",
  },
  {
    id: 36,
    image: "",
    title: "Tasty Rubber Tuna",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "natus-pariatur-magnam",
  },
  {
    id: 37,
    image: "",
    title: "Ergonomic Steel Shoes",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "quo-quas-quas",
  },
  {
    id: 38,
    image: "",
    title: "Licensed Cotton Car",
    summary:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    slang: "inventore-architecto-qui",
  },
  {
    id: 39,
    image: "",
    title: "Handcrafted Plastic Chair",
    summary:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    slang: "ut-vel-nam",
  },
  {
    id: 40,
    image: "",
    title: "Small Cotton Salad",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "dolor-molestiae-quos",
  },
  {
    id: 41,
    image: "",
    title: "Rustic Frozen Keyboard",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "hic-eos-aliquid",
  },
  {
    id: 42,
    image: "",
    title: "Unbranded Metal Salad",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "enim-quo-sequi",
  },
  {
    id: 43,
    image: "",
    title: "Intelligent Plastic Gloves",
    summary:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    slang: "aliquam-ea-est",
  },
  {
    id: 44,
    image: "",
    title: "Handcrafted Concrete Pants",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "impedit-omnis-nam",
  },
  {
    id: 45,
    image: "",
    title: "Practical Soft Soap",
    summary:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    slang: "accusantium-illum-nulla",
  },
  {
    id: 46,
    image: "",
    title: "Handmade Rubber Bacon",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "eum-eos-et",
  },
  {
    id: 47,
    image: "",
    title: "Gorgeous Plastic Car",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "ullam-est-quidem",
  },
  {
    id: 48,
    image: "",
    title: "Intelligent Rubber Pizza",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "ullam-deleniti-sint",
  },
  {
    id: 49,
    image: "",
    title: "Awesome Soft Cheese",
    summary:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    slang: "nam-nostrum-quo",
  },
  {
    id: 50,
    image: "",
    title: "Refined Metal Chicken",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "repudiandae-autem-ut",
  },
  {
    id: 51,
    image: "",
    title: "Rustic Frozen Ball",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "eos-molestiae-minus",
  },
  {
    id: 52,
    image: "",
    title: "Awesome Fresh Computer",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "illum-quia-magnam",
  },
  {
    id: 53,
    image: "",
    title: "Practical Frozen Shoes",
    summary:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    slang: "pariatur-optio-ut",
  },
  {
    id: 54,
    image: "",
    title: "Awesome Fresh Computer",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "id-quam-maiores",
  },
  {
    id: 55,
    image: "",
    title: "Tasty Soft Pizza",
    summary:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    slang: "consectetur-labore-mollitia",
  },
  {
    id: 56,
    image: "",
    title: "Intelligent Frozen Towels",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "vero-debitis-iure",
  },
  {
    id: 57,
    image: "",
    title: "Handcrafted Soft Cheese",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "asperiores-provident-numquam",
  },
  {
    id: 58,
    image: "",
    title: "Refined Wooden Chips",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "non-est-dolore",
  },
  {
    id: 59,
    image: "",
    title: "Sleek Cotton Keyboard",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "velit-quidem-magnam",
  },
  {
    id: 60,
    image: "",
    title: "Refined Rubber Tuna",
    summary:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    slang: "consequatur-nesciunt-maxime",
  },
  {
    id: 61,
    image: "",
    title: "Ergonomic Fresh Cheese",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "quia-error-rerum",
  },
  {
    id: 62,
    image: "",
    title: "Awesome Steel Shoes",
    summary:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    slang: "aliquid-at-non",
  },
  {
    id: 63,
    image: "",
    title: "Ergonomic Wooden Table",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "beatae-eaque-soluta",
  },
  {
    id: 64,
    image: "",
    title: "Refined Plastic Keyboard",
    summary:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    slang: "consequatur-fugiat-quis",
  },
  {
    id: 65,
    image: "",
    title: "Generic Metal Soap",
    summary:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    slang: "quod-porro-est",
  },
  {
    id: 66,
    image: "",
    title: "Awesome Granite Table",
    summary:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    slang: "explicabo-ea-dolorem",
  },
  {
    id: 67,
    image: "",
    title: "Generic Cotton Ball",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "et-molestiae-autem",
  },
  {
    id: 68,
    image: "",
    title: "Incredible Cotton Soap",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "ut-vero-sapiente",
  },
  {
    id: 69,
    image: "",
    title: "Awesome Concrete Pants",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "corrupti-ducimus-totam",
  },
  {
    id: 70,
    image: "",
    title: "Incredible Plastic Chair",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "dolor-unde-voluptates",
  },
  {
    id: 71,
    image: "",
    title: "Awesome Metal Car",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "possimus-aut-qui",
  },
  {
    id: 72,
    image: "",
    title: "Incredible Cotton Cheese",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "nisi-atque-et",
  },
  {
    id: 73,
    image: "",
    title: "Handmade Metal Table",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "beatae-eveniet-sunt",
  },
  {
    id: 74,
    image: "",
    title: "Rustic Rubber Fish",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "est-dolor-veniam",
  },
  {
    id: 75,
    image: "",
    title: "Licensed Plastic Fish",
    summary:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    slang: "ducimus-voluptatem-officiis",
  },
  {
    id: 76,
    image: "",
    title: "Practical Plastic Towels",
    summary:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    slang: "et-facilis-quis",
  },
  {
    id: 77,
    image: "",
    title: "Ergonomic Granite Sausages",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "distinctio-commodi-alias",
  },
  {
    id: 78,
    image: "",
    title: "Generic Steel Gloves",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "consequatur-accusantium-accusantium",
  },
  {
    id: 79,
    image: "",
    title: "Unbranded Concrete Fish",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "doloremque-ea-maxime",
  },
  {
    id: 80,
    image: "",
    title: "Generic Granite Hat",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "ut-dolore-provident",
  },
  {
    id: 81,
    image: "",
    title: "Tasty Granite Hat",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "sed-veritatis-a",
  },
  {
    id: 82,
    image: "",
    title: "Incredible Steel Pizza",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "vel-recusandae-et",
  },
  {
    id: 83,
    image: "",
    title: "Incredible Rubber Hat",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "veniam-est-nihil",
  },
  {
    id: 84,
    image: "",
    title: "Licensed Rubber Shirt",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "omnis-ipsam-qui",
  },
  {
    id: 85,
    image: "",
    title: "Refined Granite Gloves",
    summary:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    slang: "nobis-cumque-fugiat",
  },
  {
    id: 86,
    image: "",
    title: "Ergonomic Frozen Towels",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "aut-enim-id",
  },
  {
    id: 87,
    image: "",
    title: "Ergonomic Concrete Table",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "est-deserunt-eum",
  },
  {
    id: 88,
    image: "",
    title: "Handmade Concrete Chips",
    summary: "The Football Is Good For Training And Recreational Purposes",
    slang: "et-placeat-incidunt",
  },
  {
    id: 89,
    image: "",
    title: "Generic Frozen Soap",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "tenetur-dolores-et",
  },
  {
    id: 90,
    image: "",
    title: "Sleek Granite Fish",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "qui-odio-ratione",
  },
  {
    id: 91,
    image: "",
    title: "Fantastic Steel Hat",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "perferendis-est-consequuntur",
  },
  {
    id: 92,
    image: "",
    title: "Practical Cotton Soap",
    summary:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    slang: "est-quia-ducimus",
  },
  {
    id: 93,
    image: "",
    title: "Handmade Plastic Sausages",
    summary:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    slang: "voluptatem-at-fugiat",
  },
  {
    id: 94,
    image: "",
    title: "Gorgeous Steel Fish",
    summary:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    slang: "cumque-explicabo-aut",
  },
  {
    id: 95,
    image: "",
    title: "Licensed Fresh Table",
    summary:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    slang: "temporibus-suscipit-molestiae",
  },
  {
    id: 96,
    image: "",
    title: "Awesome Plastic Hat",
    summary:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    slang: "rem-et-sapiente",
  },
  {
    id: 97,
    image: "",
    title: "Gorgeous Concrete Salad",
    summary:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    slang: "in-voluptatum-repudiandae",
  },
  {
    id: 98,
    image: "",
    title: "Handcrafted Metal Fish",
    summary:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    slang: "repellendus-ipsum-aliquam",
  },
  {
    id: 99,
    image: "",
    title: "Handcrafted Steel Bacon",
    summary:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    slang: "necessitatibus-eum-itaque",
  },
  {
    id: 100,
    image: "",
    title: "Unbranded Granite Sausages",
    summary:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    slang: "delectus-et-consequatur",
  },
];

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      ...products[i],
      image: CarBg,
    });
  }
  return result;
};

export const buildProduct = () => buildProductList(1)[0];
