#Requires AutoHotkey v2.0

a := 1
b := ++a
c := 1
x := 1
x_limit := 2
x_slow := 1.5
x_default := 2.2
brightness := 50

`::{
    global
    ChangeBrightness(brightness)
    ;MsgBox('done')
}
ins::{
  brightness += 10
}

ChangeBrightness( &brightness := 50, timeout := 1 ) {
	For property in ComObjGet( "winmgmts:\\.\root\WMI" ).ExecQuery("SELECT * FROM WmiMonitorBrightnessMethods" )
		property.WmiSetBrightness( timeout, brightness)
}