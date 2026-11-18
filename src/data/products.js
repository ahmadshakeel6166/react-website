export const PRODUCTS = [
  // 1. Original: Relaxed linen shirt
  {
    id: 'eln-001',
    name: 'Relaxed Linen Shirt',
    subtitle: 'Washed French Flax · Relaxed Silhouette',
    category: 'women',
    collection: 'Summer Pret',
    price: 3490,
    originalPrice: 4290,
    rating: 4.9,
    reviewsCount: 42,
    tag: 'New in',
    isNew: true,
    isBestseller: true,
    stockLeft: 4,
    images: [
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Oatmeal Sand', hex: '#ded3c2' },
      { name: 'Noir Black', hex: '#292929' },
      { name: 'Sage Olive', hex: '#9ca58d' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: '100% Organic Normandy Linen',
    care: 'Dry clean or gentle hand wash in cold water with mild detergent. Line dry in shade.',
    description: 'An understated icon of effortless sophistication. Cut from breathably light French flax linen with mother-of-pearl buttons, dropped shoulders, and a subtly curved hem.',
    highlights: [
      'Natural pre-washed Normandy linen for soft hand-feel',
      'Genuine hand-carved shell buttons',
      'Relaxed oversized drape designed for fluid movement',
      'Single chest patch pocket & back box pleat'
    ]
  },

  // 2. Original: Essential cotton tee
  {
    id: 'eln-002',
    name: 'Essential Cotton Tee',
    subtitle: '240 GSM Heavyweight · Compact Ringspun',
    category: 'men',
    collection: 'Everyday Essentials',
    price: 1990,
    originalPrice: 2590,
    rating: 4.8,
    reviewsCount: 112,
    tag: 'Bestseller',
    isNew: false,
    isBestseller: true,
    stockLeft: 12,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Chalk White', hex: '#eeeeee' },
      { name: 'Rich Black', hex: '#242424' },
      { name: 'Heather Grey', hex: '#9b9b9b' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: '100% Long-Staple Peruvian Pima Cotton',
    care: 'Machine wash warm inside out with like colors. Tumble dry low or air dry.',
    description: 'The definitive daily luxury tee. Custom knit from extra-long staple Pima cotton that softens with every wash while retaining a clean, non-pilling silhouette.',
    highlights: [
      'Dense 240 GSM weight with zero transparency',
      'Reinforced ribbed neckband that resists bacon-neck',
      'Pre-shrunk fabric ensures exact retention of fit',
      'Blind stitch hems for a discreet, bespoke aesthetic'
    ]
  },

  // 3. Original: Everyday tailored trousers
  {
    id: 'eln-003',
    name: 'Everyday Tailored Trousers',
    subtitle: 'Relaxed Taper · Stretch Wool Gabardine',
    category: 'women',
    collection: 'Atelier Tailored',
    price: 4290,
    originalPrice: 5490,
    rating: 4.85,
    reviewsCount: 51,
    tag: 'Trending',
    isNew: false,
    isBestseller: true,
    stockLeft: 7,
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Noir Black', hex: '#292929' },
      { name: 'Warm Khaki', hex: '#c8bca9' },
      { name: 'Chalk Cream', hex: '#f4f3ef' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: '70% Fine Merino Wool, 28% Viscose, 2% Elastane',
    care: 'Dry clean recommended. Cool steam iron.',
    description: 'Expertly tailored high-rise trousers featuring deep front double pleats, angled side pockets, and an effortlessly relaxed leg that breaks softly over heels or loafers.',
    highlights: [
      'High rise with tailored waistband and interior curtain',
      'Double front forward-facing pleats',
      'Creased front crease for elongated proportions',
      'Horn button closure with concealed zip fly'
    ]
  },

  // 4. Original: Modern overshirt
  {
    id: 'eln-004',
    name: 'Modern Overshirt',
    subtitle: 'Brushed Cotton Twill · Dual Cargo Pockets',
    category: 'men',
    collection: 'Contemporary Casual',
    price: 4990,
    originalPrice: 6200,
    rating: 4.75,
    reviewsCount: 33,
    tag: 'New in',
    isNew: true,
    isBestseller: false,
    stockLeft: 8,
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Oat Tan', hex: '#9a8b76' },
      { name: 'Charcoal Jet', hex: '#333333' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: '100% Heavyweight Brushed Cotton Twill',
    care: 'Machine wash 30°C. Do not bleach. Tumble dry normal.',
    description: 'A utilitarian masterwork that functions seamlessly as an autumn outer layer or indoor statement piece. Heavyweight twill softened by a bespoke enzyme wash.',
    highlights: [
      'Twin gusseted chest flap pockets with concealed snaps',
      'Heavy-gauge dual-way metallic zip closure',
      'Reinforced elbow articulation panels',
      'Straight cut hem with side vents'
    ]
  },

  // 5. Original: Mini weekend set
  {
    id: 'eln-005',
    name: 'Mini Weekend Set',
    subtitle: 'Kids 2-Piece Relaxed Outfit · Organic Cotton French Terry',
    category: 'kids',
    collection: 'Mini Élan',
    price: 5990,
    originalPrice: 7200,
    rating: 4.9,
    reviewsCount: 28,
    tag: 'Kids Favorite',
    isNew: true,
    isBestseller: true,
    stockLeft: 5,
    images: [
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Oatmeal Melange', hex: '#d9d0c1' },
      { name: 'Sage Green', hex: '#9ca58d' },
      { name: 'Dusty Rose', hex: '#c5a089' }
    ],
    sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs', '8-9 Yrs', '10-12 Yrs'],
    fabric: '100% GOTS Certified Organic Cotton French Terry',
    care: 'Gentle machine wash inside out. Tumble dry low.',
    description: 'An ultra-soft two-piece weekend lounge set designed for play and rest. Crafted with flatlock irritation-free seams and gentle elastic waistband.',
    highlights: [
      'Skin-friendly 100% organic cotton terry with breathable loopback interior',
      'Elasticated drawcord waistband for growing kids',
      'Reinforced knee panels and ribbed cuffs',
      'Includes matching crewneck pullover and jogger bottoms'
    ]
  },

  // 6. Original: Soft knit cardigan
  {
    id: 'eln-006',
    name: 'Soft Knit Cardigan',
    subtitle: 'Ribbed Knit · Subtle Horn Buttons',
    category: 'women',
    collection: 'Autumn Knitwear',
    price: 3890,
    originalPrice: 4990,
    rating: 4.88,
    reviewsCount: 47,
    tag: 'Limited',
    isNew: false,
    isBestseller: true,
    stockLeft: 3,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Alabaster Cream', hex: '#f0ece3' },
      { name: 'Caramel Rust', hex: '#995a39' },
      { name: 'Forest Moss', hex: '#44513f' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: '70% Soft Wool, 30% Cashmere-Touch Cotton',
    care: 'Hand wash cold with wool detergent. Dry flat between towels.',
    description: 'Generously proportioned with delicate ribbed texture, this cardigan provides warmth without bulk, draping effortlessly over tees and slips.',
    highlights: [
      'Plush, itch-free knit blend with cashmere hand-feel',
      'Deep V-neckline with ribbed placket',
      'Genuine matte horn buttons',
      'Drop shoulders and slouchy relaxed sleeves'
    ]
  },

  // 7. Original: Classic denim jacket
  {
    id: 'eln-007',
    name: 'Classic Denim Jacket',
    subtitle: '13.5oz Kurabo Shuttle-Loomed Cotton · Antique Brass Finish',
    category: 'men',
    collection: 'Atelier Denim',
    price: 5990,
    originalPrice: 7500,
    rating: 4.92,
    reviewsCount: 65,
    tag: 'Bestseller',
    isNew: false,
    isBestseller: true,
    stockLeft: 6,
    images: [
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Vintage Indigo', hex: '#2b3a4a' },
      { name: 'Washed Black', hex: '#333333' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: '100% Japanese Kurabo Ring-Spun Cotton Denim',
    care: 'Machine wash cold inside out. Hang dry to maintain rich indigo depth.',
    description: 'An enduring icon reconstructed with modern proportions. Tailored from robust 13.5oz denim with dual buttoned flap chest pockets and adjustable waist tabs.',
    highlights: [
      'Custom shank buttons with antique brass patina',
      'Twin welt front hand pockets and internal phone pouches',
      'Classic pleated front placket detail',
      'Double chain-stitch reinforced construction'
    ]
  },

  // 8. Original: Little explorer hoodie
  {
    id: 'eln-008',
    name: 'Little Explorer Hoodie',
    subtitle: 'Brushed Fleece Lining · Kangaroo Pocket',
    category: 'kids',
    collection: 'Mini Élan',
    price: 2790,
    originalPrice: 3500,
    rating: 4.86,
    reviewsCount: 39,
    tag: 'Kids Essential',
    isNew: true,
    isBestseller: false,
    stockLeft: 9,
    images: [
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Dusty Blue', hex: '#6b8299' },
      { name: 'Mustard Gold', hex: '#c59b27' },
      { name: 'Heather Grey', hex: '#999999' }
    ],
    sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs', '8-9 Yrs', '10-12 Yrs'],
    fabric: '80% Combed Cotton, 20% Fleece Lined Polyester',
    care: 'Machine wash 40°C. Do not bleach. Tumble dry normal.',
    description: 'Designed for playground adventures and chilly mornings. Features a double-layered hood without dangerous drawstrings and a cozy kangaroo pocket.',
    highlights: [
      'Super-soft brushed fleece lining that stays fluffy after washing',
      'Wide safety-certified ribbed cuffs and hem band',
      'Double needle topstitching throughout for extra durability',
      'Signature embroidered Élan crest on chest'
    ]
  },

  // 9. Luxury Pret: Raw Silk Festive Kurta Set
  {
    id: 'eln-009',
    name: 'Raw Silk Festive Kurta Set',
    subtitle: 'Hand-Embroidered Zardozi & Resham · Limited Edition',
    category: 'luxury-pret',
    collection: 'Élan Haute Couture',
    price: 24900,
    originalPrice: 29500,
    rating: 4.95,
    reviewsCount: 64,
    tag: 'Haute Pret',
    isNew: true,
    isBestseller: true,
    stockLeft: 3,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Champagne Ivory', hex: '#f7f2e7' },
      { name: 'Dusty Rose', hex: '#bc8a7e' },
      { name: 'Emerald Velvet', hex: '#1b3b2b' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: '100% Pure Chanderi Raw Silk with Organza Dupatta',
    care: 'Dry clean only. Do not iron directly over hand-worked embellishments.',
    description: 'A poetic celebration of heritage craftsmanship. Intricate hand-rendered zardozi borders and resham threadwork elevate pure raw silk into an unforgettable festive centerpiece.',
    highlights: [
      'Handcrafted artisan embroidery taking 72+ hours per garment',
      'Paired with straight-cut raw silk trousers & scalloped organza dupatta',
      'Lined in featherweight breathable mulmul cotton',
      'Delivered in signature gold-embossed Élan garment trunk'
    ]
  },

  // 10. Atelier Men: Tailored Wool-Blend Blazer
  {
    id: 'eln-010',
    name: 'Tailored Wool-Blend Blazer',
    subtitle: 'Structured Double-Breasted · Italian Weave',
    category: 'men',
    collection: 'Atelier Tailored',
    price: 18950,
    originalPrice: 22500,
    rating: 5.0,
    reviewsCount: 38,
    tag: 'Atelier Edition',
    isNew: true,
    isBestseller: true,
    stockLeft: 2,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Espresso Melange', hex: '#3b2f2f' },
      { name: 'Midnight Charcoal', hex: '#1f2421' },
      { name: 'Camel Tan', hex: '#c5a059' }
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    fabric: '85% Superfine Wool, 15% Mulberry Silk',
    care: 'Specialist dry clean only. Cool iron over cloth. Store in garment bag with cedar hanger.',
    description: 'Crafted with precision in our atelier, this double-breasted blazer blends Italian wool with pure silk for a delicate luster and sharp, drape-perfect structure.',
    highlights: [
      'Peak lapel with delicate hand-stitched pick detailing',
      'Full cupro lining for supreme frictionless comfort',
      'Functional kissing four-button surgeon cuffs',
      'Interior passport and pen pockets'
    ]
  },

  // 11. Women Pret: Silk Slip Midi Dress
  {
    id: 'eln-011',
    name: 'Silk Slip Midi Dress',
    subtitle: 'Bias-Cut Mulberry Silk · Cowl Neckline',
    category: 'women',
    collection: 'Evening Atelier',
    price: 14500,
    originalPrice: 17500,
    rating: 4.9,
    reviewsCount: 29,
    tag: 'Trending',
    isNew: true,
    isBestseller: false,
    stockLeft: 5,
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Olive Gold', hex: '#807757' },
      { name: 'Onyx Black', hex: '#141414' },
      { name: 'Blush Pearl', hex: '#f2ded9' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: '100% 22-Momme Mulberry Silk Satin',
    care: 'Hand wash cold using silk wash or dry clean. Low iron inside out.',
    description: 'A timeless silhouette engineered with a flattering 45-degree diagonal bias cut that hugs contours gracefully with molten-liquid drape.',
    highlights: [
      'Premium 22-Momme grade 6A Mulberry silk',
      'Adjustable delicate spaghetti straps with gold hardware',
      'Soft cowl drape neckline & side slit for fluid movement',
      'French seams throughout'
    ]
  },

  // 12. Kids Festive: Little Prince Embroidered Kurta
  {
    id: 'eln-012',
    name: 'Little Prince Embroidered Kurta',
    subtitle: 'Kids Festive 2-Piece · Cotton Silk',
    category: 'kids',
    collection: 'Mini Élan',
    price: 6490,
    originalPrice: 7800,
    rating: 4.9,
    reviewsCount: 19,
    tag: 'Kids Festive',
    isNew: true,
    isBestseller: false,
    stockLeft: 6,
    images: [
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Mint Sage', hex: '#b8c9bc' },
      { name: 'Royal Gold', hex: '#dfb76c' },
      { name: 'Sky Azure', hex: '#bed6e6' }
    ],
    sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs', '8-9 Yrs', '10-12 Yrs'],
    fabric: '80% Soft Cotton, 20% Silk (Comfort Lined)',
    care: 'Gentle hand wash in cold water or dry clean. Iron on reverse.',
    description: 'Designed specifically for little celebrations with ultra-soft, itch-free interior seams. Features delicate tone-on-tone neckline embroidery with matching cotton pajama.',
    highlights: [
      'Skin-friendly 100% cotton lawn lining throughout',
      'Comfort-fit elasticated waistband pajama',
      'Resistant to fraying with double reinforced stitching',
      'Snag-free hidden snap buttons for easy dressing'
    ]
  },

  // 13. Luxury Pret: Handcrafted Cashmere Wrap Coat
  {
    id: 'eln-013',
    name: 'Handcrafted Cashmere Wrap Coat',
    subtitle: 'Double-Faced Grade A Cashmere · Self-Tie Belt',
    category: 'luxury-pret',
    collection: 'Élan Winter Haute',
    price: 36500,
    originalPrice: 42000,
    rating: 5.0,
    reviewsCount: 22,
    tag: 'Ultra Luxury',
    isNew: true,
    isBestseller: false,
    stockLeft: 2,
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Camel Tan', hex: '#bf9b6b' },
      { name: 'Soft Ecru', hex: '#ece6d8' },
      { name: 'Midnight Jet', hex: '#111111' }
    ],
    sizes: ['XS-S', 'M-L'],
    fabric: '100% Inner Mongolian Pure Cashmere',
    care: 'Specialist cashmere dry clean only. Brush with soft bristle clothes brush.',
    description: 'The pinnacle of cold-weather elegance. Two layers of pure cashmere hand-stitched invisibly along the seams for an unlined, weightless drape that warms effortlessly.',
    highlights: [
      'Double-faced seamless hand-finished borders',
      'Generous storm flap and relaxed notch collar',
      'Removable wide cashmere tie belt with topstitching',
      'Supplied with cedar storage box & hanger'
    ]
  },

  // 14. Luxury Pret: Chiffon Festive Saree / Gown
  {
    id: 'eln-014',
    name: 'Festive Embroidered Silk Kaftan',
    subtitle: 'Hand-worked Zari Neckline · Pure Raw Silk',
    category: 'luxury-pret',
    collection: 'Élan Haute Couture',
    price: 21500,
    originalPrice: 26000,
    rating: 4.93,
    reviewsCount: 31,
    tag: 'Atelier Edition',
    isNew: true,
    isBestseller: false,
    stockLeft: 3,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Royal Emerald', hex: '#1b3b2b' },
      { name: 'Deep Crimson', hex: '#631818' },
      { name: 'Champagne Sand', hex: '#ded3c2' }
    ],
    sizes: ['Free Size', 'Custom Tailored'],
    fabric: '100% Pure Silk Brocade with Hand-Worked Pearls',
    care: 'Dry clean only.',
    description: 'A regal silhouette with flowing royal drape and intricately embellished neckline adorned with crystals, seed pearls, and gold bullion wire.',
    highlights: [
      'Relaxed glamorous kaftan drape suitable for all silhouettes',
      'Hand-finished hem with metallic gota patti lace',
      'Concealed inner cinch belt for optional waist definition'
    ]
  },

  // 15. Men: Raw Selvedge Denim Trouser
  {
    id: 'eln-015',
    name: 'Raw Selvedge Denim Trouser',
    subtitle: '13.5oz Kurabo Mill Cotton · Classic Straight Leg',
    category: 'men',
    collection: 'Atelier Denim',
    price: 8900,
    originalPrice: 11500,
    rating: 4.86,
    reviewsCount: 39,
    tag: 'Craft Edit',
    isNew: true,
    isBestseller: false,
    stockLeft: 6,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Indigo Raw', hex: '#1e2d42' },
      { name: 'Vintage Washed Blue', hex: '#5b7899' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    fabric: '100% Japanese Kurabo Shuttle-Loomed Cotton Selvedge',
    care: 'Soak cold inside out. Hang dry. Develops personalized patina with wear.',
    description: 'Woven on vintage shuttle looms using authentic rope-dyed indigo yarns. Cut with a timeless mid-rise and straight silhouette that breaks cleanly over boots.',
    highlights: [
      'Red-line selvedge visible on turn-up hem',
      'Solid brass donut buttons and hand-peened copper rivets',
      'Heavy duty twill pocket bags',
      'Custom embossed vegetable-tanned leather back patch'
    ]
  },

  // 16. Kids: Girls Floral Tiered Twirl Dress
  {
    id: 'eln-016',
    name: 'Floral Tiered Twirl Dress',
    subtitle: 'Little Maiden Collection · Cotton Malmal Lined',
    category: 'kids',
    collection: 'Mini Élan',
    price: 5490,
    originalPrice: 6800,
    rating: 4.91,
    reviewsCount: 17,
    tag: 'Girls Festive',
    isNew: true,
    isBestseller: true,
    stockLeft: 7,
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Pastel Blush', hex: '#e8b4b8' },
      { name: 'Lavender Mist', hex: '#d1c2d9' }
    ],
    sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs', '8-9 Yrs'],
    fabric: '100% Breathable Soft Cotton Lawn',
    care: 'Hand wash cold or gentle cycle. Air dry flat.',
    description: 'Delicate tiered flutter ruffles and hand-drawn vintage botanical blooms make this the ultimate celebratory party dress for girls.',
    highlights: [
      'Fully lined in pure cotton lawn to guarantee non-scratchy comfort',
      'Back zipper with safety fabric flap protector',
      'Generous circular skirt engineered for maximum twirl'
    ]
  },

  // --- 6 BRAND-NEW PRODUCTS ADDED ---

  // 17. NEW: Oversized Cashmere Polo Sweater (Women)
  {
    id: 'eln-017',
    name: 'Oversized Cashmere Polo Sweater',
    subtitle: 'Grade-A Featherweight Knit · Wide Johnny Collar',
    category: 'women',
    collection: 'Autumn Knitwear',
    price: 12900,
    originalPrice: 15500,
    rating: 4.96,
    reviewsCount: 23,
    tag: 'New Season',
    isNew: true,
    isBestseller: false,
    stockLeft: 4,
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Heather Bisque', hex: '#e2d9cd' },
      { name: 'Espresso Bean', hex: '#3d2f28' },
      { name: 'Alabaster Ivory', hex: '#f7f5f0' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: '100% Mongolian 2-Ply Fine Cashmere',
    care: 'Gentle hand wash cold using cashmere shampoo. Dry flat on clean towel.',
    description: 'An elevated, slouchy silhouette featuring a relaxed open Johnny polo collar, ribbed cuffs, and side split hem. Designed for effortless French tucking.',
    highlights: [
      'Cloud-soft 2-ply long-staple cashmere prevents pilling',
      'Clean polo collar without buttons for clean minimal aesthetic',
      'Extended ribbed cuffs with subtle thumbhole slit option',
      'Side split hem designed for fluid draping'
    ]
  },

  // 18. NEW: Vintage Washed Oxford Shirt (Men)
  {
    id: 'eln-018',
    name: 'Vintage Washed Oxford Shirt',
    subtitle: 'Heavyweight Pinpoint Oxford · Button-Down Collar',
    category: 'men',
    collection: 'Everyday Essentials',
    price: 4490,
    originalPrice: 5600,
    rating: 4.87,
    reviewsCount: 54,
    tag: 'Bestseller',
    isNew: false,
    isBestseller: true,
    stockLeft: 11,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Sky Chambray', hex: '#94b3d1' },
      { name: 'Crisp White', hex: '#f8f9fa' },
      { name: 'Striped Oxford', hex: '#b0c4de' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: '100% Combed Cotton Heavyweight Pinpoint Oxford',
    care: 'Machine wash 40°C. Medium iron while damp for crisp collar roll.',
    description: 'The cornerstone of modern casual dressing. Woven in substantial oxford cloth softened with a garment wash, featuring a perfect third-button collar roll.',
    highlights: [
      'Authentic three-finger button-down collar roll',
      'Locker loop and center back box pleat',
      'Mother-of-pearl cross-stitched buttons',
      'Single rounded chest pocket'
    ]
  },

  // 19. NEW: Embroidered Velvet Sherwani / Prince Coat (Luxury Pret)
  {
    id: 'eln-019',
    name: 'Embroidered Velvet Sherwani Coat',
    subtitle: 'Bespoke Micro-Velvet · Hand-worked Tilla & Dabka',
    category: 'luxury-pret',
    collection: 'Élan Haute Couture',
    price: 38500,
    originalPrice: 45000,
    rating: 5.0,
    reviewsCount: 16,
    tag: 'Haute Couture',
    isNew: true,
    isBestseller: false,
    stockLeft: 2,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Midnight Jet', hex: '#0e0e10' },
      { name: 'Royal Maroon', hex: '#4a1521' }
    ],
    sizes: ['38R', '40R', '42R', '44R', 'Custom Tailored'],
    fabric: 'Pure Silk Micro-Velvet with Viscose Satin Lining',
    care: 'Specialist couture dry clean only. Store on wooden atelier hanger.',
    description: 'Regal festive craftsmanship personified. Deep plush black velvet accentuated with antique gold tilla, dabka, and nakshi embroidery along the mandarin collar and cuffs.',
    highlights: [
      'Master artisan embroidery requiring 90+ hours of hand finishing',
      'Handmade metallic bullion button closures',
      'Structured padded canvas chest piece for tailored masculine silhouette',
      'Delivered in personalized cedar garment box with Élan crest'
    ]
  },

  // 20. NEW: Pleated Georgette Maxi Skirt (Women)
  {
    id: 'eln-020',
    name: 'Pleated Georgette Maxi Skirt',
    subtitle: 'Sunray Accordion Pleats · Fluid Satin Waistband',
    category: 'women',
    collection: 'Evening Atelier',
    price: 7800,
    originalPrice: 9500,
    rating: 4.89,
    reviewsCount: 27,
    tag: 'Trending',
    isNew: true,
    isBestseller: true,
    stockLeft: 5,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Champagne Taupe', hex: '#d1c4b2' },
      { name: 'Noir Onyx', hex: '#1a1a1a' },
      { name: 'Sage Celadon', hex: '#a6b5a3' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    fabric: '100% Fine Mulberry Silk Georgette with Pure Silk Lining',
    care: 'Dry clean only to preserve permanent micro sunray pleating.',
    description: 'Engineered with precise graduated sunray accordion pleats that expand gracefully with every stride. Finished with a delicate silk-satin waistband.',
    highlights: [
      'Permanent thermal pleated technology resists crushing',
      'Concealed invisible side zipper with silk covered button',
      'Sweeping floor-grazing hemline with baby marrow finish',
      'Full breathable silk habotai inner lining'
    ]
  },

  // 21. NEW: Corduroy Explorer Dungarees (Kids)
  {
    id: 'eln-021',
    name: 'Corduroy Explorer Dungarees',
    subtitle: 'Fine Wale Soft Corduroy · Adjustable Brass Buckles',
    category: 'kids',
    collection: 'Mini Élan',
    price: 4890,
    originalPrice: 5900,
    rating: 4.93,
    reviewsCount: 21,
    tag: 'Kids Favorite',
    isNew: true,
    isBestseller: false,
    stockLeft: 8,
    images: [
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Cinnamon Toast', hex: '#a35d39' },
      { name: 'Olive Grove', hex: '#6b705c' },
      { name: 'Navy Blue', hex: '#223344' }
    ],
    sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs', '8-9 Yrs'],
    fabric: '100% Organic Cotton Fine-Wale Velvet Corduroy',
    care: 'Machine wash 30°C inside out. Low iron on reverse.',
    description: 'Charming vintage-style overalls tailored in velvety soft cotton corduroy. Adjustable straps grow with your child for multi-season versatility.',
    highlights: [
      'Adjustable sliding brass dungaree buckles for growing toddlers',
      'Front center pouch pocket and side slant pockets for treasures',
      'Elasticated side waist panels for snug and flexible fit',
      'Reinforced crotch gusset prevents seam tearing during playtime'
    ]
  },

  // 22. NEW: Linen Double-Breasted Trench Coat (Women)
  {
    id: 'eln-022',
    name: 'Linen Double-Breasted Trench',
    subtitle: 'Unstructured Summer Duster · Storm Flap & Horn Buckle',
    category: 'women',
    collection: 'Atelier Tailored',
    price: 16500,
    originalPrice: 19800,
    rating: 4.98,
    reviewsCount: 36,
    tag: 'Atelier Edition',
    isNew: true,
    isBestseller: true,
    stockLeft: 3,
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85'
    ],
    colors: [
      { name: 'Natural Sand', hex: '#c9baa4' },
      { name: 'Vintage Olive', hex: '#585e50' },
      { name: 'Noir Black', hex: '#1c1c1e' }
    ],
    sizes: ['XS-S', 'M-L'],
    fabric: '100% Belgian Heavyweight Washed Linen (310 GSM)',
    care: 'Dry clean or cold gentle soak. Hang dry to maintain organic drape.',
    description: 'A relaxed reinterpretation of the iconic military trench. Cut from heavy 310 GSM Belgian linen with an unlined construction that billows with wind.',
    highlights: [
      'Double-breasted front with genuine buffalo horn buttons',
      'Deep back storm shield with inverted box pleat',
      'Wide fabric tie belt with leather wrapped buckle',
      'Raglan sleeves for comfortable layering over knitwear'
    ]
  }
];

export const CATEGORIES = [
  {
    id: 'all',
    name: 'All Creations',
    count: 22,
    description: 'Explore the complete wardrobe of contemporary essentials and bespoke couture.'
  },
  {
    id: 'women',
    name: 'Women Pret',
    count: 8,
    description: 'Effortless silk slips, tailored trousers, cashmere knits, linen trenches, and French shirts.'
  },
  {
    id: 'men',
    name: 'Men’s Contemporary',
    count: 6,
    description: 'Atelier blazers, classic denim jackets, heavyweight pima basics, oxford shirts, and selvedge denim.'
  },
  {
    id: 'luxury-pret',
    name: 'Haute & Festive Pret',
    count: 4,
    description: 'Zardozi hand-embroidered silks, velvet sherwanis, silk kaftans, and double-faced cashmere.'
  },
  {
    id: 'kids',
    name: 'Mini Élan',
    count: 4,
    description: 'Gentle festive kurta sets, corduroy dungarees, weekend play sets, and explorer hoodies.'
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: 'Spring / Summer Haute Couture 2026',
    title: 'The Art of Subtle Luxury',
    subtitle: 'Sculpted silhouettes, fluid drape, and timeless French linen crafted for life’s grandest moments.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85',
    ctaPrimary: 'Shop New Arrivals',
    ctaSecondary: 'View Lookbook',
    category: 'all',
    badge: 'New Season Unveiled'
  },
  {
    id: 2,
    eyebrow: 'Atelier Bespoke Edition',
    title: 'Master Tailoring & Pure Silk',
    subtitle: 'From Italian wool blazers to raw Chanderi silks hand-embroidered over 70 meticulous hours.',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1800&q=85',
    ctaPrimary: 'Explore Pret',
    ctaSecondary: 'Atelier Story',
    category: 'luxury-pret',
    badge: 'Limited Handcraft'
  },
  {
    id: 3,
    eyebrow: 'Modern Gentleman Edit',
    title: 'Precision in Every Thread',
    subtitle: 'Heavyweight pima basics, refined utility overshirts, and Japanese shuttle-loomed selvedge.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85',
    ctaPrimary: 'Shop Men’s Collection',
    ctaSecondary: 'Discover Fabrics',
    category: 'men',
    badge: 'Modern Tailoring'
  }
];

export const TRUST_BADGES = [
  {
    icon: 'Truck',
    title: 'Complimentary Express Delivery',
    description: 'Nationwide 2-3 business day delivery on all orders above Rs. 5,000'
  },
  {
    icon: 'ShieldCheck',
    title: '100% Certified Authentic Fabrics',
    description: 'Mulberry silk, Normandy flax linen & long-staple organic cotton'
  },
  {
    icon: 'Sparkles',
    title: 'Bespoke Finishing & Custom Fit',
    description: 'Artisan hand-embroidery and tailored silhouettes made to perfection'
  },
  {
    icon: 'RotateCcw',
    title: '14-Day Seamless Exchange',
    description: 'Complimentary doorstep pickups for stress-free size & style swaps'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Ayesha Khan',
    city: 'Lahore, Pakistan',
    rating: 5,
    title: 'Outclass quality and royal finishing!',
    comment: 'I ordered the Raw Silk Festive Kurta Set for my brother’s engagement. The hand zardozi work is breathtaking in real life, exactly like high-end couture studios. The packaging was like unboxing a royal gift trunk!',
    date: '2 days ago',
    verified: true,
    item: 'Raw Silk Festive Kurta Set'
  },
  {
    id: 2,
    name: 'Daniyal Ahmed',
    city: 'Karachi, Pakistan',
    rating: 5,
    title: 'Best blazer I have ever owned',
    comment: 'The Italian wool-blend blazer fits like it was bespoke made for me. Shoulder pads are soft, lapel roll is razor sharp, and the horn buttons feel luxurious. Highly impressed with ÉLAN.',
    date: '1 week ago',
    verified: true,
    item: 'Tailored Wool-Blend Blazer'
  },
  {
    id: 3,
    name: 'Mahnoor Tariq',
    city: 'Islamabad, Pakistan',
    rating: 5,
    title: 'Linen perfection for summer heat',
    comment: 'The French linen shirt is airy, chic, and drapes so gracefully. You can instantly tell this is genuine high-grade linen and not synthetic blends. Getting it in the black shade next!',
    date: '2 weeks ago',
    verified: true,
    item: 'Relaxed Linen Shirt'
  }
];

export const LOOKBOOK_PINS = [
  {
    id: 'look-1',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    title: 'Summer Serenade Edit',
    season: 'Resort 2026',
    hotspots: [
      {
        top: '38%',
        left: '52%',
        productId: 'eln-001',
        title: 'Relaxed Linen Shirt',
        price: 'Rs. 3,490'
      },
      {
        top: '72%',
        left: '48%',
        productId: 'eln-003',
        title: 'Everyday Tailored Trousers',
        price: 'Rs. 4,290'
      }
    ]
  }
];
