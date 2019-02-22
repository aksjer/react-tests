import React, { useContext } from 'react';
import MyCustomContext from './my-custom-context';
import PlanItem from './plan-item';
import useFormInput from './useFormInput';
import useRetrievePlans from './useRetrievePlans';
import useWindowWidth from './useWindowWidth';
import useDocumentTitle from './useDocumentTitle';

export default function PlanList() {
  const [plans] = useRetrievePlans([]);
  const name = useFormInput('Me');
  const surname = useFormInput('You');
  const ctx = useContext(MyCustomContext);
  const width = useWindowWidth();
  useDocumentTitle(`${name.value} ${surname.value}`);

  const listItems = plans
    .sort((a, b) => b.priority - a.priority)
    .map(p => <PlanItem key={p.title} plan={p} />);

  return (
    <>
      <div>my context : {ctx}</div>
      <input {...name} />
      <input {...surname} />
      <label>
        my name is : {name.value} - {surname.value}
      </label>
      <ul>{listItems}</ul>
      <div>width : {width}</div>
    </>
  );
}
