const fs = require('fs');

const date = new Date();
const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

const jsonContent = {
  lastUpdated: formattedDate
};

fs.writeFileSync('./src/buildDate.json', JSON.stringify(jsonContent, null, 2));
