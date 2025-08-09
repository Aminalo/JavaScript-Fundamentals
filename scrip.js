// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

//I start with the main function and add helper functions after
function getLearnerData(course, assignmentGroup, submissions) {
  try {
    //VALIDATION STEP 
    if (assignmentGroup.course_id !== course.id) {
      throw new Error(`AssignmentGroup does not belong to course ${course.id}`);
    }

    // Prepare data structures
    const results = []; // Final array we return
    const learnersMap = {}; // Temp object to group data by learner ID

    console.log("Validation passed. Starting data processing...");

    // We'll loop through submissions here

    return results;

  } catch (error) {
    console.error("Error in getLearnerData:", error.message);
    return []; 
  }
}

// Helper functions 


//Adding a Helper Function for Date Check
function isDue(dueDate) {
  const now = new Date();
  return new Date(dueDate) <= now; 
}

//Helper Functions for Penalty & Percentage
// I check if submission is late
function isLate(submittedAt, dueAt) {
  return new Date(submittedAt) > new Date(dueAt);
}

// I apply late penalty (10% of possible points)
function applyLatePenalty(score, pointsPossible) {
  const penalty = pointsPossible * 0.1;
  return score - penalty;
}

// I calculate percentage safely
function calculatePercentage(score, pointsPossible) {
  if (pointsPossible === 0) {
    throw new Error("Points possible cannot be zero.");
  }
  return score / pointsPossible;
}


// The Main Loop with Tests
function getLearnerData(course, assignmentGroup, submissions) {
  try {
    // VALIDATE RELATIONSHIP 
    if (assignmentGroup.course_id !== course.id) {
      throw new Error(`AssignmentGroup does not belong to course ${course.id}`);
    }
    console.log("✅ Course and AssignmentGroup match");

    const learnersMap = {}; // 

    // PROCESS EACH SUBMISSION 
    for (const sub of submissions) {
      const assignment = assignmentGroup.assignments.find(a => a.id === sub.assignment_id);

      if (!assignment) {
        console.warn(`⚠ Assignment ID ${sub.assignment_id} not found, skipping`);
        continue; // skip this submission
      }

      // I Skip if not yet due
      if (!isDue(assignment.due_at)) {
        console.log(`⏩ Skipping assignment ${assignment.id} (not yet due)`);
        continue;
      }

      let score = sub.submission.score;

      // I apply late penalty
      if (isLate(sub.submission.submitted_at, assignment.due_at)) {
        console.log(`📉 Late submission for assignment ${assignment.id}, applying penalty`);
        score = applyLatePenalty(score, assignment.points_possible);
      }

      // Calculate percentage
      const percentage = calculatePercentage(score, assignment.points_possible);

      if (!learnersMap[sub.learner_id]) {
        learnersMap[sub.learner_id] = {
          id: sub.learner_id,
          totalScore: 0,
          totalPoints: 0
        };
      }

      learnersMap[sub.learner_id][assignment.id] = Number(percentage.toFixed(3));
      learnersMap[sub.learner_id].totalScore += score;
      learnersMap[sub.learner_id].totalPoints += assignment.points_possible;

      console.log(`💾 Stored: Learner ${sub.learner_id}, Assignment ${assignment.id}, %=${percentage.toFixed(3)}`);
    }

    // ===== 4. BUILD FINAL RESULT =====
    const results = Object.values(learnersMap).map(learner => {
      const avg = learner.totalPoints ? learner.totalScore / learner.totalPoints : 0;
      const { id, totalScore, totalPoints, ...scores } = learner;
      return { id, avg: Number(avg.toFixed(3)), ...scores };
    });

    return results;

  } catch (error) {
    console.error("Error in getLearnerData:", error.message);
    return [];
  }
}
