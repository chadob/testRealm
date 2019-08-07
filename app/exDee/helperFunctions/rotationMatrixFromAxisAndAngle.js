var rotAroundVector = [
  [
    Math.cos(angle) + vector[x] * vector[x] * (1 - Math.cos(angle)),
    vector[x] * vector[y] * (1 - Math.cos(angle)) - vector[z] * Math.sin(angle),
    vector[x] * vector[z] * (1 - Math.cos(angle)) + vector[y] * Math.sin(angle)
  ],
  [
    vector[y] * vector[x] * (1 - Math.cos(angle)) + vector[z] * Math.sin(angle),
    Math.cos(angle) + vector[y] * vector[y] * (1 - Math.cos(angle)),
    vector[y] * vector[z] * (1 - Math.cos(angle)) - vector[x] * Math.sin(angle)
  ],
  [
    vector[z] * vector[x] * (1 - Math.cos(angle)) - vector[y] * Math.sin(angle),
    vector[z] * vector[y] * (1 - Math.cos(angle)) + vector[x] * Math.sin(angle)
    Math.cos(angle) + vector[z] * vector[z] * (1 - Math.cos(angle)),
  ],
]
