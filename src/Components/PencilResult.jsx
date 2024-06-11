import { useLocation } from "react-router-dom";

const PencilResult = () => {

  const location = useLocation();
  const {
    roas,
    totalOrder,
    adCost,
    TotalRevenue,
    cancellation,
    prepaid,
    returnVal,
    FinalTotalRevenue,
    AdGst,
    TotalAdCost,
    RevenueAfterCancellation,
    CodRAlessPrepaidRevenue,
    PrepaidRevenue,
    Revenueafter20,
    GST,
    PrepaidShipping,
    CODShipping,
    LabourCost,
    FixCost,
    MaterialCost,
    Paymoney,
    InteractCharges,
    TotalExp,
    Total,
    AdPercentageWithoutGST,
    AdPercentageWithGST,
    AdPercentageAfterCancellation,
    AdCostAfterReturn,
  } = location.state || {};


  return (
    <>
      <h1 className="heading">All Calculations</h1>
      <div className="results">
        <div className="allResults">
          <h4 className="values">ROAS: {roas || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Total Order: {totalOrder || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Total Revenue: {TotalRevenue || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Ad Cost: {adCost || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Ad GST: {AdGst || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Total Ad Cost: {TotalAdCost || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Cancellation: {cancellation || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Revenue after Cancellation: {RevenueAfterCancellation || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">Prepaid: {prepaid || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Prepaid Revenue: {PrepaidRevenue || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            COD RA less Prepaid Revenue: {CodRAlessPrepaidRevenue || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">Return: {returnVal || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Revenue after 20: {Revenueafter20 || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Final Total Revenue: {FinalTotalRevenue || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">GST: {GST || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Prepaid Shipping: {PrepaidShipping || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">COD Shipping: {CODShipping || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Labour Cost: {LabourCost || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Return loss: {LabourCost || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Fix Cost: {FixCost || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Material Cost: {MaterialCost || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Paymoney: {Paymoney || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Interact Charges: {InteractCharges || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">Total Expenses: {TotalExp || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">Total: {Total || "N/A"}</h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Ad % without GST: {AdPercentageWithoutGST || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Ad Cost % with GST: {AdPercentageWithGST || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Ad % after Cancellation: {AdPercentageAfterCancellation || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">
            Ad Cost after Return: {AdCostAfterReturn || "N/A"}
          </h4>
        </div>
        <div className="allResults">
          <h4 className="values">Total 2: {Total || "N/A"}</h4>
        </div>
      </div>
    </>
  );
};

export default PencilResult;
