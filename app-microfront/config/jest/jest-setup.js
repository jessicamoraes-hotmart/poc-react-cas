const path = require('path');
const { toHaveNoViolations } = require('jest-axe');
require('@testing-library/jest-dom/extend-expect');

require('dotenv').config({ path: path.resolve(__dirname, '../../env/.development') });
expect.extend(toHaveNoViolations);
