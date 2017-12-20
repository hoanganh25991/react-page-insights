import React, { PureComponent } from "react"
import { style as s } from "./style"
import Summary from "../Summary"
import LoginPage, { STORAGE_PAGE_TOKENS_KEY } from "../LoginPage"

export default class App extends PureComponent {
  state = {
    pageAccessTokens: null
  }

  componentDidMount() {
    const storage = window.localStorage
    const pageAccessTokens = storage.getItem(STORAGE_PAGE_TOKENS_KEY) || null
    this.setState({ pageAccessTokens })
  }

  render() {
    const { pageAccessTokens } = this.state
    const loginPage = !pageAccessTokens
    const msgPage = pageAccessTokens && pageAccessTokens.length === 0
    const summaryPage = pageAccessTokens && pageAccessTokens.length > 0

    return (
      <div style={s.rootDiv}>
        {loginPage && <LoginPage />}
        {msgPage && "Dont have page to preview insights."}
        {summaryPage && <Summary fbId={"1582722098684919"} />}
      </div>
    )
  }
}
