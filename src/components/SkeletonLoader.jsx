import React from "react"

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      {Array(6).fill(0).map((_, i) => (
        <div key={i} className="skeleton-card"></div>
      ))}
    </div>
  )
}

export default SkeletonLoader