const
  symbolKey = 'F23',
  extendKey = 'F24'

export const config = {
  symKey: symbolKey,
  extKey: extendKey
}
config.intro = `;
;
;   made by UniParse
;   github.com/TheUniParse
;   twitter.com/UniParse
;
;
#Requires AutoHotkey v2.0
ProcessSetPriority("High")
Persistent()
#Warn  ; detecting common errors.\n`


config.switchers =
  `${symbolKey}::switcher("sym")
${extendKey}::switcher("ext")
`


config.layer_condition = {
  ext: `!layers.get("ext2") && (
  (
    layers.get("ext")
    && !GetKeyState(symbolKey, "P")
  ) || (
    !layers.get("ext")
    && GetKeyState(extendKey, "P")
    && !GetKeyState(symbolKey, "P")
  ) || (
    layers.get("sym")
    && GetKeyState(extendKey, "P")
  )
)`,

  ext2: `layers.get("ext2")`,

  sym: `!layers.get("sym2") && (
  (
    layers.get("sym")
    && !GetKeyState(extendKey, "P")
  ) || (
    !layers.get("sym")
    && GetKeyState(symbolKey, "P")
    && !GetKeyState(extendKey, "P")
  ) || (
    layers.get("ext")
    && GetKeyState(symbolKey, "P")
  )
)`,

  sym1: `GetKeyState(extendKey, "P") && GetKeyState(symbolKey, "P")`,

  sym2: `layers.get("sym2")`
}

config.config = `extendKey := "${extendKey}"
symbolKey := "${symbolKey}"

layers := Map(
  "ext", 0,
  "ext2", 0,
  "sym", 0,
  "sym2", 0
)

holding := Map(
  "sym", 0,
  "ext", 0
)

doublePress := Map(
  "sym", 0,
  "ext", 0
)

switcher(layer, doubleDelay := 400, holdDelay := 200) {
  global

  if holding.get(layer)
    return

  holding.set(layer, 1)

  if layers.get(layer)
    layers.set(layer, 0)

  local key := layer == "ext" ? extendKey : symbolKey

  ;first press
  If !doublePress.get(layer) {
    doublePress.set(layer, 1)
    SetTimer(() => doublePress.set(layer, 0), -doubleDelay)
    KeyWait(key)
  }

  ;double press
  else {
    layers.set(layer . 2, 1)
    
    local released := KeyWait(key, "T" . holdDelay / 1000)

    if released {
      layers.set(getOppositeLayer(layer), 0)
      layers.set(layer, 1)
      doublePress.set(layer, 0)
    } else
      KeyWait(key)

    layers.set(layer . 2, 0)
  }

  holding.set(layer, 0)
}

getOppositeLayer(layer) {
  switch layer {
    case "sym": return "ext"
    case "ext": return "sym"
  }
}`


/**  goal
  s symbol            e shift symbol
  ss↑ toggle symbol   e temp extend
  ss↓ sym2            e alt || ctrl
    
  s↓e↓ shift symbol   
  e↓s↓ shift symbol   
  s↓e↑ nothing        
  e↓s↑ nothign        
  
  e extend            s shift symbol
  ee↑ toggle extend   s temp symbol
  ee↓ ext2            s nothing

  .....................................

  symbol              s && !e || layer_sym
  shift symbol        s↓e↓ e↓s↓
  toggle symbol       ss↑
  !toggle symbol      s ee↑
  sym2                ss↓

  extend              e
  toggle extend       ee↑
  !toggle extend      e ss↑
  ext2                ee↓

*/