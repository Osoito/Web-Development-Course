import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as courseController from "./courseController.js";
import * as feedbacks from "./feedbacksService.js";

const app = new Hono();
    

app.get("/courses", courseController.showForm);
app.get("/courses/:id", courseController.showCourse);
app.get("/courses/:id/feedbacks/:rating", courseController.getFeedbacks);
app.post("/courses", courseController.createCourse);
app.post("/courses/:id", courseController.updateCourse);
app.post("/courses/:id/delete", courseController.deleteCourse);
app.post("/courses/:id/feedbacks/:rating", courseController.updateFeedbacks);


export default app;
