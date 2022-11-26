// import React from 'react'

// const MemoCompo = ({name}) => {
//     console.log('Memo component')
//   return (
//     <div>
//         <h2> Memo Component </h2>
//         {name}
//     </div>
//   )
// }

// export default React.memo(MemoCompo)

import React from 'react'

function MemoCompo({name}) {
    console.log('Memo component')
  return (
    <div>
        <h2> Memo Component </h2>
        {name}
    </div>
  )
}

// export default React.memo(MemoCompo)
export default MemoCompo