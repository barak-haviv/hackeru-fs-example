import { Lecturers } from '../types';

function LecturersView({ lecturers }: { lecturers: Lecturers }) {
  return (
    <div>
      <h1>LecturersView</h1>
      <div>
        {lecturers.map((lecturer) => (
          <div>{lecturer.name}</div>
        ))}
      </div>
    </div>
  );
}

export default LecturersView;
