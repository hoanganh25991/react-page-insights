const imgHeight = 87
const _10px = 10
export const _20px = 20
const _310px = 310
const chartHeight = 200
const chartTranslateX = -30
export const style = {
  chartDiv: {
    borderRadius: 5,
    lineHeight: "150%",
    padding: _10px,
    width: _310px,
    border: "1px solid black",
    marginBottom: _20px
    // marginLeft: _20px
  },
  imgDiv: {
    display: "flex",
    height: imgHeight,
    overflow: "hidden"
  },
  img: {
    height: imgHeight
  },
  briefDiv: {
    marginLeft: _10px
  },
  title: {
    fontSize: "1.5em",
    fontWeight: "bold"
  },
  likes: {},
  checkIns: {},
  infoDiv: {
    marginTop: _10px
  },
  genderDiv: {
    marginTop: _10px
  },
  genderChart: {
    marginTop: _10px,
    width: _310px,
    height: chartHeight,
    transition: "0.3s all ease-in-out",
    transform: `translateX(${chartTranslateX}px)`
  }
}
