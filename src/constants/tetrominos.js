export const TETRONMINO_COLORS = {
  i: "lightblue",
  o: "yellow",
  t: "purple",
  s: "green",
  z: "red",
  j: "blue",
  l: "orange",
}
export const TETROMINOS = {
  i: {
    type: "i",
    rot1: [
      {
        index: { x: 0, y: 1 },
        color: TETRONMINO_COLORS.i,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.i,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.i,
      },
      {
        index: { x: 3, y: 1 },
        color: TETRONMINO_COLORS.i,
      },
    ],
    rot2: [
      {
        index: { x: 2, y: 0 },
        color: TETRONMINO_COLORS.i,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.i,
      },
      {
        index: { x: 2, y: 2 },
        color: TETRONMINO_COLORS.i,
      },
      {
        index: { x: 2, y: 3 },
        color: TETRONMINO_COLORS.i,
      },
    ],
  },
  o: {
    type: "o",
    rot1: [
      {
        index: { x: 1, y: 0 },
        color: TETRONMINO_COLORS.o,
      },
      {
        index: { x: 2, y: 0 },
        color: TETRONMINO_COLORS.o,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.o,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.o,
      },
    ],
  },
  t: {
    type: "t",
    rot1: [
      {
        index: { x: 0, y: 1 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.t,
      },
    ],
    rot2: [
      {
        index: { x: 1, y: 0 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 0, y: 1 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.t,
      },
    ],
    rot3: [
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 0, y: 2 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 2, y: 2 },
        color: TETRONMINO_COLORS.t,
      },
    ],
    rot4: [
      {
        index: { x: 1, y: 0 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.t,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.t,
      },
    ],
  },
  s: {
    type: "s",
    rot1: [
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.s,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.s,
      },
      {
        index: { x: 0, y: 2 },
        color: TETRONMINO_COLORS.s,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.s,
      },
    ],
    rot2: [
      {
        index: { x: 0, y: 0 },
        color: TETRONMINO_COLORS.s,
      },
      {
        index: { x: 0, y: 1 },
        color: TETRONMINO_COLORS.s,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.s,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.s,
      },
    ],
  },
  z: {
    type: "z",
    rot1: [
      {
        index: { x: 0, y: 1 },
        color: TETRONMINO_COLORS.z,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.z,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.z,
      },
      {
        index: { x: 2, y: 2 },
        color: TETRONMINO_COLORS.z,
      },
    ],
    rot2: [
      {
        index: { x: 2, y: 0 },
        color: TETRONMINO_COLORS.z,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.z,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.z,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.z,
      },
    ],
  },
  j: {
    type: "j",
    rot1: [
      {
        index: { x: 0, y: 1 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 2, y: 2 },
        color: TETRONMINO_COLORS.j,
      },
    ],
    rot2: [
      {
        index: { x: 1, y: 0 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 0, y: 2 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.j,
      },
    ],
    rot3: [
      {
        index: { x: 0, y: 1 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 0, y: 2 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 2, y: 2 },
        color: TETRONMINO_COLORS.j,
      },
    ],
    rot4: [
      {
        index: { x: 1, y: 0 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 2, y: 0 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.j,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.j,
      },
    ],
  },
  l: {
    type: "l",
    rot1: [
      {
        index: { x: 0, y: 1 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 0, y: 2 },
        color: TETRONMINO_COLORS.l,
      },
    ],
    rot2: [
      {
        index: { x: 0, y: 0 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 1, y: 0 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.l,
      },
    ],
    rot3: [
      {
        index: { x: 2, y: 1 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 0, y: 2 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 2, y: 2 },
        color: TETRONMINO_COLORS.l,
      },
    ],
    rot4: [
      {
        index: { x: 1, y: 0 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 1, y: 1 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 1, y: 2 },
        color: TETRONMINO_COLORS.l,
      },
      {
        index: { x: 2, y: 2 },
        color: TETRONMINO_COLORS.l,
      },
    ],
  },
}
