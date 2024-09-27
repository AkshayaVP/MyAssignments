function getGrade(studentscore) {
    let grade;
    
    // Convert the score to a range by dividing by 10 (assuming a 100-point scale)
    switch (true) {
        case (studentscore >= 90 && studentscore <= 100):
            grade = 'A';
            break;
        case (studentscore >= 80 && studentscore < 90):
            grade = 'B';
            break;
        case (studentscore >= 70 && studentscore < 80):
            grade = 'C';
            break;
        case (studentscore >= 60 && studentscore < 70):
            grade = 'D';
            break;
        case (studentscore >= 0 && studentscore < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';  // For scores outside the valid range
    }
grade();

     
}
