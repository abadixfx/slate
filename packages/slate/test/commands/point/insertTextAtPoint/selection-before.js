/** @jsx h */

import { h } from '../../../helpers'

export const input = (
  <value>
    <block>
      <text>
        w<anchor />or<focus />d
      </text>
    </block>
  </value>
)

export const run = editor => {
  editor.insertTextAtPoint({ path: [0, 0], offset: 0 }, 'x')
}

export const output = (
  <value>
    <block>
      xw<anchor />or<focus />d
    </block>
  </value>
)