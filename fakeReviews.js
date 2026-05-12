// === Data: Fake Reviews untuk statistik admin ===
// Ini seed data yang diinject ke localStorage "dj-user-reviews" saat pertama kali buka admin

export const FAKE_REVIEWS = [
  // Rolex Day-Date
  { id: "f001", watchId: "rolex-day-date", watchName: "Day-Date 40 Yellow Gold", name: "Hendra Gunawan", score: 5, comment: "Jam paling prestisius yang pernah gue lihat. Aura presidensialnya beneran kerasa!", time: "05/05/2026 08:12", likes: 34, read: true },
  { id: "f002", watchId: "rolex-day-date", watchName: "Day-Date 40 Yellow Gold", name: "Lia Hartono", score: 5, comment: "Emas kuningnya beneran mewah. Cocok banget buat acara formal.", time: "04/05/2026 19:30", likes: 18, read: true },
  { id: "f003", watchId: "rolex-day-date", watchName: "Day-Date 40 Yellow Gold", name: "Wahyu P.", score: 4, comment: "Gede dikit buat pergelangan gue tapi tetep kelihatan kece.", time: "03/05/2026 11:45", likes: 9, read: true },

  // Rolex Submariner
  { id: "f004", watchId: "rolex-submariner", watchName: "Submariner Date Vintage", name: "Reza Maulana", score: 5, comment: "This is the ultimate watch. Gue bisa pakai ke kantor, diving, traveling. Semua oke!", time: "05/05/2026 07:55", likes: 47, read: true },
  { id: "f005", watchId: "rolex-submariner", watchName: "Submariner Date Vintage", name: "Taufik Hidayat", score: 5, comment: "Bezel hitamnya ngasih kesan maskulin banget. Nggak bosen-bosen lihatnya.", time: "04/05/2026 16:10", likes: 29, read: true },
  { id: "f006", watchId: "rolex-submariner", watchName: "Submariner Date Vintage", name: "Putri A.", score: 4, comment: "Hadiah buat suami, dia seneng banget. Worth it!", time: "02/05/2026 13:22", likes: 15, read: true },
  { id: "f007", watchId: "rolex-submariner", watchName: "Submariner Date Vintage", name: "Doni Setiawan", score: 5, comment: "Ini beneran ikonik. Tiap orang yang liat langsung nanya ini jam apa.", time: "01/05/2026 10:08", likes: 38, read: true },

  // Omega Seamaster
  { id: "f008", watchId: "omega-seamaster", watchName: "Seamaster Diver 300M", name: "Kevin Lim", score: 5, comment: "James Bond vibes banget! Dial biru-nya luar biasa cantik.", time: "05/05/2026 09:40", likes: 26, read: true },
  { id: "f009", watchId: "omega-seamaster", watchName: "Seamaster Diver 300M", name: "Nadia Sari", score: 4, comment: "Sporty tapi tetap elegan buat dipakai sehari-hari. Master Chronometer-nya bikin tenang.", time: "03/05/2026 14:55", likes: 11, read: true },
  { id: "f010", watchId: "omega-seamaster", watchName: "Seamaster Diver 300M", name: "Andre Budiman", score: 5, comment: "Akurasi jam ini gila. Dipake diving juga aman. Top notch!", time: "02/05/2026 08:30", likes: 22, read: true },

  // Patek Calatrava
  { id: "f011", watchId: "patek-calatrava", watchName: "Calatrava Ref. 6119R", name: "Yusuf Hakim", score: 5, comment: "Tidak ada kata lain selain sempurna. Minimalis tapi paling mewah di ruangan.", time: "05/05/2026 10:15", likes: 41, read: true },
  { id: "f012", watchId: "patek-calatrava", watchName: "Calatrava Ref. 6119R", name: "Farida N.", score: 5, comment: "Suami saya meneteskan air mata waktu buka kado ini. Worth every penny.", time: "04/05/2026 20:00", likes: 67, read: true },
  { id: "f013", watchId: "patek-calatrava", watchName: "Calatrava Ref. 6119R", name: "Bram Wicaksono", score: 5, comment: "Geneva Seal-nya kerasa banget kualitasnya. Ini bukan jam biasa.", time: "03/05/2026 15:30", likes: 33, read: true },

  // Patek Nautilus
  { id: "f014", watchId: "patek-nautilus", watchName: "Nautilus Ref. 5711", name: "Citra W.", score: 5, comment: "Dial biru gradien-nya... tidak ada tandingannya. Langka dan berharga.", time: "04/05/2026 18:45", likes: 88, read: true },
  { id: "f015", watchId: "patek-nautilus", watchName: "Nautilus Ref. 5711", name: "Irwan S.", score: 5, comment: "Gue nunggu 3 tahun buat dapat ini. Dan itu worth the wait banget.", time: "03/05/2026 09:20", likes: 54, read: true },
  { id: "f016", watchId: "patek-nautilus", watchName: "Nautilus Ref. 5711", name: "Mira Indah", score: 4, comment: "Investasi terbaik selain properti. Harganya makin naik terus.", time: "01/05/2026 12:00", likes: 31, read: true },

  // Patek Moonphase
  { id: "f017", watchId: "patek-moonphase", watchName: "Complications Moonphase", name: "Denny Kusuma", score: 5, comment: "Moonphase-nya akurat gila — meleset 1 hari per 122 tahun. Ini sains sekaligus seni.", time: "05/05/2026 11:00", likes: 28, read: true },
  { id: "f018", watchId: "patek-moonphase", watchName: "Complications Moonphase", name: "Anisa R.", score: 5, comment: "Paling romantis dari semua jam yang ada. Pas banget buat hadiah pernikahan.", time: "02/05/2026 17:40", likes: 43, read: true },

  // AP Royal Oak
  { id: "f019", watchId: "ap-royal-oak", watchName: "Royal Oak Selfwinding 41", name: "Bagas K.", score: 5, comment: "Bezel oktagonalnya beneran ikonik. Gue dapat banyak pujian tiap pakai ini.", time: "04/05/2026 12:30", likes: 36, read: true },
  { id: "f020", watchId: "ap-royal-oak", watchName: "Royal Oak Selfwinding 41", name: "Stevanus H.", score: 4, comment: "Grande Tapisserie dial-nya detail banget waktu dilihat pakai loupe. Craftsmanship kelas dunia.", time: "03/05/2026 10:10", likes: 19, read: true },
  { id: "f021", watchId: "ap-royal-oak", watchName: "Royal Oak Selfwinding 41", name: "Laras M.", score: 5, comment: "Pertama kali lihat ini, gue langsung jatuh cinta. Sekarang jadi favorit di koleksi gue.", time: "01/05/2026 09:55", likes: 27, read: true },

  // AP Offshore
  { id: "f022", watchId: "ap-royal-oak-offshore", watchName: "Royal Oak Offshore Diver", name: "Fajar N.", score: 5, comment: "Versi sport dari Royal Oak yang lebih bold dan maskulin. Suka banget!", time: "04/05/2026 08:25", likes: 16, read: true },
  { id: "f023", watchId: "ap-royal-oak-offshore", watchName: "Royal Oak Offshore Diver", name: "Rini K.", score: 4, comment: "Ukurannya memang besar, tapi itu justru yang bikin statement.", time: "02/05/2026 14:00", likes: 8, read: true },

  // AP Code 11.59
  { id: "f024", watchId: "ap-code-1159", watchName: "Code 11.59 Automatic", name: "Hendri P.", score: 4, comment: "Desainnya kontroversial tapi gue suka keberanian AP bikin sesuatu yang beda.", time: "05/05/2026 13:20", likes: 12, read: true },
  { id: "f025", watchId: "ap-code-1159", watchName: "Code 11.59 Automatic", name: "Yeni S.", score: 3, comment: "Casenya unik tapi gue lebih prefer Royal Oak. Tapi kualitas tetap bintang 5.", time: "03/05/2026 16:45", likes: 5, read: true },

  // TAG Carrera
  { id: "f026", watchId: "tag-carrera", watchName: "Carrera Chronograph", name: "Eko Wahyudi", score: 5, comment: "Chronograph paling kece di kelasnya. Sub-dial 3 tangan merahnya keren abis.", time: "05/05/2026 07:30", likes: 21, read: true },
  { id: "f027", watchId: "tag-carrera", watchName: "Carrera Chronograph", name: "Tika M.", score: 4, comment: "Vibes motorsport-nya beneran kerasa. Cocok buat yang suka F1!", time: "04/05/2026 11:50", likes: 14, read: true },
  { id: "f028", watchId: "tag-carrera", watchName: "Carrera Chronograph", name: "Dimas F.", score: 5, comment: "Heuer 02 movement-nya responsif banget. Salah satu chrono terbaik di harganya.", time: "02/05/2026 09:15", likes: 17, read: true },

  // TAG Monaco
  { id: "f029", watchId: "tag-monaco", watchName: "Monaco Calibre 11", name: "Pandu R.", score: 5, comment: "Steve McQueen wore this. Nuff said. Kotak-kotaknya unik dan bersejarah.", time: "04/05/2026 15:00", likes: 39, read: true },
  { id: "f030", watchId: "tag-monaco", watchName: "Monaco Calibre 11", name: "Iin W.", score: 4, comment: "Dialnya warna biru tua, langka banget. Setiap pakai ini pasti ditanya.", time: "03/05/2026 12:35", likes: 20, read: true },

  // TAG Aquaracer
  { id: "f031", watchId: "tag-aquaracer", watchName: "Aquaracer Professional 300", name: "Gilang P.", score: 4, comment: "Entry-level TAG tapi kualitasnya solid. Tahan air 300m, cocok buat diving weekend.", time: "05/05/2026 10:45", likes: 10, read: true },
  { id: "f032", watchId: "tag-aquaracer", watchName: "Aquaracer Professional 300", name: "Susi D.", score: 4, comment: "Harganya lebih terjangkau dari Submariner tapi nggak kalah keren.", time: "02/05/2026 15:20", likes: 7, read: true },

  // TAG Formula 1
  { id: "f033", watchId: "tag-formula1", watchName: "Formula 1 Quartz Chronograph", name: "Adi S.", score: 4, comment: "Buat anak muda yang baru mau start koleksi jam mewah, ini pilihan tepat.", time: "04/05/2026 09:00", likes: 13, read: true },
  { id: "f034", watchId: "tag-formula1", watchName: "Formula 1 Quartz Chronograph", name: "Wulan N.", score: 3, comment: "Lumayan untuk pemakaian harian. Desainnya fresh dan sporty.", time: "01/05/2026 13:50", likes: 4, read: true },

  // Omega Speedmaster
  { id: "f035", watchId: "omega-speedmaster", watchName: "Speedmaster Moonwatch Professional", name: "Rina Saputri", score: 5, comment: "Berasa pakai sejarah di pergelangan tangan. Dipakai ke bulan — seriously iconic.", time: "05/05/2026 08:50", likes: 52, read: true },
  { id: "f036", watchId: "omega-speedmaster", watchName: "Speedmaster Moonwatch Professional", name: "Fauzan B.", score: 5, comment: "Hesalite crystal-nya beda banget dari sapphire biasa. Ini bukan cuma jam, ini warisan.", time: "04/05/2026 18:00", likes: 31, read: true },
  { id: "f037", watchId: "omega-speedmaster", watchName: "Speedmaster Moonwatch Professional", name: "Nina K.", score: 4, comment: "Manual wind memang butuh perhatian lebih tapi itu yang bikin koneksi sama jam ini terasa.", time: "03/05/2026 11:10", likes: 18, read: true },

  // Omega Globemaster
  { id: "f038", watchId: "omega-globemaster", watchName: "Constellation Globemaster", name: "Arif M.", score: 5, comment: "Fluted bezel dan pie-pan dial-nya klasik banget. Ini Omega yang paling underrated.", time: "05/05/2026 14:00", likes: 15, read: true },
  { id: "f039", watchId: "omega-globemaster", watchName: "Constellation Globemaster", name: "Dewi P.", score: 4, comment: "METAS certified berarti akurasi -0/+5 detik per hari. Ini yang bikin tenang.", time: "02/05/2026 10:30", likes: 9, read: true },

  // Rolex GMT
  { id: "f040", watchId: "rolex-gmt-pepsi", watchName: "GMT-Master II 'Pepsi'", name: "Arman K.", score: 5, comment: "Pepsi bezel-nya langsung ketahuan dari jauh. Jam buat traveler sejati!", time: "05/05/2026 09:00", likes: 44, read: true },
  { id: "f041", watchId: "rolex-gmt-pepsi", watchName: "GMT-Master II 'Pepsi'", name: "Cici W.", score: 5, comment: "Fungsi dual timezone-nya bener-bener berguna. Gue sering bolak-balik Jakarta-Singapore.", time: "04/05/2026 13:40", likes: 25, read: true },
  { id: "f042", watchId: "rolex-gmt-pepsi", watchName: "GMT-Master II 'Pepsi'", name: "Rama S.", score: 4, comment: "Cerachrom bezel-nya anti gores dan anti pudar. Engineering yang luar biasa.", time: "03/05/2026 08:20", likes: 16, read: true },

  // Rolex Datejust
  { id: "f043", watchId: "rolex-datejust", watchName: "Datejust 36 Jubilee", name: "Hani R.", score: 5, comment: "Jubilee bracelet-nya paling nyaman dari semua jam yang pernah gue pakai.", time: "05/05/2026 11:30", likes: 23, read: true },
  { id: "f044", watchId: "rolex-datejust", watchName: "Datejust 36 Jubilee", name: "Toni W.", score: 4, comment: "Klasik dan versatile. Cocok dipakai ke kantor sampai acara wedding.", time: "04/05/2026 17:00", likes: 11, read: true },

  // Patek Aquanaut
  { id: "f045", watchId: "patek-aquanaut", watchName: "Aquanaut Ref. 5167", name: "Joko P.", score: 5, comment: "Lebih sporty dari Nautilus tapi tetap Patek. Tali karetnya ternyata super nyaman.", time: "04/05/2026 10:00", likes: 32, read: true },
  { id: "f046", watchId: "patek-aquanaut", watchName: "Aquanaut Ref. 5167", name: "Selvi N.", score: 5, comment: "Dial embossed-nya cantik banget. Patek yang paling wearable menurut gue.", time: "03/05/2026 13:55", likes: 20, read: true },
  { id: "f047", watchId: "patek-aquanaut", watchName: "Aquanaut Ref. 5167", name: "Toni H.", score: 4, comment: "Untuk jam sport di kelas ini, harganya fair banget. Investasi solid.", time: "01/05/2026 16:00", likes: 14, read: true },
];
