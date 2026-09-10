document.addEventListener('DOMContentLoaded', function () {
  
  // --- Search Functionality ---
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');

  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      const query = searchInput.value.trim();
      if (query) {
        const specsGrid = document.querySelector('.spec-grid');
        if (specsGrid) {
          specsGrid.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
  }


  // --- SVG Icons Injection ---
  // helper to safely insert svg into element by id
  function setIcon(id, svg) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = svg;
    }
  }

  const starIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z"/></svg>
  `;
  setIcon("icon-memory-js", starIcon);

  const shareIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z"/></svg>
  `;
  setIcon("icon-share-js", shareIcon);

  const compareIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M80-120v-80h360v-447q-26-9-45-28t-28-45H240l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280h-80v-80h247q12-35 43-57.5t70-22.5q39 0 70 22.5t43 57.5h247v80h-80l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280H593q-9 26-28 45t-45 28v447h360v80H80Zm585-320h150l-75-174-75 174Zm-520 0h150l-75-174-75 174Zm335-280q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/></svg>
  `;
  setIcon("icon-compare-js", compareIcon);

  const calendarIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
  `;
  setIcon("icon-calendar-js", calendarIcon);

  const processorIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T720-120H160Zm0-80h560v-560H160v560Zm80-80h200v-160H240v160Zm240-280h160v-120H480v120Zm-240 80h200v-200H240v200Zm240 200h160v-240H480v240ZM160-760v560-560Z"/></svg>
  `;
  setIcon("icon-processor-js", processorIcon);

  const storageIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z"/></svg>
  `;
  setIcon("icon-storage-js", storageIcon);

  const batteryIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-240q-50 0-85-35t-35-85v-240q0-50 35-85t85-35h540q50 0 85 35t35 85v240q0 50-35 85t-85 35H160Zm0-80h540q17 0 28.5-11.5T740-360v-240q0-17-11.5-28.5T700-640H160q-17 0-28.5 11.5T120-600v240q0 17 11.5 28.5T160-320Zm700-60v-200h20q17 0 28.5 11.5T920-540v120q0 17-11.5 28.5T880-380h-20Zm-700 20v-240h540v240H160Z"/></svg>
  `;
  setIcon("icon-battery-js", batteryIcon);

  const starReviewIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
  `;
  setIcon("icon-star-review-js", starReviewIcon);

  const cameraIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M456-600h320q-27-69-82.5-118.5T566-788L456-600Zm-92 80 160-276q-11-2-22-3t-22-1q-66 0-123 25t-101 67l108 188ZM170-400h218L228-676q-32 41-50 90.5T160-480q0 21 2.5 40.5T170-400Zm224 228 108-188H184q27 69 82.5 118.5T394-172Zm86 12q66 0 123-25t101-67L596-440 436-164q11 2 21.5 3t22.5 1Zm252-124q32-41 50-90.5T800-480q0-21-2.5-40.5T790-560H572l160 276ZM480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>
  `;
  setIcon("icon-camera-js", cameraIcon);

  const graphicsCardIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M520-360h120q33 0 56.5-23.5T720-440v-80q0-33-23.5-56.5T640-600H520v240Zm60-60v-120h60q8 0 14 6t6 14v80q0 8-6 14t-14 6h-60Zm-320 60h140q17 0 28.5-11.5T440-400v-40q0-17-11.5-28.5T400-480q17 0 28.5-11.5T440-520v-40q0-17-11.5-28.5T400-600H260v60h120v30h-80v60h80v30H260v60ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
  `;
  setIcon("icon-graphics-card-js", graphicsCardIcon);

  const macroIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M426-160q-9-26-23-48t-33-41q-19-19-41-33.5T281-306q2 29 14 54t32 45q20 20 45 32.5t54 14.5Zm108 0q29-3 54-15t45-32q20-20 32-45t15-54q-26 9-48.5 23T590-250q-19 19-33 41.5T534-160Zm59-407q47-47 47-113v-48l-70 59-90-109-90 109-70-59v48q0 66 47 113t113 47q66 0 113-47ZM440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-153q-86-14-143-80.5T240-680v-136q0-26 23-36.5t43 6.5l74 64 69-84q12-14 31-14t31 14l69 84 74-64q20-17 43-6.5t23 36.5v136q0 90-57 156.5T520-443v153q43-51 106-81t134-29v80q0 100-70 170T520-80h-80Zm40-569Zm127 416Zm-253 0Z"/></svg>
  `;
  setIcon("icon-macro-js", macroIcon);

  const wideIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M298.5-168.5Q208-177 120-200q-21-69-30.5-138.5T80-480q0-72 9.5-141.5T120-760q79-20 168-30t192-10q103 0 192 10t168 30q21 69 30.5 138.5T880-480q0 72-10 141.5T840-200q-88 23-178.5 31.5T480-160q-91 0-181.5-8.5ZM480-480Zm149 233.5q74-6.5 147-23.5 13-52 18.5-104t5.5-106q0-54-5.5-106T776-690q-65-15-137.5-22.5T480-720q-85 0-157.5 7.5T184-690q-13 52-18.5 104T160-480q0 54 5.5 106T184-270q73 17 147 23.5t149 6.5q75 0 149-6.5Z"/></svg>
  `;
  setIcon("icon-wide-js", wideIcon);

  const telephotoIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M479-359q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 279L309-250l57-57 114 114 113-113 56 56L479-80ZM249-309 79-479l170-170 57 57-114 114 113 113-56 56Zm116-345-56-56 170-170 170 170-57 57-114-114-113 113Zm344 345-57-57 114-114-113-113 56-56 170 170-170 170Z"/></svg>
  `;
  setIcon("icon-telephoto-js", telephotoIcon);

  const auxiliaryLensIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-480ZM160-160q-33 0-56.5-23.5T80-240v-240h80v240h480v-480H400v-80h240q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm40-160h400L465-500 360-360l-65-87-95 127Zm-40-240v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
  `;
  setIcon("icon-auxiliary-js", auxiliaryLensIcon);

  const plusIcon1 = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
  `;
  setIcon("icon-plus-js", plusIcon1);

});