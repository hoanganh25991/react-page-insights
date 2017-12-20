import React, { PureComponent, Fragment } from "react"
import { style as s } from "./style"
import Summary from "../Summary"
import LoginPage, { STORAGE_PAGE_TOKENS_KEY } from "../LoginPage"
import { getPageAccessTokens } from "../../facebook-api/pageInsights"

const _ = console.log

export default class App extends PureComponent {
  state = {
    pageAccessTokens: null
  }

  componentDidMount() {
    // const storage = window.localStorage
    // const tokensStr = storage.getItem(STORAGE_PAGE_TOKENS_KEY) || "null"
    // const pageAccessTokens = JSON.parse(tokensStr)
    // this.setState({ pageAccessTokens })
  }

  cbUserAccessToken = async token => {
    const { pageAccessTokens } = await getPageAccessTokens(token)
    _("[pageAccessTokens]", pageAccessTokens)
    // const storage = window.localStorage
    // storage.setItem(STORAGE_PAGE_TOKENS_KEY, JSON.stringify(pageAccessTokens))
    this.setState({ pageAccessTokens })
  }

  render() {
    const { pageAccessTokens } = this.state
    const loginPage = !pageAccessTokens
    const hasPages = pageAccessTokens && pageAccessTokens.length > 0
    const rootDivS = hasPages ? { ...s.chartsDiv, ...s.chartsDivHasData } : s.chartsDiv

    return (
      <div style={s.rootDiv}>
        {hasPages && <div style={s.title}>OWNED PAGES</div>}
        <div style={rootDivS}>
          {loginPage && <LoginPage cbToken={this.cbUserAccessToken} />}
          {!loginPage && !hasPages && "Dont have page to preview insights."}
          {hasPages && (
            <Fragment>
              {pageAccessTokens.map(page => {
                const { id: pageId, access_token: pageToken } = page
                _("[pageId, pageToken]", pageId, pageToken)
                return <Summary key={pageId} pageId={pageId} pageToken={pageToken} />
              })}
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}
