import DealsCards from "./DealsCards";

const DealsFrame = () => {
  return (
    <div className="card_container">
      <div className="card_frame ">
        <DealsCards  dealsName="Deal1" DealsDescription="This is title of the travel package that is being featured here" cardSize="lg" />
        <DealsCards  dealsName="Deal2" DealsDescription="The languages only differ in their grammar, their pronun and their most common words" cardSize="lg" />
        <DealsCards  dealsName="Deal3" DealsDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." cardSize="lg"/>
      </div>
    </div>
  )
}

export default DealsFrame;