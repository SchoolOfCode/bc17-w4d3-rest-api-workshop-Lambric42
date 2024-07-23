import express from "express";

import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express();

app.use(express.json());

/* 

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

*/

// Task 1

/* Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */
//i am using async await to get the data from the function getAstronauts.

app.get(`/astronauts`, async (req, res) => {
  try {
    const astronauts = await getAstronauts();
    res.json({
      success: true,
      payload: astronauts,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      payload: "An error occurred",
    });
  }
});


// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */
//i will use the createAstronaut function to create a new astronaut.
// this involves sending in data from the request body and pushing (appending) it to the astronauts array.
//define variable astronauts to hold the data from the request body.
//use await createAstronaut function with astronauts as the argument.
//write error handling responses as in previous task.

app.post("/astronauts", async(req, res) => {
  try{
    const astronaut = await createAstronaut(req.body);
    res.json({
      success: true,
      payload: astronaut,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      payload: "An error occurred",
    });
  }
});



// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */

// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */

export default app;
