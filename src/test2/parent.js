import React from 'react';

export default function ParentContainer(props) {
  console.log(props);
  return (
    <div>
      <div>i'm parent container</div>
      {props.render()}
      {props.children}
    </div>
  );
}
