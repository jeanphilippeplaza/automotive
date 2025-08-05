async function renderDataList(brands, datas, elementDataList, imagesPath, minYear, years) {

  if (!brands || !datas || !elementDataList || !imagesPath || !minYear || !years) return;
  
  brands.forEach(brand => {
    if (brand.visible === true) {
      const row = document.createElement('div');
      const brandData = datas.filter(data => data.brand === brand.name);
      const cell = renderBrandLogo(brand, imagesPath);
      row.classList.add('row');
      row.appendChild(cell);
    
      if (brandData) {
        renderData(brandData, row, minYear, years);
      }

      elementDataList.appendChild(row);
    }
  });  
}

function renderData(brandData, row, minYear, years) {
  if (!brandData || !row || !minYear) return;

  brandData.forEach(data => {
    isYearVisible = years.find(( {year, visible} ) => data.year == year && visible != false);
    if (data.year > minYear && isYearVisible) {
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
    const years = [
      {
        year: 2020,
        visible: true
      },
      {
        year: 2021,
        visible: true
      },
      {
        year: 2022,
        visible: true
      },
      {
        year: 2023,
        visible: true
      },
      {
        year: 2024,
        visible: true
      },
      {
        year: 2025,
        visible: true
      }
    ];
    const minYear = 2020;

    let setYears = years;
    if (window.screen.width < 600 ) {
      setYears = years.map(item =>
        item.year === 2024 ? { ...item, visible: true } : { ...item, visible: false }
      );
      console.log(setYears);
    }

    if (brands && datas && elementDataList) {
      renderDataList(brands, datas, elementDataList, imagesPath, minYear, setYears);
    } else {
      console.error('Failed to fetch datas in init()');
    }
}

init();



class DataList {
  constructor(minYear, listOfYears) {
    this.minYear = minYear || 2020;
    this.listOfYears = listOfYears || {
        year: 2024,
        visible: true
      };
  }

  get listOfYears() {
    return this.listOfYears;
  }

  setVisibilityInListOfYears(element) {
    
  }
}