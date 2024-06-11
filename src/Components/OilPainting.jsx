import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OilPainting = () => {
  const [roas, setRoas] = useState("");
  const [totalOrder, setTotalOrder] = useState("");
  const [adCost, setAdCost] = useState("");
  const [cancellation, setCancellation] = useState("2.6");
  const [prepaid, setPrepaid] = useState(71);
  const [returnVal, setReturnVal] = useState(22);

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
    const PrepaidShipping = PrepaidRevenue * 0.086; //8.6%
    const CODShipping = (Revenueafter20 * 14.87) / 100;
    const LabourCost = (TotalRevenue * 12.11) / 100;
    const FixCost = (TotalRevenue * 2.94) / 100;
    const MaterialCost = TotalRevenue * 0.1; //10%
    const Paymoney = PrepaidRevenue * 0.03; // 3% Paymoney
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
    const FinalTotal = LabourCost + FixCost + Total;
    const Scale25 = FinalTotal * 2.5;

    navigate("/panda-results", {
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
        FinalTotal,
        Scale25,
      },
    });
  };

  return (
    <>
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
    </>
  );
};

export default OilPainting;
