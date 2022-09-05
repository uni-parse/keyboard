
brightnessJump = 10
CurrentBrightness := GetCurrentBrightNess()
ChangeBrightness(0)
minimumBrightness := GetCurrentBrightNess()
ChangeBrightness(CurrentBrightness)

;MsgBox, % GetCurrentBrightNess()
 
;ChangeBrightness(-20)
;Sleep, 2000
;ChangeBrightness()
;Sleep, 2000
;ChangeBrightness(500)
;return

ChangeBrightness( ByRef brightness := 50, timeout = 1 ) {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}

GetCurrentBrightNess() {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery( "SELECT * FROM WmiMonitorBrightness" )
		currentBrightness := property.CurrentBrightness	
	return currentBrightness
}


Numpad8::
  ChangeBrightness(200)
return
[::
	if (GetCurrentBrightNess() = minimumBrightness)
	  ChangeBrightness(GetCurrentBrightNess() + 12 - minimumBrightness)
	else if (GetCurrentBrightNess() <= 100 - brightnessJump)
		ChangeBrightness(GetCurrentBrightNess() + brightnessJump)
	else
		ChangeBrightness(100)
return
]::
	if (GetCurrentBrightNess() - minimumBrightness>= brightnessJump)
	  ChangeBrightness(GetCurrentBrightNess() - brightnessJump)
	else
		ChangeBrightness(0)
return