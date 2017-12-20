import React, { PureComponent } from "react"
import { style as s } from "./style"
import defaultImg from "../../img/default-img.png"
import GenderChart from "../GenderChart"
import { getPageInsights } from "../../facebook-api/pageInsights"

const _ = console.log

export default class Summary extends PureComponent {
  state = {}

  async componentDidMount() {
    const { pageId, pageToken } = this.props
    const hasBoth = pageId && pageToken

    _("[pageId, pageToken]", pageId, pageToken)
    if (!hasBoth) return _("[WARN] Need both pageId & pageToken to run")

    const { pageInsights } = await getPageInsights({ pageId, pageToken })
    _("[getPageInsights]", pageInsights)

    this.setState({ pageInsights })
  }

  render() {
    const { pageInsights = {} } = this.state
    const { likes, check_ins, impressions, engagements, post_engagements, reactions, gender_ages } = pageInsights

    return (
      <div style={s.chartsDiv}>
        <div style={s.imgDiv}>
          <img src={defaultImg} style={s.img} alt={"Page Icon"} />
          <div style={s.briefDiv}>
            <div style={s.title}>Little India</div>
            <div style={s.likes}>
              <strong>{likes}</strong> likes
            </div>
            <div style={s.checkIns}>
              <strong>{check_ins}</strong> check-ins
            </div>
          </div>
        </div>

        <div style={s.infoDiv}>
          <div>
            <strong>Last 30 days</strong>
          </div>
          <div>{impressions} page impressions</div>
          <div>{engagements} page engagements</div>
          <div>{post_engagements} post engagements</div>
          <div>{reactions} reactions</div>
        </div>

        <div style={s.genderDiv}>
          <div>
            <strong>Lifetime Demographic</strong>
          </div>
          <div style={s.genderChart}>
            <GenderChart data={gender_ages} />
          </div>
        </div>
      </div>
    )
  }
}
