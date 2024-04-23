import { FC, ChangeEvent, useState } from "react";

export enum Requests {
  Success = "200 HTTP Request is OK",
  Redirection = "300 HTTP Request Redirection",
  ClientError = "400 HTTP Request Error",
}

interface Props {
  name: string;
  age: number;
  email?: string;
  requests: Requests;
}
// Email is optional since it has ? on type definition

export const Person: FC<Props> = ({ name, age, email, requests }) => {
  const [country, setCountry] = useState<string | null>("");

  type NameType = "Jack" | "Jill";
  const nameForType: NameType = "Jack";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>

      <input
        type="text"
        placeholder="Write down your country"
        onChange={handleChange}
      />

      <div className="">{country}</div>
      <div className="">{requests}</div>
    </div>
  );
};
