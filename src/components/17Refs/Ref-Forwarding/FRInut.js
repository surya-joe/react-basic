import React from 'react'

export const FRInut = React.forwardRef(
    (props, ref) => {
        return (
          <div>
              <h2>Forward Ref Inut</h2>
              <input type='text' ref={ref}/>
          </div>
        )
      }
)
