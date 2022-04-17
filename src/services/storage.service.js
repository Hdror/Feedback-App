function loadFromStorage(key) {
  console.log('kukibaluki');
    var val = localStorage.getItem(key)
    console.log(val);
    return val ? JSON.parse(val) : null
  }
  
  function saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val)
  }
  
  export const localStorageServices = {
    loadFromStorage,
    saveToStorage,
  }
  