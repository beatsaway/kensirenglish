// Relative clauses — Kai Tak 3: formal preposition + which / when / where
// contextLines = the two simple sentences; paragraphs = the one line to merge (dropdown blank).
window.relativeClausesKaitak3Exercises = [
  {
    type: "dropdownBlanks",
    id: "kt-p3-year",
    category: "Year",
    contextLines: ["1998 was the year.", "Kai Tak closed in that year."],
    wordBank: ["in which", "when", "where", "which", "that"],
    paragraphs: [
      {
        parts: [
          "1998 was the year ",
          {
            options: ["in which", "when", "where", "which", "that"],
            correct: ["in which", "when"]
          },
          " Kai Tak closed."
        ]
      }
    ],
    explanation: "<strong>In which</strong> = formal (<em>in that year</em>). <strong>When</strong> is also natural after <em>year</em> with the same meaning."
  },
  {
    type: "dropdownBlanks",
    id: "kt-p3-deck",
    category: "Rooftop deck",
    contextLines: [
      "It had a rooftop observation deck.",
      "Visitors could watch planes and take pictures from that deck."
    ],
    wordBank: ["from which", "where", "which", "when", "that"],
    paragraphs: [
      {
        parts: [
          "It had a rooftop observation deck ",
          {
            options: ["from which", "where", "which", "when", "that"],
            correct: ["from which", "where"]
          },
          " visitors could watch planes and take pictures."
        ]
      }
    ],
    explanation: "<strong>From which</strong> = formal (<em>from that deck</em>). <strong>Where</strong> = place (natural alternative here)."
  },
  {
    type: "dropdownBlanks",
    id: "kt-p3e",
    category: "Checkerboard hill",
    contextLines: [
      "The checkerboard hill was a crucial visual reference.",
      "Pilots aimed at it before the final turn."
    ],
    wordBank: ["at which", "where", "which", "when", "who"],
    paragraphs: [
      {
        parts: [
          "The checkerboard hill, ",
          {
            options: ["at which", "where", "which", "when", "who"],
            correct: "at which"
          },
          " pilots aimed before the final turn, was a crucial visual reference."
        ]
      }
    ],
    explanation: "<strong>At which</strong> = <em>aimed at the hill</em> — preposition + <em>which</em> (formal)."
  }
];
