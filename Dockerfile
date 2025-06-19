FROM cypress/included:cypress-14.4.0-node-22.16.0-chrome-136.0.7103.113-1-ff-139.0.1-edge-136.0.3240.76-1

WORKDIR /e2e

COPY . .

RUN npm install

CMD ["npx", "cypress", "run", "--browser", "firefox", "--spec", "cypress/e2e/15-hw-cypress-queries/**/*.cy.js"]