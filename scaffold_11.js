const fs = require('fs');
const path = require('path');

const schemaPath = path.join(__dirname, 'prisma/schema.prisma');
let content = fs.readFileSync(schemaPath, 'utf8');

// Replace enums with String defaults
content = content.replace(/UserRole\s+@default\(VIEWER\)/g, 'String @default("VIEWER")');
content = content.replace(/ProjectStatus\s+@default\(PLANNING\)/g, 'String @default("PLANNING")');
content = content.replace(/ProjectPriority\s+@default\(MEDIUM\)/g, 'String @default("MEDIUM")');
content = content.replace(/TaskStatus\s+@default\(TODO\)/g, 'String @default("TODO")');
content = content.replace(/TaskPriority\s+@default\(MEDIUM\)/g, 'String @default("MEDIUM")');

// Remove enum definitions
content = content.replace(/enum UserRole {[\s\S]*?}/g, '');
content = content.replace(/enum ProjectStatus {[\s\S]*?}/g, '');
content = content.replace(/enum ProjectPriority {[\s\S]*?}/g, '');
content = content.replace(/enum TaskStatus {[\s\S]*?}/g, '');
content = content.replace(/enum TaskPriority {[\s\S]*?}/g, '');

fs.writeFileSync(schemaPath, content);
console.log("Schema updated for SQLite.");
