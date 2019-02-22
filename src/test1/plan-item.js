import React, { useState } from 'react';

export default function PlanItem(props) {
  const [plan] = useState(props.plan);

  return <li>{plan.title}</li>;
}
