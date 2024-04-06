function findMatching(source, found) {
  return source.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === found.toLowerCase()
  );
}

function fuzzyMatch(source, testString) {
  return source.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(source, foundName) {
  return source.filter((record) => record.name === foundName);
}