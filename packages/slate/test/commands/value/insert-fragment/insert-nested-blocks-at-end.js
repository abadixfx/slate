/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.insertFragment(
    
      <block>
        <block>one</block>
        <block>two</block>
      </block>
      <block>after quote</block>
    
  )
}

export const input = (
  <value>
    
      <block>
        word<cursor />
      </block>
    
  </value>
)

export const output = (
  <value>
    
      <block>wordone</block>
      <block>
        <block>two</block>
      </block>
      <block>
        after quote<cursor />
      </block>
    
  </value>
)