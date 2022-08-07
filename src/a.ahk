
x = 4
mouseDelaySpeed = 50

  ]::
    If presses = 1 
    {
      MouseMove, -%x%, 0, 0, R
      presses = 2
      SetTimer, reset, -100
      Return
      reset:
        presses = 0
        ;MsgBox, reset
      Return
    }
    if !presses && !hold && !double
    {
      ;MsgBox, %presses%
      ;MsgBox, sendOnce
      MouseMove, -%x%, 0, 0, R
      presses = 1
      SetTimer, timer, -200
      Return
      timer:
        If presses = 1
        {
          presses = 0
          If GetKeyState("]","P")
          {
            Sleep, 200
            If GetKeyState("]","P")
            {
              hold = 1
              ;MsgBox, hold ;400ms
              While GetKeyState("]","P"){
                MouseMove, -%x%, 0, 0, R
                sleep mouseDelaySpeed
              }
              KeyWait r
              ;MsgBox, reset hold
              hold = 0
            }
          }
        ;   ;else
        ;   ;  MsgBox, once
        }
        else if presses = 2
        {
          presses = 0
          Sleep, 200
          If GetKeyState("]","P")
          {
            double = 1
            ;presses = 0
            ;MsgBox, double
            While GetKeyState("]","P"){
              MouseMove, -20, 0, 0, R
              sleep mouseDelaySpeed
            }
            KeyWait r
            ;MsgBox, reset double
            double = 0
          }
        }
        presses = 0
        Return
    }
    Return















; <!>!/::send a



; w::Send {Launch_App2}
; 	return






; #InputLevel, 1
;   RAlt::F24
; #inputLevel, 0
; 	F24 & g::Del
;   LAlt::LShift




; 	g::Del
;   LAlt::Shift
; #InputLevel 1
;   RAlt::F20
; #InputLevel 0

; #If, getkeystate("RAlt","P")
;   LAlt::Shift



; l=0
; RAlt::
;   l=1
;   KeyWait, RAlt
;   l=0
; Return

; #If, l
;   a::Esc
;   g::Del





