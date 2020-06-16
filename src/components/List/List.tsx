import React from "react";

export interface ListProps {} 

export const List: React.FC<ListProps> = ({
  ...props
}: ListProps) => {
  console.log("List.tsx:8:", props);
  return (
    <div>
      List
    </div>
  );
};
List.displayName="List";