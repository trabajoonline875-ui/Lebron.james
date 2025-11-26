const PRODUCTS = [
  { id:1, name:"Cono de Fresa", category:"Conos", price:"RD$ 95", images:[
    "https://images.unsplash.com/photo-1565958011703-44e2f7014a7a",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
  ]},
  { id:2, name:"Tarrina Chocolate", category:"Tarrinas", price:"RD$ 120", images:[
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f"
  ]},
  { id:3, name:"Paleta de Mango", category:"Paletas", price:"RD$ 85", images:[
    "https://images.unsplash.com/photo-1590080875831-392b89fddb3a"
  ]},
];

const grid = document.getElementById('grid');
const filters = document.getElementById('filters');
const overlay = document.getElementById('overlay');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImages = [];
let currentIndex = 0;

function renderFilters() {
  const categories = ["Todos", ...new Set(PRODUCTS.map(p => p.category))];
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.onclick = () => renderGrid(cat);
    filters.appendChild(btn);
  });
}

function renderGrid(category = "Todos") {
  grid.innerHTML = "";
  const filtered = category === "Todos" ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
      <img src="${p.images[0]}" alt="${p.name}" />
      <div class="info">${p.name} - ${p.price}</div>
    `;
    card.onclick = () => openLightbox(p.images, p.name);
    grid.appendChild(card);
  });
}

function openLightbox(images, caption) {
  currentImages = images;
  currentIndex = 0;
  updateModal(caption);
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
}

function updateModal(caption) {
  modalImage.src = currentImages[currentIndex];
  modalCaption.textContent = caption;
}

closeBtn.onclick = () => {
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateModal(modalCaption.textContent);
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateModal(modalCaption.textContent);
};

renderFilters();
renderGrid();
