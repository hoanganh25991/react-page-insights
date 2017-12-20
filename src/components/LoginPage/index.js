import React, { PureComponent } from "react"
import { style as s } from "./style"

export const STORAGE_PAGE_TOKENS_KEY = "pageAccessTokens"

export default class LoginPage extends PureComponent {
  state = {
    pageAccessTokens: null
  }

  render() {
    return (
      <div style={s.rootDiv}>
        <div style={s.title}>Please Login</div>
        <div style={s.subTitle}>to preview your pages insights</div>

        <div />
      </div>
    )
  }
}
