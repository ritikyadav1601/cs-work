import "./Styles/calculation.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Calculation = () => {
  const [roas, setRoas] = useState("");
  const [totalOrder, setTotalOrder] = useState("");
  const [adCost, setAdCost] = useState("");
  const [cancellation, setCancellation] = useState("");
  const [prepaid, setPrepaid] = useState("");
  const [returnVal, setReturnVal] = useState("");

  const navigate = useNavigate();

  const handleCalculation = () => {
    const roasNum = parseFloat(roas);
    const adCostNum = parseFloat(adCost);
    const cancellationNum = parseFloat(cancellation);
    const prepaidNum = parseFloat(prepaid);
    const returnNum = parseFloat(returnVal);
    const totalOrderNum = parseFloat(totalOrder);

    if (
      isNaN(roasNum) ||
      isNaN(adCostNum) ||
      isNaN(cancellationNum) ||
      isNaN(prepaidNum) ||
      isNaN(returnNum) ||
      isNaN(totalOrderNum)
    ) {
      alert("Invalid input. Please ensure all inputs are valid numbers.");
      return;
    }

    const TotalRevenue = roasNum * adCostNum;
    const AdGst = adCostNum * 0.18; // 18% of AdCost
    const TotalAdCost = adCostNum + AdGst;
    const RevenueAfterCancellation =
      TotalRevenue - (TotalRevenue * cancellationNum) / 100;
    const PrepaidRevenue = (RevenueAfterCancellation * prepaidNum) / 100;
    const CodRAlessPrepaidRevenue = RevenueAfterCancellation - PrepaidRevenue;
    const Revenueafter20 =
      CodRAlessPrepaidRevenue - (CodRAlessPrepaidRevenue * returnNum) / 100;
    const FinalTotalRevenue = PrepaidRevenue + Revenueafter20;
    const GST = FinalTotalRevenue * 0.05; // 5% GST
    const PrepaidShipping =
      totalOrderNum * 40 * (1 - cancellationNum / 100) * (prepaidNum / 100);
    const CODShipping =
      totalOrderNum * 70 * (1 - cancellationNum / 100) * (29 / 100);
    const LabourCost = totalOrderNum * 1.7 * 20 * (1 - cancellationNum / 100);
    const FixCost = totalOrderNum * 1.7 * 10 * (1 - cancellationNum / 100);
    const MaterialCost = totalOrderNum * 1.7 * 20 * (1 - cancellationNum / 100);
    const Paymoney = TotalRevenue * 0.01; // 1% Paymoney
    const InteractCharges = totalOrderNum * 2;
    const TotalExp =
      TotalAdCost +
      GST +
      PrepaidShipping +
      CODShipping +
      LabourCost +
      FixCost +
      MaterialCost +
      Paymoney +
      InteractCharges;
    const Total = FinalTotalRevenue - TotalExp;
    const AdPercentageWithoutGST = (adCostNum * 100) / TotalRevenue;
    const AdPercentageWithGST = (TotalAdCost * 100) / TotalRevenue;
    const AdPercentageAfterCancellation =
      (TotalAdCost * 100) / RevenueAfterCancellation;
    const AdCostAfterReturn = (TotalAdCost * 100) / FinalTotalRevenue;

    console.log("Total Revenue: ", TotalRevenue);
    console.log("Ad GST: ", AdGst);
    console.log("Total Ad Cost: ", TotalAdCost);
    console.log("Revenue After Cancellation: ", RevenueAfterCancellation);
    console.log("Prepaid Revenue: ", PrepaidRevenue);
    console.log("COD Revenue after Return: ", CodRAlessPrepaidRevenue);
    console.log("Revenueafter20: ", Revenueafter20);
    console.log("Final Total Revenue: ", FinalTotalRevenue);
    console.log("GST: ", GST);
    console.log("Prepaid Shipping: ", PrepaidShipping);
    console.log("COD Shipping: ", CODShipping);
    console.log("Labour Cost: ", LabourCost);
    console.log("Fix Cost: ", FixCost);
    console.log("Material Cost: ", MaterialCost);
    console.log("Paymoney: ", Paymoney);
    console.log("Interact Charges: ", InteractCharges);
    console.log("Total Expenses: ", TotalExp);
    console.log("Total: ", Total);
    console.log("Ad Percentage Without GST: ", AdPercentageWithoutGST);
    console.log("Ad Percentage With GST: ", AdPercentageWithGST);
    console.log(
      "Ad Percentage After Cancellation: ",
      AdPercentageAfterCancellation
    );
    console.log("Ad Cost After Return: ", AdCostAfterReturn);

    navigate("/results", {
      state: {
        roas,
        totalOrder,
        TotalRevenue,
        adCost,
        cancellation,
        prepaid,
        returnVal,
        FinalTotalRevenue,
        CodRAlessPrepaidRevenue,
        AdGst,
        TotalAdCost,
        RevenueAfterCancellation,
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
      },
    });
  };

  return (
      <div className="main">
        <h1>Calculation</h1>

        <input
          type="number"
          placeholder="ROAS"
          className="inputs"
          value={roas}
          onChange={(e) => setRoas(e.target.value)}
        />
                
        <input
          type="number"
          placeholder="Total Order"
          className="inputs"
          value={totalOrder}
          onChange={(e) => setTotalOrder(e.target.value)}
        />
           
        <input
          type="number"
          placeholder="AdCost"
          className="inputs"
          value={adCost}
          onChange={(e) => setAdCost(e.target.value)}
        />

        <input
          type="number"
          placeholder="Cancellation"
          className="inputs"
          value={cancellation}
          onChange={(e) => setCancellation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Prepaid"
          className="inputs"
          value={prepaid}
          onChange={(e) => setPrepaid(e.target.value)}
        />

        <input
          type="number"
          placeholder="Return"
          className="inputs"
          value={returnVal}
          onChange={(e) => setReturnVal(e.target.value)}
        />

        <button className="inputs" onClick={handleCalculation}>
          Get Calculation
        </button>
      </div>
  );
};

export default Calculation;
