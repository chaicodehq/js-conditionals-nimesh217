/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (!password || typeof password !== "string") {
    return "weak";
  }
  let criteriaMet = 0;
  let Upper = false;
  let lower = false;
  let isNumber = false;
  let isSpecial = false;
  if (password && password.length >= 8)
    criteriaMet++;
  for (let i = 0; i < password.length; i++) {
    let splchar = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    for (let x = 0; x < splchar.length; x++) {
      if (splchar[x] == password[i]) {
        isSpecial = true;
      }
    }

    if (password[i] >= 'A' && password[i] <= 'Z') {
      Upper = true;
    }

    if (password[i] >= 'a' && password[i] <= 'z')
      lower = true;
    if (password[i] >= '0' && password[i] <= '9')
      isNumber = true;
  }
  if (Upper) criteriaMet++;
  if (lower) criteriaMet++;
  if (isNumber) criteriaMet++;
  if (isSpecial) criteriaMet++;
  if (criteriaMet < 2)
    return "weak";
  else if (criteriaMet < 4) return "medium";
  else if (criteriaMet < 5) return "strong";
  else return "very strong";
}
