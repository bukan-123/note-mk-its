// dbtree.js

const treeData = [
    {   text: "S1 Teknik Informatika",
        children: [
            {   text: "Semester (Kurikulum 2023)",
                children: [
                    {   text: "Semester 1", 
                        children: [
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "Semester 2", 
                        children: [
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "Semester 3", 
                        children: [
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "Semester 4", 
                        children: [
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "Semester 5", 
                        children: [
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "Semester 6", 
                        children: [
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "Semester 7", 
                        children: [
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                    {   text: "Semester 8", 
                        children: [
                            { text: "Leaf 1.1.1" },
                            { text: "Leaf 1.1.2" }
                        ]
                    },
                ]
            },
            {   text: "Laboratorium (tahun 2026)",
                children: [
                    {   text: "PKT : Lab. Pemodelan dan Komputasi Terapan", 
                        children: [
                            {   text: "Mata Kuliah Wajib",
                                children: [
                                    { text: "1. Linier Algebra (3 SKS, ALin)" },
                                    { text: "2. Numerical Computation (3 SKS, KomNum)" },
                                    { text: "3. Discrete Mathematics (3 SKS, MatDis)" },
                                    { text: "4. Graph Theory (3 SKS, TeGraf)" },
                                    { text: "5. Automata (2 SKS)" },
                                    { text: "6. Probability & Statistics (3 SKS, ProbStat)" },
                                    { text: "7. Modelling & Simulation (3 SKS, PemSim)" },
                    
                                ]
                            },
                            {   text: "Mata Kuliah Pilihan",
                                children: [
                                    { text: "1. Forecasting Technique (3 SKS, TP)" },
                                    { text: "2. Operation Research (3 SKS, RiSop)" },
                                    { text: "3. Multivariate Data Analysis (3 SKS, ADM??)" },
                                    { text: "4. Dynamic System Simulation (3 SKS, SSD??)" },
                                    { text: "5. Agent Based Simulation (3 SKS, SBA??)" },
                                    { text: "6. Object Oriented Simulation (3 SKS, SBO??)" },
                                    { text: "7. Special Topic in Applied Modelling and Computation  (3 SKS, TKPKT, Topic:Transportation Problem)" },
                                    { text: "0. Teknik Kompilasi (MK dihapus krn sepi peminat; gada mhs ambil topik TA ini)" },
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
                            }
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
            }
        ]
    },
    {   text: "S1 Matematika",
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
    {   text: "S1 Statistika",
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
    },
];
