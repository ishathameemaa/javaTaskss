
  function addNewWEField() {
    const weContainer = document.getElementById('we');
    const newField = document.createElement('textarea');
    newField.className = 'form-control weField mt-2';
    newField.placeholder = 'Enter here';
    newField.rows = 3;
    weContainer.appendChild(newField);
  }

  function addNewAQField() {
    const aqContainer = document.getElementById('aq');
    const newField = document.createElement('textarea');
    newField.className = 'form-control eqField mt-2';
    newField.placeholder = 'Enter here';
    newField.rows = 3;
    aqContainer.appendChild(newField);
  }