export default interface Student {
  name: string;
  id: number;
}

type StudentCallback = (student: Student) => void;
type SubjectsCallback = (subjects: string[]) => void;
type MarksCallback = (mark: number) => void;

export { StudentCallback, SubjectsCallback, MarksCallback };
