import { useEffect } from "react";

interface IBonusProps {
  loading: boolean;
  bonusName: string;
  current: number;
  burn: number;
  dateBurn: Date;
}

const Bonus = ({ loading }: IBonusProps) => {
  if (loading) {
    return <p>Loading</p>;
  }

  useEffect(() => {
    console.log("bonus");
  });

  return <>Bonus</>;
};

export default Bonus;
