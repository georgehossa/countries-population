const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapp() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  async function getPageData() {
    await page.goto('https://www.worldometers.info/world-population/population-by-country/');
    const data = await page.evaluate(() => {
      const $countries = document.querySelectorAll('table#example2 tbody tr');
      const data = [];
      $countries.forEach(($country) => {
        data.push({
          id: $country.querySelector('td:nth-child(1)').innerText,
          name: $country.querySelector('td:nth-child(2) > a').innerText,
          population: $country.querySelector('td:nth-child(3)').innerText,
          yearChange: $country.querySelector('td:nth-child(4)').innerText,
        })
      });
      return {
        countries: data,
      }
    });
    fs.writeFile('./src/utils/data.json', JSON.stringify(data.countries), () => {
      console.log('data created');
    } )
    await browser.close();
  }
  getPageData();
};

scrapp();