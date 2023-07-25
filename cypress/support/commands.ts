import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentCommands from './commands/comment';
import * as ratingCommands from './commands/rating';
import * as searchCommands from './commands/search';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(ratingCommands);
Cypress.Commands.addAll(searchCommands);
// Cypress.Commands.overwrite('intercept', () => {
//     const FIXTURE_MODE = process.env.FITXURE_MODE;
//     if (FIXTURE_MODE === 'READ') {
//         readFixture(fixtureName);
//     }
//     if (FIXTURE_MODE === 'WRITE') {
//         const fixtureName = req.METHOD + req.url + hash(req.body);
//         createFixture(fixtureName, req.body);
//     }
//     if (FIXTURE_MODE === 'API') {
//     }
// })

export {};
