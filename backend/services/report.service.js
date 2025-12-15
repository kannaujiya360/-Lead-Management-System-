const XLSX = require("xlsx");


const generateExcelReport = (leads, fileName = "leads.xlsx") => {
  const worksheet = XLSX.utils.json_to_sheet(leads);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
  XLSX.writeFile(workbook, fileName);
  return { success: true, fileName };
};

module.exports = {
  generateExcelReport,
};
