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
