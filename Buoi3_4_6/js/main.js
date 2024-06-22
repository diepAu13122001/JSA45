// edit du lieu ---------------------------------------
export function editItem(id) {
  // lay danh sach product tu local storage
  let product_list = JSON.parse(localStorage.getItem("cards"));

  // lay du lieu cu
  const current_product = product_list.filter((e) => e.id === id)[0];

  // thay doi du lieu (DOM)

  // tat popup
  document.getElementById("editPopup").classList.remove("show");
}

// bat popup
export function openPopup() {
  document.getElementById("editPopup").onclick = () => {
    document.getElementById("editPopup").classList.add("show");
  };
}

// xoa du lieu -----------------------------------------
export function deleteItem(id) {
  // lay du lieu
  const storage_cards = JSON.parse(localStorage.getItem("cards"));
  console.log(storage_cards);
  // xoa du lieu
  // cach 1
  for (let index = 0; index < storage_cards.length; index++) {
    if (storage_cards[index].id === id) {
      storage_cards.splice(index, 1);
    }
  }

  // cach 2
  // loc du lieu theo id
  //   const c = storage_cards?.filter((card) => card.id === id)[0];
  //   storage_cards.splice(storage_cards.indexOf(c), 1);

  // set lai du lieu cho local storage
  localStorage.setItem("cards", JSON.stringify(storage_cards));
  // reload trang hien tai
  location.reload();
}
