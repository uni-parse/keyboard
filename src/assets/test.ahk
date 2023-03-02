#Requires AutoHotkey v2.0

a := 1
b := ++a ;coole
c := 1
obj := {
  b:0,
  a:10
}
4::0
5::0
ins::MsgBox(obj.a)
`::increment(-5)
1::send('⚠️')
2::sendText('⚠️')
3::0



increment(val := -10) {
  global
  obj.a += -val
}