import React, { PureComponent } from 'react';
import {getPageInsights} from "../../api/index";
import {style as s} from "./style";
import defaultImg from "../../img/default-img.png"
const _
= console.log

export default class Summary extends PureComponent {
  state = {}

  async componentDidMount(){
    const {fbId} = this.props
    const {pageInsights} = await getPageInsights(fbId)
    _("[pageInsights]", pageInsights)

    this.setState({pageInsights})
  }

  render() {
    const {pageInsights = {}} = this.state
    const {likes, check_ins, impressions, engagements, post_engagements, reactions} = pageInsights

    return (
      <div style={s.rootDiv}>
        <div style={s.imgDiv}>
          <img src={defaultImg} style={s.img} />
          <div style={s.briefDiv}>
            <div style={s.title}>Little India</div>
            <div style={s.likes}><strong>{likes}</strong> likes</div>
            <div style={s.checkIns}><strong>{check_ins}</strong> check-ins</div>
          </div>
        </div>

        <div style={s.infoDiv}>
          <div><strong>Last 30 days</strong></div>
          <div>{impressions} page impressions</div>
          <div>{engagements} page engagements</div>
          <div>{post_engagements} post engagements</div>
          <div>{reactions} reactions</div>
        </div>

        <div style={s.genderDiv}>
          <div><strong>Lifetime Demographic</strong></div>
          <div>Chart here</div>
        </div>

      </div>
    )
  }
}