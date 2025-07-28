// Data Structure
const studentsDatabase: string[] = ["John", "Mary", "Bob", "David"]

// Finding a specific user
const findStudent = (allStudents: string[], studentName: string): void => {
  for (let i = 0; i < allStudents.length; i++) {
     if (allStudents[i] === studentName) {
       console.log(`Found ${studentName}`)
     }
   }
 };

 findStudent(studentsDatabase, "Mary")