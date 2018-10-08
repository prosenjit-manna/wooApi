const puppeteer = require('puppeteer');
const url = 'https://woocommerce.github.io/woocommerce-rest-api-docs/#order-notes';
const id = '#order-note-properties';
const tablerow = id + ' + table tbody tr';



(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: false,

  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1600,
    height: 900
  })
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  await page.waitFor(3000);
  const tabledata =  await page.evaluate((id) => {
    const obj = {};
    var rows = document.querySelectorAll(id + ' + table tbody tr');
    rows.forEach((item, index) => {
      var row = `${id} + table tbody tr:nth-child(${index + 1})`
      var attr =  document.querySelector(`${row} td:nth-child(1)`);
      var type =  document.querySelector(`${row} td:nth-child(2)`);
      obj[attr.innerText] = type.innerText;
    })

    return obj;
  }, id)

  
  Object.keys(tabledata).forEach(key => {
    if (tabledata[key] === 'date-time') {
      tabledata[key] = 'Date';
    }
    if (tabledata[key] === 'integer') {
      tabledata[key] = 'number';
    }
    if (tabledata[key] === 'array') {
      tabledata[key] = 'Array<any>';
    }
  });

  
  var string = '';
  Object.keys(tabledata).forEach((key, index) => {
    if (index === 0) {
      string = '{';
    }

    if (tabledata[key] === 'number') {
      string +=  key + ':number;'
    }

    if (tabledata[key] === 'string') {
      string +=  key + ':string;'
    }

    if (tabledata[key] === 'Date') {
      string +=  key + ':Date;'
    }

    if (tabledata[key] === 'boolean') {
      string +=  key + ':boolean;'
    }

    if (index === (Object.keys(tabledata).length - 1)) {
      string += '}'
    }
  })
  // console.log(tabledata);
  console.log(string);
  await browser.close();


})();