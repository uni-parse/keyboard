function brightness(key, jumpUp = 0) {
  return jumpUp
    ? `\t${key}::ChangeBrightness(CurrentBrightness < 100 - brightnessJump ? CurrentBrightness += brightnessJump : 100)
    return\n`
    : `\t${key}::ChangeBrightness(CurrentBrightness > brightnessJump ? CurrentBrightness -= brightnessJump : 0)
    return\n`

  return jumpUp ? `\t${key}::
    if (GetCurrentBrightNess() = minimumBrightness)
      ChangeBrightness(GetCurrentBrightNess() + 12 - minimumBrightness)
    else if (GetCurrentBrightNess() <= 100 - brightnessJump)
      ChangeBrightness(GetCurrentBrightNess() + brightnessJump)
    else
      ChangeBrightness(100)
    return\n` : `\t${key}::
    if (GetCurrentBrightNess() - minimumBrightness>= brightnessJump)
      ChangeBrightness(GetCurrentBrightNess() - brightnessJump)
    else
      ChangeBrightness(0)
    return\n`
}

export default brightness