// Header [{id, type, name, class=[], callback}]
// Row [{id, type, value, class=[], callback}]
function generateDataTable(headers, dataRows) {
    // Check if data is empty or invalid
    if (!data || data.length === 0) {
      document.getElementById('tableContainer').innerHTML = "<p>No data available</p>";
      return;
    }

    // Create the table element
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    // Create table header based on the keys of the first object
    let headerRow = document.createElement('tr');
    
    // Add header for each data field
    headers.forEach(header => {
      let th = document.createElement('th');
      th.textContent = header.name;
      th.classList = header.class
      th.id = header.id
      if(header.type === 'CHECKBOX') {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${index}`;
        th.appendChild(checkbox);
      }
      headerRow.appendChild(th);
    });
    // Add extra column for actions (checkbox, button, icon button)
    let thAction = document.createElement('th');
    thAction.textContent = 'Actions';
    headerRow.appendChild(thAction);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table rows based on the data
    data.forEach((item, index) => {
      let row = document.createElement('tr');
      headers.forEach(header => {
        let td = document.createElement('td');
        td.textContent = item[header] || '';  // Add empty string if the value is undefined or null
        row.appendChild(td);
      });

      // Add checkbox column
      let tdCheckbox = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `checkbox-${index}`;
      tdCheckbox.appendChild(checkbox);
      row.appendChild(tdCheckbox);

      // Add button column
      let tdButton = document.createElement('td');
      let button = document.createElement('button');
      button.textContent = 'Click Me';
      button.onclick = () => alert(`Button clicked for row ${index + 1}`);
      tdButton.appendChild(button);
      row.appendChild(tdButton);

      // Add icon button column (using Font Awesome icon as an example)
      let tdIconButton = document.createElement('td');
      let iconButton = document.createElement('button');
      iconButton.classList.add('icon-button');
      iconButton.innerHTML = '<i class="fas fa-edit"></i>'; // FontAwesome edit icon
      iconButton.onclick = () => alert(`Icon button clicked for row ${index + 1}`);
      tdIconButton.appendChild(iconButton);
      row.appendChild(tdIconButton);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Append the table to the container
    document.getElementById('tableContainer').innerHTML = '';  // Clear previous content
    document.getElementById('tableContainer').appendChild(table);
  }