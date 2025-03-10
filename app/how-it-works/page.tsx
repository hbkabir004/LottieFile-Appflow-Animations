import { AppFlow } from "@/components/how-it-works-section/AppFlow"
import { driverFlowItems, userFlowItems } from "@/public/data/appflow-items"


export default function Home() {
  return (
    <AppFlow
      title="How Vroom Works?"
      subtitle="App Flow"
      userFlowItems={userFlowItems}
      driverFlowItems={driverFlowItems}
    />
  )
}