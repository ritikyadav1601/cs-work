import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShadowBox = () => {
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
        
        isNaN(prepaidNum) ||
        isNaN(returnNum)
        
      ) {
        alert("Invalid input. Please ensure all inputs are valid numbers.");
        return;
      }
  
      const TotalRevenue = roasNum * adCostNum;
      const AdGst = adCostNum * 0.18; // 18% of AdCost
      const TotalAdCost = adCostNum + AdGst;
     
      const PrepaidRevenue = (RevenueAfterCancellation * prepaidNum) / 100;
      const CodRAlessPrepaidRevenue = RevenueAfterCancellation - PrepaidRevenue;
      const Revenueafter20 =CodRAlessPrepaidRevenue - (CodRAlessPrepaidRevenue * returnNum) / 100;
      const FinalTotalRevenue = PrepaidRevenue + Revenueafter20;
      const GST = TotalRevenue * (5/100); // 5% GST
      const PrepaidShipping =
      ( ( totalOrderNum * prepaid)*100)/100;
      const CODShipping =
        (totalOrderNum *51/100)*136;
      const LabourCost = totalOrderNum *94;
      const FixCost = totalOrderNum *30;
      const MaterialCost = totalOrderNum *100;
      const Paymoney = TotalRevenue * (1/100); // 1% Paymoney
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
      const Total = TotalRevenue - TotalExp;
      const AdPercentageWithoutGST = (adCostNum * 100) / TotalRevenue;
      const AdPercentageWithGST = (TotalAdCost * 100) / TotalRevenue;
      const AdPercentageAfterCancellation =
        (TotalAdCost * 100) / RevenueAfterCancellation;
      const AdCostAfterReturn = (TotalAdCost * 100) / FinalTotalRevenue;
      const FinalTotal = LabourCost + MaterialCost + Total
  
      navigate("/shadowbox-results", {
        state: {
          roas,
          totalOrder,
          TotalRevenue,
          adCost,
          
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
          FinalTotal
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
          placeholder="Prepaid"
          className="inputs"
          value={prepaid}
          onChange={(e) => setPrepaid(e.target.value)}
        />

     

        <button className="inputs" onClick={handleCalculation}>
          Get Calculation
        </button>
      </div>
    
    </>
  )
}

export default ShadowBox