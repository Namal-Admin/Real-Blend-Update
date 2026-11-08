import { Article, Comment } from '../types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'story-top-main',
    title: 'Get the latest news, updates and stories shaping Kenya.',
    excerpt: 'From major economic policy reforms in Nairobi to grassroots developments across the 47 counties, unpack the defining stories transforming East Africa’s economic hub.',
    content: [
      'Kenya’s socio-economic landscape is undergoing a profound transformation as regional trade integration, digital public infrastructure, and fiscal adjustments take center stage.',
      'In Nairobi, leaders from public and private sectors are convening to review key modernization milestones across agriculture, energy, and digital economy sectors. The focus remains steadfast on reducing the cost of living while stimulating domestic value-addition industries.',
      'Public infrastructure projects including the continued expansion of standard gauge railway feeder lines, the modernization of the port of Mombasa, and rapid rural electrification are creating unprecedented commercial corridors.',
      '“Our priority is building an inclusive economy that leaves no county behind,” stated regional planning analysts during an economic review forum. “The intersection of young digital innovators, agricultural value chains, and regional transport networks represents the true engine of Kenya’s growth.”',
      'Citizens from across the country continue to voice their priorities, demanding transparent governance, prudent tax utilization, and accelerated youth employment opportunities.'
    ],
    category: 'Kenya News',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80',
    imageCaption: 'Nairobi skyline during morning rush hour as East Africa’s financial hub charges into a new fiscal quarter.',
    author: 'Victor Ochieng',
    authorRole: 'Senior National Affairs Editor',
    date: 'Today, 08:30 AM',
    readTime: '4 min read',
    isTopStory: true,
    views: 14820,
    commentsCount: 38,
    tags: ['Kenya', 'Economy', 'Nairobi', 'National News', 'Governance']
  },
  {
    id: 'story-top-side',
    title: 'Stay informed. Stay ahead.',
    excerpt: 'A comprehensive pulse check on Kenya’s geopolitical alliances, East African Community bilateral deals, and institutional accountability measures.',
    content: [
      'In an era characterized by dynamic global realignment, Kenya continues to play an anchor diplomatic role across the Horn of Africa and the East African Community (EAC).',
      'Recent high-level deliberations on cross-border tariff harmonization and digital customs declarations are set to slash intra-regional trade friction by over 30%.',
      'Domestically, civic watchdogs and parliamentary committees are intensifying scrutiny over devolution disbursements, ensuring that county allocations translate directly into clean water access, upgraded health dispensaries, and feeder road maintenance.',
      'As citizens consume news across social channels, The Real Blend remains dedicated to delivering verified facts, balanced analysis, and objective reporting on the developments that matter most to your daily life.'
    ],
    category: 'Politics',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop&q=80',
    imageCaption: 'East African diplomatic delegations meeting for regional cooperation and trade integration.',
    author: 'Grace Wanjiru',
    authorRole: 'Diplomatic & Policy Correspondent',
    date: 'Today, 07:15 AM',
    readTime: '3 min read',
    isSideStory: true,
    views: 9540,
    commentsCount: 22,
    tags: ['EAC', 'Diplomacy', 'Trade', 'Current Affairs']
  },
  {
    id: 'story-entertainment-1',
    title: 'Latest entertainment news and celebrity updates.',
    excerpt: 'Get the latest happenings in Kenya’s entertainment industry — from Gengetone evolutions and comedy showcases to breakout international music collaborations.',
    content: [
      'Kenya’s vibrant creative industry is experiencing an exhilarating renaissance. Local producers, songwriters, and filmmakers are commanding global stages, propelled by streaming platforms and social media viral waves.',
      'Over the weekend, Nairobi’s Carnivore grounds witnessed an electrifying crowd of thousands as homegrown musical trailblazers teamed up with international guest stars for an unforgettable sound celebration.',
      'Beyond live performances, Kenyan film and episodic storytelling are securing lucrative spots on leading international video-on-demand networks, showcasing authentic Nairobi narratives, Kalenjin folklore, and coastal Swahili dramas to global audiences.',
      '“We are moving past the era where Kenyan creatives were restricted to local airwaves,” shared veteran music producer Eric Musyoka. “The sound is refined, the marketing is digital-first, and our youth are boldly unapologetic about our culture.”'
    ],
    category: 'Entertainment',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80',
    imageCaption: 'Concertgoers cheer under festival lights during a weekend music extravaganza in Nairobi.',
    author: 'Brian Kiprop',
    authorRole: 'Entertainment & Culture Lead',
    date: 'Nov 8, 2026',
    readTime: '3 min read',
    views: 18450,
    commentsCount: 64,
    tags: ['Entertainment', 'Nairobi Nightlife', 'Music', 'Celebrity', 'Gengetone']
  },
  {
    id: 'story-politics-1',
    title: 'Political developments making headlines across Kenya.',
    excerpt: 'Follow the latest political conversations and developments as national assemblies debate key statutory bills and county governments present their annual audits.',
    content: [
      'The halls of Parliament in Nairobi were charged this week as lawmakers tabled substantive revisions to the statutory fiscal framework, debating public debt caps and local revenue collection measures.',
      'Key opposition legislators and civil society coalitions have insisted on rigorous public participation sessions across all 47 counties before the proposed revenue amendments are enacted.',
      'Meanwhile, County Governors under the Council of Governors (CoG) have renewed calls for timely exchequer releases, cautioning that delayed transfers jeopardize healthcare worker salaries and county medical supplies.',
      'Political analysts observe that with intermediate elections on the horizon, coalitions are actively testing grassroots messaging, particularly targeting the youthful demographic that forms over 65% of the registered electorate.'
    ],
    category: 'Politics',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80',
    imageCaption: 'Parliament buildings in Nairobi during active legislative debate on public revenue policies.',
    author: 'Kevin Mutua',
    authorRole: 'Chief Political Correspondent',
    date: 'Nov 8, 2026',
    readTime: '5 min read',
    views: 12380,
    commentsCount: 45,
    tags: ['Parliament', 'Devolution', 'Bunge', 'Politics', 'Elections']
  },
  {
    id: 'story-lifestyle-1',
    title: 'People, culture, relationships and lifestyle stories.',
    excerpt: 'Discover interesting stories and conversations that matter — from modern urban wellness trends to sustainable slow-living across Kenyan highlands.',
    content: [
      'As urban life in fast-paced cities like Nairobi and Mombasa grows increasingly connected, thousands of Kenyans are intentionally rediscovering holistic wellbeing, outdoor leisure, and mindful community living.',
      'Weekend cycling expeditions through Karura Forest, sunrise yoga retreats in Tigoni tea estates, and artisanal farmers’ markets in Karen and Westlands have turned from niche hobbies into mainstream family traditions.',
      'At the same time, young Kenyan professionals are redefining relationship norms and financial independence. Collective investment clubs—chamas—have modernized into digital fintech micro-funds investing in agricultural technology and eco-tourism cottages.',
      '“It is about striking a healthy equilibrium between ambition and personal peace,” says lifestyle coach Sandra Muthoni. “The modern Kenyan wants career success without sacrificing mental well-being and genuine communal ties.”'
    ],
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
    imageCaption: 'Friends gathering in an open-air Nairobi garden café over local brew and brunch.',
    author: 'Achieng Mwangi',
    authorRole: 'Lifestyle & Wellness Columnist',
    date: 'Nov 7, 2026',
    readTime: '4 min read',
    views: 8920,
    commentsCount: 19,
    tags: ['Lifestyle', 'Wellness', 'Tigoni', 'Relationships', 'Urban Culture']
  },
  {
    id: 'story-sports-1',
    title: 'Sports updates, results and trending stories.',
    excerpt: 'Follow local and international sporting action — from Harambee Stars’ competitive qualifiers to Kenya’s peerless middle and long-distance athletics royalty.',
    content: [
      'Kenya’s sporting prowess continues to captivate the globe. At the national athletics trials in Eldoret, the ‘City of Champions’, a new generation of teenage track phenoms posted world-leading times in the 5,000m and 1,500m events.',
      'Head coaches were effusive in their praise: “The depth of talent in the North Rift region is virtually inexhaustible. These young men and women train with relentless grit, inspired by legends who paved the way before them.”',
      'In football, the Football Kenya Federation (FKF) Premier League served up a scintillating Mashemeji Derby thriller that had over 30,000 passionate fans roaring at Kasarani Stadium. Gor Mahia and AFC Leopards locked horns in a tactically disciplined duel that ended in a dramatic 2-2 draw.',
      'Preparations are also well underway for the upcoming WRC Safari Rally Kenya, which promises unforgiving terrain and world-class rally drivers navigating the rugged Great Rift Valley trails in Naivasha.'
    ],
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80',
    imageCaption: 'Kenyan runners training along the high-altitude trails of Iten at dawn.',
    author: 'Dennis Kemboi',
    authorRole: 'Sports Editor',
    date: 'Nov 7, 2026',
    readTime: '3 min read',
    views: 21300,
    commentsCount: 77,
    tags: ['Athletics', 'FKF', 'Harambee Stars', 'Safari Rally', 'Eldoret']
  },
  {
    id: 'story-technology-1',
    title: 'Technology, innovation and digital transformation.',
    excerpt: 'Explore the latest trends in the digital world: AI tools empowering rural smallholders, M-Pesa merchant innovations, and Silicon Savannah’s venture surge.',
    content: [
      'Kenya’s reputation as Africa’s Silicon Savannah continues to consolidate as next-generation climate tech and agritech startups seal landmark funding rounds.',
      'At a tech summit in Nairobi’s Silicon Savannah corridor along Ngong Road, software architects showcased generative AI models trained on local indigenous languages such as Swahili, Kikuyu, and Dholuo, enabling conversational financial literacy and veterinary advisory for farmers without smartphones.',
      'Mobile payment integration has reached unprecedented ubiquity. Merchants across both open-air markets like Gikomba and high-end malls are processing instant micro-payments with biometric zero-friction authorization.',
      '“Kenya skipped traditional desktop computing straight to mobile, and now we are skipping legacy banking straight into intelligent decentralized finance,” remarked fintech founder Dr. Paul Kamau.'
    ],
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    imageCaption: 'Software engineers collaborating at a tech innovation incubator in Westlands, Nairobi.',
    author: 'Faith Chebet',
    authorRole: 'Tech & Innovation Reporter',
    date: 'Nov 6, 2026',
    readTime: '4 min read',
    views: 16740,
    commentsCount: 31,
    tags: ['Silicon Savannah', 'Tech', 'AI', 'Fintech', 'M-Pesa', 'Startups']
  },
  {
    id: 'story-kenya-news-1',
    title: 'Stories and developments from across the country.',
    excerpt: 'Stay updated on what is happening in Kenya: major infrastructure expansions in the Coast region, bumper harvest projections, and community water resilience projects.',
    content: [
      'From the turquoise shores of Kilifi to the fertile highlands of Mt. Kenya, communities across the republic are driving impactful grassroots initiatives.',
      'In the Rift Valley breadbasket, favorable seasonal rains and subsidized fertilizer distribution have set the stage for one of the most prolific maize and cereal harvests in recent years, easing food inflation pressures nationwide.',
      'Along the coastal corridor, the inauguration of new feeder berths at the Port of Lamu has spurred fresh blue-economy investments, providing coastal youth with specialized vocational training in maritime logistics and sustainable deep-sea fisheries.',
      'The Real Blend’s county correspondents remain stationed in all regions to deliver uncensored, timely, and balanced coverage reflecting the genuine lived experiences of ordinary Kenyans.'
    ],
    category: 'Kenya News',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&auto=format&fit=crop&q=80',
    imageCaption: 'Scenic sunset over Kenya’s savannas and wildlife conservancies.',
    author: 'Victor Ochieng',
    authorRole: 'Senior National Affairs Editor',
    date: 'Nov 6, 2026',
    readTime: '3 min read',
    views: 11200,
    commentsCount: 18,
    tags: ['Counties', 'Agriculture', 'Lamu Port', 'Devolution', 'Blue Economy']
  },
  {
    id: 'story-business-sgr',
    title: 'Green energy revolution: Kenya hits 91% renewable power grid milestone.',
    excerpt: 'Geothermal expansion in Olkaria and mega wind turbines along Lake Turkana propel Kenya into the world top 10 for clean grid electricity.',
    content: [
      'Kenya has achieved a momentous environmental milestone: over 91% of electricity fed into the national transmission grid is now generated from renewable sources, led by geothermal, hydro, and wind installations.',
      'The expansion of the Olkaria geothermal wells in Naivasha continues to draw multinational tech corporations seeking carbon-neutral data centers powered by steam beneath the Great Rift Valley.',
      'Meanwhile, the Lake Turkana Wind Power project—Africa’s largest wind farm—is maintaining steady output, supplying reliable power to industrial manufacturing hubs and lowering carbon emission penalties for export manufacturers.',
      'Energy ministry officials noted that Kenya is on track to achieve 100% clean power generation well before the 2030 international target, setting a shining example for developing economies globally.'
    ],
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80',
    imageCaption: 'Wind turbines harvesting clean energy along the Rift Valley escarpment.',
    author: 'Faith Chebet',
    authorRole: 'Tech & Energy Reporter',
    date: 'Nov 5, 2026',
    readTime: '4 min read',
    views: 14190,
    commentsCount: 26,
    tags: ['Green Energy', 'Geothermal', 'Naivasha', 'Sustainability', 'Environment']
  }
];

export const INITIAL_BREAKING_NEWS = [
  'Welcome to The Real Blend — Your source for trending stories and news that matter.',
  'Central Bank of Kenya reports foreign exchange reserves surge to 4.8 months of import cover.',
  'Athletics Kenya confirms roster for World Cross Country Championships with record entries.',
  'Nairobi Expressway registers 50 millionth trip milestone as smart tolling expands.',
  'Ministry of Education unveils new digital textbook portal for secondary schools.'
];

export const INITIAL_COMMENTS: Record<string, Comment[]> = {
  'story-top-main': [
    {
      id: 'c1',
      articleId: 'story-top-main',
      authorName: 'Otieno Kennedy',
      text: 'Great reporting by The Real Blend! Focusing on real economic issues in the counties is what independent journalism should always be about.',
      timestamp: '2 hours ago',
      likes: 14
    },
    {
      id: 'c2',
      articleId: 'story-top-main',
      authorName: 'Mary Wangari',
      text: 'Transparency in county disbursements is vital. We want to see hospitals fully stocked and youth getting practical skills.',
      timestamp: '1 hour ago',
      likes: 8
    }
  ],
  'story-entertainment-1': [
    {
      id: 'c3',
      articleId: 'story-entertainment-1',
      authorName: 'DJ Kaligraph Fan',
      text: 'The Nairobi creative scene is unmatched right now! Big up The Real Blend for giving Kenyan talent the spotlight.',
      timestamp: '3 hours ago',
      likes: 23
    }
  ],
  'story-sports-1': [
    {
      id: 'c4',
      articleId: 'story-sports-1',
      authorName: 'Kiprotich Sang',
      text: 'Iten runners never disappoint. That 5000m trial was world class. Watch out for the upcoming world championships!',
      timestamp: '4 hours ago',
      likes: 19
    }
  ]
};
