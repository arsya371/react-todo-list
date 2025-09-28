import React, { useState } from 'react'

import './DropArea.css'

const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false)
  return (
    <section 
    onDragEnter={(e) => {
        e.preventDefault();
        setShowDrop(true);
    }} 
    onDragLeave={(e) => {
        e.preventDefault();
        setShowDrop(false);
    }} 
    onDragOver={(e) => {
        e.preventDefault();
    }}
    onDrop={(e) => {
        e.preventDefault();
        onDrop();
        setShowDrop(false);
    }}
    className={showDrop ? 'drop_area' : 'hide_drop'}>
        Drop Here
    </section>
  )
}

export default DropArea
