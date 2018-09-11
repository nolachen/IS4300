import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Email: <a href="mailto:chen.no@husky.neu.edu">chen.no@husky.neu.edu</a>
        </p>
      </div>
    )
  }
}

export default Bio
