import React from 'react'
import ReinventedColorWheel from 'reinvented-color-wheel/react'
import 'reinvented-color-wheel/css/reinvented-color-wheel.min.css'
import styles from "./index.module.css"
/* https://www.npmjs.com/package/reinvented-color-wheel */
const Wheel = () => {
  const [hex, setHex] = React.useState('#000000')
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
      <input disabled={true} className={styles.colourBox} style={{backgroundColor: hex, border: "1px solid" + hex, boxShadow: "0px 0px 2px 2px"+hex}}value={hex} onChange={e => setHex(e.target.value)} />

        <div className={styles.buttonBox}>
      <button className={styles.colourBox} style={{backgroundColor: hex}}>start</button>
      </div>
    </>
  )
}

export default Wheel;