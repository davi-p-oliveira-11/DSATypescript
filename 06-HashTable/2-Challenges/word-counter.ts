function wordCounter(text: string): Record<string, number> {
  const lowerText = text.toLowerCase();
  const wordMap: Record<string, number> = {};
  const words: string[] = lowerText.split(/\s+/);

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

const text: string = "Hello my name name name is David"
const wordCounts: Record<string, number> = wordCounter(text);

console.log(wordCounts);

