function brightness(key, isIncreasing = 0) {
  return isIncreasing
    ? `\t${key}::ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)
    return\n`
    : `\t${key}::ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)
    return\n`
}

export default brightness