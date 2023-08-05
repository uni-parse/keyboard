; setBrightness(0)
; minimumBrightness := getCurrentBrightness()
; setBrightness(currentBrightness)

brightnessUp() {
  global
  brightness := (currentBrightness < 100 - brightnessJump)
    ? (currentBrightness += brightnessJump)
    : 100
  setBrightness(brightness)
}

brightnessDown() {
  global
  brightness := (currentBrightness > brightnessJump)
    ? (currentBrightness -= brightnessJump)
    : 0
  setBrightness(brightness)
}

getCurrentBrightness() {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		current_brightness := property.CurrentBrightness
	return current_brightness
}

setBrightness( brightness := 50, timeout := 1 ) {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}
