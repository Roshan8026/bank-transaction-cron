"# bank-transaction-cron" 

step 1 :-> npm install   ( command excecute inside project)

step 2 :-> npm run dev or node server.js ( you can excecute any command for running server) 

step 3 :-> http://localhost:5000/api/transactions/create-transactions   ( this is endpoint you can execute in postman  to insert account entry with POST Method)

step 4 :-> You can test cron to run every minute ('* * * * *') and i used cron run at 9 every day in office hour