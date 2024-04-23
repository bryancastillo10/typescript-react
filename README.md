Type Definitions:

```
// string type
const userName: string = "Bryan";

// number type
const age: number = 27;

// boolean
const isStudent: boolean = false;
```

Objects Definition

```
interface Props {
  name: string;
  age: number;
  email: string;
  getName: (name: string) => string;
}
```

getName here is a function which requires the
type of the argument (if it exists)
type of what it returns

Optional Declaration of Type
Example for Props

```
interface Props {
  name?: string;
  age?: number;
  email?: string;
}
```

Defining FC (functional component) and its props
Remember to import {FC} from "react";

```
export const Person: FC<Props> = ({ name, age, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
    </div>
  );
};

```

useState Hook needs type definition
import ChangeEvent and useState

```
 const [country, setCountry] = useState<string | null>("");

 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

```

It either accepts a string or a null value by using Union Type |

eNum, a special type used for real objects that exists at runtime

```
// TypeScript enum
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

// JavaScript object
const directionObj = {
    Up: 1,
    Down: 2,
    Left: 3,
    Right: 4,
};

```

Customizing some type

```
  type NameType = "Jack" | "Jill";
  const nameForType: NameType = "Jack";
```

CreateContext is the same type definition as of Object using Interface

```

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const NewContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Juan",
    age: 20,
    country: "Philippines",
  };

  return (
    <NewContext.Provider value={contextValue}>
      <div className="container">
        <Person name="Bryan" age={25} requests={Requests.Success} />
      </div>
    </NewContext.Provider>
  );
};

export default App;

```
