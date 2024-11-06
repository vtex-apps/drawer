import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['skeletonContainer', 'skeletonItem'] as const

function Skeleton() {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.skeletonContainer} pa4`}>
      <div
        className={`${handles.skeletonItem} mb4 bg-muted-5 br2`}
        style={{ height: '20px', width: '60%' }}
      />
      <div
        className={`${handles.skeletonItem} mb4 bg-muted-5 br2`}
        style={{ height: '20px', width: '80%' }}
      />
      <div
        className={`${handles.skeletonItem} mb4 bg-muted-5 br2`}
        style={{ height: '20px', width: '40%' }}
      />
    </div>
  )
}

export default Skeleton
