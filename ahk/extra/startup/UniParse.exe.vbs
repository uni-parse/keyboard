Set WshShell = CreateObject("WScript.Shell" ) 
WshShell.Run """C:\Users\uni\projects\keyboard\ahk\UniParse.exe""", 0 'Must quote command if it has spaces; must escape quotes
Set WshShell = Nothing