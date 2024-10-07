import React from 'react';
import InputGrade2 from '../components/InputGrade2';
import InputGrade from '../components/InputGrade';

const GradePage = () => {
  //prettier-ignore
  return (
    <div className="text-center mt-5">
      <InputGrade/>
      <hr />
      <InputGrade2 />
    </div>
  );
};

export default GradePage;
