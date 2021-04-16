import React from 'react'
import ReinventedColorWheel from 'reinvented-color-wheel/react'
import 'reinvented-color-wheel/css/reinvented-color-wheel.min.css'
import styles from "./index.module.css"
/* https://www.npmjs.com/package/reinvented-color-wheel */
const Wheel = () => {
  const [hex, setHex] = React.useState('#7677ff')
  return (
    <>
    <h1>How do you <em>feel?</em> </h1>

      <ReinventedColorWheel
        // hsv={[0, 100, 100]}
        // hsl={[0, 100, 50]}
        // rgb={[255, 0, 0]}
        // hex="#ff0000"
        hex={hex}
        wheelDiameter={300}
        wheelThickness={37}
        handleDiameter={20}
        wheelReflectsSaturation
        onChange={({ hex }) => setHex(hex)}
      />
      <input disabled={true} className={styles.colourBox} style={{backgroundColor: hex, border: "1px solid" + hex, boxShadow: "0px 1px 4px 2px"+hex, color : hex[1] <= 4 ? "white" : "black"}}value={hex} onChange={e => setHex(e.target.value)} />

        <div className={styles.buttonBox}>
      <button className={styles.colourBox} id={styles.startButton} style={{backgroundColor: hex,color : hex[1] <= 4 ? "white" : "black"}} onClick={()=>console.log(hex[1])}>start</button>
      </div>
    </>
  )
}

export default Wheel;