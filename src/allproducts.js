const productsData = [
  {
    id: 1,
    type: "oversized-tshirt",
    image:
      "https://images.bewakoof.com/t1080/men-s-green-master-88-graphic-printed-oversized-t-shirt-575358-1717060472-1.jpg",
    title: "Men's Green Master 88 Graphic Printed Oversized T-shirt",
    originalprice: "1499",
    discountedprice: "449",
    discountpercentage: "70% off",
  },
  {
    id: 2,
    type: "oversized-tshirt",
    image:
      "https://images.bewakoof.com/original/men-s-blue-let-me-take-a-selfie-graphic-printed-oversized-t-shirt-577416-1734699036-1.jpg",
    title: "Men's Blue Let Me Take A Selfie Graphic Printed Oversized T-shirt",
    originalprice: "1499",
    discountedprice: "249",
    discountpercentage: "83% off",
  },
  {
    id: 3,
    type: "oversized-tshirt",
    image:
      "https://images.bewakoof.com/t640/men-s-grey-eternity-graphic-printed-oversized-t-shirt-596129-1735645993-1.jpg",
    title: "Men's Grey Eternity Graphic Printed Oversized T-shirt",
    originalprice: "999",
    discountedprice: "349",
    discountpercentage: "65% off",
  },
  {
    id: 4,
    type: "oversized-tshirt",
    image:
      "https://images.bewakoof.com/original/men-s-grey-skater-donald-graphic-printed-oversized-t-shirt-602558-1688380650-1.jpg",
    title: "Men's Grey Skater Donald Graphic Printed Oversized T-shirt",
    originalprice: "1299",
    discountedprice: "339",
    discountpercentage: "69% off",
  },
  {
    id: 5,
    type: "oversized-tshirt",
    image:
      "https://images.bewakoof.com/t1080/men-s-white-flame-hashira-graphic-printed-oversized-t-shirt-602543-1726230895-1.jpg",
    title: "Men's White Flame Hashira Graphic Printed Oversized T-shirt",
    originalprice: "1299",
    discountedprice: "499",
    discountpercentage: "61% off",
  },
  {
    id: 6,
    type: "oversized-tshirt",
    image:
      "https://images.bewakoof.com/t1080/men-s-blue-the-dark-knight-graphic-printed-oversized-t-shirt-592034-1716887382-1.jpg",
    title: "Men's Blue The Dark Knight Graphic Printed Oversized T-shirt",
    originalprice: "1499",
    discountedprice: "379",
    discountpercentage: "74% off",
  },
  {
    id: 7,
    type: "jeans",
    image:
      "https://images.bewakoof.com/t640/men-s-blue-baggy-straight-fit-ditsressed-jeans-624277-1745839820-1.jpg",
    title: "Men's Blue Baggy Fit Ditsressed Mid-Rise Jean",
    originalprice: "2999",
    discountedprice: "1499",
    discountpercentage: "50% off",
  },
  {
    id: 8,
    type: "jeans",
    image:
      "https://images.bewakoof.com/t1080/men-s-olive-baggy-fit-carpenter-mid-rise-jeans-624260-1747381949-1.jpg",
    title: "Men's Olive Baggy Fit Carpenter Mid-Rise Jeans",
    originalprice: "2999",
    discountedprice: "1599",
    discountpercentage: "46% off",
  },
  {
    id: 9,
    type: "jeans",
    image:
      "https://images.bewakoof.com/t640/men-s-beige-straight-fit-cargo-carpenter-jeans-624675-1739431794-1.jpg",
    title: "Men's Beige Baggy Fit Cargo Carpenter Mid-Rise Jeans",
    originalprice: "3799",
    discountedprice: "1599",
    discountpercentage: "57% off",
  },
  {
    id: 10,
    type: "jeans",
    image:
      "https://images.bewakoof.com/t1080/men-s-green-straight-fit-jeans-olive-new-624687-1706594121-1.jpg",
    title: "Men's Green Baggy Distressed Straight Fit Jeans",
    originalprice: "4199",
    discountedprice: "1999",
    discountpercentage: "52% off",
  },
  {
    id: 11,
    type: "jeans",
    image:
      "https://images.bewakoof.com/t1080/men-s-black-baggy-straight-fit-distressed-jeans-624268-1740482415-1.jpg",
    title: "Men's Black Baggy Fit Distressed Mid-Rise Jeans",
    originalprice: "2999",
    discountedprice: "1499",
    discountpercentage: "50% off",
  },
  {
    id: 12,
    type: "jeans",
    image:
      "https://images.bewakoof.com/t1080/men-s-brown-straight-fit-acid-wash-jeans-652463-1739450777-1.png",
    title: "Men's Brown Super Baggy Fit Acid Wash Mid-Rise Jeans",
    originalprice: "3399",
    discountedprice: "1599",
    discountpercentage: "52% off",
  },
  {
    id: 13,
    type: "shirts",
    image:
      "https://images.bewakoof.com/t1080/men-s-blue-off-white-checked-oversized-shirt-649875-1734676093-1.jpg",
    title: "Men's Blue & Off White Checked Oversized Shirt",
    originalprice: "1599",
    discountedprice: "529",
    discountpercentage: "66% off",
  },
  {
    id: 14,
    type: "shirts",
    image:
      "https://images.bewakoof.com/t640/men-s-charcoal-grey-checked-shirt-666687-1742210965-1.jpg",
    title: "Men's Charcoal Grey Checked Shirt",
    originalprice: "1899",
    discountedprice: "854",
    discountpercentage: "55% off",
  },
  {
    id: 15,
    type: "shirts",
    image:
      "https://images.bewakoof.com/t640/men-s-sand-beige-textured-shirt-662775-1739787990-1.jpg",
    title: "Men's Sand Beige Textured Shirt",
    originalprice: "1899",
    discountedprice: "854",
    discountpercentage: "55% off",
  },
  {
    id: 16,
    type: "shirts",
    image:
      "https://images.bewakoof.com/t640/men-s-red-checked-oversized-shirt-649868-1734503977-1.jpg",
    title: "Men's Red & Grey Checked Oversized Shirt",
    originalprice: "1599",
    discountedprice: "529",
    discountpercentage: "66% off",
  },
  {
    id: 17,
    type: "shirts",
    image:
      "https://images.bewakoof.com/t640/men-s-green-textured-oversized-shirt-646380-1732106425-1.jpg",
    title: "Men's Green Textured Oversized Shirt",
    originalprice: "2499",
    discountedprice: "999",
    discountpercentage: "60% off",
  },
  {
    id: 18,
    type: "shirts",
    image:
      "https://images.bewakoof.com/t640/men-s-black-the-myth-graphic-printed-oversized-shirt-604478-1716287626-1.jpg",
      title:"Men's Black The Myth Graphic Printed Oversized Shirt",
    originalprice: "3099",
    discountedprice: "1999",
    discountpercentage: "35% off",
  },
];
export default productsData;
