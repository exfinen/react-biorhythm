import * as ReactDOM from "react-dom"
import * as React from "react"
import { Biorhythm } from "./Biorhythm"

export { Biorhythm } from "./Biorhythm"

// render the component for testing purpose

ReactDOM.render(
  <React.StrictMode>
    <Biorhythm />
  </React.StrictMode>,
  document.getElementById("app")
)
