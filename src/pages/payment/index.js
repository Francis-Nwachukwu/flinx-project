import Layout from "layout";
import PaymentHeader from "./PaymentHeader";
import PaymentTable from "./PaymentTable";
import { useState } from "react";
import { samplePaymentData } from "utils/data";

const PaymentPage = () => {
  const [tableData, setTableData] = useState(samplePaymentData);

  return (
    <Layout>
      <PaymentHeader />
      <PaymentTable setTableData={setTableData} tableData={tableData} />
    </Layout>
  );
};

export default PaymentPage;
