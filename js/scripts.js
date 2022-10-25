// Business Logic

function wordCounter(text) {
	if (text.trim().length === 0) {
		return 0;
	}
	let wordCount = 0;
	const textArray = text.split(" ");
	textArray.forEach(function (element) {
		if (!Number(element)) {
		wordCount++;
		}
	});
	return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++
    }
  });
  return wordCount;
}

function lookForBadWords(text) {
	const textList = text.trim().split(" ");
	let safeSentence = [];
	const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
	textList.forEach(function(wordIn) {
		badWords.forEach(function(badWord) {
			if (wordIn.toLowerCase().includes(badWord.toLowerCase())) {
				let censor = [];
			const wordArray = wordIn.split('');
		wordArray.forEach(function(wa) {
			censor.push("*");
		});
		wordIn = censor.join("");
	}
});
safeSentence.push(wordIn);
	});
	return safeSentence.join(" ");
}

let sentence = "I would like to zoinks the biffaroni out of your muppeteer. Getout of here you loopdaloop zoinks"