import { memo } from "react"
import isEqual from "react-fast-compare"
import Ctr from "../ctr"
import Cpc from "../cpc"

const Overview = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <Ctr />
      <Cpc />
    </div>
  )
}

export default memo(Overview, isEqual)
