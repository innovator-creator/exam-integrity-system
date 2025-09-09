// scripts/verify-staff.js
// Simple Exam Staff Verification Script
// Usage: node scripts/verify-staff.js <STAFF_ID>

const fs = require("fs");
const path = require("path");

// Path to sample-data/staff.json (must exist in your repo)
const staffPath = path.join(__dirname, "..", "sample-data", "staff.json");

let staff = [];
try {
  const raw = fs.readFileSync(staffPath, "utf8");
  staff = JSON.parse(raw);
} catch (err) {
  console.error("Error: could not load staff data at", staffPath);
  console.error("Make sure sample-data/staff.json exists in the repo.");
  process.exit(1);
}

function verifyStaff(staffId) {
  const s = staff.find(x => x.staff_id === staffId);
  if (!s) {
    console.log(`❌ Staff ID "${staffId}" not found in the system.`);
    return;
  }

  // Try several possible field names for backward compatibility
  const assignedCenter = s.assigned_center || s.exam_center || s.assignedCenter || "N/A";
  const contact = s.contact || s.phone || s.mobile || "N/A";
  const office = s.office || s.department || "N/A";
  const biometricFace = (s.biometric && (s.biometric.face_id || s.biometric.faceId)) || s.face_id || "N/A";

  console.log("✅ Staff Verified!");
  console.log("Name:", s.name || "N/A");
  console.log("Staff ID:", s.staff_id || "N/A");
  console.log("Role:", s.role || "N/A");
  console.log("Assigned Center:", assignedCenter);
  console.log("Office:", office);
  console.log("Contact:", contact);
  console.log("Biometric Face ID:", biometricFace);

  // Example of what you might log in a verification record
  const verificationRecord = {
    id: `log-staff-${Date.now()}`,
    staff_id: s.staff_id,
    name: s.name,
    role: s.role,
    result: "verified",
    timestamp: new Date().toISOString(),
    assigned_center: assignedCenter
  };

  console.log("\nVerification record (example):");
  console.log(JSON.stringify(verificationRecord, null, 2));
}

// Read input arg
const staffArg = process.argv[2];
if (!staffArg) {
  console.log("Usage: node scripts/verify-staff.js <STAFF_ID>");
  console.log("Example: node scripts/verify-staff.js SUP2025-001");
  process.exit(0);
}

verifyStaff(staffArg);
