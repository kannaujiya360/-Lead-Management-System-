import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";


export const exportToExcel = (leads) => {
  const worksheet = XLSX.utils.json_to_sheet(leads);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const fileData = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });

  saveAs(fileData, "lead-report.xlsx");
};


export const exportToPDF = (leads) => {
  const doc = new jsPDF();

  doc.text("Lead Analytics Report", 14, 15);

  const tableData = leads.map((lead) => [
    lead.name,
    lead.email,
    lead.phone,
    lead.source,
  ]);

  doc.autoTable({
    head: [["Name", "Email", "Phone", "Source"]],
    body: tableData,
    startY: 25,
  });

  doc.save("lead-report.pdf");
};
