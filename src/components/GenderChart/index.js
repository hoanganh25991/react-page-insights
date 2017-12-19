import React, { PureComponent } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { style as s } from "./style"

export default class GenderChart extends PureComponent {
  render() {
    const { data = [] } = this.props

    return (
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="M" fill={s.maleClr} />
          <Bar dataKey="F" fill={s.femaleClr} />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
