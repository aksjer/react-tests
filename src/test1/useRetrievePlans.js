import { useEffect, useState } from 'react';

export default function useRetrievePlans(initialState) {
  const [plans, setPlans] = useState(initialState);
  useEffect(() => {
    setTimeout(() =>
      setPlans([
        { title: 'plan 1', priority: 2 },
        { title: 'plan 2', priority: 3 }
      ])
    );
  }, 1000);
  return [plans, setPlans];
}
