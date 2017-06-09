map = [
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwtuuuuuuuuywwwww",
    "wwwwwlgTgggggTrwwwww",
    "wwwwwlggpggTggrwwwww",
    "wwwwwlggTggggTrwwwww",
    "wwwwwlggggTgggrwwwww",
    "wwwwwlTgggggTgrwwwww",
    "wwwwwlggggTgggrwwwww",
    "wwwwwlggTgggTgrwwwww",
    "wwwwwlgTggggggrwwwww",
    "wwwwwbddddddddiwwwww",
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwwwwwwwwwwwwwwww",
    "wwwwwwwwwwwwwwwwwwww",
]

function getSectionFromMap(map) {
    for (var i = 0; i != maps.length; i++) {
        if (maps[i][1] == map) {
            return maps[i];
        }
    }
    return null;
}

function getSectionFromKey(key) {
    for (var i = 0; i != maps.length; i++) {
        if (maps[i][0][0] == key) {
            return maps[i];
        }
    }
    return null;
}

var maps = [
    [
        [
            " ", //key
            "", //top
            "", //left
            "", //top to end
            "" //left to end
        ],
        [[""]]
    ],
    [
        [
            "w", //key
            "wbd", //top
            "wry", //left
            "wdbi", //top to end
            "wryi" //left to end
        ],
        [
            [
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
            ],
            [
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwtuywwwww",
                "wwlggywwww",
                "wwbggrwwww",
                "wwwbdiwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
                "wwwwwwwwww",
            ]
        ]
    ],
    [
        [
            "g", //key
            "guGa", //top
            "glGc" //left
        ],
        [
            [
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
            ],
            [
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
            ],
            [
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "ggddddgggg",
                "grwwwwbggg",
                "ggywwwwlgg",
                "gggywtuggg",
                "gggguggggg",
                "gggggggggg",
            ]
        ]
    ],
    [
        [
            "l", //key
            "ltce", //top
            "w" //left
        ],
        [
            [
                "bggggggggg",
                "wbdggggggg",
                "wwwlgggggg",
                "wwwlgggggg",
                "wwtggggggg",
                "wtgggggggg",
                "tggggggggg",
                "lggggggggg",
                "lggggggggg",
                "lggggggggg",
            ],
            [
                "bdgggggggg",
                "wwbggggggg",
                "wwwbddgggg",
                "wwwwwwlggg",
                "wwwwwwlggg",
                "wwwwwwlggg",
                "wwtuuugggg",
                "wwlggggggg",
                "tugggggggg",
                "lggggggggg",
            ]
        ]
    ],
    [
        [
            "u", //key
            "w", //top
            "utae" //left
        ],
        [
            [
                "uuuywtuuuu",
                "gggguggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
            ],
            [
                "uuywwwwwwt",
                "ggguywwtug",
                "ggggrwwlgg",
                "ggggguuggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
            ]
        ]
    ],
    [
        [
            "t", //key
            "", //top
            "" //left
        ],
        [
            [
                "wwwwwtuuuu",
                "wwwwwlgggg",
                "wwwwwlgggg",
                "wwwtuggggg",
                "wwwlgggggg",
                "tuuggggggg",
                "lggggggggg",
                "lggggggggg",
                "lggggpgggg",
                "lggggggggg",
            ],
            [
                "wwwwwtuuuu",
                "wwwtuggggg",
                "wwwlgggggg",
                "wwwlgggggg",
                "tuuggggggg",
                "lgggggpggg",
                "lggggggggg",
                "lggggggggg",
                "lggggggggg",
                "lggggggggg",
            ]
        ]
    ],
    [
        [
            "r", //key
            "ry", //top
            "g", //left
            "yr", //top to end
            "gcl" //left to end
        ],
        [
            [
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "ggggggggdi",
                "gggggggrww",
                "gggggggguy",
                "gggggggggr",
                "gggggggggr",
            ],
            [
                "gggggggggi",
                "ggggggddiw",
                "gggggrwwww",
                "gggggrwwww",
                "gggggguyww",
                "gggggggrww",
                "gggggggrww",
                "gggggggguy",
                "gggggggggr",
                "gggggggggr",
            ],
        ]
    ],
    [
        [
            "y", //key
            "w", //top
            "uae", //left
            "w", //top to end
            "uae" //left to end
        ],
        [
            [
                "uuuuuuywww",
                "ggggggrwww",
                "ggggggguuy",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
            ],
            [
                "uuuuuuywww",
                "ggggggrwww",
                "ggggggguuy",
                "gggggggggr",
                "gggggggggr",
                "gggggggddi",
                "ggggggrwww",
                "ggggggrwww",
                "ggggggguuy",
                "gggggggggr",
            ],
        ]
    ],
    [
        [
            "a", //key
            "ry", //top
            "gc" //left
        ],
        [
            [
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
            ],
        ]
    ],
    [
        [
            "b", //key
            "l", //top
            "wce", //left
            "cl", //top to end
            "w" //left to end
        ],
        [
            [
                "lggggggggg",
                "lggggggggg",
                "lggggggggg",
                "lggggggggg",
                "bddddggggg",
                "wwwwwbgggg",
                "wwwwwwlggg",
                "wwwwwwlggg",
                "wwwwwwlggg",
                "wwwwwwbddd",
            ],
        ]
    ],
    [
        [
            "d", //key
            "g", //top
            "bd", //left
            "gae", //top to end
            "bd" //left to end
        ],
        [
            [
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "ggggdggggg",
                "gggrwlgggg",
                "dddiwbdddd",
            ],
        ]
    ],
    [
        [
            "c", //key
            "ga", //top
            "db" //left
        ],
        [
            [
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
            ],
        ]
    ],
    [
        [
            "e", //key
            "ry", //top
            "db" //left
        ],
        [
            [
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
                "gggggggggg",
            ],
        ]
    ],
    [
        [
            "i", //key
            "", //top
            "", //left
            "r", //top to end
            "db" //left to end
        ],
        [
            [
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "gggggggggr",
                "dddddddddi",
            ]
        ]
    ]
]
