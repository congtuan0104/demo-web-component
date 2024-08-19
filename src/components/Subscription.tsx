import { FC } from "react";
import styles from "./Subscription.scss?inline";

export interface ISubscriptionProps {
  name: string;
  count: number;
  decrease?: () => void;
}

export const Subscription: FC<ISubscriptionProps> = ({
  name,
  count,
  decrease,
}: ISubscriptionProps) => {
  return (
    <>
      <style>{styles}</style>
      <div className="subscription">
        <p className="subscription__greeting">Hello {name}!</p>
        <h2 className="subscription__title">Count: {count}</h2>

        <button className="subscription__button" onClick={decrease}>Decrease</button>
      </div>
    </>
  );
};
