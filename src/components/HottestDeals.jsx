import DealsFrame from "./DealsFrame";

const HottestDeals = () => {
    return (
      <section className="pop_dest" id="pop_dest">
        <div className=" subheadtext">
          Hottest Deals
        </div>
        <div className="deals">
          <DealsFrame />
        </div>
      </section>
    );
  };
  
  export default HottestDeals;