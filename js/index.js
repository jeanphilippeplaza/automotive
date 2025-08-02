async function renderDataList(brands, datas, elementDataList, imagesPath, minYear) {

  if (!brands || !datas || !elementDataList) return;
  
  brands.forEach(brand => {
    if (brand.use === true) {
      const row = document.createElement('div');
      const brandData = datas.filter(data => data.brand === brand.name);
      const cell = renderBrandLogo(brand, imagesPath);
      row.classList.add('row');
      row.appendChild(cell);
    
      if (brandData) {
        renderData(brandData, row, minYear);
      }

      elementDataList.appendChild(row);
    }
  });  
}

function renderData(brandData, row, minYear) {
  if (!brandData || !row || !minYear) return;

  brandData.forEach(data => {
    if (data.year > minYear) {
      const cell = renderBrandData(data);
      row.appendChild(cell);
    }
  });
}

function renderBrandLogo(data, imagesPath) {
  if (!data || !imagesPath) return;
  const cell = document.createElement('cell-brand');
  cell.setAttribute('image', imagesPath + data.logo);
  cell.setAttribute('alt', "Logo " + data.name);
  cell.setAttribute('brand', data.name);
  return cell;
}

function renderBrandData(data) {
  if (!data) return;
  const cell = document.createElement('cell-brand-data');
  cell.setAttribute('year', data.year);
  cell.setAttribute('debt', data.debt);
  cell.setAttribute('margin', data.net_margin);
  cell.setAttribute('turnover', data.turnover);
  cell.setAttribute('cars_sold', data.cars_sold);
  return cell
}

async function init() {
    console.log("init...");
    const brands = await fetchJSON('./json/brands.json');
    const datas = await fetchJSON('./json/datas.json');
    const elementDataList = document.getElementById('data-list');
    const imagesPath =  "./assets/logo/";
    const minYear = 2020;

    if (brands && datas && elementDataList) {
      renderDataList(brands, datas, elementDataList, imagesPath, minYear);
    } else {
      console.error('Failed to fetch datas in init()');
    }
}

init();
