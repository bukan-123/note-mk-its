// dbtree.js
/*
1 Program Studi di ITS
2 MK Program Studi di ITS per lab 
3 MK prodi di its per semeter (child node berupa hyperlink ke web nya)
4 MK pengayaan per program studi + kode nya + prasyarat
5 Materi MK 
6 kode departemen nrp
*/

const treeData = [
 { text: "Program Studi \"di ITS\"", children: [

 ]},
 { text: "Mata Kuliah per Laboratorium / Peminatan \"di ITS\"", children: [
  { text: "S1 Teknik Informatika",
        children: [
            {   text: "Laboratorium (tahun 2026)",
                children: [
                    {   text: "PKT : Lab. Pemodelan dan Komputasi Terapan", 
                        children: [
                            {   text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "Linear Algebra (3 SKS, ALin)" },
                                    { text: "Numerical Computation (3 SKS, KomNum)" },
                                    { text: "Discrete Mathematics (3 SKS, MatDis)" },
                                    { text: "Graph Theory (3 SKS, TeGraf)" },
                                    { text: "Automata (2 SKS)" },
                                    { text: "Probability & Statistics (3 SKS, ProbStat)" },
                                    { text: "Modelling & Simulation (3 SKS, PemSim)" },
                    
                                ]
                            },
                            {   text: "Mata Kuliah Pilihan",
                                children: [
                                    { text: "Forecasting Technique (3 SKS, TP)" },
                                    { text: "Operation Research (3 SKS, RiSop)" },
                                    { text: "Multivariate Data Analysis (3 SKS, ADM??)" },
                                    { text: "Dynamic System Simulation (3 SKS, SSD??)" },
                                    { text: "Agent Based Simulation (3 SKS, SBA??)" },
                                    { text: "Object Oriented Simulation (3 SKS, SBO??)" },
                                    { text: "Special Topic in Applied Modelling and Computation  (3 SKS, TKPKT, Topic:Transportation Problem)" },
                                    { text: "Teknik Kompilasi (MK dihapus krn sepi peminat; gada mhs ambil topik TA ini)" },
                                ]
                            }
                        ]
                    },
                    {   text: "NETICS : Lab. Teknologi Jaringan dan Keamanan Siber Cerdas", 
                        children: [
                            { text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "1. Digital System (3 SKS, SisDig)" },
                                    { text: "2. Computer Organization (3 SKS, OrKom)" },
                                    { text: "3. Operation System (4 SKS, SisOp)" },
                                    { text: "4. Computer Network (4 SKS, JarKom)" },
                                    { text: "Leaf 1.1.2" }
                                ]
                            },
                            { text: "Mata Kuliah Pilihan",
                                children: [
                                    { text: "1. Digital System (3 SKS, SisDig)" },
                                    { text: "2. Computer Organization (3 SKS, OrKom)" },
                                    { text: "3. Operation System (4 SKS, SisOp)" },
                                    { text: "4. Computer Network (4 SKS, JarKom)" },
                                    { text: "Leaf 1.1.2" }
                                ]
                            },
                        ]
                    },
                    {   text: "AP/ALPRO : Lab. Algoritma dan Pemrograman", 
                        children: [
                            { text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "1. Fundamental Programming (4 SKS, DasProg)" },
                                    { text: "2. Data Structure (4 SKS, StrukDat)" },
                                    { text: "3. Object Oriented Programming (3 SKS, PBO)" },
                                    { text: "4. Web Programming (3 SKS, PWeb)" },
                                    { text: "5. Data Structure (4 SKS, StrukDat)" },
                                    { text: "6. Algorithm Design and Analysis (3 SKS, PAA)" },
                                    { text: "7. Framework Based Programming (3 SKS, PBA??)" },
                                    { text: "2. Mobile Programming (3 SKS, PPB)" },
                                ]
                            },
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "MCI : Lab. Manajemen Cerdas Informasi", 
                        children: [
                            { text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "1. Database System (4 SKS, SBD)" },
                                    { text: "2. Database Management (3 SKS, MBD)" },
                                    { text: "3. Knowledge Based Engineering (3 SKS, RSBP)" },
                                ]
                            },
                            { text: "Mata Kuliah Pilihan",
                                children: [
                                    { text: "1. IT Governance (3 SKS, ITGov??)" },
                                    { text: "2. Geographic Information System (3 SKS, GIS??)" },
                                    { text: "3. Information Retrieval System (3 SKS, TKSI??)" },
                                    { text: "4. Quantum Computing (3 SKS, KK??)" },
                                    { text: "5. Big Data (3 SKS, BD??)" },
                                    { text: "6. Special Topic in Intelligent Information and Management (3 SKS, TKMCI??)" },
                                ]
                            },
                        ]
                    },
                    {   text: "RPL : Lab. Rekayasa Perangkat Lunak", 
                        children: [
                            { text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "1. Software Development Principles (2 SKS, KPPL)" },
                                    { text: "2. Software Design (3 SKS, PPL)" },
                                ]
                            },
                            { text: "Mata Kuliah Pilihan",
                                children: [
                                    { text: "1. Software Evolution (3 SKS, EPL)" },
                                    { text: "2. Software Construction (3 SKS, Konstruksi PL??)" },
                                    { text: "3. Software Quality (3 SKS, Kualitas PL??)" },
                                ]
                            },
                                
                        ]
                    },
                    {   text: "GIGA : Lab. Grafika, Interaksi, Gim dan Analitik", 
                        children: [
                            { text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "1. Computer Graphics (3 SKS, GrafKom)" },
                                    { text: "2. Human and Computer Interaction (3 SKS, IMK)" },
                                ]
                            },
                            { text: "Mata Kuliah Pilihan",
                                children: [
                                    { text: "1. User Experience Design (3 SKS, UX Design??)" },
                                    { text: "2. Computer Animation & 3D Modelling (3 SKS, AKP3D??)" },
                                    { text: "3. Game Engine (3 SKS, GE??)" },
                                    { text: "4. Game Development Technique (3 SKS, TPG??)" },
                                    { text: "5. Education and Simulation Game (3 SKS, GPS/ESG??)" },
                                    { text: "6. Special Topic in Graphics, Interaction, Game and Analytics (3 SKS, TKGIGA??)" },
                                ]
                            },
                        
                        ]
                    },
                    {   text: "KBJ/NCC : Komputasi Berbasis Jaringan", 
                        children: [
                            { text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "1. Network Programming (3 SKS, ProgJar)" },
                                    { text: "2. Information Security (3 SKS, ??)" },
                                ]
                            },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "KCV : Lab. Komputasi Cerdas dan Visi", 
                        children: [
                            { text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "1. Artificial Intelligent Concepts (3 SKS, KKA)" },
                                    { text: "1. Machine Learning (3 SKS, PemSin)" },
                                ]
                            },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                ] 
            },
            {   text: "Semester (Kurikulum 2023)",
                children: [
                    {   text: "dev: link ke module handbook", }
                ]
            },
        ]
  },
  { text: "S1 Matematika",
        children: [
            { id: 7, text: "Leaf 2.1" },
            {
                id: 8,
                text: "Child 2.2",
                children: [
                    { id: 9, text: "Leaf 2.2.1" }
                ]
            }
        ]
  },
  { text: "S1 Statistika",
        children: [
            { id: 7, text: "Leaf 2.1" },
            {
                id: 8,
                text: "Child 2.2",
                children: [
                    { id: 9, text: "Leaf 2.2.1" }
                ]
            }
        ]
  },
  {   text: "S1 Sains Data",
        children: [
            { id: 7, text: "Leaf 2.1" },
            {
                id: 8,
                text: "Child 2.2",
                children: [
                    { id: 9, text: "Leaf 2.2.1" }
                ]
            }
        ]
  },
  {   text: "S1 Sistem Informasi",
        children: [
            { id: 7, text: "Leaf 2.1" },
            {
                id: 8,
                text: "Child 2.2",
                children: [
                    { id: 9, text: "Leaf 2.2.1" }
                ]
            }
        ]
  },
  {   text: "S1 Teknologi Informasi",
        children: [
            { id: 7, text: "Leaf 2.1" },
            {
                id: 8,
                text: "Child 2.2",
                children: [
                    { id: 9, text: "Leaf 2.2.1" }
                ]
            }
        ]
  },
  {   text: "S1 Rekayasa Perangkat Lunak",
        children: [
            { id: 7, text: "Leaf 2.1" },
            {
                id: 8,
                text: "Child 2.2",
                children: [
                    { id: 9, text: "Leaf 2.2.1" }
                ]
            }
        ]
  },
  {   text: "S1 Rekayasa Kecerdasan Artifisial",
        children: [
            { id: 7, text: "Leaf 2.1" },
            {
                id: 8,
                text: "Child 2.2",
                children: [
                    { id: 9, text: "Leaf 2.2.1" }
                ]
            }
        ]
  }
 ]},
 { text: "Mata Kuliah per Semester \"di ITS\"", children: [

 ]},
 { text: "Mata Kuliah Pengayaan (Enrinchment Course) \"di ITS\" (minimal lulus > 90 SKS)", children: [
    { text: "FTEIC", children: [
        { text: "S1 Teknik Informatika", children: [
            { text: "Pengantar Sistem Cerdas (SKS: 3)(kodeMK: EF4519)(No: 165)"},
            { text: "Pengantar Pengembangan Game (SKS: 3)(kodeMK: EF4520)(No: 166)"},
            { text: "Pengantar Teknologi Basis Data (SKS: 3)(kodeMK: EF4521)(No: 167)"},
            { text: "Pengantar Proses Mining (SKS: 3)(kodeMK: EF4620)(No: 168)"},
            { text: "Pengantar Logika dan Pemrograman (SKS: 3)(kodeMK: EF4621)(No: 169)"},
        ]},
        { text: "S1 Rekayasa Kecerdasan Artifisial", children: [
            { text: "Pengantar Sistem Cerdas (SKS: 3)(kodeMK: EA4507)(No: 217)"},
            { text: "Magang (SKS: 6)(kodeMK: EA4703)(No: 218)"},
        ]},
        { text: "S1 Rekayasa Kecerdasan Artifisial", children: [
            { text: "Rekayasa Perangkat Lunak Modern (SKS: 3)(kodeMK: ER4703)(No: 162)"},
        ]},
        { text: "S1 Sistem Informasi", children: [
            { text: "Manajemen Rantai Pasok (SKS: 3)(kodeMK: ES4934)(No: 1)"},
            { text: "Manajemen Hubungan Pelanggan (SKS: 3)(kodeMK: ES4935)(No: 2)"},
            { text: "Sistem Keputusan Berbasis Model (SKS: 3)(kodeMK: ES4936)(No: 3)"},
            { text: "Graf Pengetahuan (SKS: 3)(kodeMK: ES4937)(No: 4)"},
            { text: "Pengolahan Bahasa Alami (SKS: 3)(kodeMK: ES4938)(No: 5)"},
            { text: "Sistem Data Intensif (SKS: 3)(kodeMK: ES4940)(No: 6)"},
            { text: "Pemodelan dan Analitika Preskriptif (SKS: 3)(kodeMK: ES4941)(No: 7)"},
            { text: "Komputer Lunak (SKS: 3)(kodeMK: ES4943)(No: 8)"},
            { text: "Pemodelan Sistem Kognitif (SKS: 3)(kodeMK: ES4944)(No: 9)"},
            { text: "Tata Kelola dan Audit TI (SKS: 3)(kodeMK: ES4945)(No: 10)"},
            { text: "Produktivitas (SKS: 3)(kodeMK: ES4945)(No: 12)"},
            { text: "Manajemen Perubahan Organisasi (SKS: 3)(kodeMK: ES4946)(No: 11)"},
            { text: "Teknologi Pembelajaran Mesin (SKS: 3)(kodeMK: ES4946)(No: 13)"},
            { text: "Tata Kelola Keamanan TI (SKS: 3)(kodeMK: ES4947)(No: 14)"},
            { text: "Forensika Digital (SKS: 3)(kodeMK: ES4948)(No: 15)"},
        ]},
        { text: "S1 Inovasi Digital", children: [
            { text: "Desain Pengalaman Pengguna (SKS: 3)(kodeMK: EI4936)(No: 187)"},
            { text: "Motivasi Startup (SKS: 3)(kodeMK: EI4937)(No: 188)"},
            { text: "Manajemen Perubahan Organisasi (SKS: 3)(kodeMK: EI4938)(No: 189)"},
            { text: "Model Bisnis Baru (SKS: 3)(kodeMK: EI4939)(No: 190)"},
            { text: "Pasar Internet (SKS: 3)(kodeMK: EI4940)(No: 191)"},
            { text: "Komputasi Awan (SKS: 3)(kodeMK: EI4941)(No: 192)"},
            { text: "Manajemen Pertumbuhan Startup (SKS: 3)(kodeMK: EI4942)(No: 193)"},
            { text: "Strategi Rantai Nilai Global (SKS: 3)(kodeMK: EI4943)(No: 194)"},
            { text: "Sprint (SKS: 3)(kodeMK: EI4995)(No: 186)"},
        ]},
        { text: "S1 Teknologi Informasi", children: [
            { text: "Kriptografi (SKS: 3)(kodeMK: ET4601)(No: 16)"},
            { text: "Pengembangan Sistem dan Teknologi Informasi (Capstone Project) (SKS: 6)(kodeMK: ET4602)(No: 17)"},
            { text: "Desain dan Manajemen Jaringan Komputer (SKS: 3)(kodeMK: ET4714)(No: 18)"},
            { text: "Manajemen Keamanan Siber (SKS: 3)(kodeMK: ET4714)(No: 19)"},
            { text: "Privasi Perlindungan Data dan Ergonomi pada Cybersecurity (SKS: 2)(kodeMK: ET4716)(No: 20)"},
        ]},
        { text: "S1 Teknik Komputer", children: [
            { text: "Visi Komputer (SKS: 3)(kodeMK: EC4631)(No: 51)"},
            { text: "Desain dan Pemrograman Game (SKS: 3)(kodeMK: EC4735)(No: 52)"},
            { text: "Robotika Lanjut (SKS: 3)(kodeMK: EC4742)(No: 53)"},
        ]},
        { text: "S1 Teknik Telekomunikasi", children: [
            { text: "Pengantar Teknik Telekomunikasi (SKS: 3)(kodeMK: EL4201)(No: 21)"},
            { text: "Sekuriti dan Kriptografi (SKS: 3)(kodeMK: EL4307)(No: 22)"},
            { text: "Teknologi Komunikasi Generasi Baru (SKS: 3)(kodeMK: EL4713)(No: 23)"},
            { text: "Komputer Kuantum dan Informasi Kuantum (SKS: 3)(kodeMK: EL4715)(No: 24)"},
        ]},
        { text: "S1 Teknik Elektro", children: [
            { text: "Dasar Sistem dan Jaringan Telekomunikasi (SKS: 3)(kodeMK: EE4402)(No: 25)"},
            { text: "Dasar Biomekanika (SKS: 3)(kodeMK: EE4403)(No: 94)"},
            { text: "Dasar Sistem Listrik (SKS: 3)(kodeMK: EE4404)(No: 26)"},
            { text: "Dasar Sistem Kontrol (SKS: 3)(kodeMK: EE4405)(No: 27)"},
            { text: "Pemeliharaan Peralatan Listrik (SKS: 3)(kodeMK: EE4521)(No: 33)"},
            { text: "Manajemen Proyek Keselamatan Kerja (SKS: 3)(kodeMK: EE4719)(No: 32)"},
            { text: "Analisis Sistem Tenaga (SKS: 2)(kodeMK: EE5113)(No: 77)"},
            { text: "Elektronika Listrik (SKS: 2)(kodeMK: EE5114)(No: 78)"},
            { text: "Teknik Tegangan Tinggi (SKS: 3)(kodeMK: EE5115)(No: 79)"},
            { text: "Elektronika Daya (SKS: 3)(kodeMK: EE5116)(No: 80)"},
            { text: "Analisa dan Disain Sistem Kontrol (SKS: 3)(kodeMK: EE5121)(No: 81)"},
            { text: "Teknik Optimasi (SKS: 3)(kodeMK: EE5124)(No: 82)"},
            { text: "Sistem Otomasi (SKS: 3)(kodeMK: EE5125)(No: 83)"},
            { text: "Teknik Analisis Rangkaian (SKS: 3)(kodeMK: EE5140)(No: 84)"},
            { text: "Algoritma dan Pemrograman (SKS: 3)(kodeMK: EE5150)(No: 85)"},
            { text: "Pemrograman Komputer Berorientasi Object (SKS: 3)(kodeMK: EE5153)(No: 86)"},
            { text: "Matematika Diskrit (SKS: 2)(kodeMK: EE5154)(No: 87)"},
        ]},
        { text: "S1 Teknik Biomedik", children: [
            { text: "Sistem Instrumentasi Biomedika dan Laboratorium (SKS: 5)(kodeMK: EB4406)(No: 95)"},
        ]},
    ]},
    { text: "FDKBD", children: [
        { text: "S1 Manajemen Bisnis", children: [
            { text: "Pengantar Manajemen Bisnis (SKS: 3)(kodeMK: DB4101)(No: 59)"},
            { text: "Manajemen Pemasaran (SKS: 3)(kodeMK: DB4202)(No: 60)"},
            { text: "Manajemen Operasional (SKS: 3)(kodeMK: DB4203)(No: 61)"},
            { text: "Manajemen Keuangan (SKS: 3)(kodeMK: DB4204)(No: 62)"},
            { text: "Manajemen Sumber Daya Manusia (SKS: 3)(kodeMK: DB4205)(No: 63)"},
            { text: "Pengantar Usaha Baru (SKS: 3)(kodeMK: DB4206)(No: 64)"},
            { text: "Manajemen Risiko (SKS: 3)(kodeMK: DB4402)(No: 65)"},
            { text: "Manajemen Proyek (SKS: 3)(kodeMK: DB4403)(No: 66)"},
            { text: "Manajemen Strategis (SKS: 3)(kodeMK: DB4405)(No: 67)"},
            { text: "Bisnis Internasional (SKS: 3)(kodeMK: DB4407)(No: 68)"},
            { text: "Pemecahan Masalah dalam Bisnis dan Manajemen (SKS: 4)(kodeMK: DB4408)(No: 69)"},
            { text: "Isu Kontemporer dalam Bisnis dan Manajemen (SKS: 3)(kodeMK: DB4511)(No: 72)"},
            { text: "Komunikasi Antar Budaya (SKS: 3)(kodeMK: DB4931)(No: 70)"},
            { text: "Pemasaran Jasa (SKS: 3)(kodeMK: DB4934)(No: 71)"},
            { text: "Pembangunan Berkelanjutan (SKS: 3)(kodeMK: DB4953)(No: 73)"},
        ]},
        { text: "S1 Studi Pembangunan", children: [
            { text: "Komunikasi Antar Budaya (SKS: 3)(kodeMK: DS4758)(No: 160)"},
            { text: "Isu-isu Keberlanjutan Teknologi dan Dimensi Budaya (SKS: 3)(kodeMK: DS4759)(No: 161)"},
        ]},
        { text: "S1 Desain Komunikasi Visual", children: [
            { text: "Kapita Estetika (SKS: 3)(kodeMK: DV4703)(No: 225)"},
        ]},
        { text: "S1 Desain Produk", children: [
            { text: "Product Planning (SKS: 2)(kodeMK: DP4851)(No: 28)"},
        ]},
        { text: "S1 Desain Interior", children: [
            { text: "DEKORASI INTERIOR (SKS: 3)(kodeMK: DI4541)(No: 75)"},
            { text: "FOTOGRAFI DIGITAL INTERIOR (SKS: 3)(kodeMK: DI4608)(No: 76)"},
            { text: "Green Design (SKS: 3)(kodeMK: DI5305)(No: 197)"},
            { text: "Desain Interior Inklusif (SKS: 3)(kodeMK: DI5306)(No: 198)"},
            { text: "Konsep dan Inovasi Interior (SKS: 2)(kodeMK: DI5307)(No: 199)"},
        ]},
    ]},
    { text: "FSAD", children: [
        { text: "S1 Matematika", children: [

        ]},
        { text: "S1 Statistika", children: [

        ]},
        { text: "S1 Sains Data", children: [

        ]},
        { text: "S1 Aktuaria", children: [
            { text: "Manajemen Investasi dan Portofolio (SKS: 3)(kodeMK: SA4204)(No: 42)"}, 
            { text: "Matematika Finansial (SKS: 3)(kodeMK: SA4306)(No: 43)"},
        ]},
        { text: "S1 Fisika", children: [

        ]},
        { text: "S1 Kimia", children: [

        ]},
        { text: "S1 Sains Analitik dan Instrumentasi Kimia", children: [

        ]},
        { text: "S1 Biologi", children: [

        ]},
        { text: "S1 Bioteknologi", children: [

        ]},
    ]},
 ]},
  { text: "Materi Mata Kuliah per Program Studi \"di ITS\"", children: [

 ]},
];

