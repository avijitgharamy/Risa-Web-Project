import { Project, Competency, Review } from './types';

export const COMPETENCIES: Competency[] = [
  {
    id: 'residential',
    title: 'Home Interior & Exterior',
    description: 'Tailored residential solutions merging traditional Bangladeshi heritage aesthetics with global modern functionality.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujX5nfM35ZnU3zhIyzQY6H_uvtGayduE0H7xSPT0HhFYEj7DKMbhVhxLXX78H03vHGb5MyXFA3TeUWiNT2sz7QBDt5eY4dBB7rc3EJf-NwMyW_yGH8XNItCmVLMc6HkL7OoV0X-ccF4JmkijT6-FoYvT9KP98YxRBvVrCZCIznmrm6fhkTZ32j6EzFIfFToYPTQUub4iqNvJRvUicS00gfPh5fSIchkuc-OC_fjprMQAY-gLdzaCex8m8Q',
    details: 'Our residential projects reflect the unique lifestyle of our clients. We offer high-end turnkey services covering drawing-room layouts, custom walk-in closets, bespoke solid teak furniture, premium false ceilings, mood lighting designs, smart home integrations, and outdoor balcony gardens specifically tailored to Bangladesh climate.',
    keySpecs: [
      'Bespoke teak-wood carpentry',
      'Indirect ambient LED architecture',
      'Space-saving hidden cabinets',
      'Dual exterior/interior waterproofing',
      'Smart remote home automation'
    ],
    icon: 'home'
  },
  {
    id: 'office',
    title: 'Office Spaces',
    description: 'Modern corporate layouts optimizing productivity, employee well-being, and sleek executive brand identity.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujoJGOWSoHT4XIhKqhq4mJVG5KbuqQU7U5tGLIbTDwM1_X_1_78LjYMoH_Il4xj7OzF-oV5aEUopFCPeiv0WtCCxAnwxf41YqYEDJ4RwkpFshjwpgV4biYTcSKWBxxOLs3SQqSl8AiRfCbCoydxwlzw3VXcfiX3hyw3lG-zzaRTPnMmhNKcd5H9-LdwPr9d1B4UEoBwQHf2Ej85drgfkL3ZoJrjxThB581T0NtDIBqI04YI9P-jCukVMBE',
    details: 'Designed to boost corporate output and create a luxurious, premium impression for absolute executive distinction. Features modern soundproof boardroom glass partitions, ergonomic smart-desk grids, dynamic task lighting, climate-controlled server rooms, signature lobby spaces, and bespoke reception backdrops.',
    keySpecs: [
      'Acoustic soundproof glass partitions',
      'Ergonomic layout planning',
      'Integrated server room cabling grids',
      'Professional brand-color matching',
      'Energy-efficient lighting sensors'
    ],
    icon: 'work'
  },
  {
    id: 'hospital',
    title: 'Hospital Interior',
    description: 'Specialized sterile yet comforting healthcare architecture focused on user safety and deep aesthetic tranquility.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uh-kdKa4BkoUy0xHZPP5xoQcKZmhnrYSqqhWvESEWEk4iS5ODbXKBjgjW7T86sf9qO9KSR1w67EvmRFnFv3Irp_EscPJ2J-gdvc4CFuHbxQSQ4ZP-2qR_PgGGSK8S007gIDoVouT689v-VTRhV4MZB34wVsYZtjzDO2VfgFn3KwEeENhtPUYP_Y_cTnTTOBYn12884LU2PtCtiXu0EEuSu4VseOFkZ1wuzy1m3mrSlzOMycUYrtpTHotY4',
    details: 'We build state-of-the-art biological safety and medical architecture. From calming outpatient lobbies and sterile ICU designs to high-efficiency nurse-stations, anti-microbial wall cladding, automated emergency routing paths, and soothing color systems that actively aid patient recovery.',
    keySpecs: [
      'Anti-microbial medical grade cladding',
      'ICU & Operation theater sterilization layouts',
      'Optimized emergency patient flows',
      'Soothing organic color psychology',
      'HEPA filter integration friendly ceilings'
    ],
    icon: 'medical_services'
  },
  {
    id: 'parlour',
    title: 'Parlour Design',
    description: 'Glamorous and functional beauty salons with high-end gold accents, flawless studio illumination, and luxury treatment beds.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiU8KmMJAJsg356_z7Qf06Pf9Jyt7c9H4ORSpWIcAwMVlcWm0UX_iwFkVvnL8GCEnewMo6F8D0Xzu32cP1QL2rN1OWavJEsw-67qWBI2W-oJR0YIoiMQWoPesXq_0yd8stReu-3CcHM1xV9wvce6Y6nxI458si_H5PBypfaZXiQspR3Tc-4X58UqCHny8aFRwxBEvtQ0CLic8_aQHllarhY-XaHvgY1thiRbRx3sf8AZKZxEKY8xXU4qHw',
    details: 'We create ultra-instagrammable retail beauty sanctuaries. Features bespoke luxury wash stations, shadow-free mirror rings, luxury gold-trimmed steel accents, custom display shelves, private body therapy chambers, and ambient humidity control.',
    keySpecs: [
      'Shadow-free color-accurate ring mirrors',
      'Corrosion resistant gold-plated fixtures',
      'Premium spa therapy acoustic isolation',
      'Bespoke product retail showcases',
      'High-capacity drainage plumbing integrations'
    ],
    icon: 'spa'
  },
  {
    id: 'gym',
    title: 'GYM Interior',
    description: 'High-energy layout optimization with dynamic motivational lighting, heavy-load floor armor, and soundproofing core structures.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhK2_QXqzEi6bWH2mC-NJoA6_yqlEWFD6G7SjxKtSGv1HTXlSfgJBEqwi9wjMAir-KmOFBSsbEFdyHD8YtGWTiRJ821z8VVyCR3FXEmTYCX7KswDtD2hFAYPynEQxl0efcANYrA-TFKaTTfUG7FWdhsHNqVEFnrDrtJIgpFdz_9lCAo8lZ2VlcEdLkdEofL786eaB0ug2apFzObbzOBkqCKn88Kyd_dyR7jIg3PGxmEbSsPfooZX3CpWAA',
    details: 'Heavy-impact visual and physical architecture. From dual-layered shockproof premium rubber flooring, structural shock-resistant pillars, giant motivational mirror assemblies, high-volume HVAC air renewal ventilation grids, and intense color-changing linear lighting setups.',
    keySpecs: [
      'Dual-layer high-density vulcanized flooring',
      'High-velocity ventilation cycle layout',
      'RGB linear motivational light corridors',
      'Extra-thick safety mirrors',
      'High-decibel acoustic dampening partitions'
    ],
    icon: 'fitness_center'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Urban Residence Elite',
    category: 'residential',
    location: 'Gulshan-2, Dhaka, Bangladesh',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugUXmVbZUBu3Y8-M730A038Jl2Mo63mOceluJiZJEMBZmCIsRfHLJIz0AyzJqWqbL2Wh6TX9ZHxLPsQVpN99SWWef7nmJPSvxtfb5dOOfyI_1uAQWWWxhDO9GYEQkR3HB4ZsXRZWVT6VUTO6LG7o3z374xjpBDdGKAAoNo_QRZOcsGRiNFZQPchOr2Pc8qBlWvyaNME15A8RqYG2eb7Vx6Dvt-9go2DnE1axo7fGDPfk6qXVBEXI-qG6Pg',
    beforeImage: 'https://lh3.googleusercontent.com/aida/ADBb0ujX5nfM35ZnU3zhIyzQY6H_uvtGayduE0H7xSPT0HhFYEj7DKMbhVhxLXX78H03vHGb5MyXFA3TeUWiNT2sz7QBDt5eY4dBB7rc3EJf-NwMyW_yGH8XNItCmVLMc6HkL7OoV0X-ccF4JmkijT6-FoYvT9KP98YxRBvVrCZCIznmrm6fhkTZ32j6EzFIfFToYPTQUub4iqNvJRvUicS00gfPh5fSIchkuc-OC_fjprMQAY-gLdzaCex8m8Q',
    size: '4,500 sqft',
    budget: '$150,000 / BDT 1.8 Crore',
    description: 'A masterpiece on Gulshan Avenue. Beautifully merges custom handworked traditional craftsmanship with clean Italian modern marble structures.',
    features: [
      'Bespoke hand-carved mahogany panels',
      'Statuttario Italian marble flooring',
      'Smart multi-zone sound distribution',
      'Full customized modular kitchen'
    ]
  },
  {
    id: 'proj-2',
    title: 'Corporate HQ Zenith',
    category: 'corporate',
    location: 'Banani-11, Dhaka, Bangladesh',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujB6zFpUMXei-oqtExLn93k6mBRTdZNeAW0W5pLvCJoKo9vtpXCqL056wKGjv06sv7NnOFr2l2w2DNKdVXp5MjXOr_SJnxguli-51ZnRszTmK2lyyBZNrEqQX_LJUuF8hFNuMVxCyJV6IzZVVpSsLVAfmD7iCYne_IdVKIOwgpXkFplPd7RVDuyfulowvhv5ryP3Ney-D7n7MEeCvTijbAxXnvO-05XEZyIPmK8-5f7rmal2Qio1YCDdQ',
    size: '12,500 sqft',
    budget: '$340,000 / BDT 4.1 Crore',
    description: 'State of the art headquarters with glass acoustic separation, dynamic color corridors, ergonomic workbenches, and high-end executive luxury quarters.',
    features: [
      'Soundproofed frameless meeting pods',
      'Bespoke 20-foot solid concrete reception desk',
      'Dynamic sensor ambient thermal control',
      'Interactive visual projection glass walls'
    ]
  },
  {
    id: 'proj-3',
    title: 'Manhattan Studio Luxe',
    category: 'residential',
    location: 'Manhattan, New York City, USA',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiN6UXcSaUxu21m7DHH3SsA5rIPt3ok86pBvKk5-gwkEqSF36Qtuf0vFAVGa3n8_kktPtws39HFc0dcj0zxdTYpejBsXp0QLfT4tZ8rwprFRPr3yt0AYT-8JT22mqavhfzU8q7-2mSUEyFF8zNgqByxKjgFzkUhpamGt1M5rk7Wyyxv7GUHiVvWisaVAcX_VcKSN1jboTNdDgw3WvlFfv_knKx0qy92QOsuYjlWCSsz4_h32wJQprW-j8A',
    size: '1,800 sqft',
    budget: '$210,000',
    description: 'A global partnership project blending Eastern high-contrast warmth, handcrafted wooden patterns, and classic Western luxury skyscraper glazing.',
    features: [
      'Integrated floating wall ceiling patterns',
      'Rich custom structural bronze framework',
      'Panoramic double-layer noise-block glass',
      'Custom luxury studio bar'
    ]
  },
  {
    id: 'proj-4',
    title: 'Al-Hera Premium Specialized Clinic',
    category: 'hospitality', // hospitality/medical representation
    location: 'Uttara, Dhaka, Bangladesh',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uh-kdKa4BkoUy0xHZPP5xoQcKZmhnrYSqqhWvESEWEk4iS5ODbXKBjgjW7T86sf9qO9KSR1w67EvmRFnFv3Irp_EscPJ2J-gdvc4CFuHbxQSQ4ZP-2qR_PgGGSK8S007gIDoVouT689v-VTRhV4MZB34wVsYZtjzDO2VfgFn3KwEeENhtPUYP_Y_cTnTTOBYn12884LU2PtCtiXu0EEuSu4VseOFkZ1wuzy1m3mrSlzOMycUYrtpTHotY4',
    size: '8,200 sqft',
    budget: '$180,000 / BDT 2.2 Crore',
    description: 'An elite medical facility interior prioritizing calming atmosphere, continuous anti-microbial surfaces, and optimized emergency room transitions.',
    features: [
      'Seamless germ-resistant panel joints',
      'Circadian support smart lighting grid',
      'Elegant VIP suite layout',
      'Automated sanitization passages'
    ]
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    clientName: 'Rahat Chowdhury',
    role: 'Managing Director',
    company: 'Chowdhury Apparels Ltd',
    rating: 5,
    comment: 'Risa Engineering transformed our dark, boxed Banani office space into a breathtaking modern masterwork of light and premium craftsmanship. Their focus on structural safety and acoustic controls is unparalleled.',
    date: '2026-02-12'
  },
  {
    id: 'rev-2',
    clientName: 'Nusrat Jahan',
    role: 'Home Owner',
    company: 'Gulshan Lakeside Villa',
    rating: 5,
    comment: 'Absolute elegance! They honored our traditional Bangladeshi desires with solid mahogany accents while making the layout modular, minimal, and fully smart-phone automated. Recommended absolutely!',
    date: '2026-04-05'
  }
];
