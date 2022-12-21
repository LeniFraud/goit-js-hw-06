const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector(".gallery");

const createGalleryItems = (list, pictures) => {
  list.style.display = "flex";
  list.style.gap = "30px";
  list.style.listStyleType = "none";
  return pictures
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"></li>`)
    .join("");
};

const galleryItems = createGalleryItems(listRef, images);
listRef.insertAdjacentHTML("beforeend", galleryItems);

// const listItemsEl = images
//   .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"></li>`)
//   .join("");

// listEl.style.display = "flex";
// listEl.style.gap = "30px";
// listEl.style.listStyleType = "none";
// listEl.insertAdjacentHTML("beforeend", listItemsEl);
