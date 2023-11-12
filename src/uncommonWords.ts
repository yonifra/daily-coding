// This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences).
// You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

// Ex: given the following strings...

// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]

const uncommonWords = (first: string, second: string): string[] => {
    const uncommonWords: string[] = []
    const seenWordsFirst = new Set<string>(first.split(" "))
    const seenWordsSecond = new Set<string>(second.split(" "))

    seenWordsFirst.forEach((word) => {
        if (!seenWordsSecond.has(word)) {
            uncommonWords.push(word)
        }
    })

    seenWordsSecond.forEach((word) => {
        if (!seenWordsFirst.has(word)) {
            uncommonWords.push(word)
        }
    })

    return uncommonWords
}

console.log(uncommonWords("the quick", "brown fox"))
console.log(
    uncommonWords(
        "the tortoise beat the haire",
        "the tortoise lost to the haire"
    )
)
console.log(uncommonWords("copper coffee pot", "hot coffee pot"))
