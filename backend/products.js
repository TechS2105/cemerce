const products = [

    {

        id: 1,
        title: 'Brown Jacket and Blue Denim Jeans',
        image: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Street Style",
        price: '5000',
        details: {

            description: "Modern casual look with jacket, jeans, boots.",
            sku: 'MENS-OUTFIT-BROWNJACKET-001',
            types: "Smart Casual",
            vendor: "C-EMERCE"

        }
        
    },

    {

        id: 2,
        image: "https://cdn.shopify.com/s/files/1/1150/2764/files/Sleeve_Style_t-_shirts_480x480.jpg?v=1734330119",
        category: "Casual Wear",
        title: 'Casual Grey Tee Modern Look',
        price: "1000",
        details: {

            description: "Relaxed street style with t-shirt and jeans.",
            sku: 'MENS-CASUAL-GREYTEE-002',
            types: "Everyday Outfit",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 3,
        title: 'Striped Shirt Casual Outfit',
        image: 'https://images.unsplash.com/photo-1667843577412-f97672c9a114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
        category: "Casual Wear",
        price: '7000',
        details: {

            description: "Effortless summer style: striped shirt, light denim, sleek sneakers.",
            sku: 'MENS-STRIPE-SUMMER-003',
            types: "Summer Style",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 4,
        title: 'Men’s Red Black Checkered Shirt',
        image: 'https://images.unsplash.com/photo-1617662408044-cda3ab7134c9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Plaid Shirt",
        price: "6000",
        details: {

            description: "Bold plaid shirt with tailored black trousers, Chelsea boots.",
            sku: 'MENS-PLAID-RED-004',
            types: "Evening Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 5,
        image: "https://cdn.shopify.com/s/files/1/1150/2764/files/Men_s_T-Shirts_by_Fit_480x480.jpg?v=1734330812",
        title: "Athletic Green V-Neck Tee",
        category: "V-Neck Tee",
        price: "900",
        details: {

            description: "Studio-lit portrait of a fitted green tee.",
            sku: 'MENS-VNECK-GREEN-005',
            types: "Fitness Apparel",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 6,
        title: 'Men’s Blue Striped Shirt Formal Outfit',
        image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Business Casual",
        price: '7000',
        details: {

            description: "Tailored striped shirt paired with dotted tie and accessories.",
            sku: 'MENS-DRESS-BLUE-006',
            types: "Office Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 7,
        image: "https://cdn.shopify.com/s/files/1/1150/2764/files/download_e0feae81-9e12-469b-922a-3ff1ff3a97ac_480x480.jpg?v=1734331088",
        title: "Tribal Geometric Colorblock T-Shirt",
        category: "Street Style",
        price: "2000",
        details: {

            description: "Bold ethnic print meets neutral panels for modern, wearable art.",
            sku: 'COLORBLOCK-TRIBAL-007',
            types: "Casual Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 8,
        title: "Men's Black Formal Suit Look",
        image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Formal Wear",
        price: "8000",
        details: {

            description: "Mauris tempus erat a gravida varius. Praesent vel eros libero.",
            sku: 'MENS-SUIT-BLACK-008',
            types: "Business Attire",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 9,
        image: "https://cdn.shopify.com/s/files/1/1150/2764/files/Men_s_T-Shirts_by_Material_480x480.jpg?v=1734331547",
        title: "Relaxed Black Striped Casual Tee",
        category: "Summer Wear",
        price: "1800",
        details: {

            description: "Minimal striped t-shirt paired with beige casual trousers.",
            sku: 'MENS-STRIPED-BLACK-009',
            types: "Everyday Outfit",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 10,
        image: "https://cdn.shopify.com/s/files/1/1150/2764/files/summer_collection_480x480.jpg?v=1734332025",
        title: "Dual-Tone Tribal Panel Crew Tee",
        category: "Men’s T-Shirt",
        price: "1200",
        details: {

            description: "Soft colorblock crew tee with vibrant vertical tribal panel.",
            sku: 'TS-CB-TRIBAL-BEGY-001',
            types: "Street Wear",
            vendor: "C-EMERCE"

        }

    },

     {

        id: 11, 
        title: 'Men’s Casual Geometric Striped Short Shirt',
        image: 'https://images.unsplash.com/photo-1605794432120-f4bb5dc9067d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Men’s Street Style",
        price: '5000',
        details: {

            description: "Black and white striped casual shirt with geometric pattern.",
            sku: "MCS-GEO-STRIPE-003",
            types: "Summer Wear",
            vendor: "C-EMERCE"
            
        }

    },

    {

        id: 12,
        title: 'Men’s White Blue Striped Shirt',
        image: 'https://images.unsplash.com/photo-1744535814651-b106bb53026d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Casual Shirt",
        price: '8000',
        details: {

            description: "White button-down with blue stripes, casual rolled sleeves.",
            sku: "MCS-STRIPE-WHTBLU-004",
            types: "Long Sleeve",
            vendor: "C-EMERCE"
            
        }

    },

    // Women's Clothing

    {

        id: 13,
        image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Radiant Red Draped Party Mini Dress',
        price: '5000',
        category: "Luxury Collection",
        details: {

            description: "Chic red mini dress with dramatic draped elegance.",
            sku: "RD-MINI-DRAPE-2025",
            types: "Party Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 14,
        image: 'https://images.unsplash.com/photo-1733043014211-8d699f6a82b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Desert Paisley Ruched Midi Dress',
        price: '2000',
        category: "Women’s Clothing",
        details: {

            description: "Ethereal paisley midi; ruched v-neck bodice, effortless summer elegance.",
            sku: "DRS-PAISLEY-MIDI-SS25-001",
            types: "Spaghetti Strap",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 15,
        image: 'https://images.unsplash.com/photo-1528813569347-f16dd076e347?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Coral Polka Dot Summer Dress',
        price: '3000',
        category: "Women’s Clothing",
        details: {

            description: "Playful polka dots, breezy fit, perfect sunny day style.",
            sku: "DRS-POLKA-CORAL-SS25-002",
            types: "Summer Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 16,
        image: 'https://plus.unsplash.com/premium_photo-1661425743889-8e9f763afe39?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "Rose Lace Sleeveless A-Line Dress",
        price: '5000',
        category: "Women’s Clothing",
        details: {

            description: "Delicate lace design, breezy charm for effortless summer style.",
            sku: "DRS-LACE-ROSE-SS25-003",
            types: "Sleeveless Summer Wear",
            vendor: "C-EMERCE"

        }

    }, 

    {

        id: 17, 
        image: 'https://images.unsplash.com/photo-1700064990923-b1af57cf58db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fEJhYnlkb2xsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D',
        title: 'Sky Blue One-Shoulder Mini Dress',
        price: '8000',
        category: "Women’s Clothing",
        details: {

            description: "Elegant one-shoulder silhouette, chic puff sleeve, timeless appeal.",
            sku: "DRS-ONESHOULDER-SKY-SS25-004",
            types: "Puff Sleeve",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 18,
        image: 'https://images.unsplash.com/photo-1608451994760-ea44a25e80a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2ltb25vfGVufDB8fDB8fHww',
        title: 'Floral Kimono with Traditional Parasol',
        price: '2000',
        category: "Women’s Clothing",
        details: {

            description: "Elegant floral kimono, timeless grace with classic parasol.",
            sku: "KIMONO-FLORAL-TRAD-SS25-005",
            types: "Japanese Attire",
            vendor: "C-EMERCE"

        }

    }, 

    {

        id: 19,
        image: 'https://images.unsplash.com/photo-1733041482420-e2894386944d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fFBvbG8lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Lace Bodice Pastel Mermaid Maxi Dress',
        price: '4000',
        category: "Women’s Clothing",
        details: {

            description: "Intricate lace bodice, pastel mermaid skirt, bohemian elegance.",
            sku: "DRS-MERMAID-LACE-PASTEL-SS25-006",
            types: "Mermaid Dress",
            vendor: "C-EMERCE"

        }

    }, 

    {
    
        id: 20,
        image: 'https://images.unsplash.com/photo-1667890786367-85853fa47a34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hpcnRkcmVzc3xlbnwwfHwwfHx8MA%3D%3D',
        title: 'Minimalist White T-Shirt Shift Dress',
        price: '5000',
        category: "Women’s Clothing",
        details: {

            description: "Effortless casual style, relaxed fit with versatile comfort.",
            sku: "DRS-SHIFT-WHITE-BASIC-SS25-007",
            types: "Shift Dress",
            vendor: "C-EMERCE"

        }
        
    },

    {
    
        id: 21,
        image: 'https://images.unsplash.com/photo-1649140334873-3d8823e5ce40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFR1bmljJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D',
        title: 'Indigo Printed Anarkali Palazzo Set',
        price: '9000',
        category: "Women’s Clothing",
        details: {

            description: "Elegant indigo Anarkali with palazzo, handcrafted ethnic sophistication.",
            sku: "ETHNIC-ANARKALI-INDIGO-SS25-008",
            types: "Anarkali Suit",
            vendor: "C-EMERCE"

        }
        
    },

    {

        id: 22,
        image: 'https://images.unsplash.com/photo-1693988501118-e646ecae2649?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8',
        title: 'Blue Floral Kaftan Palazzo Set',
        price: '10000',
        category: "Women’s Clothing",
        details: {

            description: "Vibrant floral kaftan with palazzo, bohemian ethnic elegance.",
            sku: "ETHNIC-KAFTAN-BLUEFLORAL-SS25-009",
            types: "Festive Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 23,
        image: 'https://images.unsplash.com/photo-1618244961087-dc20ab82c685?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Olive Knit Dress with Camel Coat',
        price: '20000',
        category: "Women’s Clothing",
        details: {

            description: "Sophisticated layering, knit dress paired with timeless camel coat.",
            sku: "WNTR-KNIT-OLIVECOAT-SS25-010",
            types: "Casual Chic",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 24,
        image: 'https://images.unsplash.com/photo-1728916976678-2a2576cab7a1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Beige Maxi Skirt with White Turtleneck',
        price: '3000',
        category: "Women’s Clothing",
        details: {

            description: "Elegant autumn outfit with maxi skirt and beret style.",
            sku: "AUTM-MAXI-BEIGEWHITE-SS25-011",
            types: "Autumn Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 25,
        image: 'https://images.unsplash.com/photo-1549364011-6e0d052ef2ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Off-Shoulder Sweater with Ripped Jeans',
        price: '5000',
        category: "Women’s Clothing",
        details: {

            description: "Cozy fall outfit with chic off-shoulder style.",
            sku: "FALL-OFFSHOULDER-SWEATERJEANS-SS25-012",
            types: "Autumn Fashion",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 26,
        image: 'https://images.unsplash.com/photo-1705050567496-afaf931f9f0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Elegant Grey Belted Winter Coat',
        price: '15000',
        Category: "Women’s Clothing",
        details: {

            description: "Sophisticated winter coat with chic textured bucket hat.",
            sku: "WINTER-GREY-BELTEDCOAT-SS25-021",
            types: "Seasonal Fashion",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 27,
        image: 'https://images.unsplash.com/photo-1653660666646-cea406e878bf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Chic Beige Belted Trench Coat',
        price: '25000',
        category: "Women’s Clothing",
        details: {

            description: "Stylish trench coat paired with modern street accessories.",
            sku: "TRENCH-BEIGE-BELTEDCOAT-SS25-037",
            types: "Urban Chic",
            vendor: "C-EMERCE"

        }

    },

     {
    id: 28,
    image:
      "https://images.unsplash.com/photo-1693989237967-f294a06fab5f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Design Printed Full Sleeve Grey Kurti",
    price: "5000",
    category: "Women's Outfit",
    details: {

      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id",
      sku: 'DPSG-882KF',
      types: 'Party Ware',
      vendor: 'C-EMERCE'

    }

  },

  {
    id: 29,
    image:
      "https://images.unsplash.com/photo-1693987641738-6013ac2754dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
    title: "Design Printed Full Sleeve Kurti",
    price: "2000",
    category: "Women's Outfit",
    details: {

      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id",
      sku: 'DPSG-882KF',
      types: 'Party Ware',
      vendor: 'C-EMERCE'

    }

  },

  {
    id: 30,
    image:
      "https://images.unsplash.com/photo-1693989649054-318b593d3557?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Full Sleeve Blue Flower Printed Design Kurti",
    price: "3000",
    category: "Women's Outfit",
    details: {

      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id",
      sku: 'DPSG-882KF',
      types: 'Party Ware',
      vendor: 'C-EMERCE'

    }

  },

  {
    id: 31,
    image:
      "https://images.unsplash.com/photo-1693990146897-b85af2d1172c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Traditional Half Sleeve Kurti",
    price: "5000",
    category: "Women's Outfit",
    details: {

      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id",
      sku: 'DPSG-882KF',
      types: 'Party Ware',
      vendor: 'C-EMERCE'

    }

  },

  {
    id: 32,
    image:
      "https://images.unsplash.com/photo-1669199816702-a1639608019e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Design Printed Gray Kurti",
    price: "3000",
    category: "Women's Outfit",
    details: {

      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id",
      sku: 'DPSG-882KF',
      types: 'Party Ware',
      vendor: 'C-EMERCE'

    }

  },

  {
    id: 33,
    image:
      "https://images.unsplash.com/photo-1693989242063-a2146e7916f8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Design Printed Red Kurti",
    category: "Women's Outfit",
    price: "6000",
    details: {

      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id",
      sku: 'DPSG-882KF',
      types: 'Party Ware',
      vendor: 'C-EMERCE'

    }

  },
  
  // Kid's Product Collection
   {
        id: 34,
        image:
        "https://images.unsplash.com/photo-1664982803698-b6b514e9928b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEtpZCdzJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Light Blue Polo Shirt Boys’ Outfit",
        category: "Kids’ Clothing",
        price: "5000",
        details: {

            description: "Soft cotton polo paired with classic denim jeans.",
            sku: "KIDS-POLO-LTBLUE-SS25-112",
            types: "Summer Outfit",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 35,
        image:
        "https://plus.unsplash.com/premium_photo-1693242804074-20a78966f4e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S2lkJ3MlMjBUJTIwc2hpcnRzfGVufDB8fDB8fHww",
        title: "Orange Casual Tee and Cargo Shorts",
        category: "Kids’ Clothing",
        price: "2000",
        details: {

            description: "Stylish cotton tee with matching cargo pants.",
            sku: "KIDS-SET-ORANGE-SS25-118",
            types: "Matching Sets",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 36,
        image:
        "https://images.unsplash.com/photo-1628195267183-831f2b190c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEtpZCdzJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Graphic Tee Boys’ Outfit",
        category: "Kids’ Clothing",
        price: "4000",
        details: {

            description: "Casual streetwear tee with motivational graphic print.",
            sku: "KIDS-TEE-YELLOW-SS25-243",
            types: "Cotton T-Shirts",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 37,
        image:
        "https://images.unsplash.com/photo-1600023533868-d0a6101da971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEtpZCdzJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Levi’s Graphic Tee and Jeans",
        category: "Youth Apparel",
        price: "8000",
        details: {

            description: "Stylish casual tee paired with blue denim.",
            sku: "LEVIS-WHITE-LOGOTEE-SS25-318",
            types: "Graphic T-Shirts",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 38,
        image:
        "https://plus.unsplash.com/premium_photo-1691367782576-316c6aa250d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEtpZCdzJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Mint Green Toddler Casual Outfit",
        category: "Baby Boys Fashion",
        price: "5000",
        details: {

            description: "Comfortable mint tee with beige shorts.",
            sku: "TODDLER-MINT-TEE-SHORTS-SS25-427",
            types: "Toddler Outfits",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 39,
        image:
        "https://images.unsplash.com/photo-1641713353248-6f3bae10f7fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fEtpZCdzJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Kids Cartoon Printed Sleeveless Shirt",
        category: "Kids Wear",
        price: "7000",
        details: {

            description: "White sleeveless tee with playful cartoon print.",
            sku: "KIDS-SLEEVELESS-CARTOON-TEE-SS25-518",
            types: "Summer Clothing",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 40,
        image: "https://plus.unsplash.com/premium_photo-1722384009518-9f47b86f4b68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fEtpZCdzJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Kids Black Star Print Sweatshirt",
        category: "Kid's Wear",
        price: "8000",
        details: {

            description: "Cozy black sweatshirt with bold star design.",
            sku: "KIDS-BLACK-STAR-SWEATSHIRT-SS25-629",
            types: "Full-Sleeve Apparel",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 41,
        image: "https://images.unsplash.com/photo-1668717423044-41767bb7efad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fEtpZCdzJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Boys Graphic Streetwear Black T-Shirt",
        category: "Kid's Wear",
        price: "2000",
        details: {

            description: "Trendy graffiti-style tee with bold urban design.",
            sku: "BOYS-GRAPHIC-STREET-BLACK-TSHIRT-SS25-730",
            types: "Trendy Kids Apparel",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 42,
        image: "https://images.unsplash.com/photo-1749560992367-110c2877adeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
        title: "Toddler White Tee with Floral Leggings",
        category: "Baby Girl Clothing,",
        price: "4000",
        details: {

            description: "Soft cotton tee paired with playful floral leggings.",
            sku: "TODDLER-WHITE-TEE-FLORAL-LEGGINGS-SS25-194",
            types: "Summer Outfits",
            vendor: "C-EMERCE"

        }
    },

    {
        id: 43,
        image: "https://images.unsplash.com/photo-1634808955102-cd1dde4acfb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
        title: "Maroon Romper and Blue Play Crocs",
        category: "Children's fashion",
        price: "4000",
        details: {

            description: "Cozy maroon romper paired with playful blue crocs.",
            sku: "ROM-MRN-BLU-001",
            types: "Outdoor Playwear",
            vendor: "C-EMERCE"

        }
    },
  
    {

        id: 44,
        image: 'https://images.unsplash.com/photo-1676360537698-a8bab7d8aa4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: "Punk Rock Toddler Outfit with Accessories",
        category: "Kids streetwear",
        price: "5000",
        details: {

            description: "Bold studded vest, spiked cap, cross chain style.",
            sku: "PNK-TDLR-BLK-002",
            types: "Toddler punk outfit",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 45, 
        image: 'https://images.unsplash.com/photo-1747871734424-c6c33331423a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: "Summer Breeze Boys’ Casual Shirt",
        category: "Kid's Clothing",
        price: "9000",
        details: {

            description: "Light blue shirt with vibrant beach-inspired design.",
            sku: "BB-SS-1234",
            types: "Boys’ Summer Clothing",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 46,
        image: 'https://plus.unsplash.com/premium_photo-1724296696869-59cc80d104c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: "Red Stripe Boys’ Casual Sweater",
        category: "Kid's Clothing",
        price: "2000",
        details: {

            description: "Cozy red-striped sweater paired with khaki shorts.",
            sku: "BB-CS-5678",
            types: "Boys’ Sweaters",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 47, 
        image: 'https://images.unsplash.com/photo-1583656345883-5189c01c024f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: 'Casual Streetwear Boys’ T-Shirt and Beanie',
        category: "Kid's Clothing",
        price: "4000",
        details: {

            description: "Relaxed beige t-shirt with gray sweatpants and black beanie.",
            sku: "BB-SW-7890",
            types: "Boys’ Casual Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 48, 
        image: 'https://images.unsplash.com/photo-1629881863001-5d98c54ea6cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: 'Mickey Graphic Tee Boys’ Outfit',
        category: "Kid's Clothing",
        price: '2000',
        details: {

            description: "White Mickey Mouse shirt with brown cargo shorts and sneakers.",
            sku: "BB-GT-4567",
            types: "Boys’ Casual Wear",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 49,
        image: 'https://images.unsplash.com/photo-1723625905533-54ace2c4bdf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: 'Toddler Graphic Tee and Shorts Set',
        category: "Kid's Casual Outfit",
        price: '8000',
        details: {

            description: "Blue graphic t-shirt with patches, paired with navy shorts.",
            sku: "BB-TG-8901",
            types: "Toddler Clothing",
            vendor: "C-EMERCE"

        }

    },
    
    {

        id: 50,
        image: 'https://images.unsplash.com/photo-1627207460294-47995eaa1490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkxfHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: 'Toddler Floral Graphic Tee and Leggings',
        category: "Kid's Clothing",
        price: '3000',
        details: {

            description: "Floral graphic tee with yellow leggings and sandals.",
            sku: "BJS-003BBB-TG-1234",
            types: "Graphic Tees",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 51,
        image: 'https://images.unsplash.com/photo-1586537182864-646dd2b95c39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzExfHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: 'Striped Polo Toddler Summer Outfit',
        category: "Kid's Clothing",
        price: "8000",
        details: {

            description: "Navy striped polo shirt with denim shorts and sneakers.",
            sku: "BB-SP-3345",
            types: "Summer Outfits",
            vendor: "C-EMERCE"

        }
        
    },

    {

        id: 52,
        image: 'https://images.unsplash.com/photo-1656734314205-bfadf4f789c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzMxfHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: 'Striped Pocket Tee Boys’ Casual Outfit',
        category: "Kid's Clothing",
        price: "3000",
        details: {

            description: "Gray tee with striped pocket, paired with denim shorts.",
            sku: "BB-CT-9012",
            types: "Summer Outfits",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 53,
        image: 'https://images.unsplash.com/photo-1681551210466-a03ef45baed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM3fHxLaWQncyUyMFQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D',
        title: 'Denim Jacket and Jeans Boys’ Outfit',
        category: "Kid's Clothing",
        price: "4000",
        details: {

            description: "Green graphic tee with denim jacket and jeans.",
            sku: "BB-DJ-1122",
            types: "Denim Clothing",
            vendor: "C-EMERCE"

        }

    },

    {

        id: 54,
        image: 'https://images.unsplash.com/photo-1725071287951-b12b67bd3dd9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nautical Polo Shirt Boys’ Outfit',
        category: "Kid's Casual",
        price: '4000',
        details: {

            description: 'Navy polo shirt with anchor print, paired with beige shorts.',
            sku: 'BB-NS-4569',
            types: 'Summer Outfits',
            vendor: 'C-EMERCE'


        }

    },

    {

        id: 55,
        image: 'https://images.unsplash.com/photo-1661274765524-20669dc4091b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Boys’ Formal Vest and Trouser Set',
        category: "Kid's Formal Wear",
        price: '5000',
        details: {

            description: 'Navy vest suit with white shirt and sneakers.',
            sku: 'BB-FS-6789',
            types: 'Casual T-ShirtOccasion Outfits',
            vendor: 'C-EMERCE'


        }

    }

];

export default products;