const puppeteer = require('puppeteer');
const url = 'https://woocommerce.github.io/woocommerce-rest-api-docs/#product-variations';
const id = '#product-variation-meta-data-properties';
const tablerow = id + ' + table tbody tr';



(async () => {
  const browser = await puppeteer.launch({
    // executablePath: '/Applications/google-chrome.app/Contents/MacOS',
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
      obj[attr.innerText.trim()] = type.innerText.trim();
    })
  
    return obj;
  }, id)
  console.log('properties length', Object.keys(tabledata).length)

  
  Object.keys(tabledata).forEach(key => {
    if (tabledata[key] === 'date-time') {
      tabledata[key] = 'Date';
    }
    if (tabledata[key] === 'integer') {
      tabledata[key] = 'number';
    }
    if (tabledata[key] === 'array') {
      tabledata[key] = 'array';
    }
  });
  // console.log(JSON.stringify(tabledata))

  
  var string = '';
  var className = id.split('-');
  className.forEach((item, index) => {
    if (index === 0) {
      const text = item.replace('#', '')
      string += 'export interface ' + text.charAt(0).toUpperCase() + text.slice(1);
    } else {
      string += item.charAt(0).toUpperCase() + item.slice(1);
    }
  });
  Object.keys(tabledata).forEach((key, index) => {
    if (index === 0) {
      string += '{ \n';
    }

    if (tabledata[key] === 'number') {
      string +=  key + '?:number; \n'
    }

    if (tabledata[key] === 'string') {
      string +=  key + '?:string; \n'
    }

    if (tabledata[key] === 'Date') {
      string +=  key + '?:Date; \n'
    }

    if (tabledata[key] === 'array') {
      string +=  key + '?:Array<any>; \n'
    }

    if (tabledata[key] === 'boolean') {
      string +=  key + '?:boolean; \n'
    }

    if (tabledata[key] === 'object') {
      string +=  key + '?:any; \n'
    }

    if (index === (Object.keys(tabledata).length - 1)) {
      string += '}'
    }
  })
  // console.log(tabledata);
  console.log(string);
  await browser.close();


})();