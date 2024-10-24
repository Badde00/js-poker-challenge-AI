function winningPair(hand1, hand2) {
  const cardValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }

  const isPair = (hand) => hand[0] === hand[1]

  if (isPair(hand1) && isPair(hand2)) {
    return cardValues[hand1[0]] > cardValues[hand2[0]] ? hand1 : hand2
  } else if (isPair(hand1)) {
    return hand1
  } else if (isPair(hand2)) {
    return hand2
  } else {
    return []
  }
}

function winningPairFromArray(hands) {
  const cardValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }

  const isPair = (hand) => hand[0] === hand[1]

  let bestPair = []

  for (const hand of hands) {
    if (isPair(hand)) {
      if (
        bestPair.length === 0 ||
        cardValues[hand[0]] > cardValues[bestPair[0]]
      ) {
        bestPair = hand
      }
    }
  }

  return bestPair
}

function winning3CardHand(hands) {
  const cardValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }

  const isPair = (hand) => hand.length === 2 && hand[0] === hand[1]
  const isThreeOfAKind = (hand) =>
    hand.length === 3 && hand[0] === hand[1] && hand[1] === hand[2]

  let bestHand = []

  for (const hand of hands) {
    if (isPair(hand) || isThreeOfAKind(hand)) {
      if (
        bestHand.length === 0 ||
        (isThreeOfAKind(hand) && !isThreeOfAKind(bestHand)) ||
        (isThreeOfAKind(hand) &&
          isThreeOfAKind(bestHand) &&
          cardValues[hand[0]] > cardValues[bestHand[0]]) ||
        (isPair(hand) &&
          !isThreeOfAKind(bestHand) &&
          cardValues[hand[0]] > cardValues[bestHand[0]])
      ) {
        bestHand = hand
      }
    }
  }

  return bestHand
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
