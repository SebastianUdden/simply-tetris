import {
  allRowCellsLocked,
  removeLockedRows,
  replaceFullRows,
  createEmptyRow,
  findLockedIndexes,
  updateBoardIndexes,
} from "./replaceFullRows"

const DEFAULT_2_X_2 = [
  [
    {
      index: {
        x: 0,
        y: 0,
      },
      color: "black",
    },
    {
      index: {
        x: 1,
        y: 0,
      },
      color: "black",
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 1,
      },
      color: "black",
    },
    {
      index: {
        x: 1,
        y: 1,
      },
      color: "black",
    },
  ],
]

const LOCKED_BOTTOM_2_X_2 = [
  [
    {
      index: {
        x: 0,
        y: 0,
      },
      color: "black",
    },
    {
      index: {
        x: 1,
        y: 0,
      },
      color: "black",
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 1,
      },
      color: "green",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 1,
      },
      color: "green",
      locked: true,
    },
  ],
]

const LOCKED_TOP_2_X_2 = [
  [
    {
      index: {
        x: 0,
        y: 0,
      },
      color: "green",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 0,
      },
      color: "green",
      locked: true,
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 1,
      },
      color: "black",
    },
    {
      index: {
        x: 1,
        y: 1,
      },
      color: "black",
    },
  ],
]

const LOCKED_2_X_2 = [
  [
    {
      index: {
        x: 0,
        y: 0,
      },
      color: "red",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 0,
      },
      color: "red",
      locked: true,
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 1,
      },
      color: "green",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 1,
      },
      color: "green",
      locked: true,
    },
  ],
]

const LOCKED_BOTTOM_ONE_TOP_2_X_2 = [
  [
    {
      index: {
        x: 0,
        y: 0,
      },
      color: "black",
    },
    {
      index: {
        x: 1,
        y: 0,
      },
      color: "red",
      locked: true,
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 1,
      },
      color: "green",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 1,
      },
      color: "green",
      locked: true,
    },
  ],
]

const TWO_LOCKED_BOTTOM_ONE_TOP_2_X_3 = [
  [
    {
      index: {
        x: 0,
        y: 0,
      },
      color: "black",
    },
    {
      index: {
        x: 1,
        y: 0,
      },
      color: "red",
      locked: true,
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 1,
      },
      color: "green",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 1,
      },
      color: "green",
      locked: true,
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 2,
      },
      color: "yellow",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 2,
      },
      color: "yellow",
      locked: true,
    },
  ],
]

const MID_LOCKED_ONE_BOTTOM_2_X_3 = [
  [
    {
      index: {
        x: 0,
        y: 0,
      },
      color: "black",
    },
    {
      index: {
        x: 1,
        y: 0,
      },
      color: "black",
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 1,
      },
      color: "green",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 1,
      },
      color: "green",
      locked: true,
    },
  ],
  [
    {
      index: {
        x: 0,
        y: 2,
      },
      color: "yellow",
      locked: true,
    },
    {
      index: {
        x: 1,
        y: 2,
      },
      color: "black",
    },
  ],
]

test("return true if all cells are locked", () => {
  const result = allRowCellsLocked(LOCKED_BOTTOM_2_X_2[1])
  expect(result).toBe(true)
})

test("create an empty row based on board", () => {
  const EMPTY_ROW = [
    {
      index: {
        x: 0,
        y: 0,
      },
      color: "black",
    },
    {
      index: {
        x: 1,
        y: 0,
      },
      color: "black",
    },
  ]
  const result = createEmptyRow(DEFAULT_2_X_2, 0)
  expect(result).toStrictEqual(EMPTY_ROW)
})

test("update board indexes", () => {
  const updatedBoard = [
    [
      {
        index: {
          x: 0,
          y: 1,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 1,
        },
        color: "black",
      },
    ],
    [
      {
        index: {
          x: 0,
          y: 1,
        },
        color: "green",
        locked: true,
      },
      {
        index: {
          x: 1,
          y: 1,
        },
        color: "green",
        locked: true,
      },
    ],
    [
      {
        index: {
          x: 0,
          y: 2,
        },
        color: "yellow",
        locked: true,
      },
      {
        index: {
          x: 1,
          y: 2,
        },
        color: "black",
      },
    ],
  ]

  const result = updateBoardIndexes(MID_LOCKED_ONE_BOTTOM_2_X_3, [1])
  expect(result).toStrictEqual(updatedBoard)
})

test("remove locked row bottom", () => {
  const withoutLockedRow = [
    [
      {
        index: {
          x: 0,
          y: 0,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 0,
        },
        color: "black",
      },
    ],
  ]
  const withoutLockedRowOneTop = [
    [
      {
        index: {
          x: 0,
          y: 0,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 0,
        },
        color: "red",
        locked: true,
      },
    ],
  ]

  const result = removeLockedRows(LOCKED_BOTTOM_2_X_2)
  const result2 = removeLockedRows(LOCKED_BOTTOM_ONE_TOP_2_X_2)

  expect(result).toStrictEqual(withoutLockedRow)
  expect(result2).toStrictEqual(withoutLockedRowOneTop)
})

test("remove locked row top", () => {
  const withoutLockedRow = [
    [
      {
        index: {
          x: 0,
          y: 1,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 1,
        },
        color: "black",
      },
    ],
  ]

  const result = removeLockedRows(LOCKED_TOP_2_X_2)
  expect(result).toStrictEqual(withoutLockedRow)
})

test("remove locked rows", () => {
  const withoutLockedRow = []
  const withoutLockedRowOneTop = [
    [
      {
        index: {
          x: 0,
          y: 0,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 0,
        },
        color: "red",
        locked: true,
      },
    ],
  ]

  const result = removeLockedRows(LOCKED_2_X_2)
  const result2 = removeLockedRows(TWO_LOCKED_BOTTOM_ONE_TOP_2_X_3)
  expect(result).toStrictEqual(withoutLockedRow)
  expect(result2).toStrictEqual(withoutLockedRowOneTop)
})

test("get locked indexes", () => {
  const lockedIndexes = [1, 2]
  const result = findLockedIndexes(TWO_LOCKED_BOTTOM_ONE_TOP_2_X_3)
  expect(result).toStrictEqual(lockedIndexes)
})

test("empty board doesn't change", () => {
  const result = replaceFullRows(DEFAULT_2_X_2)
  expect(result).toStrictEqual(DEFAULT_2_X_2)
})

test("locked row should change", () => {
  const result = replaceFullRows(LOCKED_BOTTOM_2_X_2, [1])
  expect(result).toStrictEqual(DEFAULT_2_X_2)
})

test("shift one block down", () => {
  const shiftedBlocks = [
    [
      {
        index: {
          x: 0,
          y: 0,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 0,
        },
        color: "black",
      },
    ],
    [
      {
        index: {
          x: 0,
          y: 1,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 1,
        },
        color: "red",
        locked: true,
      },
    ],
  ]

  const result = replaceFullRows(LOCKED_BOTTOM_ONE_TOP_2_X_2, [1])
  expect(result).toStrictEqual(shiftedBlocks)
})

test("shift double blocks down", () => {
  const shiftedDoubleBlocks = [
    [
      {
        index: {
          x: 0,
          y: 0,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 0,
        },
        color: "black",
      },
    ],
    [
      {
        index: {
          x: 0,
          y: 1,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 1,
        },
        color: "black",
      },
    ],
    [
      {
        index: {
          x: 0,
          y: 2,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 2,
        },
        color: "red",
        locked: true,
      },
    ],
  ]
  const result = replaceFullRows(TWO_LOCKED_BOTTOM_ONE_TOP_2_X_3, [1, 2])
  expect(result).toStrictEqual(shiftedDoubleBlocks)
})

test("shift blocks above lockedrow down", () => {
  const shiftedBlocks = [
    [
      {
        index: {
          x: 0,
          y: 0,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 0,
        },
        color: "black",
      },
    ],
    [
      {
        index: {
          x: 0,
          y: 1,
        },
        color: "black",
      },
      {
        index: {
          x: 1,
          y: 1,
        },
        color: "black",
      },
    ],
    [
      {
        index: {
          x: 0,
          y: 2,
        },
        color: "yellow",
        locked: true,
      },
      {
        index: {
          x: 1,
          y: 2,
        },
        color: "black",
      },
    ],
  ]

  const result = replaceFullRows(MID_LOCKED_ONE_BOTTOM_2_X_3, [1])
  expect(result).toStrictEqual(shiftedBlocks)
})
