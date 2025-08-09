# JavaScript SBA – Learner Data Processing

## **Project Description**
This project processes course, assignment, and learner submission data to generate a final report for each learner, including:

- **Average score** across completed assignments.
- **Individual assignment percentages**.
- **Late penalties** applied where necessary.
- **Exclusion** of assignments not yet due.

The code demonstrates JavaScript fundamentals, including variables, loops, conditionals, functions, objects, arrays, and error handling.

---

## **How I Built It**

1. Understanding the Data
We started with three datasets:

- **CourseInfo** – basic course details.
- **AssignmentGroup** – assignments tied to the course.
- **LearnerSubmissions** – learner scores and submission dates.

Before processing, we verified:


(assignmentGroup.course_id === course.id) 
This ensures the assignments belong to the given course.


2. Breaking Down the Problem
To keep the code clean and reusable, I created helper functions:

function isLate(submittedAt, dueAt) { ... }
function applyLatePenalty(score, pointsPossible) { ... }
function calculatePercentage(score, pointsPossible) { ... }
These functions make testing and debugging easier.


3. Processing Submissions
For each submission:
Found the matching assignment with .find().
Skipped assignments that are not yet due.
Applied a 10% penalty for late submissions.
Calculated the percentage score.
Stored results in a temporary object (learnersMap).

We used:

continue to skip invalid or future submissions.
for...of loops for iteration.


4. Building the Final Output
After processing I:
Calculated each learner’s average score.
Removed temporary values (totalScore, totalPoints).
Used .map() to return the final format:

[
  { id: 125, avg: 0.985, '1': 0.94, '2': 1 },
  { id: 132, avg: 0.82, '1': 0.78, '2': 0.833 }
]

5. Error Handling
We used a try/catch block to:

Catch invalid data types.

Handle missing assignments.

Prevent crashes.


6. Testing the Code
After each major step, I tested:
Course/assignment relationship check.
Late penalty application.
Future assignment skipping.
Average score calculation.


## How to Run
Save the code in a .js file
Run with Node.js:
View results in the console

Example Output
[
  { id: 125, avg: 0.985, '1': 0.94, '2': 1 },
  { id: 132, avg: 0.82, '1': 0.78, '2': 0.833 }
]

Future Improvements
Accept penalty percentage as a parameter.

Output results in a formatted table.

Handle multiple courses at once.


## Reflection Questions
1. What could you have done differently during the planning stages to make execution easier?
I could have written pseudocode for each step before starting. This would have helped me visualize the flow and avoid rewriting logic.

2. Were there any requirements that were difficult to implement?
The late penalty logic was tricky at first. It would be easier with built-in date comparison utilities or a library like dayjs.

3. What would you add or change if given more time?
I’d make the program accept multiple courses and export results to a .csv file for easier reading.

4. Notes for my future self
Always break large problems into small helper functions. Test after every major change. And commit often — it’s much easier to track progress and roll back if something breaks.


