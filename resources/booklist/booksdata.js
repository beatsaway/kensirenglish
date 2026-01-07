// Hong Kong Education Book Data - Combined KS1, KS2, KS3 and KS4
const allBooks = [
    {
      "id": 1,
      "stage": "KS3",
      "title": "101 Stumbles in the March of History: What If\nthe Great Mistakes in War, Government, Industry, and Economics Were Not Made?",
      "ctitle": "歷史進程中的101個失誤：如果戰爭、政府、工業和經濟中的重大錯誤沒有發生會怎樣？",
      "author": "Bill Fawcett",
      "publisher": "Berkley",
      "isbn": "978-1101987049",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 2,
      "stage": "KS3",
      "title": "53 1/2 things that changed the world : and\nsome that didn't",
      "ctitle": "改變世界的53又1/2件事：以及一些沒有改變的事",
      "author": "Steve Parker",
      "publisher": "Book House",
      "isbn": "978-0439394994",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 3,
      "stage": "KS3",
      "title": "A Boy at War",
      "ctitle": "戰爭中的男孩",
      "author": "Harry Mazer",
      "publisher": "Simon & Schuster Books for Young\nReaders",
      "isbn": "978-0689841606",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 4,
      "stage": "KS3",
      "title": "A Look at Life in the Nineties",
      "ctitle": "九十年代生活一瞥",
      "author": "Judith Condon",
      "publisher": "Hachette Children's\nGroup",
      "isbn": "978-0750226585",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 5,
      "stage": "KS3",
      "title": "A School Like Mine",
      "ctitle": "像我這樣的學校",
      "author": "DK",
      "publisher": "DK Publishing",
      "isbn": "978-0241207369",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 6,
      "stage": "KS3",
      "title": "A Wrinkle in Time",
      "ctitle": "時間的皺紋",
      "author": "Madeleine L'Engle",
      "publisher": "Square Fish",
      "isbn": "978-0312367541",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 7,
      "stage": "KS3",
      "title": "About Twins",
      "ctitle": "關於雙胞胎",
      "author": "Shelley Rotner",
      "publisher": "DK Publishing",
      "isbn": "978-0789425560",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 8,
      "stage": "KS3",
      "title": "Action for the Environment: Protecting\nHabitats",
      "ctitle": "環保行動：保護棲息地",
      "author": "Rufus Bellamy",
      "publisher": "Franklin Watts",
      "isbn": "978-0749669478",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 9,
      "stage": "KS3",
      "title": "Action for the Environment: Rubbish Disposal",
      "ctitle": "環保行動：垃圾處理",
      "author": "Deborah Jackson\nBedford",
      "publisher": "Franklin Watts",
      "isbn": "978-0749669416",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 10,
      "stage": "KS3",
      "title": "Algebra & Geometry",
      "ctitle": "代數與幾何",
      "author": "Dan Green &\nSimon Basher",
      "publisher": "Kingfisher",
      "isbn": "978-0753430859",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 11,
      "stage": "KS3",
      "title": "Alice's Adventures in Wonderland",
      "ctitle": "愛麗絲夢遊仙境",
      "author": "Lewis Carroll",
      "publisher": "Walker Books",
      "isbn": "978-0744582673",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 12,
      "stage": "KS3",
      "title": "All about China: Stories, Songs, Crafts and\nGames for Kids",
      "ctitle": "中國大全：兒童故事、歌曲、手工和遊戲",
      "author": "Allison\nBranscombe",
      "publisher": "Tuttle Publishing",
      "isbn": "978-0804841214",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 13,
      "stage": "KS3",
      "title": "Amazing Schemes within Your Genes",
      "ctitle": "基因中的奇妙計劃",
      "author": "Dr. Fran Balkwill",
      "publisher": "Carolrhoda Books,\nInc.",
      "isbn": "978-0876148044",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 14,
      "stage": "KS3",
      "title": "An Ideal Husband",
      "ctitle": "理想丈夫",
      "author": "Oscar Wilde",
      "publisher": "Penguin",
      "isbn": "978-1405862363",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 15,
      "stage": "KS3",
      "title": "Animal Records",
      "ctitle": "動物紀錄",
      "author": "Allyson Valentine\nSchrier",
      "publisher": "Perfection Learning",
      "isbn": "978-0756962456",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 16,
      "stage": "KS3",
      "title": "Animals That Changed the World",
      "ctitle": "改變世界的動物",
      "author": "Keltie Thomas",
      "publisher": "Annick Press",
      "isbn": "978-1554512423",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 17,
      "stage": "KS3",
      "title": "Apes And Monkeys",
      "ctitle": "猿猴",
      "author": "Barbara Taylor",
      "publisher": "Kingfisher",
      "isbn": "978-0753431603",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 18,
      "stage": "KS3",
      "title": "Apollo 13",
      "ctitle": "阿波羅13號",
      "author": "Dina Anastasio",
      "publisher": "Penguin",
      "isbn": "978-1405881562",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 19,
      "stage": "KS3",
      "title": "Around the World in Eighty Days",
      "ctitle": "八十天環遊世界",
      "author": "Jules Verne",
      "publisher": "OUP",
      "isbn": "978-0199552511",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 20,
      "stage": "KS3",
      "title": "Basher Science: Engineering : Machines and\nBuildings",
      "ctitle": "巴舍科學：工程學：機器與建築",
      "author": "Tom Jackson ,\nMary Budzik",
      "publisher": "Pan MacMillan",
      "isbn": "978-0753439906",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 21,
      "stage": "KS3",
      "title": "Being Jazz: My Life as a (Transgender) Teen",
      "ctitle": "成為爵士：我的跨性別青少年生活",
      "author": "Jazz Jennings",
      "publisher": "Random House USA\nInc",
      "isbn": "978-0399554643",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 22,
      "stage": "KS3",
      "title": "Big Bugs, ‘Bad’ Bugs",
      "ctitle": "大蟲子，'壞'蟲子",
      "author": "Matt Comeskey",
      "publisher": "CSI Literacy and Lift\nEducation",
      "isbn": "978-0077150440",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 23,
      "stage": "KS3",
      "title": "Billy Elliot",
      "ctitle": "比利·艾略特",
      "author": "Melvin Burgess,\nretold by Karen Holmes",
      "publisher": "Pearson Education",
      "isbn": "978-1405881760",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 24,
      "stage": "KS3",
      "title": "Black Gold: The Story of Oil in Our Lives",
      "ctitle": "黑金：石油在我們生活中的故事",
      "author": "Albert Marrin",
      "publisher": "Knopf Books for\nYoung Readers",
      "isbn": "978-0375866739",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 25,
      "stage": "KS3",
      "title": "Black Holes and Other Space Phenomena",
      "ctitle": "黑洞與其他太空現象",
      "author": "Philip Steele",
      "publisher": "Kingfisher",
      "isbn": "978-1856975735",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 26,
      "stage": "KS3",
      "title": "Bomb: The Race to Build—and Steal— the\nWorld's Most Dangerous Weapon",
      "ctitle": "炸彈：建造和竊取世界上最危險武器的競賽",
      "author": "Steve Sheinkin",
      "publisher": "Flash Point",
      "isbn": "978-1596434875",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 27,
      "stage": "KS3",
      "title": "Book of Flight",
      "ctitle": "飛行之書",
      "author": "Judith Rinard",
      "publisher": "Firefly Books",
      "isbn": "978-1554072750",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 28,
      "stage": "KS3",
      "title": "Bouncing Eggs",
      "ctitle": "彈跳雞蛋",
      "author": "William R.\nWellnitz",
      "publisher": "McGraw-Hill",
      "isbn": "978-0071343831",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 29,
      "stage": "KS3",
      "title": "Boy Racer",
      "ctitle": "男孩賽車手",
      "author": "Ian Whybrow",
      "publisher": "Hodder Children's\nBooks",
      "isbn": "978-0340778920",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 30,
      "stage": "KS3",
      "title": "Building the Great Wall of China: An Isabel\nSoto History Adventure",
      "ctitle": "建造中國長城：伊莎貝爾·索托的歷史冒險",
      "author": "Terry Collins",
      "publisher": "Capstone Press",
      "isbn": "978-1429638906",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 31,
      "stage": "KS3",
      "title": "Built to Last",
      "ctitle": "經久耐用",
      "author": "David Macaulay",
      "publisher": "HMH Books",
      "isbn": "978-0547342405",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 32,
      "stage": "KS3",
      "title": "Cakes & Cookies for Beginners",
      "ctitle": "初學者蛋糕與餅乾",
      "author": "Fiona Watt",
      "publisher": "Usborne Publishing\nLtd",
      "isbn": "978-0746028100",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 33,
      "stage": "KS3",
      "title": "Can You Find It, Too?",
      "ctitle": "你也能找到它嗎？",
      "author": "Judith Cressy",
      "publisher": "Harry N. Abrams, Inc",
      "isbn": "978-0810950467",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 34,
      "stage": "KS3",
      "title": "Cantonese Culture: Aspects of Life in Modern\nHong Kong and Southeast Asia",
      "ctitle": "粵語文化：現代香港與東南亞生活面面觀",
      "author": "Shirley Ingram &\nRebecca S.Y. Ng",
      "publisher": "Asia 2000",
      "isbn": "978-9627160373",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 35,
      "stage": "KS3",
      "title": "Careers",
      "ctitle": "職業生涯",
      "author": "Karen Lewitt Dunn",
      "publisher": "Perfection Learning",
      "isbn": "978-0756964597",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 36,
      "stage": "KS3",
      "title": "Cartoons & Animation",
      "ctitle": "卡通與動畫",
      "author": "Ivan Bulloc, Shona Hynes, Jeffrey\nLewis",
      "publisher": "Children's Press",
      "isbn": "978-0516263427",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 37,
      "stage": "KS3",
      "title": "Cell Wars",
      "ctitle": "細胞戰爭",
      "author": "Dr. Fran Balkwill",
      "publisher": "Carolrhoda\nBooks,Inc.",
      "isbn": "978-0876147610",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 38,
      "stage": "KS3",
      "title": "Charlie and the Chocolate Factory",
      "ctitle": "查理與巧克力工廠",
      "author": "Roald Dahl",
      "publisher": "Puffin",
      "isbn": "978-0142410318",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 39,
      "stage": "KS3",
      "title": "Chew on This: Everything You Don't Want to\nKnow about Fast Food",
      "ctitle": "咀嚼這個：關於快餐你不想知道的一切",
      "author": "Eric Schlosser,\nCharles Wilson",
      "publisher": "Houghton Mifflin",
      "isbn": "978-0618593941",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 40,
      "stage": "KS3",
      "title": "Children of  the World",
      "ctitle": "世界兒童",
      "author": "Treays",
      "publisher": "Oxford",
      "isbn": "978-0199107704",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 41,
      "stage": "KS3",
      "title": "Children's Book of Sport",
      "ctitle": "兒童運動之書",
      "author": "DK",
      "publisher": "Dorling Kindersley",
      "isbn": "978-1405368506",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 42,
      "stage": "KS3",
      "title": "Child's Introduction to the Night Sky: The Story of the Stars, Planets, and Constellations and How You Can Find Them in the Sky",
      "ctitle": "兒童am夜空入門：星星、行星和星座的故事以及如何在天空中找到它們",
      "author": "Michael Driscoll",
      "publisher": "Black Dog & Leventhal",
      "isbn": "978-1579123666",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 43,
      "stage": "KS3",
      "title": "China - The People (Lands, Peoples, & Cultures)",
      "ctitle": "中國 - 人民（土地、人民與文化）",
      "author": "Bobbie Kalman",
      "publisher": "Crabtree Publishing Co, Canada",
      "isbn": "978-0778796688",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 44,
      "stage": "KS3",
      "title": "Chinese Fables: 'The Dragon Slayer' and Other\nTimeless Tales of Wisdom",
      "ctitle": "中國寓言：'屠龍者'及其他永恆的智慧故事",
      "author": "Shiho S. Nunes",
      "publisher": "Tuttle Publishing",
      "isbn": "978-0804841528",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 45,
      "stage": "KS3",
      "title": "Codes and Signals",
      "ctitle": "密碼與信號",
      "author": "Phil Gates",
      "publisher": "Cambridge\nUniversity Press",
      "isbn": "978-0521499682",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 46,
      "stage": "KS3",
      "title": "Comets, Meteors, and Asteroids",
      "ctitle": "彗星、流星和小行星",
      "author": "Seymour Simon",
      "publisher": "Scholastic Inc.",
      "isbn": "978-0439051491",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 47,
      "stage": "KS3",
      "title": "Countries Fly Flags",
      "ctitle": "國家飄揚旗幟",
      "author": "Philip Steele",
      "publisher": "Kingfisher",
      "isbn": "978-1856973786",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 48,
      "stage": "KS3",
      "title": "Derek Dungbeetle in Paradise",
      "ctitle": "天堂中的德里克·糞甲蟲",
      "author": "Nick Storme",
      "publisher": "Mammoth",
      "isbn": "978-0749730703",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 49,
      "stage": "KS3",
      "title": "Describe It",
      "ctitle": "描述它",
      "author": "Vijaya Khisty\nBodach",
      "publisher": "Perfection Learning",
      "isbn": "978-0756964474",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 50,
      "stage": "KS3",
      "title": "DK Readers L4: Free At Last: The Story of\nMartin Luther King, Jr.",
      "ctitle": "DK讀者L4：終於自由：馬丁·路德·金的故事",
      "author": "Angela Bull",
      "publisher": "DK Publishing",
      "isbn": "978-0756656157",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 51,
      "stage": "KS3",
      "title": "DNA is Here to Stay",
      "ctitle": "DNA將永遠存在",
      "author": "Dr. Fran Balkwill",
      "publisher": "Carolrhoda\nBooks,Inc.",
      "isbn": "978-0876147634",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 52,
      "stage": "KS3",
      "title": "Don't try this at home! : science fun for kids on\nthe go",
      "ctitle": "不要在家嘗試！：外出兒童的科學樂趣",
      "author": "Vicki Cobb",
      "publisher": "Morrow Junior\nBooks",
      "isbn": "978-0380728107",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 53,
      "stage": "KS3",
      "title": "Dracula",
      "ctitle": "德古拉",
      "author": "Bram Stoker",
      "publisher": "Penguin",
      "isbn": "978-0582426634",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 54,
      "stage": "KS3",
      "title": "Eat Healthy, Feel Great",
      "ctitle": "健康飲食，感覺棒極了",
      "author": "William Sears, M.D., Martha Sears, R.N. & Christie Watts\nKelly",
      "publisher": "Sears Children's Library",
      "isbn": "978-0316787086",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 55,
      "stage": "KS3",
      "title": "Escaping the Giant Wave",
      "ctitle": "逃離巨浪",
      "author": "Peg Kehret",
      "publisher": "Aladdin",
      "isbn": "978-0689852732",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 56,
      "stage": "KS3",
      "title": "Every Day on Earth: Fun Facts That Happen\nEvery 24 Hours",
      "ctitle": "地球上的每一天：每24小時發生的有趣事實",
      "author": "Steve Murrie,\nMatthew Murrie",
      "publisher": "Scholastic\nPaperbacks",
      "isbn": "978-0545297066",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 57,
      "stage": "KS3",
      "title": "Every Living Thing",
      "ctitle": "每一個生命",
      "author": "Cynthia Rylant &\nS.D. Schindler",
      "publisher": "Modern Curriculum\nPress",
      "isbn": "978-0689712630",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 58,
      "stage": "KS3",
      "title": "Everyday Food - Beans",
      "ctitle": "日常食物 - 豆類",
      "author": "Joyce Bentley",
      "publisher": "Chrysalis Education",
      "isbn": "978-1844581849",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 59,
      "stage": "KS3",
      "title": "Explorers from Columbus to Armstrong",
      "ctitle": "從哥倫布到阿姆斯壯的探險家",
      "author": "Felicity Everett and\nStruan Reid",
      "publisher": "Scholastic Inc.",
      "isbn": "978-0590621762",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 60,
      "stage": "KS3",
      "title": "Factory Girls: Voices from the Heart of\nModern China",
      "ctitle": "工廠女孩：來自現代中國心臟的聲音",
      "author": "Leslie T. Chang",
      "publisher": "Spiegel & Grau",
      "isbn": "978-0385520171",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 61,
      "stage": "KS3",
      "title": "For A Better Life",
      "ctitle": "為了更好的生活",
      "author": "Christine Kohler",
      "publisher": "Steck-Vaughn",
      "isbn": "978-0739875087",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 62,
      "stage": "KS3",
      "title": "Forming Hypotheses",
      "ctitle": "形成假設",
      "author": "Cathy Elliott",
      "publisher": "Perfection Learning",
      "isbn": "978-0789168498",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 63,
      "stage": "KS3",
      "title": "Friendliness",
      "ctitle": "友善",
      "author": "Kristin Thoennes\nKeller",
      "publisher": "Capstone Press",
      "isbn": "978-0736836807",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 64,
      "stage": "KS3",
      "title": "George's Secret Key to the Universe",
      "ctitle": "喬治的宇宙秘密鑰匙",
      "author": "Stephen Hawking, Lucy Hawking",
      "publisher": "Simon & Schuster Books for Young\nReaders",
      "isbn": "978-1416985846",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 65,
      "stage": "KS3",
      "title": "Girls Think of Everything: Stories of Ingenious\nInventions by Women",
      "ctitle": "女孩想到一切：女性巧妙發明的故事",
      "author": "Catherine\nThimmesh",
      "publisher": "HMH Books for\nYoung Readers",
      "isbn": "978-0618195633",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 66,
      "stage": "KS3",
      "title": "Glow-in-the-Dark Constellations : A Field\nGuide for Young Stargazers",
      "ctitle": "夜光星座：年輕觀星者的實地指南",
      "author": "C.E. Thompson",
      "publisher": "Grosset & Dunlap",
      "isbn": "978-0448412535",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 67,
      "stage": "KS3",
      "title": "Glow-in-the-dark: Stars and Constellations",
      "ctitle": "夜光：星星與星座",
      "author": "Seymour Simon",
      "publisher": "Scholastic Inc.",
      "isbn": "978-0545004039",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 68,
      "stage": "KS3",
      "title": "Go: A Kidd's Guide to Graphic Design",
      "ctitle": "開始：基德的平面設計指南",
      "author": "Chip Kidd",
      "publisher": "Workman Publishing",
      "isbn": "978-0761172192",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 69,
      "stage": "KS3",
      "title": "Gone with the Wind, Part One",
      "ctitle": "飄，第一部",
      "author": "Margaret Mitchell",
      "publisher": "Penguin",
      "isbn": "978-1405882200",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 70,
      "stage": "KS3",
      "title": "Gone with the Wind, Part Two",
      "ctitle": "飄，第二部",
      "author": "Margaret Mitchell",
      "publisher": "Penguin",
      "isbn": "978-1405882217",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 71,
      "stage": "KS3",
      "title": "Happiness Now",
      "ctitle": "現在就快樂",
      "author": "Andrew Matthews",
      "publisher": "Seashell Publishers\nPty Ltd",
      "isbn": "978-0975764275",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 72,
      "stage": "KS3",
      "title": "Healthy Eating Meat, Fish and Eggs",
      "ctitle": "健康飲食：肉類、魚類和雞蛋",
      "author": "Susan Martineau &\nHel James",
      "publisher": "Franklin Watts",
      "isbn": "978-0749667207",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 73,
      "stage": "KS3",
      "title": "Hidden Army: Clay Soldiers of Ancient China",
      "ctitle": "隱藏的軍隊：古代中國的兵馬俑",
      "author": "Jane O'Connor",
      "publisher": "Grosset & Dunlap",
      "isbn": "978-0448455808",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 74,
      "stage": "KS3",
      "title": "House Rules",
      "ctitle": "家庭規則",
      "author": "Jodi Picoult",
      "publisher": "Washington Square\nPress",
      "isbn": "978-0743296441",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 75,
      "stage": "KS3",
      "title": "How Animals Work",
      "ctitle": "動物如何運作",
      "author": "David Burnie",
      "publisher": "DK Publishing",
      "isbn": "978-1405351928",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 76,
      "stage": "KS3",
      "title": "How Magic Tricks Work",
      "ctitle": "魔術技巧如何運作",
      "author": "Patrick Mangan",
      "publisher": "Cengage Learning",
      "isbn": "978-0170114356",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 77,
      "stage": "KS3",
      "title": "I Know How My Cells Make Me Grow",
      "ctitle": "我知道我的細胞如何讓我成長",
      "author": "Kate Rowan",
      "publisher": "Walker Books",
      "isbn": "978-0744572346",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 78,
      "stage": "KS3",
      "title": "I Never Knew I Had a Choice : Explorations in Personal Growth",
      "ctitle": "我從不知道我有選擇：個人成長的探索",
      "author": "Gerald Corey & Marianne\nSchneider Corey",
      "publisher": "Cengage Learning",
      "isbn": "978-0495602293",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 79,
      "stage": "KS3",
      "title": "I Want to Be a Fashion Designer",
      "ctitle": "我想成為時裝設計師",
      "author": "Stephanie Maze",
      "publisher": "Harcourt Paperbacks",
      "isbn": "978-0152019389",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 80,
      "stage": "KS3",
      "title": "I Want to Be a Veterinarian",
      "ctitle": "我想成為獸醫",
      "author": "Stephanie Maze",
      "publisher": "HMH Books for\nYoung Readers",
      "isbn": "978-0152019655",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 81,
      "stage": "KS3",
      "title": "Images",
      "ctitle": "圖像",
      "author": "Daniel J. Domoff\n(ed.)",
      "publisher": "Steck-Vaughn\nCompany",
      "isbn": "978-1558556638",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 82,
      "stage": "KS3",
      "title": "Inventions & Discovery: Hedy Lamarr And a\nSecret Communication System",
      "ctitle": "發明與發現：海蒂·拉瑪與秘密通訊系統",
      "author": "Trina Robbins",
      "publisher": "Capstone Press",
      "isbn": "978-0736896412",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 83,
      "stage": "KS3",
      "title": "Inventions & Discovery: Isaac Newton And\nThe Laws of Motion",
      "ctitle": "發明與發現：艾薩克·牛頓與運動定律",
      "author": "Andrea\nGianopoulos",
      "publisher": "Capstone Press",
      "isbn": "978-0736878999",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 84,
      "stage": "KS3",
      "title": "Inventions & Discovery: Steve Jobs,\nSteve Wozniak, and the Personal Computer",
      "ctitle": "發明與發現：史蒂夫·喬布斯、史蒂夫·沃茲尼亞克與個人電腦",
      "author": "Donald B. Lemke",
      "publisher": "Capstone Press",
      "isbn": "978-0736896504",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 85,
      "stage": "KS3",
      "title": "Inventions & Discovery: The Wright Brothers\nand the Airplane",
      "ctitle": "發明與發現：萊特兄弟與飛機",
      "author": "Xavier Niz",
      "publisher": "Capstone Press",
      "isbn": "978-0736878975",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 86,
      "stage": "KS3",
      "title": "Junk Sculpture",
      "ctitle": "廢料雕塑",
      "author": "Alix Wood",
      "publisher": "Gareth Stevens\nPublishing",
      "isbn": "978-1482422870",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 87,
      "stage": "KS3",
      "title": "Jurassic Park",
      "ctitle": "侏羅紀公園",
      "author": "Michael Crichton\n& F.H. Cornish",
      "publisher": "Arrow Books",
      "isbn": "978-1784752224",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 88,
      "stage": "KS3",
      "title": "Knights and Castles",
      "ctitle": "騎士與城堡",
      "author": "David Maule",
      "publisher": "Dorling Kindersley Publishers Limited",
      "isbn": "978-0751331981",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 89,
      "stage": "KS3",
      "title": "Laughter",
      "ctitle": "笑聲",
      "author": "Steve Ziolkowski",
      "publisher": "OUP",
      "isbn": "978-0194233644",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 90,
      "stage": "KS3",
      "title": "Leonardo Da Vinci",
      "ctitle": "達文西",
      "author": "Tony Hart",
      "publisher": "Barron's",
      "isbn": "978-0812018288",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 91,
      "stage": "KS3",
      "title": "Letters to Henrietta",
      "ctitle": "給亨麗埃塔的信",
      "author": "Nell Marshall",
      "publisher": "Cambridge\nUniversity Press",
      "isbn": "978-0521476256",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 92,
      "stage": "KS3",
      "title": "Lisa Visits Loch Ness",
      "ctitle": "麗莎造訪尼斯湖",
      "author": "H. Q. Mitchell",
      "publisher": "Ediculsa Distribucion",
      "isbn": "978-9603790839",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 93,
      "stage": "KS3",
      "title": "Lives of the Musicians: Good Times, Bad Times (and What the Neighbors Thought)",
      "ctitle": "音樂家的生活：好時光，壞時光（以及鄰居的想法）",
      "author": "Kathleen Krull",
      "publisher": "Houghton Mifflin",
      "isbn": "978-0544238060",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 94,
      "stage": "KS3",
      "title": "Living in Space",
      "ctitle": "在太空中生活",
      "author": "C. Dugan",
      "publisher": "Teacher Created\nMaterials, Inc.",
      "isbn": "978-1433336751",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 95,
      "stage": "KS3",
      "title": "Look What Came from Germany",
      "ctitle": "看看來自德國的東西",
      "author": "Kevin Davis",
      "publisher": "Franklin Watts",
      "isbn": "978-0531164358",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 96,
      "stage": "KS3",
      "title": "Looking at Red in Paintings",
      "ctitle": "看繪畫中的紅色",
      "author": "Sallie Purkis",
      "publisher": "Longman",
      "isbn": "978-0582123052",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 97,
      "stage": "KS3",
      "title": "Madame Doubtfire",
      "ctitle": "道特菲爾夫人",
      "author": "Anne Fine",
      "publisher": "Penguin",
      "isbn": "978-0141359755",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 98,
      "stage": "KS3",
      "title": "Maker Lab: 28 Super Cool Projects",
      "ctitle": "創客實驗室：28個超酷專案",
      "author": "Jack Challoner",
      "publisher": "DK Children",
      "isbn": "978-1465451354",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 99,
      "stage": "KS3",
      "title": "Math At The Olympics",
      "ctitle": "奧運會中的數學",
      "author": "E. Sullivan",
      "publisher": "Benchmark Education Company",
      "isbn": "978-1410804334",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 100,
      "stage": "KS3",
      "title": "Math to Munch On",
      "ctitle": "咀嚼數學",
      "author": "Marc Gave",
      "publisher": "Benchmark Education Company",
      "isbn": "978-1583449059",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 101,
      "stage": "KS3",
      "title": "Microbiology",
      "ctitle": "微生物學",
      "author": "Dan Green & Simon Basher",
      "publisher": "Kingfisher",
      "isbn": "978-0753471944",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 102,
      "stage": "KS3",
      "title": "Milly-Molly-Mandy Stories",
      "ctitle": "米莉-莫莉-曼迪的故事",
      "author": "Joyce Lankester\nBrisley",
      "publisher": "Puffin",
      "isbn": "978-0140305234",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 103,
      "stage": "KS3",
      "title": "Mistakes That Worked: 40 Familiar Inventions\n& How They Came to Be",
      "ctitle": "有用的錯誤：40個熟悉發明的由來",
      "author": "Charlotte Foltz\nJones",
      "publisher": "Delacorte Press",
      "isbn": "978-0385320436",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 104,
      "stage": "KS3",
      "title": "Money Doesn't Grow on Trees",
      "ctitle": "金錢不會長在樹上",
      "author": "Julie Ellis",
      "publisher": "CSI Literacy and Lift\nEducation",
      "isbn": "978-1604578768",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 105,
      "stage": "KS3",
      "title": "More Bible Stories for Children",
      "ctitle": "更多兒童聖經故事",
      "author": "Jane Carruth",
      "publisher": "Award Publications",
      "isbn": "978-0861637706",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 106,
      "stage": "KS3",
      "title": "Mother Gooses Nursery Rhymes",
      "ctitle": "鵝媽媽童謠",
      "author": "Donaldson Julia",
      "publisher": "Macmillan",
      "isbn": "978-0333961360",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 107,
      "stage": "KS3",
      "title": "Motion in Space",
      "ctitle": "太空中的運動",
      "author": "Blaisdell, Molly",
      "publisher": "Perfection Learning",
      "isbn": "978-0756964436",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 108,
      "stage": "KS3",
      "title": "Mozart",
      "ctitle": "莫札特",
      "author": "Ann Rachlin",
      "publisher": "Barron's Educational\nSeries",
      "isbn": "978-0812049893",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 109,
      "stage": "KS3",
      "title": "Mozart: The Boy Who Changed the World With His Music",
      "ctitle": "莫札特：用音樂改變世界的男孩",
      "author": "Marcus Weeks",
      "publisher": "National Geographic Children's Books",
      "isbn": "978-1426314513",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 110,
      "stage": "KS3",
      "title": "Murder Most Unladylike",
      "ctitle": "最不像淑女的謀殺案",
      "author": "Robin Stevens",
      "publisher": "Penguin Books Ltd",
      "isbn": "978-0141369761",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 111,
      "stage": "KS3",
      "title": "Murderous Maths Guaranteed to Mash Your\nMind",
      "ctitle": "殺人數學：保證讓你頭腦混亂",
      "author": "Kjartan Poskitt",
      "publisher": "Scholastic",
      "isbn": "978-1407105871",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 112,
      "stage": "KS3",
      "title": "Music Was it: Young Leonard Bernstein",
      "ctitle": "音樂就是一切：年輕的雷納德·伯恩斯坦",
      "author": "Susan Goldman\nRubin",
      "publisher": "Charlesbridge\nPublishing,U.S.",
      "isbn": "978-1580893459",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 113,
      "stage": "KS3",
      "title": "My Best Book of  the Moon",
      "ctitle": "我最棒的月亮書",
      "author": "Ian Graham",
      "publisher": "Kingfisher",
      "isbn": "978-0753403051",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 114,
      "stage": "KS3",
      "title": "My Best Book of Gymnastics",
      "ctitle": "我最棒的體操書",
      "author": "C. Morley",
      "publisher": "Kingfisher",
      "isbn": "978-0753408353",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 115,
      "stage": "KS3",
      "title": "My Best Book of Whales And Dolphins",
      "ctitle": "我最棒的鯨魚和海豚書",
      "author": "Christiane Gunzi",
      "publisher": "Pan MacMillan",
      "isbn": "978-0753406311",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 116,
      "stage": "KS3",
      "title": "My Fair Lady",
      "ctitle": "窈窕淑女",
      "author": "Alan Jay Lerner",
      "publisher": "Penguin",
      "isbn": "978-0140013641",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 117,
      "stage": "KS3",
      "title": "My First Nursery Stories",
      "ctitle": "我的第一本童話故事",
      "author": "Ross Tony",
      "publisher": "Andersen Press Ltd.",
      "isbn": "978-1842707906",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 118,
      "stage": "KS3",
      "title": "My First Oxford Book of Nonsense Poems",
      "ctitle": "我的第一本牛津胡鬧詩集",
      "author": "John Foster",
      "publisher": "OUP",
      "isbn": "978-0192762757",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 119,
      "stage": "KS3",
      "title": "Mythology for Teens: Classic Myths in\nToday's World",
      "ctitle": "青少年神話學：當今世界的經典神話",
      "author": "Zachary Hamby",
      "publisher": "Prufrock Press",
      "isbn": "978-1593633639",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 120,
      "stage": "KS3",
      "title": "Natural Disasters: Droughts",
      "ctitle": "自然災害：乾旱",
      "author": "Anne Ylvisaker",
      "publisher": "Capstone Press",
      "isbn": "978-0736815055",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 121,
      "stage": "KS3",
      "title": "Natural Disasters: Forest Fires",
      "ctitle": "自然災害：森林火災",
      "author": "Anne Ylvisaker",
      "publisher": "Capstone Press",
      "isbn": "978-0736833028",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 122,
      "stage": "KS3",
      "title": "Natural Disasters: Ice Storms",
      "ctitle": "自然災害：冰風暴",
      "author": "Anne Ylvisaker",
      "publisher": "Capstone Press",
      "isbn": "978-0736815062",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 123,
      "stage": "KS3",
      "title": "Nature At Risks",
      "ctitle": "處於危險中的自然",
      "author": "Rosie Harlow &\nSally Morgan",
      "publisher": "Kingfisher",
      "isbn": "978-1856973809",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 124,
      "stage": "KS3",
      "title": "Nick and Tesla's Solar-Powered Showdown: A Mystery with Sun-Powered Gadgets You Can Build Yourself",
      "ctitle": "尼克和特斯拉的太陽能對決：一個你可以自己建造太陽能裝置的謎題",
      "author": "Science Bob Pflugfelder & Steve Hockensmith",
      "publisher": "Quirk Books",
      "isbn": "978-1594748660",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 125,
      "stage": "KS3",
      "title": "Night at the Museum",
      "ctitle": "博物館驚魂夜",
      "author": "Lynda Edwards",
      "publisher": "Mary Glasgow\nMagazines",
      "isbn": "978-1905775231",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 126,
      "stage": "KS3",
      "title": "Notting Hill",
      "ctitle": "諾丁山",
      "author": "Richard Curtis",
      "publisher": "Penguin",
      "isbn": "978-1405879255",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 127,
      "stage": "KS3",
      "title": "One Day We Had to Run",
      "ctitle": "有一天我們必須逃跑",
      "author": "Sybella Wilkes",
      "publisher": "Evans Publishing\nGroup",
      "isbn": "978-0237520953",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 128,
      "stage": "KS3",
      "title": "Orphan of the Sun",
      "ctitle": "太陽的孤兒",
      "author": "Gill Harvey",
      "publisher": "Bloomsbury\nChildren's Books",
      "isbn": "978-1582346854",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 129,
      "stage": "KS3",
      "title": "Overcoming Challenges: The Life of Charles\nF. Bolden, Jr.",
      "ctitle": "克服挑戰：小查爾斯·F·博爾登的一生",
      "author": "Darwin McBeth\nWalton",
      "publisher": "Steck-Vaughn\nCompany",
      "isbn": "978-0739808795",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 130,
      "stage": "KS3",
      "title": "P.W. Cracker Sees the World",
      "ctitle": "P.W. 克拉克看世界",
      "author": "Linda Yoshizawa",
      "publisher": "Steck-Vaughn\nCompany",
      "isbn": "978-0739808863",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 131,
      "stage": "KS3",
      "title": "Panda (Watch Me Grow)",
      "ctitle": "熊貓（看我長大）",
      "author": "Fleur Star, Lorrie\nMack",
      "publisher": "DK Publishing",
      "isbn": "978-0756634322",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 132,
      "stage": "KS3",
      "title": "Past Work, Future Work",
      "ctitle": "過去的工作，未來的工作",
      "author": "Andrew Einspruch",
      "publisher": "Int'l Thomson",
      "isbn": "978-0170114677",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 133,
      "stage": "KS3",
      "title": "Pirate Tales",
      "ctitle": "海盜故事",
      "author": "David Maule",
      "publisher": "Dorling Kindersley\nLimited",
      "isbn": "978-0751331684",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 134,
      "stage": "KS3",
      "title": "Pirates of the Caribbean - At World's End",
      "ctitle": "加勒比海盜：世界的盡頭",
      "author": "Ted Elliott & Terry Rossio, retold by Karen Holmes",
      "publisher": "Pearson Education Limited",
      "isbn": "978-1405892056",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 135,
      "stage": "KS3",
      "title": "Playground Science",
      "ctitle": "遊樂場科學",
      "author": "Elizabeth Paren",
      "publisher": "Pearson Longman",
      "isbn": "978-0582834897",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 136,
      "stage": "KS3",
      "title": "Queen Elizabeth II：Monarch of Our Times",
      "ctitle": "伊麗莎白二世女王：我們時代的君主",
      "author": "Sara Barton-Wood",
      "publisher": "Hachette Children's\nGroup",
      "isbn": "978-0750238861",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 137,
      "stage": "KS3",
      "title": "Rain Man",
      "ctitle": "雨人",
      "author": "Leonore Fleischer",
      "publisher": "Pearson Education\nLimited",
      "isbn": "978-1405876773",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 138,
      "stage": "KS3",
      "title": "Rainforests",
      "ctitle": "熱帶雨林",
      "author": "Rowena Akinyemi",
      "publisher": "OUP",
      "isbn": "978-0194228039",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 139,
      "stage": "KS3",
      "title": "Rally Cars",
      "ctitle": "拉力賽車",
      "author": "Carrie A. Braulick",
      "publisher": "Capstone Press",
      "isbn": "978-0736867849",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 140,
      "stage": "KS3",
      "title": "Rapunzel : Fix Fairytale Problems with\nScience and Technology",
      "ctitle": "長髮公主：用科學和技術解決童話問題",
      "author": "Jasmine Brooke",
      "publisher": "Franklin Watts",
      "isbn": "978-1445155630",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 141,
      "stage": "KS3",
      "title": "Refugee Camp",
      "ctitle": "難民營",
      "author": "David Dalton",
      "publisher": "Ticktock Media Ltd",
      "isbn": "978-1860078248",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 142,
      "stage": "KS3",
      "title": "Reinventing Robotics",
      "ctitle": "重新發明機器人學",
      "author": "Lacey Saskia",
      "publisher": "Teacher Created\nMaterials",
      "isbn": "978-1493836239",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 143,
      "stage": "KS3",
      "title": "Relationships",
      "ctitle": "人際關係",
      "author": "Cath Senker",
      "publisher": "Wayland",
      "isbn": "978-0750245043",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 144,
      "stage": "KS3",
      "title": "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and\nMiddle Class Do Not!",
      "ctitle": "富爸爸窮爸爸：富人們教給孩子們關於金錢的知識，而窮人和中產階級卻不教！",
      "author": "Robert T. Kiyosaki",
      "publisher": "Plata Publishing",
      "isbn": "978-1612680194",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 145,
      "stage": "KS3",
      "title": "Rich Man Poor Man",
      "ctitle": "富人窮人",
      "author": "T.C. Jupp",
      "publisher": "Hueber Verlag",
      "isbn": "978-3194729568",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 146,
      "stage": "KS3",
      "title": "Robots",
      "ctitle": "機器人",
      "author": "Stanley Ling",
      "publisher": "Perfection Learning",
      "isbn": "978-0789167040",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 147,
      "stage": "KS3",
      "title": "Rock Climbing",
      "ctitle": "攀岩",
      "author": "Kate Cooper",
      "publisher": "Ticktock\nEntertainment Ltd.",
      "isbn": "978-1846965241",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 148,
      "stage": "KS3",
      "title": "Rocks And Minerals",
      "ctitle": "岩石和礦物",
      "author": "Jenny Karpelenia",
      "publisher": "Perfection Learning",
      "isbn": "978-0756944728",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 149,
      "stage": "KS3",
      "title": "Secret Coders",
      "ctitle": "秘密編程師",
      "author": "Gene Luen Yang &\nMike Holmes",
      "publisher": "First Second",
      "isbn": "978-1626720756",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 150,
      "stage": "KS3",
      "title": "Secrets of the Mummies",
      "ctitle": "木乃伊的秘密",
      "author": "Harriet Griffey",
      "publisher": "Dorling Kindersley\nLtd.",
      "isbn": "978-0751357158",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 151,
      "stage": "KS3",
      "title": "Separations - Death",
      "ctitle": "分離 - 死亡",
      "author": "Janine Amos",
      "publisher": "Cherrytree Books",
      "isbn": "978-1842341636",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 152,
      "stage": "KS3",
      "title": "Shock for the Secret Seven",
      "ctitle": "秘密七人組的震驚",
      "author": "Enid Blyton",
      "publisher": "Hachette Children's\nGroup",
      "isbn": "978-0340569924",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 153,
      "stage": "KS3",
      "title": "Sinking of the Titanic",
      "ctitle": "鐵達尼號的沉沒",
      "author": "Matt Doeden",
      "publisher": "Capstone Press",
      "isbn": "978-0736852470",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 154,
      "stage": "KS3",
      "title": "Smallville: Arrival",
      "ctitle": "小鎮風雲：到來",
      "author": "Michael\nTeitelbaum",
      "publisher": "Little, Brown Young\nReaders",
      "isbn": "978-0316173599",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 155,
      "stage": "KS3",
      "title": "Soccer Attacking",
      "ctitle": "足球進攻",
      "author": "Paul Fairclough",
      "publisher": "A&C Black",
      "isbn": "978-0713685497",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 156,
      "stage": "KS3",
      "title": "Soul Surfer: A True Story of Faith,\nFamily, and Fighting to Get Back on the Board",
      "ctitle": "靈魂衝浪手：信仰、家庭和重新站上衝浪板的真實故事",
      "author": "Bethany Hamilton",
      "publisher": "Simon & Schuster",
      "isbn": "978-1416503460",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 157,
      "stage": "KS3",
      "title": "Sources of Forces: Science Fun with Force\nFields",
      "ctitle": "力的來源：力場的科學樂趣",
      "author": "Vicki Cobb",
      "publisher": "First Avenue\nEditions",
      "isbn": "978-0822570233",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 158,
      "stage": "KS3",
      "title": "Squirts and Spurts: Science Fun with Water",
      "ctitle": "噴射和噴濺：水的科學樂趣",
      "author": "Vicki Cobb",
      "publisher": "First Avenue\nEditions",
      "isbn": "978-0822570240",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 159,
      "stage": "KS3",
      "title": "Star Files Jackie Chan",
      "ctitle": "明星檔案：成龍",
      "author": "Dan Fox",
      "publisher": "Raintree",
      "isbn": "978-1410916594",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 160,
      "stage": "KS3",
      "title": "Steve Jobs: Insanely Great",
      "ctitle": "史蒂夫·喬布斯：瘋狂的偉大",
      "author": "Jessie Hartland",
      "publisher": "Random House USA\nInc",
      "isbn": "978-0307982957",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 161,
      "stage": "KS3",
      "title": "Stories from Greek Tragedies",
      "ctitle": "希臘悲劇故事",
      "author": "Kieran McGovern",
      "publisher": "OUP",
      "isbn": "978-0195863055",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 162,
      "stage": "KS3",
      "title": "Story of the Orchestra : Listen While You Learn about the Instruments, the Music and the Composers Who Wrote the Music!",
      "ctitle": "管弦樂團的故事：在學習樂器、音樂和作曲家的同時聆聽！",
      "author": "Robert Levine",
      "publisher": "Black Dog & Leventhal Publishers",
      "isbn": "978-1579121488",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 163,
      "stage": "KS3",
      "title": "Story of the Statue of Liberty",
      "ctitle": "自由女神像的故事",
      "author": "Xavier Niz",
      "publisher": "Capstone Press",
      "isbn": "978-0736868822",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 164,
      "stage": "KS3",
      "title": "Stranger Danger?",
      "ctitle": "陌生人危險？",
      "author": "Anne Fine",
      "publisher": "Puffin",
      "isbn": "978-0140343021",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 165,
      "stage": "KS3",
      "title": "Street Child",
      "ctitle": "街頭兒童",
      "author": "Colin Hynson",
      "publisher": "Ticktock Media Ltd",
      "isbn": "978-1860078262",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 166,
      "stage": "KS3",
      "title": "Sustainable Lifestyles in a Changing Economy",
      "ctitle": "變化經濟中的可持續生活方式",
      "author": "Rae Simon",
      "publisher": "Mason Crest",
      "isbn": "978-1422217719",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 167,
      "stage": "KS3",
      "title": "Tales of Crime and Detection",
      "ctitle": "犯罪和偵探故事",
      "author": "David Foulds",
      "publisher": "OUP",
      "isbn": "978-0195455502",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 168,
      "stage": "KS3",
      "title": "Tales of Horror",
      "ctitle": "恐怖故事",
      "author": "Bram Stoker",
      "publisher": "Macmillan",
      "isbn": "978-1405076647",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 169,
      "stage": "KS3",
      "title": "Tales of William Shakespeare: The Comedies",
      "ctitle": "威廉·莎士比亞的故事：喜劇",
      "author": "Paula J. Reece",
      "publisher": "Perfection Learning",
      "isbn": "978-0789152886",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 170,
      "stage": "KS3",
      "title": "Talking about Death & Dying",
      "ctitle": "談論死亡與臨終",
      "author": "Bruce Sanders",
      "publisher": "Franklin Watts",
      "isbn": "978-0749653941",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 171,
      "stage": "KS3",
      "title": "Technology",
      "ctitle": "科技",
      "author": "Dan Green &\nSimon Basher",
      "publisher": "Pan MacMillan",
      "isbn": "978-0753468203",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 172,
      "stage": "KS3",
      "title": "Telecommunications",
      "ctitle": "電信",
      "author": "Colin Hynson",
      "publisher": "Ticktock Publishing\nLtd.",
      "isbn": "978-1860071157",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 173,
      "stage": "KS3",
      "title": "Ten True Animal Rescues",
      "ctitle": "十個真實的動物救援故事",
      "author": "Jeanne Betancourt",
      "publisher": "Scholastic",
      "isbn": "978-0590681179",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 174,
      "stage": "KS3",
      "title": "Terrible Typhoid Mary: A True Story of the\nDeadliest Cook in America",
      "ctitle": "可怕的傷寒瑪麗：美國最致命廚師的真實故事",
      "author": "Susan Campbell\nBartoletti",
      "publisher": "Houghton Mifflin",
      "isbn": "978-0544313675",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 175,
      "stage": "KS3",
      "title": "The 7 Habits of Highly Effective Teens\nPersonal Workbook",
      "ctitle": "高效青少年的7個習慣個人工作簿",
      "author": "Sean Covey",
      "publisher": "Simon & Schuster",
      "isbn": "978-1476764689",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 176,
      "stage": "KS3",
      "title": "The BFG",
      "ctitle": "好心眼巨人",
      "author": "Roald Dahl",
      "publisher": "Puffin",
      "isbn": "978-0141322629",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 177,
      "stage": "KS3",
      "title": "The Boy on the Wooden Box: How the\nImpossible Became Possible . . . on Schindler's List",
      "ctitle": "木箱上的男孩：不可能如何變成可能...在辛德勒的名單上",
      "author": "Leon Leyson",
      "publisher": "Atheneum Books for\nYoung Readers",
      "isbn": "978-1442497825",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 178,
      "stage": "KS3",
      "title": "The Breadwinner",
      "ctitle": "養家者",
      "author": "Deborah Ellis",
      "publisher": "Groundwood Books",
      "isbn": "978-1554987658",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 179,
      "stage": "KS3",
      "title": "The Client",
      "ctitle": "委託人",
      "author": "John Grisham",
      "publisher": "Penguin",
      "isbn": "978-0582417779",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 180,
      "stage": "KS3",
      "title": "The Climb",
      "ctitle": "攀登",
      "author": "John Escott",
      "publisher": "Penguin",
      "isbn": "978-1405878937",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 181,
      "stage": "KS3",
      "title": "The Dalai Lama",
      "ctitle": "達賴喇嘛",
      "author": "Demi",
      "publisher": "Henry Holt",
      "isbn": "978-0805054439",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 182,
      "stage": "KS3",
      "title": "The Devil Wears Prada",
      "ctitle": "穿著Prada的惡魔",
      "author": "Jane Rollason",
      "publisher": "Scholastic UK",
      "isbn": "978-1905775361",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 183,
      "stage": "KS3",
      "title": "The First Moon Landing",
      "ctitle": "第一次登月",
      "author": "Thomas K.\nAdamson",
      "publisher": "Capstone Press",
      "isbn": "978-0736896542",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 184,
      "stage": "KS3",
      "title": "The Fugitive",
      "ctitle": "亡命天涯",
      "author": "J.M. Dillard",
      "publisher": "Penguin",
      "isbn": "978-1405876919",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 185,
      "stage": "KS3",
      "title": "The Ghost of Shanghai",
      "ctitle": "上海幽靈",
      "author": "Claude Guillot",
      "publisher": "Harry N.\nAbrams,Inc.",
      "isbn": "978-0810941298",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 186,
      "stage": "KS3",
      "title": "The Great Earth Magnet",
      "ctitle": "偉大的地球磁鐵",
      "author": "Gillian Turner",
      "publisher": "CSI Literacy and Lift\nEducation",
      "isbn": "978-1604578850",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 187,
      "stage": "KS3",
      "title": "The Greek Gods",
      "ctitle": "希臘諸神",
      "author": "Evslin, Evslin &\nHoopes",
      "publisher": "Perfection Learning",
      "isbn": "978-0812440881",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 188,
      "stage": "KS3",
      "title": "The History News: Medicine",
      "ctitle": "歷史新聞：醫學",
      "author": "Phil Gates",
      "publisher": "Walker Books Ltd",
      "isbn": "978-0744528893",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 189,
      "stage": "KS3",
      "title": "The Housekeeper and the Professor",
      "ctitle": "管家和教授",
      "author": "Yoko Ogawa",
      "publisher": "Picador",
      "isbn": "978-0312427801",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 190,
      "stage": "KS3",
      "title": "The Hypnotist",
      "ctitle": "催眠師",
      "author": "Laurence Anholt",
      "publisher": "Corgi Childrens",
      "isbn": "978-0552573450",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": true,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 191,
      "stage": "KS3",
      "title": "The Last Lecture",
      "ctitle": "最後的演講",
      "author": "Randy Pausch, with Jeffrey Zaslow",
      "publisher": "Hyperion",
      "isbn": "978-1401323257",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 192,
      "stage": "KS3",
      "title": "The Lightning Thief (Percy Jackson and the\nOlympians, Book 1)",
      "ctitle": "閃電盜賊（波西·傑克遜與奧林匹斯眾神，第一冊）",
      "author": "Rick Riordan",
      "publisher": "Disney-Hyperion",
      "isbn": "978-0786838653",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 193,
      "stage": "KS3",
      "title": "The Locked Room and Other Horror Stories",
      "ctitle": "鎖住的房間和其他恐怖故事",
      "author": "M.R. James",
      "publisher": "Penguin",
      "isbn": "978-1405882248",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 194,
      "stage": "KS3",
      "title": "The Magic Finger",
      "ctitle": "魔法手指",
      "author": "Roald Dahl",
      "publisher": "Puffin",
      "isbn": "978-0141322681",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 195,
      "stage": "KS3",
      "title": "The Magic Strings of Frankie Presto: A Novel",
      "ctitle": "法蘭基·普雷斯特的魔法琴弦：一部小說",
      "author": "Mitch Albom",
      "publisher": "HarperCollins\nPublishers",
      "isbn": "978-0062294418",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 196,
      "stage": "KS3",
      "title": "The Man Who Changed the World",
      "ctitle": "改變世界的人",
      "author": "Tony Burnett",
      "publisher": "CSI Literacy and Lift\nEducation",
      "isbn": "978-1604578744",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 197,
      "stage": "KS3",
      "title": "The Memoirs of Cleopatra",
      "ctitle": "克麗奧佩脫拉回憶錄",
      "author": "Margaret George",
      "publisher": "Pan MacMillan",
      "isbn": "978-0330353823",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 198,
      "stage": "KS3",
      "title": "The Metropolitans",
      "ctitle": "大都會人",
      "author": "Carol Goodman",
      "publisher": "Penguin Putnam Inc",
      "isbn": "978-1101997666",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 199,
      "stage": "KS3",
      "title": "The Mummy",
      "ctitle": "木乃伊",
      "author": "David Levithan",
      "publisher": "Penguin",
      "isbn": "978-1405881692",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 200,
      "stage": "KS3",
      "title": "The Number Devil",
      "ctitle": "數字魔鬼",
      "author": "Haas Magnus\nEnzensberger",
      "publisher": "Granta Books",
      "isbn": "978-1862073913",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 201,
      "stage": "KS3",
      "title": "The Olympic Sports Gymnastic Events",
      "ctitle": "奧運體操項目",
      "author": "Jason Page",
      "publisher": "Crabtree",
      "isbn": "978-0778740155",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 202,
      "stage": "KS3",
      "title": "The Pregnancy Project: A Memoir",
      "ctitle": "懷孕計劃：回憶錄",
      "author": "Gaby Rodriguez",
      "publisher": "Simon & Schuster\nBooks for Young Readers",
      "isbn": "978-1442446236",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 203,
      "stage": "KS3",
      "title": "The Road Ahead",
      "ctitle": "未來之路",
      "author": "Bill Gates",
      "publisher": "Penguin",
      "isbn": "978-1405879323",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 204,
      "stage": "KS3",
      "title": "The Singing Bones",
      "ctitle": "歌唱的骨頭",
      "author": "Shaun Tan",
      "publisher": "Allen & Unwin",
      "isbn": "978-0545946124",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 205,
      "stage": "KS3",
      "title": "The Smugglers' Caves and Other Stories",
      "ctitle": "走私者洞穴和其他故事",
      "author": "Enid Blyton",
      "publisher": "Award Publications",
      "isbn": "978-0861637300",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 206,
      "stage": "KS3",
      "title": "The Usbornes Little Book of Things to Make\nand Do in the Holidays",
      "ctitle": "假期製作和活動小書",
      "author": "Ray Gibson",
      "publisher": "Usborne",
      "isbn": "978-0746070567",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 207,
      "stage": "KS3",
      "title": "The World of Dogs",
      "ctitle": "狗的世界",
      "author": "Rebecca\nBlankenhorn",
      "publisher": "Steck-Vaughn\nCompany",
      "isbn": "978-0739808733",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 208,
      "stage": "KS3",
      "title": "The Worst Witch",
      "ctitle": "最糟糕的女巫",
      "author": "Jill Murphy",
      "publisher": "Penguin Books Ltd",
      "isbn": "978-0141344515",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 209,
      "stage": "KS3",
      "title": "Things That Sting",
      "ctitle": "會刺人的東西",
      "author": "Brian Birchall",
      "publisher": "Perfection Learning",
      "isbn": "978-0199197842",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 210,
      "stage": "KS3",
      "title": "Traditions from China",
      "ctitle": "中國傳統",
      "author": "S. Mamdani",
      "publisher": "Hodder Wayland",
      "isbn": "978-0750242486",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": true,
        "3": false,
        "4": true,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 211,
      "stage": "KS3",
      "title": "Trailblazers: Mummies",
      "ctitle": "開拓者：木乃伊",
      "author": "David Orme",
      "publisher": "Ransom Publishing\nLtd.",
      "isbn": "978-1841674278",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 212,
      "stage": "KS3",
      "title": "Trailblazers: Sea Killers",
      "ctitle": "開拓者：海洋殺手",
      "author": "David Orme",
      "publisher": "Ransom Publishing\nLtd.",
      "isbn": "978-1841675923",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 213,
      "stage": "KS3",
      "title": "Truth Machine",
      "ctitle": "真相機器",
      "author": "Norman Whitney",
      "publisher": "Heinemann",
      "isbn": "978-0435271763",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 214,
      "stage": "KS3",
      "title": "Tutankhamun",
      "ctitle": "圖坦卡蒙",
      "author": "Gill Harvey",
      "publisher": "Usborne Publishing\nLtd.",
      "isbn": "978-0746060179",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 215,
      "stage": "KS3",
      "title": "Unbound: A Novel in Verse",
      "ctitle": "解綁：詩體小說",
      "author": "Ann E Burg",
      "publisher": "Scholastic Press",
      "isbn": "978-0545934275",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 216,
      "stage": "KS3",
      "title": "Watch it Grow - Mouse",
      "ctitle": "看它成長 - 老鼠",
      "author": "Barrie Watts",
      "publisher": "Franklin Watts",
      "isbn": "978-0749673598",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 217,
      "stage": "KS3",
      "title": "We are the Weather Makers: The History of\nClimate Change",
      "ctitle": "我們是天氣製造者：氣候變化史",
      "author": "Sally M. Walker",
      "publisher": "Candlewick",
      "isbn": "978-0763646561",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 218,
      "stage": "KS3",
      "title": "What a Girl Wants",
      "ctitle": "女孩想要什麼",
      "author": "Karen Cooper",
      "publisher": "Scholastic",
      "isbn": "978-0439296380",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 219,
      "stage": "KS3",
      "title": "What a Mess",
      "ctitle": "真是一團糟",
      "author": "Maria Gill",
      "publisher": "CSI Literacy and Lift\nEducation",
      "isbn": "978-0077150532",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": true,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 220,
      "stage": "KS3",
      "title": "What Can You Do with an Elephant House?",
      "ctitle": "你能用大象屋做什麼？",
      "author": "Miriam Gaynor\nand Aleshia Goodwin",
      "publisher": "Learning Media",
      "isbn": "978-0478237801",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 221,
      "stage": "KS3",
      "title": "What Happens to Your Food?",
      "ctitle": "你的食物會發生什麼？",
      "author": "Alistair Smith",
      "publisher": "Usborne Publishing\nLtd.",
      "isbn": "978-0746025048",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 222,
      "stage": "KS3",
      "title": "Wheels of Change : How Women Rode the\nBicycle to Freedom (with a Few Flat Tires Along the Way)",
      "ctitle": "變革之輪：女性如何騎自行車獲得自由",
      "author": "Sue Macy",
      "publisher": "National Geographic Kids",
      "isbn": "978-1426307614",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 223,
      "stage": "KS3",
      "title": "Wonder",
      "ctitle": "奇蹟男孩",
      "author": "R. J. Palacio",
      "publisher": "Rad - Random House, Inc. (Children)",
      "isbn": "978-0375869020",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 224,
      "stage": "KS3",
      "title": "Wreck Trek",
      "ctitle": "殘骸之旅",
      "author": "Angie Belcher",
      "publisher": "Learning Media",
      "isbn": "978-0478237696",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 225,
      "stage": "KS3",
      "title": "X-Men 1",
      "ctitle": "X戰警 1",
      "author": "",
      "publisher": "Mary Glasgow\nMagazines",
      "isbn": "978-1904720683",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 226,
      "stage": "KS3",
      "title": "X-Men 2",
      "ctitle": "X戰警 2",
      "author": "",
      "publisher": "Mary Glasgow\nMagazines",
      "isbn": "978-1904720706",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 227,
      "stage": "KS3",
      "title": "X-Men 3",
      "ctitle": "X戰警 3",
      "author": "",
      "publisher": "Mary Glasgow\nMagazines",
      "isbn": "978-1904720720",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 228,
      "stage": "KS3",
      "title": "You are the Earth",
      "ctitle": "你就是地球",
      "author": "David Suzuki",
      "publisher": "Greystone Books",
      "isbn": "978-1553654766",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 229,
      "stage": "KS3",
      "title": "Your Body Battles a Broken Bone",
      "ctitle": "你的身體對抗骨折",
      "author": "Vicki Cobb",
      "publisher": "Millbrook Press/\nMinneapolis",
      "isbn": "978-0822574682",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 230,
      "stage": "KS3",
      "title": "Your Body Battles a Cavity",
      "ctitle": "你的身體對抗蛀牙",
      "author": "Vicki Cobb",
      "publisher": "Millbrook Press",
      "isbn": "978-1580138352",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 231,
      "stage": "KS3",
      "title": "Your Body Battles a Skinned Knee",
      "ctitle": "你的身體對抗擦傷膝蓋",
      "author": "Vicki Cobb",
      "publisher": "First Avenue Editions",
      "isbn": "978-1580138383",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 232,
      "stage": "KS3",
      "title": "Your Body Battles an Earache",
      "ctitle": "你的身體對抗耳痛",
      "author": "Vicki Cobb",
      "publisher": "Millbrook Press",
      "isbn": "978-1580138376",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 233,
      "stage": "KS3",
      "title": "Zargon Zoo",
      "ctitle": "扎貢動物園",
      "author": "Paul Shipton",
      "publisher": "Heinemann",
      "isbn": "978-0435277277",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 234,
      "stage": "KS4",
      "title": "50 Things You Should Know about\nthe Second World War",
      "ctitle": "你應該知道的第二次世界大戰50件事",
      "author": "Simon Adams",
      "publisher": "QED Publishing",
      "isbn": "978-1784930356",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 235,
      "stage": "KS4",
      "title": "100 Things to Know about Science",
      "ctitle": "關於科學的100件事",
      "author": "Alex Frith, Minna Lacey, Jerome Martin, Jonathan\nMelmoth",
      "publisher": "Usborne Publishing",
      "isbn": "978-1409582182",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 236,
      "stage": "KS4",
      "title": "101 Things You Wish You'd Invented and Some You Wish No\nOne Had",
      "ctitle": "101件你希望自己發明的東西和一些你希望沒人發明的東西",
      "author": "Tracey Turner & Richard Horne",
      "publisher": "Bloomsbury",
      "isbn": "978-0747591986",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": true,
        "I": true,
        "J": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 237,
      "stage": "KS4",
      "title": "A Briefer History of Time",
      "ctitle": "時間簡史（簡版）",
      "author": "Stephen Hawking &\nLeonard Mlodinow",
      "publisher": "Bantam Dell",
      "isbn": "978-0553804362",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 238,
      "stage": "KS4",
      "title": "A Short Walk around the Pyramids & through the World of Art",
      "ctitle": "金字塔周圍和藝術世界的短暫漫步",
      "author": "Philip M. Isaacson",
      "publisher": "Ember",
      "isbn": "978-0553535501",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 239,
      "stage": "KS4",
      "title": "A Visitor’s Guide to Ancient Egypt",
      "author": "Lesley Sims",
      "publisher": "Usborne\nPublishing Ltd.",
      "isbn": "978-0746030684",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 240,
      "stage": "KS4",
      "title": "Alexander The Great: The Life of a\nKing and Conqueror",
      "ctitle": "亞歷山大大帝：國王和征服者的一生",
      "author": "Rob Shone & Anita\nGaneri",
      "publisher": "Rosen Publishing",
      "isbn": "978-1404202382",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 241,
      "stage": "KS4",
      "title": "Almost Astronauts: 13 Women Who\nDared to Dream",
      "ctitle": "幾乎是宇航員：13位敢於夢想的女性",
      "author": "Tanya Lee Stone",
      "publisher": "Candlewick Press",
      "isbn": "978-0763645021",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": true,
        "F": true,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 242,
      "stage": "KS4",
      "title": "Amazing Leaders",
      "ctitle": "令人驚嘆的領導者",
      "author": "Katerina Mestheneou",
      "publisher": "HarperCollins",
      "isbn": "978-0007545070",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 243,
      "stage": "KS4",
      "title": "American Short Stories of Today",
      "ctitle": "當代美國短篇小說",
      "author": "Esmor Jones",
      "publisher": "Penguin",
      "isbn": "978-0140079975",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 244,
      "stage": "KS4",
      "title": "Ancient Chinese Technology",
      "ctitle": "古代中國技術",
      "author": "Jennifer Culp",
      "publisher": "Rosen Publishing",
      "isbn": "978-1477788998",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 245,
      "stage": "KS4",
      "title": "Ancient Greece and the Olympics: a Nonfiction Companion to Hour of the Olympics",
      "ctitle": "古希臘和奧運會：奧運時刻的非小說伴侶",
      "author": "Mary Pope Osborne",
      "publisher": "Random House",
      "isbn": "978-0375823787",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 246,
      "stage": "KS4",
      "title": "An Inconvenient Truth: The Crisis of\nGlobal Warming",
      "ctitle": "難以忽視的真相：全球暖化危機",
      "author": "Al Gore",
      "publisher": "Viking",
      "isbn": "978-0670062720",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 247,
      "stage": "KS4",
      "title": "Animal Farm",
      "ctitle": "動物農莊",
      "author": "George Orwell",
      "publisher": "Penguin",
      "isbn": "978-0141187389",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 248,
      "stage": "KS4",
      "title": "Animal Variation and Classification",
      "ctitle": "動物變異和分類",
      "author": "Richard Spilsbury",
      "publisher": "Wayland",
      "isbn": "978-0750296335",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 249,
      "stage": "KS4",
      "title": "Anneli the Art Hater",
      "ctitle": "討厭藝術的安妮莉",
      "author": "Anne Fine",
      "publisher": "Egmont",
      "isbn": "978-1405233231",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 250,
      "stage": "KS4",
      "title": "Art and Architecture of China (China: The Emerging Superpower)",
      "ctitle": "中國藝術與建築（中國：新興超級大國）",
      "author": "Sheila Hollihan- Elliot",
      "publisher": "Mason Crest",
      "isbn": "978-1422221556",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 251,
      "stage": "KS4",
      "title": "Artificial Intelligence",
      "ctitle": "人工智能",
      "author": "P. Andrew Karam",
      "publisher": "Chelsea House",
      "isbn": "978-1617530272",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 252,
      "stage": "KS4",
      "title": "Athletes and Drug Use",
      "ctitle": "運動員與藥物濫用",
      "author": "David Haugen & Susan\nMusser",
      "publisher": "Greenhaven Press",
      "isbn": "978-0737762723",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 253,
      "stage": "KS4",
      "title": "Autopsies & Bone Detectives",
      "ctitle": "解剖與骨骼偵探",
      "author": "Lorraine Jean Hopping",
      "publisher": "Ticktock Media\nLtd",
      "isbn": "978-1846963216",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 254,
      "stage": "KS4",
      "title": "Biodiversity",
      "ctitle": "生物多樣性",
      "author": "Miriam Boleyn- Fitzgerald",
      "publisher": "Facts On File, Inc.",
      "isbn": "978-0816062072",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 255,
      "stage": "KS4",
      "title": "Buddhism: A Very Short\nIntroduction",
      "ctitle": "佛教：簡短介紹",
      "author": "Damien Keown",
      "publisher": "Oxford University\nPress",
      "isbn": "978-0192853868",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 256,
      "stage": "KS4",
      "title": "Cat’s Eye",
      "ctitle": "貓眼",
      "author": "Margaret Atwood",
      "publisher": "Bloomsbury",
      "isbn": "978-0747519249",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 257,
      "stage": "KS4",
      "title": "Chasing Daylight: How My\nForthcoming Death Transformed My Life",
      "ctitle": "追逐日光：即將到來的死亡如何改變我的人生",
      "author": "Eugene O’Kelly & Andrew Postman",
      "publisher": "McGraw-Hill",
      "isbn": "978-0071471725",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 258,
      "stage": "KS4",
      "title": "Chemistry: Investigate the Matter\nthat Makes Up Your World",
      "ctitle": "化學：探索構成你世界的物質",
      "author": "Carla Mooney",
      "publisher": "Nomad Press",
      "isbn": "978-1619303614",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 259,
      "stage": "KS4",
      "title": "Chicken Pies for the Soul",
      "ctitle": "心靈雞湯",
      "author": "Jay Forman",
      "publisher": "Puffin Books",
      "isbn": "978-0141308777",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 260,
      "stage": "KS4",
      "title": "China: Land of Dragons & Emperors",
      "ctitle": "中國：龍與皇帝的土地",
      "author": "Adeline Yen Mah",
      "publisher": "Allen & Unwin Children's Books",
      "isbn": "978-1741754674",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 261,
      "stage": "KS4",
      "title": "Chinese Cinderella: The True Story\nof an Unwanted Daughter",
      "ctitle": "中國灰姑娘：一個不受歡迎女兒的真實故事",
      "author": "Adeline Yen Mah",
      "publisher": "Delacorte Press",
      "isbn": "978-0385327077",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 262,
      "stage": "KS4",
      "title": "Chinese Mythology",
      "ctitle": "中國神話",
      "author": "Michael V. Uschan",
      "publisher": "Lucent Books",
      "isbn": "978-1420511468",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 263,
      "stage": "KS4",
      "title": "Chinese Proverbs",
      "ctitle": "中國諺語",
      "author": "Ruthanne Lurn Mccunn",
      "publisher": "Chronicle Books",
      "isbn": "978-0811836838",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 264,
      "stage": "KS4",
      "title": "Chocolate: Sweet Science and Dark Secrets of the World’s Favourite\nTreat",
      "ctitle": "巧克力：甜美的科學與世界最愛美食的黑暗秘密",
      "author": "Kay Frydenborg",
      "publisher": "Houghton Mifflin Harcourt",
      "isbn": "978-0544175662",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 265,
      "stage": "KS4",
      "title": "Climate Change: A Very Short\nIntroduction",
      "ctitle": "氣候變遷：簡短介紹",
      "author": "Mark A. Maslin",
      "publisher": "Oxford University\nPress",
      "isbn": "978-0198719045",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 266,
      "stage": "KS4",
      "title": "Code Name Verity",
      "ctitle": "代號真實",
      "author": "Elizabeth Wein",
      "publisher": "Electric Monkey",
      "isbn": "978-1405258210",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 267,
      "stage": "KS4",
      "title": "Communism",
      "ctitle": "共產主義",
      "author": "Rudolph T. Heits",
      "publisher": "Mason Crest",
      "isbn": "978-1422221365",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 268,
      "stage": "KS4",
      "title": "Consumption and Waste",
      "ctitle": "消費與廢物",
      "author": "Karen E. Bledsoe",
      "publisher": "Perfection\nLearning",
      "isbn": "978-0789161215",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 269,
      "stage": "KS4",
      "title": "Cry, the Beloved Country",
      "ctitle": "哭泣吧，親愛的祖國",
      "author": "Alan Paton",
      "publisher": "Simon and\nSchuster",
      "isbn": "978-0743262170",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 270,
      "stage": "KS4",
      "title": "Democracy",
      "ctitle": "民主",
      "author": "Diane Bailey",
      "publisher": "Mason Crest",
      "isbn": "978-1422221372",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 271,
      "stage": "KS4",
      "title": "Digital Technology",
      "ctitle": "數位科技",
      "author": "Chris Woodford",
      "publisher": "Evans Brothers",
      "isbn": "978-0237527259",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 272,
      "stage": "KS4",
      "title": "DNA Analysis",
      "ctitle": "DNA分析",
      "author": "William Hunter",
      "publisher": "Mason Crest",
      "isbn": "9781-422228647",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 273,
      "stage": "KS4",
      "title": "Earthquake: Perspectives on\nEarthquake Disasters",
      "ctitle": "地震：地震災害的觀點",
      "author": "Anne Rooney",
      "publisher": "Raintree",
      "isbn": "978-1406280340",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 274,
      "stage": "KS4",
      "title": "Egg Woman’s Daughter: A Tanka\nMemoir",
      "ctitle": "雞蛋女人的女兒：短歌回憶錄",
      "author": "Mary Ma-lai Chan",
      "publisher": "Asia 2000",
      "isbn": "978-9627160533",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 275,
      "stage": "KS4",
      "title": "Eiffel’s Tower",
      "ctitle": "艾菲爾鐵塔",
      "author": "Jill Jonnes",
      "publisher": "Viking",
      "isbn": "978-0670020607",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 276,
      "stage": "KS4",
      "title": "Emotions & Eating",
      "ctitle": "情緒與飲食",
      "author": "Joan Esherick",
      "publisher": "Mason Crest",
      "isbn": "978-1422230596",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 277,
      "stage": "KS4",
      "title": "Empires, Crusaders, and Invasions through the Middle Ages",
      "ctitle": "中世紀的帝國、十字軍與入侵",
      "author": "Pliny O’Brian",
      "publisher": "Cavendish Square",
      "isbn": "978-1502606792",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 278,
      "stage": "KS4",
      "title": "Endangered & Extinct Species",
      "ctitle": "瀕危與滅絕物種",
      "author": "Cara Acred",
      "publisher": "Independence\nEducational Publishers",
      "isbn": "978-1861686756",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 279,
      "stage": "KS4",
      "title": "Entrepreneurial Smarts",
      "ctitle": "創業智慧",
      "author": "Diane Bailey",
      "publisher": "Rosen Pub",
      "isbn": "978-1448882649",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 280,
      "stage": "KS4",
      "title": "Environmental Pollution and Health",
      "ctitle": "環境污染與健康",
      "author": "Laurie Collier Hillstrom",
      "publisher": "Lucent Books",
      "isbn": "978-1420511499",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 281,
      "stage": "KS4",
      "title": "Every Building Has a History",
      "ctitle": "每棟建築都有歷史",
      "author": "Andrew Langley",
      "publisher": "Raintree",
      "isbn": "978-1406272741",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 282,
      "stage": "KS4",
      "title": "Exhausted to Energized",
      "ctitle": "從疲憊到充滿活力",
      "author": "Libby Weaver",
      "publisher": "Hay House",
      "isbn": "978-1788170727",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 283,
      "stage": "KS4",
      "title": "Extreme Sports and Their Greatest Competitors",
      "ctitle": "極限運動與其最偉大的競爭者",
      "author": "Hope Lourie Killcoyne",
      "publisher": "Britannica Educational\nPublishing",
      "isbn": "978-1622755967",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 284,
      "stage": "KS4",
      "title": "Facebook: How Mark Zuckerberg Connected More Than a Billion\nFriends",
      "ctitle": "臉書：馬克·祖克柏如何連接超過十億朋友",
      "author": "Celicia Scott",
      "publisher": "Mason Crest",
      "isbn": "978-1422231814",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": true,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 285,
      "stage": "KS4",
      "title": "Food Science",
      "ctitle": "食品科學",
      "author": "Jane Gardner",
      "publisher": "Mason Crest",
      "isbn": "978-1422234105",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 286,
      "stage": "KS4",
      "title": "Food: The New Gold",
      "ctitle": "食物：新黃金",
      "author": "Kathlyn Gay",
      "publisher": "Twenty-First\nCentury Books",
      "isbn": "978-0761346074",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 287,
      "stage": "KS4",
      "title": "Foul Trouble",
      "ctitle": "犯規麻煩",
      "author": "John Feinstein",
      "publisher": "Alfred A. Knopf",
      "isbn": "978-0375869648",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 288,
      "stage": "KS4",
      "title": "Freakonomics: A Rogue Economist Explores the Hidden Side of\nEverything",
      "ctitle": "魔鬼經濟學：一個叛逆經濟學家探索萬物的隱藏面",
      "author": "Steven D. Levitt & Stephen J. Dubner",
      "publisher": "HarperCollins",
      "isbn": "978-0061956270",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 289,
      "stage": "KS4",
      "title": "Genetically Modified Foods",
      "ctitle": "基因改造食品",
      "author": "Kevin Hillstrom",
      "publisher": "Lucent Books",
      "isbn": "978-1420507225",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 290,
      "stage": "KS4",
      "title": "Global Financial Crisis",
      "ctitle": "全球金融危機",
      "author": "Philip Steele",
      "publisher": "Crabtree Publishing\nCompany",
      "isbn": "978-0778725862",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 291,
      "stage": "KS4",
      "title": "Gods & Goddesses of Ancient China",
      "ctitle": "古代中國的神與女神",
      "author": "Trenton Campbell",
      "publisher": "Britannica Educational\nPublishing",
      "isbn": "978-1622753932",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 292,
      "stage": "KS4",
      "title": "Going Solo: The Extraordinary Rise and Surprising Appeal of Living\nAlone",
      "ctitle": "獨居：非凡的崛起與獨居生活的驚人魅力",
      "author": "Eric Klinenberg",
      "publisher": "Penguin",
      "isbn": "978-1594203220",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 293,
      "stage": "KS4",
      "title": "Great Football Stories: Football Babylon",
      "ctitle": "偉大的足球故事：足球巴比倫",
      "author": "Ruse Williams",
      "publisher": "Penguin Longman Publishing",
      "isbn": "978-0582416703",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 294,
      "stage": "KS4",
      "title": "Gunstories: Life-Changing\nExperiences with Guns",
      "ctitle": "槍的故事：改變人生的槍支經歷",
      "author": "S. Beth Atkin",
      "publisher": "Katherine Tegen\nBooks",
      "isbn": "978-0060526597",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 295,
      "stage": "KS4",
      "title": "Habitat Destruction",
      "ctitle": "棲息地破壞",
      "author": "Helen Orme",
      "publisher": "Bearport Pub",
      "isbn": "978-1597167253",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 296,
      "stage": "KS4",
      "title": "Hacking",
      "ctitle": "駭客攻擊",
      "author": "John Covaleski",
      "publisher": "ReferencePoint\nPress",
      "isbn": "978-1601522689",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 297,
      "stage": "KS4",
      "title": "Health Smarts: How to Eat Right,\nStay Fit, Make Positive Choices, and More",
      "ctitle": "健康智慧：如何正確飲食、保持健康、做出積極選擇等",
      "author": "Matt Doeden",
      "publisher": "Twenty-First\nCentury Books",
      "isbn": "978-0761370239",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 298,
      "stage": "KS4",
      "title": "Hip-Hop: Will Smith",
      "ctitle": "嘻哈：威爾·史密斯",
      "author": "Jim Corrigan",
      "publisher": "Mason Crest\nPublishers",
      "isbn": "978-1422202784",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 299,
      "stage": "KS4",
      "title": "Humble Pi: a Comedy of Maths\nErrors",
      "ctitle": "謙遜的π：數學錯誤的喜劇",
      "author": "Matt Parker",
      "publisher": "Allen Lane",
      "isbn": "978-0241360231",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 300,
      "stage": "KS4",
      "title": "Human Errors: a Panorama of Our Glitches, from Pointless Bones to\nBroken Genes",
      "ctitle": "人類錯誤：我們缺陷的全景，從無用骨骼到破損基因",
      "author": "Nathan Lents",
      "publisher": "Weidenfeld & Nicolson",
      "isbn": "978-1474608343",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 301,
      "stage": "KS4",
      "title": "Human Genetics",
      "ctitle": "人類遺傳學",
      "author": "Louise I. Gerdes",
      "publisher": "Greenhaven Press",
      "isbn": "978-0737769531",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 302,
      "stage": "KS4",
      "title": "I Love, I Hate, I Miss My Sister",
      "ctitle": "我愛、我恨、我想念我的妹妹",
      "author": "Amelie Sarn",
      "publisher": "Delacorte Press",
      "isbn": "978-0385743761",
      "modules": {
        "A": true,
        "B": true,
        "C": true,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 303,
      "stage": "KS4",
      "title": "Inferno",
      "ctitle": "地獄",
      "author": "Dan Brown",
      "publisher": "Random House",
      "isbn": "978-0804171540",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 304,
      "stage": "KS4",
      "title": "Inflation: What It Is and How It\nWorks",
      "ctitle": "通貨膨脹：它是什麼以及如何運作",
      "author": "Lisa A. Crayton & Joyce\nHart",
      "publisher": "Enslow\nPublishing",
      "isbn": "978-0766072480",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 305,
      "stage": "KS4",
      "title": "Inventors of Everyday Technology",
      "ctitle": "日常科技的發明家",
      "author": "Heather S. Morrison",
      "publisher": "Cavendish Square",
      "isbn": "978-1502606600",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 306,
      "stage": "KS4",
      "title": "I, Robot",
      "ctitle": "我，機器人",
      "author": "Isaac Asimov, retold by\nTricia Reilly",
      "publisher": "HarperCollins",
      "isbn": "978-0007532278",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 307,
      "stage": "KS4",
      "title": "Isaac Newton and the Scientific\nRevolution",
      "ctitle": "艾薩克·牛頓與科學革命",
      "author": "Gale E. Christianson",
      "publisher": "Oxford University\nPress",
      "isbn": "978-0195092240",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 308,
      "stage": "KS4",
      "title": "Julius Caesar: The Life of a Roman\nGeneral",
      "ctitle": "凱撒大帝：羅馬將軍的一生",
      "author": "Gary Jeffrey & Kate Petty",
      "publisher": "Rosen Publishing",
      "isbn": "978-1404202399",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 309,
      "stage": "KS4",
      "title": "Lab Girl",
      "ctitle": "實驗室女孩",
      "author": "Hope Jahren",
      "publisher": "Alfred A Knopf",
      "isbn": "978-1101874936",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 310,
      "stage": "KS4",
      "title": "Last of the Giants: The Rise and Fall of Earth’s Most Dominant Species",
      "ctitle": "最後的巨人：地球最優勢物種的興衰",
      "author": "Jeff Campbell",
      "publisher": "Zest Books",
      "isbn": "978-1942186045",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 311,
      "stage": "KS4",
      "title": "Making Money Work: The Teens’\nGuide to Saving, Investing, and Building Wealth",
      "ctitle": "讓金錢發揮作用：青少年儲蓄、投資與建立財富指南",
      "author": "Kara McGuire",
      "publisher": "Compass Point Books",
      "isbn": "978-0756549220",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 312,
      "stage": "KS4",
      "title": "Maniac Magee",
      "ctitle": "瘋狂的馬吉",
      "author": "Jerry Spinelli",
      "publisher": "Little, Brown and\nCompany",
      "isbn": "978-0316809061",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 313,
      "stage": "KS4",
      "title": "Marco Polo: Epic Traveler\nthroughout Asia",
      "ctitle": "馬可·波羅：穿越亞洲的史詩旅行者",
      "author": "Jason Porterfield",
      "publisher": "Rosen Publishing",
      "isbn": "978-1508171522",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 314,
      "stage": "KS4",
      "title": "Marine Biologists",
      "ctitle": "海洋生物學家",
      "author": "K. C. Kelley",
      "publisher": "Mason Crest",
      "isbn": "978-1422234259",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 315,
      "stage": "KS4",
      "title": "Media: From News Coverage to\nPolitical Advertising",
      "ctitle": "媒體：從新聞報導到政治廣告",
      "author": "Sandy Donovan",
      "publisher": "Lerner\nPublications",
      "isbn": "978-1467779098",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 316,
      "stage": "KS4",
      "title": "Methane Energy",
      "ctitle": "甲烷能源",
      "author": "Courtney Farrell",
      "publisher": "ABDO Pub. Co.",
      "isbn": "978-1617834653",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 317,
      "stage": "KS4",
      "title": "Movers",
      "ctitle": "搬運工",
      "author": "Meaghan McIsaac",
      "publisher": "Andersen Press",
      "isbn": "978-1783443796",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 318,
      "stage": "KS4",
      "title": "My Life with the Chimpanzees",
      "ctitle": "我與黑猩猩的生活",
      "author": "Jane Goodall",
      "publisher": "Aladdin",
      "isbn": "978-0671562717",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 319,
      "stage": "KS4",
      "title": "My Sister’s Keeper",
      "ctitle": "我姐姐的守護者",
      "author": "Jodi Picoult",
      "publisher": "Atria",
      "isbn": "978-1444754346",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 320,
      "stage": "KS4",
      "title": "New Europe",
      "ctitle": "新歐洲",
      "author": "Michael Palin",
      "publisher": "Weidenfeld and\nNicolson",
      "isbn": "978-0753823972",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 321,
      "stage": "KS4",
      "title": "Oil Spills",
      "ctitle": "石油洩漏",
      "author": "Tamara Thompson",
      "publisher": "Greenhaven Press",
      "isbn": "978-0737768817",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 322,
      "stage": "KS4",
      "title": "On Tyranny: Twenty Lessons from\nthe Twentieth Century",
      "ctitle": "論暴政：二十世紀的二十個教訓",
      "author": "Timothy Snyder",
      "publisher": "Tim Duggan\nBooks",
      "isbn": "978-0804190114",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 323,
      "stage": "KS4",
      "title": "Online Privacy and the Law",
      "ctitle": "網路隱私與法律",
      "author": "Anastasia Suen",
      "publisher": "Rosen Pub.",
      "isbn": "978-1448883608",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": true,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 324,
      "stage": "KS4",
      "title": "Orientalism",
      "ctitle": "東方主義",
      "author": "Edward W. Said",
      "publisher": "Penguin",
      "isbn": "978-0141187426",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 325,
      "stage": "KS4",
      "title": "Origin",
      "ctitle": "起源",
      "author": "Dan Brown",
      "publisher": "Doubleday Books",
      "isbn": "978-0385514231",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 326,
      "stage": "KS4",
      "title": "Our World of Wonders",
      "ctitle": "我們的奇蹟世界",
      "author": "Yanitzia Canetti",
      "publisher": "Steck-Vaughn",
      "isbn": "978-0739808870",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 327,
      "stage": "KS4",
      "title": "Pioneers of the Green Movement:\nEnvironmental Solutions",
      "ctitle": "綠色運動的先驅：環境解決方案",
      "author": "Michael Anderson",
      "publisher": "Britannica\nEducational Pub",
      "isbn": "978-1615306985",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 328,
      "stage": "KS4",
      "title": "Pole to Pole",
      "ctitle": "從極地到極地",
      "author": "Michale Palin",
      "publisher": "Weidenfeld and\nNicolson",
      "isbn": "978-0563521983",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 329,
      "stage": "KS4",
      "title": "Powering Up a Career in Robotics",
      "ctitle": "啟動機器人學職業生涯",
      "author": "Peter Ryan",
      "publisher": "Rosen Publishing",
      "isbn": "978-1499460858",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 330,
      "stage": "KS4",
      "title": "Prisoners of Geography: Ten Maps That Tell You Everything You Need to Know about Global Politics",
      "ctitle": "地理的囚徒：十張地圖告訴你全球政治所需知道的一切",
      "author": "Tim Marshall",
      "publisher": "Elliott & Thompson Limited",
      "isbn": "978-1783961412",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 331,
      "stage": "KS4",
      "title": "Renewable: The World-Changing\nPower of Alternative Energy",
      "ctitle": "可再生能源：改變世界的替代能源力量",
      "author": "Jeremy Shere",
      "publisher": "St. Martin’s Press",
      "isbn": "978-0312643751",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 332,
      "stage": "KS4",
      "title": "Rowing, Sailing, and Other Sports on\nWater",
      "ctitle": "划船、帆船與其他水上運動",
      "author": "Jason Page",
      "publisher": "Crabtree",
      "isbn": "978-0778740179",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 333,
      "stage": "KS4",
      "title": "Sapiens: A Brief History of\nHumankind",
      "ctitle": "人類大歷史：從野獸到扮演上帝",
      "author": "Yuval N. Harari",
      "publisher": "Vintage",
      "isbn": "978-0099590088",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 334,
      "stage": "KS4",
      "title": "Saving Private Ryan",
      "ctitle": "搶救雷恩大兵",
      "author": "Max Allan, retold by\nJacqueline Kehl",
      "publisher": "Penguin",
      "isbn": "978-1405882712",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 335,
      "stage": "KS4",
      "title": "Scientists Who Made History - Dian\nFossey",
      "ctitle": "創造歷史的科學家：黛安·佛西",
      "author": "Liz Gogerly",
      "publisher": "Wayland",
      "isbn": "978-0750284769",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 336,
      "stage": "KS4",
      "title": "Serendipity’s Footsteps",
      "ctitle": "意外發現的腳步",
      "author": "Suzanne Nelson",
      "publisher": "Alfred A. Knopf",
      "isbn": "978-0385392129",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 337,
      "stage": "KS4",
      "title": "She Takes a Stand: 16 Fearless Activists Who Have Changed the\nWorld",
      "ctitle": "她挺身而出：改變世界的十六位無畏活動家",
      "author": "Michael Elsohn Ross",
      "publisher": "Chicago Review Press",
      "isbn": "978-1613730263",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 338,
      "stage": "KS4",
      "title": "Snow Falling on Cedars",
      "ctitle": "雪落香杉樹",
      "author": "David Guterson, retold by\nChristopher Tribble",
      "publisher": "Pearson\nEducation",
      "isbn": "978-1405882736",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 339,
      "stage": "KS4",
      "title": "Starting a Business: Creating a Plan",
      "ctitle": "創業：制定計劃",
      "author": "James Fischer",
      "publisher": "Mason Crest",
      "isbn": "978-1422229200",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 340,
      "stage": "KS4",
      "title": "Steve Jobs: The Man Who Thought\nDifferent",
      "ctitle": "史蒂夫·賈伯斯：不同凡想的人",
      "author": "Karen Blumenthal",
      "publisher": "Bloomsbury",
      "isbn": "978-1408832066",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 341,
      "stage": "KS4",
      "title": "Stiff: The Curious Lives of Human\nCadavers",
      "ctitle": "僵硬：人類屍體的奇異生活",
      "author": "Mary Roach",
      "publisher": "W. W. Norton &\nCompany",
      "isbn": "978-0393050936",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 342,
      "stage": "KS4",
      "title": "The Book Thief",
      "ctitle": "偷書賊",
      "author": "Markus Zusak",
      "publisher": "Alfred A. Knopf",
      "isbn": "978-0375842207",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 343,
      "stage": "KS4",
      "title": "The Boy in the Striped Pyjamas",
      "ctitle": "穿條紋睡衣的男孩",
      "author": "John Boyne",
      "publisher": "Vintage",
      "isbn": "978-0099572862",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 344,
      "stage": "KS4",
      "title": "The Cartoon Introduction to\nStatistics",
      "ctitle": "統計學漫畫入門",
      "author": "Grady Klein & Alan\nDabney",
      "publisher": "Hill & Wang",
      "isbn": "978-0809033591",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 345,
      "stage": "KS4",
      "title": "The Cipher",
      "ctitle": "密碼",
      "author": "John Ford",
      "publisher": "Viking",
      "isbn": "978-0670015429",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": true,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 346,
      "stage": "KS4",
      "title": "The Craftsman",
      "ctitle": "工匠",
      "author": "Richard Sennett",
      "publisher": "Penguin",
      "isbn": "978-0141022093",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 347,
      "stage": "KS4",
      "title": "The Double Helix Structure of DNA:\nJames Watson, Francis Crick, Maurice Wilkins, and Rosalind Franklin",
      "ctitle": "DNA雙螺旋結構：詹姆斯·華生、法蘭西斯·克里克、莫里斯·威爾金斯與羅莎琳·富蘭克林",
      "author": "R.N. Albright",
      "publisher": "Rosen Publishing\nGroup, Inc.",
      "isbn": "978-1477718094",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 348,
      "stage": "KS4",
      "title": "The Enemy",
      "ctitle": "敵人",
      "author": "Desmond Bagley, retold\nby Ralph Mowat",
      "publisher": "Oxford University\nPress",
      "isbn": "978-0194792608",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 349,
      "stage": "KS4",
      "title": "The Ethics of Sports: A Reader",
      "ctitle": "運動倫理：讀本",
      "author": "Mike J. McNamee",
      "publisher": "Routledge",
      "isbn": "978-0415478618",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 350,
      "stage": "KS4",
      "title": "The Eye of Minds",
      "ctitle": "心靈之眼",
      "author": "James Dashner",
      "publisher": "Ember",
      "isbn": "978-0385741408",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": true,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 351,
      "stage": "KS4",
      "title": "The Freedom Maze",
      "ctitle": "自由迷宮",
      "author": "Delia Sherman",
      "publisher": "Candlewick Press",
      "isbn": "978-0763669751",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 352,
      "stage": "KS4",
      "title": "The Girl You Left Behind",
      "ctitle": "你留下的女孩",
      "author": "Jojo Moyes",
      "publisher": "Penguin Books",
      "isbn": "978-0718157845",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 353,
      "stage": "KS4",
      "title": "The Great War: Stories Inspired by Items from the First World War",
      "ctitle": "大戰：受第一次世界大戰物品啟發的故事",
      "author": "David Almond",
      "publisher": "Walker Books",
      "isbn": "978-1406353778",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 354,
      "stage": "KS4",
      "title": "The Growth of a Superpower:\nAmerica from 1945 to Today",
      "ctitle": "超級大國的成長：從1945年到今天的美國",
      "author": "Jeffrey H. Wallenfeldt",
      "publisher": "Britannica\nEducational Pub",
      "isbn": "978-1615306992",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 355,
      "stage": "KS4",
      "title": "The Hidden Life of Trees: What They Feel, How They Communicate: Discoveries from a Secret World",
      "ctitle": "樹的秘密生命：它們的感受、溝通方式與秘密世界的發現",
      "author": "Peter Wohllenben",
      "publisher": "Greystone Books",
      "isbn": "978-1771642484",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 356,
      "stage": "KS4",
      "title": "The Illustrated Timeline of Medicine",
      "ctitle": "醫學圖解時間軸",
      "author": "Gill Davies",
      "publisher": "Rosen Pub",
      "isbn": "978-1448847969",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 357,
      "stage": "KS4",
      "title": "The Impact of Technology in Sports",
      "ctitle": "科技在運動中的影響",
      "author": "Matthew Anniss",
      "publisher": "Heinemann\nRaintree",
      "isbn": "978-1484626368",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 358,
      "stage": "KS4",
      "title": "The Kite Runner",
      "ctitle": "追風箏的孩子",
      "author": "Khaled Hesseini",
      "publisher": "Riverhead Books",
      "isbn": "978-1573222457",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 359,
      "stage": "KS4",
      "title": "The Lean Startup: How Constant Innovation Creates Radically\nSuccessful Businesses",
      "ctitle": "精實創業：持續創新如何創造根本性成功企業",
      "author": "Eric Ries",
      "publisher": "Portfolio Penguin",
      "isbn": "978-0670921607",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 360,
      "stage": "KS4",
      "title": "The Magic of Reality: How We\nKnow What's Really True",
      "ctitle": "現實的魔法：我們如何知道什麼是真的",
      "author": "Richard Dawkins",
      "publisher": "Free Press",
      "isbn": "978-1439192818",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 361,
      "stage": "KS4",
      "title": "The Manhattan Project: A Secret\nWartime Mission",
      "ctitle": "曼哈頓計劃：秘密戰時任務",
      "author": "Kenneth M. Deitch",
      "publisher": "History Compass",
      "isbn": "978-1878668417",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 363,
      "stage": "KS4",
      "title": "The Pig That Wants to be Eaten: 100\nExperiments for the Armchair Philosopher",
      "ctitle": "想被吃掉的豬：給扶手椅哲學家的一百個實驗",
      "author": "Julian Baggini",
      "publisher": "Plume",
      "isbn": "978-0452287440",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 364,
      "stage": "KS4",
      "title": "The Power of Habit: Why We Do What We Do in Life and Business",
      "ctitle": "習慣的力量：我們在生活和商業中為什麼這樣做",
      "author": "Charles Duhigg",
      "publisher": "Random House",
      "isbn": "978-1400069286",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 365,
      "stage": "KS4",
      "title": "The Rule of Three",
      "ctitle": "三的法則",
      "author": "Eric Walters",
      "publisher": "Farrar Straus\nGiroux",
      "isbn": "978-0374355029",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": true,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 366,
      "stage": "KS4",
      "title": "The Story of Mankind",
      "ctitle": "人類的故事",
      "author": "Hendrik Willem Van\nLoon",
      "publisher": "Liveright",
      "isbn": "978-0871401564",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": true,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 367,
      "stage": "KS4",
      "title": "The Teenage Guide to Stress",
      "ctitle": "青少年壓力指南",
      "author": "Nicola Morgan",
      "publisher": "Walker Books",
      "isbn": "978-1406353143",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": true,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 368,
      "stage": "KS4",
      "title": "The Tipping Point: How Little\nThings Can Make a Big Difference",
      "ctitle": "引爆點：小事情如何造成大差異",
      "author": "Malcolm Gladwell",
      "publisher": "Little, Brown and\nCompany",
      "isbn": "978-0316316965",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 369,
      "stage": "KS4",
      "title": "The Weather Makers: How Man Is\nChanging the Climate and What It Means for Life on Earth",
      "ctitle": "天氣製造者：人類如何改變氣候及其對地球生命的意義",
      "author": "Tim Flannery",
      "publisher": "Atlantic Monethly\nPress",
      "isbn": "978-0871139351",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 370,
      "stage": "KS4",
      "title": "Things My Mother Never Told Me",
      "ctitle": "我母親從未告訴我的事",
      "author": "Blake Morrison",
      "publisher": "Vintage",
      "isbn": "978-0099440727",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 371,
      "stage": "KS4",
      "title": "Thinking Critically: Cyberbullying",
      "ctitle": "批判性思考：網路霸凌",
      "author": "Stephen Currie",
      "publisher": "ReferencePoint\nPress",
      "isbn": "978-1601528209",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true,
        "G": true,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 372,
      "stage": "KS4",
      "title": "This Changes Everything",
      "ctitle": "這改變一切",
      "author": "Naomi Klein",
      "publisher": "Simon and\nSchuster",
      "isbn": "978-1451697384",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 373,
      "stage": "KS4",
      "title": "Tumbling",
      "ctitle": "翻滾",
      "author": "Caela Carter",
      "publisher": "Viking",
      "isbn": "978-0451473004",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 374,
      "stage": "KS4",
      "title": "Up from the Sea",
      "ctitle": "從海中升起",
      "author": "Leza Lowitz",
      "publisher": "Crown",
      "isbn": "978-0553534740",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 375,
      "stage": "KS4",
      "title": "Urban Sprawl",
      "ctitle": "城市擴張",
      "author": "Noel Merino",
      "publisher": "Greenhaven Press",
      "isbn": "978-0737762488",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": true,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 376,
      "stage": "KS4",
      "title": "Vincent Van Gogh: Portrait of an\nArtist",
      "ctitle": "文森特·梵高：藝術家肖像",
      "author": "Jan Greenberg & Sandra\nJordan",
      "publisher": "Delacorte Press",
      "isbn": "978-0385328067",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 377,
      "stage": "KS4",
      "title": "Waves: Principles of Light,\nElectricity and Magnetism",
      "ctitle": "波動：光、電和磁的原理",
      "author": "Paul Fleisher",
      "publisher": "Lerner Publishing",
      "isbn": "978-0822529873",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": true,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 378,
      "stage": "KS4",
      "title": "Who Moved My Cheese",
      "ctitle": "誰搬走了我的乳酪",
      "author": "Spencer Johnson",
      "publisher": "Vermilion",
      "isbn": "978-0091816971",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 379,
      "stage": "KS4",
      "title": "Why Am I Afraid to Tell You Who I\nAm?",
      "ctitle": "為什麼我害怕告訴你我是誰？",
      "author": "John Joseph Powell",
      "publisher": "RCL",
      "isbn": "978-0883473238",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 380,
      "stage": "KS4",
      "title": "Women Heroes of World War I: 16 Remarkable Resisters, Soldiers,\nSpies, and Medics",
      "ctitle": "第一次世界大戰的女性英雄：16位傑出的抵抗者、士兵、間諜和醫護人員",
      "author": "Kathryn Atwood",
      "publisher": "Chicago Review Press",
      "isbn": "978-1613735954",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 381,
      "stage": "KS4",
      "title": "Woo’s Wonderful World of Maths",
      "ctitle": "胡的奇妙數學世界",
      "author": "Eddie Woo",
      "publisher": "Macmillan\nAustralia",
      "isbn": "978-1760554217",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": true,
        "J": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 382,
      "stage": "KS4",
      "title": "World Economy Explained: Stocks\nand Shares",
      "ctitle": "世界經濟解析：股票與股份",
      "author": "Sean Connolly",
      "publisher": "Franklin Watts",
      "isbn": "978-1445100418",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 383,
      "stage": "KS4",
      "title": "World War I: Frontline Soldiers and\nTheir Families",
      "ctitle": "第一次世界大戰：前線士兵與他們的家人",
      "author": "Nick Hunter",
      "publisher": "Gareth Stevens\nPublishing",
      "isbn": "978-1482430653",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true,
        "G": false,
        "H": false,
        "I": false,
        "J": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 384,
      "stage": "KS4",
      "title": "Your Physical Body: From Birth to\nOld Age",
      "ctitle": "你的身體：從出生到老年",
      "author": "Anne Rooney",
      "publisher": "Raintree",
      "isbn": "978-1406250275",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false,
        "G": false,
        "H": false,
        "I": false,
        "J": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 385,
      "stage": "KS2",
      "title": "101 Ways to Save the Planet",
      "ctitle": "拯救地球的101種方法",
      "author": "Deborah Underwood",
      "publisher": "Raintree",
      "isbn": "978-1-410-94385-9",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 386,
      "stage": "KS2",
      "title": "50 STEM Labs Journal",
      "ctitle": "50個STEM實驗室日記",
      "author": "Andrew Frinkle",
      "publisher": "Createspace",
      "isbn": "9781514863237",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 387,
      "stage": "KS2",
      "title": "(True or False) Farm Animals",
      "ctitle": "（對或錯）農場動物",
      "author": "Melvin & Gilda Berger",
      "publisher": "Scholastic",
      "isbn": "978-0-545-00394-0",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 388,
      "stage": "KS2",
      "title": "A Chair for My Mother",
      "ctitle": "給媽媽的椅子",
      "author": "Vera B. Williams",
      "publisher": "Greenwillow Books",
      "isbn": "978-0688040741",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 389,
      "stage": "KS2",
      "title": "A Day in London",
      "ctitle": "倫敦的一天",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0198483359",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 390,
      "stage": "KS2",
      "title": "A Friend in Need",
      "ctitle": "需要幫助的朋友",
      "author": "Carol Jones",
      "publisher": "Sundance Newbridge",
      "isbn": "978-0760849774",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 391,
      "stage": "KS2",
      "title": "A Hong Kong ABC Featuring Christopher & the Cat",
      "ctitle": "香港ABC：克里斯托弗與貓咪",
      "author": "Jacqui Taylor",
      "publisher": "Printline",
      "isbn": "978-9628501113",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 392,
      "stage": "KS2",
      "title": "A Joke for Every Day of the Year",
      "ctitle": "一年365天的笑話",
      "author": "Sandy Ransford",
      "publisher": "Macmillan Children's Books",
      "isbn": "978-0330483513",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 393,
      "stage": "KS2",
      "title": "A Look at Dogs",
      "ctitle": "看看狗狗",
      "author": "Monica Halpern",
      "publisher": "Steck Vaughn",
      "isbn": "978-0817272753",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 394,
      "stage": "KS2",
      "title": "A Scary Story Night",
      "ctitle": "恐怖故事之夜",
      "author": "Rob Lewis",
      "publisher": "Prentice Hall",
      "isbn": "978-0134380117",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 395,
      "stage": "KS2",
      "title": "A Story, A Story",
      "ctitle": "一個故事，一個故事",
      "author": "Gail E. Haley",
      "publisher": "Aladdin",
      "isbn": "978-0-689-71201-2",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 396,
      "stage": "KS2",
      "title": "After the Fall (How Humpty Dumpty Got Back Up Again)",
      "ctitle": "跌倒之後（蛋頭先生如何重新站起來）",
      "author": "Dan Santat",
      "publisher": "Roaring Brook Press",
      "isbn": "9781626726826",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 397,
      "stage": "KS2",
      "title": "Airline Pilot",
      "ctitle": "航空公司飛行員",
      "author": "Leonie Bennett",
      "publisher": "Ticktock Entertainment Ltd.",
      "isbn": "978-1860079962",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 398,
      "stage": "KS2",
      "title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
      "ctitle": "亞歷山大和糟糕、可怕、不好、非常糟糕的一天",
      "author": "Judith Viorst",
      "publisher": "Atheneum Books for Young Readers",
      "isbn": "978-0689711732",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 399,
      "stage": "KS2",
      "title": "Aliens Love Underpants",
      "ctitle": "外星人愛內褲",
      "author": "Claire Freedman and Ben Cort",
      "publisher": "Simon & Schuster",
      "isbn": "978-1-416-91705-2",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 400,
      "stage": "KS2",
      "title": "All about Owls",
      "ctitle": "關於貓頭鷹的一切",
      "author": "Jim Arnosky",
      "publisher": "Scholastic",
      "isbn": "978-0439058520",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 401,
      "stage": "KS2",
      "title": "Animals in Danger",
      "ctitle": "瀕危動物",
      "author": "Anne Faundez",
      "publisher": "Teacher Created Resources",
      "isbn": "978-1420681482",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 402,
      "stage": "KS2",
      "title": "Antarctic Antics",
      "ctitle": "南極趣事",
      "author": "Judy Sierra",
      "publisher": "HMH Books",
      "isbn": "978-0152046026",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 403,
      "stage": "KS2",
      "title": "Around the World: Clothes",
      "ctitle": "環遊世界：服裝",
      "author": "Godfrey Hall",
      "publisher": "Hodder Wayland",
      "isbn": "978-0750225588",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 404,
      "stage": "KS2",
      "title": "Arts and Crafts Skills: Painting",
      "ctitle": "藝術與手工技能：繪畫",
      "author": "Jane Bower",
      "publisher": "Children's Press",
      "isbn": "978-0516262147",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 405,
      "stage": "KS2",
      "title": "Arts and Crafts Skills: Printing",
      "ctitle": "藝術與手工技能：印刷",
      "author": "Susan Niner Janes",
      "publisher": "Children's Press",
      "isbn": "978-0516204581",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 406,
      "stage": "KS2",
      "title": "At Home with Science: Splish! Splosh! Why Do We Wash?",
      "ctitle": "家庭科學：嘩啦！嘩啦！我們為什麼要洗澡？",
      "author": "Janice Lobb",
      "publisher": "Kingfisher",
      "isbn": "978-0753404263",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 407,
      "stage": "KS2",
      "title": "Basher Science: Technology: A byte-sized world!",
      "ctitle": "巴舍科學：科技：一個位元大小的世界！",
      "author": "Dan Green, Simon Basher",
      "publisher": "Kingfisher",
      "isbn": "9780753468203",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 408,
      "stage": "KS2",
      "title": "Basher Science: Engineering : Machines and Buildings",
      "ctitle": "巴舍科學：工程：機器與建築",
      "author": "Tom Jackson, Mary Budzik",
      "publisher": "Kingfisher",
      "isbn": "9780753439906",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 409,
      "stage": "KS2",
      "title": "Bears Can't Fly",
      "ctitle": "熊不會飛",
      "author": "Val Biro",
      "publisher": "Ladybird",
      "isbn": "978-0721496634",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 410,
      "stage": "KS2",
      "title": "Bedtime Math: A Fun Excuse to Stay Up Late",
      "ctitle": "睡前數學：熬夜的有趣藉口",
      "author": "Laura Overdeck",
      "publisher": "FEIWEL & FRIENDS",
      "isbn": "9781250035851",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 411,
      "stage": "KS2",
      "title": "Bella and Gertie",
      "ctitle": "貝拉和格蒂",
      "author": "Geraldine Taylor",
      "publisher": "Ladybird",
      "isbn": "978-0721496504",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 412,
      "stage": "KS2",
      "title": "Berenstain Bears and the Bad Dream",
      "ctitle": "貝倫斯坦熊和噩夢",
      "author": "Stan & Jan Berenstain",
      "publisher": "Random House",
      "isbn": "978-0394873411",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 413,
      "stage": "KS2",
      "title": "Bridges",
      "ctitle": "橋樑",
      "author": "Rebecca Pettiford",
      "publisher": "Pogo",
      "isbn": "978-1620312117",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 414,
      "stage": "KS2",
      "title": "Bridges Are to Cross",
      "ctitle": "橋樑是用來跨越的",
      "author": "Philemon Sturges",
      "publisher": "Puffin",
      "isbn": "978-0698118744",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 415,
      "stage": "KS2",
      "title": "Bubbles",
      "ctitle": "泡泡",
      "author": "Phil Gates",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521564595",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 416,
      "stage": "KS2",
      "title": "Build a Room Alarm: and 16 More Electrifying Projects",
      "ctitle": "建造房間警報器：以及16個更多令人興奮的項目",
      "author": "Sandra Markle",
      "publisher": "Scholastic",
      "isbn": "978-0-439-44432-3",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 417,
      "stage": "KS2",
      "title": "Building Our House",
      "ctitle": "建造我們的房子",
      "author": "Jonathan Bean",
      "publisher": "Farrar, Straus and Giroux",
      "isbn": "978-0374380236",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 418,
      "stage": "KS2",
      "title": "Butterflies",
      "ctitle": "蝴蝶",
      "author": "Darlene Freeman",
      "publisher": "McClanahan Book Company",
      "isbn": "978-0768101317",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 419,
      "stage": "KS2",
      "title": "Butterflies",
      "ctitle": "蝴蝶",
      "author": "Gallimard Jeunesse",
      "publisher": "Scholastic",
      "isbn": "978-0590937818",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 420,
      "stage": "KS2",
      "title": "Cassie Loves a Parade",
      "ctitle": "卡西愛遊行",
      "author": "Irene Trimble",
      "publisher": "Random House",
      "isbn": "978-0375805479",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 421,
      "stage": "KS2",
      "title": "Castle Adventure",
      "ctitle": "城堡冒險",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0198482475",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 422,
      "stage": "KS2",
      "title": "Celebrate Chinese New Year with the Fong Family",
      "ctitle": "與方家慶祝中國新年",
      "author": "Alma Flor Ada and F. Isabel Campoy",
      "publisher": "Alfaguara Infantil",
      "isbn": "978-1598201260",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 423,
      "stage": "KS2",
      "title": "Celebrating Chinese Festivals: a Collection of Holiday Tales, Poems and Activities",
      "ctitle": "慶祝中國節日：節日故事、詩歌和活動集",
      "author": "Sanmu Tang",
      "publisher": "Better Link Press",
      "isbn": "9781602209619",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 424,
      "stage": "KS2",
      "title": "Charlie and the Chocolate Factory",
      "ctitle": "查理和巧克力工廠",
      "author": "Roald Dahl",
      "publisher": "Pearson Longman",
      "isbn": "978-1447931362",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 425,
      "stage": "KS2",
      "title": "Charlotte’s Web",
      "ctitle": "夏綠蒂的網",
      "author": "E.B. White",
      "publisher": "HarperCollins",
      "isbn": "978-0064400558",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 426,
      "stage": "KS2",
      "title": "Chester's Way",
      "ctitle": "切斯特的方式",
      "author": "Kevin Henkes",
      "publisher": "Greenwillow Books",
      "isbn": "978-0688154721",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 427,
      "stage": "KS2",
      "title": "China's Bravest Girl (Legend of Mu'lan)",
      "ctitle": "中國最勇敢的女孩（木蘭傳奇）",
      "author": "Retold by Charlie Chin",
      "publisher": "Children's Book Press",
      "isbn": "978-0-892-39148-6",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 428,
      "stage": "KS2",
      "title": "Chinese Culture for Kids",
      "ctitle": "兒童中國文化",
      "author": "Anna-Sieglinde Moser",
      "publisher": "Henri Vetch (Hong Kong) Ltd",
      "isbn": "978-9628548217",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 429,
      "stage": "KS2",
      "title": "Chopsticks",
      "ctitle": "筷子",
      "author": "Jon Berkeley",
      "publisher": "Random House",
      "isbn": "978-0375833090",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 430,
      "stage": "KS2",
      "title": "Chrysanthemum",
      "ctitle": "菊花",
      "author": "Kevin Henkes",
      "publisher": "Mulberry Books",
      "isbn": "978-0-688-14732-7",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 431,
      "stage": "KS2",
      "title": "Clothes and Fashion: Then and Now",
      "ctitle": "服裝與時尚：過去與現在",
      "author": "Alastair Smith",
      "publisher": "Usborne Publishing",
      "isbn": "978-0746030981",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 432,
      "stage": "KS2",
      "title": "Crazy Mayonnaisy Mum",
      "ctitle": "瘋狂的蛋黃醬媽媽",
      "author": "Julia Donaldson",
      "publisher": "Pan Macmillan",
      "isbn": "978-1447293224",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 433,
      "stage": "KS2",
      "title": "Curious George Goes to the Hospital",
      "ctitle": "好奇的喬治去醫院",
      "author": "H. A. Rey",
      "publisher": "HMH Books",
      "isbn": "978-0395070628",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 434,
      "stage": "KS2",
      "title": "Dear Greenpeace",
      "ctitle": "親愛的綠色和平",
      "author": "Simon James",
      "publisher": "Walker Books",
      "isbn": "978-0744530605",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 435,
      "stage": "KS2",
      "title": "Diary of a Wimpy Kid",
      "ctitle": "遜咖日記",
      "author": "Jeff Kinney",
      "publisher": "Amulet Books",
      "isbn": "978-0810993136",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 436,
      "stage": "KS2",
      "title": "Dinosaur Explorer",
      "ctitle": "恐龍探險家",
      "author": "Dougal Dixon",
      "publisher": "QEB Publishing",
      "isbn": "978-1609926953",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 437,
      "stage": "KS2",
      "title": "Discovering Nature: The Farm",
      "ctitle": "發現自然：農場",
      "author": "Isidro Sanchez & Carme Peris",
      "publisher": "Barron's Juveniles",
      "isbn": "978-0812047110",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 438,
      "stage": "KS2",
      "title": "Do the Doors Open by Magic?",
      "ctitle": "門是用魔法打開的嗎？",
      "author": "Catherine Ripley",
      "publisher": "Oxford University Press",
      "isbn": "978-0199104628",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 439,
      "stage": "KS2",
      "title": "Don't Talk to Strangers, Pooh!",
      "ctitle": "不要和陌生人說話，小熊維尼！",
      "author": "Kathleen Zoehfeld",
      "publisher": "Disney Press",
      "isbn": "978-0786843787",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 440,
      "stage": "KS2",
      "title": "Dreamers",
      "ctitle": "夢想家",
      "author": "Yuyi Morales",
      "publisher": "Neal Porter Books",
      "isbn": "978-0823440559",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 441,
      "stage": "KS2",
      "title": "Duck for President",
      "ctitle": "鴨子競選總統",
      "author": "Doreen Cronin",
      "publisher": "Scholastic",
      "isbn": "978-0439671446",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 442,
      "stage": "KS2",
      "title": "Elmer and the Lost Teddy",
      "ctitle": "艾瑪和丟失的泰迪熊",
      "author": "David McKee",
      "publisher": "Andersen",
      "isbn": "978-1842707494",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 443,
      "stage": "KS2",
      "title": "Elmer Blunt's Open House",
      "ctitle": "艾爾默·布倫特的開放日",
      "author": "Matt Novak",
      "publisher": "Scholastic",
      "isbn": "978-0531070741",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 444,
      "stage": "KS2",
      "title": "Fairytale News",
      "ctitle": "童話新聞",
      "author": "Colin Hawkins and Jacqui Hawkins",
      "publisher": "Walker Books Ltd.",
      "isbn": "978-1844285310",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 445,
      "stage": "KS2",
      "title": "Famous Children: Michelangelo",
      "ctitle": "著名兒童：米開朗基羅",
      "author": "Tony Hart",
      "publisher": "Barron's Education Series",
      "isbn": "978-0812018271",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 446,
      "stage": "KS2",
      "title": "Fantastic Mr Fox",
      "ctitle": "了不起的狐狸爸爸",
      "author": "Roald Dahl",
      "publisher": "Puffin Books",
      "isbn": "978-0141329109",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 447,
      "stage": "KS2",
      "title": "Fantastically Great Women Who Changed The World",
      "ctitle": "改變世界的非凡女性",
      "author": "Kate Pankhurst",
      "publisher": "Bloomsbury Publishing PLC",
      "isbn": "9781408876985",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 448,
      "stage": "KS2",
      "title": "Flips and Spins",
      "ctitle": "翻轉和旋轉",
      "author": "Jill McDougall",
      "publisher": "Heinemann Secondary Education",
      "isbn": "978-0433004585",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 449,
      "stage": "KS2",
      "title": "Foods of China (Cook with Me)",
      "ctitle": "中國美食（和我一起做菜）",
      "author": "Christine Velure Roholt",
      "publisher": "Express",
      "isbn": "978-1626171169",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 450,
      "stage": "KS2",
      "title": "Foxy and Friends Go Racing",
      "ctitle": "狐狸和朋友们去赛车",
      "author": "Colin & Jacqui Hawkins",
      "publisher": "HarperCollins",
      "isbn": "978-0006645658",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 451,
      "stage": "KS2",
      "title": "Games We Play",
      "ctitle": "我們玩的遊戲",
      "author": "Sue Davis and Jeni Wilson",
      "publisher": "Cengage Learning Australia",
      "isbn": "978-0-170-09762-8",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 452,
      "stage": "KS2",
      "title": "George Washington-A Picture Book Biography",
      "ctitle": "喬治·華盛頓：圖畫書傳記",
      "author": "James Corss Giblin",
      "publisher": "Scholastic",
      "isbn": "978-0590481014",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 453,
      "stage": "KS2",
      "title": "Giraffes",
      "ctitle": "長頸鹿",
      "author": "Jill Anderson",
      "publisher": "Cooper Square Publishing",
      "isbn": "978-1559719292",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 454,
      "stage": "KS2",
      "title": "Grover's 10 Terrific Ways to Help Our Wonderful World",
      "ctitle": "格羅弗幫助我們美好世界的10個絕妙方法",
      "author": "Ann Ross",
      "publisher": "Random House",
      "isbn": "978-0679813842",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 455,
      "stage": "KS2",
      "title": "Gumdrop Finds a Ghost",
      "ctitle": "軟糖找到了一個幽靈",
      "author": "Val Biro",
      "publisher": "Hodder & Stoughton",
      "isbn": "978-0340710630",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 456,
      "stage": "KS2",
      "title": "Habitats of the World: Polar Regions",
      "ctitle": "世界棲息地：極地地區",
      "author": "Alison Ballance",
      "publisher": "Dominie Press",
      "isbn": "978-0768505481",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 457,
      "stage": "KS2",
      "title": "Happy New Year! Kung-Hsi Fa-Ts'ai!",
      "ctitle": "新年快樂！恭喜發財！",
      "author": "Demi",
      "publisher": "Dragonfly Books",
      "isbn": "978-0517885925",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 458,
      "stage": "KS2",
      "title": "Have You Filled a Bucket Today?: A Guide to Daily Happiness for Kids (Bucketfilling Books)",
      "ctitle": "你今天裝滿水桶了嗎？：兒童日常快樂指南（水桶裝滿系列）",
      "author": "Carol McCloud",
      "publisher": "Bucket Fillosophy",
      "isbn": "9780996099936",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 459,
      "stage": "KS2",
      "title": "Hazel's Healthy Hallowe'en",
      "ctitle": "海澤爾的健康萬聖節",
      "author": "Kathryn Meyrick",
      "publisher": "Child's Play Ltd",
      "isbn": "978-0859533089",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 460,
      "stage": "KS2",
      "title": "Hear Your Heart",
      "ctitle": "聽聽你的心",
      "author": "Paul Showers",
      "publisher": "Harper Collins",
      "isbn": "978-0064451390",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 461,
      "stage": "KS2",
      "title": "Hello Lighthouse",
      "ctitle": "你好燈塔",
      "author": "Sophie Blackall",
      "publisher": "Little, Brown Books for Young Readers",
      "isbn": "978-0316362382",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 462,
      "stage": "KS2",
      "title": "Hello Ruby: Journey Inside the Computer",
      "ctitle": "你好魯比：電腦內部之旅",
      "author": "Linda Liukas",
      "publisher": "Penguin Books Australia",
      "isbn": "978-0143309147",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 463,
      "stage": "KS2",
      "title": "Heidi",
      "ctitle": "海蒂",
      "author": "Johanna Spyri",
      "publisher": "CreateSpace Independent Publishing Platform",
      "isbn": "978-1547161911",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 464,
      "stage": "KS2",
      "title": "Hiding Places",
      "ctitle": "藏身之處",
      "author": "Lynette Evans",
      "publisher": "Shortland Publications (USA) Incorporated",
      "isbn": "978-0769902913",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 465,
      "stage": "KS2",
      "title": "Hilltop Hospital: Heart Trouble at Hilltop",
      "ctitle": "山頂醫院：山頂的心臟問題",
      "author": "Nicholas Allan",
      "publisher": "Red Fox",
      "isbn": "978-0099404552",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 466,
      "stage": "KS2",
      "title": "History from Objects: In the Street",
      "ctitle": "從物品看歷史：在街上",
      "author": "Karen Bryant-mole",
      "publisher": "Wayland",
      "isbn": "978-0750218962",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 467,
      "stage": "KS2",
      "title": "Hot and Cold",
      "ctitle": "熱和冷",
      "author": "Claire Llewellyn",
      "publisher": "Dorling Kindersley",
      "isbn": "978-0751358476",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 468,
      "stage": "KS2",
      "title": "How a Tadpole Grows into a Frog",
      "ctitle": "蝌蚪如何長成青蛙",
      "author": "David Stewart",
      "publisher": "Book House",
      "isbn": "978-1-905-08721-1",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 469,
      "stage": "KS2",
      "title": "How Are Babies Made? (Flip Flaps Series)",
      "ctitle": "寶寶是怎麼來的？（翻翻書系列）",
      "author": "Alastair Smith",
      "publisher": "Usborne Publishing Ltd",
      "isbn": "978-0746025024",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 470,
      "stage": "KS2",
      "title": "How Much, How Many, How Far, How Heavy, How Long, How Tall Is 1000?",
      "ctitle": "1000是多少？多少、多遠、多重、多長、多高？",
      "author": "Helen Nolan",
      "publisher": "Kids Can Press",
      "isbn": "9781550748161",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 471,
      "stage": "KS2",
      "title": "How to be a Sports Star",
      "ctitle": "如何成為體育明星",
      "author": "Paul Mason",
      "publisher": "Pearson Education",
      "isbn": "978-1408273975",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 472,
      "stage": "KS2",
      "title": "How to Have a Green Day",
      "ctitle": "如何度過環保的一天",
      "author": "Jenny Alexander",
      "publisher": "Longman",
      "isbn": "978-0582461772",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 473,
      "stage": "KS2",
      "title": "How to Survive Almost Anything",
      "ctitle": "如何生存幾乎任何事情",
      "author": "Brooks Whitney",
      "publisher": "Scholastic",
      "isbn": "978-0-439-57900-1",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 474,
      "stage": "KS2",
      "title": "I Don't Care!' - Learning about Respect",
      "ctitle": "我不在乎！——學習尊重",
      "author": "Brian Moses & Mike Gordon",
      "publisher": "Wayland",
      "isbn": "978-0750221368",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 475,
      "stage": "KS2",
      "title": "I Know a Shy Fellow Who Swallowed a Cello",
      "ctitle": "我認識一個害羞的傢伙吞下了大提琴",
      "author": "Barbara Garriel",
      "publisher": "Boyds Mills Press",
      "isbn": "978-1590789469",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 477,
      "stage": "KS2",
      "title": "I Know Why I Brush My Teeth",
      "ctitle": "我知道為什麼要刷牙",
      "author": "Kate Rowan",
      "publisher": "Walker Books",
      "isbn": "978-0744572322",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 478,
      "stage": "KS2",
      "title": "I Love Gymnastics",
      "ctitle": "我愛體操",
      "author": "Jane Feldman",
      "publisher": "Random House",
      "isbn": "978-0375805455",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 479,
      "stage": "KS2",
      "title": "I Want to be Somebody New!",
      "ctitle": "我想成為新的人！",
      "author": "Robert Lopshire",
      "publisher": "Random House",
      "isbn": "978-0394876160",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 480,
      "stage": "KS2",
      "title": "I Wonder Why Caterpillars Eat So Much and Other Questions about Life Cycles",
      "ctitle": "我想知道為什麼毛毛蟲吃這麼多以及其他關於生命週期的問題",
      "author": "Belinder Webber",
      "publisher": "Kingfisher Publications",
      "isbn": "978-0-753-41364-7",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 481,
      "stage": "KS2",
      "title": "I'll Always Love You",
      "ctitle": "我永遠愛你",
      "author": "Hans Wilhelm",
      "publisher": "Dragonfly Books",
      "isbn": "978-0517572658",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 482,
      "stage": "KS2",
      "title": "I'm Worried",
      "ctitle": "我很擔心",
      "author": "Brian Moses",
      "publisher": "Hodder",
      "isbn": "978-0750221313",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 483,
      "stage": "KS2",
      "title": "If I Were a Kid in Ancient China: Children of the Ancient World",
      "ctitle": "如果我是古代中國的孩子：古代世界的兒童",
      "author": "Lou Waryncia, Ken Sheldon",
      "publisher": "Cricket Books",
      "isbn": "9780812679311",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 484,
      "stage": "KS2",
      "title": "Iggy Peck, Architect",
      "ctitle": "伊吉·佩克，建築師",
      "author": "Andrea Beaty",
      "publisher": "Abrams",
      "isbn": "9780810911062",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 485,
      "stage": "KS2",
      "title": "Inside Your Outside: All About the Human Body",
      "ctitle": "你的內外：關於人體的一切",
      "author": "Tish Rabe",
      "publisher": "Random House for Young Readers",
      "isbn": "978-0375811005",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 486,
      "stage": "KS2",
      "title": "It’s Called Dyslexia",
      "ctitle": "這叫做閱讀障礙",
      "author": "Jennifer Moore-Mallinos",
      "publisher": "Barron’s Educational Series",
      "isbn": "978-0764137945",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 487,
      "stage": "KS2",
      "title": "It's Not Easy Being a Bunny",
      "ctitle": "做兔子不容易",
      "author": "Marilyn Sadler",
      "publisher": "Random House",
      "isbn": "978-0394861029",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 488,
      "stage": "KS2",
      "title": "Japan",
      "ctitle": "日本",
      "author": "Ena Keo",
      "publisher": "Steck Vaughn",
      "isbn": "978-0817272593",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 489,
      "stage": "KS2",
      "title": "Jim and the Beanstalk",
      "ctitle": "吉姆和豆莖",
      "author": "Raymond Briggs",
      "publisher": "Puffin",
      "isbn": "978-0140500776",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 490,
      "stage": "KS2",
      "title": "Jobs People Do",
      "ctitle": "人們做的工作",
      "author": "Christopher Maynard",
      "publisher": "Dorling Kindersley",
      "isbn": "978-0789414922",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 491,
      "stage": "KS2",
      "title": "Kangaroos",
      "ctitle": "袋鼠",
      "author": "Beverley Randell",
      "publisher": "Nelson Thornes",
      "isbn": "978-1869611002",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 492,
      "stage": "KS2",
      "title": "Kipper and the Giant",
      "ctitle": "基珀和巨人",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0198482819",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 493,
      "stage": "KS2",
      "title": "Kites: Magic Wishes That Fly up to the Sky",
      "ctitle": "風箏：飛向天空的魔法願望",
      "author": "Demi",
      "publisher": "Dragonfly Books",
      "isbn": "978-0375810084",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 494,
      "stage": "KS2",
      "title": "Land of the Dinosaurs",
      "ctitle": "恐龍之地",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0198482796",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 495,
      "stage": "KS2",
      "title": "Let's Dance",
      "ctitle": "讓我們跳舞",
      "author": "George Ancona",
      "publisher": "HarperCollins",
      "isbn": "978-0688162115",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 496,
      "stage": "KS2",
      "title": "Life on the Land",
      "ctitle": "陸地上的生命",
      "author": "Maria Rius & J M Parramon",
      "publisher": "Barron's Juveniles",
      "isbn": "978-0812038644",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 497,
      "stage": "KS2",
      "title": "Lift-the-Flap Computers and Coding",
      "ctitle": "翻翻書：電腦和編程",
      "author": "Rosie Dickins",
      "publisher": "Usborne Publishing Ltd",
      "isbn": "9781409591511",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 498,
      "stage": "KS2",
      "title": "Lions in Danger",
      "ctitle": "危險中的獅子",
      "author": "Helen Orme",
      "publisher": "Ticktock Entertainment Ltd.",
      "isbn": "978-1-846-96778-8",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 499,
      "stage": "KS2",
      "title": "Little Miss Wise",
      "ctitle": "小聰明小姐",
      "author": "Roger Hargreaves",
      "publisher": "Price Stern Sloan",
      "isbn": "978-0843178173",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 500,
      "stage": "KS2",
      "title": "Little Wolf's Book of Badness",
      "ctitle": "小狼的壞事書",
      "author": "Ian Whybrow",
      "publisher": "HarperCollins",
      "isbn": "978-0007458547",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 501,
      "stage": "KS2",
      "title": "Lon Po Po: A Red-Riding Hood Story From China",
      "ctitle": "狼婆婆：來自中國的小紅帽故事",
      "author": "ED Young",
      "publisher": "Puffin Books",
      "isbn": "978-0698113824",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 502,
      "stage": "KS2",
      "title": "Look How a Baby Grows",
      "ctitle": "看看寶寶如何成長",
      "author": "Alexandra E. Fischer",
      "publisher": "Grosset & Dunlap",
      "isbn": "978-0448424026",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 503,
      "stage": "KS2",
      "title": "Look inside a Computer",
      "ctitle": "看看電腦內部",
      "author": "Emily Sollinger",
      "publisher": "Grosset & Dunlap",
      "isbn": "978-0448421780",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 504,
      "stage": "KS2",
      "title": "Look Inside Our World",
      "ctitle": "看看我們的世界",
      "author": "Emily Bone",
      "publisher": "Usborne Publishing Ltd",
      "isbn": "9781409563945",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 505,
      "stage": "KS2",
      "title": "Look Inside Your Body (Look Inside Board Books)",
      "ctitle": "看看你的身體（立體翻翻書）",
      "author": "Louie Stowell",
      "publisher": "Usborne Publishing Ltd",
      "isbn": "9781409549475",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 506,
      "stage": "KS2",
      "title": "Look What Came from China",
      "ctitle": "看看來自中國的東西",
      "author": "Miles Harvey",
      "publisher": "Children's Press",
      "isbn": "978-0531159361",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 507,
      "stage": "KS2",
      "title": "Look What Came from Egypt",
      "ctitle": "看看來自埃及的東西",
      "author": "Miles Harvey",
      "publisher": "Children's Press",
      "isbn": "978-0531159378",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 508,
      "stage": "KS2",
      "title": "Lunch Money and Other Poems about School",
      "ctitle": "午餐錢和其他關於學校的詩",
      "author": "Carol Diggory Shields",
      "publisher": "Puffin Books",
      "isbn": "978-0140558906",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 509,
      "stage": "KS2",
      "title": "Madam President",
      "ctitle": "總統夫人",
      "author": "Lane Smith",
      "publisher": "Disney-Hyperion",
      "isbn": "978-1423108467",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 510,
      "stage": "KS2",
      "title": "Magic in the Playroom",
      "ctitle": "遊戲室的魔法",
      "author": "Enid Blyton",
      "publisher": "Grandreams",
      "isbn": "978-0755409099",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 511,
      "stage": "KS2",
      "title": "Magic School Bus 3D: Journey Through the Solar System",
      "ctitle": "魔法校車3D：太陽系之旅",
      "author": "Mary Kay Carson and Joanna Cole",
      "publisher": "Scholastic",
      "isbn": "978-0545673525",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 512,
      "stage": "KS2",
      "title": "Make Way for Tooth Decay",
      "ctitle": "為蛀牙讓路",
      "author": "Bobbi Katz",
      "publisher": "Cartwheel",
      "isbn": "978-0590522908",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 513,
      "stage": "KS2",
      "title": "Making Puppets",
      "ctitle": "製作木偶",
      "author": "James Dunbar",
      "publisher": "Longman",
      "isbn": "978-0582122888",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 514,
      "stage": "KS2",
      "title": "Martin’s Big Words: The Life of Dr. Martin Luther King, Jr.",
      "ctitle": "馬丁的大話：小馬丁·路德·金博士的一生",
      "author": "Doreen Rappaport",
      "publisher": "Jump At The Sun",
      "isbn": "978-1423106357",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 515,
      "stage": "KS2",
      "title": "Marvin Makes Music",
      "ctitle": "馬文創作音樂",
      "author": "Marvin Hamlisch",
      "publisher": "Dial",
      "isbn": "978-0803737303",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 516,
      "stage": "KS2",
      "title": "Millions of Cats",
      "ctitle": "數百萬隻貓",
      "author": "Wanda Gág",
      "publisher": "Puffin Books",
      "isbn": "978-0142407080",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 517,
      "stage": "KS2",
      "title": "Milo's Great Invention",
      "ctitle": "米洛的偉大發明",
      "author": "Andrew Clements",
      "publisher": "Steck-Vaughn Company",
      "isbn": "978-0-817-27288-3",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 518,
      "stage": "KS2",
      "title": "Mind Your Manners On Vacation",
      "ctitle": "假期中注意你的禮貌",
      "author": "Nuria Roca",
      "publisher": "Active Mind Ltd.",
      "isbn": "9789888155583",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 519,
      "stage": "KS2",
      "title": "Models",
      "ctitle": "模型",
      "author": "Annie Owen",
      "publisher": "Two-Can Publishing",
      "isbn": "978-1843010203",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 520,
      "stage": "KS2",
      "title": "Mog the Forgetful Cat",
      "ctitle": "健忘的貓咪莫格",
      "author": "Judith Kerr",
      "publisher": "Picture Lions",
      "isbn": "978-0006640622",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 521,
      "stage": "KS2",
      "title": "Mole Moves House",
      "ctitle": "鼴鼠搬家",
      "author": "Elizabeth & George Buchanan",
      "publisher": "Penguin Longman Publishing",
      "isbn": "978-0131926349",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 522,
      "stage": "KS2",
      "title": "Monkeys & Apes",
      "ctitle": "猴子與猿類",
      "author": "Beverley Randell",
      "publisher": "Nelson Price Milburn",
      "isbn": "978-0174026068",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 523,
      "stage": "KS2",
      "title": "Morgy's Musical Summer",
      "ctitle": "莫吉的音樂夏天",
      "author": "Maggie Lewis",
      "publisher": "Houghton Mifflin Books for Children",
      "isbn": "978-0618777075",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 524,
      "stage": "KS2",
      "title": "Motorbikes",
      "ctitle": "摩托車",
      "author": "Frances Ridley",
      "publisher": "Ticktock Entertainment Ltd.",
      "isbn": "978-1-846-96562-3",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 525,
      "stage": "KS2",
      "title": "Mr Biff the Boxer",
      "ctitle": "拳擊手比夫先生",
      "author": "Allan Ahlberg",
      "publisher": "Puffin",
      "isbn": "978-0140312362",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 526,
      "stage": "KS2",
      "title": "Mr. Forgetful",
      "ctitle": "健忘先生",
      "author": "Roger Hargreaves",
      "publisher": "Egmont World Ltd",
      "isbn": "978-0749838232",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 527,
      "stage": "KS2",
      "title": "Mrs. Vole the Vet",
      "ctitle": "獸醫田鼠太太",
      "author": "Allan Ahlberg",
      "publisher": "Puffin",
      "isbn": "978-0140378801",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 528,
      "stage": "KS2",
      "title": "My Amazing Journey",
      "ctitle": "我的驚奇之旅",
      "author": "Pat Thomas",
      "publisher": "Hodder Wayland",
      "isbn": "978-0750025744",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 529,
      "stage": "KS2",
      "title": "My Best Book of Big Cats",
      "ctitle": "我的最佳大貓書",
      "author": "Christiane Gunzi",
      "publisher": "Kingfisher Publications",
      "isbn": "978-0-753-41273-2",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 530,
      "stage": "KS2",
      "title": "My Family's Changing",
      "ctitle": "我的家庭在改變",
      "author": "Pat Thomas",
      "publisher": "Hodder Wayland",
      "isbn": "978-0750025720",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 531,
      "stage": "KS2",
      "title": "My First Book about the Internet",
      "ctitle": "我的第一本網路書",
      "author": "Sharon Cromwell",
      "publisher": "Troll Communications",
      "isbn": "978-0816743209",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 532,
      "stage": "KS2",
      "title": "Nature and Human Inventions",
      "ctitle": "自然與人類發明",
      "author": "Brylee Gibson",
      "publisher": "Pearson Heinemann",
      "isbn": "978-1-869-70096-6",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 533,
      "stage": "KS2",
      "title": "Never Mail an Elephant",
      "ctitle": "永遠不要郵寄大象",
      "author": "Mike Thaler & Jared Lee",
      "publisher": "Troll Communications",
      "isbn": "978-0816730193",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 534,
      "stage": "KS2",
      "title": "No Smoking",
      "ctitle": "禁止吸煙",
      "author": "Toni Goffe",
      "publisher": "Child's Play International",
      "isbn": "978-0859533690",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 535,
      "stage": "KS2",
      "title": "Noddy to the Rescue",
      "ctitle": "諾迪來救援",
      "author": "Enid Blyton",
      "publisher": "Penguin",
      "isbn": "978-0563405429",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 536,
      "stage": "KS2",
      "title": "Octave and His Violin",
      "ctitle": "奧克塔夫和他的小提琴",
      "author": "Gerard Moncomble",
      "publisher": "Foulsham",
      "isbn": "978-0572019679",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 537,
      "stage": "KS2",
      "title": "Oh, Bother!  Someone Won't Share!",
      "ctitle": "哦，真煩人！有人不願意分享！",
      "author": "Betty Birney",
      "publisher": "Golden Books",
      "isbn": "978-0307127662",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 538,
      "stage": "KS2",
      "title": "Oliver's Fruit Salad",
      "ctitle": "奧利佛的水果沙拉",
      "author": "Vivian French",
      "publisher": "Hodder Children's Books",
      "isbn": "978-0340704530",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 539,
      "stage": "KS2",
      "title": "Orang-utan Baby",
      "ctitle": "猩猩寶寶",
      "author": "Monica Hughes",
      "publisher": "Ticktock Entertainment Ltd.",
      "isbn": "978-1860079924",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 540,
      "stage": "KS2",
      "title": "Origami for Beginners",
      "ctitle": "初學者摺紙",
      "author": "Florence Temko",
      "publisher": "Tuttle Publishing",
      "isbn": "978-0804833134",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 541,
      "stage": "KS2",
      "title": "Our Fragile Environment - Guided Reading Book",
      "ctitle": "我們脆弱的環境 - 導讀本",
      "author": "Editor: Katie Carroll",
      "publisher": "Pearson",
      "isbn": "978-0-731-27398-0",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 542,
      "stage": "KS2",
      "title": "Paddington the Artist",
      "ctitle": "藝術家帕丁頓",
      "author": "Michael Bond",
      "publisher": "Picturelions",
      "isbn": "978-0006647454",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 543,
      "stage": "KS2",
      "title": "Pandas",
      "ctitle": "熊貓",
      "author": "Anne Schreiber",
      "publisher": "National Geographic Society",
      "isbn": "978-1-426-30610-5",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 544,
      "stage": "KS2",
      "title": "People Poems",
      "ctitle": "人物詩歌",
      "author": "John Foster",
      "publisher": "Oxford University Press",
      "isbn": "978-0199167562",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 545,
      "stage": "KS2",
      "title": "People's Republic of China",
      "ctitle": "中華人民共和國",
      "author": "Wil Mara",
      "publisher": "Children's Press",
      "isbn": "9780531253526",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 546,
      "stage": "KS2",
      "title": "Perfect the Pig",
      "ctitle": "完美小豬",
      "author": "Susan Jeschke",
      "publisher": "Square Fish",
      "isbn": "978-0805047042",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 547,
      "stage": "KS2",
      "title": "Pigs Go to Market: Fun with Math and Shopping",
      "ctitle": "小豬去市場：數學與購物的樂趣",
      "author": "Amy Axelrod",
      "publisher": "Aladdin",
      "isbn": "978-0689825538",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 548,
      "stage": "KS2",
      "title": "Pinocchio",
      "ctitle": "木偶奇遇記",
      "author": "Linda M Jennings",
      "publisher": "Ladybird",
      "isbn": "978-0721415437",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 549,
      "stage": "KS2",
      "title": "Pizza for Everyone",
      "ctitle": "人人都有披薩",
      "author": "Alan Barnes",
      "publisher": "Steck Vaughn",
      "isbn": "978-0817272517",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 550,
      "stage": "KS2",
      "title": "Pokemon Junior #3: Save Our Squirtle!",
      "ctitle": "寶可夢初級 #3：拯救我們的傑尼龜！",
      "author": "Bill Michaels",
      "publisher": "Scholastic",
      "isbn": "978-0439154208",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 551,
      "stage": "KS2",
      "title": "Presto Change-O",
      "ctitle": "變變變！",
      "author": "Audrey Wood",
      "publisher": "Child's Play International",
      "isbn": "978-0859533225",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 552,
      "stage": "KS2",
      "title": "Princess Smartypants",
      "ctitle": "聰明公主",
      "author": "Babette Cole",
      "publisher": "Puffin Books",
      "isbn": "978-0698115552",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 553,
      "stage": "KS2",
      "title": "Rabbit's Tail",
      "ctitle": "兔子的尾巴",
      "author": "Duncan & Linda Williamson",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521468749",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 555,
      "stage": "KS2",
      "title": "Real Life Artist",
      "ctitle": "真實生活中的藝術家",
      "author": "Michael Cox",
      "publisher": "Pearson Education Limited",
      "isbn": "978-0435075958",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 556,
      "stage": "KS2",
      "title": "Recycle!",
      "ctitle": "回收利用！",
      "author": "Gail Gibbons",
      "publisher": "Little, Brown Young Readers",
      "isbn": "978-0316309431",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 557,
      "stage": "KS2",
      "title": "Rescue and Jessica: A Life-Changing Friendship",
      "ctitle": "救援犬與潔西卡：改變生命的友誼",
      "author": "Jessica Kensky & Patrick Downes",
      "publisher": "Candlewick",
      "isbn": "978-0763696047",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 558,
      "stage": "KS2",
      "title": "Revolting Rhymes",
      "ctitle": "令人作嘔的韻律詩",
      "author": "Roald Dahl",
      "publisher": "Puffin Books",
      "isbn": "978-0-142-41482-8",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 559,
      "stage": "KS2",
      "title": "Rollercoaster",
      "ctitle": "雲霄飛車",
      "author": "Narinder Dhami",
      "publisher": "Rigby Star",
      "isbn": "978-0-433-05215-9",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 560,
      "stage": "KS2",
      "title": "Room on the Broom",
      "ctitle": "掃帚上的房間",
      "author": "Julia Donaldson and Axel Scheffler",
      "publisher": "Macmillan Children's Books",
      "isbn": "978-0-333-90338-4",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 561,
      "stage": "KS2",
      "title": "Round the World: Cookbook",
      "ctitle": "環遊世界：食譜書",
      "author": "Jane Asher",
      "publisher": "Longman",
      "isbn": "978-0582122802",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 562,
      "stage": "KS2",
      "title": "Sadako and the Thousand Paper Cranes",
      "ctitle": "佐藤貞子與千隻紙鶴",
      "author": "Eleanor Coerr",
      "publisher": "Puffin Books",
      "isbn": "978-0698118027",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 563,
      "stage": "KS2",
      "title": "Science Around the House : Simple Projects Using Household Recyclables",
      "ctitle": "家中的科學：使用家庭回收物的簡單專案",
      "author": "Roz Fulcher",
      "publisher": "Dover Publications Inc.",
      "isbn": "9780486476452",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 564,
      "stage": "KS2",
      "title": "Selfish",
      "ctitle": "自私",
      "author": "Janine Amos",
      "publisher": "Cherrytree Books",
      "isbn": "978-1842343975",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 565,
      "stage": "KS2",
      "title": "Senses",
      "ctitle": "感官",
      "author": "Jinny Johnson",
      "publisher": "Kingfisher Publications",
      "isbn": "978-0753410615",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 566,
      "stage": "KS2",
      "title": "Sharks",
      "ctitle": "鯊魚",
      "author": "Seymour Simon",
      "publisher": "Harper Collins Publishers",
      "isbn": "978-0-060-87713-2",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 567,
      "stage": "KS2",
      "title": "Shrinking Violet",
      "ctitle": "害羞的紫羅蘭",
      "author": "Cari Best",
      "publisher": "Farrar, Straus and Giroux",
      "isbn": "978-0-374-36882-1",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 568,
      "stage": "KS2",
      "title": "Skyscrapers",
      "ctitle": "摩天大樓",
      "author": "Libby Romero",
      "publisher": "National Geographic Children's Books",
      "isbn": "978-1426326813",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 569,
      "stage": "KS2",
      "title": "Snowden",
      "ctitle": "史諾登",
      "author": "Nancy Carlson",
      "publisher": "Puffin Books",
      "isbn": "978-0140567694",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 570,
      "stage": "KS2",
      "title": "So, What's It Like to be a Cat?",
      "ctitle": "那麼，當一隻貓是什麼感覺？",
      "author": "Karla Kuskin",
      "publisher": "Simon & Schuster",
      "isbn": "978-1416911159",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 571,
      "stage": "KS2",
      "title": "Spiders!",
      "ctitle": "蜘蛛！",
      "author": "Christopher Nicholas",
      "publisher": "Learning Horizons",
      "isbn": "978-0768101287",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 572,
      "stage": "KS2",
      "title": "Spike and the Concert",
      "ctitle": "史派克與音樂會",
      "author": "June Crebbin",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521468640",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 573,
      "stage": "KS2",
      "title": "Splish Splash Splosh!",
      "ctitle": "嘩啦嘩啦嘩！",
      "author": "Mick Manning & Brita Granstrom",
      "publisher": "Franklin Watts",
      "isbn": "978-0749656867",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 574,
      "stage": "KS2",
      "title": "Sports",
      "ctitle": "運動",
      "author": "Gallimard Jeunesse & Pierre-Marie Valat",
      "publisher": "Scholastic",
      "isbn": "978-0590116176",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 575,
      "stage": "KS2",
      "title": "S-S-Snakes!",
      "ctitle": "蛇-蛇-蛇！",
      "author": "Lucille Recht Penner",
      "publisher": "Random House",
      "isbn": "978-0679847779",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 576,
      "stage": "KS2",
      "title": "Stanley in the Dark",
      "ctitle": "黑暗中的史丹利",
      "author": "Rutherford",
      "publisher": "Prentice Hall",
      "isbn": "978-0131237124",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 577,
      "stage": "KS2",
      "title": "Star War Episode I: Anakin's Race for Freedom",
      "ctitle": "星際大戰第一集：安納金的自由競賽",
      "author": "Alice Alfonsi",
      "publisher": "LucasBooks",
      "isbn": "978-0375800276",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 578,
      "stage": "KS2",
      "title": "Stars",
      "ctitle": "星星",
      "author": "Seymour Simon",
      "publisher": "Harper Collins Publishers",
      "isbn": "978-0-060-89001-8",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 579,
      "stage": "KS2",
      "title": "Stellaluna",
      "ctitle": "星月",
      "author": "Janell Cannon",
      "publisher": "HMH Books",
      "isbn": "978-0-152-06287-3",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 580,
      "stage": "KS2",
      "title": "Stephen Curry: The Children's Book: The Boy Who Never Gave Up",
      "ctitle": "史蒂芬·柯瑞：兒童讀物：永不放棄的男孩",
      "author": "Anthony Curcio",
      "publisher": "Create Space Independent Publishing Platform",
      "isbn": "978-1537010342",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 581,
      "stage": "KS2",
      "title": "Sun: A Journey That Brings Life to a Planet",
      "ctitle": "太陽：為星球帶來生命的旅程",
      "author": "Caroline Grimshaw",
      "publisher": "Two-Can Publishing",
      "isbn": "978-1854344441",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 582,
      "stage": "KS2",
      "title": "Super Science Magic: 20 Tricks Inside!",
      "ctitle": "超級科學魔法：內含20個技巧！",
      "author": "Sandra Markle",
      "publisher": "Scholastic",
      "isbn": "978-0439281362",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 583,
      "stage": "KS2",
      "title": "Ten Girls Who Didn't Give In",
      "ctitle": "十個不屈服的女孩",
      "author": "Irene Howat",
      "publisher": "Christian Focus Publications",
      "isbn": "978-1845500368",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 584,
      "stage": "KS2",
      "title": "Thank You, Omu!",
      "ctitle": "謝謝你，歐姆！",
      "author": "Oge Mora",
      "publisher": "Little, Brown Books for Young Readers",
      "isbn": "978-0316431248",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 585,
      "stage": "KS2",
      "title": "The 7 Habits of Happy Kids",
      "ctitle": "快樂孩子的7個習慣",
      "author": "Sean Covey",
      "publisher": "Simon & Schuster\nBooks for Young\nReaders",
      "isbn": "9781416957768",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 586,
      "stage": "KS2",
      "title": "The Boy Who Loved Math : The Improbable Life of Paul Erdos",
      "ctitle": "熱愛數學的男孩：保羅·艾狄胥的不可思議人生",
      "author": "Deborah Heiligman",
      "publisher": "Roaring Brook Press",
      "isbn": "9781596433076",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 587,
      "stage": "KS2",
      "title": "The Bridge",
      "ctitle": "橋樑",
      "author": "Meredith Hooper",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521498357",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 588,
      "stage": "KS2",
      "title": "The Bug Book",
      "ctitle": "蟲蟲書",
      "author": "Kathy Kranking",
      "publisher": "Golden Books",
      "isbn": "978-0307130259",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 589,
      "stage": "KS2",
      "title": "The Children's Book of HEALTHY EATING",
      "ctitle": "兒童健康飲食書",
      "author": "Jo Stimpson",
      "publisher": "Award Publications Limited",
      "isbn": "9781782702115",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 590,
      "stage": "KS2",
      "title": "The Children's Book of Manners",
      "ctitle": "兒童禮儀書",
      "author": "Sue Lloyd",
      "publisher": "Award Publications Limited",
      "isbn": "978-1841359717",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 591,
      "stage": "KS2",
      "title": "The Christmas Blizzard",
      "ctitle": "聖誕暴風雪",
      "author": "Helen Ketteman",
      "publisher": "Scholastic",
      "isbn": "978-0590136099",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 592,
      "stage": "KS2",
      "title": "The Day the Crayons Quit",
      "ctitle": "蠟筆罷工的那一天",
      "author": "Drew Daywalt",
      "publisher": "HarperCollins Publishers",
      "isbn": "978-0007513765",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 593,
      "stage": "KS2",
      "title": "The Dot",
      "ctitle": "點",
      "author": "Peter H. Reynolds",
      "publisher": "Walker Books Ltd",
      "isbn": "9781844281695",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 594,
      "stage": "KS2",
      "title": "The Dragon Kite",
      "ctitle": "龍風箏",
      "author": "Kenneth Steven",
      "publisher": "Tamarind",
      "isbn": "978-1-870-51684-6",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 595,
      "stage": "KS2",
      "title": "The Emergency",
      "ctitle": "緊急情況",
      "author": "Mike Poulton",
      "publisher": "Oxford University Press",
      "isbn": "978-0193990746",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 596,
      "stage": "KS2",
      "title": "The Empty Pot",
      "ctitle": "空花盆",
      "author": "Demi",
      "publisher": "Square Fish",
      "isbn": "978-0-805-04900-8",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 597,
      "stage": "KS2",
      "title": "The Five Chinese Brothers",
      "ctitle": "五個中國兄弟",
      "author": "Claire Huchet Bishop and Kurt Wiese",
      "publisher": "Puffin Books",
      "isbn": "978-0698113572",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 598,
      "stage": "KS2",
      "title": "The Forest",
      "ctitle": "森林",
      "author": "Isidro Sanchez & Carme Peris",
      "publisher": "Barron's Juveniles",
      "isbn": "978-0812047097",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 599,
      "stage": "KS2",
      "title": "The Huge Bag of Worries",
      "ctitle": "巨大的煩惱袋",
      "author": "Virginia Ironside",
      "publisher": "Hachette Children's",
      "isbn": "978-0340903179",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 600,
      "stage": "KS2",
      "title": "Ten Girls Who Made A Difference",
      "ctitle": "十個改變世界的女孩",
      "author": "Irene Howat",
      "publisher": "Christian Focus Publications",
      "isbn": "978-1857927764",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 601,
      "stage": "KS2",
      "title": "The Hairy Tree Man",
      "ctitle": "毛茸茸的樹人",
      "author": "Andrew Wright",
      "publisher": "Oxford University Press",
      "isbn": "978-0194242592",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 602,
      "stage": "KS2",
      "title": "The Human Body",
      "ctitle": "人體",
      "author": "Judy Nayer",
      "publisher": "McClanahan Book Company",
      "isbn": "978-0768100655",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 603,
      "stage": "KS2",
      "title": "The Jolly Postman or Other People's Letters",
      "ctitle": "快樂的郵差或別人的信件",
      "author": "Janet & Allan Ahlberg",
      "publisher": "LB Kids",
      "isbn": "978-0316126441",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 604,
      "stage": "KS2",
      "title": "The King Without A Throne",
      "ctitle": "沒有王座的國王",
      "author": "Jillian Lin",
      "publisher": "CreateSpace \nIndependent \nPublishing \nPlatform",
      "isbn": "9781533618276",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 605,
      "stage": "KS2",
      "title": "The Life and Times of the Honeybee",
      "ctitle": "蜜蜂的生活與時代",
      "author": "Charles Micucci",
      "publisher": "Houghton Mifflin",
      "isbn": "978-0395861394",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 606,
      "stage": "KS2",
      "title": "The Little Green Man Mystery",
      "ctitle": "小綠人謎案",
      "author": "Carole Marsh",
      "publisher": "Carole Marsh Mysteries",
      "isbn": "978-0635063410",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 607,
      "stage": "KS2",
      "title": "The Long Road",
      "ctitle": "漫長的路",
      "author": "Rod Smith",
      "publisher": "Pearson Ed.",
      "isbn": "978-1-405-88455-6",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 608,
      "stage": "KS2",
      "title": "The Magic School Bus: On the Ocean Floor",
      "ctitle": "魔法校車：海底探險",
      "author": "Joanna Cole",
      "publisher": "Scholastic",
      "isbn": "978-0590414319",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 609,
      "stage": "KS2",
      "title": "The Magical Schoolbus and the Climate Challenge",
      "ctitle": "魔法校車與氣候挑戰",
      "author": "Joanna Cole",
      "publisher": "Scholastic Press",
      "isbn": "978-0545453776",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 610,
      "stage": "KS2",
      "title": "The Magic School Bus Presents: Dinosaurs",
      "ctitle": "魔法校車：恐龍",
      "author": "Tom Jackson",
      "publisher": "Scholastic",
      "isbn": "978-0545685832",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 611,
      "stage": "KS2",
      "title": "The Magic School Bus Presents: Polar Animals",
      "ctitle": "魔法校車：極地動物",
      "author": "Cynthis O'Brien",
      "publisher": "Scholastic",
      "isbn": "978-0545685863",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 612,
      "stage": "KS2",
      "title": "The Magic School Bus Presents: The Rainforest",
      "ctitle": "魔法校車：熱帶雨林",
      "author": "Tom Jackson",
      "publisher": "Scholastic",
      "isbn": "978-0545685856",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 613,
      "stage": "KS2",
      "title": "The Magic School Bus Presents: Volcanoes and Earthquakes",
      "ctitle": "魔法校車：火山與地震",
      "author": "Tom Jackson",
      "publisher": "Scholastic",
      "isbn": "978-0545685849",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 614,
      "stage": "KS2",
      "title": "The Magic School Bus Presents: Wild Weather",
      "ctitle": "魔法校車：惡劣天氣",
      "author": "Tom Jackson & Sean Callery",
      "publisher": "Scholastic",
      "isbn": "978-0545683678",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 615,
      "stage": "KS2",
      "title": "The Mystery in the Rocky Mountains",
      "ctitle": "落基山脈的謎案",
      "author": "Carole Marsh",
      "publisher": "Carole Marsh Mysteries",
      "isbn": "978-0635023896",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 616,
      "stage": "KS2",
      "title": "The Paper Bag Princess",
      "ctitle": "紙袋公主",
      "author": "Robert Munsch",
      "publisher": "Annick Press Limited",
      "isbn": "978-1554512119",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 617,
      "stage": "KS2",
      "title": "The Petsitters Club- Donkey Rescue",
      "ctitle": "寵物保姆俱樂部：驢子救援",
      "author": "Tessa Krailing",
      "publisher": "Barron's Education Series",
      "isbn": "978-0764105722",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 618,
      "stage": "KS2",
      "title": "The Prince Who Wrote a Letter",
      "ctitle": "寫信的王子",
      "author": "Ann Love",
      "publisher": "Child's Play International",
      "isbn": "978-0859533997",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 619,
      "stage": "KS2",
      "title": "The Rainbow Machine",
      "ctitle": "彩虹機器",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0198483366",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 620,
      "stage": "KS2",
      "title": "The School Trip",
      "ctitle": "學校旅行",
      "author": "Nick Butterworth & Mick Inkpen",
      "publisher": "Hodder Children's Books",
      "isbn": "978-0340932391",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 621,
      "stage": "KS2",
      "title": "The Secret Life of Trees",
      "ctitle": "樹木的秘密生活",
      "author": "Chiara Chevallier",
      "publisher": "Dorling Kindersley",
      "isbn": "978-0751362114",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 622,
      "stage": "KS2",
      "title": "The Story about Ping",
      "ctitle": "小鴨子平的故事",
      "author": "Marjorie Flack & Kurt Wiese",
      "publisher": "Grosset & Dunlap",
      "isbn": "978-0448421650",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 623,
      "stage": "KS2",
      "title": "The Surprise",
      "ctitle": "驚喜",
      "author": "Adam Coleman",
      "publisher": "Oxford University Press",
      "isbn": "978-0193990838",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 624,
      "stage": "KS2",
      "title": "The True Story of the Three Little Pigs",
      "ctitle": "三隻小豬的真實故事",
      "author": "Jon Scieszka",
      "publisher": "Puffin Books",
      "isbn": "978-0140544510",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 625,
      "stage": "KS2",
      "title": "The Usborne Book of Racing Cars",
      "ctitle": "尤斯本賽車書",
      "author": "Clive Gifford",
      "publisher": "Scholastic",
      "isbn": "978-0-439-12051-7",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 626,
      "stage": "KS2",
      "title": "The Wonder of God's World: Air",
      "ctitle": "上帝世界的奇蹟：空氣",
      "author": "Bonita Searle-Barnes",
      "publisher": "Lion Publishing",
      "isbn": "978-0745920214",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 627,
      "stage": "KS2",
      "title": "Threadbear",
      "ctitle": "線熊",
      "author": "Mick Inkpen",
      "publisher": "Hodder Wayland",
      "isbn": "978-0340931097",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 628,
      "stage": "KS2",
      "title": "Thunder Rose",
      "ctitle": "雷電玫瑰",
      "author": "Jerdine Nolen",
      "publisher": "Voyager Books",
      "isbn": "978-0152060060",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 629,
      "stage": "KS2",
      "title": "Toilets",
      "ctitle": "廁所",
      "author": "Lynette Duggan",
      "publisher": "Longman",
      "isbn": "978-0582122819",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 630,
      "stage": "KS2",
      "title": "Tooth Fairy",
      "ctitle": "牙仙子",
      "author": "Audrey Wood",
      "publisher": "Child's Play International",
      "isbn": "978-0859538183",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 631,
      "stage": "KS2",
      "title": "Tunnels",
      "ctitle": "隧道",
      "author": "Rebecca Pettiford",
      "publisher": "Pogo",
      "isbn": "978-1620312124",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 632,
      "stage": "KS2",
      "title": "Wacky Wednesday",
      "ctitle": "瘋狂星期三",
      "author": "Theo LeSieg",
      "publisher": "Turtleback Books",
      "isbn": "978-0785799672",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 633,
      "stage": "KS2",
      "title": "Weird Sports of the World",
      "ctitle": "世界奇異運動",
      "author": "S B Watson",
      "publisher": "Child's World",
      "isbn": "9781609543785",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 634,
      "stage": "KS2",
      "title": "We're All Wonders",
      "ctitle": "我們都是奇蹟",
      "author": "R. J. Palacio",
      "publisher": "Penguin Books Ltd",
      "isbn": "9780141386416",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 635,
      "stage": "KS2",
      "title": "Whales",
      "ctitle": "鯨魚",
      "author": "Seymour Simon",
      "publisher": "Harper Collins Publishers",
      "isbn": "978-0-060-87711-8",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 636,
      "stage": "KS2",
      "title": "What Did Dinosaurs Eat",
      "ctitle": "恐龍吃什麼",
      "author": "Elizabeth MacLeod",
      "publisher": "Kids Can Press",
      "isbn": "978-1-553-37460-2",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 637,
      "stage": "KS2",
      "title": "What Do You Do With a Problem?",
      "ctitle": "遇到問題怎麼辦？",
      "author": "Kobi Yamada",
      "publisher": "Compendium Inc",
      "isbn": "978-1943200009",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 638,
      "stage": "KS2",
      "title": "What Happens to Your Food?",
      "ctitle": "你的食物會發生什麼？",
      "author": "Alastair Smith",
      "publisher": "Usborne Publishing",
      "isbn": "978-0746033623",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 639,
      "stage": "KS2",
      "title": "What's Wrong with Bertie?",
      "ctitle": "伯蒂怎麼了？",
      "author": "Tony Bradman",
      "publisher": "Ladybird",
      "isbn": "978-0721496672",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 640,
      "stage": "KS2",
      "title": "When Bad Things Happen",
      "ctitle": "當壞事發生時",
      "author": "Ted O'Neal",
      "publisher": "Abbey Press",
      "isbn": "978-0870293719",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 641,
      "stage": "KS2",
      "title": "When Mum Turned into a Monster",
      "ctitle": "當媽媽變成怪物時",
      "author": "Joanna Harrison",
      "publisher": "Picture Lions",
      "isbn": "978-0006645191",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 642,
      "stage": "KS2",
      "title": "When My Parents Forgot How to Be Friends",
      "ctitle": "當我的父母忘記如何做朋友時",
      "author": "Jennifer Moore-Mallinos",
      "publisher": "Barron’s Educational Series Inc.",
      "isbn": "978-0764131721",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 643,
      "stage": "KS2",
      "title": "Where the Wild Things Are",
      "ctitle": "野獸國",
      "author": "Maurice Sendak",
      "publisher": "Paw Prints",
      "isbn": "978-1435208926",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 644,
      "stage": "KS2",
      "title": "Who Am I? (Scaly and Snappy)",
      "ctitle": "我是誰？（有鱗片和咬人的）",
      "author": "Moira Butterfield",
      "publisher": "Belitha Press Ltd",
      "isbn": "978-1855615984",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 645,
      "stage": "KS2",
      "title": "Why Is Soap So Slippery? and Other Bathtime Questions",
      "ctitle": "為什麼肥皂這麼滑？和其他洗澡時間的問題",
      "author": "Catherine Ripley",
      "publisher": "Maple Tree Press",
      "isbn": "978-1895688399",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 646,
      "stage": "KS2",
      "title": "Why is the Sky Blue?",
      "ctitle": "為什麼天空是藍色的？",
      "author": "Sally Grindley",
      "publisher": "Hodder Children's Books",
      "isbn": "978-0340698433",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 647,
      "stage": "KS2",
      "title": "Why Is the Sky Blue? and Other Outdoor Questions",
      "ctitle": "為什麼天空是藍色的？和其他戶外問題",
      "author": "Catherine Ripley",
      "publisher": "Oxford University Press",
      "isbn": "978-0199104581",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 648,
      "stage": "KS2",
      "title": "Why Mosquitoes Buzz in People’s Ears",
      "ctitle": "為什麼蚊子在人們的耳朵裡嗡嗡叫",
      "author": "Verna Aardema",
      "publisher": "Penguin Putnam",
      "isbn": "978-0-14-054905-8",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 649,
      "stage": "KS2",
      "title": "Winnie the Witch",
      "ctitle": "女巫溫妮",
      "author": "Korky Paul & Valerie Thomas",
      "publisher": "Oxford University Press",
      "isbn": "978-0192748164",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 650,
      "stage": "KS2",
      "title": "Wishing Moon",
      "ctitle": "許願月亮",
      "author": "Lesley Harker",
      "publisher": "Ladybird",
      "isbn": "978-0721418698",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 651,
      "stage": "KS2",
      "title": "Women In Science",
      "ctitle": "科學界的女性",
      "author": "Rachel Ignotofsky",
      "publisher": "TEN SPEED PRESS",
      "isbn": "9781607749769",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 652,
      "stage": "KS2",
      "title": "Yang the Third and Her Impossible Family",
      "ctitle": "楊老三和她不可思議的家庭",
      "author": "Lensey Namioka",
      "publisher": "Yearling",
      "isbn": "978-0-440-41231-1",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 653,
      "stage": "KS2",
      "title": "Yang the Youngest and His Terrible Ear",
      "ctitle": "楊老么和他的糟糕耳朵",
      "author": "Lensey Namioka",
      "publisher": "Non Basic Stock Line",
      "isbn": "978-0-440-40917-5",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 654,
      "stage": "KS2",
      "title": "You Be the Detective",
      "ctitle": "你來當偵探",
      "author": "Marvin Miller",
      "publisher": "Scholastic",
      "isbn": "978-0-590-42731-9",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 655,
      "stage": "KS2",
      "title": "Young Martin Luther King, Jr. “I Have a Dream”",
      "ctitle": "年輕的馬丁·路德·金：「我有一個夢想」",
      "author": "Joanne Mattern",
      "publisher": "Lioncrest Pty Ltd",
      "isbn": "978-0816725458",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 656,
      "stage": "KS2",
      "title": "Young Mozart",
      "ctitle": "年輕的莫扎特",
      "author": "Rachel Isadora",
      "publisher": "Viking Children's Books",
      "isbn": "978-0670871209",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 657,
      "stage": "KS1",
      "title": "\"Smile!\" said Dad",
      "ctitle": "「笑一笑！」爸爸說",
      "author": "Jane Buxton",
      "publisher": "Celebration Pr",
      "isbn": "978-0673581167",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 658,
      "stage": "KS1",
      "title": "1001 Things to Spot on the Farm",
      "ctitle": "農場上的1001個發現",
      "author": "Gillian Doherty",
      "publisher": "Usborne House",
      "isbn": "978-0746029558\nBig Book:\n978-0746053010",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 659,
      "stage": "KS1",
      "title": "A Bargain for Frances",
      "ctitle": "弗朗西斯的討價還價",
      "author": "Russell Hoban",
      "publisher": "HarperCollins",
      "isbn": "978-0064440011",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 660,
      "stage": "KS1",
      "title": "A Big Mooncake for Little Star",
      "ctitle": "小星星的大月餅",
      "author": "Grace Lin",
      "publisher": "Little, Brown Books for Young Readers",
      "isbn": "978-0316404488",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 661,
      "stage": "KS1",
      "title": "A Day at Seagull Beach",
      "ctitle": "海鷗海灘的一天",
      "author": "Karen Wallace",
      "publisher": "Dorling Kindersley",
      "isbn": "978-0751358988",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 662,
      "stage": "KS1",
      "title": "A Scab on the Knee",
      "ctitle": "膝蓋上的痂",
      "author": "Jenny Alexander",
      "publisher": "Pearson Education Limited",
      "isbn": "978-0582422759",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 663,
      "stage": "KS1",
      "title": "A Seed in Need: A first look at the plant cycle",
      "ctitle": "種子需要什麼：植物週期初探",
      "author": "Sam Godwin",
      "publisher": "Wayland",
      "isbn": "978-0750024976",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 664,
      "stage": "KS1",
      "title": "All Kinds of Things",
      "ctitle": "各種各樣的東西",
      "author": "Beth Becker",
      "publisher": "Celebration Pr",
      "isbn": "978-0478205329",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 665,
      "stage": "KS1",
      "title": "All Through the Week with Cat and Dog",
      "ctitle": "和貓狗一起度過的一週",
      "author": "Rozanne Lanczak Williams",
      "publisher": "Creative Teaching Press",
      "isbn": "978-0916119645",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 666,
      "stage": "KS1",
      "title": "Amazing Rescues",
      "ctitle": "驚人的救援",
      "author": "George Shea",
      "publisher": "Random House",
      "isbn": "978-0679811077",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 667,
      "stage": "KS1",
      "title": "And Everyone Shouted, \"Pull!\": A First Look at Forces and Motion",
      "ctitle": "大家都喊「拉！」：力和運動初探",
      "author": "Claire Llewellyn",
      "publisher": "Picture Window Books",
      "isbn": "978-1404806566",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 668,
      "stage": "KS1",
      "title": "Animal Communication",
      "ctitle": "動物溝通",
      "author": "Phil Gates",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521499668",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 669,
      "stage": "KS1",
      "title": "Animals at Night",
      "ctitle": "夜間動物",
      "author": "Ralph Peters",
      "publisher": "Troll Communications",
      "isbn": "978-0816714773",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 670,
      "stage": "KS1",
      "title": "Arnie and the New Kid",
      "ctitle": "阿尼和新同學",
      "author": "Nancy Carlson",
      "publisher": "Puffin",
      "isbn": "978-0440845768",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 671,
      "stage": "KS1",
      "title": "Arthur's Really Helpful Word Book",
      "ctitle": "亞瑟的實用單詞書",
      "author": "Marc Brown",
      "publisher": "Random House",
      "isbn": "978-0679887355",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 672,
      "stage": "KS1",
      "title": "Aurora: A Tale of the Northern Lights",
      "ctitle": "極光：北極光的故事",
      "author": "Mindy Dwyer",
      "publisher": "Alaska Northwest Books",
      "isbn": "978-0882405490",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 673,
      "stage": "KS1",
      "title": "B Is for Books!",
      "ctitle": "B代表書本！",
      "author": "Annie Cobb",
      "publisher": "Random House",
      "isbn": "978-0679864462",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 674,
      "stage": "KS1",
      "title": "Babe the Sheep Pig: Oops, Pig!",
      "ctitle": "小豬寶貝：哎呀，豬！",
      "author": "Shana Corey & Donald Cook",
      "publisher": "Random House",
      "isbn": "978-0679889670",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 675,
      "stage": "KS1",
      "title": "Barbie - One Pink Shoe",
      "ctitle": "芭比娃娃 - 一隻粉紅鞋",
      "author": "Salile Orr",
      "publisher": "Random House",
      "isbn": "978-0307261069",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 676,
      "stage": "KS1",
      "title": "Bat's Surprise",
      "ctitle": "蝙蝠的驚喜",
      "author": "Gina Erickson & Kelli Foster",
      "publisher": "Barron's Educational Series",
      "isbn": "978-0812017359",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 677,
      "stage": "KS1",
      "title": "Big Machines",
      "ctitle": "大型機器",
      "author": "Karen Wallace",
      "publisher": "Dorling Kindersley",
      "isbn": "978-0751362602",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 678,
      "stage": "KS1",
      "title": "Brown Bear, Brown Bear, What Do You See?",
      "ctitle": "棕熊，棕熊，你看到什麼？",
      "author": "Bill Martin Jr.",
      "publisher": "Macmillan Young Listeners",
      "isbn": "978-1427207265\nBig Book:\n9780805087185",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 679,
      "stage": "KS1",
      "title": "Can You See the Eggs?",
      "ctitle": "你能看到蛋嗎？",
      "author": "Jenny Giles",
      "publisher": "Rigby",
      "isbn": "978-0763541750",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 680,
      "stage": "KS1",
      "title": "Caterpillar's Dream",
      "ctitle": "毛毛蟲的夢想",
      "author": "Keith Faulkner",
      "publisher": "Silver Dolphin Books",
      "isbn": "978-1571459664",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 681,
      "stage": "KS1",
      "title": "Chelsea's Chinese New Year",
      "ctitle": "切爾西的中國新年",
      "author": "Lisa Bullard",
      "publisher": "The Millbrook Press",
      "isbn": "9780761385790",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 682,
      "stage": "KS1",
      "title": "Children Around the World",
      "ctitle": "世界各地的兒童",
      "author": "Verna Wilkins",
      "publisher": "QED Publishing",
      "isbn": "978-1845380113",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 683,
      "stage": "KS1",
      "title": "Christopher Columbus",
      "ctitle": "克里斯托弗·哥倫布",
      "author": "Stephen Krensky",
      "publisher": "Harcourt School Publishers",
      "isbn": "978-0679803690",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 684,
      "stage": "KS1",
      "title": "City Mouse and Country Mouse",
      "ctitle": "城市老鼠和鄉村老鼠",
      "author": "Rozanne Lanczak Williams",
      "publisher": "Creative Teaching Press",
      "isbn": "978-0916119614",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 685,
      "stage": "KS1",
      "title": "Click, Clack, Moo: Cows That Type",
      "ctitle": "咔嗒，咔嗒，哞：會打字的牛",
      "author": "Doreen Cronin",
      "publisher": "Simon & Schuster Books for Younger Learners",
      "isbn": "978-1442433700",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 686,
      "stage": "KS1",
      "title": "Clifford the Small Red Puppy",
      "ctitle": "小紅狗克里福德",
      "author": "Norman Bridwell",
      "publisher": "Cartwheel",
      "isbn": "978-0590442947",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 687,
      "stage": "KS1",
      "title": "Clockwise",
      "ctitle": "順時針",
      "author": "Sam Godwin",
      "publisher": "Hodder Wayland",
      "isbn": "978-0750026659",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 688,
      "stage": "KS1",
      "title": "Collecting Things Is Fun!",
      "ctitle": "收集東西很有趣！",
      "author": "Kimberlee Graves",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574712520",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 689,
      "stage": "KS1",
      "title": "Colleen and the Bean",
      "ctitle": "科琳和豆子",
      "author": "Gina Erickson & Kelli Foster",
      "publisher": "Barron's Educational Series",
      "isbn": "978-0812090765",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 690,
      "stage": "KS1",
      "title": "Colour Poems",
      "ctitle": "顏色詩歌",
      "author": "John Foster",
      "publisher": "Dingles/Treehouse Court",
      "isbn": "978-1596465909",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 691,
      "stage": "KS1",
      "title": "Countries of the World: China",
      "ctitle": "世界各國：中國",
      "author": "Michael Dahl",
      "publisher": "Capstone",
      "isbn": "978-0736880596",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": true,
        "4": true,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 692,
      "stage": "KS1",
      "title": "Critters of the Night Zoom on My Broom",
      "ctitle": "夜間小動物騎著我的掃帚飛",
      "author": "Erica Farber & J.R. Sansevere",
      "publisher": "Random House",
      "isbn": "978-0679887102",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 693,
      "stage": "KS1",
      "title": "Daisy Is a Mummy",
      "ctitle": "黛西是木乃伊",
      "author": "Lisa Kopper",
      "publisher": "Penguin",
      "isbn": "978-0140555653",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 694,
      "stage": "KS1",
      "title": "Dim Sum for Everyone!",
      "ctitle": "人人都有點心！",
      "author": "Grace Lin",
      "publisher": "Dragonfly Books",
      "isbn": "978-0440417705",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 695,
      "stage": "KS1",
      "title": "Dinosaur World Swimming Giants",
      "ctitle": "恐龍世界：游泳的巨人",
      "author": "Monica Hughes",
      "publisher": "Ticktock Media Ltd.",
      "isbn": "978-1846966057",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 696,
      "stage": "KS1",
      "title": "\"Teletubbies\": Dipsy Dances",
      "ctitle": "「天線寶寶」：迪普西跳舞",
      "author": "Andrew Davenport",
      "publisher": "Penguin",
      "isbn": "978-0563555001",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 697,
      "stage": "KS1",
      "title": "Dirty Dog",
      "ctitle": "髒狗",
      "author": "Bill Gillham",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521006583",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 698,
      "stage": "KS1",
      "title": "Don't Cut My Hair!",
      "ctitle": "別剪我的頭髮！",
      "author": "Hans Wilhelm",
      "publisher": "Cartwheel",
      "isbn": "978-0590307000",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 699,
      "stage": "KS1",
      "title": "Don't Let the Pigeon Drive the Bus!",
      "ctitle": "別讓鴿子開巴士！",
      "author": "Mo Willems",
      "publisher": "Walker Books Ltd",
      "isbn": "978-1844285136",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 700,
      "stage": "KS1",
      "title": "Down the Road to Jamie's House",
      "ctitle": "沿著路到傑米的家",
      "author": "Beverley Birch",
      "publisher": "Hodder Children's Books",
      "isbn": "978-0340716038",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 701,
      "stage": "KS1",
      "title": "Early in the Morning",
      "ctitle": "清晨時分",
      "author": "Michael Walker",
      "publisher": "Addison Wesley Longman Inc ELT",
      "isbn": "978-0201853032",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 702,
      "stage": "KS1",
      "title": "Earth and Moon",
      "ctitle": "地球和月亮",
      "author": "Fred  Biddulph",
      "publisher": "Wright Group",
      "isbn": "978-0780202931",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 703,
      "stage": "KS1",
      "title": "Eggs",
      "ctitle": "雞蛋",
      "author": "Graeme Viljoen",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521667098",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 704,
      "stage": "KS1",
      "title": "Elena Makes Tortillas",
      "ctitle": "埃琳娜做玉米餅",
      "author": "Clare Bowes",
      "publisher": "Learning Media",
      "isbn": "978-0478204056",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 705,
      "stage": "KS1",
      "title": "Feed the Birds and Other Stories of Kindness",
      "ctitle": "餵鳥和其他善良的故事",
      "author": "Elizabeth Yeak",
      "publisher": "Longman",
      "isbn": "978-9814085779",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 706,
      "stage": "KS1",
      "title": "Fins, Wings and Legs",
      "ctitle": "鰭、翅膀和腿",
      "author": "Margaret Clyne & Rachel Griffiths",
      "publisher": "Longman",
      "isbn": "978-0582845121",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 707,
      "stage": "KS1",
      "title": "First Flight",
      "ctitle": "第一次飛行",
      "author": "David McPhail",
      "publisher": "Little, Brown & Co.",
      "isbn": "978-0316563321",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 708,
      "stage": "KS1",
      "title": "Five Little Monkeys Jumping on the Bed",
      "ctitle": "五隻小猴子在床上跳",
      "author": "Eileen Christelow",
      "publisher": "Houghton Mifflin",
      "isbn": "978-0544283299\nBig Book:\n978-0618836826",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 709,
      "stage": "KS1",
      "title": "Five Little Monsters Went to School",
      "ctitle": "五隻小怪物去上學",
      "author": "Rozanne Lanczak Williams",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574711271",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 710,
      "stage": "KS1",
      "title": "Football",
      "ctitle": "足球",
      "author": "Eamonn O'Farrell",
      "publisher": "Pearson Education Limited",
      "isbn": "978-0435166861",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 711,
      "stage": "KS1",
      "title": "Footprints in the Snow",
      "ctitle": "雪中的腳印",
      "author": "Cynthia Benjamin",
      "publisher": "Cartwheel",
      "isbn": "978-0590466639",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 712,
      "stage": "KS1",
      "title": "Fox & Chick: The Party: and Other Stories",
      "ctitle": "狐狸和小雞：派對和其他故事",
      "author": "Sergio Ruzzier",
      "publisher": "Chronicle Books",
      "isbn": "978-1452152882",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 713,
      "stage": "KS1",
      "title": "Frog and Toad Are Friends",
      "ctitle": "青蛙和蟾蜍是朋友",
      "author": "Arnold Lobel",
      "publisher": "HarperCollins",
      "isbn": "978-0064440202",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 714,
      "stage": "KS1",
      "title": "Frog Went A-Courtin'",
      "ctitle": "青蛙去求愛",
      "author": "Retold by John Langstaff",
      "publisher": "HMH Books for Young Readers",
      "isbn": "978-0156339001",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 715,
      "stage": "KS1",
      "title": "From Tadpole to Frog",
      "ctitle": "從蝌蚪到青蛙",
      "author": "David Stewart",
      "publisher": "Franklin Watts Ltd",
      "isbn": "978-1445129525",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 716,
      "stage": "KS1",
      "title": "Ghost and Pete",
      "ctitle": "鬼魂和皮特",
      "author": "Dayle Ann Dodds",
      "publisher": "Random House",
      "isbn": "978-0679861997",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 717,
      "stage": "KS1",
      "title": "Gifts to Make",
      "ctitle": "要做的禮物",
      "author": "Barbara Swett Burt",
      "publisher": "Steck-Vaughn",
      "isbn": "978-0817272692",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 718,
      "stage": "KS1",
      "title": "Giggle, Giggle, Quack",
      "ctitle": "咯咯笑，咯咯笑，嘎嘎叫",
      "author": "Doreen Cronin",
      "publisher": "Simon & Schuster Children's",
      "isbn": "978-0743490092",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 719,
      "stage": "KS1",
      "title": "Going to the Dentist",
      "ctitle": "去看牙醫",
      "author": "Anne Civardi",
      "publisher": "Usborne Books",
      "isbn": "978-0794525927",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 720,
      "stage": "KS1",
      "title": "Goldilocks and the Three Bears",
      "ctitle": "金髮姑娘和三隻熊",
      "author": "Illustrated by Moira Maclean",
      "publisher": "Ladybird",
      "isbn": "978-0721419701",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 721,
      "stage": "KS1",
      "title": "Gorilla",
      "ctitle": "大猩猩",
      "author": "Anthony Browne",
      "publisher": "Walker Books",
      "isbn": "978-0744599978 \nBig Book:\n978-0744578478",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 722,
      "stage": "KS1",
      "title": "Granny's Teeth",
      "ctitle": "奶奶的牙齒",
      "author": "June Crebbin",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521559331",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 723,
      "stage": "KS1",
      "title": "Great Day for Up",
      "ctitle": "起床的好日子",
      "author": "Dr. Seuss",
      "publisher": "Random House",
      "isbn": "978-0394829135",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 724,
      "stage": "KS1",
      "title": "Greedy Cat is Hungry",
      "ctitle": "貪吃的貓餓了",
      "author": "Joy Cowley",
      "publisher": "Learning Media",
      "isbn": "978-0478204407",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 725,
      "stage": "KS1",
      "title": "Gregory, the Terrible Eater",
      "ctitle": "格雷戈里，糟糕的食客",
      "author": "Mitchell Sharmat",
      "publisher": "Scholastic",
      "isbn": "978-0545129312",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 726,
      "stage": "KS1",
      "title": "Grow a Flower",
      "ctitle": "種一朵花",
      "author": "Margaret Clyne",
      "publisher": "Pearson Education Limited",
      "isbn": "978-0433012313",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 727,
      "stage": "KS1",
      "title": "Grow It Back!",
      "ctitle": "讓它長回來！",
      "author": "Diana Noonan",
      "publisher": "Heinemann Secondary Education",
      "isbn": "978-0433004370",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 728,
      "stage": "KS1",
      "title": "Growing Vegetable Soup",
      "ctitle": "種植蔬菜湯",
      "author": "Lois Ehlert",
      "publisher": "HMH Books for Young Readers",
      "isbn": "978-0152325800",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 729,
      "stage": "KS1",
      "title": "Guess What I'll Be",
      "ctitle": "猜猜我會成為什麼",
      "author": "Anni Axworthy",
      "publisher": "Walker Books",
      "isbn": "978-0744577440",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 730,
      "stage": "KS1",
      "title": "Happy Birthday, Thomas!",
      "ctitle": "生日快樂，托馬斯！",
      "author": "Rev. W. Awdry",
      "publisher": "Random House",
      "isbn": "978-0679808091",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 731,
      "stage": "KS1",
      "title": "Harold and the Purple Crayon",
      "ctitle": "哈羅德和紫色蠟筆",
      "author": "Crockett Johnson",
      "publisher": "HarperCollins Publishers",
      "isbn": "978-0060229368",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 732,
      "stage": "KS1",
      "title": "Hattie and the Fox",
      "ctitle": "哈蒂和狐狸",
      "author": "Mem Fox",
      "publisher": "Aladdin",
      "isbn": "978-0689716119",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 733,
      "stage": "KS1",
      "title": "Healthy Food",
      "ctitle": "健康食物",
      "author": "Annette Smith, Beverley Randell & Jenny Giles",
      "publisher": "Cengage Learning",
      "isbn": "978-0170096867",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 734,
      "stage": "KS1",
      "title": "Healthy Foods Make Your Body Go",
      "ctitle": "健康食物讓你的身體運轉",
      "author": "David I.A. Mason",
      "publisher": "Scholastic",
      "isbn": "978-9814776912",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 735,
      "stage": "KS1",
      "title": "Hello, World! Solar System",
      "ctitle": "你好，世界！太陽系",
      "author": "Jill McDonald",
      "publisher": "Doubleday Books for Young Readers",
      "isbn": "978-0553521030",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 736,
      "stage": "KS1",
      "title": "Houses",
      "ctitle": "房子",
      "author": "Marcia Fries",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574711400",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 737,
      "stage": "KS1",
      "title": "How Can I Help?",
      "ctitle": "我怎麼能幫忙？",
      "author": "Christine Hood",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574711240",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 738,
      "stage": "KS1",
      "title": "How Can We See in the Dark?",
      "ctitle": "我們如何在黑暗中看見？",
      "author": "Fred & Jeanne Biddulph",
      "publisher": "Penerbitan Pelangi Sdn. Bhd.",
      "isbn": "978-9838787796",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 739,
      "stage": "KS1",
      "title": "How Crayons Are Made",
      "ctitle": "蠟筆是如何製作的",
      "author": "Gill Munton",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521774529",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 740,
      "stage": "KS1",
      "title": "How do your senses work?",
      "ctitle": "你的感官如何運作？",
      "author": "Judy Tatchell",
      "publisher": "Usborne",
      "isbn": "978-0-794-50642-1",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 741,
      "stage": "KS1",
      "title": "How Does Your Salad Grow?",
      "ctitle": "你的沙拉如何生長？",
      "author": "Francie Alexander",
      "publisher": "Scholastic",
      "isbn": "978-0439693820",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 742,
      "stage": "KS1",
      "title": "How to Make a Feely Box",
      "ctitle": "如何製作觸摸盒",
      "author": "Jenny Alexander",
      "publisher": "Longman",
      "isbn": "978-0582422735",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 743,
      "stage": "KS1",
      "title": "I am Fire",
      "ctitle": "我是火",
      "author": "Jean Marzollo",
      "publisher": "Scholastic",
      "isbn": "978-0590847780",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 744,
      "stage": "KS1",
      "title": "I Can Handle Special Occasions \n(Mindful Mantras) (Volume 3)",
      "ctitle": "我能處理特殊場合\n（正念咒語）（第3卷）",
      "author": "Laurie Wright",
      "publisher": "Laurie Wright",
      "isbn": "978-0995847330",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 745,
      "stage": "KS1",
      "title": "I Feel Bullied",
      "ctitle": "我感到被霸凌",
      "author": "Jen Green",
      "publisher": "Wayland",
      "isbn": "978-0750225762",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 746,
      "stage": "KS1",
      "title": "I Hate to be Sick",
      "ctitle": "我討厭生病",
      "author": "Aamir Bermiss",
      "publisher": "Teaching Resources",
      "isbn": "978-0439568777",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 747,
      "stage": "KS1",
      "title": "I Like Books",
      "ctitle": "我喜歡書本",
      "author": "Anthony Browne",
      "publisher": "Walker Books",
      "isbn": "978-0744598575",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 748,
      "stage": "KS1",
      "title": "I Love Mud and Mud Loves me",
      "ctitle": "我愛泥巴，泥巴愛我",
      "author": "Vicki Stephens",
      "publisher": "Scholastic",
      "isbn": "978-0590273817",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 749,
      "stage": "KS1",
      "title": "I Love My Family",
      "ctitle": "我愛我的家人",
      "author": "Kathleen Beal",
      "publisher": "Addison-Wesley",
      "isbn": "978-0201522020\nBig Book:\n978-0613935388",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 750,
      "stage": "KS1",
      "title": "I Spy",
      "ctitle": "我偵探",
      "author": "Caitlin Haynes",
      "publisher": "Random House",
      "isbn": "978-0679849797",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 751,
      "stage": "KS1",
      "title": "I Spy Spooky Night - A Book of Picture Riddles",
      "ctitle": "我偵探：恐怖之夜 - 圖片謎語書",
      "author": "Jean Marzollo",
      "publisher": "Scholastic",
      "isbn": "978-0590481373",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 752,
      "stage": "KS1",
      "title": "I Want a Hat Like That",
      "ctitle": "我想要一頂那樣的帽子",
      "author": "Tom Cooke",
      "publisher": "Random House",
      "isbn": "978-0375804380",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 753,
      "stage": "KS1",
      "title": "I'm Shy",
      "ctitle": "我很害羞",
      "author": "Karen Bryant-Mole",
      "publisher": "Wayland",
      "isbn": "978-0750223959",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 754,
      "stage": "KS1",
      "title": "In the Morning",
      "ctitle": "在早晨",
      "author": "Beverley Randell",
      "publisher": "Nelson Cengage",
      "isbn": "978-0170403511",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 755,
      "stage": "KS1",
      "title": "Is It Alive?",
      "ctitle": "它是活的嗎？",
      "author": "Kimberlee Graves",
      "publisher": "Creative Teaching Press",
      "isbn": "978-0916119256",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 756,
      "stage": "KS1",
      "title": "It's Not Easy Being Big!",
      "ctitle": "長大不容易！",
      "author": "Stephanie St. Pierre",
      "publisher": "Random House",
      "isbn": "978-0679888109",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 757,
      "stage": "KS1",
      "title": "James the Dacing Dog",
      "ctitle": "跳舞的狗詹姆斯",
      "author": "Linda Maybarduk",
      "publisher": "Tundra Books",
      "isbn": "978-0887766190",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 758,
      "stage": "KS1",
      "title": "Joseph and His Coat of Many Colours",
      "ctitle": "約瑟和他的彩衣",
      "author": "Sue Kassirer",
      "publisher": "Aladdin",
      "isbn": "978-0689812262",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 759,
      "stage": "KS1",
      "title": "Joseph Had a Little Overcoat",
      "ctitle": "約瑟有一件小外套",
      "author": "Simms Taback",
      "publisher": "Scholastic",
      "isbn": "978-0439217316",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 760,
      "stage": "KS1",
      "title": "Just Enough Carrots",
      "ctitle": "剛好夠的胡蘿蔔",
      "author": "Stuart Murphy",
      "publisher": "HarperCollins",
      "isbn": "978-0064467117",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 761,
      "stage": "KS1",
      "title": "Kipper's Birthday",
      "ctitle": "基珀的生日",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0199440221",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 762,
      "stage": "KS1",
      "title": "Knock Knock Who's There?",
      "ctitle": "敲敲門，誰在那裡？",
      "author": "Sally Grindley & Anthony Browne",
      "publisher": "Puffin",
      "isbn": "978-0141331607",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 763,
      "stage": "KS1",
      "title": "Let's Talk about Feeling Sad",
      "ctitle": "讓我們談談感到悲傷",
      "author": "Joy Berry",
      "publisher": "Scholastic",
      "isbn": "978-1605772066",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 764,
      "stage": "KS1",
      "title": "Life on Mars",
      "ctitle": "火星上的生命",
      "author": "Mary Kay Carson",
      "publisher": "Scholastic",
      "isbn": "978-0545935487",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 765,
      "stage": "KS1",
      "title": "Liang and the Magic Paintbrush",
      "ctitle": "梁和神筆",
      "author": "Demi",
      "publisher": "Henry Holt & Company Inc.",
      "isbn": "978-0805008012",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": true,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 766,
      "stage": "KS1",
      "title": "Lions",
      "ctitle": "獅子",
      "author": "Barbara Swett Burt",
      "publisher": "Steck-Vaughn",
      "isbn": "978-0817272678",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 767,
      "stage": "KS1",
      "title": "Listen to Me",
      "ctitle": "聽我說",
      "author": "Barbara J. Neasi",
      "publisher": "Children's Press",
      "isbn": "978-0516221540",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 768,
      "stage": "KS1",
      "title": "Little Cloud",
      "ctitle": "小雲朵",
      "author": "Eric Carle",
      "publisher": "Philomel",
      "isbn": "978-0399231919",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 769,
      "stage": "KS1",
      "title": "Little Red Riding Hood",
      "ctitle": "小紅帽",
      "author": "Mandy Ross",
      "publisher": "Ladybird",
      "isbn": "978-1409306313",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 770,
      "stage": "KS1",
      "title": "Little Soccer (Little Sports)",
      "ctitle": "小足球（小運動）",
      "author": "Brad Herzog",
      "publisher": "Sleeping Bear Press",
      "isbn": "978-1585361977",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 771,
      "stage": "KS1",
      "title": "Living Together",
      "ctitle": "一起生活",
      "author": "Jo Windsor",
      "publisher": "Rigby",
      "isbn": "978-0763558895",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 772,
      "stage": "KS1",
      "title": "Look Out for Rosy!",
      "ctitle": "小心羅西！",
      "author": "Bob Graham",
      "publisher": "Zero to Ten",
      "isbn": "978-1840891300",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 773,
      "stage": "KS1",
      "title": "Lots of Hearts",
      "ctitle": "很多愛心",
      "author": "Maryann Cocca-Leffler",
      "publisher": "Grosset & Dunlap",
      "isbn": "978-0448413044",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 774,
      "stage": "KS1",
      "title": "Love, Hugs, and Hope: When Scary Things Happen",
      "ctitle": "愛、擁抱和希望：當可怕的事情發生時",
      "author": "Christy Monson",
      "publisher": "Familius",
      "isbn": "978-1938301605",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 775,
      "stage": "KS1",
      "title": "Make an Egg Card",
      "ctitle": "做一張蛋卡",
      "author": "Catherine Baker",
      "publisher": "Heinemann Secondary Education",
      "isbn": "978-0433004714",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 776,
      "stage": "KS1",
      "title": "Make Colours",
      "ctitle": "調色",
      "author": "Gill Budgell",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521774642",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 777,
      "stage": "KS1",
      "title": "Making a Plate",
      "ctitle": "做盤子",
      "author": "Jennifer Jacobson",
      "publisher": "Silver Burdett Ginn",
      "isbn": "978-0663617296",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 778,
      "stage": "KS1",
      "title": "Mind Your Manners On Vacation",
      "ctitle": "度假時要注意禮貌",
      "author": "Nuria Roca",
      "publisher": "Active Minds Ltd.",
      "isbn": "978-9888155583",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 779,
      "stage": "KS1",
      "title": "Minnie and Me - What Will I Wear?",
      "ctitle": "米妮和我 - 我要穿什麼？",
      "author": "Lyn Calder",
      "publisher": "Golden Press",
      "isbn": "978-0307115843",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 780,
      "stage": "KS1",
      "title": "Miss Nelson Is Missing!",
      "ctitle": "尼爾森老師不見了！",
      "author": "Harry Allard",
      "publisher": "HMH Books for Young Reader",
      "isbn": "978-0395401460",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 781,
      "stage": "KS1",
      "title": "Morris’s Disappearing Bag",
      "ctitle": "莫里斯的消失袋",
      "author": "Rosemary Wells",
      "publisher": "Puffin",
      "isbn": "978-0142300046",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 782,
      "stage": "KS1",
      "title": "Mother Goose's Action Rhymes",
      "ctitle": "鵝媽媽的動作韻律詩",
      "author": "Illustrated by Axel Scheffler",
      "publisher": "Macmillan Children's Books",
      "isbn": "978-1509820641",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 783,
      "stage": "KS1",
      "title": "Move Your Body!: My Exercise Tips",
      "ctitle": "動起來！：我的運動小貼士",
      "author": "Gina Bellisario",
      "publisher": "Millbrook Press",
      "isbn": "9781467723954",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 784,
      "stage": "KS1",
      "title": "My Brother, Ant",
      "ctitle": "我的兄弟，螞蟻",
      "author": "Betsy Byars",
      "publisher": "Puffin",
      "isbn": "978-0140383454",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 785,
      "stage": "KS1",
      "title": "My dad can't dance",
      "ctitle": "我爸爸不會跳舞",
      "author": "Lorraine Horsley",
      "publisher": "Ladybird",
      "isbn": "978-0721418902",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 786,
      "stage": "KS1",
      "title": "My Dog's Party",
      "ctitle": "我狗狗的派對",
      "author": "Bill Gillham",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521006545",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 787,
      "stage": "KS1",
      "title": "My Dog's the Best!",
      "ctitle": "我的狗狗最棒！",
      "author": "Stephanie Calmenson",
      "publisher": "Cartwheel",
      "isbn": "978-0590330725",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 788,
      "stage": "KS1",
      "title": "My Fish Does Not Chirp",
      "ctitle": "我的魚不會吱吱叫",
      "author": "Anne Tyler",
      "publisher": "Modern Curriculum Press",
      "isbn": "978-0813620435",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 789,
      "stage": "KS1",
      "title": "My Friends",
      "ctitle": "我的朋友們",
      "author": "Taro Gomi",
      "publisher": "Chronicle Books",
      "isbn": "978-0811812375\nBig Book:\n978-0590623124",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 790,
      "stage": "KS1",
      "title": "My Global Address",
      "ctitle": "我的全球地址",
      "author": "Tamara Nunn",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574711325",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 791,
      "stage": "KS1",
      "title": "My Mouth Is A Volcano",
      "ctitle": "我的嘴巴是火山",
      "author": "Julia Cook",
      "publisher": "Natl Center for Youth Issues",
      "isbn": "978-1931636858",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 792,
      "stage": "KS1",
      "title": "My Senses",
      "ctitle": "我的感官",
      "author": "Mike Herschell",
      "publisher": "Evans Brothers",
      "isbn": "978-0237514129",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 793,
      "stage": "KS1",
      "title": "National Geographic Kids Readers: Storm",
      "ctitle": "國家地理兒童讀物：風暴",
      "author": "Miriam Busch Goin",
      "publisher": "National Geographic Children's Books",
      "isbn": "978-1426303944",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 794,
      "stage": "KS1",
      "title": "National Geographic Kids Readers: Winter Wonderland",
      "ctitle": "國家地理兒童讀物：冬季仙境",
      "author": "Jill Esbaum",
      "publisher": "National Geographic Children's Books",
      "isbn": "978-1426307140",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 795,
      "stage": "KS1",
      "title": "Noah's Ark",
      "ctitle": "諾亞方舟",
      "author": "Linda Hayward",
      "publisher": "Random House",
      "isbn": "978-0394987163",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 796,
      "stage": "KS1",
      "title": "Noisy Farm",
      "ctitle": "吵鬧的農場",
      "author": "Rod Campbell",
      "publisher": "Penguin Group",
      "isbn": "978-0140502930",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 797,
      "stage": "KS1",
      "title": "Not Now, Mrs. Wolf",
      "ctitle": "現在不行，狼太太",
      "author": "Shen Roddie",
      "publisher": "Dorling Kindersley",
      "isbn": "978-0751372434",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 798,
      "stage": "KS1",
      "title": "Number Poems",
      "ctitle": "數字詩",
      "author": "John Foster",
      "publisher": "Oxford University Press",
      "isbn": "978-1596465923",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 799,
      "stage": "KS1",
      "title": "Numbers All around Me",
      "ctitle": "我身邊的數字",
      "author": "Trisha Callella-Jones",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574713770",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 800,
      "stage": "KS1",
      "title": "Odd Boy Out: Young Albert Einstein",
      "ctitle": "古怪男孩：年輕的愛因斯坦",
      "author": "Don Brown",
      "publisher": "Houghton Mifflin",
      "isbn": "978-0547014357",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 801,
      "stage": "KS1",
      "title": "Oh No Anna!",
      "ctitle": "哦不，安娜！",
      "author": "Vivian French",
      "publisher": "Levinson Books",
      "isbn": "978-1899607617",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 802,
      "stage": "KS1",
      "title": "One Teddy All Alone",
      "ctitle": "孤獨的泰迪熊",
      "author": "Rosemary Davidson",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521476287",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 803,
      "stage": "KS1",
      "title": "Our Favourite Rhymes",
      "ctitle": "我們最喜歡的韻律詩",
      "author": "David McKee",
      "publisher": "Longman",
      "isbn": "978-0582335950",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 804,
      "stage": "KS1",
      "title": "Our Skeleton",
      "ctitle": "我們的骨架",
      "author": "Susan Thames",
      "publisher": "Rourke Publishing",
      "isbn": "978-1600446757",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 805,
      "stage": "KS1",
      "title": "Paint a Sun in the Sky",
      "ctitle": "在天空中畫太陽",
      "author": "Claire Llewellyn",
      "publisher": "Picture Window Books",
      "isbn": "978-1404806597",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 806,
      "stage": "KS1",
      "title": "Pass it, Polly",
      "ctitle": "傳球，波莉",
      "author": "Sarah Garland",
      "publisher": "Frances Lincoln Children's Books",
      "isbn": "978-1847800282",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": true
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 807,
      "stage": "KS1",
      "title": "Picky Nicky: The Nutrition \nDecision. Kids, You Are What \nYou Eat! (Volume 1)",
      "ctitle": "挑剔的尼基：營養決定。孩子們，你吃什麼就是什麼！（第一卷）",
      "author": "Christopher \nSilvestre",
      "publisher": "Touch N' Go \nMedia",
      "isbn": "9780692856741",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 808,
      "stage": "KS1",
      "title": "Piggybook",
      "ctitle": "豬書",
      "author": "Anthony Browne",
      "publisher": "Walker Book Ltd.",
      "isbn": "978-1406313284",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 809,
      "stage": "KS1",
      "title": "Pig's Eggs",
      "ctitle": "豬的蛋",
      "author": "Elizabeth Partridge",
      "publisher": "Golden Books",
      "isbn": "978-0307102324",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 810,
      "stage": "KS1",
      "title": "Pip's Thank You Letter",
      "ctitle": "皮普的感謝信",
      "author": "Jenny Alexander",
      "publisher": "Longman",
      "isbn": "978-0582423046",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 811,
      "stage": "KS1",
      "title": "Planet Ocky Ham and Jam",
      "ctitle": "奧基火腿果醬星球",
      "author": "Tony Mitton",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521667012\nBig Book:\n978-0521667012",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 812,
      "stage": "KS1",
      "title": "Planets",
      "ctitle": "行星",
      "author": "Kim Jackson",
      "publisher": "Troll Communications",
      "isbn": "978-0816704514",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 813,
      "stage": "KS1",
      "title": "Planting a Rainbow",
      "ctitle": "種植彩虹",
      "author": "Lois Ehlert",
      "publisher": "Houghton Mifflin Harcourt",
      "isbn": "978-0152626105",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 814,
      "stage": "KS1",
      "title": "Pompeii ... Buried Alive!",
      "ctitle": "龐貝城...被活埋！",
      "author": "Edith Kunhardt",
      "publisher": "Random House",
      "isbn": "978-0394888668",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 815,
      "stage": "KS1",
      "title": "Pretty Good Magic",
      "ctitle": "相當不錯的魔法",
      "author": "Cathy East Dubowski & Mark Dubowski",
      "publisher": "Random House",
      "isbn": "978-0394890685",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 816,
      "stage": "KS1",
      "title": "Puppets around the World",
      "ctitle": "世界各地的木偶",
      "author": "Gina Nuttall",
      "publisher": "QED Publishing",
      "isbn": "978-1845380182",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 817,
      "stage": "KS1",
      "title": "Queenie the Bantam",
      "ctitle": "班塔姆雞皇后",
      "author": "Bob Graham",
      "publisher": "Walker Books",
      "isbn": "978-1406316483",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 818,
      "stage": "KS1",
      "title": "Quick, Quack, Quick!",
      "ctitle": "快，嘎嘎，快！",
      "author": "Marsha Arnold",
      "publisher": "Random House",
      "isbn": "978-0679872436",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 819,
      "stage": "KS1",
      "title": "Rainbows",
      "ctitle": "彩虹",
      "author": "Jill McDougall",
      "publisher": "Pearson Education Limited",
      "isbn": "978-0435168230",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 820,
      "stage": "KS1",
      "title": "Red Rockets and Rainbow Jelly",
      "ctitle": "紅色火箭和彩虹果凍",
      "author": "Sue Heap & Nick Sharratt",
      "publisher": "Puffin",
      "isbn": "978-0140567854",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 821,
      "stage": "KS1",
      "title": "Reduce, Reuse, Recycle",
      "ctitle": "減少、重複使用、回收",
      "author": "Rozanne Lanczak Williams",
      "publisher": "Creative Teaching Press",
      "isbn": "978-0916119300",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 822,
      "stage": "KS1",
      "title": "Rosie’s Walk",
      "ctitle": "羅西的散步",
      "author": "Pat Hutchins",
      "publisher": "Scholastic",
      "isbn": "978-0590412391",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 823,
      "stage": "KS1",
      "title": "Round is a Mooncake: A Book of Shapes",
      "ctitle": "圓形是月餅：形狀書",
      "author": "Roseanne Thong",
      "publisher": "Chronicle Books",
      "isbn": "978-0811826761",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 824,
      "stage": "KS1",
      "title": "Row Your Boat",
      "ctitle": "划你的船",
      "author": "Pippa Goodhart",
      "publisher": "Mammoth",
      "isbn": "978-0749731595",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 825,
      "stage": "KS1",
      "title": "Rude Ralph",
      "ctitle": "粗魯的拉爾夫",
      "author": "Justine Fontes",
      "publisher": "Scholastic",
      "isbn": "978-0531265291",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 826,
      "stage": "KS1",
      "title": "Samantha the Snob",
      "ctitle": "勢利的薩曼莎",
      "author": "Kathryn Cristaldi",
      "publisher": "Random House",
      "isbn": "978-0679871262",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 827,
      "stage": "KS1",
      "title": "Santa's New Sled",
      "ctitle": "聖誕老人的新雪橇",
      "author": "Sharon Peters",
      "publisher": "Troll Communications",
      "isbn": "978-0893755249\nBig Book:\n978-9993115335",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 828,
      "stage": "KS1",
      "title": "Seasons and Weather",
      "ctitle": "季節和天氣",
      "author": "David Evans &  Claudette Williams",
      "publisher": "Dorling Kindersley",
      "isbn": "978-0751350173",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 829,
      "stage": "KS1",
      "title": "Seeds Grow",
      "ctitle": "種子生長",
      "author": "Angela Shelf Medearis",
      "publisher": "Cartwheel",
      "isbn": "978-0590379748",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 830,
      "stage": "KS1",
      "title": "Seeing Things Up Close",
      "ctitle": "近距離觀察事物",
      "author": "Kate McGough",
      "publisher": "National Geographic",
      "isbn": "978-0792287117",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 831,
      "stage": "KS1",
      "title": "Shadow Play",
      "ctitle": "影子遊戲",
      "author": "Claire Llewellyn",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521774505",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 832,
      "stage": "KS1",
      "title": "Shapes",
      "ctitle": "形狀",
      "author": "Adria Klein",
      "publisher": "Dominie Press",
      "isbn": "978-1562702700",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 833,
      "stage": "KS1",
      "title": "Shark vs. Train",
      "ctitle": "鯊魚對火車",
      "author": "Chris Barton",
      "publisher": "Little, Brown Books for Young Readers",
      "isbn": "978-0316007627",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 834,
      "stage": "KS1",
      "title": "Shhh! Little Mouse",
      "ctitle": "噓！小老鼠",
      "author": "Pamela Allen",
      "publisher": "Puffin Books",
      "isbn": "978-0143503675",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 835,
      "stage": "KS1",
      "title": "Sink or Float?",
      "ctitle": "沉還是浮？",
      "author": "Kimberlee Graves",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574713091",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 836,
      "stage": "KS1",
      "title": "Snow",
      "ctitle": "雪",
      "author": "Nancy Wallace",
      "publisher": "Golden Books",
      "isbn": "978-0307102287",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 837,
      "stage": "KS1",
      "title": "So Many Me's",
      "ctitle": "這麼多個我",
      "author": "Barbara J. Neasi",
      "publisher": "Scholastic",
      "isbn": "978-0-531-26372-3",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 838,
      "stage": "KS1",
      "title": "Sound and Music",
      "ctitle": "聲音和音樂",
      "author": "David Evans & Claudette Williams",
      "publisher": "Dorling Kindersley",
      "isbn": "978-1564582065",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 839,
      "stage": "KS1",
      "title": "Sounds All Around",
      "ctitle": "周圍的聲音",
      "author": "Wendy Pfeffer",
      "publisher": "Harper Trophy",
      "isbn": "978-0062386694",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 840,
      "stage": "KS1",
      "title": "Spot's Walk in the Woods",
      "ctitle": "小波在森林裡散步",
      "author": "Eric Hill",
      "publisher": "Puffin",
      "isbn": "978-0140552744",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 841,
      "stage": "KS1",
      "title": "Spots!",
      "ctitle": "斑點！",
      "author": "Alex Brychta",
      "publisher": "Oxford University Press",
      "isbn": "978-0199162208",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 842,
      "stage": "KS1",
      "title": "Sun Snow Stars Sky",
      "ctitle": "太陽雪星星天空",
      "author": "Catherine & Laurence Anbolt",
      "publisher": "Heinemann Young Books",
      "isbn": "978-0749722913",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 843,
      "stage": "KS1",
      "title": "Sweet Potato Pie",
      "ctitle": "紅薯派",
      "author": "Anne Rockwell",
      "publisher": "Random House",
      "isbn": "978-0679864400",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 844,
      "stage": "KS1",
      "title": "Taking Care of Our World",
      "ctitle": "照顧我們的世界",
      "author": "Thelma Rea",
      "publisher": "Rosen Publishing Group",
      "isbn": "978-0823963683",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 845,
      "stage": "KS1",
      "title": "Tall and Small",
      "ctitle": "高和矮",
      "author": "Gina Erickson & Kelli Foster",
      "publisher": "Barron's Educational Series",
      "isbn": "978-0812018400",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 846,
      "stage": "KS1",
      "title": "Teddy at the Fair",
      "ctitle": "泰迪在集市",
      "author": "Jacqueline Wilson",
      "publisher": "Longman",
      "isbn": "978-0582120983",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 847,
      "stage": "KS1",
      "title": "Thanking the Moon: Celebrating the Mid-Autumn Moon Festival",
      "ctitle": "感謝月亮：慶祝中秋節",
      "author": "Grace Lin",
      "publisher": "Knopf Books for \nYoung Readers",
      "isbn": "978-0375861017",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 848,
      "stage": "KS1",
      "title": "The Bad, Good Manners Book",
      "ctitle": "壞的，好的禮貌書",
      "author": "Babette Cole",
      "publisher": "Puffin Books",
      "isbn": "978-0140554809",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 849,
      "stage": "KS1",
      "title": "The Bear's Lunch",
      "ctitle": "熊的午餐",
      "author": "Pamela Allen",
      "publisher": "Puffin Books",
      "isbn": "978-0140562415",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 850,
      "stage": "KS1",
      "title": "The Berenstain Bears Blaze a Trail",
      "ctitle": "貝倫斯坦熊開闢道路",
      "author": "Stan & Jan Berenstain",
      "publisher": "Random House",
      "isbn": "978-0394891323",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 851,
      "stage": "KS1",
      "title": "The Best Bug Parade",
      "ctitle": "最佳蟲蟲遊行",
      "author": "Stuart J. Murphy",
      "publisher": "Harper Trophy",
      "isbn": "978-0064467001",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 852,
      "stage": "KS1",
      "title": "The Best Little Monkeys in the World",
      "ctitle": "世界上最好的小猴子",
      "author": "Natalie Standiford",
      "publisher": "Random House",
      "isbn": "978-0394886169",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 853,
      "stage": "KS1",
      "title": "The Big Fat Cow that Goes Kapow!",
      "ctitle": "會發出砰聲的大肥牛！",
      "author": "Andy Griffiths and Terry Denton",
      "publisher": "Macmillan Children's Books",
      "isbn": "978-0330456371",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 854,
      "stage": "KS1",
      "title": "The Biggest Cookie in the World",
      "ctitle": "世界上最大的餅乾",
      "author": "Joseph Ewers",
      "publisher": "Random House",
      "isbn": "978-0679871460",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 855,
      "stage": "KS1",
      "title": "The Bike Lesson",
      "ctitle": "騎車課程",
      "author": "Stan & Jan Berenstain",
      "publisher": "Random House",
      "isbn": "978-0394800363",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 856,
      "stage": "KS1",
      "title": "The Blind Men and the Elephant",
      "ctitle": "盲人摸象",
      "author": "Karen Backstein",
      "publisher": "Scholastic",
      "isbn": "978-0590458139",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 857,
      "stage": "KS1",
      "title": "The Case of the Hungry Stranger",
      "ctitle": "飢餓陌生人的案件",
      "author": "Crosby Bonsall",
      "publisher": "Harper Trophy",
      "isbn": "978-0064440264",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 858,
      "stage": "KS1",
      "title": "The Case of the Missing Caterpillar",
      "ctitle": "失蹤毛毛蟲的案件",
      "author": "Sam Godwin",
      "publisher": "Hodder Wayland",
      "isbn": "978-0750026543",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 859,
      "stage": "KS1",
      "title": "The Cat in the Hat (50th Birthday Edition)",
      "ctitle": "戴帽子的貓（50週年紀念版）",
      "author": "Dr Seuss",
      "publisher": "Harper Collins",
      "isbn": "978-0007247912",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 860,
      "stage": "KS1",
      "title": "The Cat's Baton is Gone",
      "ctitle": "貓咪的指揮棒不見了",
      "author": "Scott Hennesy",
      "publisher": "Hyperion Book CH",
      "isbn": "978-1423145837",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": true,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 861,
      "stage": "KS1",
      "title": "The Chick and the Duckling",
      "ctitle": "小雞和小鴨",
      "author": "Mirra Ginsburg",
      "publisher": "Aladdin",
      "isbn": "978-0689712265",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 862,
      "stage": "KS1",
      "title": "The Chinese New Year",
      "ctitle": "中國新年",
      "author": "Joanna Troughton",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521752411",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 863,
      "stage": "KS1",
      "title": "The Chocolate Cake",
      "ctitle": "巧克力蛋糕",
      "author": "Dawn McMillan",
      "publisher": "Cengage Learning",
      "isbn": "978-0170098083",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 864,
      "stage": "KS1",
      "title": "The Clever Tortoise",
      "ctitle": "聰明的烏龜",
      "author": "Gerald Rose",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521628297",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 865,
      "stage": "KS1",
      "title": "The Day of the Bad Haircut",
      "ctitle": "糟糕髮型的那一天",
      "author": "Eva Moore",
      "publisher": "Scholastic",
      "isbn": "978-0590697705",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 866,
      "stage": "KS1",
      "title": "The Dragon Tree",
      "ctitle": "龍樹",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0193990548\nBig Book:\n978-0199188680",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 867,
      "stage": "KS1",
      "title": "The Drop Goes Plop",
      "ctitle": "水滴噗通一聲",
      "author": "Sam Godwin",
      "publisher": "Hodder Wayland",
      "isbn": "978-0750024952",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 868,
      "stage": "KS1",
      "title": "The Earth is like a Roundabout",
      "ctitle": "地球像個旋轉木馬",
      "author": "Claire Llewellyn",
      "publisher": "Picture Window Books",
      "isbn": "978-0750026451",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 869,
      "stage": "KS1",
      "title": "The Farmer and the Beet",
      "ctitle": "農夫和甜菜",
      "author": "Judith Bittinger",
      "publisher": "Addison-Wesley",
      "isbn": "978-0201193831\nBig Book:\n978-0201193183",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 870,
      "stage": "KS1",
      "title": "The Foot Book",
      "ctitle": "腳丫書",
      "author": "Dr. Seuss",
      "publisher": "Random House",
      "isbn": "978-0679882800",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 871,
      "stage": "KS1",
      "title": "The Four Elements: Air",
      "ctitle": "四大元素：空氣",
      "author": "Maria Rius & J.M. Parramon",
      "publisher": "Barron's Educational Series",
      "isbn": "978-0812035971",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 872,
      "stage": "KS1",
      "title": "The Four Seasons: Summer",
      "ctitle": "四季：夏天",
      "author": "Maria Rius",
      "publisher": "Barron Juveniles",
      "isbn": "978-0764105562",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 873,
      "stage": "KS1",
      "title": "The Ginger Bread Man",
      "ctitle": "薑餅人",
      "author": "Judith M. Bittinger",
      "publisher": "Addison-Wesley",
      "isbn": "978-0201190540\nBig Book:\n978-0732722876",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 874,
      "stage": "KS1",
      "title": "The Go-Kart",
      "ctitle": "卡丁車",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0198450559\nBig Book:\n978-0195921335",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 875,
      "stage": "KS1",
      "title": "The Great Race : The Story of the \nChinese Zodiac",
      "ctitle": "大賽跑：十二生肖的故事",
      "author": "Dawn Casey",
      "publisher": "Barefoot Books",
      "isbn": "9781846862021",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": true,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": true,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 876,
      "stage": "KS1",
      "title": "The Hans Christian Andersen's Little Mermaid",
      "ctitle": "安徒生的小美人魚",
      "author": "Deborah Hautzig",
      "publisher": "Random House",
      "isbn": "978-0679822417",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 877,
      "stage": "KS1",
      "title": "The Hare and the Tortoise",
      "ctitle": "兔子和烏龜",
      "author": "John Sandford",
      "publisher": "Addison-Wesley",
      "isbn": "978-0201193244\nBig Book:\n978-0732743178",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 878,
      "stage": "KS1",
      "title": "The Itsy Bitsy Spider",
      "ctitle": "小蜘蛛",
      "author": "Iza Trapani",
      "publisher": "Charlesbridge",
      "isbn": "978-1580891004\nBig Book:\n978-0590068314",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 879,
      "stage": "KS1",
      "title": "The Joke Book",
      "ctitle": "笑話書",
      "author": "Roy McKie",
      "publisher": "Random House",
      "isbn": "978-0394840772",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 880,
      "stage": "KS1",
      "title": "The Kidnappers",
      "ctitle": "綁匪",
      "author": "Roderick Hunt",
      "publisher": "Oxford University Press",
      "isbn": "978-0198483342",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 881,
      "stage": "KS1",
      "title": "The Lion and the Mouse",
      "ctitle": "獅子和老鼠",
      "author": "Aesop",
      "publisher": "Troll Communications",
      "isbn": "978-0893754662\nBig Book:\n978-1478806943",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 882,
      "stage": "KS1",
      "title": "The Little Ant",
      "ctitle": "小螞蟻",
      "author": "Judith Bittinger",
      "publisher": "Addison-Wesley",
      "isbn": "978-0201853490",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 883,
      "stage": "KS1",
      "title": "The Little Mouse, the Red Ripe Strawberry and the Big Hungry Bear",
      "ctitle": "小老鼠、紅草莓和大餓熊",
      "author": "Don Audrey Wood",
      "publisher": "Child's Play Intl Ltd",
      "isbn": "978-0859533300",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 884,
      "stage": "KS1",
      "title": "The Magic Fan",
      "ctitle": "魔法扇子",
      "author": "Keith Baker",
      "publisher": "HMH Books for Young Readers",
      "isbn": "978-0152009830",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 885,
      "stage": "KS1",
      "title": "The Magic Porridge Pot",
      "ctitle": "魔法粥鍋",
      "author": "Alan McDonald",
      "publisher": "Ladybird",
      "isbn": "978-1409309543",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 886,
      "stage": "KS1",
      "title": "The Magic School Bus: Liz Takes Flight",
      "ctitle": "魔法校車：麗茲飛起來",
      "author": "Tracey West",
      "publisher": "Scholastic Inc.",
      "isbn": "978-0439082075",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 887,
      "stage": "KS1",
      "title": "The Magic School Bus: Plants Seeds",
      "ctitle": "魔法校車：種植種子",
      "author": "Joanna Cole",
      "publisher": "Scholastic Inc.",
      "isbn": "978-0590222969",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 888,
      "stage": "KS1",
      "title": "The Moons of Jupiter",
      "ctitle": "木星的衛星",
      "author": "Sarah Fleming",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521787666",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 889,
      "stage": "KS1",
      "title": "The Most Magnificent Thing",
      "ctitle": "最了不起的東西",
      "author": "Ashley Spires",
      "publisher": "Kids Can Press",
      "isbn": "978-1554537044",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 890,
      "stage": "KS1",
      "title": "The Pigeon HAS to Go to School",
      "ctitle": "鴿子必須上學",
      "author": "Mo Willems",
      "publisher": "Hyperion Books for Children",
      "isbn": "978-1368046459",
      "modules": {
        "A": false,
        "B": true,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 891,
      "stage": "KS1",
      "title": "The Ravenous Beast",
      "ctitle": "貪婪的野獸",
      "author": "Niamh Sharkey",
      "publisher": "Walker Books",
      "isbn": "978-0763621827",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 892,
      "stage": "KS1",
      "title": "The Rock Pools",
      "ctitle": "岩石池",
      "author": "Annette Smith",
      "publisher": "Nelson Price Milburn",
      "isbn": "978-0170133616",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 893,
      "stage": "KS1",
      "title": "The Rough Patch",
      "ctitle": "艱難時期",
      "author": "Brian Lies",
      "publisher": "Greenwillow Books",
      "isbn": "978-0062671271",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 894,
      "stage": "KS1",
      "title": "The Shortest Kid in the World",
      "ctitle": "世界上最矮的孩子",
      "author": "Corinne Demas Bliss",
      "publisher": "Random House",
      "isbn": "978-0679858096",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 895,
      "stage": "KS1",
      "title": "The Snowman",
      "ctitle": "雪人",
      "author": "Raymond Briggs",
      "publisher": "Ladybird",
      "isbn": "978-0721418636",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 896,
      "stage": "KS1",
      "title": "The Statue of Liberty",
      "ctitle": "自由女神像",
      "author": "Lucille Recht Penner",
      "publisher": "Random House",
      "isbn": "978-0679869283",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 897,
      "stage": "KS1",
      "title": "The Teacher",
      "ctitle": "老師",
      "author": "Jenny Giles",
      "publisher": "Rigby Reading",
      "isbn": "978-0763526870",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 898,
      "stage": "KS1",
      "title": "The Three Little Pigs",
      "ctitle": "三隻小豬",
      "author": "Walker",
      "publisher": "Pearson Education",
      "isbn": "978-0201190588 \nBig Book:\n978-0547518787",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 899,
      "stage": "KS1",
      "title": "The Time Song",
      "ctitle": "時間之歌",
      "author": "Rozanne Lanczak Williams",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574710045",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 900,
      "stage": "KS1",
      "title": "The Titanic Lost ... and Found",
      "ctitle": "泰坦尼克號失蹤...與發現",
      "author": "Judy Donnelly",
      "publisher": "Random House",
      "isbn": "978-0394886695",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 901,
      "stage": "KS1",
      "title": "The Tooth Fairy",
      "ctitle": "牙仙子",
      "author": "Sharon Peters",
      "publisher": "Troll Communications",
      "isbn": "978-0893755201",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 902,
      "stage": "KS1",
      "title": "The Trouble with Tadpoles",
      "ctitle": "蝌蚪的麻煩",
      "author": "Sam Godwin",
      "publisher": "Hodder Wayland",
      "isbn": "978-0750026550",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 903,
      "stage": "KS1",
      "title": "The Ugly Duckling",
      "ctitle": "醜小鴨",
      "author": "Hans Christian Andersen",
      "publisher": "Ladybird",
      "isbn": "978-0721419695",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 904,
      "stage": "KS1",
      "title": "The Usborne Nursery Rhyme Songbook",
      "ctitle": "Usborne童謠歌本",
      "author": "Caroline Hooper",
      "publisher": "Usborne",
      "isbn": "978-0746028629",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 905,
      "stage": "KS1",
      "title": "The Very Hungry Caterpillar",
      "ctitle": "好餓的毛毛蟲",
      "author": "Eric Carle",
      "publisher": "Scholastic",
      "isbn": "978-0590030298",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 906,
      "stage": "KS1",
      "title": "The Witch Next Door",
      "ctitle": "隔壁的巫婆",
      "author": "Norman Bridwell",
      "publisher": "Scholastic",
      "isbn": "978-0590404334",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 907,
      "stage": "KS1",
      "title": "There's Something In the Water! Marine Biology for Kids",
      "ctitle": "水裡有東西！兒童海洋生物學",
      "author": "Baby Professor",
      "publisher": "Speedy Publishing",
      "isbn": "978-1541911017",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 908,
      "stage": "KS1",
      "title": "This is Our House",
      "ctitle": "這是我們的房子",
      "author": "Michael Rosen",
      "publisher": "Candlewick",
      "isbn": "978-0763602901",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 909,
      "stage": "KS1",
      "title": "Tick-Tock",
      "ctitle": "滴答滴答",
      "author": "James Dunbar",
      "publisher": "Franklin Watts",
      "isbn": "978-0749627539",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": true,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 910,
      "stage": "KS1",
      "title": "Tight Times",
      "ctitle": "緊縮時期",
      "author": "Barbara Shook Hazen",
      "publisher": "Puffin",
      "isbn": "978-0140504422",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 911,
      "stage": "KS1",
      "title": "Tom the TV Cat",
      "ctitle": "電視貓湯姆",
      "author": "Joan Heilbroner",
      "publisher": "Random House",
      "isbn": "978-0394867083",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 912,
      "stage": "KS1",
      "title": "Too Much Rain",
      "ctitle": "雨太多了",
      "author": "Fran Manushkin",
      "publisher": "Picture Window Books",
      "isbn": "9781404854949",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 913,
      "stage": "KS1",
      "title": "Touch",
      "ctitle": "觸摸",
      "author": "Mandy Suhr",
      "publisher": "Wayland",
      "isbn": "978-0750252768",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": true,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 914,
      "stage": "KS1",
      "title": "Tulips for Dad",
      "ctitle": "給爸爸的鬱金香",
      "author": "Richard Brown",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521468534",
      "modules": {
        "A": true,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 915,
      "stage": "KS1",
      "title": "Twenty-one Elephants and Still Standing",
      "ctitle": "二十一頭大象依然屹立",
      "author": "April Jones Prince",
      "publisher": "HMH Books for Young Readers",
      "isbn": "978-0618448876",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": true,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 916,
      "stage": "KS1",
      "title": "Twinkle, Twinkle, Little Bug",
      "ctitle": "閃爍，閃爍，小蟲蟲",
      "author": "Katharine Ross",
      "publisher": "Random House",
      "isbn": "978-0679876663",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 917,
      "stage": "KS1",
      "title": "Up Went Edmond: Emergent",
      "ctitle": "愛德蒙飛起來：初級",
      "author": "Diana Noonan",
      "publisher": "Celebration Pr",
      "isbn": "978-0673581853",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 918,
      "stage": "KS1",
      "title": "Walt Disney: Winnie the Pooh and the Very Big Bear",
      "ctitle": "華特迪士尼：小熊維尼和大熊",
      "author": "Bill Langley",
      "publisher": "Golden Press",
      "isbn": "978-0307115935",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 919,
      "stage": "KS1",
      "title": "Watch Your Step, Mr. Rabbit!",
      "ctitle": "小心腳步，兔子先生！",
      "author": "Richard Scarry",
      "publisher": "Random House",
      "isbn": "978-0679886501",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": true,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 920,
      "stage": "KS1",
      "title": "We Go Out",
      "ctitle": "我們出去",
      "author": "Beverly Randell, Jenny Giles & Annette Smith",
      "publisher": "Nelson Price Milburn",
      "isbn": "978-0763541453",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 921,
      "stage": "KS1",
      "title": "Weather at Your Fingertips",
      "ctitle": "指尖上的天氣",
      "author": "Judy Nayer",
      "publisher": "McClanahan Book Company",
      "isbn": "978-0768101027",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 922,
      "stage": "KS1",
      "title": "We're Different, We're the Same",
      "ctitle": "我們不同，我們相同",
      "author": "Bobbi Jane Kates",
      "publisher": "Random House",
      "isbn": "978-0679832270",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": true,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 923,
      "stage": "KS1",
      "title": "We're Going on a Bear Hunt",
      "ctitle": "我們要去獵熊",
      "author": "Helen Oxenbury & Michael Rosen",
      "publisher": "Little Simon",
      "isbn": "978-0689815812",
      "modules": {
        "A": true,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 924,
      "stage": "KS1",
      "title": "What Do We Need?",
      "ctitle": "我們需要什麼？",
      "author": "Trisha Callella",
      "publisher": "Creative Teaching Press",
      "isbn": "978-1574711295",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 925,
      "stage": "KS1",
      "title": "What's the Time, Mr Wolf?",
      "ctitle": "幾點了，狼先生？",
      "author": "Gill Budgell & Kate Ruttle",
      "publisher": "Cambridge University Press",
      "isbn": "978-0521002103",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": true,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": true,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 926,
      "stage": "KS1",
      "title": "When I Was Young in the Mountain",
      "ctitle": "當我在山裡年輕時",
      "author": "Cynthia Rylant",
      "publisher": "Dutton",
      "isbn": "978-0525425250",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 927,
      "stage": "KS1",
      "title": "When the TV Broke",
      "ctitle": "當電視壞了",
      "author": "Harriet Ziefert",
      "publisher": "Puffin",
      "isbn": "978-0140509847",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 928,
      "stage": "KS1",
      "title": "Where Are You, Little Lamb?",
      "ctitle": "你在哪裡，小羊？",
      "author": "Hiawyn Oram",
      "publisher": "Picture Lions",
      "isbn": "978-0006646778",
      "modules": {
        "A": false,
        "B": false,
        "C": true,
        "D": true,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 929,
      "stage": "KS1",
      "title": "Where Do Polar Bears Live?",
      "ctitle": "北極熊住在哪裡？",
      "author": "Sarah Thomson",
      "publisher": "HarperCollins Publishers",
      "isbn": "978-0061575174",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": false,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Non-fiction"
    },
    {
      "id": 930,
      "stage": "KS1",
      "title": "Where Is the Treasure?",
      "ctitle": "寶藏在哪裡？",
      "author": "Gina Erickson & Kelli Foster",
      "publisher": "Barron's Juveniles",
      "isbn": "978-0812010985",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": true,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false
      },
      "category": "Fiction"
    },
    {
      "id": 931,
      "stage": "KS1",
      "title": "Who Sank the Boat",
      "ctitle": "誰弄沉了船",
      "author": "Pamela Allen",
      "publisher": "Putnam Publishing Group",
      "isbn": "978-0698113732",
      "modules": {
        "A": true,
        "B": false,
        "C": true,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 932,
      "stage": "KS1",
      "title": "Who Will Play with Me?",
      "ctitle": "誰會和我玩？",
      "author": "Michele Coxon",
      "publisher": "Koala Books",
      "isbn": "978-0864614322",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    },
    {
      "id": 933,
      "stage": "KS1",
      "title": "Why Should I Recycle?",
      "ctitle": "為什麼我應該回收？",
      "author": "Jen Green",
      "publisher": "Barron's Educational Series",
      "isbn": "9780764131554",
      "modules": {
        "A": false,
        "B": true,
        "C": false,
        "D": false,
        "E": false,
        "F": false
      },
      "klas": {
        "1": false,
        "2": false,
        "3": true,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": true,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Non-fiction"
    },
    {
      "id": 934,
      "stage": "KS1",
      "title": "Willy the Dreamer",
      "ctitle": "夢想家威利",
      "author": "Anthony Browne",
      "publisher": "Candlewick",
      "isbn": "978-0763618834",
      "modules": {
        "A": false,
        "B": false,
        "C": false,
        "D": false,
        "E": false,
        "F": true
      },
      "klas": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": true,
        "6": false,
        "7": false
      },
      "aims": {
        "a": false,
        "b": false,
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": true
      },
      "category": "Fiction"
    }
  ];

// Helper functions to get books by stage
function getKS1Books() {
  return allBooks.filter(book => book.stage === "KS1");
}

function getKS2Books() {
  return allBooks.filter(book => book.stage === "KS2");
}

function getKS3Books() {
  return allBooks.filter(book => book.stage === "KS3");
}

function getKS4Books() {
  return allBooks.filter(book => book.stage === "KS4");
}

// Get book counts
const ks1Count = getKS1Books().length;
const ks2Count = getKS2Books().length;
const ks3Count = getKS3Books().length;
const ks4Count = getKS4Books().length;
