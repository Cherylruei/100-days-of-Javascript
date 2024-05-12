// slider 顯示數值
const widthSlider = document.getElementById('myWidth');
const heightSlider = document.getElementById('myHeight');
const widthSliderValue = document.getElementById('widthSliderValue');
const heightSliderValue = document.getElementById('heightSliderValue');

// 顏色選擇
const colorColumn = document.getElementById('color');
// 產生/清除 grid
const generateGridBtn = document.getElementById('generate');
const clearGridBtn = document.getElementById('clear');
// 繪畫/橡皮擦
const paintBtn = document.getElementById('paint');
const eraseBtn = document.getElementById('erase');
const resetGridBtn = document.getElementById('reset');
// 畫板展示Grid
const displayGrid = document.getElementById('displayGrid');

//初始值 paintStatus 為 true, 畫筆狀態
// 若 paintStatus 為 false, 橡皮擦狀態
let paintStatus = true;
paintBtn.style.backgroundColor = 'rgb(203, 32, 140)';
// reset mouseDown 狀態
let mouseDown = false;

// 產生 grid fn
const generateGrid = () => {
  const width = widthSlider.value;
  const height = heightSlider.value;
  displayGrid.innerHTML = '';

  for (let j = 0; j < height; j++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    displayGrid.appendChild(gridRow);
    for (let i = 0; i < width; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      row.id = `r${j + 1}-${i + 1}`;
      gridRow.appendChild(row);
    }
  }
  console.log(width, height);
};

// 清除 grid fn
const clearGrid = () => {
  displayGrid.innerHTML = '';
};

generateGridBtn.addEventListener('click', generateGrid);
clearGridBtn.addEventListener('click', clearGrid);

// slider 顯示數值
widthSlider.addEventListener('input', () => {
  console.log('WV', widthSlider.value);
  widthSliderValue.textContent = widthSlider.value;
});
heightSlider.addEventListener('input', () => {
  console.log('HV', heightSlider.value);
  heightSliderValue.textContent = heightSlider.value;
});

// 切換成 erase 狀態
eraseBtn.addEventListener('click', () => {
  paintStatus = false;
  eraseBtn.style.backgroundColor = 'rgb(203, 32, 140)';
  paintBtn.style.backgroundColor = 'lavender';
});

// 切換成 paint 狀態
paintBtn.addEventListener('click', () => {
  paintStatus = true;
  paintBtn.style.backgroundColor = 'rgb(203, 32, 140)';
  eraseBtn.style.backgroundColor = 'lavender';
});

// reset 所有背景顏色為白色
resetGridBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('.row');
  rows.forEach((row) => {
    row.style.backgroundColor = 'white';
  });
});

// 確認現在為 paint 還是 erase 狀態
displayGrid.addEventListener('mousedown', (e) => {
  mouseDown = true;
  console.log(e.target.id);
  if (mouseDown && e.target.classList.contains('row')) {
    if (paintStatus) {
      e.target.style.backgroundColor = colorColumn.value;
    } else {
      e.target.style.backgroundColor = 'white';
    }
  }
});

displayGrid.addEventListener('mouseup', () => {
  mouseDown = false;
});

displayGrid.addEventListener('mouseover', (e) => {
  if (mouseDown && e.target.classList.contains('row')) {
    if (paintStatus) {
      e.target.style.backgroundColor = colorColumn.value;
    } else {
      e.target.style.backgroundColor = 'white';
    }
  }
});
