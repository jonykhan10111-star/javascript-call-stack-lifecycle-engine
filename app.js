/**
 * TITLE: Enterprise Bank Transfer Execution Engine (The Call Stack)
 * Component: Financial Transaction Processing Layer
 * Specification: ECMAScript 6+ Standard
 * Developer: JONY KHAN
 */

//===========================
//HOISTED UTILITY SUB SYSTEMS
//===========================

// Helper function for executing strict account balance verification
function verifyAccountBalance(amount) {

    // This executes at the very top of the running memory stack
    console.log(`[STACK 3] Veryfying wallet balance for: $${amount}...`);
}

// Helper function for executing transaction receipt email updates
function sendReceiptEmail() {

    // [STACK LAYER 3]:This executes independently when called by the manager thread
    console.log("[STACK 3] Success: Receipt email sent to client.");
}
//=============================
// CENTRAL ORCHESTRATION ENGINE
//=============================

// Main orchestration function managing the banking transaction sequential pipeline
function processBankTransfer(transferAmount) {

    // [STACK LAYER 2]: Main transfer process starts here
    console.log("[STACK 2] Transfer process started...");

    // Order of execution -> Invoking first helper to lock memory stack 3
    verifyAccountBalance(transferAmount);

    // Order of execution -> Invoking second helper to update transaction status
    sendReceiptEmail();
    
    console.log("[STACK 2] Transfer process completed successfully.");
}

//====================
// GOLOBAL RUNTIME RUN
//====================

const moneyToSend = 350;

//[STACK LAYER 1]: Triggering the central billing engine from global context
processBankTransfer(moneyToSend);


//=====================================
//MODULE 2: RECURSIVE SAFE GUARD ENGINE
//=====================================

// Strict parameter defining adsolute maximum memory limits to prevent crashes
const MAX_ALLOWED_DEPTH = 5;

// Main recursive function scanning system directories safely 
function analyzeDataFolder(currentDepth) {

    // Base case: If the current depth exceeds the maximum allowed depth, terminate recursion
    if (currentDepth > MAX_ALLOWED_DEPTH) {
        console.log(`[SAFETY ALERT] Maximum recursion depth of ${MAX_ALLOWED_DEPTH} reached! Stopping to prevent stack overflow.`);
        return "Safe Stop";
    }

    // Emitting current depth for monitoring purposes
    console.log(`[STACK LAYER ${currentDepth}] Processing nasted directory data layer...`);

    // Recursive Case -> Function invoking itself with modified counter increments
    return analyzeDataFolder(currentDepth + 1);
}

//===================
// RUNTIME DEPLOYMENT
//===================

console.log("\n---Recursive Directory Diagnostics Started---");
const processResult = analyzeDataFolder(1);
console.log(`[CLIENT REPORT] Final Execution Status: ${processResult}`);

//======================
//EXPECTED RUNTIME OUPUT
//======================
/*
STACK 2] Transfer process started...
[STACK 3] Veryfying wallet balance for: $350...
[STACK 3] Success: Receipt email sent to client.
[STACK 2] Transfer process completed successfully.
---Recursive Directory Diagnostics Started---
[STACK LAYER 1] Processing nasted directory data layer...
[STACK LAYER 2] Processing nasted directory data layer...
[STACK LAYER 3] Processing nasted directory data layer...
[STACK LAYER 4] Processing nasted directory data layer...
[STACK LAYER 5] Processing nasted directory data layer...
[SAFETY ALERT] Maximum recursion depth of 5 reached! Stopping to prevent stack overflow.
[CLIENT REPORT] Final Execution Status: Safe Stop
*/