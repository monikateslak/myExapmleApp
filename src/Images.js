import React from 'react'

function Images() {
  return (
    <>
      <section>
        <ul>
          <li>
            <img
              src={require('./images/IMG_2911.JPEG')}
              alt="hala zieleń"
              width={250}
            ></img>
          </li>
          <li>
            <img
              src={require('./images/IMG_2910.JPEG')}
              alt="hala fiolet"
              width={250}
            ></img>
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={require('./images/IMG_2941.JPEG')}
              alt="hala zieleń"
              width={250}
            ></img>
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={require('./images/IMG_3100.JPEG')}
              alt="hala zieleń"
              width={250}
            ></img>
          </li>
          <li>
            <img
              src={require('./images/IMG_3160.JPEG')}
              alt="hala zieleń"
              width={250}
            ></img>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Images
