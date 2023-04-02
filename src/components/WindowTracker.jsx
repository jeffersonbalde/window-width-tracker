import React from 'react'

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

//   React.useEffect(() => {
//     function watchWidth() {
//         console.log("Setting up...")
//         setWindowWidth(window.innerWidth)
//     }
    
//     window.addEventListener("resize", watchWidth)
    
//     return function() {
//         console.log("Cleaning up...")
//         window.removeEventListener("resize", watchWidth)
//     }
// }, [])
  React.useLayoutEffect(() => {
    function watchWidth() {
      console.log("Setting up...")
      setWindowWidth(window.innerWidth)
  }
  
  window.addEventListener("resize", watchWidth)
  
  return function() {
      console.log("Cleaning up...")
      window.removeEventListener("resize", watchWidth)
  }
  })
  
  return (
    <h1>Window width: {windowWidth}</h1>
  )
}

export default WindowTracker