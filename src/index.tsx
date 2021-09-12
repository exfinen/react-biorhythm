import * as ReactDOM from "react-dom"
import * as React from "react"
import * as process from "process"

window["process"] = process

ReactDOM.render(
  <React.StrictMode>
    <div>
      Hello
    </div>
  </React.StrictMode>,
  document.getElementById("app")
)
