// Simple Exam Verification Script
// Usage: node verify-student.js <student_id>

const fs = require("fs");

// Load student data
const students = JSON.parse(fs.readFileSync("./sample-data/students.json"));

// Function to verify student by ID
function verifyStudent(studentId) {
  const student = students.find(s => s.student_id === studentId);

  if (!student) {
    console.log("❌ Student not found in the system.");
    return;
  }

  console.log("✅ Student Verified!");
  console.log("Name:", student.name);
  console.log("School/University:", student.school || student.university);
  console.log("Faculty:", student.faculty);
  console.log("Department:", student.department);
  console.log("Exam Center:", student.exam_center);
  console.log("Subjects/Modules Today:", student.subjects_today || student.modules_today);
  console.log("Biometric Face ID:", student.biometric.face_id);
}

// Example test (change student_id to test others)
verifyStudent("SHS2025-001");
