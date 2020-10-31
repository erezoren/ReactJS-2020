import React, {useRef, useState} from 'react'

export const FocusChanger = () => {

  const element1 = useRef(null)
  const element2 = useRef(null)
  const element3 = useRef(null)
  const element4 = useRef(null)
  const [nextFocusedElement, setFocusedElement] = useState(0)

  React.useEffect(() => updateRef(""), [])

  const containerStyle = {
    border: "black solid 1px",
    display: "block"
  }

  const squareStyle = {
    border: "1px solid gray",
    width: "80px",
    height: "80px",
    margin: "10px",
    display: "inline-block",
    verticalAlign: "top",
    fontSize: "30px",
    lineHeight: "80px",
    textAlign: "center"
  }

  const updateRef = (e) => {
    switch (nextFocusedElement) {
      case 0:
        element1.current.focus();
        element1.current.innerText = e;
        setFocusedElement(nextFocusedElement + 1);
        break
      case 1:
        element2.current.focus();
        element2.current.innerText = e;
        setFocusedElement(nextFocusedElement + 1);
        break
      case 2:
        element3.current.focus();
        element3.current.innerText = e;
        setFocusedElement(nextFocusedElement + 1);
        break
      case 3:
        element4.current.focus();
        element4.current.innerText = e;
        setFocusedElement(0);
        break

    }

  }

  return (
      <div style={containerStyle}>
        <div ref={element1} style={squareStyle}
             onKeyDown={(e) => updateRef(e)}></div>
        <div ref={element2} style={squareStyle}
             onKeyDown={(e) => updateRef(e)}></div>
        <div ref={element3} style={squareStyle}
             onKeyDown={(e) => updateRef(e)}></div>
        <div ref={element4} style={squareStyle}
             onKeyDown={(e) => updateRef(e)}></div>
      </div>
  )
}