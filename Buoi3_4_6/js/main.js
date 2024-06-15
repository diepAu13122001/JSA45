// edit du lieu ---------------------------------------
export function editItem(id) {}

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
