const ExcelJs = require("exceljs");
const { test, expect } = require("@playwright/test");

async function main(searchText, filePath, replaceText, newPrice, change) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet("Sheet1");

  const output = await readXl(worksheet, searchText);

  const cell = worksheet.getCell(output.row, output.col);
  cell.value = replaceText;

  const PriceCell = worksheet.getCell(
    output.row + change.rowChange,
    output.col + change.colChange
  );
  PriceCell.value = newPrice;

  await workbook.xlsx.writeFile(filePath);
}

async function readXl(worksheet, searchText) {
  let output = { row: -1, col: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        console.log(rowNumber);
        console.log(colNumber);

        output.row = rowNumber;
        output.col = colNumber;
      }
    });
  });
  return output;
}

// main("Navindu", "/Users/navindu/downloads/Book1.xlsx", "malith",35,{rowChange:0,colChange:2});

test.only("Download Update Excel", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

  // Start waiting for the download before clicking
  const downloadPromise = page.waitForEvent("download");
  await page.locator("#downloadButton").click();

  // Wait for the file to be downloaded
  const download = await downloadPromise;

  // Save the file somewhere
  const filePath = "/Users/navindu/downloads/download.xlsx";
  await download.saveAs(filePath);

  // Now you can call your Excel update logic
  await main("Apple", filePath, "malith", 35, {
    rowChange: 0,
    colChange: 2,
  });

  // Upload back if needed
  await page.locator("#fileinput").setInputFiles(filePath);

  await page.pause();


});
