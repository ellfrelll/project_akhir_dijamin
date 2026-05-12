// Data jam tangan — gambar di-serve dari /public/watches/
const img = (name) => `/watches/${name}.png`;
const rolexDayDate = img("rolex-day-date");
const rolexSubmariner = img("rolex-submariner");
const omegaSeamaster = img("omega-seamaster");
const patekCalatrava = img("patek-calatrava");
const patekMoonphase = img("patek-moonphase");
const apRoyalOak = img("ap-royal-oak");
const tagCarrera = img("tag-carrera");
const rolexGmt = img("rolex-gmt-pepsi");
const rolexDatejust = img("rolex-datejust");
const omegaSpeed = img("omega-speedmaster");
const omegaGlobe = img("omega-globemaster");
const patekNautilus = img("patek-nautilus");
const patekAquanaut = img("patek-aquanaut");
const apOffshore = img("ap-royal-oak-offshore");
const apCode = img("ap-code-1159");
const tagMonaco = img("tag-monaco");
const tagAquaracer = img("tag-aquaracer");
const tagFormula = img("tag-formula1");

export const brands = [
  { slug: "rolex", name: "Rolex", blurb: "Ikonnya jam mewah dunia. Pakai Rolex, langsung beda auranya.", accent: "Geneva, Swiss · est. 1905", monogram: "R" },
  { slug: "omega", name: "Omega", blurb: "Pernah dipakai ke Bulan, sekarang nemenin kamu ke kantor. Sporty dan tangguh.", accent: "Bienne, Swiss · est. 1848", monogram: "Ω" },
  { slug: "patek-philippe", name: "Patek Philippe", blurb: "Ini bukan jam yang kamu pakai — ini jam yang kamu wariskan ke anak cucu.", accent: "Geneva, Swiss · est. 1839", monogram: "P" },
  { slug: "audemars-piguet", name: "Audemars Piguet", blurb: "Bezel oktagonalnya ngubah aturan main. Sport mewah versi terberani.", accent: "Le Brassus, Swiss · est. 1875", monogram: "AP" },
  { slug: "tag-heuer", name: "TAG Heuer", blurb: "Lahir di sirkuit balap. Cocok buat kamu yang suka tampil energik dan modern.", accent: "La Chaux-de-Fonds, Swiss · est. 1860", monogram: "TH" },
];

export const watches = [
  {
    id: "rolex-day-date", name: "Day-Date 40 Yellow Gold", brand: "Rolex", image: rolexDayDate,
    rating: 5, score: 4.9, label: "Pilihan Terbaik", collection: "Klasik",
    tagline: "Sang Presiden. Berwibawa tanpa banyak gaya.",
    description: "Jam ini cocok banget buat kamu yang pengen tampil berwibawa tapi tetep santai. Bezel emas 18 karat dan dial sampanye-nya bikin tangan kamu langsung kelihatan 'naik kelas'.",
    specs: [{ label: "Casing", value: "40 mm · emas kuning 18 ct" }, { label: "Movement", value: "Kaliber 3255, otomatis" }, { label: "Cadangan Daya", value: "70 jam" }, { label: "Dial", value: "Sampanye, indeks aplikatif" }],
  },
  {
    id: "rolex-submariner", name: "Submariner Date Vintage", brand: "Rolex", image: rolexSubmariner,
    rating: 5, score: 4.8, label: "Populer", collection: "Sport",
    tagline: "Diciptakan buat nyelam, dipakai buat ke mana aja.",
    description: "Tahan air sampai 300 meter, tapi tetep keren dipakai meeting. Submariner ini emang serbaguna — buat petualangan atau sekadar gaya harian.",
    specs: [{ label: "Casing", value: "41 mm · Oystersteel" }, { label: "Movement", value: "Kaliber 3235, otomatis" }, { label: "Tahan Air", value: "300 m" }, { label: "Bezel", value: "Cerachrom skala 60 menit" }],
  },
  {
    id: "omega-seamaster", name: "Seamaster Diver 300M", brand: "Omega", image: omegaSeamaster,
    rating: 5, score: 4.7, label: "Direkomendasikan", collection: "Sport",
    tagline: "Diver klasik versi modern yang lebih kece.",
    description: "Dial gelombang biru-nya bener-bener eye-catching. Cocok buat kamu yang suka tampil sporty tapi tetep elegan.",
    specs: [{ label: "Casing", value: "42 mm · stainless steel" }, { label: "Movement", value: "Co-Axial 8800 Master Chronometer" }, { label: "Tahan Air", value: "300 m" }, { label: "Sertifikasi", value: "Tersertifikasi METAS" }],
  },
  {
    id: "patek-calatrava", name: "Calatrava Ref. 6119R", brand: "Patek Philippe", image: patekCalatrava,
    rating: 5, score: 4.95, label: "Pilihan Editor", collection: "Klasik",
    tagline: "Simpel itu seni paling tinggi.",
    description: "Calatrava ini buktinya: nggak perlu ribet buat keliatan mewah. Emas mawar 39 mm yang bersih dan timeless — pas buat kamu yang suka classy minimalis.",
    specs: [{ label: "Casing", value: "39 mm · emas mawar 18 ct" }, { label: "Movement", value: "Kaliber 30-255 PS, manual wind" }, { label: "Cadangan Daya", value: "65 jam" }, { label: "Tali", value: "Aligator jahit tangan" }],
  },
  {
    id: "patek-moonphase", name: "Complications Moonphase", brand: "Patek Philippe", image: patekMoonphase,
    rating: 5, score: 4.9, label: "Pilihan Editor", collection: "Klasik",
    tagline: "Puisi yang dirakit dari mesin.",
    description: "Komplikasi moonphase yang akurat banget — cuma meleset sehari setiap 122 tahun. Jam ini bukan cuma penanda waktu, tapi karya seni di pergelangan kamu.",
    specs: [{ label: "Casing", value: "39 mm · emas mawar 18 ct" }, { label: "Komplikasi", value: "Moonphase, tanggal" }, { label: "Movement", value: "Kaliber 215 PS LU" }, { label: "Finishing", value: "Geneva Seal" }],
  },
  {
    id: "ap-royal-oak", name: "Royal Oak Selfwinding 41", brand: "Audemars Piguet", image: apRoyalOak,
    rating: 5, score: 4.85, label: "Populer", collection: "Modern",
    tagline: "Jam yang dulu dianggap nyeleneh, sekarang jadi legenda.",
    description: "Bezel oktagonal sama dial Grande Tapisserie biru-nya emang ikonik. Cocok buat kamu yang pengen tampil beda tapi tetep mewah.",
    specs: [{ label: "Casing", value: "41 mm · stainless steel" }, { label: "Movement", value: "Kaliber 4302, otomatis" }, { label: "Cadangan Daya", value: "70 jam" }, { label: "Dial", value: "Biru 'Grande Tapisserie'" }],
  },
  {
    id: "tag-carrera", name: "Carrera Chronograph", brand: "TAG Heuer", image: tagCarrera,
    rating: 4, score: 4.6, label: "Direkomendasikan", collection: "Modern",
    tagline: "Esensi kecepatan, dipadatkan ke pergelangan.",
    description: "Lahir buat dunia balap, Carrera ini punya jiwa motorsport yang kentel. Tiga sub-dial dan jarum chronograph merahnya bikin tampilan kamu makin hidup.",
    specs: [{ label: "Casing", value: "42 mm · baja" }, { label: "Movement", value: "Heuer 02, chrono otomatis" }, { label: "Cadangan Daya", value: "80 jam" }, { label: "Tali", value: "Kulit anak sapi berlubang" }],
  },
  {
    id: "rolex-gmt-pepsi", name: "GMT-Master II 'Pepsi'", brand: "Rolex", image: rolexGmt,
    rating: 5, score: 4.85, label: "Populer", collection: "Sport",
    tagline: "Dua zona waktu, satu paspor menuju ke mana aja.",
    description: "Buat kamu yang sering traveling, bezel merah-biru-nya bantu lacak dua zona waktu sekaligus. Iconic dan praktis.",
    specs: [{ label: "Casing", value: "40 mm · Oystersteel" }, { label: "Movement", value: "Kaliber 3285, otomatis" }, { label: "Cadangan Daya", value: "70 jam" }, { label: "Bezel", value: "Cerachrom dwiwarna 24 jam" }],
  },
  {
    id: "rolex-datejust", name: "Datejust 36 Jubilee", brand: "Rolex", image: rolexDatejust,
    rating: 5, score: 4.75, label: "Direkomendasikan", collection: "Klasik",
    tagline: "Definisi jam harian yang sempurna.",
    description: "Sejak 1945, Datejust ngebuktiin kalau elegan itu nggak perlu rame. Ukuran 36 mm-nya pas, bracelet Jubilee-nya nyaman, cocok dipakai harian.",
    specs: [{ label: "Casing", value: "36 mm · Oystersteel & emas kuning" }, { label: "Movement", value: "Kaliber 3235, otomatis" }, { label: "Cadangan Daya", value: "70 jam" }, { label: "Dial", value: "Wimbledon, indeks Romawi" }],
  },
  {
    id: "omega-speedmaster", name: "Speedmaster Moonwatch Professional", brand: "Omega", image: omegaSpeed,
    rating: 5, score: 4.9, label: "Pilihan Editor", collection: "Modern",
    tagline: "Jam yang nemenin manusia ke Bulan.",
    description: "Beneran dipakai astronot NASA pas nginjak Bulan. Pakai Speedmaster, kamu lagi nempel ke sejarah luar angkasa.",
    specs: [{ label: "Casing", value: "42 mm · stainless steel" }, { label: "Movement", value: "Kaliber 3861, manual wind" }, { label: "Cadangan Daya", value: "50 jam" }, { label: "Sertifikasi", value: "Master Chronometer METAS" }],
  },
  {
    id: "omega-globemaster", name: "Constellation Globemaster", brand: "Omega", image: omegaGlobe,
    rating: 4, score: 4.5, label: "Direkomendasikan", collection: "Klasik",
    tagline: "Observatorium mini di pergelangan kamu.",
    description: "Master Chronometer pertama di dunia. Dial pie-pan dan bezel beralur-nya bikin kesan klasik tapi tetep terasa modern.",
    specs: [{ label: "Casing", value: "39 mm · stainless steel" }, { label: "Movement", value: "Kaliber 8900 Co-Axial" }, { label: "Cadangan Daya", value: "60 jam" }, { label: "Dial", value: "Pie-pan opaline keperakan" }],
  },
  {
    id: "patek-nautilus", name: "Nautilus Ref. 5711", brand: "Patek Philippe", image: patekNautilus,
    rating: 5, score: 4.98, label: "Pilihan Editor", collection: "Modern",
    tagline: "Porthole legendaris yang ngedefinisiin sport mewah.",
    description: "Salah satu jam paling dicari di dunia. Dial biru horizontal embossed dan bracelet terintegrasi-nya — pure perfection.",
    specs: [{ label: "Casing", value: "40 mm · stainless steel" }, { label: "Movement", value: "Kaliber 26-330 S C, otomatis" }, { label: "Cadangan Daya", value: "45 jam" }, { label: "Dial", value: "Biru horizontal embossed" }],
  },
  {
    id: "patek-aquanaut", name: "Aquanaut Ref. 5167", brand: "Patek Philippe", image: patekAquanaut,
    rating: 5, score: 4.88, label: "Populer", collection: "Sport",
    tagline: "Spirit Nautilus, dirancang buat samudera.",
    description: "Versi sporty dari Patek dengan dial 'embossed checkerboard' dan strap Tropical yang nyaman. Cocok buat kamu yang aktif tapi tetep mau Patek.",
    specs: [{ label: "Casing", value: "40 mm · stainless steel" }, { label: "Movement", value: "Kaliber 324 S C, otomatis" }, { label: "Cadangan Daya", value: "45 jam" }, { label: "Tali", value: "Tropical komposit hitam" }],
  },
  {
    id: "ap-royal-oak-offshore", name: "Royal Oak Offshore Diver", brand: "Audemars Piguet", image: apOffshore,
    rating: 4, score: 4.7, label: "Populer", collection: "Sport",
    tagline: "Royal Oak versi nyelam ke 300 meter.",
    description: "Bawa DNA Royal Oak ke dunia tool watch. Lebih maskulin, lebih tangguh, dan tetap punya aura mewah.",
    specs: [{ label: "Casing", value: "42 mm · stainless steel" }, { label: "Movement", value: "Kaliber 4308, otomatis" }, { label: "Cadangan Daya", value: "60 jam" }, { label: "Tahan Air", value: "300 m" }],
  },
  {
    id: "ap-code-1159", name: "Code 11.59 Automatic", brand: "Audemars Piguet", image: apCode,
    rating: 4, score: 4.55, label: "Direkomendasikan", collection: "Modern",
    tagline: "Geometri ganda yang ngomong pakai bahasa baru.",
    description: "Eksperimen berani AP — case bulat ramping ketemu middle case oktagonal. Sapphire ganda melengkung-nya bikin dial kayak ngambang.",
    specs: [{ label: "Casing", value: "41 mm · emas putih 18 ct" }, { label: "Movement", value: "Kaliber 4302, otomatis" }, { label: "Cadangan Daya", value: "70 jam" }, { label: "Kristal", value: "Sapphire ganda melengkung" }],
  },
  {
    id: "tag-monaco", name: "Monaco Calibre 11", brand: "TAG Heuer", image: tagMonaco,
    rating: 5, score: 4.78, label: "Pilihan Editor", collection: "Klasik",
    tagline: "Jam kotak yang dipakai Steve McQueen di Le Mans.",
    description: "Chronograph kotak pertama di dunia, langsung jadi ikon pop culture. Crown di kiri, dial biru elektrik — beneran beda dari yang lain.",
    specs: [{ label: "Casing", value: "39 mm · stainless steel kotak" }, { label: "Movement", value: "Kaliber 11, chrono otomatis" }, { label: "Cadangan Daya", value: "40 jam" }, { label: "Dial", value: "Biru sunray dengan sub-dial putih" }],
  },
  {
    id: "tag-aquaracer", name: "Aquaracer Professional 300", brand: "TAG Heuer", image: tagAquaracer,
    rating: 4, score: 4.4, label: "Direkomendasikan", collection: "Sport",
    tagline: "Diver serbaguna buat petualang modern.",
    description: "Case 12-sisi yang tegas dan dial bertekstur horizontal. Tahan air 300 meter — siap nemenin kamu dari pantai sampai kantor.",
    specs: [{ label: "Casing", value: "43 mm · stainless steel" }, { label: "Movement", value: "Kaliber 5, otomatis" }, { label: "Cadangan Daya", value: "38 jam" }, { label: "Tahan Air", value: "300 m" }],
  },
  {
    id: "tag-formula1", name: "Formula 1 Quartz Chronograph", brand: "TAG Heuer", image: tagFormula,
    rating: 4, score: 4.2, label: "Direkomendasikan", collection: "Sport",
    tagline: "Pintu masuk ke dunia motorsport TAG Heuer.",
    description: "Jam dengan vibe sirkuit balap yang kuat. Aksen warna khas racing dan presisi quartz — pas banget buat daily driver yang energik.",
    specs: [{ label: "Casing", value: "43 mm · stainless steel" }, { label: "Movement", value: "Quartz chronograph" }, { label: "Tahan Air", value: "200 m" }, { label: "Bezel", value: "Keramik hitam berskala tachymeter" }],
  },
];

export const getWatch = (id) => watches.find((w) => w.id === id);
