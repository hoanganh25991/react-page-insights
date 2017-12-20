const _20px = 20
const curveRadius = 5

export const style = {
  rootDiv: {
    border: "1px solid black",
    borderRadius: curveRadius,
    padding: _20px
  },
  chartDiv: {
    width: "50vw",
    minWidth: 320,
    maxWidth: 640
  },
  title: {
    fontSize: "1.6em",
    fontWeight: "bold",
    textAlign: "center"
    // padding: _20px,
  },
  chartsDivHasData: {
    width: "75vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
}
